/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let i=0;
    let j=digits.length-1;
    let sum;
   while(i<=j){
        sum=digits[j]+1;
   
        if(sum==10){
            
            digits[j]=0;
           if(j==0){
                digits.unshift(1);
                break;
            
            }
          
            else{
              sum=  digits[j-1]+1;
                
            }
    
        }
        else{
            digits[j]=sum;
            break;
       }
       j--;
    }

    return digits ;    
    
};
