import axios from "axios";
import prisma from "../lib/prisma.js";

export const getRecommendations = async (req, res) => {
    try {
        // const userId = "68794c915758efb627010b55";      // for testing

        const userId = req.userId;
        // console.log("User ID:", userId);
        if (!userId) return res.status(400).json({ message: "userId is required" });

        // Fetch user with their saved posts and posts
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                posts: true,
                savedPosts: { include: { post: true } },
            },
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        // Fetch all available properties (posts)
        const properties = await prisma.post.findMany({ take: 100 }); // Limit for performance, adjust as needed

        const profileForML = {
            saved_posts: user.savedPosts.map((sp) => ({
                id: sp.post.id,
                title: sp.post.title,
                location: sp.post.location,
                price: sp.post.price,
                bedrooms: sp.post.bedrooms,
                description: sp.post.description,
            })),
            properties: properties.map((p) => ({
                id: p.id,
                title: p.title,
                location: p.location,
                price: p.price,
                bedrooms: p.bedrooms,
                description: p.description,
            })),
        };

        // Send user data and property catalog to ML service
        const mlRes = await axios.post(process.env.ML_SERVICE_URL, profileForML);
        res.json(mlRes.data);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get recommendations" });
    }
};
