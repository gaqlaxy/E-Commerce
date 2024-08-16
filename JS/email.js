(function () {
  emailjs.init({
    publicKey: "p13FvtJxxHD3tFiZx",
  });
})();


//for executing multiple functions in one button


// const toastBox = document.getElementById("toastBox");

// const successMsg =
//   ' <i class="fa-solid fa-circle-check"></i> Successfully sent';

// function showToast(msg) {
//   let toast = document.createElement("div");
//   toast.classList.add("toast");
//   toast.innerHTML = msg;
//   toastBox.appendChild(toast);

//   setTimeout(() => {
//     toast.remove();
//   }, 3000);
// }






function sendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_nx2ifr9", "template_zowd7lk", params)
    .then(function (res) {
      // alert("Message Sent");
    });
}
