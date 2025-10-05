import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";

dotenv.config();

/**
 * Script to make a user an admin
 * Usage: node scripts/make-admin.js <email>
 * Example: node scripts/make-admin.js admin@example.com
 */

async function makeAdmin() {
  try {
    // Get email from command line argument
    const email = process.argv[2];

    if (!email) {
      console.error("❌ Please provide an email address");
      console.log("Usage: node scripts/make-admin.js <email>");
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Find user by email
    const user = await User.findOne({ email: email });

    if (!user) {
      console.error(`❌ User with email "${email}" not found`);
      console.log("\n💡 Make sure the user has signed up first!");
      process.exit(1);
    }

    // Check if already admin
    if (user.role === "admin") {
      console.log(`✅ User "${user.name}" (${email}) is already an admin!`);
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

makeAdmin();
