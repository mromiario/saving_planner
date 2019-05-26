function count(){
    var income = document.getElementById("income").value;
    var incomeNumb = Number(income);

    var days = document.getElementById("days").value;

    var residence = document.getElementById("residence").value;
    var residenceNumb = Number(residence);

    var transport = document.getElementById("transport").value;
    var transportNumb = Number(transport);


    var food = document.getElementById("food").value;
    var foodNumb = Number(food);

    var foodC = document.getElementById("foodC").value;

    var tv = document.getElementById("tv").value;
    var tvNumb = Number(tv);    

    var laundry = document.getElementById("laundry").value;
    var laundryNumb = Number(laundry);

    var lyf = document.getElementById("lyf").value;
    var lyfNumb = Number(lyf);

    var other = document.getElementById("other").value;
    var otherNumb = Number(other)




    if(isNaN(incomeNumb) || income === ""){
        alert("Monthly income must be filled by number!");
    } else if((isNaN(days) || days == "" || days<1 || days>7) ){
        alert("Days to work must be filled by a proper number!")
    }
     else if(isNaN(residenceNumb) || residence == ""){
        alert("Residence Costs must be filled by number!")
    } else if(isNaN(transportNumb) || transport == ""){
        alert("Transportation Costs must be filled by number!")
    }else if(isNaN(foodNumb) || food == ""){
        alert("Food Costs must be filled by number!")
    }else if(isNaN(foodC) || foodC == "" || foodC<0 || foodC>10){
        alert("Eat times per day must be filled by a proper number!")
    }else if(isNaN(tvNumb) || tv == ""){
        alert("TV&Internet costs must be filled by number!")
    }else if(isNaN(laundryNumb) || laundry == ""){
        alert("Laundry costs must be filled by number!")
    }else if(isNaN(lyfNumb) || lyf == ""){
        alert("Lifestyle costs must be filled by number!")
    }else if(isNaN(otherNumb) || other == ""){
        alert("Other must be filled by number!")
    } else{
        var transportDay = transportNumb*days*4;
        var foodDay = foodNumb*7*foodC*4;
        var saveMoney = incomeNumb-residenceNumb-transportDay-foodDay-tvNumb-laundryNumb-lyfNumb-otherNumb;
        var additionalNeeds = tvNumb+laundryNumb+lyfNumb+otherNumb;
        var totalMoney = income-saveMoney ;
        var msg = "";
        if(saveMoney<0){
            msg += "Oops! Its seems you have to reconsider your needs."+"\n";
            msg += "Your expense is greater than your income."+"\n"
            msg += "It should not be happpened!"+"\n";
            if(saveMoney+additionalNeeds>0){
                msg += "\n"+"Here is my suggestion :";
                msg += "You can cut your additional needs costs."+"\n";
                msg += "By that, you can save "+(saveMoney+additionalNeeds)+" in a month."
            }
        }else{
            msg += "You can save "+saveMoney+" IDR from your income."+"\n";
            msg += "In a year you can have "+saveMoney*12+" IDR"+"\n";
            msg += "Here the details, in a month you've spent:"+"\n";
            msg += residenceNumb + " IDR for your residence."+"\n";
            msg += transportDay + " IDR for your transportation."+"\n";
            msg += "    "+transportNumb+" IDR in a day x 4 weeks x "+days+" days (days you go to work)"+"\n";
            msg += foodDay + " IDR for your food."+"\n";
            msg += "    "+(foodNumb*foodC)+" IDR in a day x 4 weeks x 7 days (days in a week)"+"\n";
            msg += "and, "+additionalNeeds+" IDR, for your additional needs."+"\n"
            msg += "Total: "+(totalMoney)+"\n";
        
            msg +="By this, you can re-adjust your needs and re-calculate the money you can save in a month!"
        
        }
        alert(msg);

    }
   
}
