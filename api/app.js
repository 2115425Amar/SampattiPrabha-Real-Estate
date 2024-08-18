import express from 'express';
const app = express();
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

app.use(express.json());

// app.use('/',(req,res)=>{
//     res.send(`THIS IS HOMEPAGE`);
// });

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);

app.listen(8000, ()=>{
    console.log('server in running');
})