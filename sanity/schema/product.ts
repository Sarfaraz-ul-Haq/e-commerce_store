import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "category",
      to: [{ type: "category" }],
      title: "Category",
      type: "reference",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
  ],
});
