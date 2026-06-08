import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 300;
const ALLOWED_SOURCES = new Set(["app-boundary", "global-boundary", "contact-form"]);

function redactSensitiveText(value) {
  return value
    .replace(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
      "[redacted-email]"
    )
    .replace(/https?:\/\/\S+/gi, "[redacted-url]")
    .replace(/[A-Za-z0-9_-]{32,}/g, "[redacted-token]");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message =
    typeof body.message === "string"
      ? redactSensitiveText(body.message).slice(0, MAX_MESSAGE_LENGTH)
      : "Unknown client error";
  const source = ALLOWED_SOURCES.has(body.source) ? body.source : "client";
  const path =
    typeof body.path === "string" && body.path.startsWith("/")
      ? body.path.split("?")[0].slice(0, 200)
      : "/";
  const digest =
    typeof body.digest === "string" ? body.digest.slice(0, 100) : null;

  console.error(
    JSON.stringify({
      event: "client_error",
      source,
      message,
      path,
      digest,
      timestamp: new Date().toISOString(),
    })
  );

  return NextResponse.json({ received: true }, { status: 202 });
}
