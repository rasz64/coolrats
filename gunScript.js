function shoot1() {
    document.getElementById("m4gun").src="pictures/m4shooting.gif";
    setTimeout(shoot1Stop, 100);
}

function shoot1Stop() {
    document.getElementById("m4gun").src="pictures/m4gun.png";
}

function shoot2() {
    document.getElementById("ak-47").src="pictures/ak-47.gif";
    setTimeout(shoot2Stop, 100);
}

function shoot2Stop() {
    document.getElementById("ak-47").src="pictures/ak-47.png";
}

function shoot3() {
    document.getElementById("m1garand").src="pictures/m1garand.gif";
    setTimeout(shoot3Stop, 100);
}

function shoot3Stop() {
    document.getElementById("m1garand").src="pictures/m1garand.png";
}