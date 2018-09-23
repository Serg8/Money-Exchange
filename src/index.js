// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var balance, H=50, Q=25, D=10, N=5, P=1, countH, countQ, countD, countN, countP, obj = {};

    if(currency <= 0) {
        return obj;
    }else if(currency > 9999) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else{
        countH = Math.floor(currency/H);
        if(countH > 0) {
            obj["H"] = countH;
        }
        balance = currency%H;
        if(balance >= Q) {
            countQ = Math.floor(balance / Q);
            balance = balance%Q;
            obj["Q"] = countQ;
        }
        if(balance >= D) {
            countD = Math.floor(balance/D );
            balance = balance%D;
            obj["D"] = countD;
        }
        if(balance >= N) {
            countN = Math.floor(balance/N );
            balance = balance%N;
            obj["N"] = countN;
        }
        if(balance >= P) {
            countP = Math.floor(balance/P );
            balance = balance%P;
            obj["P"] = countP;
        }
        return obj;
    }
}
