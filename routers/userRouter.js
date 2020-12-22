import express from "express";
import routes from "../routes";
import { onlyPrivate, uploadAvatar } from "../middlewares";

import { 
    users
    , userDetail
    , postEditProfile
    , getEditProfile
    , getChangePassword
    , postChagnePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChagnePassword);
//userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;