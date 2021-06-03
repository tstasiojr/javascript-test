// Benefits of Funtions

// Names (helpful);
// Resubability;
// Delay Usage ( callbacks, promises, observables )

// Scope



let manager = 'main execution context manager';

function dataDepartment() {
    let profit = 100;
    const manager = 'dta manager';
    console.log(manager)
    return function createEmployee() {

        const employee = {
            makeSale() {
                profit += 10;
            },
            readProfit() {
                console.log(profit);
                return profit;
            }
            
        }
        return employee;
    }

    // console.log(manager, profit);
}

const createEmployee = dataDepartment();
const dataGuy = createEmployee();
const dataEmployee = createEmployee();
const thirdEmployee = createEmployee();



dataEmployee.readProfit(); // 100
dataEmployee.makeSales(); // 110
dataEmployee.readProfit(); // 110
dataGuy.readProfit(); // 100
dataGuy.makeSales(); //120
dataGuy.readProfit(); //120
thirdEmployee.readProfit(); // 120
thirdEmployee.makeSales();  // 130
thirdEmployee.readProfit();  // 130


const noScope = () => {
    console.log(manager);
}


function greeting(name) {
    console.log('hello', name);
}
greeting('Moe');
