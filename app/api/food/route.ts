export async function POST(req: Request) {
  const bodyJson = await req.json();
  console.log(bodyJson);

  return Response.json(bodyJson);
}
