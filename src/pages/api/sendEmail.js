import { sendMail } from "@/services/mailService";
const handler = async (req, res) => {
  try {
    const { method } = req;
    const { subject } = req.body;

    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          `Inquiry: ${subject}`,
          "oxygrowetawah@gmail.com",
          req.body
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
