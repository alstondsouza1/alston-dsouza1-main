export function reportClientError(error, context = {}) {
  const payload = {
    message: error instanceof Error ? error.message : "Unknown client error",
    source: context.source || "client",
    digest: context.digest || null,
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  fetch("/api/client-error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Error reporting must never interrupt the user experience.
  });
}
