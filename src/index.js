module.exports = function toReadable (number) {
    let dozens = [
        'ten', 
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    let tens = [
        'eleven', 
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    let ones = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
    ]

    let str = '';

    if (Math.floor(number/100)) {
        str+= ones[Math.floor(number/100) - 1] + ' hundred';
        if (number%100 > 19) {
            str+= ' ' + dozens[Math.floor((number%100)/10) - 1];
            if ((number%100)%10) {
                    str+= ' ' + ones[Math.floor((number%100)%10) - 1];
                }
        } else {
            if (number%100 > 10) {
                str+= ' ' + tens[Math.floor((number%100)%10) - 1];
            } else {
                if (number%100) {
                    str+= ' ' + ones[Math.floor(number%100) - 1];
                }
            }
        }
    } else {
        if (number > 19) {
            str+= dozens[Math.floor(number/10) - 1];
            if (number%10) {
                    str+= ' ' + ones[Math.floor(number%10) - 1];
                }
        } else {
            if (number > 10) {
                str+= tens[Math.floor(number%10) - 1];
            } else {
                if (number) {
                    str+= ones[Math.floor(number) - 1];
                }
                else {
                    str = 'zero';
                }
            }
        }
    }
    return str;
}