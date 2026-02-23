import { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sign Up — ${APP_NAME}`,
  description: "Create your free Lynkforge account and start building your bio link page in minutes.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}

