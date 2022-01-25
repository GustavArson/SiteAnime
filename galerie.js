var i = 0;
var images = [];
var time = 1000;


images[0] = "image/img7.jpg";
images[1] = "image/img10.jpg";
images[2] = "image/img11.jpg";
images[3] = "image/img12.jpg";
images[4] = "image/img13.jpg";
images[5] = "image/img14.jpg";
images[6] = "image/img15.jpg";
images[7] = "image/img16.jpg";
images[8] = "image/img17.jpg";
images[9] = "image/img18.jpg";
images[10] = "image/img19.jpg";
images[11] = "image/img20.jpg";

function changeImg(){
  document.slide.src = images[i];

  if(i<images.length-1){
    i++;
  } else {
    i =0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
