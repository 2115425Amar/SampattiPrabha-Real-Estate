import express from 'express';
import cors from 'cors';
const app = express();
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
app.use(express.json());
import cookieParser from 'cookie-parser';

// Use cookie-parser middleware
app.use(cookieParser());

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));

app.get('/',(req,res)=>{
    res.send(`THIS IS HOMEPAGE`);
});

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

app.listen(8000, ()=>{
    console.log('server in running');
})