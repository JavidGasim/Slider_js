var mainImg = document.getElementById("mainImg");
var d;

var max = 11;

var isEven = false;

var elements = document.querySelectorAll("img");
var ccc = 0;

function ChangeMainImage(index) {
  setTimeout(() => {
    mainImg.style.marginLeft = `-${index * 100}%`;
    ccc = index * 1000;
    index++;
    if (index == max) {
      index = 0;
    }
  }, 500);
}

var c = 0;
var img1 = document.getElementById("1");
function SelectImage(id) {
  c++;
  if (c == 2) {
    let img = document.getElementById(d);
    img.style.border = "0px solid black";
    img.style.borderRadius = "0px";

    c = 1;
  }
  d = id;
  var img = document.getElementById(id);

  ChangeMainImage(id);
  console.log(`images/${id}.jpg`);
  img.style.border = "3px solid yellow";
  img.style.borderRadius = "20px";

  if (id === "4") {
    img1.style.marginLeft = "-50%";
  }
  if (id === "3") {
    img1.style.marginLeft = "0%";
  }
  if (id === "6") {
    img1.style.marginLeft = "-100%";
  }
  if (id === "5") {
    img1.style.marginLeft = "-50%";
  }
  if (id === "8") {
    img1.style.marginLeft = "-150%";
  }
  if (id === "7") {
    img1.style.marginLeft = "-100%";
  }
}

function ChangeImgWithMouse(event) {
  let mouseX = event.clientX;
  ccc += mouseX;

  console.log(ccc);
  mainImg.style.marginLeft = `-${ccc}px`;
}

var ppp = 0;
function Change(event) {
  let mouseX = event.clientX;

  ppp += 25;

  console.log(ccc);
  img1.style.marginLeft = `-${ppp}%`;
}
