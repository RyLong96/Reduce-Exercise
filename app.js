//1. Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.


// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]



// function extractValue(arr, key){
//     return arr.reduce(function(val, nextVal){
//         val.push(nextVal[key]);

//         console.log(val);
//         console.log(key);
//         console.log(nextVal);
//         return val;
//     },[])
// }

function extractValue(arr, key){
    return arr.reduce(function(val, nextVal){
        val.push(nextVal.name);
        return val;
    },[])
}

//confused as to how the empty array at the end works. 
//confused as to how val.push(nextVal[key])

//2. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count.


function vowelCount(str){
    const vowels = "aeiou";

    return str.split("").reduce(function(vowel, nextVal){
        let lowerCase = nextVal.toLowerCase();
        if(vowels.indexOf(lowerCase) !== -1){
            if(vowel[lowerCase]){
                vowel[lowerCase] ++;
                console.log(vowel[lowerCase]);
            }
        else{
            vowel[lowerCase] =1;
            console.log(vowel[lowerCase]);
        }
        }
        return vowel;
    },{})
}
//33 splitting each letter seperating into an array and running reduce
//44 the {} will return it as an object

//3. Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function. 

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(arr, key, value){
    

    return arr.reduce(function(val, nextVal, i){
        val[i][key] = value;
        //val[i][title] = 'instructor'
        //{name: 'Ellie}[title] = 'Instructor'
        console.log(val, nextVal, i);
        console.log(val[i][key]);
        return val;
    }, arr);
}

//61. our first value[i] is name: elie. appending the key which was passed through which is title instructor and setting that equal to value. 
// value 

//57 the function is going to accept the array, a key because we are adding it, and the value is what the key is called.
//60 reducing the array


// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is falso, the value should be placed in the second subarray.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8,];

// const names = ['Elie', 'Colt', 'Tim', 'Matt'];


function isEven(val){
    return val % 2 === 0;
};

function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }

function partition(arr, callBack){

    return arr.reduce(function(val, nextVal){
        if(callBack(nextVal)){
            val[0].push(nextVal);
        }
        else {
            val[1].push(nextVal);
        }
        return val;
    },[[], []]);
};


//91 reducing the array val, will be the first item in the array, nextval the next.
//92 if the callback (isEven) runs it will push that value in into the first new array. 

//ask mentor to walk me through these