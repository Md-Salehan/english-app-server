import { Router } from "express";
import { voicechatWithGeminai } from "../controllers/bot.controller.js";

const router = Router()


router.route("/voicechat/geminai").post(voicechatWithGeminai)


export default router;