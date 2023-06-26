const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Fleche*/
let count = 0;
let imgTag = document.querySelector(".banner-img");
let text = document.querySelector("#banner p");
let dotNavigation = document.querySelector(".dots");
let arrowBefore = document.getElementsByClassName("arrow_left");
let arrowAfter = document.getElementsByClassName("arrow_right");

  for (let arrow of arrowBefore) {
	arrow.addEventListener('click', function onClick() {
		count--;
		if(count < 0){
			count = slides.length -1;
			imgTag.src = slides[count].image;
			text.textContent = slides[count].tagLine;
		}else{
			imgTag.src = slides[count].image;
			text.textContent = slides[count].tagLine;
		}
		updateDots();
	});}

	for (let arrow of arrowAfter) {
		arrow.addEventListener('click', function onClick() {
			count++;
    if(count >= slides.length){
        count = 0;
        imgTag.src = slides[count].image;
		text.textContent = slides[count].tagLine;
    }else{
        imgTag.src = slides[count].image;
		text.textContent = slides[count].tagLine;
    }
	updateDots();
		});}

function updateDots() {
	dotNavigation.forEach((dot, index) => {
    if (index === count) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}