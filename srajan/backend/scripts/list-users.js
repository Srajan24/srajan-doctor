import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";

dotenv.config();

/**
 * Script to list all users in the database
 * Usage: node scripts/list-users.js
 */

async function listUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB\n");

    // Find all users
    const users = await User.find({}).sort({ createdAt: -1 });

    if (users.length === 0) {
      console.log("📭 No users found in the database.");
      console.log("\n💡 Sign up through the application first!");
      process.exit(0);
    }

    console.log(`📋 Found ${users.length} user(s):\n`);
    console.log("=" .repeat(80));

    users.forEach((user, index) => {
      console.log(`\n${index + 1}. ${user.name}`);
      console.log(`   Email:        ${user.email}`);
      console.log(`   Role:         ${user.role}`);
      console.log(`   Clerk ID:     ${user.clerkUserId}`);
      console.log(`   Credits:      ${user.credits}`);
      if (user.specialty) {
        console.log(`   Specialty:    ${user.specialty}`);
        console.log(`   Verification: ${user.verificationStatus}`);
      }
      console.log(`   Created:      ${user.createdAt.toLocaleString()}`);
      console.log("-".repeat(80));
    });

    console.log("\n💡 To make a user admin, run:");
    console.log("   node scripts/make-admin.js <email>");
    console.log("   OR");
    console.log("   node scripts/make-admin-by-id.js <clerkUserId>");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

listUsers();
