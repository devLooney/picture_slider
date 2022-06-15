const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

nextBtn.addEventListener("click", advance)
prevBtn.addEventListener("click", retreat)

let imageNumber = 0
let totalImages = 10
let lastImage = 0

function advance () {
  
  // document.getElementById("slider-image" + (imageNumber + 1)).classList.remove("active")

  nextBtn.removeEventListener("click", advance)

  document.getElementById("slider-image" + (imageNumber + 1)).style.animation = "forward-out 1s"

  lastImage = imageNumber
  
  imageNumber = (totalImages + imageNumber + 1) % totalImages

  document.getElementById("slider-image" + (imageNumber + 1)).classList.add("active")

  document.getElementById("slider-image" + (imageNumber + 1)).style.animation = "forward-in 1s"

  setTimeout(function () {
    document.getElementById("slider-image" + (lastImage + 1)).classList.remove("active")
    nextBtn.addEventListener("click", advance)
  }, 900)



}

function retreat () {

  // document.getElementById("slider-image" + (imageNumber + 1)).classList.remove("active")

  prevBtn.removeEventListener("click", retreat)

  document.getElementById("slider-image" + (imageNumber + 1)).style.animation = "backward-out 1s"

  lastImage = imageNumber

  imageNumber = (totalImages + imageNumber - 1) % totalImages

  document.getElementById("slider-image" + (imageNumber + 1)).classList.add("active")

  document.getElementById("slider-image" + (imageNumber + 1)).style.animation = "backward-in 1s"

  setTimeout(function () {
    document.getElementById("slider-image" + (lastImage + 1)).classList.remove("active")
    prevBtn.addEventListener("click", retreat)
  }, 900)

}