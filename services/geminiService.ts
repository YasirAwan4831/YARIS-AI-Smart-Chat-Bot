import { GoogleGenAI, Content } from "@google/genai";
import { Message, Role } from "../types";

// Initialize the Gemini client
// Using process.env.API_KEY as mandated
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

export const generateChatResponseStream = async (
  history: Message[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<string> => {
  try {
    // Transform local message format to Gemini Content format
    const formattedHistory: Content[] = history.map((msg) => ({
      role: msg.role === Role.USER ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    // Create a chat session with the history
    const chat = ai.chats.create({
      model: MODEL_NAME,
      history: formattedHistory,
      config: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    });

    // Send the message and get a stream
    const result = await chat.sendMessageStream({ message: newMessage });

    let fullText = "";

    for await (const chunk of result) {
      const text = chunk.text;
      if (text) {
        fullText += text;
        onChunk(text);
      }
    }

    return fullText;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

export const generateConversationTitle = async (firstMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Generate a very short, concise title (max 5 words) for a conversation that starts with: "${firstMessage}". Do not use quotes.`,
    });
    return response.text?.trim() || "New Conversation";
  } catch (e) {
    return "New Conversation";
  }
};