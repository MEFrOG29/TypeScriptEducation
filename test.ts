// === ТИПЫ ДАНННЫХ === //
//Примитивы(Int, String, Boolean, BigInt, Undefind, Null, Symbol)
//Union/Intersaction ( A|B , A&B)
//Специальные типы (any, unknown, never, void)
//Составные типы (Объекты, массивы, interface, type)
//Литералы(Строковые, числовые, булевы, шаблонные строковые, составные)

// let sum  = 1+1  //sum: number
// console.log(sum)

// let anything = 'any' + 'thing'
// console.log(anything);

// let data: number | string; //тип данных обьединение (union). Переменная data может быть 
// data = 5;                  //как number так и string
// data = "str";

// type MainInfo = {
//     firstName: string,
//     lastName: string
// };

// type AdditionalInfo = {
//     age: number
// };

// type FullInfo = MainInfo | AdditionalInfo;  //union обьектов

// const info1: FullInfo = {   //содержит в себе поля обьекта MainInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy"
// };

// const info2: FullInfo = {   //содержит в себе поле обьекта AdditionalInfo
//     age: 18
// };

// const info0: FullInfo = {   //содержит в себе поля обьектов MainInfo и AdditionalInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy",
//     age: 18
// };

// type FullInfo2 = MainInfo & AdditionalInfo;  //тип данных пересечения (intersection).

// const info3: FullInfo2 = {   //содержит в себе поля обьектов MainInfo и AdditionalInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy",
//     age: 18
// };

// type SuperType = {    //Надтип. (Что-то типа родительского класса в C#)
//     name: string
// };

// type SubType = {     //Подтип. (Что-то типа дочернего класса в C#)
//     name: string,
//     age:number
// };

// const SubType: SubType = {name: "Vadim", age:18}; 
// const SuperType: SuperType = SubType;   //Так можно.

// console.log(SuperType);

// const SuperType2: SuperType = {name: "Vadim"};
//const SubType2: SubType = SuperType;  //Так нельзя.

// let value: any;  //тип данных any - все типы. Является и надтипом и подтипом одновременно
// value = 5;
// value = "qwerty";
// value = true;
// value = NaN;
// value = null;

// function logData(data: unknown){  // Тип данных unknown - все типы, но без проверки на тип будет ошибка. Может быть надтипом для всех типов, но не может быть подтипом(кроме самого себя и any)
//     let value: string;
//     if(typeof(data) === 'string')
//         value = data;
// }

// let value: never;   // Тип данных never является подтипом для всех типов, но нельзя его привести явно. Не может быть надтипом
// let value2: string = value;

// enum Values {
//     FIRST,
//     SECOND
// }

// function fn(value:Values){
//     switch(value){
//         case Values.FIRST:
//             return 1;
//         case Values.SECOND:
//             return 2;
//         default:
//             const check:never = value;  //используем тип never для проверки на наличие других вариантов
//             return value;
//     }
// }

// fn(Values.FIRST);
// fn(Values.SECOND);

// function fh() {   //тип данных void - ничего не возвращает
//     console.log();
// }

interface Address {   //Составные типы могут иметь в себе что угодно. Даже другие составные типы   
    city?: string,
    street?: string,
    coords: number[],
}

type User = {
    name: string,
    age?: number,
    address: Address
}

const user: User = {
    address: {
        coords: [5, 5],
    },
    name: "vadim"
}

type Color = 'red' | 'green' | 'blue';  //строковый литерал - можно будет использовать только red greeen или blue
const color: Color = "blue"
type Number =  1 | 14 | 36; //числовой литерал
type Anything = 'uhdja' | 12 | true; //составной литерал
type Boolean = true //булевый литерал