      //= = = Chhapter 21-25

                    //TASK..1
// var nameToCheck = prompt("Enter your name");

// var fullNames = ["hassan", "raza", "ali", "jamal", "yousuf"];
// for (var i = 0; i <= 0; i++) {
// if (nameToCheck === fullNames[0]) {
//     alert("Hassan Raza");
// }else
// {(alert("No name"))
// }
// }
                   //TASK...2

// var phoneToCheck = prompt("Enter your favourite Phone ");

// var favPhone = ["Samsung", "Qmobile", "iphone", "infinix"];
// for (var i = 0; i <= 0; i++) {
// if (phoneToCheck === favPhone[0]) {
//    document.write("My favourite phone is : Samsung galaxy S6 Edge Plus")
// }else
// {(alert("Not Favourite"))
// }
// }

                 //Task...3

// var a = "Pakistan";
// document.write(a.charAt(7))


              //Task....4

// var a = "Hello World";
// document.write(a.charAt(9))


           //Task......5

// var a = "Pakistan";
// document.write(a.charAt(3))


                //Task....7
// const a = 'Hyderabad';
// const regex = /Hyder/gi;
// document.write(a.replace(regex, 'Islam'));

            //Task...9


// var text = '472';
// var integer = parseInt(text, 10);
// document.write(integer)
          
          //Task.....8

// const p =  "Ali and Sami are best friends. They play cricket and football together.";
// const regex = /and/gi;     
// document.write(p.replace(regex, '&'));


              //Task.....10

// var cityToCheck = prompt("Enter your Country");
// cityToCheck = cityToCheck.toUpperCase();
// alert(cityToCheck)
// document.write(cityToCheck)

               //Task ......11
// var name = prompt("Enter your Country");
// var firstChar =  name.slice(0,1);
// var firstChar = firstChar.toUpperCase();
// var otherChar = name.slice(1);
// var otherChar = otherChar.toLowerCase();
// var name =  (firstChar+otherChar)
// alert(name)
// document.write(name)


         //Task......12

// var number = 35.36;
// var result = number + '';
// result =result.replace('.', '');
// result = parseInt(result);
// alert(result);
// document.write(result)


     // ....Task13
// var data=prompt("Enter username");
// for(var i=0; i<data.length; i++){
// if(data[i]==='@' || data[i]==='.' || data[i]==='!' ){
//       alert("Enter valid username");
//        break
//   }
// }

            //Task......14

// var items = ["cake", "apple pie", "Cookie" , "chips" ,"patties"];
// var search = prompt("Enter search value");
// if(items.indexOf(search) !== -1){
//               alert("Yes " + search + " is available")
// }else{
//       alert("We are Sorry " + search + " is not available")
// }


               //... Task 15 

// var data=prompt("Enter your password");
// if(data.slice(0,1)===)


      //Task....16

// var university = "Mehran University"
// var split = university.split("")
// document.write(split)

                  //.... Task 17
// var str=prompt("Enter input: ");
// document.write("User input: "+str+"</br>");
// var x=str.length;
// document.write("Last character of input: "+str[x-1]);

                //..... Task18
// var str="The quick brown fox jumps over the lazy dog";
// var str_new=str.toLowerCase();
// var count=0;
// for(var i=0; i<str_new.length; i++){
//     if(str_new.slice(i,i+3)=='the'){
//         count=count+1;
//         continue;
//     }
// }
// document.write("Text: The quick brown fox jumps over the lazy dog"+"</br>");
// document.write("There are "+count+" occurence(s) of word 'the'");
               

                    //====Chap......26-30

            //Task 1

// var num = 3.45214;
// // var round = Math.round(num)
// // var round = Math.ceil(num)
// // var round = Math.floor(num)
// var round = Math.round(num)
// document.write(round)


          //Task....2

// var num = -3.45214;
// // var round = Math.round(num)
// // var round = Math.ceil(num)
// // var round = Math.floor(num)
// var round = Math.round(num)
// document.write(round)

              //Task...3

// var num = -4;
// var round = Math.abs(num)
// document.write(round)

                    //Task...4

// var dice = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled a ' + dice);

                  //Task...5

// var headUser = prompt("Enter Head user")
// var tailUser = prompt("Enter Tail user")
// var toss = Math.random()*2;
// var floor = Math.floor(toss) 
// if(floor === 0){
//       alert("Heads " + headUser + " win the toss")
// }else{
//       alert("Tails " + tailUser + " win the toss")
// }

                 //Task......6

// var randomValues = Math.floor( Math.random()* 100 ) +1;
// document.write(randomValues);


               //...... Task 8
// var data=prompt("Enter the number between 1 and 10");
// var int=parseInt(data);
// var num=Math.random();
// var round=num*10;
// var result=Math.floor(round);
// if(int===result){
//     alert("Congrats!");
// }
// else{
//     alert("Try again!");
// }
  

                                  //Chap......31-to-34

                  //Task...1

// var a = new Date();
// document.write(a)

                 //Task....2

// var result=new Date();
// var data=result.toString();
// document.write("Current month: "+data.slice(4,7));

             //Task.....3


// var a = new Date();
// var string = a.toString()
// var b = string.slice(0,3)
// document.write("Today is " + b)

                 //Task....4

// var a = new Date();
// var string = a.toString()
// var b = string.slice(0,3)
// document.write(b + "day it's fun day")

                //Task....5

// var result=new Date();
// var date=result.getDate();
// if(date<=15){
//     document.write("First fifteen days of month");
// }
// else if(date>=16){
//     document.write("Last days of month");
// }

                //Task......6


// var a = new Date("jan 1 1970");
// var amili = a.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - amili;
// var accAge = Math.floor(diff/(1000*60*60*24*12))
// document.write(diff)
// document.write(accAge)

              
                   //Task......7
             
// function timeConvertor(time) {
//       var PM = time.match('PM') ? true : false
      
//       time = time.split(':')
//       var min = time[1]
      
//       if (PM) {
//           var hour = 12 + parseInt(time[0],10)
//           var sec = time[2].replace('PM', '')
//       } else {
//           var hour = time[0]
//           var sec = time[2].replace('AM', '')       
//       }
      
//       alert(hour + ':' + min + ':' + sec)
//   }
  
//   timeConvertor('07:03:15PM'+ "PM");
  
//   timeConvertor('1:53:55AM' + "AM"); 


            //Task....8

// var a = new Date();

// document.write(a)





                    //Chap   35-to-38

            //Task....1

// var curday = function(sp){
// today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //As January is 0.
// var yyyy = today.getFullYear();
                  
// if(dd<10) dd='0'+dd;
// if(mm<10) mm='0'+mm;
// return (mm+sp+dd+sp+yyyy);
// };
// alert(curday('/'));
// alert(curday('-'));

             //Task.....2

// function greeting(firstname, lastname){
//        var fullname = (firstname + lastname);
//        return fullname;
// }
//        var name = greeting("Hassan ", "Raza")
//        alert(name)

             //Task.....3

// function add(x,y,z){
//       var a = x + y + z;
//       return a;
// }
//  var b = add(3,5,8)
//  alert(b)


           //Task....4

// function calc(num1,opr,num2){
//       if (opr ==="+"){
//             return num1 + num2;
//       }
//       else if(opr ==="-"){
//             return num1 - num2;
//       }
//       else if(opr ==="*"){
//             return num1 * num2;
//       }
//       else if(opr ==="/"){
//             return num1 / num2;
//       }else{
//             return "Incorrect operator"
//       }
// }
// var result = calc(3,"*",5)
// var result1 = calc(9,"+",10)
// var result2 = calc(7,"/",7)
// var result3 = calc(3,"-",6)
// var result4 = calc(3,"%",6)

// alert(result)
// alert(result1)
// alert(result2)
// alert(result3)
// alert(result4)

             //Task......5

// function square(a,b){
//       var c = a*b;
//       return c;
// }
// var d = square(3,3)
// alert(d)

      //Task......6

// function factorial(n){
// let answer = 1;
// if (n == 0 || n == 1){
//       return answer;
// }else{
//  for(var i = n; i >= 1; i--){
//       answer = answer * i;
// }
//       return answer;
// }  
// }
// let n = 4;
// answer = factorial(n)
// alert("The factorial of " + n + " is " + answer);

             //Task ....7

