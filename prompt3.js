let address;

document.getElementById("addressButton").onclick = function(){
    address = document.getElementById("address").value;
    console.log(address);
    let result3 = address.includes("2298williamsavenue");
    if(result3){
        console.log("ACCESS GRANTED");
        window.location.href = "CONVERGENCE.html"
    }
    else{
        console.log("ONHRIO CONVERGENCE FAILURE.");
    }
}