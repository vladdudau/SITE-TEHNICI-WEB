const canvas=document.getElementById("canvas1");
///Functia getContext returneaza un context de desenare sau null daca nu e suportat in cazul nostru 2d
const ctx=canvas.getContext('2d');
////ia latimea si inaltimea paginii
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;

var vectorPart;

///Fac un constructor care va construi particula cu particula
function Particle(x,y,directionX,directionY,size,color)
{
    this.x=x;
    this.y=y;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size=size;
    this.color=color;
}

///Functie care deseneaza
Particle.prototype.draw=function()
{
    ///Incepe un nou path curatand lista de sub-pathuri sau reseteaza path ul
    //Se cheama mereu prima beginPath
    ctx.beginPath();
    ///Creez un cerc cu centrul in x y raza size 
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ///.fillStyle ne indica culoarea 
    ctx.fillStyle=this.color;
    ///.fill umple forma cu culoare
    ctx.fill();
}

////Functie care face update
Particle.prototype.update=function()
{
    ///In caz de depaseste marginea, se intoarce spre interior
    if(this.x+this.size>canvas.width||this.x-this.size<0)
    {
        this.directionX=-this.directionX;
    }
    if(this.y+this.size>canvas.height||this.y-this.size<0)
    {
        this.directionY=-this.directionY;
    }
    ///Am pus 3* pentru a se misca putin mai repede
    this.x+=3*this.directionX;
    this.y+=3*this.directionY;
    this.draw();
}

///Functie care initializeaza
function init()
{
    ///Am adaugat 100 de particule
    vectorPart=[];
    for(let i=0;i<100;i++)
    {
        let size=Math.random()*20;
        let x=Math.random() * (innerWidth-size*2);
        let y=Math.random()*(innerHeight-size*2);
        let directionX=(Math.random() * 0.4) - 0.2;
        let directiony=(Math.random()* 0.4) - 0.2;
        let color='white';
        vectorPart.push(new Particle(x,y,directionX,directiony,size,color));
    }
}

function animate()
{
    ///Este un fel de setinterval doar ca se opreste cand iesi din papgina
    requestAnimationFrame(animate);
    ///Functia clearRect curata suprafata dintre pixeli
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<vectorPart.length;i++)
    {
        vectorPart[i].update();
    }
}
init();
animate();

///Cand faceam pagina mai mica se destabiliza imaginea 
window.addEventListener('resize',
function()
{
    canvas.width=innerWidth;
    canvas.height=innerHeight;
    init();
}
)

