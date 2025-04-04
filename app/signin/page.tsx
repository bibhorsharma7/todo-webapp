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
      className="flex w-3/4 flex-row items-center justify-center space-x-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 text-white shadow-lg hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
      onClick={() => signIn(name, { redirectTo: "/" })}
    >
      <span className="text-base font-semibold">Sign In with</span>
      {children}
    </button>
  );
}

export default function SignIn() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-6 dark:from-gray-800 dark:to-gray-900">
      <div className="flex h-auto w-full max-w-sm flex-col items-center justify-center space-y-6 rounded-lg bg-white p-8 shadow-2xl dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Sign In
        </h1>
        <SignInButton name="google">
          <FaGoogle size={24} />
        </SignInButton>
        <SignInButton name="github">
          <FaGithub size={24} />
        </SignInButton>
      </div>
    </div>
  );
}
