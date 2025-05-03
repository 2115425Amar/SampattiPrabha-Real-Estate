import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
// import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import 'dotenv/config';

const app = express();

app.use(express.json());
// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Use cookie-parser middleware
app.use(cookieParser());

//cross-original policy
app.use(cors({
    origin: process.env.CLIENT_URL, // Ensure this matches http://localhost:5173
    credentials: true, // Allow cookies
}));

app.get('/',(req,res)=>{
    res.send(`THIS IS HOMEPAGE`);
});

app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute);
app.use("/api/test", testRoute);
app.use("/api/users",userRoute);
// app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

app.listen(8000, ()=>{
    console.log('server in running');
})