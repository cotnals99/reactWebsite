import express from "express";
import { registerUser, loginUser } from "../Controllers/AuthController.js";

const router = express.Router()

router.get('/', async(req, res)=>{
    res.send("Auth router")
})

router.post('/register', registerUser)
router.post('/login', loginUser)


export default router