import { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sign In — ${APP_NAME}`,
  description: "Sign in to your Lynkforge account to manage your bio link page.",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}

