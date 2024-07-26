import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({
      type: "array",
      name: "images",
      title: "Image",
      of: [{ type: "image" }],
    }),
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "number",
      name: "price",
      title: "Price",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "reference",
      name: "category",
      title: "Category",
      to: [{ type: "category" }],
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      type: "number",
      name: "stock",
      title: "Stock",
    }),
  ],
});
