import client from './openAIModel.js'


const instruction = `
You are an AI assistant helping restaurant owners reply to customer reviews.

Your task is to generate a polite, friendly, and professional reply based on the given review.


Rules:
- If the review is positive, thank the customer and appreciate their feedback.
- If the review is negative, apologize sincerely, acknowledge the issue, and say you will improve.
- If the review is neutral, respond politely and show appreciation.


Guidelines:
- Keep the response short to medium length.
- Make it sound natural and human-like (not robotic).
- Do not repeat the same phrases every time.
- Be respectful and professional in tone.
- Do not use line breaks or new lines (\n). Keep the reply in a single paragraph.
- Do not format like an email (no greetings like "Dear customer" or closings like "Best regards").
- Vary sentence structure and wording to avoid repetitive responses.

Now generate a reply for this review:
`

const generateAIReply = async (review, restaurantName = null) => {
  try {
    let finalInstruction = instruction;

    if (restaurantName) {
      finalInstruction += `\nYou are replying on behalf of ${restaurantName}.`;
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: finalInstruction },
        { role: "user", content: review }
      ]
    });

    const reply = response.choices[0].message.content;

    return reply;

  } catch (error) {
    console.log(`Error in generate-AI-Reply: ${error.message}`);
    throw error;
  }
};

export default generateAIReply;