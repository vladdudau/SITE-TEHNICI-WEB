////variabile reprezinta stringurile care vor fi afisate
var text1 = 'Liga Campionilor UEFA (UCL) (numită Cupa Campionilor Europeni până în 1992) este o competiție fotbalistică europeană anuală inter-cluburi dedicată celor mai victorioase echipe din Europa. Ea reprezintă una dintre cele mai prestigioase trofee de cluburi în sport, alături de Copa Libertadores a Americii de Sud. Liga Campionilor nu trebuie confundată cu Europa League, al doilea cel mai important campionat pentru echipe de cluburi europene. Real Madrid este cel mai de succes club din istoria competiției, câștigând trofeul de treisprezece ori, inclusiv primele 5 ediții.';
var text2 = 'ULTIMUL MECI REAL MADRID-BARCELONA 2-0';

////Fac un split dupa spatii pentru a avea fiecare cuvant 
var string1 = text1.split(' ');
var string2 = text2.split(' ');
var timp;

///Functia aparitie va afisa fiecare cuvant la un interal de 1/3 secunde
function Aparitie() {
    ///daca stringul nu e vid
     if (string1.length > 0) 
      {
        ///Afisez primul cuvant si in acelasi timp il si sterg cu functia shift
         document.getElementById('sectiune1').innerHTML += string1.shift();
         ///Afisez si un spatiu
         document.getElementById('sectiune1').innerHTML += ' ';
        } 
    ///Daca lungimea sirului e mai mica decat 0 opresc timer ul si ies din functie
    else if (string2.length < 0) 
        {
            clearTimeout(timp);
            return false;
        }
    ///Aceleasi explicatii ca la primul string
    if (string2.length > 0) 
    {
        document.getElementById('sectiune2').innerHTML += string2.shift();
        document.getElementById('sectiune2').innerHTML += ' ';
    } 
    timp = setTimeout('Aparitie()', 333);
}
