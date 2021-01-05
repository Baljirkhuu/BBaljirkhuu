let count = 0;
function show(){
	if (count == 0) {
		document.querySelector("#fault").style.display = "block";
		count = -1
	}
	count++;
};
let nemeh = 0;
function hidebtn(){
	if(nemeh == 0){
		document.querySelector('#fault').style.display = "none";
		nemeh = -1
	}
	nemeh++
};
let countwo = 0;
function showTwo(){
	if (countwo == 0) {
		document.querySelector("#faultwo").style.display = "block";
		countwo = -1
	}
	countwo++;
};
let nemehTwo = 0;
function hidebtnTwo(){
	if(nemehTwo == 0){
		document.querySelector('#faultwo').style.display = "none";
		nemehTwo = -1
	}
	nemehTwo++
};
let counthree = 0;
function showthree(){
	if (counthree == 0) {
		document.querySelector("#faulthree").style.display = "block";
		counthree = -1
	}
	counthree++;
};
let nemehThree = 0;
function hidebtnthree(){
	if(nemehThree == 0){
		document.querySelector('#faulthree').style.display = "none";
		nemehThree = -1
	}
	nemehThree++
};

let up = 0;
function dpdown(){
	if (up == 0) {
		document.querySelector('#rightangle').style.display = "block";
		up = -1
	}
	up++
};
let down = 0;
function slide(){
	if (down == 0) {
		document.querySelector('#rightangle').style.display = "none";
		down = -1
	}
	down++
};