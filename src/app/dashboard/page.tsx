import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Dashboard | Lynkforge',
  description: 'Manage your bio link page',
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  // Get user's profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <svg
                  className="h-5 w-5 text-white"
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
              <span className="text-lg font-bold text-slate-900">Lynkforge</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user.email}</span>
            <form action="/api/auth/signout" method="POST">
              <button
                type="submit"
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome{profile?.display_name ? `, ${profile.display_name}` : ''}! 👋
          </h1>
          <p className="mt-1 text-slate-600">
            Manage your bio link page and see how it&apos;s performing.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-600">Total Views</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-600">Link Clicks</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-600">Active Links</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-600">Pages</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Create your first page
          </h3>
          <p className="mt-2 text-slate-600">
            Get started by creating your bio link page. It only takes a minute.
          </p>
          <a
            href="/dashboard/pages/new"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Page
          </a>
        </div>
      </main>
    </div>
  );
}

