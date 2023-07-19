
const GreatestCommonDivisor =(num1,num2)=>{
      
        if (num2 > num1) {
          [num1, num2] = [num2, num1];
        }
      
        for (let divider = num2; divider > 0; divider--) {
          if (num1 % divider === 0 && num2 % divider === 0) {
            return divider;
          }
        }
      
        return 1; 
      }
    
      

console.log(GreatestCommonDivisor(8,16));