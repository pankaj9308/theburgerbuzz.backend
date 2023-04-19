import express from "express";
import { placeOrder} from "../controllers/order.js";
import { getMyOrders} from "../controllers/order.js";
import { getOrderDetails , getAdminOrders , processOrder ,placeOrderOnline , paymentVerification} from "../controllers/order.js";
import {  authorizeAdmin ,isAuthenticated  } from "../middlewares/auth.js";

const router = express.Router();



router.post( "/createorder", isAuthenticated,  placeOrder);


router.post( "/createorderonline" , isAuthenticated,  placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get( "/myorders", isAuthenticated , getMyOrders);

router.get( "/order/:id" , isAuthenticated , getOrderDetails );

// add admin middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin , getAdminOrders);

router.get("/admin/order/:id", isAuthenticated, authorizeAdmin , processOrder);

export default router;