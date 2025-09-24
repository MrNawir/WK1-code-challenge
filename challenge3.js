// Challenge 3: Net Salary Calculator
// Prompts for basic salary and benefits, then logs:
// Gross Salary, NHIF Deduction, NSSF Deduction, PAYE, Total Deductions, Net Salary.

function calculateSalary() {
   // Inputs
   const basicSalaryInput = prompt('Enter basic salary (KES):');
   const benefitsInput = prompt('Enter benefits (KES):');

   const basicSalary = Number(basicSalaryInput) || 0;
   const benefits = Number(benefitsInput) || 0;

   if (basicSalary <= 0) {
     console.log('Invalid basic salary');
     return;
   }

   // Constants
   const NSSF_RATE = 0.06;     // 6%
   const PERSONAL_RELIEF = 2400;

   // NSSF Tiers
   const NSSF_TIER1_LIMIT = 8000;
   const NSSF_TIER2_LIMIT = 72000;
   const NSSF_TIER1_MAX_CONTRIBUTION = NSSF_TIER1_LIMIT * NSSF_RATE;
   const NSSF_TIER2_MAX_CONTRIBUTION = (NSSF_TIER2_LIMIT - NSSF_TIER1_LIMIT) * NSSF_RATE;

   // 1) Gross
   const grossSalary = basicSalary + benefits;

   // 2) NHIF (per NHIF rates table)
   function computeNhif(gross) {
     if (gross <= 5999) return 150;
     if (gross <= 7999) return 300;
     if (gross <= 11999) return 400;
     if (gross <= 14999) return 500;
     if (gross <= 19999) return 600;
     if (gross <= 24999) return 750;
     if (gross <= 29999) return 850;
     if (gross <= 34999) return 900;
     if (gross <= 39999) return 950;
     if (gross <= 44999) return 1000;
     if (gross <= 49999) return 1100;
     if (gross <= 59999) return 1200;
     if (gross <= 69999) return 1300;
     if (gross <= 79999) return 1400;
     if (gross <= 89999) return 1500;
     if (gross <= 99999) return 1600;
     return 1700; // 100,000 and above
   }
   const nhifDeduction = computeNhif(grossSalary);

   // 3) NSSF
   let nssfDeduction = 0;
   if (basicSalary <= NSSF_TIER1_LIMIT) {
     nssfDeduction = basicSalary * NSSF_RATE;
   } else if (basicSalary <= NSSF_TIER2_LIMIT) {
     nssfDeduction = (NSSF_TIER1_LIMIT * NSSF_RATE) + ((basicSalary - NSSF_TIER1_LIMIT) * NSSF_RATE);
   } else {
     nssfDeduction = NSSF_TIER1_MAX_CONTRIBUTION + NSSF_TIER2_MAX_CONTRIBUTION;
   }

   // 4) Taxable income (PAYE)
   // Common practice: deduct NSSF before PAYE.
   const taxableIncome = Math.max(0, grossSalary - nssfDeduction);

   let paye = 0;
   if (taxableIncome > 0) {
     if (taxableIncome <= 24000) {
       paye = taxableIncome * 0.10;
     } else if (taxableIncome <= 32333) {
       paye = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);
     } else if (taxableIncome <= 500000) {
       paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.30);
     } else if (taxableIncome <= 800000) {
       paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((taxableIncome - 500000) * 0.325);
     } else {
       paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((taxableIncome - 800000) * 0.35);
     }
     // Relief
     paye = Math.max(0, paye - PERSONAL_RELIEF);
   }

   // 5) Net Salary
   const totalDeductions = nhifDeduction + nssfDeduction + paye;
   const netSalary = grossSalary - totalDeductions;

   // Output
   console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
   console.log(`NHIF Deduction: KES ${nhifDeduction.toFixed(2)}`);
   console.log(`NSSF Deduction: KES ${nssfDeduction.toFixed(2)}`);
   console.log(`PAYE (Tax): KES ${paye.toFixed(2)}`);
   console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
}

// Run when the file is executed in a browser console
calculateSalary();