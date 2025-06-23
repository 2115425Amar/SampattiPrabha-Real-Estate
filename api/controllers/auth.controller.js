import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js"; //model import
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { username },
        });
        const existingEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser || existingEmail) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist",
            });
        }

        //HASH THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        // console.log(newUser);

        res.status(201).json({
            message: "User created successfully",
            // newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

export const login = async (req, res) => {
    //console.log(`asdfghjsdfghj`);
    const { username, password } = req.body;

    try {
        //validation on email & password
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details successfully",
            });
        }

        //check for registered user
        const user = await prisma.user.findUnique({
            where: { username },
        });

        //if not a regitered user
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered",
            });
        }

        const payload = {
            id: user.id,
            isAdmin: false,
        };
        //  console.log("id aya kya");
        // console.log(payload.id);

        //verify password and generate a JWT taken
        if (await bcrypt.compare(password, user.password)) {
            //password matched
            let token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
                expiresIn: "2h",
            });

            // user =  prisma.user.toObject();
            // user.token = token;
            // user.password = undefined;

            const { password: userPassword, ...userInfo } = user;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
                httpOnly: true,
                sameSite: "Lax", // "None" if frontend and backend are on different domains in production
                secure: process.env.NODE_ENV === "production", // set true for https
            };

            res.cookie("token", token, options).status(200).json(userInfo);
        } else {
            //password does not found
            return res.status(403).json({
                success: false,
                message: "Password Incorrect",
            });
        }
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error while logging in",
        });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({
        message: "Logout Successful",
    });
};