const face = document.querySelectorAll('.face')
var numComments = face.length;
for (var i = 0; i < numComments; i++) {
    face[i].addEventListener('click', event => {
        console.log(event.target.id);
    }, false);
}
