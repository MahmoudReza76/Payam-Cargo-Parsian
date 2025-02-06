import React from "react";
import {User} from "lucide-react";
import Link from "next/link";

function Register() {
  return (
    <Link
      href="/register"
      className="flex flex-row items-center justify-center text-sm space-x-2 border border-border rounded-md p-2"
    >
      <User className="w-6 h-6" />
      <span>Sign In / login</span>{" "}
    </Link>
  );
}

export default Register;
