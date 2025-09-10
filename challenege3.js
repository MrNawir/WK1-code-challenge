 function calculateSalary() {
            const basicSalaryInput = document.getElementById('basicSalary').value;
            const benefitsInput = document.getElementById('benefits').value;
            const resultsDiv = document.getElementById('results');

            // Convert inputs to numbers
            const basicSalary = parseFloat(basicSalaryInput) || 0;
            const benefits = parseFloat(benefitsInput) || 0;

            if (basicSalary <= 0) {
                alert("Please enter a basic salary greater than zero.");
                return;
            }

            // Constants based on the provided 2025 tax rates
            const SHIF_RATE = 0.0275;
            const NSSF_RATE = 0.06;
            const HOUSING_LEVY_RATE = 0.015;
            const PERSONAL_RELIEF = 2400;

            // NSSF Tiers for February 2025 onwards
            const NSSF_TIER1_LIMIT = 8000;
            const NSSF_TIER2_LIMIT = 72000;
            const NSSF_TIER1_MAX_CONTRIBUTION = NSSF_TIER1_LIMIT * NSSF_RATE;
            const NSSF_TIER2_MAX_CONTRIBUTION = (NSSF_TIER2_LIMIT - NSSF_TIER1_LIMIT) * NSSF_RATE;

            // 1. Calculate Gross Salary
            const grossSalary = basicSalary + benefits;

            // 2. Calculate SHIF Deduction
            const shifDeduction = grossSalary * SHIF_RATE;

            // 3. Calculate NSSF Deduction
            let nssfDeduction = 0;
            if (basicSalary <= NSSF_TIER1_LIMIT) {
                nssfDeduction = basicSalary * NSSF_RATE;
            } else if (basicSalary > NSSF_TIER1_LIMIT && basicSalary <= NSSF_TIER2_LIMIT) {
                nssfDeduction = (NSSF_TIER1_LIMIT * NSSF_RATE) + ((basicSalary - NSSF_TIER1_LIMIT) * NSSF_RATE);
            } else if (basicSalary > NSSF_TIER2_LIMIT) {
                nssfDeduction = NSSF_TIER1_MAX_CONTRIBUTION + NSSF_TIER2_MAX_CONTRIBUTION;
            }
            
            // 4. Calculate Housing Levy
            const housingLevy = grossSalary * HOUSING_LEVY_RATE;

            // 5. Calculate Taxable Income (SHIF, NSSF, and Housing Levy are tax-deductible)
            const taxableIncome = grossSalary - shifDeduction - nssfDeduction - housingLevy;

            // 6. Calculate PAYE (Tax)
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
                } else { // Above 800,000
                    paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((taxableIncome - 800000) * 0.35);
                }

                // Apply personal relief
                paye = Math.max(0, paye - PERSONAL_RELIEF);
            }

            // 7. Calculate Net Salary
            const totalDeductions = shifDeduction + nssfDeduction + housingLevy + paye;
            const netSalary = grossSalary - totalDeductions;
        }