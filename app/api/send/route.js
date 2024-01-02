import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
    const {email , invoiceUrl}=await request.json()
    const data= await resend.emails.send({
      from: 'Invoicer <info@flakolimited.com>',
      to: [email],
      subject: 'New invoice',
      react: EmailTemplate({ invoiceUrl}),
    });
      return NextResponse.json({
        data
        }, 
        {
        status: 201,
      });
  
    } catch (error) {
      console.error("Error", error);
      return NextResponse.json(
        {
          message: "Failed ",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
}