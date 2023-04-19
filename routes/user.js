import express from "express";
import passport  from "passport";
import {getAdminStats, myProfile} from "../controllers/user.js";
import {logout , getAdminUsers }  from "../controllers/user.js";
import {isAuthenticated ,authorizeAdmin , } from "../middlewares/auth.js";

const router = express.Router();

    router.get(
        "/googlelogin",
        passport.authenticate("google",{

             scope:["profile"],
}       )
);
            router.get(
            "/login",
            passport.authenticate("google"),

            (req, res, next) =>
             {
                res.send("Logged In");
            }
        
        );


        router.get ( "/me", isAuthenticated, myProfile);
        router.get ( "/logout", logout);


       // Admin routes

       router.get("/admin/users" , isAuthenticated , authorizeAdmin , getAdminUsers);

                router.get("/admin/stats", isAuthenticated , authorizeAdmin, getAdminStats);

export default router;