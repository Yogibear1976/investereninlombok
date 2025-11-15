import { NextResponse } from "next/server";
import { mailer } from "@/lib/mailer";

import { format } from "date-fns";
import { nl } from "date-fns/locale/nl";

import appointmentTemplate from "@/components/templates/appointment-template";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstname,
      lastname,
      email,
      phone,
      type,
      selectedDate,
      time,
      items,
      travelled,
      when,
    } = body;

    const appointment = await prisma.appointment.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        type,
        selectedDate,
        time,
        items,
        travelled,
        when,
      },
    });

    //GENERATE LINK AND SEND ON MAIL
    const emailTemplate = appointmentTemplate(
      firstname,
      lastname,
      email,
      phone,
      type,
      selectedDate,
      time,
      items,
      travelled,
      when
    );

    //SEND FORGOT PASSWORD EMAIL
    const locale = nl;
    await mailer(
      email,
      `Investereninlombok.nl | Bevestiging van kennismakingsafspraak op ${format(
        new Date(selectedDate),
        "d MMMM, yyyy",
        { locale }
      )}`,
      emailTemplate.html,
      "support@investereninlombok.nl"
    );

    return NextResponse.json(appointment);
  } catch (error) {
    console.log("[APPOINTMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
