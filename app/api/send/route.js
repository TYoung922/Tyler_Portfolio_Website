import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  console.log("API Key:", process.env.RESEND_API_KEY ? "Loaded" : "Missing");
  console.log(fromEmail);
  try {
    // const data = await resend.emails.send({
    //   from: fromEmail,
    //   to: [fromEmail],
    //   subject: subject,
    //   react: (
    //     <>
    //       <h1>{subject}</h1>
    //       <h3>From {email}</h3>
    //       <p>Thank you for contacting us!</p>
    //       <p>New message submitted:</p>
    //       <p>{message}</p>
    //     </>
    //   ),
    // });
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [fromEmail],
      subject: subject,
      html: `<h1>${subject}</h1>
             <p>New message from profolio website:</p>
             <p>From: ${email}
             <p>${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
