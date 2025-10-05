import mongoose from "mongoose";

const instantCallSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed", "cancelled"],
      default: "pending",
    },
    videoSessionId: { type: String }, // Agora channel name
    videoToken: { type: String }, // Agora token
    patientReason: { type: String }, // Why patient needs emergency call
    doctorNotes: { type: String }, // Doctor's notes after call
    startTime: { type: Date }, // When call actually started
    endTime: { type: Date }, // When call ended
    duration: { type: Number }, // Call duration in minutes
    creditsDeducted: { type: Number, default: 3 }, // Emergency calls cost more
  },
  { timestamps: true }
);

export default mongoose.model("InstantCall", instantCallSchema);
