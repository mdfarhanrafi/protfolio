
import { Router } from "express";

import SkillController from "../Controller/SkillController.js";

const router = Router()


router.post("/add",SkillController.store)
router.get("/get",SkillController.show)



export default router;