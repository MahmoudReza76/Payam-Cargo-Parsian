import mongoose from "mongoose";

export default async function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  const url = process.env.MONGODB_URI;
  if (!url) {
    throw new Error("MONGODB_URI در متغیرهای محیطی تنظیم نشده است");
  }

  try {
    await mongoose.connect(url);
    console.log("اتصال به MongoDB برقرار شد");
    return mongoose.connection;
  } catch (error) {
    console.error("خطا در اتصال به MongoDB:", error);
    throw error;
  }
}
