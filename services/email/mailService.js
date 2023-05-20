import nodemailer from 'nodemailer'

export const mailSupplier = async ({
  name,
  address,
  email,
  phone,
  products,
}) => {
  const details = {
    name,
    address,
    email,
    phone,
    products,
  }

  //Layout of the displayed massage to the supplier
  const output = `
    <p>Your AyurVeda Order Is Approved</p>
    <h3>Order Details</h3>
    <ul>  
      <li>Customer name: ${details.name}</li>
      <li>Address: ${details.address}</li>
      <li>Email: ${details.email}</li>
      <li>Phone: ${details.phone}</li>
      <li>products: ${details.products}</li>
    </ul>

  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // email account of the company
      pass: process.env.PASS, // password
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'no-reply@perera.distributors.com', // sender's address
    to: details.email, // should set to the recivers mail address
    subject: 'Supplier Request Response',
    html: output, // html body
  }

  //   send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    return { msg: 'Email has been sent' }
  })
}
