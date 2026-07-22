"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020817] px-6">
      <div className="max-w-2xl text-center">

        <h1 className="text-8xl font-extrabold text-cyan-400 md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </main>
  );
}