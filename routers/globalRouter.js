import express from "express";
import passport from "passport";
import routes from "../routes";
import { onlyPublic, onlyPrivate } from "../middlewares";
import { home, search } from "../controllers/videoController";
import { getJoin, 
    getMe,
    postJoin, 
    getLogin, 
    postLogin, 
    logout,
    githubLogin,
    postGithubLogIn } from "../controllers/userController";

export const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogIn
);

globalRouter.get(routes.me, getMe);

export default globalRouter;