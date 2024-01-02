export default async function getInvoices() {
  const baseUrl=process.env.NEXT_PUBLIC_LOCALHOST;
    const response = await fetch(`${baseUrl}/api/invoicer`, {
      cache: "no-store",
    });
    const invoices = await response.json();
    return invoices;
  }
  