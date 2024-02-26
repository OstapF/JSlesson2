// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let dog = [
//     {
//         id: 1,
//         name: 'archi',
//         breed: 'shi-tsu',
//         age: 2,
//         gender: 'men',
//         dog: true,
//         color: 'white',
//         eyesColor: 'black',
//         collar: true,
//         collarColor: 'red'
//     }
// ]
// console.log(dog[0].id)
// console.log(dog[0].name)
// console.log(dog[0].breed)
// console.log(dog[0].age)
// console.log(dog[0].gender)
// console.log(dog[0].dog)
// console.log(dog[0].color)
// console.log(dog[0].eyesColor)
// console.log(dog[0].collar)
// console.log(dog[0].collarColor)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let a = {
//     title:'one',
//     pageCount: 213,
//     genre:'fantasy'
//
// }
// let b = {
//     title:'two',
//     pageCount: 113,
//     genre:'thriller'
//
// }
// let c = {
//     title:'three',
//     pageCount: 313,
//     genre:'autobiography'
//
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let bookOne = {
//     title:'one',
//     pageCount: 213,
//     genre:'fantasy',
//     authors:[
//         {
//             name: 'ostap',
//             age:22
//         }
//     ]
// }
// let bookTwo = {
//     title:'two',
//     pageCount: 113,
//     genre:'thriller',
//     authors:[
//         {
//             name: 'patrick',
//             age:21
//         }
//     ]
// }
// let bookThree = {
//     title:'three',
//     pageCount: 313,
//     genre:'autobiography',
//     authors:[
//         {
//             name: 'jonh',
//             age:21
//         }
//     ]
//
// }
// console.log(bookOne.authors[0].name)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let user = [
//     {
//         name:'ostap',
//         username:'ostap@gmail.com',
//         password:'12345ostap'
//     },
//     {
//         name:'olga',
//         username:'ostap@gmail.com',
//         password:'12345olga'
//     },
//     {
//         name:'nazar',
//         username:'ostap@gmail.com',
//         password:'12345nazar'
//     },
//     {
//         name:'den',
//         username:'ostap@gmail.com',
//         password:'12345den'
//     },
//     {
//         name:'andriy',
//         username:'andriy@gmail.com',
//         password:'12345andriy'
//     },
//     {
//         name:'diana',
//         username:'diana@gmail.com',
//         password:'12345diana'
//     },
//     {
//         name:'fill',
//         username:'fill@gmail.com',
//         password:'12345fill'
//     },
//     {
//         name:'yarik',
//         username:'yarik@gmail.com',
//         password:'12345yarik'
//     },
//     {
//         name:'oleg',
//         username:'oleg@gmail.com',
//         password:'12345oleg'
//     },
//     {
//         name:'petya',
//         username:'petya@gmail.com',
//         password:'12345petya'
//     }
// ]
// console.log(user[0].password)
// console.log(user[1].password)
// console.log(user[2].password)
// console.log(user[3].password)
// console.log(user[4].password)
// console.log(user[5].password)
// console.log(user[6].password)
// console.log(user[7].password)
// console.log(user[8].password)
// console.log(user[9].password)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt();
// if (x!==0){
//     document.write(`<h1>вірно</h1>`)
// }else{
//     document.write(`<h1>не вірно</h1>`)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time =+prompt()
// if (time>-1&&time<=15){
//     document.write(`<h1>перша</h1>`);
// }else if(time>15&&time<=30){
//     document.write(`<h1>друга</h1>`);
// }
// else if(time>30&&time<=45){
//     document.write(`<h1>третя</h1>`);
// }
// else if(time>45&&time<=59){
//     document.write(`<h1>четверта</h1>`);
// }else if(time>59||time<0){
//     document.write(`<h1>бєлбєрда</h1>`);
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day =+prompt()
// if (day>0&&day<=10){
//     document.write(`<h1>перша декада</h1>`);
// }else if(day>10&&day<=20){
//     document.write(`<h1>друга декада</h1>`);
// }
// else if(day>20&&day<=31){
//     document.write(`<h1>третя декада</h1>`);
// }else if(day>31||day<0){
//     document.write(`<h1>бєлбєрда</h1>`);
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt();
// switch (day) {
//     case 1:
//         document.write(`<h1>Monday</h1>`);
//         break;
//     case 2:
//         document.write(`<h1>Tuesday</h1>`);
//         break;
//     case 3:
//         document.write(`<h1>Wednesday</h1>`);
//         break;
//     case 4:
//         document.write(`<h1>Thursday</h1>`);
//         break;
//     case 5:
//         document.write(`<h1>Friday</h1>`);
//         break;
//     case 6:
//         document.write(`<h1>Saturday</h1>`);
//         break;
//     case 7:
//         document.write(`<h1>Sunday</h1>`);
//         break;
//     default:
//         document.write(`<h1>бєлбєрда</h1>`);
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x=+prompt("Число перше");
// let y=+prompt("Число друге");
//
// if (x===y){
//     document.write(`<h1>Числа рівні</h1>`);
// }else if(x>y){
//     document.write(x);
// }else if(y>x){
//     document.write(y);
// }
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x=+prompt();
if (x||'default'){
    document.write(`<h1>false</h1>`)
}