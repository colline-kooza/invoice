import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const invoice = await db.invoice.findMany({
      include:{
       tableData:true
      }
    });
    return NextResponse.json(invoice);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to find invoice",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function POST(request) {
    try {
      const {  invoiceData, tableData } = await request.json();
      let invoice = await db.invoice.create({
        data: {
          userId:invoiceData.userId,
          companyName: invoiceData.companyName,
          authorName: invoiceData.AuthorName,
          companyAddress: invoiceData.companyAddress,
          authorCountry: invoiceData.authorCountry,
          clientCompany: invoiceData.clientCompany,
          clientAddress: invoiceData.clientAddress,
          clientCity: invoiceData.clientCity,
          clientCountry: invoiceData.clientCountry,
          invoiceNumber: invoiceData.invoiceNumber,
          invoiceDate: new Date(invoiceData.invoiceDate).toISOString(),
          dueDate: new Date(invoiceData.dueDate).toISOString(),
          notes: invoiceData.notes,
          imageUrl: invoiceData.image,
        },
      });
    //   row
      const rowsPromise=tableData.map(async(row)=>{
      const rows = await db.row.create({
       data:{
        invoiceId:invoice.id,
        itemDescription:row.itemDescription,    
        itemQty:parseInt(row.itemQty),
        Price:parseFloat(row.Price),
        Tax:parseFloat(row.Tax),
        Amount:parseFloat(row.Amount)
       }
      })
      return rows
      })
      const rowsData=await Promise.all(rowsPromise)
      return NextResponse.json({
      data:{
        invoice ,rowsData
      }
        }, 
        {
        status: 201,
      });
  
    } catch (error) {
      console.error("Error creating invoice:", error);
      return NextResponse.json(
        {
          message: "Failed to creating",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
}