let firstName = 'Keshav',lastName = 'Raj'; 
function abc(){
    getFullName = () => firstName + " " + lastName;
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
}
abc()