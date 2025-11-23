import { GoogleGenAI } from "@google/genai";
import { GEMINI_MODEL } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateInsight = async (prompt: string, contextData: string): Promise<string> => {
  try {
    const fullPrompt = `
      You are Nexus AI, an intelligent assistant for a high-end consultancy and accounting firm.
      
      Here is the current relevant data context in JSON format:
      ${contextData}

      User Query: ${prompt}

      Instructions:
      1. Analyze the data provided to answer the user's query accurately.
      2. If the user asks for a draft (email, report), write it professionally.
      3. Keep responses concise but insightful.
      4. Use markdown formatting for readability.
      5. If the data doesn't contain the answer, state that clearly but offer a logical hypothesis based on standard business practices.
    `;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: fullPrompt,
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the Nexus AI brain right now. Please check your API key or internet connection.";
  }
};