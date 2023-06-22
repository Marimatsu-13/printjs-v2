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
var count = 0;
var imgTag = document.querySelector(".banner-img");
var text = document.querySelector("p");
var dot = document.querySelectorAll(".dots");
var dotchild = document.querySelectorAll(".dot");



function avant(){
	alert("Avant");
	count--;
    if(count < 0){
        count = slides.length -1;
        imgTag.src = slides[count].image;
		text.innerHTML = slides[count].tagLine;
    }else{
        imgTag.src = slides[count].image;
		text.innerHTML = slides[count].tagLine;
    }
}

function apres(){
	alert("Après")
	count++;
    if(count >= slides.length){
        count = 0;
        imgTag.src = slides[count].image;
		text.innerHTML = slides[count].tagLine;
    }else{
        imgTag.src = slides[count].image;
		text.innerHTML = slides[count].tagLine;
    }
	
}


