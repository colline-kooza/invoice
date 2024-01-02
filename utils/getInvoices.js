export default async function getInvoices() {
    const response = await fetch("http://localhost:3000/api/invoicer", {
      cache: "no-store",
    });
    const invoices = await response.json();
    return invoices;
  }
  