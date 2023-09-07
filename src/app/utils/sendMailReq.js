import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function SendMailReq(toEmail) {
  // Create random Number
  const randomOTP = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Create Transpoter
  let transpoter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  // Prepair Mail
  let readyMail = {
    from: "Assignment Check<info@teamrabbil.com>",
    to: toEmail,
    subject: "OTP verificaton from Module-14 Assignment",
    text: `Your OTP is: ${randomOTP()} but you must submit "123" for login`,
  };

  // Response Mail
  try {
    let result = await transpoter.sendMail(readyMail);
    // let getRes = result["accepted"];
    return NextResponse.json({
      status: true,
      msg: result,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.next({
      msg: "Message sending failed.",
    });
  }
}
