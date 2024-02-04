let karts = [
    {"площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 5,
      "тип дома":"каркасный",
      "количество этажей": 1,
      "наличие гарожа":"нет",
      "наличие цокольного этажа":"есть",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"есть",     
},
{      "площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 5,
      "тип дома":"каркасный",
      "количество этажей": 1,
      "наличие гарожа":"есть",
      "наличие цокольного этажа":"нет",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"нет",     
},
{"площадь": 108,
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 4,
"тип дома":"каркасный",
"количество этажей": 1,
"наличие гарожа":"есть",
"наличие цокольного этажа":"есть",
"наличие понорамных окон": "есть", 
"наличие мансарды":"нет",     
},
{"площадь": 108,
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 5,
"тип дома":"каркасный",
"количество этажей": 1,
"наличие гарожа":"нет",
"наличие цокольного этажа":"нет",
"наличие понорамных окон": "нет", 
"наличие мансарды":"нет",     
},
{"площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 7,
      "тип дома":"каркасный",
      "количество этажей": 2,
      "наличие гарожа":"нет",
      "наличие цокольного этажа":"нет",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"есть",     
},
{"площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 5,
      "тип дома":"каркасный",
      "количество этажей": 2,
      "наличие гарожа":"есть",
      "наличие цокольного этажа":"нет",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"нет",     
},
{"площадь": 108,
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 7,
"тип дома":"каркасный",
"количество этажей": 2,
"наличие гарожа":"есть",
"наличие цокольного этажа":"нет",
"наличие понорамных окон": "есть", 
"наличие мансарды":"нет",     
},
{"площадь": 108,
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 8,
"тип дома":"каркасный",
"количество этажей": 2,
"наличие гарожа":"нет",
"наличие цокольного этажа":"нет",
"наличие понорамных окон": "нет", 
"наличие мансарды":"нет",     
},
{"площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 8,
      "тип дома":"каркасный",
      "количество этажей": 3,
      "наличие гарожа":"нет",
      "наличие цокольного этажа":"есть",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"есть",     
},
{"площадь": 108,
      "размеры": "7x9",
      "сроки стройки": 16,
      "количество комнат": 7,
      "тип дома":"каркасный",
      "количество этажей": 3,
      "наличие гарожа":"есть",
      "наличие цокольного этажа":"нет",
      "наличие понорамных окон": "есть", 
      "наличие мансарды":"нет",     
},
{"площадь": 108,
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 9,
"тип дома":"каркасный",
"количество этажей": 3,
"наличие гарожа":"есть",
"наличие цокольного этажа":"есть",
"наличие понорамных окон": "есть", 
"наличие мансарды":"нет",     
},
{"площадь": 108, /////////
"размеры": "7x9",
"сроки стройки": 16,
"количество комнат": 10,
"тип дома":"каркасный",
"количество этажей": 3,
"наличие гарожа":"нет",
"наличие цокольного этажа":"нет",
"наличие понорамных окон": "нет", 
"наличие мансарды":"нет",     
}
];
////////////////////////образец
let a = document.getElementsByClassName("containt__kart");
//   a.parentNode.removeChild();
deletEl();
/////////////////////
///////////////////////////функция создание карточки
let s = 0;
function creatKart(s,sxl,timCreat,countKomn,countEt,typeHous,garag,cokEt,w,mansard){

let div = document.createElement('div');
div.className = "containt__kart";

let div2 = document.createElement("div");
div2.className = 'containt__kart_image';
let parent = document.querySelector(".container__containt");
let kart = parent.appendChild(div);
kart.appendChild(div2);

let div3 = document.createElement('div');
div3.className = "containt__kart_caption";
div3.innerHTML = '<h3>"Атаман"</h3>';
kart.appendChild(div3);

let div4 = document.createElement("div");
div4.className = "containt__kart_el1";
kart.appendChild(div4);

let div5 = document.createElement("div");
div5.className = "containt__kart_el1_block1";
div5.innerHTML = `Площадь:<span class="b-text">${s} м<sup>2</sup></span>`;

div4.appendChild(div5);

let div6 = document.createElement("div");
div6.className = 'containt__kart_el1_block2';
div6.innerHTML = `Размеры:<span class="b-text">${sxl}</span>`;
div4.appendChild(div6);

let div7 = document.createElement("div");
div7.className = "containt__kart_el1";
kart.appendChild(div7);

let div8 = document.createElement("div");
div8.className = "containt__kart_el1_block1";
div8.innerHTML = `Срок строики:<span class="b-text">${timCreat} дней</span>`;
div7.appendChild(div8);

let div9 = document.createElement("div");
div9.className = 'containt__kart_el1_block2';
div9.innerHTML = `Комнат:<span class="b-text">${countKomn}</span>`;
div7.appendChild(div9);

let div10 = document.createElement("div");
div10.className = "containt__kart_el1";
kart.appendChild(div10);

let div11 = document.createElement("div");
div11.className = "containt__kart_el1_block1";
div11.innerHTML = 'Тип дома';
div10.appendChild(div11);

let div12 = document.createElement("div");
div12.className = 'containt__kart_el1_block2';
div12.innerHTML = `<span class="b-text">${typeHous}</span>`;
div10.appendChild(div12);

let div13 = document.createElement("div");
div13.className = "containt__kart_el1";
kart.appendChild(div13);

let div14 = document.createElement("div");
div14.className = "containt__kart_el1_block1";
div14.innerHTML = 'Количество этажей';
div13.appendChild(div14);

let div15 = document.createElement("div");
div15.className = 'containt__kart_el1_block2';
div15.innerHTML = `<span class="b-text">${countEt}</span>`; //количество этажей
div13.appendChild(div15);

let div16 = document.createElement("div");
div16.className = "containt__kart_el1";
kart.appendChild(div16);

let div17 = document.createElement("div");
div17.className = "containt__kart_el1_block1";
div17.innerHTML = 'Наличие гаража';
div16.appendChild(div17);

let div18 = document.createElement("div");
div18.className = 'containt__kart_el1_block2';
div18.innerHTML = `<span class="b-text">${garag}</span>`;//гараж
div16.appendChild(div18);

let div19 = document.createElement("div");
div19.className = "containt__kart_el1";
kart.appendChild(div19);

let div20 = document.createElement("div");
div20.className = "containt__kart_el1_block1";
div20.innerHTML = 'Наличие цокольного этажа';
div19.appendChild(div20);

let div21 = document.createElement("div");
div21.className = 'containt__kart_el1_block2';
div21.innerHTML = `<span class="b-text">${cokEt}</span>`;//цокольный эт
div19.appendChild(div21);

let div22 = document.createElement("div");
div22.className = "containt__kart_el1";
kart.appendChild(div22);

let div23 = document.createElement("div");
div23.className = "containt__kart_el1_block1";
div23.innerHTML = 'Наличие понорамных окон';
div22.appendChild(div23);

let div24 = document.createElement("div");
div24.className = 'containt__kart_el1_block2';
div24.innerHTML = `<span class="b-text">${w}</span>`;//окна
div22.appendChild(div24);

let div25 = document.createElement("div");
div25.className = "containt__kart_el1";
kart.appendChild(div25);

let div26 = document.createElement("div");
div26.className = "containt__kart_el1_block1";
div26.innerHTML = 'Наличие мансарды';
div25.appendChild(div26);

let div27 = document.createElement("div");
div27.className = 'containt__kart_el1_block2';
div27.innerHTML = `<span class="b-text">${mansard}</span>`;//мансарда
div25.appendChild(div27);

let div28 = document.createElement("div");
div28.className = "containt__kart_el2";
kart.appendChild(div28);

let div29 = document.createElement("div");
div29.className = "containt__kart_el2_block1";
div29.innerHTML = 'Стоимость';
div28.appendChild(div29);

let div30 = document.createElement("div");
div30.className = "containt__kart_el2_block2";
div30.innerHTML = '<span class="b-text"> от <span class="containt__kart_green"> 1 780 000 </span> руб</span>';
div28.appendChild(div30);

let div31 = document.createElement("div");
div31.className = "container__containt_el3";
div31.innerHTML = '<a href="" class="containt__kart_s">СМОТРЕТЬ ПРОЕКТЫ</a>';
kart.appendChild(div31);
}
//s,sxl,timCreat,countKomn,countEt,typeHous,garag,cokEt,w,mansard
///////////////////смотреть все
function clickAll(){
      deletEl();
karts.forEach(function(i){
  creatKart(i["площадь"],i["размеры"],i["сроки стройки"],
  i["количество комнат"],i["количество этажей"],i["тип дома"],
  i["наличие гарожа"],i["наличие цокольного этажа"],
  i["наличие понорамных окон"],i["наличие мансарды"]);
});
let f = document.getElementsByClassName("container__knopka");
// f[7].classList.add("colorButton");
orangeButton(7);
};

function filter(parametr,s){
      deletEl();
   let mas = karts.filter(function(el){
      if(el[parametr] === s){
            return true;
      }else{
            return false;   
      }     
   })
   mas.forEach(function(i){
      creatKart(i["площадь"],i["размеры"],i["сроки стройки"],
      i["количество комнат"],i["количество этажей"],i["тип дома"],
      i["наличие гарожа"],i["наличие цокольного этажа"],
      i["наличие понорамных окон"],i["наличие мансарды"]); 

   })
}
function deletEl(){
      let arry = document.querySelectorAll('.containt__kart')
      arry.forEach(function(elem){
            elem.parentNode.removeChild(elem);
          });
}

function orangeButton(a){
      let f = document.getElementsByClassName("container__knopka");
      
      for(let i of f){
        i.classList.remove("colorButton");
      }
      f[a].classList.add("colorButton");
}










 




