const mario = document.getElementById("mario");

const cactus = document.getElementById("cactus");



const jump = () => {

	if (mario.classList == "run" ) {

		mario.classList.remove("run");

		mario.classList.add("jump");

		setTimeout( () => {
			mario.classList.remove("jump");
			mario.classList.add("run");
		}, 500 );

	}
}

let active = setInterval( () => {

	let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));


	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


	if ( cactusLeft < 55 && cactusLeft > 0 && marioTop > 200  ){
		
		alert("Game Over!");
	}

}, 10 )


document.addEventListener("keydown", function (event) {

	jump();
})