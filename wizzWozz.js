function wizzWozz () {
    for (let i = 0; i<= 100; i++) {//start at 0, include all numbers from 1-100
        if (i % 5== 0 && i % 3 == 0){ //combine two conditions using && since both are true
            console.log("WizzWozz");
        } else if (i % 3 == 0) { //if number is divisible x 3 with remainder of 0
            console.log("Wizz");
        } else if (i % 5 == 0) {
            console.log("Wozz");
        } else {
            console.log(i); //output of all numbers that aren't being converted into wizzWozz
        }
    }
}
wizzWozz();