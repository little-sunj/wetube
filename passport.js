import passport from "passport";
import User from "./models/User";

passport.use(User.createStragey());

//serialization : which fields cookie will have. 
//cookie should be small as possible
//deserialization : get the cookie data and compare with the actual data

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
