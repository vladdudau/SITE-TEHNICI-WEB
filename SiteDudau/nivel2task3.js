////Am facut o functie care sa afiseze literele din titlu alternativ cate doua pana la cea din mijloc prima ultima, a doua penultima etc
///Am folosit DOMContentLoaded deoarece mereu imi dadea null cand voiam sa fac getElementById deoarece banuiesc 
///ca documentul HTML a fost complet incarcat si parsat inainte sa se apeleze functia si de asta nu mi l gasea
document.addEventListener("DOMContentLoaded", function(event) { 
    
    var titlu=document.getElementById("nume_pag");
    let lungime = titlu.innerText.length;
    
    // pun span pt fiecare caracter
    let spanificat = "";
    
    ////[...titlu.innerText] reprezinta un array alcatuit din literele titlului
    ////Pentru fiecare caracter din titlu
    [...titlu.innerText].forEach(caracter => {
        spanificat += '<span class="ch">' + caracter + "</span>";
    })
    ////am adaugat cate un span pentru fiecare caracter si clasa ch
    ///Am schimbat continutul titlului cu variabila spanificat
    ///Am pus pe fiecare un span pentru a putea sa le afisez doua cate doua
    titlu.innerHTML = spanificat;

    ///litere  este un array de spanuri 
    let litere = document.getElementsByClassName("ch");
    ///Pentru fiecare litera o ascund, ii fac opacitatea 0
    [...litere].forEach(litera => {
        litera.style.opacity = "0";
    })
 
    ///Imi setez pozitia de inceput si de sfarsit
    let start = 0, final = lungime - 1;
 
    // interval animatie: 100ms
    let timp = window.setInterval(animareTitlu, 100);
 
    function animareTitlu() {
 
        ////Fac cate 2 litere la fiecare pas sa fie vizibile facandu le opacitatea 1
        if (start <= final) {
            litere[start].style.opacity = "1";
            litere[final].style.opacity = "1";
            start++;
            final--;
        }
        else {
            clearInterval(timp)
        }
    }
})


