//let num = "Mark";
//console.log(num);
//document.getElementById("hContent").innerHTML=num;
//let mark = 70;
let mark = prompt("Please enter your mark: ");
if(mark>=80 && mark<=100)
{ 
    console.log("Grade A");
    atert(mark + " = Grade A");
    document.getElementById("hContent").innerHTML="Grade A";
}
else if(mark>=70 && mark<80)
{
    console.log("Grade B");
    atert(mark + " = Grade B");
    document.getElementById("hContent").innerHTML="Grade B";
}
else if(mark>=60 && mark<70)
{
    console.log("Grade C");
    atert(mark + " = Grade C");
    document.getElementById("hContent").innerHTML="Grade B";
}
else if(mark>=50 && mark<60)
{
    console.log("Grade D");
    atert(mark + " = Grade D");
    document.getElementById("hContent").innerHTML="Grade B";
}
else if(mark>=0 && mark<50)
{
    console.log("Grade F");
    atert(mark + " = Grade F");
    document.getElementById("hContent").innerHTML="Grade B";
}
else{
    console.log("END");
    atert(mark + " = error");
    document.getElementById("hContent2").innerHTML="ERROR";
}

