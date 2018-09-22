// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    if (currency > 10000) {
        
        var tooRich = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        
        return tooRich;
        
    }
    
    else {
    
        var h = Math.floor(currency / 50);
    
        if (currency % 50 != 0) {
        
            var checkQuarters = currency % 50;

            var q =  Math.floor(checkQuarters / 25);
        
            if (checkQuarters % 25 != 0) {
            
                var checkDimes = checkQuarters % 25;
            
                var d = Math.floor(checkDimes / 10);
            
                if (checkDimes % 10 != 0) {
                
                    var checkNickels = checkDimes % 10;
                
                    var n = Math.floor(checkNickels / 5);
                
                    if (checkNickels % 5 != 0) {
                    
                        var p = checkNickels % 5;
                    
                }
              
            }
            
        }
    
    }
    
    return (console.log(h, q, d, n, p));
    
}

}