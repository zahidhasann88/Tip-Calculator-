var jahid = {
    fullName: 'Jahid Hasan',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
      this.tips = [];
      this.finalValues = [];
      
      for(var i = 0; i < this.bills.length; i++){
        
        //Determine percentage based on tipping rules 
        
        var percentage;
        var bill = this.bills[i];
        
        if (bill < 50) {
          percentage = .2;
          
        }else if (bill >= 50 && bill < 200) {
          percentage = .15;
        }else{
          percentage = .1;
        }
        //Add results to the corresponinig arrays
        
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
        
      }
    }
  }
   //Part 2: 
     
  var anika = {
    fullName: 'Anika Tasnim',
    bills: [77, 475, 177, 45],
    calcTips: function() {
      this.tips = [];
      this.finalValues = [];
      
      for(var i = 0; i < this.bills.length; i++){
        
        //Determine percentage based on tipping rules 
        
        var percentage;
        var bill = this.bills[i];
        
        if (bill < 100) {
          percentage = .2;
          
        }else if (bill >= 100 && bill < 300) {
          percentage = .15;
        }else{
          percentage = .25;
        }
        //Add results to the corresponinig arrays
        
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
}
}
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

//Do the Calculation 
  
  jahid.calcTips();
  anika.calcTips();
  
  jahid.average = calcAverage(jahid.tips);
  anika.average = calcAverage(anika.tips);
  console.log(jahid, anika);
  
if (jahid.average > anika.average) {
  console.log(jahid.fullName + '\'s family pays higher tips, with an average of $' + jahid.average);
  
}else if (anika.average > jahid.average) {
  console.log(anika.fullName + '\'s family pays higher tips, with an average of $' + anika.average);
}
    
