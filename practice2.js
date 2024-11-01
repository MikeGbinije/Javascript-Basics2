function splitBill(totalBill, numpeople, tipPercentage) {
    const totalWithTip = totalBill + tipPercentage;
    let perPerson = (totalWithTip / numpeople) .toFixed(2);
    console.log(`The total with tip is ${totalWithTip}. Each person needs to pay ${perPerson}`);
}

splitBill(232, 3, 3.5)
splitBill(1000, 7, 6)