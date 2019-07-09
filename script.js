let money = +prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData ={
    budget : money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false,
}

i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
    b = prompt("Во сколько обойдется?",'');    
    i++

    if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a.length<50 && b != ''){  
        console.log("if "+i+" = fully implemented");
        console.log("а (статья расходов)= "+a);
        console.log("b (сколько стоит)= "+b);
        appData.expenses[a]=b;  
    }
}
while(i<2);

appData.moneyPerDay=appData.budget/30;

alert("Бюджет на один день "+appData.moneyPerDay);

if (appData.moneyPerDay<20) {
    console.log("Минимальный уровень достатка");
}
else if (appData.moneyPerDay >20 && appData.moneyPerDay <50){
    console.log("Средний уровень достатка");
}
else if (appData.moneyPerDay >50 && appData.moneyPerDay <100){
    console.log("Высокий уровень достатка");
}
else if (appData.moneyPerDay >100){
    console.log("Очень высокий достаток");
}
else {
    console.log("Произошла ошибка");
}

console.log(appData.expenses);
console.log("appData.budget= "+appData.budget);
console.log("appData.timeData= "+appData.timeData);
console.log("appData.moneyPerDay= "+appData.moneyPerDay);