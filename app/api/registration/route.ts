import { NextResponse } from "next/server";

import { mailer } from "@/lib/mailer";

import registrationTemplate from "@/components/templates/registration-template";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const quickcontact = await prisma.registration.create({
      data: {
        email,
      },
    });

    //GENERATE TEMPLATE
    const emailTemplate = registrationTemplate(email);

    //SEND REGISTRATION EMAIL WITH ATTACHMENT
    await mailer(
      email,
      `Investereninlombok.nl | Bevestiging van registratie`,
      emailTemplate.html,
      "support@investereninlombok.nl",
      [
        {
          filename: "brochure.pdf",
          path: "./public/docs/brochure.pdf", // local file
          contentType: "application/pdf",
        },
      ]
    );

    return NextResponse.json(quickcontact);
  } catch (error) {
    console.log("[REGISTRATION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
