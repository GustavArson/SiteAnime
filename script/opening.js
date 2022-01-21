console.log('Hello World')

var audio = document.createElement('audio');


{
    let vide = document.getElementById('vide');
    vide.onclick = function() {
        console.log('Vide')
        audio.src = "audio/vide.mp3";
        audio.volume = 0
        audio.play();
    }
}

{
    let naruto = document.getElementById('naruto');
    naruto.onclick = function() {
        console.log('Naruto')
        audio.src = "audio/naruto.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let boruto = document.getElementById('boruto');
    boruto.onclick = function() {
        console.log('Boruto')
        audio.src = "audio/boruto.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let dbz = document.getElementById('dbz');
    dbz.onclick = function() {
        console.log('dbz')
        audio.src = "audio/dbz.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let onepiece = document.getElementById('onepiece');
    onepiece.onclick = function() {
        console.log('onepiece')
        audio.src = "audio/onepiece.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let ayaya = document.getElementById('ayaya');
    ayaya.onclick = function() {
        console.log('ayaya')
        audio.src = "audio/ayaya.mp3";
        audio.volume = 0.4
        audio.play();
    }
}

{
    let nyanpasu = document.getElementById('nyanpasu');
    nyanpasu.onclick = function() {
        console.log('nyanpasu')
        audio.src = "audio/nyanpasu.mp3";
        dbz
        audio.volume = 0.1
        audio.play();
    }
}