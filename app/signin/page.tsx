"use client";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

function SignInButton({
  name,
  children,
}: {
  name: string;
  children: JSX.Element;
}) {
  return (
    <button
      className="flex w-3/4 flex-row items-center justify-center space-x-4 rounded-md border border-gray-300 bg-slate-800 px-4 py-2 text-white shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
      onClick={() => signIn(name, { redirectTo: "/" })}
    >
      <span className="text-sm font-medium">Sign In with</span>
      {children}
    </button>
  );
}

export default function SignIn() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-100 p-6">
      <div className="flex h-auto w-full max-w-sm flex-col items-center justify-center space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-xl font-semibold text-gray-800">Sign In</h1>
        <SignInButton name="google">
          <FaGoogle size={20} />
        </SignInButton>
        <SignInButton name="github">
          <FaGithub size={20} />
        </SignInButton>
      </div>
    </div>
  );
}
