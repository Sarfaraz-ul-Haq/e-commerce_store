import { createClient } from "next-sanity";

import { apiVersion, projectId, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset: "production",
  apiVersion,
  useCdn: true,
  perspective: "published",
});
