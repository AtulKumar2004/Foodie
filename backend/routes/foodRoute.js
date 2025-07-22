import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"
import { protectRoute } from "../middleware/auth.middleware.js";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", protectRoute,upload.single('image'), addFood);

export default foodRouter;