const express = require("express");
const app = express();
const port = 4000;



//===========================================
// parse POST bodies for API endpoints
//===========================================

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



//===========================================
// send message endpoint
//===========================================

const nodemailer = require("nodemailer");

async function message(replyTo, senderName, message) {
  if (!(replyTo && senderName && message))
    throw "Missing field";

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object
  await transporter
    .sendMail({
      from: process.env.MAIL_SENDER, // sender address
      to: process.env.MAIL_RECEIVER, // list of receivers
      subject: process.env.MAIL_SUBJECT, // Subject line
      text: message, // plain text body,
      replyTo: `"${senderName}" <${replyTo}>`,
    })
}

app.post("/", async (req, res) => {
  message(req.body.email, req.body.name, req.body.message)
    .then(_ => {
      res.status(200).send("Message delivered");
    })
    .catch((err) => {
      res.status(500).send(err);
      return;
    })
});

//===========================================
// start express
//===========================================
app.listen(port, "0.0.0.0", () => {
  console.log(`ActionPaint backend listening at http://0.0.0.0:${port}`);
});
