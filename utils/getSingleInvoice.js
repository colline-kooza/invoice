export default async function getSingleContact(id) {
  const baseUrl=process.env.NEXT_PUBLIC_LOCALHOST;
    const response = await fetch(
      `${baseUrl}/api/invoicer/${id}`,
      {
        cache: "no-store",
      }
    );
    const invoice= await response.json();
    return invoice;
  }
  