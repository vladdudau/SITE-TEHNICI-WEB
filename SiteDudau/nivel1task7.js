/// vector de mesaje
const mesaje = ['Trebuie sa crezi in tine ca vei ajunge fotbalist!', 'O sa ai un an de neuitat!', 'Vei deveni un adevarat campion!', 'Tot ce ti doresti se va implini'];
/// o pozitie generata random de la 0 la lungimea vectorului de mesaje 
const pozitie = Math.round(Math.random()*(mesaje.length-1));
///afisez in tagul p cu id ul ravase mesajul
document.getElementById("ravase").innerHTML = mesaje[pozitie];
