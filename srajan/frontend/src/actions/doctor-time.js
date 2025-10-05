import axios from "axios";
import API_BASE_URL from "../config/api.js";
export async function setAvailabilitySlots({ formData, userId }) {
  if (!userId) {
    throw new Error("Unauthorized");
  }
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/doctor/set-availability?userId=${userId}`,
      formData,   // send formData in body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to set availability slots:", error);
    throw error;
  }
}

export async function getDoctorAvailability({ formData, userId }) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/doctor/get-availability?userId=${userId}`
    );
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error("Failed to fetch doctor availability:", error.message);

    // Re-throw the error so the caller can handle it
    throw new Error(
      error.response?.data?.message || "Failed to fetch doctor availability"
    );
  }
}


export async function getDoctorAvailabilityAPI(userId) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/doctor/get-availability?userId=${userId}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching doctor availability:", error);
    throw error;
  }
}

export async function getDoctorAppointments(userId) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/api/doctor/get-appointment?userId=${userId}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching doctor availability:", error);
    throw error;
  }
}

export async function cancelAppointment({ formData, userId }) {

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const appointmentId = formData.get("appointmentId");

  if (!appointmentId) {
    throw new Error("Appointment ID is required");
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/appointments/cancel-appointment`, // your backend endpoint
      {
        userId,
        appointmentId,
      }
    );

    if (response.data.success) {
      return { success: true };
    } else {
      throw new Error(response.data.error || "Failed to cancel appointment");
    }
  } catch (error) {
    console.error("Cancel appointment failed:", error);
    throw new Error(error.response?.data?.error || error.message);
  }
}

export async function addAppointmentNotes({ formData, userId }) {

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {

    const res = await axios.post(
      `${API_BASE_URL}/api/appointmentss/add-notes-to-appointment`, formData
    );

    return res.data; // { success: true, appointment: {...} }
  } catch (error) {
    console.error("Failed to add appointment notes:", error);
    throw new Error(
      error.response?.data?.error || "Failed to add appointment notes"
    );
  }
}

export async function markAppointmentCompleted({ formData, userId }) {
  try {
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const res = await axios.post(
      `${API_BASE_URL}/api/appointments/mark-appointment-complete`,
      formData
    );

    return res.data; // contains { success: true, appointment }
  } catch (error) {
    console.error("Failed to mark appointment as completed:", error);
    throw new Error(
      error.response?.data?.error || "Failed to mark appointment as completed"
    );
  }
}