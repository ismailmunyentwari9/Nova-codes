// .........creating variables ........

// const name ='John';
// let age=12;
// const location='Kigali';
// console.log(name);
// console.log(age);
// age =age+1;
// console.log(`the age now of john ${age}`);

// .........creating Arrays ........

// const names =
// [
//     ['james','john','peter'],
//     [12,45,78]

// ];
// console.log(names[1][0]);


// .........Object.........
// const student1 ={
//     name:'Peter',
//     age:12,
//     location:'Kigali',
//     grade:'Grade 12'

// }
// const student2 ={
//     name:'John',
//     age:15,
//     location:'Kigali',
//     grade:'Grade 12'

// }
// const student3 ={
//     name:'JANATE',
//     age:12,
//     location:'Kigali',
//     grade:'Grade 12',
//     Vote(){
//        if(this.age<18){
//         console.log(`Hey ${this.name} Not Allowed to vote with your ${this.age} years old`)
//        }
//        else{
//         console.log(`Hey ${this.name} you are  Allowed to vote with your ${this.age} years old`)
//        }
//     }

// }
// student3.Vote();


// ........OOP........................
class students{
    constructor(name,age,grade,location){

     this.name=name;
     this.age=age;
     this.grade=grade;
     this.location=location
    }
    vote(){
        if(this.age<18){
            console.log(`Hey ${this.name},you are Minor`);
        }
        else{
            console.log(`Hey ${this.name},You are Adult...`)
        }
    }
}
const student1 = new students('John',12,'Grdae2','Kigali');
const student2 = new students('Peter',45,'Grdae2','Nyanza');
const student3 = new students('Paul',67,'Grdae12','Huye');
const student4 = new students('Annet',87,'Grdae1','Musanze');
student1.vote();
student2.vote();
student3.vote();
