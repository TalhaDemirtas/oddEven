const oddEven = (number) => {
    let st = number.toString();
    let sum = 0;
    for (i=0; i<st.length; i++) {
        sum += parseInt(st[i]);
    }
    return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
};

console.log(oddEven(477))
console.log(oddEven(8454))
console.log(oddEven(2950244))