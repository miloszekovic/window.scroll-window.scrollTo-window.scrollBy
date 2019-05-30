// element.addEventListener('click', doSomething, false)
let btn1 = document.querySelector(".button1"),
  btn2 = document.querySelector(".button2"),
  btn3 = document.querySelector(".button3"),
  btn4 = document.querySelector(".button4"),
  op = document.querySelector(".output")

btn1.addEventListener("click", function() {
    op.innerHTML += "<br />" + "Kliknuto!";
  },
  {
    capture: false,
    once: true,
    passive: false
  }
)

// window.scrollTo(0, 0)
btn2.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

// window.scrollBy(0, 0)
btn3.addEventListener("click", function() {
  window.scrollBy({
    top: 100,
    left: 100,
    behavior: "smooth"
  })
})

// window.scroll(0, 0)
btn4.addEventListener("click", function() {
  window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth"
  })
})
