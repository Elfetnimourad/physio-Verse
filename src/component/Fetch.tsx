import {OpenAI} from "openai";
const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});
export default openai
//AIzaSyAgeS0o-2hTK7ayE0Td95Ol9ntiREUmKfo