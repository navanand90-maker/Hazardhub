import { getJSON } from "./_shared.js";
export const handler = async () => {
  const items = await getJSON("research.json", []);
  return { statusCode: 200, headers: { "Content-Type":"application/json" }, body: JSON.stringify(items) };
};