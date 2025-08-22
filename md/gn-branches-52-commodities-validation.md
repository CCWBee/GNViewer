
## Guidance Note

## Validation and verification of the '5.2 Commodities' Sheet

Relevant to the JFSC's prudential reporting requirements of OIBs

Issued: September 2019.

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

|   Check | Sheet           | Item   | Column      | Cell Ref   | Validation Message                                                         |
|---------|-----------------|--------|-------------|------------|----------------------------------------------------------------------------|
|       1 | 5.2 Commodities | A.1    | Gross Long  | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 5.2 Commodities | A.1    | Gross Short | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 5.2 Commodities | A.2    | Gross Long  | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 5.2 Commodities | A.2    | Gross Short | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 5.2 Commodities | A.3    | Gross Long  | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 5.2 Commodities | A.3    | Gross Short | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 5.2 Commodities | A.4    | Gross Long  | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 5.2 Commodities | A.4    | Gross Short | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet           | Item   | Column            | Cell  Ref   | Excel                                  |
|---------|-----------------|--------|-------------------|-------------|----------------------------------------|
|       9 | 5.2 Commodities | A.1    | Net Open Position | E3          | = C3 - D3                              |
|      10 | 5.2 Commodities | A.2    | Net Open Position | E4          | = C4 - D4                              |
|      11 | 5.2 Commodities | A.3    | Net Open Position | E5          | = C5 - D5                              |
|      12 | 5.2 Commodities | A.4    | Net Open Position | E6          | = D6 - E6                              |
|      13 | 5.2 Commodities | A.0    | Gross Long        | C7          | =SUM(C3:C6)                            |
|      14 | 5.2 Commodities | A.0    | Gross Short       | D7          | =SUM(D3:D6)                            |
|      15 | 5.2 Commodities | A.0    | Net Open Position | E7          | =SUMIF(E3:E6,">0") - SUMIF(E3:E6,"<0") |