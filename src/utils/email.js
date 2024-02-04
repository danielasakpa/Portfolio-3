import emailjs from "@emailjs/browser";


const sendEmail = (formData, setEmailSent) => {

    setEmailSent("loading");

    emailjs
        .sendForm(
            "service_k9th3hd",
            "contact_form",
            formData,
            process.env.REACT_EMAIL_API_KEY
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