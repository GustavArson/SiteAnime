var i = 0;
var images = [];
var time = 100;

images[0] = "image/img1.jpg";
images[1] = "image/img2.jpg";
images[2] = "image/img3.jpg";
images[3] = "image/img4.jpg";
images[4] = "image/img5.jpg";
images[5] = "image/img6.jpg";
images[6] = "image/img7.jpg";
images[7] = "image/img8.jpg";
images[8] = "image/img9.jpg";
images[9] = "image/img10.jpg";
images[10] = "image/img11.jpg";
images[11] = "image/img12.jpg";
images[12] = "image/img13.jpg";
images[13] = "image/img14.jpg";
images[14] = "image/img15.jpg";
images[15] = "image/img16.jpg";
images[16] = "image/img17.jpg";
images[17] = "image/im18.jpg";
images[18] = "image/img19.jpg";
images[19] = "image/img20.jpg";

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
