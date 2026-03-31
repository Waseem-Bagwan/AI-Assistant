import generateAIReply from "../services/ai.service.js";

export const generateReply = async (req,res) => {
    const { review , restaurantName } = req.body;
    try {
        if(!review){
            return res.status(400).json({
                message: "Review is required"
            })
        }

        if(typeof review !== 'string' || restaurantName && typeof restaurantName !== 'string'){
            return res.status(400).json({
                message: "Invalid input type"
            })
        }

        if(review.length < 4){
                return res.status(400).json({
                    message: "review must be more than 4 characters"
                })
        }

        const aiReply = await generateAIReply(review,restaurantName) 

        res.status(200).json({
            success: true,
            reply: aiReply
        })


    } catch (error) {
        console.log(`Error in generate-reply controller: ${error.message}`),
        res.status(500).json({
            message: "Internal server error"
        })
    }
}