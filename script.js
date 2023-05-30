

let user={name:'john',
surname:'smith',
}; 
user['name']='pete'
delete user.name;
user.phone=1212123;
console.log(user);

function intro(name,shirt){
    const person={
        name:name,
        shirt:shirt
    }

const intros=`hi im ${person.name} and im ${person.shirt}`
return intros;
}
//console.log(intro('spots','black'));


let schedule = {};
function isEmpty(obj,prop){
obj={}
alert( prop in user );
}


schedule["8:30"] = "get up";
//alert( isEmpty(schedule,'8:30') ); // true



// add properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    results:function(){
        return this.John+this.Ann+this.Pete
  }
    }
//console.log(salaries.results())

let menus = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multy(obj){

for(let key in obj){
    if(typeof obj[key]=='number'){
        obj[key]*2;
    }
}
}
//console.log(multy(menus));
//console.log(menus);


///ARRAY FILTER()

const inventor=[
    {name:'ford',surname:'shelby',year:1908,died:1945},
    {name:'christian',surname:'Dior',year:1901,died:1938},
    {name:'zeus',surname:'dues',year:1900,died:1985}
]

const years=inventor.filter(function(inventor){
    
    if(inventor.year<2000){
        return true;
    }
})


//console.table(years);

// map()..we map to give us an array of inventors with only their names

const inventName=inventor.map(inventor=>`${inventor.name}, ${inventor.died}` )


//console.table(inventName);
//array.sort() decides how to sort shit in an array;

const sortByYear=inventor.sort(function(person1,person2){
    if(person1.year >person2.year){
        return 1
    }else{
        return -1
    }
})

//console.table(sortByYear);
//sort by how long they lived

 const  longLive= inventor.sort((a,b)=>{
   return a.year-b.year
 })
 //console.table(longLive);


 //reduce()
//adding all shit in an array in one variable AKA accumilator
//if acc!=0 the it will be set to the first num in array
const numbers=[1,9,4,5,32,2,15];

const total=numbers.reduce(sum,0);
function sum(accumilator,value){
    return accumilator+value;
}
console.log(total)
//how to return biggest value using reduce


const big=numbers.reduce(biggest,0);
function biggest(accumilator,value){
   if(accumilator>value){//value is value from the array
    return accumilator;
   }else{
    return value;
   }
}
//console.log(big);

const shop=[
    {product:'speaker',price:2,count:300},
    {product:'laptop',price:3,count:400},
    {product:'desktop',price:3,count:200}
]
function sumShop(accumilator,item){
    cost=item.price*item.count;
    return accumilator+cost;
}
let fullPrice=shop.reduce(sumShop,0)
//console.log("price total:"+fullPrice)

//PART2
//Array.some() will check if the array has atleast 1 item that matches your search criteria

const people=[{names:'jojo',year:2002},
{names:'kait',year:1903},
{names:'jojo',year:2001},
];
// we want to see if list has someone of certain age
const isAdult=people.some(function(person){
const currentYear=(new Date()).getFullYear();
if(currentYear-person.year >23){
    console.log(person)
    return true;
}
});
//console.log(isAdult);

function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
 
//console.log( factorialize(4));
//array.find()


//console.log(add([4,3,4,5]));

function power(array) {
    let result;
    for(num of array){
        result=array[0];
  result=result**num;
    }
    return result;
  };
  console.log(power([4,4]));

  