var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given")
var buttonCheck = document.querySelector("#btn-check")
var message = document.querySelector("#error-message")
var noofNotes = document.querySelectorAll(".no-of-notes")


var notes = [2000,500,100,20,10,5,1]


function validateBillandCashAmount(){
    hideMessage()
    if(billAmount.value == "" || cashGiven.value == ""){
        errorMessage("Please Enter the data.")
    }
    else if(Number(cashGiven.value) <= 0){
        errorMessage("Please enter correct cash amount.")
    }
    else{
        if (Number(billAmount.value) > 0){
            if(Number(cashGiven.value) >= Number(billAmount.value)){
                var amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
                calculateNotes(amountToBeReturned)
            }
            else{
                errorMessage("Do you wanna wash plates?")
            }
        }
        else{
            errorMessage("Invalid Amount")
        }
    }
    
}

function calculateNotes(amount){
    
    for(var i = 0; i < notes.length; i++){
        var notestobeReturned = Math.trunc(amount/notes[i])
        amount = amount % notes[i]
        noofNotes[i].innerText = notestobeReturned
    }
}

function hideMessage(){
    message.style.display = "none";
}

function errorMessage(msg){
    message.style.display = "block";
    message.innerText = msg
}


buttonCheck.addEventListener("click", validateBillandCashAmount)