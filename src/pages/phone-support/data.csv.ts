import type { APIRoute } from "astro";
import { phoneDataCsv } from "../../data/phoneSupport/catalog.mjs";

export const GET: APIRoute = () => new Response(phoneDataCsv(), {
  headers: { "Content-Type": "text/csv; charset=utf-8" },
});
