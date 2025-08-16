import { getStore } from "@netlify/blobs";
import { fetch } from "undici";

export const store = (bucket = "hazardhub") => getStore({ name: bucket });

export async function putJSON(key, data) {
  const s = store();
  await s.set(key, JSON.stringify(data), { contentType: "application/json" });
}

export async function getJSON(key, fallback = []) {
  const s = store();
  const str = await s.get(key);
  try { return str ? JSON.parse(str) : fallback; } catch { return fallback; }
}

export { fetch };