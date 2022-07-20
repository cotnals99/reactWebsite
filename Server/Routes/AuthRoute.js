import express from "express";
import { registerUser } from "../Controllers/AuthController.js";

const router = express.Router()

router.get('/', async(req, res)=>{
    res.send("Auth router")
})

router.post('/register', registerUser)


export default router