//==========question==============//

/*
1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2.Print the string on the browser console using console.log()
3.Print the length of the string on the browser console using console.log()
4.Change all the string characters to capital letters using toUpperCase() method
5.Change all the string characters to lowercase letters using toLowerCase() method
6.Cut (slice) out the first word of the string using substr() or substring() method
7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8.Check if the string contains a word Script using includes() method
9.Split the string into an array using split() method
10.Split the string 30 Days Of JavaScript at the space using split() method
11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
23.Use match() method to find all the a’s in 30 Days Of JavaScript
24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25.Use repeat() method to print 30 Days Of JavaScript 2 times
*/

// =================================solution==================================

let name="30 Days of JavaScript"


 console.log(name)
 
 console.log(name.length)
 
 console.log(name.toUpperCase())
 console.log(name.toLowerCase())
 
 console.log(name.substr(0,1))
  console.log(name.substring(0,1))
  
 console.log(name.substr(3,name.length-1))
 
 console.log(name.includes("Script"))
 
  console.log(name.includes("of"))
  
   console.log(name.includes("Scmript"))
   
   
   console.log(name.split(" "))

let str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 

console.log(str.split(','))

console.log(name.replace("JavaScript","Python"))

console.log(name.charAt(15))
console.log(name.charCodeAt("J"))

console.log(name.indexOf("a"))
console.log(name.lastIndexOf("a"))

let sen="You cannot end a sentence with because because because is a conjunction"

console.log(sen.lastIndexOf("because"))


console.log(name.repeat(50))



let last="You cannot end a sentence with because because because is a conjunction"

console.log(last.indexOf("because"))
console.log(last.lastIndexOf("because"))
console.log(last.search("because"))
let man=  ' 30 Days Of JavaScript '
console.log(name.trim())

console.log(name.startsWith("30 D"))
console.log(name.endsWith("t"))
console.log(name.match("a"))
let stri="30"
console.log(stri.concat("30 Days of","JavaScript"))

