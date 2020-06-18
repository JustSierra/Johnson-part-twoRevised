var vacationType = prompt("Hi There! What kind of trip would you be interested in? musical, tropical, or adventurous?");
var groupSize = prompt("Good choice. How many people in your group all together?");
let travel = "";
let destination = "";


if (vacationType === "musical") 
{
  destination = "Party time in New Orleans!";
} 
else if (vacationType === "tropical") 
{
    destination = "Fun Beach Vacation in Mexico!";
} 
else 
{
  destination = "White Water Rafting in the Grand Canyon!";
}

if (groupSize <= 2) 
{
    travelby = "First Class";
} 
else if (groupSize >= 3 && groupSize <= 5) 
{
    travelby = "Helicopter";
} 
else if (groupSize >= 6) 
{
    travelby = "Charter Flight";
}


var result = "Based on your choice for a " + vacationType + " vacation , I would recommend the " + destination + ". Based on your group size of " + groupSize + " people, I'd recommend you travel by" + travelby + ".";


console.log(result)
