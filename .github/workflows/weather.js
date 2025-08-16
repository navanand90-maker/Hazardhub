import { fetch } from "./_shared.js";

export const handler = async (event) => {
  const { lat, lon } = event.queryStringParameters || {};
  if (!lat || !lon) return { statusCode: 400, body: "Missing lat/lon" };

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", lat);
  url.searchParams.set("longitude", lon);
  url.searchParams.set("hourly", "temperature_2m,precipitation,wind_speed_10m");
  url.searchParams.set("daily", "weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum");
  url.searchParams.set("forecast_days", "7");
  url.searchParams.set("timezone", "auto");

  const res = await fetch(url.toString());
  const data = await res.json();

  return {
    statusCode: 200,
    headers: { "Content-Type":"application/json", "Cache-Control":"public, max-age=300" },
    body: JSON.stringify(data)
  };
};