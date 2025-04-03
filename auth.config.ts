import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { type NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [Google, Github],
};

export default config;
