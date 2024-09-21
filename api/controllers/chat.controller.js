import prisma from "../lib/prisma.js";

export const getChats = async (req, res)=>{

    console.log('Request userId:', req.userId); // Debugging line

    const tokenUserId = req.userId;

    if (!tokenUserId) {
        return res.status(400).json({ message: "User ID is missing" });
    }

    try{
        const chats = await prisma.chat.findMany({
            where:{
                userIDs:{
                    hasSome: [tokenUserId],
                },
            },
        });
        // console.log("get user kaam kar raha hai");
        const users = await prisma.user.findMany();
        res.status(200).json(chats);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get chats"});
    }
}


export const getChat = async (req, res)=>{
    try{
        // console.log("get user kaam kar raha hai");
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to get chat"});
    }
}

export const addChat = async (req, res)=>{
    try{
        // console.log("get user kaam kar raha hai");
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to add chat"});
    }
}

export const readChat = async (req, res)=>{
    try{
        // console.log("get user kaam kar raha hai");
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to read chat!"});
    }
}