import axios from "axios";
import API_BASE_URL from "../config/api.js";

// Get available doctors for instant calls
export async function getAvailableDoctors() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/instant-call/available-doctors`);
    return res.data;
  } catch (error) {
    console.error("Error fetching available doctors:", error);
    throw error;
  }
}

// Request instant call
export async function requestInstantCall({ userId, doctorId, reason }) {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/instant-call/request`, {
      userId,
      doctorId,
      reason,
    });
    return res.data;
  } catch (error) {
    console.error("Error requesting instant call:", error);
    throw error;
  }
}

// Get patient's call status
export async function getPatientCallStatus(userId) {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/instant-call/patient/status`, {
      params: { userId },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching call status:", error);
    throw error;
  }
}

// Get doctor's pending calls
export async function getDoctorPendingCalls(userId) {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/instant-call/doctor/pending`, {
      params: { userId },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching pending calls:", error);
    throw error;
  }
}

// Doctor responds to instant call
export async function respondToInstantCall({ userId, callId, action }) {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/instant-call/respond`, {
      userId,
      callId,
      action, // "accept" or "reject"
    });
    return res.data;
  } catch (error) {
    console.error("Error responding to call:", error);
    throw error;
  }
}

// Toggle doctor availability
export async function toggleInstantCallAvailability({ userId, isAvailable }) {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/instant-call/doctor/toggle-availability`, {
      userId,
      isAvailable,
    });
    return res.data;
  } catch (error) {
    console.error("Error toggling availability:", error);
    throw error;
  }
}

// End instant call
export async function endInstantCall({ userId, callId }) {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/instant-call/end`, {
      userId,
      callId,
    });
    return res.data;
  } catch (error) {
    console.error("Error ending call:", error);
    throw error;
  }
}
