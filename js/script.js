let typeJs = document.querySelectorAll(".typejs");
let typeConvert = Array.from(typeJs);

typeConvert.map(function (typeItem) {
  let typeValue = 0;
  let typeNow;
  function typeText() {
    if (typeValue == typeItem.dataset.text.length) {
      typeNow.pop();
      typeItem.innerHTML = typeNow.join("");
      if (typeNow.length == 0) {
        typeItem.innerHTML += typeItem.dataset.text.charAt(typeValue);
        typeValue = 0;
      }
    } else {
      typeItem.innerHTML += typeItem.dataset.text.charAt(typeValue);
      typeNow = typeItem.innerHTML.split("");
      typeValue++;
    }
  }
  setInterval(typeText, 100);
});

// let typeJs = document.querySelectorAll(".typejs");
// let convert = Array.from(typeJs);
// convert.map((item) => {
//   let typeValue = 0;
//   let typeNow = item.innerHTML.split("");
//   function letsType(){
//     if(typeValue == item.dataset.text.length){
//       typeNow.pop()
//         item.innerHTML= typeNow.join("");
//         if( typeNow.length == 0){
//           item.innerHTML+= item.dataset.text.charAt(typeValue);
//           typeValue=0;
//         }
//     }
//     else{

//         item.innerHTML+= item.dataset.text.charAt(typeValue)
//         typeNow = item.innerHTML.split("");
//         typeValue++;

//     }

//   }

//   let setInt= setInterval(letsType,100);

// });
