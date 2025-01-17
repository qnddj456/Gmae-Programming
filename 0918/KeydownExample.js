window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var strKeyEventType = "None";
var strKeyEventValue = "None";

function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600);
    Context.fillStyle = "#ffffff";
    Context.font = '25px Arial';
    Context.textBaseline = "top";
    Context.fillText("입력된 키 : " + strKeyEventValue, 5, 5);
    Context.fillText("키 입력 상태 : " + strKeyEventType, 5, 30);
}

function onkeydown(e) {
    // 이곳에서 키를 눌렀을 때의 상황을 처리합니다.
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}

function onkeyup(e) {
    // 이곳에서 키를 땠을 때의 상황을 처리합니다.
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}
