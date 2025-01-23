import express from "express"
import multer from "multer";
import ProjectController from "../Controller/ProjectController.js";
const router = express.Router()



const upload = multer({ dest: "uploads/" });


router.post('/upload',upload.array("images", 3),ProjectController.store)
router.get('/get',ProjectController.show)
export default router