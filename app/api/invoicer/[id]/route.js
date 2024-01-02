import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
      const invoice = await db.invoice.findUnique(
        {where: { id},
        include:{
        tableData:true
       } });
      if (!invoice) {
        return NextResponse.json(
          {
            message: "Failed to fetch a single invoice",
            error: error.message,
          },
          {
            status: 500,
          }
        );
      }
      return NextResponse.json(invoice);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed to fetch a single invoice",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }