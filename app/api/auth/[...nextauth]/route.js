import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import mongooseConnect from "@/lib/mongooseConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const authOptions = {
  adapter: MongoDBAdapter(mongooseConnect()),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        await mongooseConnect();
        const {email, password} = credentials;

        // Find user
        const user = await User.findOne({email});
        if (!user) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        // Check password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        return {id: user._id, email: user.email, name: user.username};
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({session, token}) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: "/auth",
    signUp: "/auth"
  }
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
