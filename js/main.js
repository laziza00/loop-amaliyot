
let myImage = document.querySelector('#myimage')
let myImageBox = document.querySelector('#myImageBox img')


myImage.addEventListener("mousemove", (e) => {
  let x = e.offsetX -100;
  let y = e.offsetY -100;
  myImageBox.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
})