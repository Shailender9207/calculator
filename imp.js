// // spread operator
// arr=[1,2,3,4,5,6,7,8,9,10]
// //console.log(...arr)
// function avg(a,b,c,d){
//     return (a+b+c+d)/4
// }
// //console.log(avg(...arr))
// obj1={
//     name1:"ram",
//     age:20,
//     city:"delhi"
// }
// let {name1,age,city}=obj1
// console.log(name1)
let otpt=document.getElementById("output");
let buttons=document.querySelectorAll("button");
let sum=" ";
for(i of buttons){
    i.addEventListener("click",(e)=>{
    val=e.target.innerText;
    if(val=="C" || otpt.value==undefined){
        otpt.value=" ";
    }
    else if(val=="="){
      try { 
          if(otpt.value==""){
              alert("Enter a valid expression")
          }
          else{
        otpt.value=eval(otpt.value)
          } 
      } catch (error) {
          alert("Enter a valid expression");
          otpt.value=" ";
      }  

    }
    else if(val=="BackSpace"){

        otpt.value=otpt.value.slice(0,-1);
    }    
    else {
        otpt.value+=val
    }
        
    }
    )
}