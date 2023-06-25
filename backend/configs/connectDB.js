const mongoose=require('mongoose');
 
const connectDB=async()=>{
try {
    const connect= await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB connected to ${connect.connection.host}`)
} catch (error) {
    console.log(error);
    process.exit(1);
}
    

}
// const startServer=async()=>{
//     try {
//       await connectDB();
//       app.listen(port,()=>{
//           console.log(`the app is listening to ${port}`);
//       })
//     } catch (error) {
//       console.log(error);
//     } ;
     
//   }
//   startServer();

module.exports=connectDB;