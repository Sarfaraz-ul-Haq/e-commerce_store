import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroImage",
  type: "document",
  title: "Hero Image",
  fields: [
    defineField({
      type: "image",
      name: "image",
      title: "Product Image",
    }),
  ],
});
