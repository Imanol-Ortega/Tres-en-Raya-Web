"use strict"
//querys
const dificultad = document.querySelector(".dificultades");
const caja = document.querySelectorAll(".item");
document.querySelector(".difi").style.visibility="hidden";

//variables
let tr=[false,false,false,false,false,false,false,false,false];
let gn=["0","0","0","0","0","0","0","0","0"];
let turno=1;
let emp=0;
let cemp=0;
let gana=false;
let x=0,y=0;
let i=0;
let abc=1;
let dificulti="";

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
    if(emp==0){
        dificulti = null;
        document.querySelector(".difi").style.visibility = "hidden";
        dificultad.style.visibility="hidden";
        document.querySelector(".modojuego").innerHTML="Modo de juego: 1v1";
    }
});
document.querySelector(".maq").addEventListener("mousedown",()=>{
    if(emp==0){
        document.querySelector(".difi").style.visibility = "visible";
        document.querySelector(".modojuego").innerHTML="Modo de juego: Contra máquina";
        dificultad.style.visibility="visible";
    }
});
document.querySelector(".facil").addEventListener("mousedown",()=>{
    if(emp==0){
        dificultad.innerHTML = "Dificultad: Fácil";
        dificulti="facil";
    }
});
document.querySelector(".medio").addEventListener("mousedown",()=>{
    if(emp==0){
        dificultad.innerHTML = "Dificultad: Medio";
        dificulti="medio";
    }
});
document.querySelector(".dificil").addEventListener("mousedown",()=>{
    if(emp==0){
        dificultad.innerHTML = "Dificultad: Dificil";
        dificulti="dificil";
    }
});

document.querySelector(".reiniciar").addEventListener("click",()=>{
    limpiarP();
});

caja[0].addEventListener("mousedown",e=>{
    insertImg(caja[0],0);
});
caja[1].addEventListener("mousedown",e=>{
    insertImg(caja[1],1);
});
caja[2].addEventListener("mousedown",e=>{
    insertImg(caja[2],2);
});
caja[3].addEventListener("mousedown",e=>{
    insertImg(caja[3],3);
});
caja[4].addEventListener("mousedown",e=>{
    insertImg(caja[4],4);
});
caja[5].addEventListener("mousedown",e=>{
    insertImg(caja[5],5);
});
caja[6].addEventListener("mousedown",e=>{
    insertImg(caja[6],6);
});
caja[7].addEventListener("mousedown",e=>{
    insertImg(caja[7],7);
});
caja[8].addEventListener("mousedown",e=>{
    insertImg(caja[8],8);
});

//funciones 
const insertImg= (caja,it)=>{
    if(tr[it]==false){     
        if(turno==1){
            x=dibujar(it,caja,"x","1",2,x);
          if(dificulti=="facil"){
              facil();
          }
          else if(dificulti=="medio"){
              med("1");
          }
        }
        else if(turno==2){
            y=dibujar(it,caja,"o","2",1,y);
            if(dificulti=="facil"){
                facil();
            }
            else if(dificulti=="medio"){
                med("2");
            }
        }
        if(emp==9){
            cemp++;
            avisoGanador("emp");
            document.querySelector(".emp").innerHTML = `Empates: ${cemp}`; 
            emp=0;
        }
    }
}
const dibujar = (it,caja,tf,nf,trn,nn)=>{
    let n=nn;
    let img = document.createElement("IMG");
    img.classList.add("img");
    img.setAttribute("src",`img/${tf}.png`);
    caja.appendChild(img);
    gn[it]=nf;
    turno=trn;
    n+=parseInt(ganador(nf,tf));
    document.querySelector(`.${tf}`).innerHTML=`${tf.toUpperCase()}: ${n/parseInt(nf)}`;
    if(tf==1){
        document.querySelector(".turn").innerHTML=`Turno: O`;
    }else{
        document.querySelector(".turn").innerHTML=`Turno: X`;
    }
    tr[it]=true;
    return n; 
}

const ganador=(n,t)=>{
    if(gn[0]==n && gn[4]==n && gn[8]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[2]==n && gn[4]==n && gn[6]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[1]==n && gn[4]==n && gn[7]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[3]==n && gn[4]==n && gn[5]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[0]==n && gn[1]==n && gn[2]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[6]==n && gn[7]==n && gn[8]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[0]==n && gn[3]==n && gn[6]==n){
        turno=3;
        avisoGanador(t);
        return n;
    }
    else if(gn[2]==n && gn[5]==n && gn[8]==n){
        turno=3;
        avisoGanador(t);
        return n;
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
    i=0;
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
        gana=false;
    }
}

const facil = ()=>{
    do{
        if(tr[i]==false){
            if(turno==1){
                x=dibujar(i,caja[i],"x","1",2,x);
                return;
            }
            else if(turno==2){
                y=dibujar(i,caja[i],"o","2",1,y);
                return;
            }
        }
        i++;
    }while(tr[i-1]==true);
    
}
const med = (n)=>{
    if(gn[0]==n && gn[1]==n && gn[2]=="0"){
        if(turno==1){
            x=dibujar(2,caja[2],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(2,caja[2],"o","2",1,y);
        }
    }
    else if(gn[0]==n && gn[1]=="0" && gn[2]==n){
        if(turno==1){
            x=dibujar(1,caja[1],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(1,caja[1],"o","2",1,y);
        }
    }
    else if(gn[0]=="0" && gn[2]==n && gn[1]==n){
        if(turno==1){
            x=dibujar(0,caja[0],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(0,caja[0],"o","2",1,y);
        }
    }
    else if(gn[3]==n && gn[4]==n && gn[5]=="0"){
        if(turno==1){
            x=dibujar(5,caja[5],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(5,caja[5],"o","2",1,y);
        }
    }
    else if(gn[3]==n && gn[4]=="0" && gn[5]==n){
        if(turno==1){
            x=dibujar(4,caja[4],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(4,caja[4],"o","2",1,y);
        }
    }
    else if(gn[3]=="0" && gn[4]==n && gn[5]==n){
        if(turno==1){
            x=dibujar(3,caja[3],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(3,caja[3],"o","2",1,y);
        }
    }
    else if(gn[6]==n && gn[7]==n && gn[8]=="0"){
        if(turno==1){
            x=dibujar(8,caja[8],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(8,caja[8],"o","2",1,y);
        }
    }
    else if(gn[6]==n && gn[7]=="0" && gn[8]==n){
        if(turno==1){
            x=dibujar(7,caja[7],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(7,caja[7],"o","2",1,y);
        }
    }  
    else if(gn[6]=="0" && gn[7]==n && gn[8]==n){
        if(turno==1){
            x=dibujar(6,caja[6],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(6,caja[6],"o","2",1,y);
        }
    }
    else if(gn[0]==n && gn[4]==n && gn[8]=="0"){
        if(turno==1){
            x=dibujar(8,caja[8],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(8,caja[8],"o","2",1,y);
        }
    }
    else if(gn[0]==n && gn[4]=="0" && gn[8]==n){
        if(turno==1){
            x=dibujar(4,caja[4],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(4,caja[4],"o","2",1,y);
        }
    }
    else if(gn[0]=="0" && gn[4]==n && gn[8]==n){
        if(turno==1){
            x=dibujar(0,caja[0],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(0,caja[0],"o","2",1,y);
        }
    }
    else if(gn[2]==n && gn[4]==n && gn[6]=="0"){
        if(turno==1){
            x=dibujar(6,caja[6],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(6,caja[6],"o","2",1,y);
        }
    }
    else if(gn[2]==n && gn[4]=="0" && gn[6]==n){
        if(turno==1){
            x=dibujar(4,caja[4],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(4,caja[4],"o","2",1,y);
        }
    }   
    else if(gn[2]=="0" && gn[4]==n && gn[6]==n){
        if(turno==1){
            x=dibujar(2,caja[2],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(2,caja[2],"o","2",1,y);
        }
    }
    else if(gn[0]==n && gn[3]==n && gn[6]=="0"){
        if(turno==1){
            x=dibujar(6,caja[6],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(6,caja[6],"o","2",1,y);
        }
    }
    else if(gn[0]==n && gn[3]=="0" && gn[6]==n){
        if(turno==1){
            x=dibujar(3,caja[3],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(3,caja[3],"o","2",1,y);
        }
    }
    else if(gn[0]=="0" && gn[3]==n && gn[6]==n){
        if(turno==1){
            x=dibujar(0,caja[0],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(0,caja[0],"o","2",1,y);
        }
    }
    else if(gn[1]==n && gn[4]==n && gn[7]=="0"){
        if(turno==1){
            x=dibujar(7,caja[7],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(7,caja[7],"o","2",1,y);
        }
    }
    else if(gn[1]==n && gn[4]=="0" && gn[7]==n){
        if(turno==1){
            x=dibujar(4,caja[4],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(4,caja[4],"o","2",1,y);
        }
    }
    else if(gn[1]=="0" && gn[4]==n && gn[7]==n){
        if(turno==1){
            x=dibujar(1,caja[1],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(1,caja[1],"o","2",1,y);
        }
    }
    else if(gn[2]==n && gn[5]==n && gn[8]=="0"){
        if(turno==1){
            x=dibujar(8,caja[8],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(8,caja[8],"o","2",1,y);
        }
    }
    else if(gn[2]==n && gn[5]=="0" && gn[8]==n){
        if(turno==1){
            x=dibujar(5,caja[5],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(5,caja[5],"o","2",1,y);
        }
    }
    else if(gn[2]=="0" && gn[5]==n && gn[8]==n){
        if(turno==1){
            x=dibujar(2,caja[2],"x","1",2,x);
        }
        else if(turno==2){
            y=dibujar(2,caja[2],"o","2",1,y);
        }
    }
    else{
        facil();
    }
    
}
const imposible = ()=>{
    //falta este
}
