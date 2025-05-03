// -------------------------------------------------------

// export const getPost = async (req, res) =>{
//     const id = req.params.id;
//     try{
//         const post = await prisma.post.findUnique({
//              where:{id},
//              include: {
//                 postDetail: true,
//                 user: {
//                     select:{
//                         username:true,
//                         avatar:true
//                     }
//                 },
//              },
//             }
//         );

//         let userId;

//         const token = req.cookies?.token;

//         if(!token){
//             userId = null;
//         }
//         else{
//             JWT.verify(token, process.env.JWT_SECRET_KEY, async(err, payload)=>{
//                 if(err){
//                     userId = null;
//                 }else{
//                     userId = payload.id;
//                 }
//             });
//         }

//         const saved = await prisma.savedPost.findUnique({
//             where:{
//                 userId_postId :{
//                     postId: id,
//                     userId,
//                 }
//             }
//         })

//         res.status(200).json({...post, isSaved: saved ? true : false});
//     }catch(err){
//         console.log(err)
//         res.status(500).json({message:"Failed to get post"})
//     }
// }