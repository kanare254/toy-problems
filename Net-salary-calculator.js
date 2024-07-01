function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.05;
    const nhifDeduction = 1400;
    const nssfDeductionRate = 0.06; 

    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * taxRate;
    let nssfDeduction = grossSalary * nssfDeductionRate;
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax: ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
}

let basicSalary = ("70000");
let benefits = ("8600");

basicSalary = +basicSalary;
benefits = +benefits;

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    calculateNetSalary(basicSalary, benefits);
} else {
    console.log();
}

