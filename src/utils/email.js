import emailjs from "@emailjs/browser";


const sendEmail = (form, setEmailSent) => {

    setEmailSent("loading");

    emailjs
        .sendForm(
            "service_8fl2429",
            "contact_form",
            form.current,
            "YxU9ucgaEXCDwBI0X"
        )
        .then(
            (result) => {
                setEmailSent(result.text);
            },
            (error) => {
                setEmailSent(error.text);
            }
        );
}

export default sendEmail;