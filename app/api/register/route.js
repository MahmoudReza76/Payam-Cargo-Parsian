import mongooseConnect from "@/lib/mongooseConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await mongooseConnect();
    const {email, username, phone, password} = await req.json();

    // Check if user exists
    const existingUser = await User.findOne({$or: [{email}, {username}]});
    if (existingUser) {
      return new Response(
        JSON.stringify({message: "ایمیل یا نام کاربری قبلاً ثبت شده است"}),
        {status: 400}
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      email,
      username,
      phone,
      password: hashedPassword
    });
    await user.save();

    return new Response(JSON.stringify({message: "کاربر با موفقیت ثبت شد"}), {
      status: 201
    });
  } catch (error) {
    console.error("Error in registration:", error);
    return new Response(JSON.stringify({message: "خطا در ثبت‌نام"}), {
      status: 500
    });
  }
}
