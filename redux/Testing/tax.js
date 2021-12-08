function taxCal(amount){
    
if(amount>=1000000){
    tax = (amount)*20/100;
}

if(amount>=500000 && amount<1000000){
    tax = (amount)*30/100;
}

if(amount>=250000 && amount<500000){
    tax = (amount)*10/100;
}

return tax;

}

taxCal(252500);
module.exports = taxCal;

