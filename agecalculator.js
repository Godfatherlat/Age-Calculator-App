let userInput=document.getElementById("date");
userInput.max= new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate=new Date(userInput.value);
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();
    console.log(d1);
    console.log(m1);
    console.log(y1);

    let today= new Date();
    console.log(today);
    console.log(today.getDay()+1);
    
    console.log(today.getMonth()+1);
}