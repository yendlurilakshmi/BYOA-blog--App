import express from 'express';
import mongoose from'mongoose';
// import router from './routes/Router';
// import Router from '../routes/User';
const app = express();

// app.use("/api/user",userRouter)
// app.use('/api/user',Router)
 

mongoose.connect('mongodb://127.0.0.1:27017/').then(()=>{
    console.log('mongodb is connected')
}).catch((err)=>{
    console.log(err)

})


app.listen(5000,(()=>{
    console.log('server is running')
}))