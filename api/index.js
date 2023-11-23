import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import AuthRouter from './routes/auth-route';

const app = express();


app.use(express.json());

app.use("/api/",AuthRouter);
// mongodb+srv://louisescark:<password>@cluster0.vxuzgb5.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://louisescark:MumNI83BlYXazFo5@cluster0.vxuzgb5.mongodb.net/?retryWrites=true&w=majority")
                .then(()=>console.log("DB is connected"))
                .then(() => app.listen(3030))
                .then(() => console.log('server is running!!'))
                .catch(err => console.log(err));


// Global Error

app.use((err,req,res,next)=> {

    const statusCode = err.statusCode || 500;
    const errMessage = err.message || 'Internal Server Error!';

    return res.status(statusCode).json({
        success : false,
        errMessage,
        statusCode
    });
});