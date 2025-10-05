import axios from "axios";
import API_BASE_URL from "../config/api.js";
export async function getPatientAppointments(userId) {

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/patient/get-patient-appointment?userId=${userId}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching patient appointments:", error);
    throw error;
  }
}
