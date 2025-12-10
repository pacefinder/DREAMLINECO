let neighborhood;

document.getElementById("neighborhoodButton").onclick = function(){
    neighborhood = document.getElementById("neighborhood").value;
    console.log(neighborhood);
    let result2 = neighborhood.includes("redwoodhills");
    if(result2){
        console.log("ACCESS GRANTED");
        window.location.href = "prompt3.html"
    }
    else{
        console.log("ONHRIO CONVERGENCE FAILURE.");
    }
}