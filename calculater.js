let numbers = document.querySelectorAll(".num");
let ops = document.querySelectorAll(".ops");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equals");
let del = document.querySelector(".del");
let curentvalue = document.querySelector(".curentvalue");
let result = document.querySelector(".result");

let firstNumber = "";
let secondNumber = "";

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (curentvalue.textContent.includes(".")) {
      btn.textContent.includes(".") && disabled;
    }
    if (!selectop) {
      firstNumber += btn.textContent;
      curentvalue.textContent += btn.textContent;
    } else {
      if (curentvalue.textContent.includes(selectop)) {
        curentvalue.textContent = "";
      }
      curentvalue.textContent += btn.textContent;
      secondNumber += btn.textContent;
    }
  });
});


let selectop = "";
ops.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectop = btn.textContent;
    if (!!curentvalue.textContent) {
      curentvalue.textContent = selectop;
    }
  });
});
equal.addEventListener("click", () => {
  if (selectop === "+") {
    let a = +firstNumber + +secondNumber;
    result.textContent = a;
    curentvalue.textContent = a;
    firstNumber = "";
    secondNumber = "";
    firstNumber = +a;
    console.log(result.textContent);
  } else if (selectop === "-") {
    let b = +firstNumber - +secondNumber;
    result.textContent = b;
    curentvalue.textContent = b;
    firstNumber = "";
    secondNumber = "";
    firstNumber = +b;
  } else if (selectop === "*") {
    let c = +firstNumber * +secondNumber;
    result.textContent = c;
    curentvalue.textContent = c;
    firstNumber = "";
    secondNumber = "";
    firstNumber = +c;
  } else if (selectop === "/") {
    let d = +firstNumber / +secondNumber;
    result.textContent = d;
    curentvalue.textContent = d;
    firstNumber = "";
    secondNumber = "";
    firstNumber = +d;
  }
});
del.addEventListener("click", () => {
  curentvalue.textContent = curentvalue.textContent.slice(0, -1);
  result.textContent = "";
  if(secondNumber){
    secondNumber =""
  }else if (selectop){
    selectop = ""
  }else if (firstNumber){
    firstNumber =""
  }
});
clear.addEventListener("click", () => {
  firstNumber= "";
  secondNumber= "";
  curentvalue.textContent = "";
  result.textContent = "";
  selectop = "";
});












// let btns = document.querySelectorAll(".btn");
// let result = document.querySelector(".result")
// let fNumber =document.querySelector(".fNumber")
// let selectOperator =document.querySelector(".selectoperator");
// let secondNumber =document.querySelector(".secondNumber")
// let btns2=document.querySelectorAll(".btn2")
// let btnResult =document.querySelector(".btnResult")
// let reset  =document.querySelector(".btnrest")

// btns.forEach(btn=>{
//     btn.addEventListener("click",e=>{
//         console.log(selectOperator.textContent)
//         if(selectOperator.textContent){
//             fNumber.textContent +=btn.textContent
//         }else{
//             secondNumber.textContent +=btn.textContent
//         }
//     })
// })
// btns2.forEach(btn2=>{
//     btn2.addEventListener("click",e=>{
//             selectBtnOperation =btn2.textContent;
//             if(selectOperator.textContent)
//             selectOperator.textContent=selectBtnOperation
//     })
// })

// btns.forEach(btn =>{
//     btn.addEventListener("click",e=>{

//         let value = btn.textContent ;

//             fNumber.textContent +=value  ;

//         //    secondNumber.textContent +=value;

//     })
// })

// btns2.forEach(btn2=>{
//     btn2.addEventListener("click",e=>{
//         let ovalue = btn2.textContent ;
//         // ovalue = ovalue.length ==0 ? ovalue : "" ;
//         // console.log(ovalue);
//         vl.push(ovalue)
//         if(ovalue.length,m){

//             selectOperator.textContent = ovalue;
//             result.textContent +=ovalue  ;
//         }else{
//             selectOperator.textContent = ""
//             reset.textContent = ""
//         }

//     })
// })

// btnResult.addEventListener("click",e=>{
//     let fnumvalue =parseInt(fNumber.textContent);
//     let snumvalue =+(secondNumber.textContent);
//     let ovauleselected = selectOperator.textContent;
//     if(ovauleselected.includes("+")){
//         let a = fnumvalue + snumvalue
//         result.textContent =a   ;
//         fNumber.innerHTML = "";
//         secondNumber.innerHTML = "";
//         fNumber.textContent = a;
//         // console.log(typeof a)

//     }else if(ovauleselected.includes("-"))
//     {
//         let b = fnumvalue - snumvalue
//         result.textContent = b   ;
//         fNumber.innerHTML = "";
//         secondNumber.innerHTML = "";
//         fNumber.textContent = b;

//     }else if(ovauleselected.includes("*")){
//         let c =fnumvalue * snumvalue
//         result.textContent = c   ;
//         fNumber.innerHTML = "";
//         secondNumber.innerHTML = "";
//         fNumber.textContent = c;

//     }else if(ovauleselected.includes("/")){
//         let d = fnumvalue / snumvalue
//         result.textContent = d   ;
//         fNumber.innerHTML = "";
//         secondNumber.innerHTML = "";
//         fNumber.textContent = d;

//     }else if(ovauleselected.includes("%")){
//         let q = fnumvalue % snumvalue
//         result.textContent = q  ;
//         fNumber.innerHTML = "";
//         secondNumber.innerHTML = "";
//         fNumber.textContent = q;

//     }
// })
// reset.addEventListener("click",e=>{
//     result.textContent = "";
//     fNumber.textContent = "";
//     secondNumber.textContent = ""
//     selectOperator.textContent = ""

// })
