const counter = document.querySelector('.counter');
const speed = 200;

const updateCount = () => {
	const target = +counter.getAttribute('data-target');
	const count = +counter.innerText;

	// Lower inc to slow and higher to slow
	const inc = target / speed;

	// console.log(inc);
	// console.log(count);

	// Check if target is reached
	if (count < target) {
		// Add inc to count and output in counter
		counter.innerText = Math.ceil(count + inc);
		// Call function every ms
		setTimeout(updateCount, 80);
	} else {
		counter.innerText = target;
		counter.setAttribute("style", "color: #fff; font-size: 12rem;");
	}
};

updateCount();

let images = ['img/meihui1.JPG', 'img/meihui2.JPG','img/meihui3.JPG',
	'img/meihui4.JPG','img/meihui5.JPG','img/meihui6.JPG','img/meihui7.JPG',
	'img/meihui8.JPG','img/meihui9.JPG','img/meihui10.JPG','img/meihui11.JPG',
	'img/meihui12.JPG','img/meihui13.JPG','img/meihui14.JPG','img/meihui15.JPG','img/meihui16.JPG',];


const image1 = document.querySelector('.image1');

getRandomImage1 = () => {

	let imageIndex = Math.floor(Math.random()*images.length)
	let imageFiller = images[imageIndex];
	images.splice(imageIndex, 1);
	 
	return imageFiller;
}
 
displayRandomImage1 = () => {

	let htmlImage = document.querySelector(".image1");
	htmlImage.src = getRandomImage1();

}
displayRandomImage1();



const image2 = document.querySelector('.image2');

getRandomImage2 = () => {

	let imageIndex = Math.floor(Math.random()*images.length)
	let imageFiller = images[imageIndex];
	images.splice(imageIndex, 1);

	return imageFiller;
}

displayRandomImage2 = () => {

	let htmlImage = document.querySelector(".image2");
	htmlImage.src = getRandomImage2();

}
displayRandomImage2();



const image3 = document.querySelector('.image3');

getRandomImage3 = () => {

	let imageIndex = Math.floor(Math.random()*images.length)
	let imageFiller = images[imageIndex];
	images.splice(imageIndex, 1);
	 
	return imageFiller;
}
 
displayRandomImage3 = () => {

	let htmlImage = document.querySelector(".image3");
	htmlImage.src = getRandomImage3();

}
displayRandomImage3();
