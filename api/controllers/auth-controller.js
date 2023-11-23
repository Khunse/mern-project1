import 'dotenv/config.js'
import bcryptjs from 'bcryptjs';
import AuthUser from '../models/AuthUser.js';
import { invalidModelError } from '../utilities/custom-error.js';
import jwt from 'jsonwebtoken';


export const loginUser = async (req,res,next) => {

        const  {email,password} = req.body;
        let userInfo;
        try {
            userInfo = await AuthUser.findOne({email});
        if(!userInfo) return next(invalidModelError(403,'user not exist!'));
            const IsValidPassword = bcryptjs.compareSync(password,userInfo.password);

            if(!IsValidPassword) return next(invalidModelError(430, 'wrong password!'));
            const accessToken = generateAccessToken(userInfo.id);

            return res.cookie('access_token',accessToken,{httpOnly : true}).status(200).json({accessToken : accessToken});
        } catch (error) {
            return next(error);   
        }
};

function generateAccessToken(userId) {

    const accessToken = jwt.sign({userId},process.env.ACCESS_TOKEN,{expiresIn: '10s'});

    return accessToken;
  }


 

export const signUpUser = async (req,res,next) =>{
console.log("in auth controller!!")
    let {userData} = req.body;
console.log("user data :: ",userData)
console.log('req data ',req.body);
    let checkUser;

    try {
          checkUser = await  AuthUser.findOne({email: userData.userEmail})
    } catch (error) {
        console.log(error);
        next(error)
    }
        console.log("user data ",checkUser)
        if(checkUser) return res.status(404).json({message : 'user already exist!',status: 404});
        try {
            const newUser = new AuthUser({
                name: userData.userName,
                email : userData.userEmail,
                password : bcryptjs.hashSync(userData.userPassword)
            });
console.log('new suser',newUser)
            await newUser.save();
        return res.status(200).json({message : 'user created Success!',status: 200,success: true});

        } catch (error) {
            console.log(error);
        // return res.status(500).json({message : error})
        next(invalidModelError(433,error));
        }

}