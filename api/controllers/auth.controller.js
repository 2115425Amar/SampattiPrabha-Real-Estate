import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";   //model import

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        //HASH THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({
            message: "user created successfully",
            // newUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to create user!"});
    }


    //create a new user and save to db
}

export const login = (req, res) => {
    console.log(`asdfghjsdfghj`);
}

export const logout = (req, res) => {
    console.log(`asdfghjsdfghj`);
}