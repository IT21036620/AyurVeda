const sendEmail = require("./mailer");

app.post("/sendmail", async (req, res) => {
  // create user in database
  // ...

  // send confirmation email
  const { email } = req.body;
  const subject = "Welcome to My App";
  const text = "Thank you for signing up!";
  const html = "<p>Thank you for signing up!</p>";
  await sendEmail(email, subject, text, html);

  res.send("User created and confirmation email sent");
});
