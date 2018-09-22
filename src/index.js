// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var response = {};
    
    if (currency > 10000) {
        
        response = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        
        return response;
        
    }
    
    else {
    
        var h = Math.floor(currency / 50);
        
        if (h > 0) { response["H"] = h;}
    
        if (currency % 50 != 0) {
        
            var checkQuarters = currency % 50;

            var q =  Math.floor(checkQuarters / 25);
            
            if (q > 0) { response["Q"] = q;}
        
            if (checkQuarters % 25 != 0) {
            
                var checkDimes = checkQuarters % 25;
            
                var d = Math.floor(checkDimes / 10);
                
                if (d > 0) { response["D"] = d;}
            
                if (checkDimes % 10 != 0) {
                
                    var checkNickels = checkDimes % 10;
                
                    var n = Math.floor(checkNickels / 5);
                    
                    if (n > 0) { response["N"] = n;}
                
                    if (checkNickels % 5 != 0) {
                    
                        var p = checkNickels % 5;
                        
                        if (p > 0) { response["P"] = p;}
                    
                }
              
            }
            
        }
    
    }
    
    return response;
   
}

}