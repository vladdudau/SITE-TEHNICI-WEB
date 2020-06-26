////variabila true/false care arata in ce stare sunt imaginile:vizibile sau ascunse
var vizibil = true;
///variabila buton care reprezinta efectiv butonul nostru
var btn = document.getElementById('buton');

///Adaug un nou eveniment, cand dau click pe buton sa se ascunda imaginile si cand dau iar sa reapara
btn.addEventListener('click', function () {
    ///Iau toate imaginile cu tagul img de pe pagina si le bag in variabila imagini care va deveni un vector
    var imagini = document.getElementsByTagName('img');
    ////Daca imaginea este vizibila
    if (vizibil) {
        ///Apas pe buton si in loc de ascunde imagini acum va fi afisat Afiseaza imagini deoarece imaginile sunt ascunse
        btn.innerHTML="Afiseaza imagini";
        for (var i = 0; i < imagini.length; i++)
        imagini[i].style.display = 'none'
        vizibil = false;
        ///Fac un for de la 0 la nr de imagini si le ascund
    } else {
        ///Daca imaginile nu sunt vizibile, le facem sa fie vizibile si afisam iar textul butonului cu ascunde imagini
        btn.innerHTML="Ascunde Imagini";
        for (var i = 0; i < imagini.length; i++)
        imagini[i].style.display = 'inline'
        vizibil = true;
    }
});