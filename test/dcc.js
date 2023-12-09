// class Employee{
//     #fullname;//we need to declare this privagte attribute mandatory others are okay
    
//     static #counter=0;

// Consructor(n){
//     this.#fullname=n;
//    // this.salary=s;
//     Employee.increment();
// }
// static #increment(){
//     {
 
//     }
//    Employee.#counter;
// }
// static get counter(){
//          Employee.#counter;
// }
// get name(){
//     return this.#fullname;
// }
// set name(n){
//     return this.#fullname=n;
// }
// #display(){
//     console.log("Employee")
//  }   
// }
// let emp1 = new Employee("John",120000);
// let emp2 = new Employee("Anna",13344442);
// emp2.salary =20000
// console.log(emp1.namw);
// emp1.name = "John";
// console.log(emp1.name);
// console.log(Employee.getCounter);
// console.log("+++++++++");
// console.log(emp1.getSalry);

            
//       class Manager extends Employee{
//         constructor(n,s,b){
//            super(n,s);
//            this.bonus=b;
//         }
//         display(){
//             super.display();
//             console.log('Manager');
//         }
//            calcSalary(){
//             return super.getSalary() + this.bonus;
//             return this.getSalary()+ this.bonus;
//             return this.salary + this.bonus;
//            }
//       }  
//       let mgr = new Manager("Smith",168000,123444);
//       console.log(Employee.getCounter);
//       console.log(Manager.getCounter);


class Student{
    studentId;
    arr;
    constructor(i,a){
        this.studentId=i;
        this.arr=[];
    }
    addanswer(question){
        this.arr.push(question);
    }
}
    class Question{
       qid;
       id;
       answer;
       constructor(q,d,ans){
          this.answer=ans;
          this.id=d;
          this.qid=q;
       }
       checkanswer(providedanswer){
          return this.answer===providedanswer;
       }
    }
    class Quiz{
         constructor(questions,students){
            this.questions= new Map(questions.map((question)=>[question.d,question.q]));
            this.students=students;
         }

            scoreStudentBySid(sid){
                let student = this.studentId.find(student=> student.studentId === sid);
                let score = 0;
                for(let i=0; i<this.questions.length; i++){
                    if(this.questions[i].checkAnswer(student.answers[i])){
                        score++;
                    }
                }
              return score;
              }
         }
         getaveragescore(){
             let sum =0;
             if(let keyOfMap.answers())
         }

    


