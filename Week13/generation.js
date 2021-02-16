function myGeneration(){
    let gen = prompt("Please Enter value of generation: ");
    if(gen>=2540 && gen<2564)
    {
       if(gen>=2553 && gen<2564){
        alert(gen + " = Gen Alpha");
        console.log("Gen Alpha");
        document.getElementById("hContent").innerHTML=gen + " = Gen Alpha"
    }
       else(gen>=2540 && gen<2553){
        alert(gen + " = Gen Z");
        console.log("Gen Z");
        document.getElementById("hContent").innerHTML=gen + " = Gen Z"
    }
}
       else(gen>=2523 && gen<2540){
        alert(gen + " = Gen Y");
        console.log(" Gen Y ");
        document.getElementById("hContent").innerHTML=gen + " = Gen Y"
    }
}
       else(gen>=2523 && gen<2540){
        alert(gen + " = Gen Y");
        console.log(" Gen Y ");
        document.getElementById("hContent").innerHTML=gen + " = Gen Y"
    }
}
       else(gen>=2508 && gen<2522){
        alert(gen + " = Gen X");
        console.log(" Gen X ");
        document.getElementById("hContent").innerHTML=gen + " = Gen X"
    }
}
       else(gen>=2489 && gen<2507){
        alert(gen + " = Gen Baby Boomer");
        console.log(" Gen Baby Boomer ");
        document.getElementById("hContent").innerHTML=gen + " = Gen Baby Boomer"
    }
}
       else(gen>=2468 && gen<2488){
        alert(gen + " = Gen Silent Generation");
        console.log(" Gen Silent Generation ");
        document.getElementById("hContent").innerHTML=gen + " = Gen Silent Generation"
    }
}
       else(gen>=2444 && gen<2467){
        alert(gen + " = Gen Greatest Generation");
        console.log(" Gen Greatest Generation ");
        document.getElementById("hContent").innerHTML=gen + " = Gen Greatest Generation"
    }
}
else{
    alert(gen + " = ERROR");
    console.log("ERROR");
}