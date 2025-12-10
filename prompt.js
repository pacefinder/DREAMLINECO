console.log(`Hello`);

let city;

document.getElementById("cityButton").onclick = function(){
    city = document.getElementById("city").value;
    console.log(city);
    let result = city.includes("sillwood");
    if(result){
        console.log("ACCESS GRANTED");
        window.location.href = "prompt2.html"
    }
    else{
        console.log("ONHRIO CONVERGENCE FAILURE.");
    }
}



