console.log('Hello World')

var audio = document.createElement('audio');


{
    let vide = document.getElementById('vide');
    vide.onmouseover = function() {
        audio.src = "audio/rick-roll.mp3";
        audio.volume = 1
        audio.play();
    }
    vide.onclick = function() {
        console.log('Vide')
        audio.src = "audio/vide.mp3";
        audio.volume = 0
        audio.play();
    }
}

{
    let naruto = document.getElementById('naruto');
    naruto.onmouseover = function() {
        audio.src = "audio/naruto.wav";
        audio.volume = 0.5
        audio.play();
    }
    naruto.onclick = function() {
        console.log('Naruto')
        audio.src = "audio/naruto.mp3";
        audio.volume = 1
        audio.play();
    }
}

{
    let boruto = document.getElementById('boruto');
    boruto.onmouseover = function() {
        audio.src = "audio/boruto.wav";
        audio.volume = 1
        audio.play();
    }
    boruto.onclick = function() {
        console.log('Boruto')
        audio.src = "audio/boruto.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let dbz = document.getElementById('dbz');
    dbz.onmouseover = function() {
        audio.src = "audio/dbz.wav";
        audio.volume = 1
        audio.play();
    }
    dbz.onclick = function() {
        console.log('dbz')
        audio.src = "audio/dbz.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let onepiece = document.getElementById('onepiece');
    onepiece.onmouseover = function() {
        audio.src = "audio/onepiece.wav";
        audio.volume = 1
        audio.play();
    }
    onepiece.onclick = function() {
        console.log('onepiece')
        audio.src = "audio/onepiece.mp3";
        audio.volume = 0.5
        audio.play();
    }
}

{
    let ayaya = document.getElementById('ayaya');
    ayaya.onmouseover = function() {
        audio.src = "audio/ayaya.wav";
        audio.volume = 1
        audio.play();
    }
    ayaya.onclick = function() {
        console.log('ayaya')
        audio.src = "audio/ayaya.mp3";
        audio.volume = 0.4
        audio.play();
    }
}

{
    let nyanpasu = document.getElementById('nyanpasu');
    nyanpasu.onmouseover = function() {
        audio.src = "audio/nyanpasu.wav";
        audio.volume = 1
        audio.play();
    }
    nyanpasu.onclick = function() {
        console.log('nyanpasu')
        audio.src = "audio/nyanpasu.mp3";
        dbz
        audio.volume = 0.1
        audio.play();
    }
}