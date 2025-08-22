
## Guidance Note

## Validation and verification of the '5.6 OTC' Sheet

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

|   Check | Sheet   | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|---------|---------|--------|-------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 5.6 OTC | N.1.1  | Amount                  | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 5.6 OTC | N.1.1  | Positive Mark-to-Market | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 5.6 OTC | N.1.2  | Amount                  | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 5.6 OTC | N.1.2  | Positive Mark-to-Market | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 5.6 OTC | N.1.3  | Amount                  | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 5.6 OTC | N.1.3  | Positive Mark-to-Market | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 5.6 OTC | N.2.1  | Amount                  | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 5.6 OTC | N.2.1  | Positive Mark-to-Market | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 5.6 OTC | N.2.2  | Amount                  | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 5.6 OTC | N.2.2  | Positive Mark-to-Market | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 5.6 OTC | N.2.3  | Amount                  | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 5.6 OTC | N.2.3  | Positive Mark-to-Market | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 5.6 OTC | N.3.1  | Amount                  | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet   | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      14 | 5.6 OTC | N.3.1  | Positive Mark-to-Market | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 5.6 OTC | N.3.2  | Amount                  | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 5.6 OTC | N.3.2  | Positive Mark-to-Market | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 5.6 OTC | N.3.3  | Amount                  | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 5.6 OTC | N.3.3  | Positive Mark-to-Market | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 5.6 OTC | N.4.1  | Amount                  | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 5.6 OTC | N.4.1  | Positive Mark-to-Market | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 5.6 OTC | N.4.2  | Amount                  | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 5.6 OTC | N.4.2  | Positive Mark-to-Market | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 5.6 OTC | N.4.3  | Amount                  | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 5.6 OTC | N.4.3  | Positive Mark-to-Market | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 5.6 OTC | N.5.1  | Amount                  | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 5.6 OTC | N.5.1  | Positive Mark-to-Market | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 5.6 OTC | N.5.2  | Amount                  | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 5.6 OTC | N.5.2  | Positive Mark-to-Market | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 5.6 OTC | N.5.3  | Amount                  | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 5.6 OTC | N.5.3  | Positive Mark-to-Market | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet   | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      31 | 5.6 OTC | N.6.1  | Amount                  | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 5.6 OTC | N.6.1  | Positive Mark-to-Market | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 5.6 OTC | N.6.2  | Amount                  | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 5.6 OTC | N.6.2  | Positive Mark-to-Market | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 5.6 OTC | N.7.1  | Amount                  | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 5.6 OTC | N.7.1  | Positive Mark-to-Market | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 5.6 OTC | N.7.2  | Amount                  | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 5.6 OTC | N.7.2  | Positive Mark-to-Market | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet   | Item   | Column                  | Cell Ref   | Excel         |
|---------|---------|--------|-------------------------|------------|---------------|
|      39 | 5.6 OTC | N.1.0  | Amount                  | C6         | =SUM(C3:C5)   |
|      40 | 5.6 OTC | N.1.0  | Positive Mark-to-Market | D6         | =SUM(D3:D5)   |
|      41 | 5.6 OTC | N.2.0  | Amount                  | C10        | =SUM(C7:C9)   |
|      42 | 5.6 OTC | N.2.0  | Positive Mark-to-Market | D10        | =SUM(D7:D9)   |
|      43 | 5.6 OTC | N.3.0  | Amount                  | C14        | =SUM(C11:C13) |
|      44 | 5.6 OTC | N.3.0  | Positive Mark-to-Market | D14        | =SUM(D11:D13) |
|      45 | 5.6 OTC | N.4.0  | Amount                  | C18        | =SUM(C15:C17) |
|      46 | 5.6 OTC | N.4.0  | Positive Mark-to-Market | D18        | =SUM(D15:D17) |
|      47 | 5.6 OTC | N.5.0  | Amount                  | C22        | =SUM(C19:C21) |
|      48 | 5.6 OTC | N.5.0  | Positive Mark-to-Market | D22        | =SUM(D19:D21) |
|      49 | 5.6 OTC | N.6.0  | Amount                  | C25        | =SUM(C23:C24) |
|      50 | 5.6 OTC | N.6.0  | Positive Mark-to-Market | D25        | =SUM(D23:D24) |
|      51 | 5.6 OTC | N.7.0  | Amount                  | C28        | =SUM(C26:C27) |
|      52 | 5.6 OTC | N.7.0  | Positive Mark-to-Market | D28        | =SUM(D26:D27) |