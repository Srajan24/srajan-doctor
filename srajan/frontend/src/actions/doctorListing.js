import axios from "axios";
import API_BASE_URL from "../config/api.js";

export async function getDoctorBySpeciality(speciality) {
    try {
        console.log('called')
        const res = await axios.get(
            `${API_BASE_URL}/api/doctor/speciality?speciality=${encodeURIComponent(speciality)}`
        );
        return res.data;
    } catch (error) {
        console.error("Error fetching doctors:", error);
        return { error: "Failed to fetch doctors" };
    }
}
