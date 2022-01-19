"use strict"

//querys
const caja1 = document.querySelector(".item1");
const caja2 = document.querySelector(".item2");
const caja3 = document.querySelector(".item3");
const caja4 = document.querySelector(".item4");
const caja5 = document.querySelector(".item5");
const caja6 = document.querySelector(".item6");
const caja7 = document.querySelector(".item7");
const caja8 = document.querySelector(".item8");
const caja9 = document.querySelector(".item9");
const opt = document.querySelector(".options");
const dificultad = document.querySelector(".dificultades");
document.querySelector(".difi").style.visibility="hidden";

//variables
let tr=[false,false,false,false,false,false,false,false,false];
let gn=["0","0","0","0","0","0","0","0","0"];
let turno=1;
let emp=0;
let cemp=0;
let gana=false;
let x=0,y=0;
let eljug=true;
let abc=1;

//Eventos listener

document.querySelector(".jugX").addEventListener("mousedown",()=>{
    if(emp==0){
        abc=1;
        turno=abc;
        document.querySelector(".turn").innerHTML="Turno: X";
    }
});
document.querySelector(".jugO").addEventListener("mousedown",()=>{
    if(emp==0){
        abc=2;
        turno=abc;
        document.querySelector(".turn").innerHTML="Turno: O";
    }
});

document.querySelector(".solo").addEventListener("mousedown",()=>{
    document.querySelector(".difi").style.visibility = "hidden";
    dificultad.style.visibility="hidden";
    document.querySelector(".modojuego").innerHTML="Modo de juego: 1v1";
});
document.querySelector(".maq").addEventListener("mousedown",()=>{
    document.querySelector(".difi").style.visibility = "visible";
    document.querySelector(".modojuego").innerHTML="Modo de juego: Contra máquina";
    dificultad.style.visibility="visible";
});


document.querySelector(".facil").addEventListener("mousedown",()=>{
    dificultad.innerHTML = "Dificultad: Fácil";
});
document.querySelector(".medio").addEventListener("mousedown",()=>{
    dificultad.innerHTML = "Dificultad: Medio";
});
document.querySelector(".dificil").addEventListener("mousedown",()=>{
    dificultad.innerHTML = "Dificultad: Dificil";
});

document.querySelector(".reiniciar").addEventListener("click",()=>{
    limpiarP();
});


caja1.addEventListener("mousedown",e=>{
    insertImg(caja1,0);
});
caja2.addEventListener("mousedown",e=>{
    insertImg(caja2,1);
});
caja3.addEventListener("mousedown",e=>{
    insertImg(caja3,2);
});
caja4.addEventListener("mousedown",e=>{
    insertImg(caja4,3);
});
caja5.addEventListener("mousedown",e=>{
    insertImg(caja5,4);
});
caja6.addEventListener("mousedown",e=>{
    insertImg(caja6,5);
});
caja7.addEventListener("mousedown",e=>{
    insertImg(caja7,6);
});
caja8.addEventListener("mousedown",e=>{
    insertImg(caja8,7);
});
caja9.addEventListener("mousedown",e=>{
    insertImg(caja9,8);
});



//funciones 
const insertImg= (caja,it)=>{
    if(tr[it]==false){     
        if(turno==1){
          x=dibujar(it,caja,"x","1","O",1,2,x);
          console.log("x");
        }
        else if(turno==2){
            y=dibujar(it,caja,"o","2","X",2,1,y);
            console.log("o");
        }
        if(emp==9){
            cemp++;
            avisoGanador("emp");
            document.querySelector(".emp").innerHTML = `Empates: ${cemp}`; 
            emp=0;
        }
        tr[it]=true;
    }
}
const dibujar = (it,caja,tf,nf,tr,d,trn,nn)=>{
    let n=nn;
    let img = document.createElement("IMG");
    img.classList.add("img");
    img.setAttribute("src",`img/${tf}.png`);
    caja.appendChild(img);
    gn[it]=nf;
    turno=trn;
    n+=ganador(nf,tf);
    document.querySelector(`.${tf}`).innerHTML=`${tf.toUpperCase()}: ${n/d}`;
    document.querySelector(".turn").innerHTML=`Turno: ${tr}`;
    return n; 
}

const ganador=(n,t)=>{
    if(gn[0]==n && gn[4]==n && gn[8]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[2]==n && gn[4]==n && gn[6]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[1]==n && gn[4]==n && gn[7]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[3]==n && gn[4]==n && gn[5]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n)
    }
    else if(gn[0]==n && gn[1]==n && gn[2]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[6]==n && gn[7]==n && gn[8]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[0]==n && gn[3]==n && gn[6]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }
    else if(gn[2]==n && gn[5]==n && gn[8]==n){
        console.log(`${t} ganó`);
        turno=3;
        avisoGanador(t);
        return parseInt(n);
    }else{
        emp++;
        return 0;
    }
}
const avisoGanador = gan =>{
    gana = true;
    let div = document.createElement("DIV");
    let gh1 = document.createElement("h1");
    gh1.classList.add("h1");
    div.classList.add("ganador");
    if(!(gan=="emp")){
        gh1.innerHTML = `Ganador ${gan}`;
    }
    else{
        gh1.innerHTML = `Empate`;
    }
    div.appendChild(gh1);
    document.querySelector(".contenedor").appendChild(div);
}
const limpiarP = ()=>{
    turno=abc;
    emp=0;
    if(turno==1){
        document.querySelector(".turn").innerHTML=`Turno: X`;
    }else{
        document.querySelector(".turn").innerHTML="Turno: O";
    }
    let elementimg = document.querySelectorAll(".img");
    for(let i=0;i<elementimg.length;i++){
        elementimg[i].remove();
    }
    for(let i=0;i<9;i++){
        tr[i]=false;
        gn[i]="0";
    }
    if(gana==true){
        document.querySelector(".ganador").remove();
    }
}

