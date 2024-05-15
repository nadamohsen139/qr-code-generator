let imgBox = document.querySelector(".img-box");
let qrImage = document.querySelector(".qr-image");
let qrText = document.querySelector(".qr-text");
let qrBtn = document.querySelector("button");
qrBtn.addEventListener("click", generateQr);
function generateQr() {
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.style.display = "block";
    } else if(qrText.value.length === 0) {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 2000)
    }
};
