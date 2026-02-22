import Link from "next/link";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import { ROUTES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:py-32">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
              100% Free — No Credit Card Required
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Your links.{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your brand.
              </span>
              <br />
              Completely free.
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The link-in-bio tool that gives you custom themes, analytics, and
              more — all for free. No paywalls, no catch.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={ROUTES.SIGNUP}>
                <Button size="lg" className="w-full sm:w-auto">
                  Create Your Free Page
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See Features
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-sm text-slate-500">
              Join 10,000+ creators already using LinkForge
            </p>
          </div>
        </section>

        {/* Features placeholder */}
        <section id="features" className="bg-white px-4 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We give you for free what others charge $9-24/month for.
            </p>

            {/* Feature grid placeholder */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Custom Themes",
                  description:
                    "25+ beautiful themes to make your page stand out.",
                  icon: "🎨",
                },
                {
                  title: "Analytics",
                  description:
                    "See who's visiting and clicking — completely free.",
                  icon: "📊",
                },
                {
                  title: "No Branding",
                  description:
                    "Your page, your brand. No LinkForge watermark.",
                  icon: "✨",
                },
                {
                  title: "Embeds",
                  description:
                    "YouTube, Spotify, TikTok — embed your content.",
                  icon: "🎵",
                },
                {
                  title: "QR Codes",
                  description: "Generate QR codes for your page instantly.",
                  icon: "📱",
                },
                {
                  title: "SEO Optimized",
                  description: "Custom meta tags to rank higher in search.",
                  icon: "🔍",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to create your page?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-100">
              Join thousands of creators who&apos;ve already made the switch.
            </p>
            <div className="mt-8">
              <Link href={ROUTES.SIGNUP}>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  Get Started — It&apos;s Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
