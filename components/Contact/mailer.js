import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  console.log(name, email, message);
  return emailjs.send(
    "service_2318pml",
    "template_lzd4t7h",
    { name, email, message },
    "NKG8_fBcf2xtb1eCf"
  );
};

export default mail;
