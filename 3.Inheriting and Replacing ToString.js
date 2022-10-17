function personAndTeacher(){

    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
            toString(){
               return `"Person (name: ${this.name}, email: ${this.email})"`
            }
        
    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email)
            this.course = course
        }
        toString(){
            `"Person (name: ${this.name}, email: ${this.email}, course: ${course})"`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject;
        }
        toString(){
            `"Person (name: ${this.name}, email: ${this.email}, subject: ${this.subject})"`
        }
    }

    
    
     return {
             Person,
             Teacher,
             Student

         }
    }
        
let result = personAndTeacher();       
let person = new result.Person("Atanas" , "atanas@xerox.com")
console.log(person.toString())
let person2 = new result.Teacher ("Sana" , "sana@xerox.com" , "sexy")
console.log(person2.name)
