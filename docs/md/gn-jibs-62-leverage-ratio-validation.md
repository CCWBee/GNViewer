
## Guidance Note

## Validation and verification of the '6.2 Leverage Ratio' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Revised February 2019, to amend table heading 'Cell Refs' to 'Cell Ref' (consistently with similar docs) and address layout issues

## 1 Overview

## General points

- 1.1 The validation and verification checks performed on submission are set out herein.
- 1.2 Excel data validation in the template is limited as follows:
- 1.2.1 For monetary amounts, cells have been restricted so that only integers in the range -1,000,000,000 to +1,000,000,000 can be entered, unless otherwise noted. As the unit is £1,000, this means that values of +/- £1 trillion are permitted.
- 1.2.2 Excel only checks validation on direct input and/or if manually requested so it should not be considered to be a failsafe JIBs should check their data and the JFSC will check the data on submission.
- 1.2.3 Submission of the template to the JFSC will prompt the checks to run. If all checks re passed, the submission will be accepted, this fact communicated to the JIB together with a list of any warnings.
- 1.3 In the tables below, both the item (in bold) and the Excel Location (Sheet and Cell reference) are provided.
- 1.4 When a test is failed, the message received will be as described herein.
- 1.5 The ' Check ' is a unique identifier for each test, provided within the message to enable the recipient to match the error message to this guidance.

## 2 Data input validation

## Validation of cells where data entry expected or that should be left blank

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook). Calculated fields are addressed in Section 3.

|   Check | Sheet              |   Item | Cell Ref   | Validation Message                                                         |
|---------|--------------------|--------|------------|----------------------------------------------------------------------------|
|       1 | 6.2 Leverage Ratio |    101 | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 6.2 Leverage Ratio |    104 | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 6.2 Leverage Ratio |    105 | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 6.2 Leverage Ratio |    106 | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 6.2 Leverage Ratio |    107 | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 6.2 Leverage Ratio |    108 | C10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 6.2 Leverage Ratio |    109 | C11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 6.2 Leverage Ratio |    110 | C12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 6.2 Leverage Ratio |    112 | C14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 6.2 Leverage Ratio |    113 | C15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 6.2 Leverage Ratio |    114 | C16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 6.2 Leverage Ratio |    115 | C17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 6.2 Leverage Ratio |    117 | C19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 6.2 Leverage Ratio |    118 | C20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              |   Item | Cell Ref   | Excel                                                                                                                                      |
|---------|--------------------|--------|------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|      15 | 6.2 Leverage Ratio |    102 | C4         | = SUM( '6.1 Capital Adequacy'!C8:C11 , '6.1 Capital Adequacy'!C17:C19 ,  '6.1 Capital Adequacy'!C22:C26 , '6.1 Capital Adequacy'!C36:C39 ) |
|      16 | 6.2 Leverage Ratio |    103 | C5         | = C3-C4                                                                                                                                    |
|      17 | 6.2 Leverage Ratio |    111 | C13        | = SUM( C6:C12 )                                                                                                                            |
|      18 | 6.2 Leverage Ratio |    116 | C18        | = SUM( C14:C17 )                                                                                                                           |
|      19 | 6.2 Leverage Ratio |    119 | C21        | = SUM( C19:C20 )                                                                                                                           |
|      20 | 6.2 Leverage Ratio |    120 | C22        | ='6.1 Capital Adequacy'!C45                                                                                                                |
|      21 | 6.2 Leverage Ratio |    121 | C23        | = C5 + C13 + C18 + C21                                                                                                                     |
|      22 | 6.2 Leverage Ratio |    122 | C24        | = ROUND( C22/C23 ,4 )                                                                                                                      |