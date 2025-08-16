import { getJSON } from "./_shared.js";
export const handler = async () => {
  const news = await getJSON("news.json", []);
  return { statusCode: 200, headers: { "Content-Type":"application/json", "Cache-Control":"public, max-age=60" }, body: JSON.stringify(news) };
};