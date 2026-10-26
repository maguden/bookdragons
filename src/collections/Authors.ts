import { slugField, type CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "lastName",
  },
  fields: [
    {
      name: "firstName",
      label: "Fornavn",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Etternavn",
      type: "text",
      required: true,
    },
    slugField({
        useAsSlug: "lastName",
        slugify: ({ data }) => {
          const { lastName } = data;
          return lastName ? lastName.toLowerCase().replace(/\s+/g, "-") : "";
        },
      }),
      {
        name: "photo",
        label: "Bilde",
        type: "upload",
        relationTo: "media",
      },
      {
        name: "about",
        label: "Om forfatteren",
        type: "textarea",
      }
  ],
};