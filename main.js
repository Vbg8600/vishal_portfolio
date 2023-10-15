var typed = new Typed(".text", {
    strings: ["Professional", "Software Developer...", "Web Developer....", "Mechanical Engineer...."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

});

var msg = new Typed(".contact-line", {
    strings: ["Lets Work Together...", "Happy to Help..."],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true

});

/* function emailSend() {
    Email.send({
       Host: "smtp.elasticemail.com",
      SecureToken : "62a9a8eb-d9a1-4131-baaf-9b833ca8234d",
        To: 'vishalgophane19@hotmail.com',
        From: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Body: document.getElementById('message').value
    }).then(
        message => {
            if(message=='OK'){
                swal("Good job!","You clicked the button!","success");
            }else{
                swal("Error","You clicked the button!","error");
            }
        }
    ); 
} */
/* 
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_icds7kw";
    const templateID = "template_m7imvry";
    emailjs.send(serviceID, templateID,params ).then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
         console.log(res);
         alert("Sent Succesfully")
        }).catch(
              (err) => console.log(err)
        );

} */

