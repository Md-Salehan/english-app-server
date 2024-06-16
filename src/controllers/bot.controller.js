import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiErrors.js"
import { ApiResponse } from "../utils/apiResponce.js";
import {GoogleGenerativeAI} from "@google/generative-ai"

export const voicechatWithGeminai = asyncHandler(async (req, res) => {
    const { history, msg } = req.body
    console.log(history, msg);
    const API_KEY = process.env.API_GEMINAI_KEY
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const chat = model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    
console.log(msg, "xxxxxxxx");
    return res.status(200).json(
        new ApiResponse(200, {
            text,
            msg
        }, "Geminai AI Respond Successfully")
    )

})