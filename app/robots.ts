import { getBaseUrl } from "@/lib/utils";

export default function robots() {
  const base = getBaseUrl();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
