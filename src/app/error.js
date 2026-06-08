"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/reportClientError";

export default function Error({ error, reset }) {
  useEffect(() => {
    reportClientError(error, {
      source: "app-boundary",
      digest: error.digest,
    });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-center text-white">
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-gray-300">
          The issue was recorded without collecting personal information.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded border border-white px-6 py-3 font-bold transition hover:bg-white hover:text-black"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
