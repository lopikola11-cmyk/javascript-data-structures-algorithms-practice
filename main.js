
/*const urlParams = new URLSearchParams(window.location.search);
const receivedCode = urlParams.get('code');

if(receivedCode==='web-developer'){
    document.querySelector('.text').innerText=`web-developer`;
}
else if(receivedCode==='ukranian-queen'){ 
      document.querySelector('.text').innerText=`ukranian-queen`;
}
else if(receivedCode==='scientist'){
      document.querySelector('.text').innerText=`scientist`;

};*/

/*
console.log(window.location.href);
console.log(window.location.search);
function saveToStorage(param,score) {
      
      localStorage.setItem(param,JSON.stringify(score));
};
saveToStorage('abdou', { 
      tall:'180 cm',
      age: '34 y.o',
      function:'web developer'
} );
console.log(localStorage);*/ 

const allStudents=['abdou','salim','mahfoud'];
 const fuckyou=(array,item)=> {
      for (let i = 0; i < allStudents.length; i++) {
            const element = allStudents[i];
            if(element==='abdou'){ 
                return 'abdou'
            }
            
      }
      
};

/*console.log(fuckyou(allStudents,'mahfoud'));*/


class myArray{ 

      constructor(param){ 
         
this.length=0;
this.data={};
      };

      push=(param)=>{ 

      this.data[this.length]=param;
      
      console.log(this.data);
      this.length++;



         
         
          
   }
get(index){ 
console.log(this.data[index]);
}

pop(){ 

     delete this.data[this.length-1];
     this.length--;
     console.log(this.data);


}

shift(){ 
  
     
for (let i = 0; i < this.length; i++) {
   this.data[i]=this.data[i+1];
      
}
    delete(this.data[this.length-1]);
    this.length--;
console.log(this.data);

}

delete(Index){ 

const clak=Index
for (let i =clak ; i < this.length-1; i++) {
      this.data[i]=this.data[i+1];
}
delete(this.data[this.length-1]);
this.length--;


console.log(this.data);
}
reverse(param){ 
const newArray=[ ];
      for (let i = 0; i < param.length; i++) {
     
      const element = param[param.length-1-i];
      newArray.push(element);
      
};
console.log(newArray);
let result='';
for (let i = 0; i < newArray.length; i++) {
      const element = newArray[i];
      result=result+element
}

console.log(result);

};



   };




   const abdou=new myArray;
   abdou.push(5);
abdou.push(10);
abdou.push(15);
abdou.delete(1);

/* abdou.pop();
abdou.shift(); */
abdou.push(20);
abdou.push(30);
abdou.push(40);
abdou.push(50);
abdou.delete();


const text1=['h','e','l','l','o'];
const text2=['A','p','p','l','e'];
/*
abdou.reverse(text1);
abdou.reverse(text2);*/
console.log('hello'.split('').reverse().join(''));


 const revString=(str)=>{ 
      let param='';
     param= str.split('').reverse('').join('');
   
     if (param!==str) {
      console.log('this is not a palindrome')
     }
else if (param===str) {
      console.log('this is a palindrome');
}
 };

revString('abdou');
revString('cddc');
function reverseAnumber(number) {
      
number=number.toString();
number =number.split('').reverse('').join('');
number=Number(number)
console.log(number);
};

/*reverseAnumber(415);*/


const Capitalize=(param)=>{ 
   return param.toLowerCase().split(' ').map(word=>
            word[0].toUpperCase()+word.slice(1)).join('');
           
      
};

const devision=(param)=>{ 
      for (let i = 0; i < param; i++) {
            const element = i;
            
      if(element%3===0 && param%5!==0){ 
         console.log ('Fizz');
          
      }
      else if(element%5===0 && element%3!==0){ 
           console.log ('Buzz');
      }
      else if(element%3===0 && element%5===0){ 
            console.log ('FizzBuzz');
      }
      else{ 
            console.log (element);
      }
      }

};
/*devision(10);*/
const challenge=[7,1,5,3,6,4];







const winCHallange=(myArray)=>{ 
      let value;
      let newArray=[];
      let index=0;
      let heighestPrice=0;
      let lowerPrice;
      let differenceArray=[];
      let differnce;
let biggestDifference=0;
let result;

      for (let i = 0; i < myArray.length-1; i++) {
         value=myArray[i];
         for (let i = index; i < myArray.length; i++) {
            const element = myArray[i];
            if (element>value) {
                  newArray.push(element);
            }
            
         };
         for (let i = 0; i < newArray.length; i++) {
            const element = newArray[i];
            if(heighestPrice<element){ 
                  heighestPrice=element;
            }
           
         }
         differnce=heighestPrice-value;
           differenceArray.push({differnce:differnce,lowerPrice:value,highPrice:heighestPrice});
           differnce=0;
         index++;
         newArray=[];
    
        for (let i = 0; i < differenceArray.length; i++) {
            const element = differenceArray[i].differnce;
            if (element>biggestDifference) {
                  biggestDifference=element;
                 
            }

            
        }
       
      }
 console.log(biggestDifference);
differenceArray.forEach((item)=>{ 
if(item.differnce===biggestDifference){ console.log(item)}

})


}
      winCHallange(challenge);




const addUpChallenge=(myArray)=>{ 
      let firstIndex;
      let finalIndex;
      let firstValue;
      let FinalValue;
      let FinalAnswer;
      let index=0;
      for (let i = 0; i < myArray.length; i++) {
            const value = myArray[i];
             index=index+1;

            myArray.map((value)=>{ 
                 
for (let i = index; i < myArray.length; i++) {  /* [1,2,3,4,6] */

      const element = myArray[i];
      
      const finalValue1=element+value;
      if (finalValue1===9){ 
            FinalAnswer=finalValue1;
            firstValue=value;
            firstIndex=index-1;
            finalIndex=index+1;
            
            FinalValue=element;
            
      }
      
      
}

})
            
      }

console.log(`this is the final value ${FinalAnswer} and this is the smaller value ${firstValue} and this is the last value${FinalValue}`);
console.log (`index1=${firstIndex} index2=${finalIndex}`);
};
;

addUpChallenge([7,11,8,1,6]);


      const chunk=(chunkArray,chunkPower)=>{ 
        
const bigArray=[];
let auxArray=[];
let newArray=[];
const zdagDeg=parseInt(chunkArray.length/chunkPower);
let coefusion= parseInt(chunkArray.length/chunkPower);    
console.log(coefusion);
const addedValue=coefusion;
for (let i = 0; i < chunkArray.length; i++) {
      const element = chunkArray[i];
      
      if (i<=coefusion-1) {                     /*  [1,2,3,4,5,6,7,8,9] coefusion = 2  */ 
            auxArray.push(element);
      }
      if(i===coefusion-1){ 
             if (i>(coefusion*chunkPower)) {
            auxArray.push(element);
      }
    
     

bigArray.push(auxArray);
auxArray=[];
coefusion=coefusion+addedValue;
      };
     



};/*end of for loop;*/
console.log(bigArray);


      };
      




const bobArray=[1,2,3,4,5,6,7,8,9];
chunk(bobArray,4);






let a=15;
let b=a;
b=a+5;
console.log(b);
console.log(a);

const salim=()=>{ 
      a=20;
      console.log(a);
};



salim.age=15;
console.log(salim.age);



















class Node {
  constructor(value) {
      
     
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) 
  {

      if(value===undefined){ 
this.head = null;
    this.tail = null;
    this.length = 0;
      }
      else{ 
            let newNode = new Node(value);
this.head = newNode;
    this.tail = newNode;
    this.length = 1;

      }
    

  }
      
  push(value) {
      

      if(this.head===null){
         let newNode=new Node(value);
         this.head=newNode;
         this.tail=newNode;
         this.length++;
            ; }
           

else{
      let newNode = new Node(value);
 // This is the entire, correct logic for adding a new node to the end
    this.tail.next = newNode;
    this.tail = newNode;
    this.length=this.length+1;
     
  
}
          
 
            
     
   
  }
  pop(){
      if (this.length===0) {
            return undefined;
      }
      else{
          let temp=this.head;
          let prev;

  if(this.length===1)
           
            {  
                  this.head=null
                  this.tail=null
                  this.length=0;
                  
            }
else{ 
while (temp.next) {

     prev=temp;
      temp=prev.next;
};
this.tail=prev;
this.tail.next=null;
this.length--;
return temp;

}

} 

  }

  unshift(value){ 
if(this.length===0){ 
const newNode=new Node(value);
this.head=newNode;
this.tail=newNode;
this.length++;
}
 else{    
      let newNode=new Node(value);
      newNode.next=this.head;
      this.head=newNode;
      this.length++;
 }
  }


  shift(){ 
      if(this.length===0 ){ 
          return undefined
      }
      else if(this.length===1)
      { 
         this.head=null;
           this.tail=null;
           this.length=0;    
      }
      else{ 
            let temp=this.head;
           this.head=this.head.next;
           temp.next=null;
           this.length--;
           return temp;
      }
  }
;

getFirst(){ 
return this.head;
};
getLast(){ 
      if(!this.head){return null}
      else {       return this.tail;
}
};

get(index){
if (index < 0 || index >= this.length) {
        return undefined;
    }

let temp=this.head;
      let counter=0;
      while(counter<index){
     temp=temp.next;
     counter++;
      }
return temp;
};

set(index,value){
      const wantedNode=this.get(index)

if(wantedNode){ wantedNode.data=value};

};

insert(index,value){ 
      if(index<0 || index>this.length){ 
            return undefined;
      }
      else if (index===this.length) {
   this.push(value);
   return this 
}

else if (index===0) {
     this.unshift(value);
      return this;
}

else{
      let newNode=new Node(value);
let prev=this.get(index-1);

newNode.next=prev.next;
prev.next=newNode;

this.length++;}
}

size(){
 return this.length;

 };

 clear(){ 
this.head=null;
this.tail=null;
this.length=0;
 };

 reverse(){ 
    let temp=this.head;
    this.head=this.tail;
    this.tail=temp;
    let prev=null;
    let next;
    for (let i = 0; i < this.length; i++) {
    next=temp.next;
    temp.next=prev;
    prev=temp;
    temp=next;
      
    }

 }
};
let linko=new LinkedList(5);
            linko.push(10);
            linko.push(15);
            linko.push(20);
  linko.reverse();
  console.log(linko);
          


 























/*
const abdou20 = new LinkedList(6);

abdou20.unshift(5);
abdou20.unshift(20);
abdou20.unshift(85);
abdou20.shift()

console.log(abdou20.getFirst());*/

/*
function whileLoopFunction(arrayParam) {
      
      while (arrayParam>5) {
            console.log('hi abdou');
      };
arrayParam++;
};
whileLoopFunction(3);
/*
 abdou20.get(2);
 abdou20.set(2,10);
 console.log(abdou20);*/

/*
function zegEzeg(param) {
      if(param>10){ 
            return param
      };
      console.log('mino mino zgiwi');
      
};
zegEzeg(5);

/*abdou20.insert(1,40);
abdou20.clear();
console.log(abdou20);*/

  









































/*class Node2 { 
constructor(value){ 
      this.data=value;
      this.next=null;
      this.prev=null}};
      

      class DoublyLinkedList{ 

            constructor(value){ 

                  if(!value){ 
                        this.head=null;
                        this.tail=null;
                        this.length=0;
                  }
                  else{ 
                        let  newNode=new Node2(value);
                        this.head=newNode;
                        this.tail=this.head;
                        this.length=1;
                  }
            }






      push(value){ 
                 let  newNode=new Node2(value); 
                  if(!this.head){

                                          this.head=newNode;
                                          this.tail=this.head;
                                          
                  }

                  else{ 
                  



                  this.tail.next=newNode;
                  newNode.prev=this.tail;
                  this.tail=newNode;



                  }
                  this.length++;
                  return newNode;
                              }

pop(){ 
      let temp;
      let prev;

if (this.length===1) {
  temp=this.head;
  this.head=null;
  this.tail=null

      
}

else { 
      temp=this.tail;   
      this.tail=this.tail.prev;
      this.tail.next=null;
      temp.prev=null;
}
 
this.length--;
return temp;
};

unshift(value){ 
let newNode= new Node2(value);
      if(!this.head){ 

this.head=newNode;
this.tail=newNode;
        }
      else {   
      newNode.next=this.head;
      this.head.prev=newNode;
      this.head=newNode;
 } 
this.length++;
};

shift(){ 
      
      if(this.length===0){ 
            return undefined;
      }
     let temp = this.head;
       if(this.length===1){ 
        
             this.head=null;
             this.tail=null;
      }
      else{ 
             
            this.head=this.head.next;
            this.head.prev=null;
            temp.next=null;
      }
      
      this.length--;
      return temp
      
};



};
/*
      let starLight=new DoublyLinkedList();

   starLight.push(1);
      starLight.push(2);
         starLight.push(3);
            starLight.push(4);*/

            




             
             



          
      





















      /*
      const chunk=(chunkArray,chunkPower)=>{ 
            chunkPower=chunkArray.length/chunkPower;
const bigArray=[];
let auxArray=[];
let newArray=[];
let addedValue=chunkPower
for (let i = 0; i < chunkArray.length; i++) {
      if (i<chunkPower && i!==chunkPower) {
            const element = chunkArray[i];
      auxArray.push(element);
     };
     if(i===chunkPower-1){ 
      bigArray.push(auxArray);
      auxArray=[];
      chunkPower=chunkPower+addedValue


     }
}
console.log(bigArray);
      };
      

chunk([1,2,3,4,5,6,7,8,9],3);

      
      */









































/*

            if (this.data.length===0) {
                  console.log(`this indecates its correct`);
                  this.data=[param];
                
                  
            }
            else if(this.data.length>0){ 
               
                  for (let i = 1 ; i <= this.data.length; i++) {
                         const element= this.data[i-1];

             ;
                  }
            };
*/
/*reverse(){ 

      let i=1;
      let temp=this.tail;
      while (this.length-i>0) {
            
    
     temp.next=this.get(this.length-i-1);
     temp=temp.next; 
   
        i++;
      }

temp.next=null;
      this.head=this.tail;
   this.tail=temp;
 }*/

class SNode{ 
      constructor(value){ 
this.value=value;
this.next=null;
      }
};

class Stack{ 
      constructor(value){ 
           const newNode=new SNode(value);
           this.first=newNode;
           this.length=1;
      }
      push(value){ 
            const newNode=new SNode(value);
if(this.length===0){ 
      this.first=newNode;
      this.first.next=null;
      
}
else{ 
newNode.next=this.first
this.first=newNode;


}
this.length++;
      };
      pop(){ 
if(this.length===0) 
      {return undefined}
else{ 
      let temp=this.first;
this.first=this.first.next;
this.length--;
temp.next=null;
return temp;
}};




      min(){ 
          if(this.length===0){return undefined}
          else if(this.length===1){return this.first.value}
          else{ 
            let  temp=this.first;
            let value=temp.value;
            while(this.first.next){ 
                  this.first=this.first.next;
                  if(this.first.value<value){ 
value=this.first.value;
                  }
            }
console.log(value);
          }  
      }

};











let baba=new Stack(1);
baba.push(2);
baba.push(3);
baba.push(0);



class Queue{ 
constructor(value){ 
      if(value===undefined){  
            this.first=null;
            this.last=null;
            this.length=0;
      }
      else{      let newNode=new SNode(value);
this.first=newNode;
this.last=newNode;
this.length=1;}

};

enQueue(value){ 
      const newNode=new SNode(value);
if(this.length===0){ 
      this.first=newNode;
      this.last=newNode;
     
}
else{ 
      
      this.last.next=newNode;
      this.last=newNode;
      
}
this.length++;
};
deQueue(){ 
      
      if(this.length===0){ 
            return undefined;
      };
      let temp=this.first;
      if(this.length===1){ 
            this.first=null;
            this.last=null;
           
      }
      else{ 
            
            this.first=this.first.next
            
       
      
   
      }
       this.length--;
      return temp.value;
}




};

const palMa=new Queue(0);
palMa.enQueue(5);
palMa.enQueue(10);
palMa.deQueue();
palMa.deQueue();
palMa.deQueue();
console.log(palMa);

baba.min();

const isValidParantheses =(str)=>{ 
const pairs ={'(':')',
              '[':']',
              '{':'}'
             };
            if(str.length===0){return true};
             const stack=[];
             
             for(let char of str){ 
             if (pairs[char]) {
                  stack.push(char);
             }
            
             else {let top=stack.pop();
                   if(!top||pairs[top]!==char){ return false}
                  
              }
 
}
            return stack.length===0;
};

console.log(isValidParantheses('[(){}]'));

const reverseString=(str)=>{ 
      const stack=[];
      let rev="";
      for(let char of str){ 
            stack.push(char);
      };
      console.log(stack);
      while (stack.length>0) {
            let top=stack.pop();
            rev+=top;
      }
    return rev;
}

console.log(reverseString('hello world'));
console.log(reverseString('kebbabhn hi '));

class HashTable{ 
      constructor(size=5){ 
            this.keyMap=new Array(size);
      };
_hashFunction(key){ 
let sum = 0;
const PRIME_NUMBER=31;
for (let i = 0; i < Math.min(key.length,100); i++) {
      const charCode=key.charCodeAt(i) - 96;
      sum=(sum * PRIME_NUMBER + charCode) % this.keyMap.length; 
}
return sum; 
};
set(key,value){ 
const index=this._hashFunction(key);
if(!this.keyMap[index]){this.keyMap[index]=[]; 
      this.keyMap[index].push([key,value]);
}
else{ 
      for (let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0]===key){ 
               this.keyMap[index][i][1]=value;
                return this
            }
            
      };
      this.keyMap[index].push([key,value]);
   
}
 

     
  
 
return this;
};
get(key){ 
const index=this._hashFunction(key);
if(!this.keyMap[index]){ 
      return undefined;
}
else{ 
      for (let i = 0; i < this.keyMap[index].length; i++) {
         if (this.keyMap[index][i][0]===key) {
            const value= this.keyMap[index][i][1];
            return value;
         };
         
      }
    
}

};
getAllkeys(){ 
        const keys=[];
for (let i = 0; i < this.keyMap.length; i++) {
      const element = this.keyMap[i];
    
   if(element){ 
      for (let j = 0; j < element.length; j++) {
            const keyString = element[j][0];
            keys.push(keyString);
      }
  
   }
   
}
    return keys;  
};
getAllValues(){ 
       const values=[];
for (let i = 0; i < this.keyMap.length; i++) {
      const element = this.keyMap[i];
    
   if(element){ 
      for (let j = 0; j < element.length; j++) {
            const valueString = element[j][1];
            values.push(valueString);
      }
  
   }
}
return values;
}

};





const phoneBook=new HashTable();


console.log(phoneBook);

console.log(phoneBook.get('alilou'));
phoneBook.set('cat',25);
console.log(phoneBook);
phoneBook.set('cat',45);
phoneBook.set('hat',10);
phoneBook.set('hello',15);
console.log(phoneBook.getAllkeys());
console.log(phoneBook.getAllValues());


function countNumbers(text) {
      const wordMap={};
       const words=text.toLocaleLowerCase().split(/\s/);
       for(let word of words){ 
            if(word in wordMap){ 
                  wordMap[word]++;
            }
            else{ 
                  wordMap[word]=1;
            }
       }
       return wordMap;
};

const text ='hello World ever seen seen ever world';

console.log(countNumbers(text));

function findMeNumber(zgiwi,param) {
      const zegArray=zgiwi;
      let element3;
      const result=[];

      for (let i = 0; i < zegArray.length; i++) {
            const element1 = zegArray[i];
            for (let j = i+1; j < zegArray.length; j++) {
                  const element2 = zegArray[j];
                  element3=element1+element2;
                  if(element3===param){
                        result.push(i,j);
                  }
            };
           
      }
       return result;
};
console.log(findMeNumber([1,5,0,9,4],9));

function findAllPairs(arr, target) {
 const seen={};
 const result=[];
 
 for (let i = 0; i < arr.length; i++) {
      const complement=target-arr[i];
     if (complement in seen) {
      result.push([seen[complement],i]);
     };
     seen[arr[i]]=i;
      
 };
 return result
};
console.log(findAllPairs([1,5,0,9,4],9));

class BtsNode {
constructor(value){
      this.value=value;
      this.left=null
      this.right=null;
};

};



class Bts {
      constructor(){
      this.root=null;
      }

      insert(value){
            const newNode=new BtsNode(value);
      if(!this.root){ this.root=newNode}
      else{ let temp=this.root;

      while(true){ 
            if (value===temp.value) {
                return undefined;  
            };
            if(value<temp.value){
                  if(temp.left===null){
                        temp.left=newNode;
                  }
                  else{ temp=temp.left;}
            }
            if (value>temp.value) {
                  if(temp.right===null){ 
                        temp.right=newNode;
                  }
                  else{temp=temp.right};
            }}

}; return this;
};

involve(value){ 
      let temp=this.root;
while (temp) {
      if(value<temp.value){ 
            temp=temp.left
      }
      else if(value>temp.value){ 
            temp=temp.right
      }
     else if(value===temp.value){ 
return true;
      }

}
return false;
}
};

const toress=new Bts();

toress.insert(1);
toress.insert(2);

toress.insert(15);
toress.insert(7);
toress.insert(10);
toress.insert(3);

console.log(toress.involve(7));



