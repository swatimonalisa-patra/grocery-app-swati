// src/config/database.ts
import mongoose, { ConnectOptions } from 'mongoose';
import { config } from 'dotenv';

// Load environment variables synchronously
config();

const connectDB = async (): Promise<void> => {
    try {
        const options: ConnectOptions = {
           
        };

        // Type assertion for clarity and potential error handling
        const databaseUri = process.env.DATABASE_ACCESS as string;

        await mongoose.connect(databaseUri, options);
        console.log("Database Connected! ✅");
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
};

export default connectDB;