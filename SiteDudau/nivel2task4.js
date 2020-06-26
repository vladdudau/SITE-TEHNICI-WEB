var timpul;
var timpInceput;
var timpPetrecutPeSite = AflaTimp();
var minute=0;
var secunde;
var ore;

function AflaTimp(){
    ///Am luat in variabila mea timpul din local storage in milisecunde
    ///Am parsat deoarece daca nu o faceam ar fi fost un string si mie imi trebuia un intreg
    timpPetrecutPeSite = parseInt(localStorage.getItem('timp'));
    ///Daca timpul este un numar il returnez, daca nu returnez 0
    timpPetrecutPeSite = isNaN(timpPetrecutPeSite) ? 0 : timpPetrecutPeSite;
    return timpPetrecutPeSite;
}

function IncepeNumaratoare(){
        ///Timpul de inceput va lua valoarea momentului actual
		timpInceput = Date.now();
		timpul = setInterval(function(){
            ///Actualizez la fiecare secunda timpul petrecut pe site
    		timpPetrecutPeSite = AflaTimp()+(Date.now()-timpInceput);
            localStorage.setItem('timp',timpPetrecutPeSite);
            ///Reactualizez timpul de inceput
            timpInceput = parseInt(Date.now());
    		// Deoarece este in milisecunde in convertesc in secunde
            console.log(parseInt(timpPetrecutPeSite/1000));
            secunde=parseInt(timpPetrecutPeSite/1000);
            minute=secunde/60;
            ore=minute/60;
            secunde=secunde%60;
            minute=minute%60;
            document.getElementById("timeSpent").innerHTML =Math.floor(ore)+ " ore " +  Math.floor(minute) + " minute si " + secunde + " secunde";
		},1000);
}
IncepeNumaratoare();

///Am facut o functie care opreste numaratoarea cand utilizatorul iese din pagina

var opreste = true; 

////Daca opreste e true
if( opreste ){
    ///Daca tipul e nedefinit
    if( typeof document.hidden !== "undefined" ){
        var ascuns = "hidden", 
        vizSchimb = "visibilitychange", 
        vizStare = "visibilityState";
        
    }else if ( typeof document.msHidden !== "undefined" ){
        var ascuns = "msHidden", 
        visSchimb = "msvisibilitychange", 
        visStare = "msVisibilityState";
    }
    ////Pt mozila
    ///Var ascuns initial mereu va fi hidden iar docAscuns va fi false
    var docAscuns = document[ascuns];

    document.addEventListener(vizSchimb, function() {
        ////daca una e true si alta  e false
        if(docAscuns != document[ascuns]) {
            if( document[ascuns] ){
                ///Inseamna ca fereastra este inactiva
                clearInterval(timpul);
            }else{
                // Inseamna ca fereastra este activa
                IncepeNumaratoare();
            }
            ///Fara aceasta linie daca iesim din pagina si apoi intram iar, nu mai ruleaza timer ul deoarece setez docascuns la false
            docAscuns = document[ascuns];
            console.log(docAscuns);
        }
    });
}