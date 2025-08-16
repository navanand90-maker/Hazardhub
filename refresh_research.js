import { fetch, putJSON } from "./_shared.js";

const feeds = [
  "https://www.preprints.org/rss/environmental-sciences.xml",
  "https://www.nature.com/subjects/natural-hazards/rss"
];

async function fetchRSS(url) {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
  if (!res.ok) return [];
  const json = await res.json();
  return (json.items || []).map(i => ({
    title: i.title, link: i.link, published: i.pubDate, source: json.feed?.title || new URL(url).hostname
  }));
}

export const handler = async () => {
  const all = (await Promise.all(feeds.map(fetchRSS))).flat();
  all.sort((a,b) => new Date(b.published) - new Date(a.published));
  await putJSON("research.json", all.slice(0, 30));
  return { statusCode: 200, body: "Research refreshed" };
};