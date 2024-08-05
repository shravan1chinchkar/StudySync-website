const scriptURL = "https://script.google.com/macros/s/AKfycbxLiEkRHt2uV3p5NtvwjolVSNG7KpkCX4FkI3_haCclt5FuVH9al1WvtAdRbGJOAijK/exec";
const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML="Message send Successfully!"
        setTimeout(() => {
            msg.innerHTML=""
            
        },4000);
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
