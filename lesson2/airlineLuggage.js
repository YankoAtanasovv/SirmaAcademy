function airline(weight, dimensions) {

    let overweightFee = 0;
    let oversizeFee = 0;
    let handlingFee = 0;


    if (weight > 50) {
        overweightFee = 100;
    }

    if (dimensions > 158) {
        if (dimensions <= 178) {
            oversizeFee = 50;
        } else if (dimensions <= 208) {
            oversizeFee = 100;
        } else {
            oversizeFee = 200;
        }
    }
    if (overweightFee > 0 && oversizeFee > 0) {
        handlingFee = 50;
    }

    let totalFee = overweightFee + oversizeFee + handlingFee;

    console.log(totalFee);




}


airline(52, 160);