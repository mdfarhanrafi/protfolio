
import { Router } from "express";

import AuthController from "../Controller/AuthController.js";

const router = Router()


router.post("/send-email",AuthController.sendEmail)



export default router;