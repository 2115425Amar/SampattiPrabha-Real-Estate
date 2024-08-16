import express from 'express';
const app = express();
import postRoute from "./routes/post.route.js"
// app.use('/',(req,res)=>{
//     res.send(`asdfghjsdfghj`);
// })

app.use("/api/posts",postRoute);
app.listen(8000, ()=>{
    console.log('server in running');
})