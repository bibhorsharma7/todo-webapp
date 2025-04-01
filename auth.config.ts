import Google from "next-auth/providers/google";
import { type NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [Google],
};

export default config;
