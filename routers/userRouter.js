import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";

import { 
    users
    , userDetail
    , editProfile
    , getEditProfile
    , changePassword 
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
//userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;