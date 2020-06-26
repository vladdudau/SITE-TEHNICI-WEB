////Functie care afiseaza numaratoarea inversa
var timp;
function countdown()
{
    ///Variabila acum ia data din momentul curent
    var acum=new Date();
    ///Data evenimentului va fi in variabila dataEv
    ///Desi data este 30 iunie, am pus la luna numarul 5 deoarece indexarea se face de la 0
    var dataEv=new Date(2020,5,30);

    ///in  timpCurent vom avea numarul de milisecunde dintre 1 ianuarie 1970 si data curenta
    var timpCurent=acum.getTime();
    
    ///in dataEv voi avea acum numarul de milisecunde dintre 1 ianuarie 1970 si data evenimentului
    var dataEv=dataEv.getTime();

    var diferenta=dataEv-timpCurent;
    if(diferenta<=0)
        {
            alert("Incepe meciul")
            return stop;
        }
    ///Impart la o mie deoarece o secunda are 1000 milisecunde
    var secunde=Math.floor(diferenta/1000);
    var minute=Math.floor(secunde/60);
    var ore=Math.floor(minute/60);
    var zile=Math.floor(ore/24);

    
    ore%=24;
    minute%=60;
    secunde%=60;

    ///In caz de nr de ore minute sau secunde este mai mic decat 10 sa afisez numarul cu 0 in fata
    if(ore<10)
        ore="0"+ore;
    if(secunde<10)
        secunde="0"+secunde;
    if(minute<10)
        minute="0"+minute;
    document.getElementById("zile").textContent=zile;
    document.getElementById("ore").textContent=ore;
    document.getElementById("minute").textContent=minute;
    document.getElementById("secunde").textContent=secunde;
    timp=setTimeout(countdown,1000);
}

///Functie care va opri cronometrul in caz de ajunge in momentul dorit
function stop()
{
    if(timp)
    {
        clearTimeout(timp);
        timp=0;
    }
}
countdown();