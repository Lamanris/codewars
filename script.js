// function find_average(array) {
//     console.log(array.reduce((acc, rec) => (acc + rec)) / array.length)
// }

// function abbrevName(name){
//     console.log(name.split([' ']).map((el) => el[0]).join('.').toLocaleUpperCase())
// }
// abbrevName("sam harris")

// function fizzbuzz(n) {
//     let array =  Array.from(Array(n).keys()).map(x => ++x)
//     console.log(array.map((el) => el % 3 === 0 && el % 5 === 0 ? "FizzBuzz" : el % 3 === 0 ? "Fizz" : el % 5 === 0 ? "Buzz" : el ))
// }
// fizzbuzz(15)

// function switcheroo(x){
//     console.log(x.split('').map((el) => el === 'a' ? 'b' : el === 'b' ? 'a' : el).join(''))
// }
// switcheroo('abc')

// validEyes =  [':', ';']
// validNose = ['-', '~']
// validMouth = [')', 'D']
// function countSmileys(arr) {
//     let counter = 0;
//     if (arr.length === 0) {
//         return 0
//     } else {
//         arr.map((el) => {
//             if ( el.length === 2 ) {
//                 if (validEyes.map(el => el).indexOf(el[0]) >= 0 &&  validMouth.map(el => el).indexOf(el[1]) >= 0) {
//                     counter++
//                 }
//             } else {
//                     if (validEyes.map(el => el).indexOf(el[0]) >= 0 && validNose.map(el => el).indexOf(el[1]) >= 0 && validMouth.map(el => el).indexOf(el[2]) >= 0) {
//                         counter++
//                     }
//             }
//             // console.log(validEyes.map(el => el).indexOf(el[0]))
//             // console.log(validNose.map(el => el).indexOf(el[1]))
//             // console.log(validMouth.map(el => el).indexOf(el[2]))
//             // console.log(el[2])
//         })
//         console.log(counter)
//     }
// }

// function countSmileys(arr) {
//     console.log(arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length)
// }
//
// countSmileys([':)',':(',':D',':O',':)'])

// function bouncingBall(h,  bounce,  window) {
//     if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//         let counter = 0
//         let currentHeight = h
//         while(currentHeight > window) {
//             counter +=1
//             currentHeight *= bounce
//             if (currentHeight > window) {
//                 counter +=1
//             }
//         }
//         console.log(counter)
//     } else {
//         console.log(-1)
//     }
// }
// bouncingBall(3, 0.66, 1.5)

// function spoonerize(words) {
//     let arr = words.split(' ')
//     let firstWord = arr[0].replace(arr[0][0],arr[1][0])
//     let secondWord = arr[1].replace(arr[1][0],arr[0][0])
//     let result = firstWord + ' ' + secondWord
//     console.log(result)
// }
// spoonerize("nit picking")

// function spoonerize(words) {
//     let word = words.split(' ')
//     return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }
// console.log(spoonerize("nit picking"))

// function trouble(x, t){
//     for(let i=0; i<x.length; i++) {
//         if(x[i]+x[i+1]===t) {
//             x.splice(i+1,1);
//             i--;
//         }
//     }
//     return x;
// }
// console.log(trouble([8, 5, 3,4,6,6] ,7))

// function oddOrEven(array) {
//     let sum = array.reduce((acc,rec) => acc + rec,0)
//     return sum % 2 === 0 || array.length === 0 ? "even" : "odd"
// }
// console.log(oddOrEven([0, 1, 3]))
// console.log(oddOrEven([0, -1, 2]))



// const isSquare = (n) => {
//     let sqrt =  Math.sqrt(n)
//     return Number.isInteger(sqrt)
// }
// console.log(isSquare(-1))
// console.log(isSquare( 0))
// console.log(isSquare( 3))
// console.log(isSquare( 4))


// function persistence(num) {
//     let counter = 0
//     let str = num.toString()
//     let arr = str.split('')
//
//     if (arr.length <= 1) {
//         return counter
//     } else {
//         for (let i= 1; i !== arr.length; i++) {
//             arr.reduce((acc, rec) => {
//                 return arr = acc * rec
//             },1)
//         }
//
//         return arr
//     }
// }
//
// console.log(persistence(39))
// console.log(persistence(4))
// console.log(persistence(25))
// console.log(persistence(999))


// function accum(s) {
//     let arr = s.toLowerCase().split('').map((el,ind) => el.repeat(ind + 1))
//     return arr.map((el) => el[0].toUpperCase() + el.substring(1)).join('-')
// }
// console.log(accum("ZpglnRxqenU"))

// var first = [1,2,3];
// var second = [1,2,3];
// var third = [3,2,1];
// var fourth = [1,3];
// var fifth = [0,1,2,3,4];
//
// console.log(compareArrays(first, second));
// console.log(compareArrays(first, third));
// console.log(compareArrays(first, fourth));
// console.log(compareArrays(first, fifth));
//
// function compareArrays(first, second){
//     //write type error
//     return first.every((e)=> second.includes(e)) && second.every((e)=> first.includes(e));
// }


// function duplicateEncode(word){
//     // let lowCaseStr = word.toLowerCase()
//     // let arr = lowCaseStr.split('')
//     // return arr.map((el) => {
//     //     if (arr.indexOf(el) === arr.lastIndexOf(el)) {
//     //         return '('
//     //     } else {
//     //         return ')'
//     //     }
//     // }).join('')
//     let arr = word.toLowerCase().split('')
//     return arr.map(el => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')').join('')
// }
// console.log(duplicateEncode("recede"))
// console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))

// function encrypt(text, n) {
//     if (text || !(text === '' || n <= 0)) {
//         let specialText = text.split('')
//         for (let i = 0; i < n; i++) {
//             encryptText()
//         }
//         function encryptText() {
//             specialText = specialText.filter((el, i) => {
//                 return i % 2 !== 0
//             }).concat(specialText.filter((el, i) => {
//                 return i % 2 === 0
//             }))
//         }
//         return specialText.join('')
//     } else {
//         return text
//     }
// }

// console.log(encrypt("This is a test!", 1))
// console.log(encrypt("This is a test!", 2))
// "hsi  etTi sats!"


// function decrypt(encryptedText, n) {
//     if ((encryptedText || !(encryptedText === '')) && n >= 1) {
//         let specialText = encryptedText.split('')
//         for (let i = 0; i < n; i++) {
//             decryptText()
//         }
//         function decryptText() {
//             specialText = specialText.filter((el, i) => {
//                 return i % 2 !== 0
//             }).concat(specialText.filter((el, i) => {
//                 return i % 2 === 0
//             }))

// let middle = Math.floor(specialText.length / 2)
// let firstPart = specialText.filter((el, i) => i < middle)
// let secondPart = specialText.filter((el, i) => i >= middle)
// specialText = secondPart.map((el, i) => {
//     if (firstPart[i] !== undefined) {
//         return el + firstPart[i]
//     } else {
//         return el
//     }
// })
//         }
//         return specialText.join('')
//     } else {
//         return encryptedText
//     }
// }
//
// console.log(decrypt("This is a test!",0))
// console.log(decrypt("hsi  etTi sats!", 1))
// console.log(decrypt("s eT ashi tist!", 2))





// function solution(str, ending){
//     if (str.includes(ending)) {
//         if (!(ending.length === 0)) {
//             return str.lastIndexOf(ending) === (str.lastIndexOf(str[str.length - 1]) - (ending.length - 1))
//         } else {
//             return true
//         }
//     } else {
//         return false
//     }
// }

// function solution(str, ending){
//     return str.endsWith(ending);
// }

// function solution(str, ending){
//     return str.substr(-ending.length) == ending || ending.length === 0
// }

// console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))
// console.log(solution('!@#$%^&*() :-)', ':-)'))
// console.log(solution('abc', ''))


// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }
// function minMax(arr) {
//     var a = arr.sort(function(a,b) {return a-b});
//     return [a[0], a[a.length-1]];
// }
// console.log(minMax([5,2,5,6]))


// function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }
// console.log(sumDigits(99))
// console.log(sumDigits(-32))

// function sumDigits(number) {
//     let sum = 0;
//     number = Math.abs(number)
//     while(number != 0)
//     {
//         sum += number % 10
//         number = Math.floor(number/10)
//     }
//     return sum
// }
// console.log(sumDigits(99))
// console.log(sumDigits(-32))


// function solution(str){
//     return str.split('').reverse().join('')
// }
// console.log(solution('world'))

// function removeChar(str){
//     let arr = str.split('')
//     return arr.slice(1,arr.length - 1).join('')
// }

// function removeChar(str) {
//     return str.slice(1, -1);
// }
//
// console.log(removeChar('eloquent'))

// function isPalindrome(line) {
//     return line.toString() === line.toString().split('').reverse().join('')
// }
// console.log(isPalindrome(123456))
// console.log(isPalindrome("walter"))

// let isAnagram = function(test, original) {
//     let testArr = test.toLowerCase().split('').sort()
//     let originalArr = original.toLowerCase().split('').sort()
//     return testArr.join('') === originalArr.join('')
// }
// console.log(isAnagram("Twoo", "WooT"))

// function century(year) {
//     return Math.ceil(year / 100)
// }
// console.log(century(456))

// function findDup( arr ){
//     let duplicated = arr.filter((el,i) => arr.indexOf(el) !== i).join('')
//     let duplicatedNum = Number(duplicated)
//     return duplicatedNum
// }
//
// console.log(findDup([1,2,2,3]))

// function isPrime(num) {
//     if (num < 2) return false
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false
//             }
//         }
//         return true
// }
//
// console.log(isPrime(628597849)) //false
// console.log(isPrime(1)) //false
// console.log(isPrime(2)) //true
// console.log(isPrime(73)) //true
// console.log(isPrime(75)) //false
// console.log(isPrime(-1)) //false


// const fizzBuzz = (n) => {
//     let arr = Array(n).fill(0).map((el, i) => i + 1)
//     return arr.map((el) => el % 3 === 0 && el % 5 === 0 ? 'FizzBuzz' : el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el)
// }
// console.log(fizzBuzz(15))


// function findShort(s){
//     let arr = s.split(' ')
//     let wordsLengths = arr.map((el, i ) => Math.min(el.length))
//     return Math.min(...wordsLengths)
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// function squareDigits(num){
//     let arr = num.toString().split('')
//     let number = arr.map(el => Math.pow(el,2)).join('')
//     return Number(number)
// }
// console.log(squareDigits(9119))


// var myArray = [4, 8, 2, 7, 5];
// function processArray(arr, callback) {
//     return myArray.map((el) => callback(el))
// }
// myArray = processArray(myArray, function (a) {
//     return a * 2;
// })
// console.log(myArray)


// function count (string) {
//     if (!(string === "")) {
//         let arr = string.split('')
//         let obj = {key : 'counter'}
//         return arr.map((el,i) => {
//             return {i : el}
//         })
//     } else {
//         return {}
//     }
// }
// console.log(count('aba'))


// let arr = ['Miami', 'Bishkek', 'Dubai', 'Moscow', 'Osh']
// const getCity = (arr) => {
//     return arr.map((el,i) => {
//         return `${i + 1}. ${el}`
//     })
// }
// console.log(getCity(arr))

// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) {
//         return []
//     } else {
//         let positives = input.filter((el) => el > 0 ).length
//         let negatives = arraySum(input.filter((el) => el < 0 ))
//         return Array.of(positives, negatives)
//     }
// }
// function arraySum (array) {
//     return array.reduce((acc, rec) => acc + rec,0)
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


// function stray(numbers) {
//     return Number(numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el)).join(''))
// }
// console.log(stray([1, 1, 2]))


// let arr = [1,2,3,4,5,5,5,3,2]
// const indNumbers = (arr) => {
//     return arr.filter((el,i) => arr.indexOf(el) === i)
// }
// console.log(indNumbers(arr))


// const secondUppercase = (str) => {
//     let arr = str.split(' ')
//     return arr.map((el, i) => {
//         return i % 2 !== 0 ? el.toUpperCase() : el
//     })
// }
// console.log(secondUppercase('hello world! hello world! hello world!'))


// let array = [34,56,57,453,234]
// let evenSum = array.reduce((acc,el) => {
//     return el % 2 === 0 ? acc + el : acc
// },0)
// console.log(evenSum)


// let arr = [1,2,3,4,5,6]
// const sumEvenIndex = (arr) => {
//     return arr.reduce((acc, rec, i) => {
//         return i % 2 === 0 ? acc + rec : acc
//     }, 0)
// }
// console.log(sumEvenIndex(arr))


// let arr = ['Sasha', 'Maksim', 'Nikolay', 'Gena', 'Borya']
// const getShortNames = (arr) => {
//     // return arr.filter(el => el.length <= 5)
//     return arr.reduce((acc,rec) => {
//         return rec.length <= 5 ? [...acc, rec] : acc
//     },[])
// }
// console.log(getShortNames(arr))


// let arr = str.split(' ').map((el) => el.replace(el, str))
// return arr.map((el,i) => {
//     return el.replace(el[i], el[i].toUpperCase())
// })
// function wave(str){
// let arr = Array(str.trim().length + 1)
// }
// console.log(wave('hello'))
// console.log(wave(" gap "))


// let gimme = function (inputArray) {
//     return inputArray.indexOf(Number(inputArray.filter((el) => el < Math.max(...inputArray) && el > Math.min(...inputArray)).join('')))
// }
// console.log(gimme([2, 3, 1]))


// function race(v1, v2, g) {
//     if (v1 > v2) {
//         return null
//     } else {
//         let speedDif = v2 - v1
//         let timeToCatch = g / speedDif
//         let hour = Math.floor(timeToCatch)
//         let minutes = Math.floor(timeToCatch % 1 * 60)
//         let seconds = Math.round(timeToCatch * 60 % 1 * 60)
//         return [hour, minutes, seconds]
//     }
// }
// console.log(race(720, 850, 70)) //[0, 32, 18]
// console.log(race(80, 91, 37)) //[3, 21, 49]
// console.log(race(80, 100, 40)) //[2, 0, 0]


// function longestConsec(strarr, k) {
//     return strarr.reduce((acc, el, ind) => {
//         if (ind !== strarr.length - 1) {
//             return [...acc, el + strarr[ind + 1] + strarr[ind + 2]]
//         } else {
//             return acc
//         }
//     },[])
// }
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"],3))


// function persistence(num) {
//     let arr = num.toString().split('')
// return arr.reduce((acc, el) => {
//     if (num < 10) {
//         return  acc
//     } else {
//         return parseInt(acc) * parseInt(el)
//     }
//
// })
//     let counter = 0
//     for (let i = 11; i > 10; i++) {
//         i = 3 * 9
//         counter++
//         console.log(i)
//     }
//     return counter
// }
// console.log(persistence(39))


// let uniqueInOrder=function(iterable){
//     return [...iterable].reduce((acc, el ,ind, arr) => {
//         return arr[ind] !== arr[ind + 1] ? [...acc, el] : acc
//     },[])
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder([1,2,2,3,3])  )


// function domainName(url){
//     if (url.includes('www')) {
//         return url.slice(url.indexOf('www') + 3, url.lastIndexOf('.'))
//     } else {
//         return url.slice(url.indexOf('//') + 2, url.indexOf('.'))
//     }
// }
//
// console.log(domainName("http://google.com"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("www.xakep.ru"))
// console.log(domainName("https://youtube.com"))


// function trouble(x, t){
// return x.filter((el,i) => {
//     return el + x[++i] !== t
// })
//     return x.reduce((acc, el, ind) => {
//         return el + x[ind + 1] !== t ? [...acc, el] : acc
//     },[])
// }
// console.log(trouble([1, 3, 5, 6, 7, 4, 3],7))  //[1, 3, 5, 6, 7, 4]
// console.log((trouble([4, 1, 1, 1, 4],2)))       //[4, 1, 4]
// console.log(trouble([2, 2, 2, 2, 2, 2], 4))          //[2]
// console.log(trouble([2, 6, 2], 8))               //[2,2]



// var numbers = [1, 2, 3, 4, 5];
// Test.assertSimilar(numbers.square(), [1, 4, 9, 16, 25]);
// Test.assertSimilar(numbers.cube(), [1, 8, 27, 64, 125]);
// Test.assertEquals(numbers.sum(), 15, 'Wrong sum');
// Test.assertEquals(numbers.average(), 3, 'Wrong average');
// Test.assertSimilar(numbers.even(), [2, 4], 'Wrong result for even()');
// Test.assertSimilar(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');
// let numbers = [1, 2, 3, 4, 5]
// Array.prototype.square = function(){
//     return this.map(el => el * el)
// }
// Array.prototype.cube = function(){
//     return this.map(el => el * el * el)
// }
// Array.prototype.sum = function(){
//     return this.reduce((acc,rec) => acc + rec,0)
// }
// Array.prototype.average = function(){
//     return this.reduce((acc,rec) => acc + rec,0) / this.length
// }
// Array.prototype.even = function(){
//     return this.filter((el, ind) => el % 2 === 0)
// }
// Array.prototype.odd = function(){
//     return this.filter((el, ind) => el % 2 !== 0)
// }
// console.log(numbers.odd())


// function twoSum(numbers, target) {
//     let sum = 0
//     let counter = 0
//     let firstNumber
//     let secondNumber
//     for (let i = 0; i < numbers.length; i++) {
//
//     }
// }
// console.log(twoSum([1,2,3], 4))
// Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
// Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
// Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);


// function solution(number){
//     let arr = []
//     for (let i = 1; i < number; i++) {
//         arr[i] = i
//     }
//     return arr.filter(el => el % 3 === 0 || el % 5 === 0).reduce((acc, rec) => acc + rec,0)
// }
// console.log(solution(10))

// Find the odd int(6)
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.
// function findOdd(a) {
// // Для начала нужно вернуть массив массивов одинаковых чисел
//     let sortedArr = [...a].sort((a,b) => a > b ? 1 : -1)
//     let result = []
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i] !== sortedArr[sortedArr.length - 1]) {
//             if (sortedArr[i] === sortedArr[i++]) {
//                 result = [...result, [sortedArr[<i></i>]]]
//             }
//         }
//
//     }
//     return result
// }
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) //5


// function digital_root(n) {
//     let result = n // Начальный результат равен получаемому числу
//     while (result > 9) { // Пока число-результат больше 9, постоянно выполняй это действие
//         result = result.toString()   // Число преобразуем в строку
//             .split('') // Разделяем число на массив по 1 числу
//             .reduce((acc, rec) => Number(acc) + Number(rec), 0) // Складываем числа в массиве
//     }
//     return result // Возвращаем результат
// }
// function digital_root(n) {
//     return (n - 1) % 9 + 1;  // Остаток от деления числа на 9 равен сумме чисел в этом числе
// }
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6


// Перевернуть слова длинна, которых больше 4 букв
// function spinWords(str){
//     return str.split(' ').map((el) => {
//         let strArr = el.split('')  //Преобразуем одно слово в массив из букв
//         if (strArr.length > 4) {
//             for (let i = 0; i < strArr.length / 2; i++) {  // / 2 означает, что нужно заменить все буквы только до середины,
//                 let result = strArr[i]                     // если убрать, то цикл заменяет буквы 2 раза и ничего не меняется
//                 strArr[i] = strArr[strArr.length - 1 - i] // отсчет идет с начала
//                 strArr[strArr.length - 1 - i] = result  // - i c конца отсчет идет до середины
//             }
//             return strArr.join('')
//         }
//         return el
//     }).join(' ')
// }
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }
// console.log(spinWords("Hey fellow warriors"))  //Hey wollef sroirraw


// function persistence(num) {
//     let counter = 0
//     let result = num
//     while (result > 9) {  // Пока результат больше 9 выполнить это действие
//         result = result.toString().split('').reduce((acc, rec) => acc * rec, 1)
//         counter++
//     }
//     return counter
// }
// console.log(persistence(999)) //4


// function likes(names) {
//     if (names.length < 1) {
//         return 'no one likes this'
//     } else if (names.length === 1) {
//         return names[0] + ' likes this'
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
// }
// console.log(likes([])) //'no one likes this'
// console.log(likes(['Peter'])) //'Peter likes this'
// console.log(likes(['Jacob', 'Alex']))  //'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])) //'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //'Alex, Jacob and 2 others like this'


// function duplicateCount(text){
//     let textArr = text.toLowerCase().split('')
//     return textArr.filter((el,ind) => {
//         return ind !== textArr.lastIndexOf(el) // Берем из массива все повторяющиеся буквы
//     }).filter((el, ind, arr) => arr.indexOf(el) === ind).length // Убираем ненужные дупликаты и считаем
// }
// console.log(duplicateCount("Indivisibilities")) //2
// console.log(duplicateCount("aabbbbcde")) //2


// function findOutlier(integers){
//     if (integers[0] % 2 === 0 && integers[1] % 2 === 0 || integers[0] % 2 === 0 && integers[2] % 2 === 0 || integers[1] % 2 === 0 && integers[2] % 2 === 0) {
//         return integers.reduce((acc, rec) => rec % 2 !== 0 ? rec : acc,0)
//     } else {
//         return integers.reduce((acc, rec) => rec % 2 === 0 ? rec : acc,0)
//     }
// }
// console.log(findOutlier([0, 1, 2])) //1
// console.log(findOutlier([1, 2, 3])) //2

// function divCon(x){
//     // return x.filter(el => typeof el === 'number').reduce((acc, rec) => acc + rec,0) - x.filter(el => typeof el !== 'number').reduce((acc, rec) => acc + +rec,0)
//     return x.reduce((acc, rec) => {
//         let int = 0
//         let nonInt = 0
//         if (typeof rec === 'number') {
//             int +=rec
//         } else if (typeof rec !== 'number'){
//             nonInt += +rec
//         }
//         return acc + int - nonInt
//     },0)
// }
//
// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) //14


// function iqTest(numbers){
// let arr = numbers.split(' ')
// let oddFilter = arr.filter((el) => el % 2 !== 0)
// let evenFilter = arr.filter(el => el % 2 === 0)
// return evenFilter.length > 1 ? arr.indexOf(oddFilter.join('')) + 1 : arr.indexOf(evenFilter.join()) + 1

// // split the string of numbers into a new array
// let arr = numbers.split(' ')
// // check the first 3 numbers to assert odd or even number dominance
// let areMostlyEven = arr.slice(0, 3).reduce((acc, num) => acc += num % 2 ? 1 : 0, 0) > 1 ? false : true;
// // return the index of the first match plus 1 (as the expected index starts at 1, not 0)
// return arr.findIndex((num) => num % 2 !== 0 ? areMostlyEven : !areMostlyEven) + 1;
// }
//
// console.log(iqTest("2 4 7 8 10")) //3


// function hero(bullets, dragons){
//     return bullets / dragons >= 2
// }
// console.log(hero(100, 40))  //true

// function orderBreaker(input) {
//     if (input[0] > input[1]) {
//         return input[0]
//     }
//     for (let i = 0; i < input.length; i++) {
//         if (input[i - 1] > input[i + 1]) {
//             return input[i + 1]
//         } else if(input[i - 1] - input[i] > 0 === input[i + 1] - input[i] > 0){
//             return input[i]
//         }
//     }
// }
// console.log(orderBreaker([1,2,3,4,17,5,6,7,8])) //114


// var sing = function (num) {
//     const song = (quantity, bottles = 'bottles') => `"${quantity} ${bottles} of beer on the wall,${quantity} ${bottles} of beer.", "Take one down and pass it around, ${quantity - 1} ${bottles} of beer on the wall.",`
//     const songForOne = (quantity) => `"${quantity} bottle of beer on the wall, ${quantity} bottle of beer.", "Take one down and pass it around, no more bottles of beer on the wall.",`
//     const songForNone = () => `"No more bottles of beer on the wall, no more bottles of beer.", "Go to the store and buy some more, ${num} bottles of beer on the wall."`
//     let arr = []
//     for (let i = 0; i <= num; i++) {
//         if (i === 0) {
//             arr = [...arr, songForNone()]
//         }
//         if (i === 1) {
//             arr = [...arr, songForOne([i])]
//         }
//         arr = [...arr, song(i)]
//
//             }
//     return arr
// };
// console.log(sing(0));

// decodeMorse = function(morseCode){
//     let wordsArr = morseCode.split('   ').filter(el => el)
//     let lettersArr = wordsArr.map(el => el.split(' ')).map(el => el.filter(el => el))
//     return lettersArr.map(el => el.map(el => el + 1).join('')).join(' ').toUpperCase()
// }
// decodeMorse = function(morseCode){
//     function decodeMorseLetter(letter) {
//         return letter + 1;
//     }
//     function decodeMorseWord(word) {
//         return word.split(' ').map(decodeMorseLetter).join('');
//     }
//     return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }
//
// console.log(decodeMorse('     .... . -.--   .--- ..- -.. .')) // HEY JUDE
// decodeMorse = function(morseCode){
//     return morseCode
//         .trim()
//         .split(/  | /)
//         .map( (code) => code + 1 || ' ')
//         .join('');
// }
// console.log(decodeMorse('     .... . -.--   .--- ..- -.. .')) // HEY JUDE

// function arrayDiff(a, b) {
//     return a.reduce((acc, rec) => {
//         if (!b.includes(rec)) {
//             return [...acc, rec]
//         }
//         return acc
//     },[])
// }
// console.log(arrayDiff([3,4, 5], [3, 5])) // [4] "a was [3,4], b was [3]"
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
// function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
// }

// function isValidWalk(walk) {
//     const directionCount = value => walk.filter(el => el === value).length
//     if (walk.length === 10) {
//         if (walk.includes('n')) {
//             if (walk.includes('w')) {
//                 return directionCount('n') === directionCount('s') && directionCount('w') === directionCount('e')
//             } else {
//                 return directionCount('n') === directionCount('s')
//             }
//         } else {
//             return directionCount('w') === directionCount('e')
//         }
//     } else {
//         return false
//     }
// }

// function isValidWalk(walk) {
//     if (walk.length === 10) {
//         let dx = 0
//         let dy = 0
//         for (let i = 0; i < walk.length; i++) {
//             switch (walk[i]) {
//                 case 'n': dy--; break
//                 case 's': dy++; break
//                 case 'w': dx--; break
//                 case 'e': dx++; break
//             }
//         }
//         return dx === 0 && dy === 0
//     }
//     return false
// }
//
// console.log(isValidWalk(['w','w','w','e','w','e','e','e','w','e'])) //'should return true'


// const countBits = function(n) {
//     return n.toString(2).split('0').join('').length;
// }
// console.log(countBits(1234)) //5

// function createPhoneNumber(numbers){
//     const slice = (startInd, endInd) => numbers.join('').slice(startInd, endInd)
//     return `(${slice(0,3)}) ${slice(3,6)}-${slice(6)}`
// }
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }
// function createPhoneNumber(numbers){
//     return numbers.reduce((acc,rec) => acc.replace('x',rec), "(xxx) xxx-xxxx");
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function alphabetPosition(text) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let arr = text.toLowerCase().split('').map(el => el.replace(el, alphabet.indexOf(el) + 1))
//     return arr.filter(el => +el !== 0).join(' ')
// }
// console.log(alphabetPosition("The narwhal bacons at midnight.")) //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"


// function order(words){
//     let arr = words.split(' ')
//     if (words !== '') {
//         const isNumber = (search) => {
//             return arr.filter(el => el.includes(search)).join('')
//         }
//         return [...arr].map((el,ind, arr) => arr[ind] = isNumber((ind + 1))).join(' ')
//     } else {
//         return  ''
//     }
// }
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //"Thi1s is2 3a T4est"


// function tribonacci(signature,n){
//     let result = [...signature]
//     if (n !== 0) {
//         for (let i = 0; i < n - 3; i++) {
//             result = [...result, result[i] + result[i + 1] + result[i + 2]]
//         }
//         return result.slice(0, n)
//     }
//     return []
// }
// console.log(tribonacci([1,1,1],10)) //,[1,1,1,3,5,9,17,31,57,105]
// function tribonacci(sign,n){
//     for (var i = 3; i < n; i++) {
//         sign[i] = sign[i-1] + sign[i-2] + sign[i-3];
//     }
//     return sign.slice(0, n);
// }
// function tribonacci(signature,n) {
//     const result = signature.slice(0, n);
//     while (result.length < n) {
//         result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//     }
//     return result;
// }

// function findEvenIndex(arr) {
//     let result
//     let rightSum = []
//     let leftSum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== arr.length - 1 && i !== 0) {
//             leftSum[i] = arr[i - 1]
//             rightSum[i] = arr[i + 1]
//             result = [leftSum, rightSum]
//         }
//
//     }
//     return result
// }
// console.log(findEvenIndex([1,2,3,4,3,2,1]))

// function digPow(n, p){
//     let arr = n.toString().split('')
//     let totalNumber = 0
//     for (let i = 0; i < arr.length; i++) {
//         totalNumber += Math.pow(+arr[i], i + p)
//     }
//     return totalNumber % n === 0 ? totalNumber / n : -1
// }
// function digPow(n, p) {
//     let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
// }
// console.log(digPow(695, 2))


// Training on Dubstep
// Убрать все WUB и оставить только слова песни через пробел
// function songDecoder(song){
//     return song.replace(/WUB/ig,' ').split(' ').filter(el => el !== '').join(' ')
// }
// function songDecoder(song){
//     return song.replace(/(WUB)+/g," ").trim()
// }
// function songDecoder(song){
//     return song.split('WUB').filter(Boolean).join(' ');
// }
// console.log(songDecoder("AAAWUBBWUBC")) //"A B C"
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")) //"A B C"
// console.log(songDecoder("WUBAWUBBWUBCWUB")) //"A B C"

// function tickets(peopleInLine){
//     let arr = [...[peopleInLine]]
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         if (sum === arr[i + 1] - 25) {
//             return 'sdf'
//         }
//     }
// }
// console.log(tickets([25, 25, 50, 50]))  //"YES"
// console.log(tickets([25, 100]))  //"NO"


// function toCamelCase(str){
//     if (!str) return ''
//     function splitBySymbol (symbol) {
//         let camelCaseStr = str.split(`${symbol}`).map(el => el[0].toUpperCase() + el.slice(1)).join('')
//         return str[0] === str[0].toUpperCase() ? camelCaseStr : str[0] + camelCaseStr.slice(1)
//     }
//     return str.includes('-') ? splitBySymbol('-') : splitBySymbol('_')
// }
// console.log(toCamelCase("the_stealth_warrior")) //"theStealthWarrior"
// console.log(toCamelCase("The-Stealth-Warrior")) //"TheStealthWarrior"


// function findNb(m) {
//     let result = 0
//     let count = 0
//     for (let i = 0; result < m; i++) {
//         result += Math.pow(i + 1, 3)
//         count++
//     }
//     return result === m ? count : -1
// }

// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
// }

// function findNb(m) {
//     let n = 0;
//     let sum = 0;
//     while (sum < m) {
//         n++;
//         sum += Math.pow(n, 3);
//     }
//     return sum === m ? n : -1;
// }

// console.log(findNb(1071225)) //45
// console.log(findNb(24723578342962)) //-1


// function comp(array1, array2){
//     if (!array2 || !array1) return false
//     function checkLengthes (arr) {
//         return arr.reduce(function(acc, rec) {
//             return (typeof acc[rec] !== 'undefined')
//                 ? { ...acc, [rec]: acc[rec] + 1 }
//                 : { ...acc, [rec]: 1 }
//         }, {})
//     }
//     let newArr = array2.map(el => Math.sqrt(el))
//     return array2.reduce((acc, rec) => {
//         return acc && array1.includes(Math.sqrt(rec)) && JSON.stringify(checkLengthes(array1)) === JSON.stringify(checkLengthes(newArr))
//     },true)
// }
// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }
// function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
// }

// a1 = [121, 144, 19, 161, 19, 144, 19, 11]
// a2 =  [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//
//
// console.log(comp(a1,a2)) // true


// function longestConsec(arr, k) {
//     if (arr.length === 0 || k > arr.length || k <= 0 ) return ''
//     let combinedStrings =  arr.reduce((acc,rec, ind) => {
//         if (ind !== arr.length) {
//             return [...acc, ([...arr].slice(ind, ind + k).join(''))]
//         }
//         return acc
//     },[])
//     return combinedStrings.reduce((acc,rec) => acc.length >= rec.length ? acc : rec,'')
// }
// function longestConsec(strarr, k) {
//     var longest = "";
//     for(var i=0;k>0 && i<=strarr.length-k;i++){
//         var tempArray = strarr.slice(i,i+k);
//         var tempStr = tempArray.join("");
//         if(tempStr.length > longest.length){
//             longest = tempStr;
//         }
//     }
//     return longest;
// }

// function longestConsec(arr, k) {
//     if (arr.length === 0 || k > arr.length || k <= 0 ) return ''
//     return arr.reduce((acc,rec, ind) => {
//         let currentStr = [...arr].slice(ind, ind + k).join('')
//         return currentStr.length > acc.length ? currentStr : acc
//     },'')
// }
// console.log( longestConsec(["123422","444444","123456", "123456", "123456"], 3))


// function sortArray(array) {
//     let sortedArray = [...array].filter(el => el % 2 !== 0).sort((a,b) => a - b)
//     let counter = 0
//     return [...array].map(el => el % 2 !== 0 ? sortedArray[counter++] : el)
// }
// console.log(sortArray([5, 3, 2, 11, 8, 1, 4]))  //[1, 3, 2, 5, 8, 11, 4]


// function findUniq(arr) {
//     return arr.filter((el,ind) => ind === arr.lastIndexOf(el) && ind === arr.indexOf(el))
// }
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //2


// function findMissingLetter(array) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     if (array[0] === array[0].toUpperCase()) {
//         alphabet = alphabet.toUpperCase()
//     }
//     let alphabetArr = alphabet.split('')
//     let slicedArr = alphabetArr.slice(alphabetArr.indexOf(array[0]), alphabetArr.indexOf(array[0]) + array.length + 1)
//     return slicedArr.filter(el => !array.includes(el))[0]
// }
// console.log(findMissingLetter(['a','b','c','d','f'])) //'e'
// const findMissingLetter = (array) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     const start = alphabet.indexOf(array[0]);
//     return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };


// function list(names){
//     return names.map((el,ind,arr) => ind === arr.length - 1 ? el.name : ind === arr.length - 2 ? el.name + ' & ' : el.name + ', ').join('')
// }
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) //'Bart, Lisa, Maggie, Homer & Marge'


// function towerBuilder(nFloors) {
//     let biggestFloor = new Array(nFloors * 2 - 1).fill('*')
//     let result = [biggestFloor.join('')]
//     for (let i = 1; i < nFloors; i++) {
//         biggestFloor[i - 1] = ' '
//         biggestFloor[biggestFloor.length - i] = ' '
//         result[i] = biggestFloor.join('')
//     }
//     return result.reverse()
// }
// console.log(towerBuilder(7))
// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]
// function towerBuilder(n) {
//     return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
// }
// console.log(towerBuilder(7))
// function towerBuilder(n) {
//     return Array.from({length: n}, function(el, i) {
//         const spaces = ' '.repeat(n - i - 1);
//         return spaces + '*'.repeat(i + i + 1) + spaces;
//     });
// }
// console.log(towerBuilder(7))

// let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// function isPangram(string) {
//     return alphabet.reduce((acc, rec) => {
//         return acc && string.toLowerCase().includes(rec)
//     },true)
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//         return string.indexOf(x) !== -1;
//     });
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true


// function narcissistic(value) {
//    return value === value.toString().split('')
//        .reduce((acc, rec, i, arr) => acc + Math.pow(+rec, arr.length),0)
// }
// console.log(narcissistic( 371 ))  //true, "371 is narcissistic"


// function solution(number){
//     const romanNumbers = {1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'}
//     let numArr = (number + '').split('').map((el, ind, arr) => el * Math.pow(10, arr.length - ind - 1))
//     return numArr.reduce((acc, rec) => {
//         function doingSmth (number) {
//             let counter = Math.pow(10, +(number.toString().length - 1))
//             return romanNumbers[counter].repeat(number.toString()[0])
//         }
//         if (romanNumbers[rec]) {
//             return [...acc, romanNumbers[rec]]
//         } else {
//             if ((+rec.toString()[0]) === 9) {
//                 let newNumberNine = Math.pow(10, rec.toString().length)
//                 return [...acc, romanNumbers[newNumberNine - rec], romanNumbers[newNumberNine]]
//             } else if ((+rec.toString()[0]) === 4) {
//                 let newNumberFour = 5 * Math.pow(10, rec.toString().length - 1)
//                 return [...acc, romanNumbers[newNumberFour - rec], romanNumbers[newNumberFour]]
//             } else if ((+rec.toString()[0]) > 5) {
//                 let newNumberMoreFive = 5 * Math.pow(10, rec.toString().length - 1)
//                 return [...acc, romanNumbers[newNumberMoreFive], doingSmth(rec - newNumberMoreFive)]
//             }
//             return [...acc, doingSmth(rec)]
//         }
//     },[]).join('')
// }
// console.log(solution(900)) //'MCMXC'  1000 + (1000-100) + (100 - 10)

// function solution(number){
//     var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
//     var ans = '';
//     while(number>0){
//         for(a in roman){
//             if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
//         }
//     }
//     return ans;
// }
// console.log(solution(1733))
// function solution(number){
//     return [
//         { threshold: 1000, char: 'M'},
//         { threshold: 900,  char: 'CM'},
//         { threshold: 500,  char: 'D'},
//         { threshold: 400,  char: 'CD'},
//         { threshold: 100,  char: 'C'},
//         { threshold: 90,   char: 'XC'},
//         { threshold: 50,   char: 'L'},
//         { threshold: 40,   char: 'XL'},
//         { threshold: 10,   char: 'X'},
//         { threshold: 9,    char: 'IX'},
//         { threshold: 5,    char: 'V'},
//         { threshold: 4,    char: 'IV'},
//         { threshold: 1,    char: 'I'}
//     ].reduce(function(prev, curr, idx, arr) {
//         while(number >= curr.threshold) {
//             prev += curr.char;
//             number -= curr.threshold;
//         }
//         return prev}, '')
// }
// console.log(solution(1733))
// function solution(number){
//     var roman = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};
//     var str = '';
//     for (var i of Object.keys(roman)) {
//         var q = Math.floor(number / roman[i]);
//         number -= q * roman[i];
//         str += i.repeat(q);
//     }
//     return str;
// }
// console.log(solution(6))


// function encrypt(text, n) {
//     if (!text|| text.length === 0 || n <= 0) return text
//     let ecryptedText = text.split('')
//     for (let i = 0; i < n; i++) {
//         ecryptedText = ecryptedText.filter((el, ind) => ind % 2 !== 0)
//             .concat(ecryptedText.filter((el,ind) => ind % 2 === 0))
//     }
//     return ecryptedText.join('')
// }
// console.log(encrypt("This is a test!", 4))
//
// function decrypt(encryptedText, n) {
//     if (!encryptedText || encryptedText.length === 0 || n <= 0) return encryptedText
//     let decryptedText = encryptedText.split('')
//     let leftside
//     let rightside
//     for (let i = 0; i < n; i++) {
//         leftside = decryptedText.slice(0, decryptedText.length / 2)
//         rightside = decryptedText.slice(decryptedText.length / 2)
//         for (let i = 0; i < decryptedText.length; i++) {
//             if (i % 2 === 0) {
//                 decryptedText[i] = rightside[i / 2]
//             } else {
//                 decryptedText[i] = leftside[Math.floor(i / 2)]
//             }
//         }
//     }
//     return decryptedText.join('')
// }
// console.log(decrypt(" Tah itse sits!", 3))

// function encrypt(text, n) {
//     if (!text || !text.length || n <= 0)
//     {
//         return text;
//     }
//     var res = "";
//     var oth = "";
//     for (var i = 0; i < text.length; ++i)
//     {
//         if (i % 2 == 0)
//         {
//             oth += text[i];
//         }
//         else
//         {
//             res += text[i];
//         }
//     }
//     return encrypt(res + oth, --n);
// }
// function decrypt(encryptedText, n) {
//     if (!encryptedText || !encryptedText.length || n <= 0)
//     {
//         return encryptedText;
//     }
//     var first = encryptedText.slice(0, encryptedText.length / 2);
//     var second = encryptedText.slice(encryptedText.length / 2);
//     var res = "";
//     var i = 0;
//     var j = 0;
//     while (res.length < encryptedText.length)
//     {
//         if (res.length % 2 == 0)
//         {
//             res += second[i];
//             i++;
//         }
//         else
//         {
//             res += first[j];
//             j++;
//         }
//     }
//     return decrypt(res, --n);
// }

// function encrypt(text, n=0) {
//     return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
// }
//
// function decrypt(text, n) {
//     return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
// }
// console.log(decrypt("hsi  etTi sats!", 1))


// function high(x){
//     let arr = x.split(' ').map(el => el.split(''))
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let alphabetArr = arr.reduce((acc, rec) => [...acc, rec.reduce((acc,rec) => acc + alphabet.indexOf(rec) + 1,0)],[])
//     let index = alphabetArr.indexOf(Math.max(...alphabetArr))
//     return arr[index].join('')
// }
// console.log(high('pnvigrmcoexmnxqbdnwxhnxeihvpcix qzfghyefqhrdvvnpefgbcffikyrggtv turljcwjlgwcfgukkgpzetwnbfvuedl ccmxwbydtrhrajiivrdvfgxxjpjtqzk'))  // ccmxwbydtrhrajiivrdvfgxxjpjtqzk

// function high(x){
//     //transform the input string into array & define a string of alphabetical latin characters
//     var arr = x.split(' ');
//     var str = 'abcdefghijklmnopqrstuvwxyz';
//     //Iterate through the array with input words to find the one with the greatest sum
//     var newArr = arr.map(function(word){
//         var sum = 0;
//         for (var i = 0; i < word.length; i++) {
//             sum += str.indexOf(word[i]);
//         }
//         return sum;
//     });
//     //Return the word with the greatest sum
//     return arr[newArr.indexOf(Math.max(...newArr))];
// }

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
// }


// function expandedForm(num) {
//     let arr = num.toString().split('').reduce((acc, rec,ind, arr) => +rec !== 0 ? [...acc, rec + '0'.repeat(arr.length - ind - 1)] : acc ,[])
//     return arr.join(' + ')
// }
// console.log(expandedForm(170354))
// var expandedForm = (num) => {
//     var arr = num.toString().split('').reverse();
//     var result = [];
//     for(var i = 0; i < arr.length; i++){
//         arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
//     }
//     return result.reverse().join(' + ')
// }
// console.log(expandedForm(170354))


// function solution(str){
//     return str.split('').reduce((acc, rec, ind, arr) => {
//         if (ind !== Math.floor(arr.length / 2) || arr.length % 2 === 0) {
//             return [...acc, arr.slice(ind * 2, ind * 2 + 2).join('')]
//         }
//         return [...acc, arr[arr.length - 1] + '_']
//     },[]).filter(el => el)
// }
// console.log(solution("abcdefg")) //["ab", "cd", "ef", "g_"]

// function solution(str){
//     let i = 0;
//     let result = [];
//     if (str.length % 2 !== 0) {
//         str = str + '_';
//     }
//     while (i < str.length) {
//         result = result.concat(str[i] + str[i+1])
//         i += 2;
//     }
//     return result;
// }
// console.log(solution("abcd"))

// function inArray(array1,array2){
//     return array1.filter(el => array2.join(' ').includes(el)).sort()
// }
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["xyz", "live", "strong"]
// console.log(inArray(a1, a2)) //["live", "strong"]

// function inArray(array1,array2){
//     return array1
//         .filter(a1 => array2.find(a2 => a2.includes(a1)))
//         .sort()
// }
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["xyz", "live", "strong"]
// console.log(inArray(a1, a2)) //["live", "strong"]

// function inArray(array1,array2){
//     return array1
//         .filter(a1 => array2.some(a2 => a2.includes(a1)))
//         .sort()
// }


// function sumDigPow(a, b) {
//     let arr = new Array(b + 1 - a).fill(0).map((_,i) => i + a)
//     return arr.filter(el => el.toString().split('')
//         .reduce((acc, rec, ind) => acc + Math.pow(+rec, ind + 1),0) === el)
// }
// console.log(sumDigPow(1, 100))
