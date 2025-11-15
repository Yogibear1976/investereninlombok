import { NextResponse } from "next/server";

import { mailer } from "@/lib/mailer";

import requestBrochureTemplate from "@/components/templates/request-brochure-template";

import { prisma } from "@/lib/prisma";

import { slugify } from "@/lib/format";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstname, lastname, property } = body;

    const brochurerequest = await prisma.brochureRequest.create({
      data: {
        email,
        firstname,
        lastname,
        property,
      },
    });

    //GENERATE TEMPLATE
    const emailTemplate = requestBrochureTemplate(
      firstname,
      lastname,
      email,
      property
    );

    //SEND REGISTRATION EMAIL WITH ATTACHMENT
    await mailer(
      email,
      `Investereninlombok.nl | Brochure "${property}"`,
      emailTemplate.html,
      "support@investereninlombok.nl",
      [
        {
          filename: `brochure-${slugify(property)}.pdf`,
          path: `./public/docs/brochure-${slugify(property)}.pdf`, // local file // maak verschillende pdfs in ./public/docs/
          contentType: "application/pdf",
        },
      ]
    );

    return NextResponse.json(brochurerequest);
  } catch (error) {
    console.log("[BROCHURE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
