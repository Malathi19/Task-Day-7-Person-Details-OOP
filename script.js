class person {
    constructor(fName,lName,email,ph){
        this.fName = fName
        this.lName = lName
        this.email = email
        this.ph = ph
    }

    getPersonDetails(){
        return (`Name:${this.fName} ${this.lName}, Email:${this.email}, PH Number:${this.ph} `)
    }
}

let person1 = new person ("Jane","Doe","JD@guvi.com",9968524311);
let person2 = new person ("Harry","Potter","HP@guvi.com",9968524322);
let person3 = new person ("James","Cameron","JC@guvi.com",9968524333);
console.log (person1.getPersonDetails());
console.log (person2.getPersonDetails());
console.log (person3.getPersonDetails());

