# WK1: Code Challenge (JavaScript)

Three standalone toy problems implemented in plain JavaScript:

- Student Grade Generator
- Speed Detector
- Net Salary Calculator

This repository follows the assignment requirements: one folder with three files, one solution per file, and a clear README.

## Project Setup

No build or dependencies required. You can run each file directly in a web browser console:

1. Open any web page in Chrome/Firefox.
2. Open Developer Tools → Console.
3. Copy the full contents of the respective `challengeX.js` file and paste it into the Console.
4. Press Enter and follow any prompts.

Alternatively, you can include the files in a simple HTML page and open it in your browser, but this is not required.

## Challenge 1: Student Grade Generator (`challenge1.js`)

Prompts for student marks (0–100) and prints the grade:

- A: > 79
- B: 60–79
- C: 49–59
- D: 40–49
- E: < 40

Invalid inputs (non-numeric or out of range) print `Invalid marks`.

## Challenge 2: Speed Detector (`challenge2.js`)

Prompts for car speed (km/h) and prints:

- `Ok` if speed ≤ 70
- `Points: X` where X = floor((speed − 70) / 5)
- `License suspended` if points > 12

Invalid inputs (non-numeric or negative) print `Invalid speed`.

## Challenge 3: Net Salary Calculator (`challenge3.js`)

Prompts for Basic Salary and Benefits, then calculates and prints:

- Gross Salary
- NHIF Deduction (per NHIF rates table)
- NSSF Deduction (6% with Tier I and II up to KES 72,000)
- PAYE (with personal relief of KES 2,400)
- Total Deductions
- Net Salary

Note: Rates align with commonly referenced KRA/NHIF/NSSF guidance. Always verify with official sources if exact figures are required.

## Author & License

- Author: Ibrahim Nawir
- License: MIT
