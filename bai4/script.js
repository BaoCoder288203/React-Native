const valuesBill = [275, 40, 430]

valuesBill.map((value) => {
    const bill = value;

    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

    const totalValue = bill + tip;

    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
})