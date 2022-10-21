let one = +prompt('Birinchi diapazon raqam kiriting')
let two = +prompt('Ikkinchi diapazon kiriting')
let exe = +prompt('Nechta amal bajarilishi kerak ?')


function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function meaning(){
    mean = Math.floor(Math.random() * 4 + 1);
    return mean;
}

for (var i = 0; i < exe; i++) {
    let num1 = myRandom(one, two),
        num2 = myRandom(one, two),
        sym = meaning(),
        result = 0;
    
    if (sym == 1) {
        sym = "*";
       result = num1 * num2;
    }else if (sym == 2) {
        sym = "+"
        result = num1 + num2;
    }else if (sym == 3) {
        sym = "-"
        result = num1 - num2;
    }else if (sym == 4) {
        sym = "/"
        result = num1 / num2
    }
    
let answer = +prompt(`${num1}${sym}${num2} = `)

alert(answer == result ? ` Javobingiz tog'ri 👍 ${num1}${sym}${num2} = ${result}` : ` Javobingiz xato 🤷‍♂️ ${answer}, tog'ri javob esa 😉 ${result}`)
    
    
}
