import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";

dotenv.config();

/**
 * Script to make a user an admin by Clerk User ID
 * Usage: node scripts/make-admin-by-id.js <clerkUserId>
 * Example: node scripts/make-admin-by-id.js user_2abc123xyz
 */

async function makeAdminById() {
  try {
    // Get Clerk User ID from command line argument
    const clerkUserId = process.argv[2];

    if (!clerkUserId) {
      console.error("❌ Please provide a Clerk User ID");
      console.log("Usage: node scripts/make-admin-by-id.js <clerkUserId>");
      console.log("\n💡 You can find your Clerk User ID in the Clerk Dashboard");
      console.log("   or by checking the browser console after logging in.");
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Find user by Clerk User ID
    const user = await User.findOne({ clerkUserId: clerkUserId });

    if (!user) {
      console.error(`❌ User with Clerk ID "${clerkUserId}" not found`);
      console.log("\n💡 Make sure the user has signed up first!");
      process.exit(1);
    }

    // Check if already admin
    if (user.role === "admin") {
      console.log(`✅ User "${user.name}" is already an admin!`);
      process.exit(0);
    }

    // Update user role to admin
    user.role = "admin";
    await user.save();

    console.log("\n🎉 SUCCESS! User is now an admin:");
    console.log(`   Name: ${user.name}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Role: ${user.role}`);
    console.log(`   Clerk ID: ${user.clerkUserId}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

makeAdminById();
