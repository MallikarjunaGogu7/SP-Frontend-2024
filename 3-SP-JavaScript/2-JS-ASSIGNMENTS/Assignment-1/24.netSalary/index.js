//Find the net salary of the employee for given data?

function netSalary(basicSalary, allowances, deductions){
    grossprofit = basicSalary+allowances;
    netSalary= grossprofit-deductions;
    return netSalary
}

let basicSalary=30000
let allowances=5000
let deductions=5000
let res = netSalary(basicSalary, allowances, deductions);
console.log(res)