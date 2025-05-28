const formContainer = document.getElementsByClassName("container")[0]
const btn = document.getElementById("btn");
const countdownContainer = document.getElementById("countdown-container");
const greeting = document.getElementById("greeting");
const countdownBoxes = document.getElementById("countdown-boxes");
const message = document.getElementById("message")
const daysEl=document.getElementById("days")
const hoursEl=document.getElementById("hours")
const minutesEl=document.getElementById("minutes")
const secondEl=document.getElementById("second")
const resetBtn = document.getElementById("btn-1")
// making a funtion


let countDown =()=>{
    const userName = document.getElementById("username").value.trim();
const dobInput= document.getElementById("userbirthdate").value;
     const nameRegex = /^[a-zA-Z\s]+$/;
    
    if(!userName || !dobInput) {
        alert("Please enter both name and date of birth.");
        return;
    }

    const dob = new Date(dobInput)
    const today = new Date();
    if(dob.getDate()===today.getDate() && dob.getMonth()===today.getMonth()) {
        formContainer.style.display = "none";
        countdownContainer.style.display="flex";
        greeting.innerText = `Happy Birthday ${userName} allah ap ke umer me barkat ata farmaye`
        countdownBoxes.style.display= "none";
        return;
    }

    let nextBirthday = new Date(today.getFullYear(),dob.getMonth(),dob.getDate());
    if(nextBirthday<today) {
        nextBirthday.setFullYear(today.getFullYear()+1)
    }
    formContainer.style.display="none";
    countdownContainer.style.display="flex";
    greeting.innerText=`hi ${userName} Your birthday is  in`

    const timer = setInterval(()=>{
        const now= new Date();
        const diff = nextBirthday-now;

        if(diff<0) {
            clearInterval(timer);
            greeting.innerText = `happy Birthday ${userName} allah ap ko kush rake!`
        } else {
            const days = Math.floor(diff/(1000*60*60*24))
            const hours = Math.floor((diff/(1000*60*60))%24)
            const minutes= Math.floor((diff/(1000*60)%60))
            const second = Math.floor((diff/(1000)%60)) 
            
            daysEl.innerText=days;
            hoursEl.innerText=hours;
            minutesEl.innerText=minutes;
            secondEl.innerText=second
        }

        message.innerText=`birthdate of ${userName} is: ${dobInput}`
    },1000)
}
btn.addEventListener("click",countDown)

resetBtn.addEventListener("click",()=>{
    formContainer.style.display="flex";
    countdownContainer.style.display="none"
    const userNameInput = document.getElementById("username");
  const dobInput = document.getElementById("userbirthdate");

    userNameInput.value="";
    dobInput.value="";
    daysEl.innerText = "0";
  hoursEl.innerText = "0";
  minutesEl.innerText = "0";
  secondEl.innerText = "0";
    greeting.innerText="";
    message.innerText="";
    countdownBoxes.style.display="flex"
})