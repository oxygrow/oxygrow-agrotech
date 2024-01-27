var nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, emailData) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 16px auto;
    }

    .header {
      width: 100%;
      padding: 2rem;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      background-color: #94BF54; /* Dark green color */
    }

    .sub-header {
      width: 100%;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: medium;
      text-align: center;
      color: #979797;
      background-color: #f0f0f0; /* Gray color */
    }

    .details {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-top: 1.25rem;
      font-size: 1.125rem;
      font-weight: medium;
    }

    .details div {
    
      padding: 0.625rem;
    }
    
    .first-box{
    width:200px;
    }
  </style>
</head>
<body>

<div class="container">
  <div class="header">
    Oxygrow Agrotech Pvt Ltd
  </div>
  <div class="sub-header">
    Product Inquiry Details
  </div>
  <div>
    <div class="details">
    	 <div class="first-box">Full Name</div>
    	<div>${emailData.fullname}</div>
    </div>
    <div class="details">
    	 <div class="first-box">Mobile Number</div>
    	<div>${emailData.mobileNumber}</div>
    </div>
    <div class="details">
    	 <div class="first-box">Location</div>
    	<div>${emailData.location}</div>
    </div>
    <div class="details">
    	 <div class="first-box">Message</div>
    	<div class="sec-box">${emailData.message}</div>
    </div>
  </div>
</div>

</body>
</html>



`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
