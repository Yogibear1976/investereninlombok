import { NextResponse } from "next/server";

import { mailer } from "@/lib/mailer";

import contactTemplate from "@/components/templates/contact-template";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, question } = body;

    const quickcontact = await prisma.quickcontact.create({
      data: {
        name,
        email,
        phone,
        question,
      },
    });

    //GENERATE LINK AND SEND ON MAIL
    const emailTemplate = contactTemplate(name, email, phone, question);

    //SEND QUICK CONTACT EMAIL
    await mailer(
      email,
      `Linkbits.io | Bevestiging van StackAware contactverzoek`,
      emailTemplate.html,
      "support@linkbits.io"
    );

    return NextResponse.json(quickcontact);
  } catch (error) {
    console.log("[QUICKCONTACT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
