import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";

dotenv.config();

async function listUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB\n");

    const users = await User.find({}).sort({ createdAt: -1 });

    if (users.length === 0) {
      console.log("No users found.");
      process.exit(0);
    }

    console.log(`Total users: ${users.length}\n`);

    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Role: ${user.role}`);
      console.log(`   Clerk ID: ${user.clerkUserId}`);
      console.log("");
    });

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

listUsers();
