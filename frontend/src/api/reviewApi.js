import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateReply = async ({ review, restaurantName }) => {
  const response = await api.post("/api/v1/reviews/generate-reply", {
    review,
    restaurantName,
  });
  return response.data;
};

export default api;