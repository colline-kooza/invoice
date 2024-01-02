import db from "@/utils/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { Fullname, email, password } = await request.json();

    // Check if email exists in the dbb
    const userExists = await db.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        {
          message: "User Already exists",
          user: null,
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await hash(password, 10);
    const updatedAt = new Date(); 
    const newUser = await db.user.create({
      data: {
        name:Fullname,
        email,
        password: hashedPassword,
        updatedAt
      },
    });
    return NextResponse.json(newUser);
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
