import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "Title",
      type: "string",
    }),
    defineField({
      name: "Price",
      type: "number",
    }),
    defineField({
      name: "Category",
      type: "string",
    }),
    defineField({
      name: "Description",
      type: "string",
    }),
    defineField({
      name: "Image",
      type: "image",
    }),
  ],
});
