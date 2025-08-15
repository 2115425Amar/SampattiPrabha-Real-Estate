// lib/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateDescription = async (row) => {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
// console.log(models);

  const prompt = `Write a short real estate description for a property with:
    Title: ${row.title}
    Address: ${row.address}
    Price: ${row.price}
    ${row.bedroom || "N/A"} bedrooms, ${row.bathroom || "N/A"} bathrooms,
    Type: ${row.type}, Property: ${row.property}`;
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};
