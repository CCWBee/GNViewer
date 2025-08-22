
## Guidance Note

## Validation and verification of the '2.3 BS Liabilities' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

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

|   Check | Sheet              | Item   | Column     | Cell Ref   | Validation Message                                                         |
|---------|--------------------|--------|------------|------------|----------------------------------------------------------------------------|
|       1 | 2.3 BS Liabilities | A.1    | Volume     | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.3 BS Liabilities | A.2    | Volume     | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.3 BS Liabilities | A.3    | Volume     | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.3 BS Liabilities | A.4    | Volume     | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.3 BS Liabilities | A.7    | Volume     | C13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.3 BS Liabilities | B.1    | Volume     | C15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.3 BS Liabilities | B.2    | Volume     | C16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.3 BS Liabilities | B.3    | Volume     | C17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 2.3 BS Liabilities | C.1    | Volume C20 |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.3 BS Liabilities | C.2    | Volume     | C21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.3 BS Liabilities | C.3    | Volume     | C22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.3 BS Liabilities | C.4    | Volume     | C23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 2.3 BS Liabilities | C.5    | Volume     | C24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 2.3 BS Liabilities | C.6    | Volume C25 |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column   | Cell Ref   | Validation Message                                                         |
|      15 | 2.3 BS Liabilities | C.7.1  | Volume   | C26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.3 BS Liabilities | C.7.2  | Volume   | C27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.3 BS Liabilities | C.7.3  | Volume   | C28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.3 BS Liabilities | C.7.4  | Volume   | C29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.3 BS Liabilities | D.4    | Volume   | C35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              | Item   | Column   | Cell Ref   | Excel                        |
|---------|--------------------|--------|----------|------------|------------------------------|
|      20 | 2.3 BS Liabilities | A.5.1  | Volume   | C7         | = SUM( '1.2 LCR-LMR'!C3:C6 ) |
|      21 | 2.3 BS Liabilities | A.5.2  | Volume   | C8         | =SUM('1.2 LCR-LMR'!C7:C10)   |
|      22 | 2.3 BS Liabilities | A.5    | Volume   | C9         | =SUM(C7:C8)                  |
|      23 | 2.3 BS Liabilities | A.6.1  | Volume   | C10        | =SUM('1.2 LCR-LMR'!C15:C18)  |
|      24 | 2.3 BS Liabilities | A.6.2  | Volume   | C11        | =SUM('1.2 LCR-LMR'!C20:C21)  |
|      25 | 2.3 BS Liabilities | A.6    | Volume   | C12        | =SUM(C10:C11)                |
|      26 | 2.3 BS Liabilities | A.0    | Volume   | C14        | =SUM(C3:C6,C9,C12:C13)       |
|      27 | 2.3 BS Liabilities | B.4    | Volume   | C18        | =SUM('1.2 LCR-LMR'!C11:C13)  |
|      28 | 2.3 BS Liabilities | B.0    | Volume   | C19        | =SUM(C15:C18)                |
|      29 | 2.3 BS Liabilities | C.7    | Volume   | C30        | =SUM(C26:C29)                |
|      30 | 2.3 BS Liabilities | C.0    | Volume   | C31        | =SUM(C20:C25,C30)            |
|      31 | 2.3 BS Liabilities | D.1    | Volume   | C32        | ='6.1 Capital Adequacy'!C7   |
|      32 | 2.3 BS Liabilities | D.2    | Volume   | C33        | ='6.1 Capital Adequacy'!C35  |
|      33 | 2.3 BS Liabilities | D.3    | Volume   | C34        | ='6.1 Capital Adequacy'!C49  |
|      34 | 2.3 BS Liabilities | D.0    | Volume   | C36        | =SUM(C32:C35)                |
|   Check | Sheet              | Item   | Column   | Cell Ref   | Excel            |
|      35 | 2.3 BS Liabilities | E.0    | Volume   | C37        | =C14+C19+C31+C36 |