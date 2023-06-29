function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let body = "Name: " + name + "<br> Email: " + email + "<br> Phone: " + phone + "<br> Message: " + message;
    console.log(body);


    Email.send({

        SecureToken: "9280ffc6-1199-4d8e-a510-07a68146376f",
        Host: "smtp.elasticemail.com",
        Username: "jhashivam2008@yahoo.com",
        Password: "CE7A81BD7AC5AA898BA0B8E36194EC77CE26",
        To: 'shivam.jhacse@acem.edu.in',
        From: "shivam.jhacse@acem.edu.in",
        Subject: "Email us with any questions Shivam",
        Body: body,


    }).then(
        message => alert("message sent Successfully")
    );
}