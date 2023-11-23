import express from 'express';
import {loginUser, signUpUser} from '../controllers/auth-controller'

const AuthRouter = express.Router();

AuthRouter.post("/signup",signUpUser);
AuthRouter.post("/sigin",loginUser);


export default AuthRouter;