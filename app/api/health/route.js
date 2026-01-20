export async function GET() {
  // Simple health check to verify the deployment is reachable
  return new Response(
    JSON.stringify({
      status: "ok",
      name: "we-ar-menu",
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}