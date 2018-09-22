// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var h = currency / 50;
    
    if (currency % 50 != 0) {
        
        var checkQuarters = currency % 50;

        var q =  checkQuarters / 25;
        
        if (checkQuarters % 25 !=0) {
            
            var checkDimes = checkQuarters % 25;
            
            var d = checkDimes / 10;
            
            if (checkDimes %10 != 0) {
                
                var checkNickels = checkDimes % 10;
                
                var n = checkNickels / 5;
                
                if (checkNickels%5 != 0) {
                    
                    var p = checkNickels % 5;
                    
                }
                
            }
        }
    
    }
    
    return (console.log(h, q, d, n, p));
}
