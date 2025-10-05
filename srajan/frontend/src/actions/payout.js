import axios from "axios";
import API_BASE_URL from "../config/api.js";

export async function getDoctorPayouts(userId) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await axios.get(`${API_BASE_URL}/api/payout/get-payouts`, {
      params: { userId },
    });
    return res.data; 
  } catch (error) {
    console.error("Error fetching payouts:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch payouts");
  }
}

export async function getDoctorEarnings(userId) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await axios.get(`${API_BASE_URL}/api/payout/get-earnings`, {
      params: { userId },
    });
    return res.data; // backend will return { earnings: { ... } }
  } catch (error) {
    console.error("Error fetching doctor earnings:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch doctor earnings");
  }
}

export async function requestPayout({userId, formData}) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await axios.post(`${API_BASE_URL}/api/payout/request`, {
      userId,
      paypalEmail: formData.get("paypalEmail"), 
    });

    return res.data; // { success: true, payout: {...} }
  } catch (error) {
    console.error("Error requesting payout:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to request payout");
  }
}