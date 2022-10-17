function personAndTeacher(){

    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject;
        }
    }
    
    
     return {
             Person,
             Teacher
         }
    }
        
let result = personAndTeacher();       
let person = new result.Person("Atanas" , "atanas@xerox.com")
console.log(person.name)
let person2 = new result.Teacher ("Sana" , "sana@xerox.com" , "sexy")
console.log(person2.name)
