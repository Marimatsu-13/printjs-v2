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

let count = 0;
let imgTag = document.querySelector(".banner-img");
let text = document.querySelector("#banner p");
let dotNavigation = document.querySelector(".dots");
let arrowBefore = document.querySelector(".arrow_left");
let arrowAfter = document.querySelector(".arrow_right");

 
	arrowBefore.addEventListener('click', function onClick() {
		count--;
		if(count < 0){
			count = slides.length -1;
			imgTag.src = slides[count].image;
			const parser = new DOMParser();
            const doc = parser.parseFromString(slides[count].tagLine, "text/html");
			const txt1 = doc.body.firstChild.textContent;
			const txt2 = doc.body.lastChild.textContent;
			text.textContent = txt1;
			text.insertAdjacentHTML('beforeend', "<span>" + txt2 + "</span>");
			
			
		}else{
			imgTag.src = slides[count].image;
			const parser = new DOMParser();
            const doc = parser.parseFromString(slides[count].tagLine, "text/html");
			const txt1 = doc.body.firstChild.textContent;
			const txt2 = doc.body.lastChild.textContent;
			text.textContent = txt1;
			text.insertAdjacentHTML('beforeend', "<span>" + txt2 + "</span>");
			
		}
		updateDots()	
	});


arrowAfter.addEventListener('click', function onClick() {
			count++;
    if(count >= slides.length){
        count = 0;
        imgTag.src = slides[count].image;
			const parser = new DOMParser();
            const doc = parser.parseFromString(slides[count].tagLine, "text/html");
			const txt1 = doc.body.firstChild.textContent;
			const txt2 = doc.body.lastChild.textContent;
			text.textContent = txt1;
			text.insertAdjacentHTML('beforeend', "<span>" + txt2 + "</span>");

    }else{
        imgTag.src = slides[count].image;
			const parser = new DOMParser();
            const doc = parser.parseFromString(slides[count].tagLine, "text/html");
			const txt1 = doc.body.firstChild.textContent;
			const txt2 = doc.body.lastChild.textContent;
			text.textContent = txt1;
			text.insertAdjacentHTML('beforeend', "<span>" + txt2 + "</span>");
		
    }
	updateDots()
		});


function createDots() {
  for (let i = 0; i < slides.length-1; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotNavigation.appendChild(dot);
  }
}

createDots();

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }