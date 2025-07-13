import JWT from "jsonwebtoken";
import prisma from "../lib/prisma.js"; //model import

export const getPosts = async (req, res) => {
  const query = req.query;
  console.log(query);

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
    res.status(200).json(posts);
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

// ------------------------------------------------
const verifyToken = (token) => {
  // console.log("Verifying token:", token);
  if (!token) return null; // If no token is provided, return null
  return new Promise((resolve) => {
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) return resolve(null); // If token is invalid or expired, resolve as null
      resolve(payload.id); // If token is valid, resolve with the user ID
    });
  });
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    let userId = null;
    const token = req.cookies?.token;

    if (token) {
      userId = await verifyToken(token);
    }

    let saved = null;

    // Only check if the post is saved if the userId is not null
    if (userId) {
      saved = await prisma.savedPost.findUnique({
        where: {
          userId_postId: {
            postId: id,
            userId: userId,
          },
        },
      });
    }
    res.status(200).json({ ...post, isSaved: !!saved }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

// --------------------------------------------------

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

// console.log("Request Body:", body);
// console.log("Formatted Data:", {
//   ...body.postData,
//   userId: tokenUserId,
//   postDetail: {
//     create: body.postDetail,
//   },
// });


  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" ,err});
  }
};

// ------------------------------------------------------------------------

export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};


export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};