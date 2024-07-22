const add_button = document.getElementById("add_button");
const total_button = document.getElementById("total_button");

function Coffee(name , price){
  this.name = name;
  this.price = price;
}

const coffee1 = new Coffee("オリジナルブレンド200g 500円" , 500);
const coffee2 = new Coffee("オリジナルブレンド500g 900円" , 900);
const coffee3 = new Coffee("スペシャルブレンド200g 700円" , 700);
const coffee4 = new Coffee("スペシャルブレンド500g 1200円" , 1200);

let cart = {
  1:{
    name: coffee1.name,
    price: coffee1.price,
    number: 0
  },
  2:{
    name: coffee2.name,
    price: coffee2.price,
    number: 0
  },
  3:{
    name: coffee3.name,
    price: coffee3.price,
    number: 0
  },
  4:{
    name: coffee4.name,
    price: coffee4.price,
    number: 0
  }
}

let global_total = 0;
let global_pop = `空です`;

function display(){
  let toatal = 0;
  let pop = ``;
  for(let i=1; i<=4; i++){

    let display_coffee = cart[i];
    
    if(display_coffee.number===0){
    }else{
      toatal = toatal + display_coffee.price * display_coffee.number;
      pop = pop + `${display_coffee.name}:${display_coffee.number}点\n`;
    }
  }

  global_total = toatal;
  global_pop = pop;
}

function add(){
  add_button.addEventListener("click" , ()=>{
    let coffee = document.getElementById("coffee").value;
    let number_string = document.getElementById("number").value;
    let number = Number(number_string);

    if(coffee==="coffee1"){
      coffee = cart[1];
    }else if(coffee==="coffee2"){
      coffee = cart[2];
    }else if(coffee==="coffee3"){
      coffee = cart[3];
    }else if(coffee==="coffee4"){
      coffee = cart[4];
    }

    coffee.number = coffee.number + number;

    display()

    alert(`${global_pop}\n小計${global_total}円`);

  })
}

function total(){
  total_button.addEventListener("click" , ()=>{
    let postage = 0
    if(global_total===0){
      postage = 0
    }else if(global_total < 2000){
      postage = 500;
    }else if(2000<=global_total && global_total<3000){
      postage = 250;
    }else if(global_total >= 3000){
      postage = 0;
    }

    alert(`${global_pop}\n小計は${global_total}円、送料は${postage}円です。合計は${global_total+postage}です`);
    global_total = 0;
    global_pop = `空です`;
    for(let i=1; i<=4; i++){
      cart[i].number = 0;
    }
  })
}

function load(){
  add();
  total();
}

window.onload = load;




