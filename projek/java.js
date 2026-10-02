let mailBox = document.querySelector('.mail');
let boxmail = document.querySelector('.boxMail');
let close = document.querySelector('.fa-xmark');

const bgMusic = document.getElementById("bgMusic");

mailBox.onclick = function () {
    mailBox.classList.toggle('active');
    boxmail.classList.add('active');

    bgMusic.play().catch(error => {
        console.log("Musik tidak dapat diputar:", error);
    });
};

close.addEventListener('click', function () {
    boxmail.classList.remove('active');
});