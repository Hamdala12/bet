function predict(){
    let result = Math.floor(Math.random() * 100);
    let validate = document.getElementById("validnumber").value
    let win = ""
    let lost = ""

    if (result==validate){
        win = ` You Win. Your predicted number is ${validate} and the potential number is ${result}`
    }
    else{
        lost = ` You lost. Your predicted number is ${validate} and the potential number is ${result}`
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("lost").innerHTML = lost;
}