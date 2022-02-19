let inputNumber = document.getElementById("lucky_number");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click",()=>{
    result.innerText = ""
    x = 0;
    while(x < inputNumber.value){
    x++; 
    let liste = [];
    let liste2 =[];
    while(liste.length < 6){
    let random = Math.floor(Math.random()*90+1);
    if(liste.includes(random)){
        continue;
    }
    else{
        liste.push(random);
        if(liste.length == 6){
            liste.sort((a,b) => a-b);
         
        }
    }
}
let random2 = Math.floor(Math.random()*90+1);
if (liste.includes(random2)) {
    continue;    
}
else{
    liste2.push(random2)
}
let joker = liste2[0];

let superStar = Math.floor(Math.random()*90+1);


result.innerText += `${liste[0]}-${liste[1]}-${liste[2]}-${liste[3]}-${liste[4]}-${liste[5]} | ${joker} | ${superStar} \n`    
    

  
}

})

