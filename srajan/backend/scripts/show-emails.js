import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";
import fs from "fs";

dotenv.config();

async function showEmails() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const users = await User.find({}).select('email name role').sort({ createdAt: -1 });

    const output = users.map((user, i) => 
      `${i + 1}. ${user.email} - ${user.name} (${user.role})`
    ).join('\n');

    // Write to file
    fs.writeFileSync('users-list.txt', output);
    
    console.log("Users saved to users-list.txt");
    console.log("\nAll users:");
    console.log(output);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

showEmails();
