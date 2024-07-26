import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
