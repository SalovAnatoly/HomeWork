let money, time;
//
function start () {
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD"); 

while(isNaN(money) || money=="" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
}
}
start ();



let appData ={
    budget : money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true,
}

 function chooseExpenses() {
    for (i=0; i<2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt("Во сколько обойдется?",'');  
    
    if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a.length<50 && b != ''){  
    console.log("if "+i+" = fully implemented");
    console.log("а (статья расходов)= "+a);
    console.log("b (сколько стоит)= "+b);
    //Записать ответы в объект expenses в формате: 
    // expenses: {
    //     “ответ на первый вопрос” : “ответ на второй вопрос”
    //     }
    appData.expenses[a]=b;
    }
    else {
        console.log("if "+i+"Проверка не сработала")
        i=i-1
    }
    };  
 }
 chooseExpenses();

 // 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

function detectDayBudget () {
    appData.moneyPerDay=(appData.budget/30).toFixed();
    alert("Бюджет на один день "+appData.moneyPerDay);
}
detectDayBudget ()

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel () {
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
    
}
detectLevel () 

function checkSaving () {
    if (appData.savings ==true){
        let save = +prompt("Какова сумма накоплений");
            percent = +prompt("Под какой процент");

            appData.monthIncome =save/100/12*percent;
            alert ("Доход в месяц с вашего депозита " + (appData.monthIncome).toFixed() );

            console.log (appData);
    }
}

checkSaving ()

// 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// Записать ответы в объект optionalExpenses в формате Номер - Ответ.
//     optionalExpenses: {
//     1 : “ответ на вопрос”
//     }
// Вызывать функции не обязательно.

function chooseOptExpenses () {
    for (i=0; i<3; i++){ // i<3 - 3 раза задать вопросы
        let opt = prompt("Статья необязательных расходов",''); 
        appData.optionalExpenses[i]=opt;
        console.log ("Записалось"+opt);
}

};  

chooseOptExpenses ()