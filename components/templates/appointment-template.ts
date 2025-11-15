import { format } from "date-fns";
import { nl } from "date-fns/locale/nl";

const appointmentTemplate = function (
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  type: string,
  selectedDate: Date,
  time: string,
  items?: string[] | undefined,
  travelled?: string | undefined,
  when?: string | undefined
) {
  const locale = nl;
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linkbits.io quotation request</title>
    <style>
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/6d7bf85888fc8ef4357e0a27a0db8ce6.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/768446cc3d04d6dd3289ae1715bdb682.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: bold;
            font-weight: 700;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/2cc8c1d9627b43c950e209c838724aeb.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: bold;
            font-weight: 900;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/46682a5505897003c69c26bf0dc2d3c0.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
    </style>
    <style type="text/css">
        body {
            margin: 0;
            background-color: #cccccc;
        }
        table {
            border-spacing: 0;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #cccccc;
            padding-bottom: 60px;
        }
        .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: 'GT Walsheim', Arial, Helvetica, sans-serif;
            color: #171a1b;
        }
        .two-columns {
            text-align: center;
            font-size: 0;
        }
        .two-columns .column {
            width: 100%;
            max-width: 300px;
            display: inline-block;
            vertical-align: top;
        }
        .three-columns {
            text-align: center;
            font-size: 0;
            padding: 15px 0 15px;
        }
        .three-columns .column {
            width: 100%;
            max-width: 200px;
            display: inline-block;
            vertical-align: top;
        }
        .three-columns .padding {
            padding: 15px;
        }
        .three-columns .content {
            font-size: 13px;
            line-height: 18px;
            font-weight: 300;
        }
        .two-columns.last {
            padding: 15px 0;
        }
        .two-columns .padding {
            padding: 20px;
        }
        .two-columns .content {
            font-size: 13px;
            line-height: 18px;
            font-weight: 300;
            text-align: left;
        }
        .button {
            background-color: #0284c7;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 16px;
            font-weight: 400;
            border-radius: 5px;
        }    
    
    
    </style>
    </head>
    <body>
    
    <center class="wrapper">
        <table class="main" width="100%">
    
    <!-- TOP BORDER -->
                <tr>
                    <td height="8" style="background-color: #0055FF;"></td>
                </tr>
    
    <!-- LOGO SECTION -->
                <tr>
                    <td style="padding: 4px 0 4px;">
                        <table width="100%">
    
                            <tr>
                                <td class="two-columns">
                                    <table class="column">
                                        <tr>
                                            <td style="padding: 0 50px 4px;">
                                                <a href="https://www.linkbits.io/">
                                                    <img 
                                                        src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1692682484/linkbits-logo.png" 
                                                        alt="logo linkbits" 
                                                        width="200" 
                                                        title="Linkbits.io"
                                                    >
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                    <table class="column">
                                        <tr>
                                            <td style="padding: 14px 110px;">
                                                <a style="padding: 0px 5px;" href="https://www.facebook.com/profile.php?id=61550345804634">
                                                    <img 
                                                        src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1692682919/blue-facebook.png" 
                                                        alt="Facebook page" 
                                                        width="28"
                                                    >
                                                </a>
                                                <a style="padding: 0px 5px;" href="https://www.linkedin.com/company/linkbits/">
                                                    <img 
                                                        src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1692682937/blue-linkedin.png" 
                                                        alt="LinkedIn page" 
                                                        width="28"
                                                    >
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                        </table>
                    </td>
                </tr>
    
    
    <!-- BANNER IMAGE -->
                <tr>
                    <td>
                        <a href="">
                            <img src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1723561387/banner_meeting.png" alt="banner meeting" width="600" style="max-width: 100%;">
                        </a>
                    </td>
                </tr>
    
    
    <!-- TITLE, TEXT & BUTTON -->
                <tr>
                    <td style="padding: 5px 0 0;">
                        <table width="100%">
                            <tr>
                                <td style="text-align: left; padding: 15px;">
                                    <p style="font-size: 15px; font-weight: 300;">Beste <span style="font-weight: 400;">${firstname} ${lastname}</span>,</p>
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Hartelijk dank voor je interesse in <span style="font-weight: 400; color: #0055FF;">StackAware</span>. Ik bevestig hierbij je aanvraag voor een online meeting op <span style="font-weight: 400;">${format(
                                          new Date(selectedDate),
                                          "d MMMM",
                                          { locale }
                                        )}</span> om <span style="font-weight: 400;">${time} uur</span>.
                                    </p>
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Hieronder vind je de details van de afspraak: 
                                    </p>
                                    <ul>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                            <span style="font-weight: 400;">Datum:</span> ${format(
                                              new Date(selectedDate),
                                              "d MMMM",
                                              { locale }
                                            )}
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Tijd:</span> ${time} uur.
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Locatie:</span> Geen (online)
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Contactpersoon:</span> Jochgem van Delft
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Telefoonnummer:</span> 0627 330 867
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">MeetingLink (indien online):</span> Deze stuur ik je binnen 24 uur op je email.
                                        </li>
                                    </ul>
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Je hebt me de volgende informatie gestuurd om me goed voor te bereiden op onze meeting:
                                    </p>
                                    <ul>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Naam:</span> ${firstname} ${lastname}
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Email:</span> ${email}
                                        </li>
                                        <li style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                              <span style="font-weight: 400;">Website:</span> ${website}
                                        </li>
                                    </ul>

                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Mocht je nog vragen hebben of indien je de afspraak wilt wijzigen, neem dan gerust contact met me op via info@linkbits.io.nl of 06 27 330 867.
                                    </p>
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Ik kijk ernaar uit om je een uitgebreide demonstratie te geven en al je vragen over <span style="font-weight: 400; color: #0055FF;">StackAware</span> te beantwoorden.
                                    </p>
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Met vriendelijke groet,
                                    </p>
                                    <p style="font-size: 15px; font-weight: 400; line-height: 16px; padding: 20px 0 5px; margin-bottom: 5px;">
                                        Jochgem van Delft<br>
                                        <span style="font-size: 10px; font-weight: 300;">Cyber Security Advisor</span>
                                    </p>
                                    <a href="https://www.linkbits.io">
                                        <img 
                                            src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1692699678/linkbits-logo-signature.png" 
                                            alt="logo linkbits" 
                                            width="100" 
                                            title="Linkbits.io"
                                        >
                                    </a>
                                    <p style="font-size: 12px; font-weight: 300; line-height: 16px; padding: 10px 0 10px; margin:0 0;">
                                        W: <a href="https://www.linkbits.io">www.linkbits.io</a><br>
                                        E: <a href="mailto:jochgem@linkbits.io">jochgem@linkbits.io</a><br>
                                        M: <a href="tel:0031627330867">+31 627 330 867</a>
                                    </p>
                                    <p style="font-size: 12px; font-weight: 300; line-height: 16px; padding: 0 0 10px; margin:0 0;">
                                        WhatsApp <a href="https://wa.link/kvdt22">+31 627 330 867</a>
                                    </p>
                                    <p style="font-size: 12px; font-weight: 300; line-height: 16px; padding: 0 0 5px; margin:0">
                                        Kerkstraat 38<br>
                                        3741 AK Baarn
                                    </p>
                                    <p style="font-size: 10px; font-weight: 300; line-height: 13px; padding: 0 0 5px; margin:0">
                                        Deze mail (inclusief de bijlagen) kan vertrouwelijk zijn. Mocht je dit bericht per ongeluk hebben ontvangen, word je verzocht de afzender te informeren op info@linkbits.io en het bericht te wissen.</br>
                                        Onze algemene voorwaarden zijn <a href="https://www.linkbits.io/terms">hier</a> te lezen.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
    
    
    <!-- BLUE BORDER -->
                <tr>
                    <td height="8" style="background-color: #0055FF;"></td>
                </tr>
    
            </table>
        </center>
    
    </body>
    </html>`;
  const text = `
        Aanvraag voor een online StackAware meeting.
        ALs u niets hebt aangevraagd, negeer dan deze mail of reageer om ons dit te laten weten.`;
  return {
    html: html,
    text: text,
  };
};

export default appointmentTemplate;
