
let sequence = 1;

function changeSequence() {
    if (sequence === 1) {
        document.getElementById("image1").src = "food.jpg";
        document.getElementById("image2").src = "eat.jpg";
        document.getElementById("image3").src = "daydream.jpg";

        document.getElementById("image1").alt = "Wowo sees food!";
        document.getElementById("image2").alt = "Wowo eating!!";
        document.getElementById("image3").alt = "Wowo daydreaming...";

        document.getElementById("text1").textContent = "Wowo sees food";
        document.getElementById("text2").textContent = "Wowo starts eating";
        document.getElementById("text3").textContent = "Wowo begins daydreaming";

        document.getElementById("sequence-title").textContent = "Sequence 2";

        sequence = 2;
    } else {
        document.getElementById("image1").src = "daydream.jpg";
        document.getElementById("image2").src = "food.jpg";
        document.getElementById("image3").src = "eat.jpg";

        document.getElementById("image1").alt = "Wowo daydreaming...";
        document.getElementById("image2").alt = "Wowo sees food!";
        document.getElementById("image3").alt = "Wowo eating!!";

        document.getElementById("text1").textContent = "Wowo is daydreaming";
        document.getElementById("text2").textContent = "Wowo sees food";
        document.getElementById("text3").textContent = "Wowo starts eating";

        document.getElementById("sequence-title").textContent = "Sequence 1";

        sequence = 1;
    }
}

document.getElementById("change-button").addEventListener("click", changeSequence);
