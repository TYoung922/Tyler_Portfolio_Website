import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { body } = req;
//   const { email, subject, message } = body;
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ["thyoung89@gmail.com", email],
//       subject: subject,
//       react: (
//         <>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: fromEmail,
//     to: ["delivered@resend.dev"],
//     subject: "Hello world",
//     react: "Test. Did this work?",
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
