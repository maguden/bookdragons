import { getPayload } from "payload";
import { notFound } from "next/navigation";
import config from "@/payload.config";

type Props = {
  params: {
    bookSlug: string;
  };
};

export default async function BookPage({ params }: Props) {
    const { bookSlug } = await params;
    const payload = await getPayload({ config });


const result = await payload.find({
  collection: "books",
  where: {
    slug: {
      equals: bookSlug,
    },
  },
});

const book = result.docs[0];

if (!book) {
  notFound();
}

return (
    <main>
        <h1>{book.title}</h1>
        <p>{book.summary}</p>
        <p>Pris: {book.price}</p>
      </main>
) 
}