import type { CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      label: "Summary",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      min: 0,
    }
  ],
};
