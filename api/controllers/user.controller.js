import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        // console.log("get user kaam kar raha hai");
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get users" });
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get user" });
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    // console.log(id, tokenUserId);
    //const body = req.body;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized" });
    }

    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        //update the user data
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });

        const { password: userPassword, ...rest } = updatedUser; // Exclude password from response

        res.status(200).json(rest);
        // console.log(updateUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update user" });
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    // console.log(id, tokenUserId);
    //const body = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized" });
    }
    try {
        await prisma.user.delete({
            where: { id }
        })
        res.status(200).json({ message: "User Deleted Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete user" });
    }
}



export const savePost = async (req, res) => {
    // const postId = req.params.postId;
    const postId = req.body.postId;
    const tokenUserId = req.userId;
    // console.log(postId, tokenUserId);

    try {
        const savedPost = await prisma.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId,
                },
            },
        });

        if (savedPost) {
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                },
            });
            res.status(200).json({ message: "Post removed from saved list" });
        }
        else {
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId,
                },
            });
            res.status(200).json({ message: "Post Saved" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to save post" });
    }
}


export const profilePosts = async (req, res) => {
    const tokenUserId = req.userId;  
    if (!tokenUserId) {
        return res.status(403).json({ message: "Not Authorized" });
    }
    // console.log("User ID from token:", tokenUserId);
    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: tokenUserId },
        });
        const saved = await prisma.savedPost.findMany({
            where: { userId: tokenUserId },
            include: {
                post: true,
            }
        });
        const savedPosts = saved.map(item => item.post)
        res.status(200).json({ userPosts, savedPosts });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile posts" });
    }
}


export const getNotificationNumber = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const number = await prisma.chat.count({
            where: {
                userIDs: {
                    hasSome: [tokenUserId],
                },
                NOT: {
                    seenBy: {
                        hasSome: [tokenUserId],
                    },
                },
            },
        });
        res.status(200).json(number);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile posts!" });
    }
};