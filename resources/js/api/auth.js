import axios from "axios";
import { generateEmailHtml } from "../Utils/renderEmail";

export const sendRegistrationEmail = async (username, userEmail) => {
  const emailHtml = generateEmailHtml(username);

  await axios.post("/api/send-confirmation-email", {
    email: userEmail,
    html: emailHtml,
  });
};
