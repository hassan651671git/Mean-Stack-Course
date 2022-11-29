//EX #1.1

//EX #1.2
// add element at the end
let asd=[1,2,3,4,5]
asd.push(6);
// add element at the begining
asd.unshift(0);
console.log(asd);
//#endregion

//Ex #2
/* 
 3
["baz"]
1
hello
true
true
[ ['carName', 'Bmw'], ['carPrice', 1000000] ]
1
2
3
4
*/

//#end


// EX #3
function getMaxValue(arr){
let max=arr[0];
let index=0;
   for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
           max=arr[i];
           index=i;
       }
   }
   console.log("index is:"+index+" value is :"+max) 
}

getMaxValue([1,2,3,5,4,9,100,0,5,3])
//#end

//EX #4
function getDatesDiffrence( date1 ,date2)
{
return Math.abs(date1.getTime()-date2.getTime())/1000/60/60/24;
}

console.log(getDatesDiffrence(new Date(2000,11,1),new Date(2001,11,1)))
//#end


// EX #5



//#end 

//EX #6
function returnMultiple(){
    return {val1:5,val2:6}
}

//end

// EX #7
function reverse(arr)
{
    for(let i=0;i<arr.length/2;i++)
    {
        let temp=arr[i];
         arr[i]=arr[arr.length-i-1];
         arr[arr.length-i-1]=temp;
    }

}

let t=[1,2,3,4,5];
reverse(t);
console.log("reverse is "+t);
//end


//EX #8
function convertObjectToArray(obj)
{
 return  Object.entries(obj);
}

console.log(convertObjectToArray({ a: 1, b: 2 }))

//end

//EX #8.1


//end

//EX #8.2
function add(x){
    return function(y){
        return x+y;
    }
}

console.log(add(5)(6));
//#end


// EX #8.3
let arrOfNames = [{name:"asd",id:1},{name:"asd2",id:2},{name:"asd3",id:3},{name:"asd4",id:4},{name:"asd5",id:5}];

function findName (name,arrOfNames){
    let found = arrOfNames.find(n=>name==n.name);
     return found;
}
console.log(findName("asd2",arrOfNames)!=undefined);

//#end