
## Guidance Note

## Validation and verification of the '2.5 Profit and Loss' Sheet

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

|   Check | Sheet               | Item    | Column   | Cell  Ref   | Validation Message                                                         |
|---------|---------------------|---------|----------|-------------|----------------------------------------------------------------------------|
|       1 | 2.5 Profit and Loss | A.1.1.1 | Value    | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.5 Profit and Loss | A.1.1.2 | Value    | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.5 Profit and Loss | A.1.2   | Value    | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.5 Profit and Loss | A.1.3   | Value    | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.5 Profit and Loss | A.1.4   | Value    | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.5 Profit and Loss | A.1.5   | Value    | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.5 Profit and Loss | A.2.1   | Value    | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.5 Profit and Loss | A.2.2   | Value    | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 2.5 Profit and Loss | A.2.3   | Value    | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.5 Profit and Loss | A.2.4   | Value    | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.5 Profit and Loss | A.2.5   | Value    | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.5 Profit and Loss | A.2.6   | Value    | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 2.5 Profit and Loss | A.3.1   | Value    | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column   | Cell  Ref   | Validation Message                                                         |
|      14 | 2.5 Profit and Loss | A.3.2  | Value    | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 2.5 Profit and Loss | B.1    | Value    | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.5 Profit and Loss | B.2    | Value    | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.5 Profit and Loss | B.3    | Value    | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.5 Profit and Loss | B.4    | Value    | C25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.5 Profit and Loss | B.5    | Value    | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 2.5 Profit and Loss | B.6    | Value    | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 2.5 Profit and Loss | B.7    | Value    | C28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 2.5 Profit and Loss | C.1    | Value    | C30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 2.5 Profit and Loss | D.1    | Value    | C32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 2.5 Profit and Loss | D.2    | Value    | C33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 2.5 Profit and Loss | E.1    | Value    | C35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet               | Item   | Column   | Cell Ref   | Excel          |
|---------|---------------------|--------|----------|------------|----------------|
|      26 | 2.5 Profit and Loss | A.1.1  | Value    | C5         | =C3-C4         |
|      27 | 2.5 Profit and Loss | A.1    | Value    | C10        | =SUM(C5:C9)    |
|      28 | 2.5 Profit and Loss | A.2    | Value    | C17        | =SUM(C11:C16)  |
|      29 | 2.5 Profit and Loss | A.3    | Value    | C20        | =SUM(C18:C19)  |
|      30 | 2.5 Profit and Loss | A.0    | Value    | C21        | =C10+C17+C20   |
|      31 | 2.5 Profit and Loss | B.0    | Value    | C29        | = SUM(C22:C28) |
|      32 | 2.5 Profit and Loss | C.0    | Value    | C31        | =C21-C29-C30   |
|      33 | 2.5 Profit and Loss | D.0    | Value    | C34        | =C31-C32-C33   |
|      34 | 2.5 Profit and Loss | E.0    | Value    | C36        | =C34-C35       |