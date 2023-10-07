
// lesson - 1

// toan tu trong java


// // var number1 = 10;

// // var output = number1++ + number1++ * 2 + --number1 + number1++ // 10 + 11 * 2 + 11 + 11 = 54

// // console.log(output)

// var a = 1;
// var b = 2;

// var c = a ** b;

// console.log(c);



// var bossName = 'jeck';
// var bossAge = 12;
// var senName = 'Luong';
// var senAge = '20';

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(0, 4));
var array = [[1, 2, 3], [1, 2, 3], [1, [1,2]]];

// array.pop();
// array.shift();


// console.log(array);
// console.log(array [4] [1] [1] [0]);

// var boss = bossName + bossAge;
// bossName[1] = 'L';
// console.log(bossName[1]);
// var firstNameBoss = bossName[0];
// var lastNameBoss = bossName[bossName.length - 1];



// console.log(lastNameBoss);
// var c = 2;
// c = c * 2;
// c %= 2;
// console.log(c);
// // alert(bossName) ;

// // // lesson - 2

// // var currentCourse = 'Javascript cơ bản';
// // var newCourse;

// //     newCourse = currentCourse;
// //     // alert(newCourse);

// //     var newCourse = 'Javascript nâng cao';
// //     // alert(newCourse);

// // // lesson - 3

// // var fullName = 'doan hong luong';
// // // alert(fullName);

// var message = 'Học về built-in functions trong JS';
// var warnMessage  = 'Đây là message cảnh báo';
// var errorMessage = 'Đây là message lỗi';

// console.log(message);
// console.warn(warnMessage);
// console.error(errorMessage);


// function myTest(){
//    var myString = ' ';
//    for(a of arguments){
//       myString += `${a} - `;
      
//    }
//    console.log(myString);

// }

// myTest(2, 3, 2, 2);


// // function myTest(){
// //    var sum = 0;
// //    for(a of arguments){
// //       sum += a;
      
// //    }
// //    console.log(sum);

// // }

// // myTest(2, 3, 2, 2, 1);


// //String

// // Length
// // Find index (indexOf - search)
// // Cut index (slice)
// // Replace - ghi de (replace)
// // xoa khoan trang (trim())
// // cat mot chuoi thanh array (split)


// // function getContentLength(content) {
// //    var bc = content.length;
// //    return bc;
// // }


// // function getUpperCaseName(name){
// //    var ab = name.toUpperCase();
// //    return ab;
   
// // }


// // Kì vọng
// // console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
// // console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"





// // Mở tab Console để xem kết quả trực quan


// // function run(socialType, isVerified) {
// //     var result;

// //     if(socialType == 'google' || socialType == 'facebook'){
// //         result = true;
// //     }else if(socialType = 'email' && isVerified == true){
// //         result = false;
// //     }

// //     return result;
// // }

// // var result = run('email', );

// //    function sum(a, b) {
// //       return a + b;
// //    }



// // var result = sum('ab', 2);

// // console.log( result);

// // var emailKey = 'email';

// //Array

// var info = [
//    'luong',
//    21,
//    '1m74'
// ];


// // console.log(Array.isArray(info));

// // kt la NAN (isNAN())
// // kt la array (Array.isArray())

// var emailKey;

// var myInfo = {
//    name: 'Luong',
//    age: 18,
//    [emailKey]: '@gmail.com',
//    getName: function(){
//       return this.name;
//    }
// };


// // console.log(myInfo);



// // var myAge = 'age';

// // myInfo.email = '@gmail.com';
// // myInfo['my-add'] = 'add'

// // console.log(myInfo);
// // console.log(myInfo[myAge]);

// // xoa object

// // delete myInfo.age;


// //xay dung doi tuong

// function User(firsName, lastName, avatar){
//    this.firsName = firsName;
//    this.lastName = lastName;
//    this.avatar = avatar;

//    this.getName = function(){
//       return `${this.firsName} ${this.lastName}`;
//    }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function(){
//    return this.className;
// }


// var author = new User('Son', 'Dang', 'Avatar');
// var user = new User('Luong', 'Hong', 'Avatar');

// // console.log(author.getClassName());
// // console.log(user.getName());

// // console.log(author);
 

// // doi tuong data

// var data = new Date();

// // console.log( data);

// var year = data.getFullYear(),
//    month = data.getMonth(),
//    day = data.getDay();

 
// // console.log(`${year}/${month}/${day}`)

// // if else

// var data = new Date();

// var day = data.getDay() + 1;
// // console.log(day);
// // var day = 3;

// // if(day == 2){
// //    console.log('Hôm nay là thứ hai!');
// // }else if(day == 3){
// //    console.log('Hôm nay là thứ ba!');
// // }else if(day == 4){
// //    console.log('Hôm nay là thứ tư!');
// // }else if(day == 5){
// //    console.log('Hôm nay là thứ năm!');
// // }else if(day == 6){
// //    console.log('Hôm nay là thứ sao!');
// // }else if(day == 7){
// //    console.log('Hôm nay là thứ bay');
// // }
// // else if(day == 1){
// //    console.log('Hôm nay là thứ chủ nhật');
// // }

// // dayTest = 10;

// // switch(day){
// //    case 2:
// //       console.log('Hôm nay là thứ hai!');
// //       break;
// //    case 3:
// //       console.log('Hôm nay là thứ ba!');
// //       break;
// //    case 4:
// //       console.log('Hôm nay là thứ tư!');
// //       break;
// //    case 5:
// //       console.log('Hôm nay là thứ năm!');
// //       break;
// //    case 6:
// //       console.log('Hôm nay là thứ sáu!');
// //       break;
// //    case 7:
// //       console.log('Hôm nay là thứ bảy!');
// //       break;
// //    case 1:
// //       console.log('Hôm nay là thứ chủ nhật!');
// //       break;
// //    default:
// //       console.log('Không hợp lệ!')
// // }

// var course = {
//    name: 'Javscript',
//    coin: 250,
// };

// // if(course.coin > 0){
// //    console.log(`${course.coin} Coins`);
// // }else{
// //    console.log('Miễn Phí');
// // }

// // var result = course.coin > 0 ? console.log(`${course.coin} Coins`) : console.log('Miễn Phí');

// // var a = 1;
// // var b = 2;

// // var c = a > b ? a : b;
// // console.log(c);

// // var a = 4.2;
// // function run(a) {
// //   a.isInteger == true ? a : Math.floor(a)
// //   return a;
// // }

// // console.log(a);

// //vong lap for


// // var a = Math.PI;
// // console.log(a);

// for(var i = 1; i <= 1000; i++){
//    // console.log(i);
// }


// var myArray = [
//    1,
//    3,
//    3,
//    3,
//    '2'
// ];

// var arrayLength = myArray.length;

// for(var i = 0; i < arrayLength; i++){
//    // console.log(myArray[i]);
// }

// // vong for/in

// // var myInfo = {
// //    name: 'Luong',
// //    age: 18,
// //    [emailKey]: '@gmail.com',
// //    getName: function(){
// //       return this.name;
// //    }
// // };


// // // var myName = 'Luong';

// // for(var key in myInfo){
// //    console.log(myInfo[key]);
// // }

// // vong for/of

// // for(var value of Object.values(myInfo)){
// //    console.log(value);
// // }

// //vong while

// // var i = 0;

// // while (i< arrayLength){
   
// //    console.log(myArray[i]);
// //    i++;
// // }

// //vong do/while

// // var i  = 0;

// // var isSuccess = false;



// // do {

// //    i++

// //    // console.log('Nap the lan ' + i);

// //    //thanh cong
// //    if(false){
// //       isSuccess = false;
// //    }

// // }while (!isSuccess && i <= 3);

// //de quy

// // function countDow(num){
// //    if(num > 0){
// //       console.log(num);
// //       return countDow(num - 1);
// //    }
// //    return num;
// // }

// // countDow(3);

// // function loop(start, end, cb){
// //    if( start < end){
// //       cb(start);
// //       return loop(start + 1, end, cb);
// //    }
// // }


// // loop(0, myArray.length, function(index){
// //    console.log(index);
// // });

// // var a = 3;
// // var gt = 1;
// // for(var i = 1; i <= a; i++){
// //     gt = gt * i;
// // }
// // console.log(gt);


// // function gThua(num){
// //    if(num > 0){
      
// //       return num * gThua(num - 1);
// //    } 
// //    return 1;


// // }

// // console.log( gThua(2));

// // phuong thuc array

// var courses = [
//    {
//       id: 1,
//       name: 'Javascript',
//       coin: 26
//    },
//    {
//       id: 2,
//       name: 'HTML/CSS',
//       coin: 3
//    },
//    {
//       id: 3,
//       name: 'Ruby',
//       coin: 100
//    },
//    {
//       id: 4,
//       name: 'Ruby',
//       coin: 2000
//    },
// ]
// var a = courses.reduce(function(accumulator, course){
//    return accumulator + course.coin;
//    // console.log(accumulator);
// }, 0);

// // console.log(a);






// //Map2

// Array.prototype.map2 = function(callback){
//    var output = [];
//    for(var i = 0; i < this.length; i ++){
//      var result =  callback(i, this[i]);
//      output.push(result);
//    }
//    return output;
// }

// var html = courses.map2(function(index, course){
//    return {
//       id: `id = ${course.id}`
//    };
// });

// // console.log(html);

   





// // forEach() : duyệt qua từng phần tử trong array

// Array.prototype.forEach2 = function(callback){
//    for(var index in this){
//       if(this.hasOwnProperty(index)){
//          callback(this[index], index, this);
//       }
//    }
// }

// courses.forEach2(function(course, index, arrayNew){
//    // console.log(arrayNew);
// });

// // duyệt qua từng phần tử trong array trả về array và vị trí phần tử array
// //every() : kiểm tra tất cả phân tử trong mảng phải thỏa mãn 1 điều kiện nào đó
//          // tất cả phần tử trong mảng phải đều thỏa mãn thì trả về true

// Array.prototype.every2 = function(callback){
//    for (var index in this){
//       if(this.hasOwnProperty(index)){
//          var result =  callback(this[index], index, this);
//          if(!result){
//             return false;
            
//          }
//       }
//    }
//    return true;
// }

// var isFree2 = courses.every(function(course, index){
//       return course.coin == 1;
// } );

// // console.log(isFree2);

// //  

// //some(): kiểm tra tất cả phân tử trong mảng phải thỏa mãn 1 điều kiện nào đó
//          // chỉ một phần tử  trong mảng thỏa mãn thì trả về true

//          Array.prototype.some2 = function(callback){
//            for(var index in this){
//                if(this.hasOwnProperty(index)){
//                   var result =  callback(this[index], index, this);
//                   if(result){
//                      return true;
                     
//                   }
//                }
//            }
//             return false;
//          }      

// var isFree = courses.some2(function(course, index){
//       // console.log(index);
//       return course.coin === 1;
// });

// // console.log(isFree);


// //find(): tìm kiểm phẩn tử gán ra biết tạo nếu thỏa mãn điệu kiện trả về 1 pt thỏa mãn 

// Array.prototype.find2 = function(callback){

//    var arrayLength = this.length;
//    for(var i = 0; i < arrayLength; i++){
//       if(callback(this[i], i) === true){
//          return this[i];
//       }
//    }
//    return undefined;
// }


// var  course = courses.find2(function(course, index){
//    // console.log(index);
//    return course.name === 'Ruby';
  
// });

// // console.log(course);

// //filter(): tìm kiểm phẩn tử gán ra biết tạo nếu thỏa mãn điệu kiện trả về nhiều pt thỏa mãn

// Array.prototype.filter2 = function(callback){
//    let output = [];
//    for(var index in this){
//       if(this.hasOwnProperty(index)){
//         var result = callback(this[index], index, this);
//          if(result){
//             output.push(this[index])
//          }
//       }
//    }
//    return output;
// }

// var  course = courses.filter2(function(course, index){
//    // console.log(index);
//    return course.name === 'Ruby';
// });

// // console.log(course);


// //map(): 



// // var newCourses = courses.map(function(course){
// //       return {
// //          id : course.id,
// //          name: `Khóa học ${course.name}`,
// //          coin: course.coin,
// //          coinText: `Giá ${course.coin}`
// //       }
// // })

// var newCourses = courses.map(function(course){
//    return course.id *3;
// })

// // console.log(newCourses);

// //reduce() :  

// Array.prototype.reduce2 = function(callback, result){
//    let i = 0;
//    if(arguments.length < 2){
//       i = 1;
//       result = this[0];
//    }
//    for(; i < this.length; i++){
//        result = callback(result,this[i], i,this);
//       //  console.log(result);
//    }
//    return result;
// }


// function coinHandler(accumulator, currentValue){
//    return accumulator + currentValue.coin;
// }
// // console.log(12);

//  var a = courses.reduce(coinHandler, 0);

// // console.log(a);



// var b = [
//    1,
//    2,
//    3, 
//    4,
//    5,
// ];

// var sum = b.reduce(function(sumArray, course){
//    //return sumArray + course;
// }, 0);

// //console.log(sum);

// for(a of b){
//    if(typeof a === 'string'  && !isNaN(a)){
//       // console.log(a);
//    }
// }


//  //bt


//  var array = [1, 2, [3,4], 5, 6, [7,8], 9];

//  var newArray = array.reduce(function(falatO , item){
    
//       return falatO.concat(item);
//  }, []);
//  //.log(newArray);
//  sum = newArray.reduce(function(a,b){
//     return a + b;
//  }, 0);
//  //console.log(sum);



// var topics = [
//    {
//       topic: "Front-end",
//       courses: [
//          {
//             id: 1,
//             title: 'Html/css'
//          },{
//             id: 2,
//             title: 'Js'
//          }
//       ]
//    },
//    {
//       topic: "Back-end",
//       courses: [
//          {
//             id: 1,
//             title: 'PHP'
//          },{

//             id: 2,
//             title: 'No'
//          }
//       ]
//    }
// ]
                                                            
// var listCourses = topics.reduce(function(course, newItem){
//    return course.concat(newItem.courses);
// }, []);


// // console.log(listCourses);

// Array.prototype.reduce2 = function(callback, result){

//    let i = 0;

//    if(arguments.length < 2){
//       i = 1
//       result = this[0]
//    }
//    for(; i < this.length; i++){
//      result = callback(result, this[i], i, this);
     
//    }
//    return result;
// }

// var numbers = [1, 2, 3, 4, 5];

// var sum = numbers.reduce2((sumA, item) => {
//    return sumA + item;
// }, 10)

// // console.log(sum);

// //includes(): tìm kiếm các phần tử chỉ áp dụng với mảng và string

// // var fullName = 'Doan Hong Luong';

// // console.log(fullName.includes('Luong'));

// var info = [
//    'luong',
//    18,
//    'co ny'
// ];

// // console.log(info.includes(18));

// //Math


// /*
// - Math.PI: in ra số PI
// - Math.round(): làm tròn số
// - Math.abs(): giá trị tuyệt đối
// - Math.ceil(): chỉ làm tròn trên
// - Math.floor(): chỉ làm tròn dưới
// - Math.random(): in ra bất kì
// - Math.min(): in ra số nhỏ nhất
// - Math.max(): in ra số lớn nhất
// */

// var randum = (Math.floor(Math.random() * 100));

// var bonus = [
//    '10 coin',
//    '20 coin',
//    '30 coin',
//    '40 coin',
//    '50 coin'
// ];

// // console.log(bonus[randum]);

// // if (randum < 5){
// //    console.log('Cương hóa thành công');
// // }

// //callback

// function myFunction(param){
//    if(typeof param == 'function'){
//       // param('1');
//    }
    
// }

// function myCallBack(number){
//    // console.log('number: ', number);
// }

// myFunction(myCallBack);

// // bt

// Array.prototype.map2 = function(callbackk){

//    var output = [];
//    for(var i = 0; i < this.length; ++i){
//       var result = callbackk(this[i], i);
//       output.push(result);
//    }
//    return output;
// }

// var myInfo = [
//    'Luong',
//       18,
//    'Font-end'
// ];

// var newInfo = myInfo.map2(function(item, index){
//    return `<h2> ${item} </h2>`
// });

// // console.log(newInfo);
// // var newInfo = myInfo.map(function(item, index){
// //    return index, item;
// // });

// // console.log(newInfo);



// var tests = [
//    {
//       topic: "Front-end",
//       courses: [
//          {
//             id: 1,
//             title: 'Html/css'
//          },{
//             id: 2,
//             title: 'Js'
//          }
//       ]
//    },
//    {
//       topic: "Back-end",
//       courses: [
//          {
//             id: 1,
//             title: 'PHP'
//          },{

//             id: 2,
//             title: 'No'
//          }
//       ]
//    }
// ]

// for(var value of tests){
//    for(var i of value.courses){
//       // console.log(i.id);
//    }
// }

// var watchList = [
//    {
//      "Title": "Inception",
//      "Year": "2010",
//      "Rated": "PG-13",
//      "Released": "16 Jul 2010",
//      "Runtime": "148 min",
//      "Genre": "Action, Adventure, Crime",
//      "Director": "Christopher Nolan",
//      "Writer": "Christopher Nolan",
//      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//      "Language": "English, Japanese, French",
//      "Country": "USA, UK",
//      "imdbRating": "8.8",
//      "imdbVotes": "1,446,708",
//      "imdbID": "tt1375666",
//      "Type": "movie",
//    },
//    {
//      "Title": "Interstellar",
//      "Year": "2014",
//      "Rated": "PG-13",
//      "Released": "07 Nov 2014",
//      "Runtime": "169 min",
//      "Genre": "Adventure, Drama, Sci-Fi",
//      "Director": "Christopher Nolan",
//      "Writer": "Jonathan Nolan, Christopher Nolan",
//      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//      "Language": "English",
//      "Country": "USA, UK",
//      "imdbRating": "8.6",
//      "imdbVotes": "910,366",
//      "imdbID": "tt0816692",
//      "Type": "movie",
//    },
//    {
//      "Title": "The Dark Knight",
//      "Year": "2008",
//      "Rated": "PG-13",
//      "Released": "18 Jul 2008",
//      "Runtime": "152 min",
//      "Genre": "Action, Adventure, Crime",
//      "Director": "Christopher Nolan",
//      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//      "Language": "English, Mandarin",
//      "Country": "USA, UK",
//      "imdbRating": "9.0",
//      "imdbVotes": "1,652,832",
//      "imdbID": "tt0468569",
//      "Type": "movie",
//    },
//    {
//      "Title": "Batman Begins",
//      "Year": "2005",
//      "Rated": "PG-13",
//      "Released": "15 Jun 2005",
//      "Runtime": "140 min",
//      "Genre": "Action, Adventure",
//      "Director": "Christopher Nolan",
//      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//      "Language": "English, Urdu, Mandarin",
//      "Country": "USA, UK",
//      "imdbRating": "8.3",
//      "imdbVotes": "972,584",
//      "imdbID": "tt0372784",
//      "Type": "movie",
//    },
//    {
//      "Title": "Avatar",
//      "Year": "2009",
//      "Rated": "PG-13",
//      "Released": "18 Dec 2009",
//      "Runtime": "162 min",
//      "Genre": "Action, Adventure, Fantasy",
//      "Director": "James Cameron",
//      "Writer": "James Cameron",
//      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//      "Language": "English, Spanish",
//      "Country": "USA, UK",
//      "imdbRating": "7.9",
//      "imdbVotes": "876,575",
//      "imdbID": "tt0499549",
//      "Type": "movie",
//    }
//  ];
 
// var a =  watchList.filter(function(watchItem){
//    return watchItem.Director;
//  });
 


//   var b = a.reduce(function(luuTru, phantu){
//        return luuTru +=  Number(phantu.imdbRating);

       
// }, 0);

// var tong = b / (a.length);
 
// // console.log(tong);

//  var numbers = [1, 2, 3, 4, 5];
 
//  Array.prototype.reduce3 = function(callback, result){
//    var i = 0;
//    if(arguments.length < 2){
//       i = 1;
//       result = this[0];
//    }
//    for(; i < this.length; i++){
//          result = callback(result, this[i], i, this);
//    }
//    return result;
//  }

// var total = numbers.reduce3(function(luuTru, number){
//       return luuTru + number;
// },10);

// // console.log(total);


// Array.prototype.map3 = function(callback){

//    var output = [];
//    for(var i = 0; i < this.length; i++){  
//       var result =  callback(this[i], i, this);

//        output.push(result);
//    }

//    return output;

   

// }

// var kq = numbers.map3(function(course, index, originArray){
//    return `ab ${originArray}`;

// });

// // console.log(kq);


// // Array.prototype.filter3 = function(callback){
// //    let output = [];
// //    for(var index in this){
// //       if(this.hasOwnProperty(index)){
// //          var result = callback(this[index], index, this);
// //          if(result){
// //             output.push(this[index]);
// //          }
// //       }
      
// //    }

// //    return output;
// // }

// // var a = watchList.filter3(function(course){

// //    return Number(course.imdbRating) == 7.9;
// // });

// // console.log(a);





 
 
 
 


