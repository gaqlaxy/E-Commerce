(function () {
  emailjs.init({
    publicKey: "p13FvtJxxHD3tFiZx",
  });
})();

function sendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_nx2ifr9", "template_zowd7lk", params)
    .then(function (res) {
      alert("Message Sent");
    });
}
