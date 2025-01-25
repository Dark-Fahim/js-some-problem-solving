// Problem 1
  
function calculateMoney(tickets){
    if(typeof tickets !== 'number' || tickets <= 0){
        return "Please Give a number, should be a positive number"
    }
    else{
        const ticketPrice = 120
        const totalEarn = ticketPrice * tickets
        const securityExpens = 500;
        const perDayStaffExpens = 50 * 8;
        const totalExpenses = securityExpens + perDayStaffExpens;
        const profit = totalEarn - totalExpenses
        return profit   
    }
}


// Problem 1 solved


// Problem 2 

function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid'
    }
    else{
        if(name.toLowerCase().endsWith('a')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('y')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('i')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('e')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('o')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('u')){
            return 'Good Name'
        }
        else if(name.toLowerCase().endsWith('w')){
            return 'Good Name'
        }
        else{
            return 'Bad Name'
        }
    }
}

// problem 2 solved

// Problem 3

function deleteInvalids(array){
    if(Array.isArray(array)){
        const arrayNumbers = []
       for(const arr of array){
        if(typeof arr === 'number' && !isNaN(arr)){
            arrayNumbers.push(arr)
        }
        else{
            continue;
        }
        
       }
       return arrayNumbers
    }
    else{
        return ('Invalid Array')
    }
}


// Problem 3 solved

// Problem 4

function password(details){ 
    const keys = Object.keys(details)
    if(keys.length === 3){
        if(typeof details.birthYear === 'number' && details.birthYear >=1000 && details.birthYear < 9999 ){
            let siteName = details.siteName
            if(typeof siteName === 'string' && siteName.length > 0 && details.name.length > 0){
                const firstLatter = siteName[0].toUpperCase()
                const remainingStr = siteName.substring(1)
                siteName = firstLatter+remainingStr
                return `${siteName}#${details.name}@${details.birthYear}`
            }
            else{
                return "Invalid"
            }
        }
        else{
            return 'invalid Birth date'
        }
    }
    else{
        return "Invalid"
    }

}


// Problem 4 solved

// Problem 5

function monthlySavings(allPayments, livingCost){
    if(Array.isArray(allPayments) && typeof livingCost === 'number'){
        let paymentSum = 0
        for(const payment of allPayments){
            if(payment >= 3000){
                const tax = payment / 100;
                const totaltax = payment - (tax * 20)
                paymentSum = paymentSum + totaltax
            }
            else{
                paymentSum = paymentSum + payment
            }
        }
        if(paymentSum < livingCost){
            return 'Earn More'
        }
        else{
            return 'Total Savings: ' + (paymentSum - livingCost)
        } 
    }
    else{
        return 'Invalid'
    }
}

// problem 5 solved