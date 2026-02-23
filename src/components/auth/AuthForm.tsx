"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { APP_NAME, ROUTES } from "@/lib/constants";
import {
  loginSchema,
  signupSchema,
  getPasswordStrength,
  type LoginFormData,
  type SignupFormData,
} from "@/lib/validations/auth";

interface AuthFormProps {
  mode: "login" | "signup";
  onSubmit?: (data: LoginFormData | SignupFormData) => Promise<void>;
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  const isLogin = mode === "login";
  const passwordStrength = !isLogin ? getPasswordStrength(password) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");

    // Validate form data
    const formData = isLogin
      ? { email, password }
      : { email, password, confirmPassword };

    const schema = isLogin ? loginSchema : signupSchema;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Submit form
    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(result.data);
      } else {
        // TODO: Implement actual auth logic in Day 5
        console.log("Form submitted:", result.data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      setGeneralError(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link href={ROUTES.HOME} className="inline-block">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          {isLogin ? "Welcome back" : `Join ${APP_NAME}`}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {isLogin
            ? "Sign in to manage your links"
            : "Create your free account today"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {generalError && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {generalError}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={isLoading}
          autoComplete="email"
        />

        <div>
          <Input
            label="Password"
            type="password"
            placeholder={isLogin ? "••••••••" : "Min. 8 characters"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            disabled={isLoading}
            autoComplete={isLogin ? "current-password" : "new-password"}
          />
          {/* Password strength indicator for signup */}
          {!isLogin && password.length > 0 && passwordStrength && (
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full transition-all ${passwordStrength.color}`}
                    style={{ width: `${(passwordStrength.score / 6) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500">
                  {passwordStrength.label}
                </span>
              </div>
            </div>
          )}
        </div>

        {!isLogin && (
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            disabled={isLoading}
            autoComplete="new-password"
          />
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isLoading}
        >
          {isLogin ? "Sign In" : "Create Account"}
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-slate-600">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGNUP}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href={ROUTES.LOGIN}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </>
        )}
      </div>

      {/* Terms (for signup) */}
      {!isLogin && (
        <p className="mt-4 text-center text-xs text-slate-500">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-slate-700">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-slate-700">
            Privacy Policy
          </Link>
        </p>
      )}
    </div>
  );
}

