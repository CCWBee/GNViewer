
## Guidance Note

## Validation and verification of the '7.1 IRRBB - Summary' Sheet

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

## 2 Calculation checks

## Validation of cells where there is a calculation

- 2.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                | Item   | Column   | Cell  Ref   | Excel                                  |
|---------|----------------------|--------|----------|-------------|----------------------------------------|
|       1 | 7.1 IRRBB -  Summary | 4.4.1  | VaR      | C3          | ='7.2 IRRBB - Accounting Currency'!C28 |
|       2 | 7.1 IRRBB -  Summary | 4.4.2  | VaR      | C4          | ='7.3 IRRBB - Major 1'!C28             |
|       3 | 7.1 IRRBB -  Summary | 4.4.3  | VaR      | C5          | ='7.4 IRRBB - Major 2'!C28             |
|       4 | 7.1 IRRBB -  Summary | 4.4.4  | VaR      | C6          | ='7.5 IRRBB - Major 3'!C28             |
|       5 | 7.1 IRRBB -  Summary | 4.4.5  | VaR      | C7          | ='7.6 IRRBB - Minor'!C28               |
|       6 | 7.1 IRRBB -  Summary | 4.4.0  | VaR      | C8          | =SUM(C3:C7)                            |