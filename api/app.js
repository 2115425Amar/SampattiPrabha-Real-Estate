import express from 'express';
const app = express();
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
app.use(express.json());
import cookieParser from 'cookie-parser';

// Use cookie-parser middleware
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send(`THIS IS HOMEPAGE`);
});

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8000, ()=>{
    console.log('server in running');
})