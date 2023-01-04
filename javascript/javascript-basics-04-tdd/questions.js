
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
return text.replace('e',' ')
}
const concatString = (text1, text2) => {
return text1.concat(text2)
}
const showChar5 = (text) => {
return text.charAt(4) 
}
const showChar9 = (text) => {
return text.slice(0,9)
}
const toCapitals = (text) => {
    return text.toUpperCase()
}
const toLowerCase = (text) => {
    return text.toLowerCase()

}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
    if (typeof text === 'string') {
        return true
} else {
return false      
}
}

const getExtension = (text) => {
    return text.split('.').pop()
}
const countSpaces = (text) => {
return text.split(' ').length - 1
}
const InverseString = (text) => {
    return text.split("").reverse().join("");

}
const power = (x, y) => {
return Math.pow(x,y)
}
const absoluteValue = (num) => {
return Math.abs(num)
}
const absoluteValueArray = (array) => {
    var arr = []
    for (let i =0 ; i < array.length; i++) {
        arr[i]= Math.abs(array[i]);
      }
    return arr
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius ** 2.);
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab,ac)
}
const BMI = (weight, height) => {
    return Math.round((weight / (height**2)) * 100) / 100;
}

const createLanguagesArray = () => {
const arr= [ 'Html', 'CSS', 'Java', 'PHP' ]
return arr
}

const createNumbersArray = () => {
const arr= [ 0, 1, 2, 3, 4, 5 ]
return arr
}

const replaceElement = (languages) => {

var spliced = languages.splice(2,1,'Javascript');
return languages
}

const addElement = (languages) => {
var spliced = languages.splice(2,1,'Javascript');
var added =  languages.splice(4,0,'Ruby','Python')
return languages 
}

const addNumberElement = (numbers) => {
var added = numbers.splice(0,0,-2,-1)
return numbers
}

const removeFirst = (languages) => {
var removedfrom= languages.splice(0,1)
return languages
}

const removeLast = (languages) => {
var last = languages.length
var removedfrom= languages.splice(last-1,1)
return languages
}

const convertStrToArr = (social_arr) => {
return social_arr.split(",")
}

const convertArrToStr = (languages) => {
return String(languages)
}

const sortArr = (social_arr) => {
return social_arr.sort()
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}