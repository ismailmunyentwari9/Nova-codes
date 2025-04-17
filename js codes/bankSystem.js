class bankAccount {
    constructor(name,n_id,contacts){
       this.name=name;
       this.n_id=n_id;
       this.contacts=contacts;
       this.balance=500;
       this.loan=0;

    }
    // .......Deposing cash...........
    deposeCash(cashToDepose){
     if(cashToDepose<=0){
        console.log(`Hey ${this.name},add more cash to be able to depose on your acount, Have good day 😊`);
     }
     else{
        this.balance=this.balance+cashToDepose;
        console.log(`Hey ${this.name}, Now your bank Account balance is ${this.balance} after deposing ${cashToDepose} successfuly, Have good day 😊`);
     }
    }
    // ......WithDrowing Cash ........
    withDrowCash(cashToWithDrow){
         if(cashToWithDrow>this.balance){
            console.log(`Hey ${this.name},You're trying to to withdrow ${cashToWithDrow}, But remember you only have ${this.balance} on your Bank Account, Have good day.. 😊`);
         }
         else{
            this.balance=this.balance-cashToWithDrow;
            console.log(`Hey ${this.name},You have successfuly withdrown ${cashToWithDrow}, now your new Balance is ${this.balance}, Have good day 😊`);
         }
    
        
    }
    // ..........CheckBalance........
    checkBalance(){
        console.log(`Hey ${this.name}, Your Account Balance is ${this.balance}`)
    }
//  ..............requesting for Loan.........
    loanCash(loan){
        if(this.loan!=0){
            console.log(`Hey ${this.name},You're trying to request for a loan of ${loan}, But remember you have have aloan of  ${this.loan} on your Bank Account, Have good day.. 😊`);
       
        }
        else{
            this.loan=this.loan+loan;
            this.balance=this.balance+this.loan;
            console.log(`Hey ${this.name}, Now your Loan balance is ${this.loan} after requesting for a loan of ${loan} successfuly, please remember to pay back your loan before 30 Days.. , Have good day 😊`);
            
        }
    }
}

// .......creating Users...........
const client1= new bankAccount('Joseph','11 234 556 666 66','+250 7856 333');

const client2= new bankAccount('John','11 234 556 666 66','+250 7846 883');

const client3= new bankAccount('Ntwali','11 234 556 666 66','+250 7846 883');


// client1.checkBalance();
// client1.deposeCash(5000000);
// client1.withDrowCash(1000500);

client1.checkBalance();
client1.loanCash(1000000);
client1.checkBalance();
client1.loanCash(1);
