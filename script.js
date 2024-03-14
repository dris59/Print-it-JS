

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//les variables
const flecheDroite = document.querySelector(".arrow_right"); // on récupére  la flèche droite
const flecheGauche = document.querySelector(".arrow_left"); // on récupére la flèche gauche
const imagediapo = document.querySelector(".banner-img"); //on crée une variable image correspondant au bloc avec la classe .banner-img
const numberImg=slides.length;
const laTagLine= document.querySelector("#banner p");

console.log("imageEnCours "+numberImg);
let imageEnCours =0;



// Ajouter un événement click sur la flèche droites
flecheDroite.addEventListener("click", () => {
    imageEnCours++;
    if(imageEnCours==numberImg){imageEnCours=0;}
	changeImage();

});
// Ajouter un événement click sur la flèche gauche
flecheGauche.addEventListener("click", () => {
    imageEnCours--;
    if(imageEnCours==-1){imageEnCours=numberImg-1;}
	changeImage();
});


function changeImage(){
	console.log("Image"+imageEnCours);
    imagediapo.src="./assets/images/slideshow/"+slides[imageEnCours].image;
	laTagLine.innerHTML=slides[imageEnCours].tagLine;
	document.querySelector(".dot_selected").classList.remove("dot_selected"); 
	document.querySelectorAll('.dot')[imageEnCours].classList.add("dot_selected");

}
//les points 
const points =document.querySelectorAll(".dots");
console.log(points);







