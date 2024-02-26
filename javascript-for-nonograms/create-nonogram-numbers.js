function createNonogramValues(lightAndBlack) {
    const blackCountsRows = [];
    for (let i = 0; i < lightAndBlack.length; i++) {
        blackCountsRows.push([0]);
        for (let j = 0; j < lightAndBlack.length; j++) {
            if (lightAndBlack[i][j] === 1) {
                if (blackCountsRows[blackCountsRows.length - 1][0] === 0 || (j !== 0 && lightAndBlack[i][j - 1] === 1)) {
                    blackCountsRows[blackCountsRows.length - 1][blackCountsRows[blackCountsRows.length - 1].length - 1] += 1;
                } else {
                    blackCountsRows[blackCountsRows.length - 1].push(1);
                }
            }
        }
    }

    const blackCountsCols = [];
    for (let j = 0; j < lightAndBlack.length; j++) { 
        blackCountsCols.push([0]);
        for (let i = 0; i < lightAndBlack.length; i++) {
            if (lightAndBlack[i][j] === 1) {
                if (blackCountsCols[blackCountsCols.length - 1][0] === 0 || (i !== 0 && lightAndBlack[i - 1][j] === 1)) {
                    blackCountsCols[blackCountsCols.length - 1][blackCountsCols[blackCountsCols.length - 1].length - 1] += 1;
                } else {
                    blackCountsCols[blackCountsCols.length - 1].push(1);
                }
            }
        }
    }

    return [blackCountsCols, blackCountsRows];
}




