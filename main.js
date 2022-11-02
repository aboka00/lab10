let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab45 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 0, 5, 10];
let lab8 = [5, 10, 10, 10 ,5];
let quiz1 = 36;

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum45 = 0;
let sum6 = 0;
let sum8 = 0;

function get_sum(lab) {
    let sum = 0;
    for(let i = 0; i < lab.length; i++) sum += lab[i];
    return sum;
}

function main(lab1, lab2, lab3, lab45, lab6, lab8) {
    sum1 = get_sum(lab1);
    sum2 = get_sum(lab2);
    sum3 = get_sum(lab3);
    sum45 = get_sum(lab45);
    sum6 = get_sum(lab6);
    sum8 = get_sum(lab8);
    let obj = (sum1 + sum2 + sum3 + sum45 + sum6 + sum8) * 60 / 280;
    return obj;
}

let sums = [sum1, sum2, sum3, sum45, sum6];

let total_score = main(lab1, lab2, lab3, lab45, lab6, lab8) + quiz1;

const results = {
    lab1: [5, 5, 0, 5, 5, 10, 10], // array of scores for lab1
    lab2: [5, 5, 5, 5, 5, 5, 10], // array of scores for lab2
    lab3: [5, 10, 10, 15], // array of scores for lab3
    lab4_5: [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5], // array of scores for lab4 and 5
    lab6: [5, 5, 10, 0, 5, 10], // array of scores for lab6
    lab8: [5, 10, 10, 10 ,5], // array of scores for lab 8
    quiz1: quiz1, // score of quiz1
    sums: [sum1, sum2, sum3, sum45, sum6, sum8], // array of sums of each lab
    total_score: total_score, // computed total score
    }
console.log(results);
