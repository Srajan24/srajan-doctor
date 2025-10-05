import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user_model.js";

dotenv.config();

/**
 * Script to set a single admin and remove admin role from all others
 * Usage: node scripts/set-single-admin.js <email>
 */

async function setSingleAdmin() {
  try {
    const email = process.argv[2];

    if (!email) {
      console.error("❌ Please provide an email address");
      console.log("Usage: node scripts/set-single-admin.js <email>");
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB\n");

    // Step 1: Remove admin role from ALL users
    console.log("🔄 Step 1: Removing admin role from all users...");
    const removeResult = await User.updateMany(
      { role: "admin" },
      { $set: { role: "unassigned" } }
    );
    console.log(`   Removed admin from ${removeResult.modifiedCount} user(s)`);

    // Step 2: Find the target user
    console.log(`\n🔍 Step 2: Finding user with email: ${email}`);
    const user = await User.findOne({ email: email });

    if (!user) {
      console.error(`\n❌ User with email "${email}" not found`);
      console.log("💡 Make sure the user has signed up first!");
      process.exit(1);
    }

    // Step 3: Make the target user admin
    console.log(`✅ Found: ${user.name}`);
    console.log(`\n⚙️  Step 3: Setting ${user.name} as admin...`);
    
    user.role = "admin";
    await user.save();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 SUCCESS! Admin setup complete:");
    console.log("=".repeat(60));
    console.log(`\n👑 ADMIN USER:`);
    console.log(`   Name:      ${user.name}`);
    console.log(`   Email:     ${user.email}`);
    console.log(`   Role:      ${user.role}`);
    console.log(`   Clerk ID:  ${user.clerkUserId}`);
    console.log(`\n✨ This is now the ONLY admin on the platform.`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Refresh your browser (Ctrl+Shift+R)`);
    console.log(`   2. Log out and log back in`);
    console.log(`   3. Access the Admin dashboard`);

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

setSingleAdmin();
