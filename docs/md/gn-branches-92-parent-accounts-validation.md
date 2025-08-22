
## Guidance Note

## Validation and verification of the '9.2 Parent Accounts' Sheet

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

|   Check | Sheet               | Item   | Column   | Cell Ref   | Validation Message                                                           |
|---------|---------------------|--------|----------|------------|------------------------------------------------------------------------------|
|       1 | 9.2 Parent Accounts | A.1    | Values   | D3         | Must be blank                                                                |
|       2 | 9.2 Parent Accounts | A.2    | Text     | C4         | Must be blank                                                                |
|       3 | 9.2 Parent Accounts | A.2    | Values   | D4         | Enter month between 1 and 12                                                 |
|       4 | 9.2 Parent Accounts | A.3    | Text     | C5         | Must be blank                                                                |
|       5 | 9.2 Parent Accounts | A.3    | Values   | D5         | Year must either be this year, or no greater than two years ago              |
|       6 | 9.2 Parent Accounts | A.4.1  | Text     | C6         | Must be blank                                                                |
|       7 | 9.2 Parent Accounts | A.4.1  | Values   | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|       8 | 9.2 Parent Accounts | A.4.2  | Text     | C7         | Must be blank                                                                |
|       9 | 9.2 Parent Accounts | A.4.2  | Values   | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      10 | 9.2 Parent Accounts | A.4.3  | Text     | C8         | Must be blank                                                                |
|      11 | 9.2 Parent Accounts | A.4.3  | Values   | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      12 | 9.2 Parent Accounts | A.4.0  | Text     | C9         | Must be blank                                                                |
|      13 | 9.2 Parent Accounts | A.5    | Text     | C10        | Must be blank                                                                |
|      14 | 9.2 Parent Accounts | A.5    | Values   | D10        | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|   Check | Sheet               | Item   | Column   | Cell Ref   | Validation Message                                                           |
|      15 | 9.2 Parent Accounts | A.6    | Text     | C11        | Must be blank                                                                |
|      16 | 9.2 Parent Accounts | A.6    | Values   | D11        | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      17 | 9.2 Parent Accounts | A.7    | Text     | C12        | Must be blank                                                                |
|      18 | 9.2 Parent Accounts | A.7    | Values   | D12        | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      19 | 9.2 Parent Accounts | A.8    | Text     | C13        | Must be blank                                                                |
|      20 | 9.2 Parent Accounts | A.8    | Values   | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet               | Item   | Column   | Cell  Ref   | Excel       |
|---------|---------------------|--------|----------|-------------|-------------|
|      21 | 9.2 Parent Accounts | A.4.0  | Values   | D9          | =SUM(D6:D8) |