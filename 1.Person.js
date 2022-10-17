    function createPerson (firstName,lastName){
           return {
            firstName,
            lastName,
                get fullName(){
                   return this.firstName + ' ' + this.lastName;
                },
                set fullName(value){
                    let parts = value.split(" ")
                    this.firstName = parts[0];
                    this.lastName = parts[1];
                }
            };
        }
 

    let person =  new createPerson("Peter", "Ivanov");
    console.log(person.firstName); //Peter Ivanov
    console.log(person.lastName)
    console.log(person.fullName)
    person.firstName = "Ivan";
    console.log(person.fullName)
    
    
    
