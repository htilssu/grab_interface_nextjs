import axios from "axios";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const merchantId = url.searchParams.get("id");
  if (!merchantId) {
    return Response.json({ error: "Missing merchantId" }, { status: 400 });
  } else {
    const merchant = await axios.get(
      `https://portal.grab.com/foodweb/v2/merchants/${merchantId}?latlng=10.816304365441667,106.71102025644655`,
    );
    return Response.json(merchant.data);
  }
}
