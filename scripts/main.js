let clickCounter;
clickCounter = 0;
function buttonClick() {
    let newText;
    switch (clickCounter) {
        case 0:
            newText = "<p>Yay!</p>";
            break;
        case 1:
            newText = "<p>Okay, we get it.</p>";
            break;
        default:
            newText = "";
            clickCounter = -1;
    }
    document.getElementById("clickMessage").innerHTML = newText;    
    clickCounter++;
}