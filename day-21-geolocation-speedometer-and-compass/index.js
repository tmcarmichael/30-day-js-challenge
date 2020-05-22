const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  // success callback
  console.log(data);
  speed.textContent = Math.round(data.coords.speed);
  // Rotate compass arrow
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
  console.log(err);
  alert('Allow use location.')
});