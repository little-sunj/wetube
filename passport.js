import passport from "passport";
import User from "./models/User";

//serialization : which fields cookie will have. 
//cookie should be small as possible
//deserialization : get the cookie data and compare with the actual data

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
