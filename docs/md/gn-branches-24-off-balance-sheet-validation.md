
## Guidance Note

## Validation and verification of the '2.4 Off Balance Sheet' Sheet

Relevant to the JFSC's prudential reporting requirements of OIBs

## 1 Overview

## General points

- 1.1 The validation and verification checks performed on submission are set out herein.
- 1.2 Excel data validation in the template is limited as follows:
- 1.2.1 For monetary amounts, cells have been restricted so that only integers in the range -1,000,000,000 to +1,000,000,000 can be entered, unless otherwise noted. As the unit is £1,000, this means that values of +/- £1 trillion are permitted.
- 1.2.2 Excel only checks validation on direct input and/or if manually requested so it should not be considered to be a failsafe OIBs should check their data and the JFSC will check the data on submission.
- 1.2.3 Submission of the template to the JFSC will prompt the checks to run. If all checks re passed, the submission will be accepted, this fact communicated to the OIB together with a list of any warnings.
- 1.3 In the tables below, both the item (in bold) and the Excel Location (Sheet and Cell reference) are provided.
- 1.4 When a test is failed, the message received will be as described herein.
- 1.5 The ' Check ' is a unique identifier for each test, provided within the message to enable the recipient to match the error message to this guidance.

## 2 Data input validation

## Validation of cells where data entry expected or that should be left blank

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook). Calculated fields are addressed in Section 3.

|   Check | Sheet                 | Item   | Column   | Cell Ref   | Validation Message                                                         |
|---------|-----------------------|--------|----------|------------|----------------------------------------------------------------------------|
|       1 | 2.4 Off Balance Sheet | A.1    | Total    | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.4 Off Balance Sheet | A.2    | Total    | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.4 Off Balance Sheet | A.3    | Total    | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.4 Off Balance Sheet | A.4    | Total    | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.4 Off Balance Sheet | A.5    | Total    | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.4 Off Balance Sheet | A.6    | Total    | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.4 Off Balance Sheet | A.7    | Total    | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.4 Off Balance Sheet | A.8    | Total    | C10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 2.4 Off Balance Sheet | A.9    | Total    | C11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.4 Off Balance Sheet | A.10   | Total    | C12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.4 Off Balance Sheet | A.11   | Total    | C13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.4 Off Balance Sheet | B.1    | Total    | C15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 2.4 Off Balance Sheet | B.2    | Total    | C16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 2.4 Off Balance Sheet | B.3    | Total    | C17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column   | Cell Ref   | Validation Message                                                         |
|      15 | 2.4 Off Balance Sheet | B.4    | Total    | C18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.4 Off Balance Sheet | B.5    | Total    | C19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.4 Off Balance Sheet | C.1    | Total    | C21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.4 Off Balance Sheet | C.2    | Total    | C22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.4 Off Balance Sheet | D.0    | Total    | C24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                 | Item   | Column   | Cell  Ref   | Excel                 |
|---------|-----------------------|--------|----------|-------------|-----------------------|
|      20 | 2.4 Off Balance Sheet | A.0    | Total    | C14         | =SUM(C3:C13)          |
|      21 | 2.4 Off Balance Sheet | B.0    | Total    | C20         | =SUM(C15:C19)         |
|      22 | 2.4 Off Balance Sheet | C.0    | Total    | C23         | =SUM(C21:C22)         |
|      23 | 2.4 Off Balance Sheet | E.0    | Total    | C25         | =SUM(C14,C20,C23,C24) |