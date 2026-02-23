import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export const metadata = {
  title: 'Forgot Password | Lynkforge',
  description: 'Reset your Lynkforge account password.',
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <a href="/" className="inline-block">
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
        </a>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Reset your password
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      <ForgotPasswordForm />

      <div className="mt-6 text-center text-sm text-slate-600">
        Remember your password?{' '}
        <a
          href="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </a>
      </div>
    </div>
  );
}

