function numberComparator(num1, num2) {
    if(!num1 || !num2) return 'Defina dois números e diferentes de 0'
    const areTheSame = num1 === num2;
    const sum = num1 + num2;
    return areTheSame ? `${num1} e ${num2} são iguais` : `${num1} e ${num2} não são iguais`;
}
console.log(numberComparator(1,2))
console.log(numberComparator(2,2))
console.log(numberComparator())