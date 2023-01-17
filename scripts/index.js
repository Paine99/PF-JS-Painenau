const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
//fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
	}
};

fetch('https://youtube-video-info.p.rapidapi.com/video_formats?video=edPREMPZ5RA', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  //fetch
  