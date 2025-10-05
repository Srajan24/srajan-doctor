import express from "express";
import {
  getAvailableDoctors,
  requestInstantCall,
  respondToInstantCall,
  getDoctorPendingCalls,
  getPatientCallStatus,
  toggleInstantCallAvailability,
  endInstantCall,
} from "../controllers/instantCall_controller.js";

const instantCall_router = express.Router();

// Patient routes
instantCall_router.get("/available-doctors", getAvailableDoctors);
instantCall_router.post("/request", requestInstantCall);
instantCall_router.get("/patient/status", getPatientCallStatus);
instantCall_router.post("/end", endInstantCall);

// Doctor routes
instantCall_router.get("/doctor/pending", getDoctorPendingCalls);
instantCall_router.post("/respond", respondToInstantCall);
instantCall_router.post("/doctor/toggle-availability", toggleInstantCallAvailability);

export default instantCall_router;
