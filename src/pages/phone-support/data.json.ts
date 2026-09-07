import type { APIRoute } from "astro";
import { publicPhoneData } from "../../data/phoneSupport/catalog.mjs";

export const GET: APIRoute = () => new Response(JSON.stringify(publicPhoneData()), {
  headers: { "Content-Type": "application/json; charset=utf-8" },
});
