
## Guidance Note

## Validation and verification of the '1.3 NSFR' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

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

|   Check | Sheet    |   Item | Column   | Cell Ref   | Validation Message                                                         |
|---------|----------|--------|----------|------------|----------------------------------------------------------------------------|
|       1 | 1.3 NSFR |      1 | Value    | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 1.3 NSFR |      2 | Value    | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 1.3 NSFR |      3 | Value    | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 1.3 NSFR |      4 | Value    | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 1.3 NSFR |      5 | Value    | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 1.3 NSFR |      6 | Value    | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 1.3 NSFR |      7 | Value    | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 1.3 NSFR |      7 | ASF/RSF  | D9         | Must be blank                                                              |
|       9 | 1.3 NSFR |      8 | Value    | C10        | Must be blank                                                              |
|      10 | 1.3 NSFR |      9 | Value    | C11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 1.3 NSFR |      9 | ASF/RSF  | D11        | Must be blank                                                              |
|      12 | 1.3 NSFR |     10 | Value    | C12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 1.3 NSFR |     10 | ASF/RSF  | D12        | Must be blank                                                              |
|      14 | 1.3 NSFR |     11 | Value    | C13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    |   Item | Column   | Cell Ref   | Validation Message                                                         |
|      15 | 1.3 NSFR |     12 | Value    | C14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 1.3 NSFR |     13 | Value    | C15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 1.3 NSFR |     14 | Value    | C16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 1.3 NSFR |     15 | Value    | C17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 1.3 NSFR |     16 | Value    | C18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 1.3 NSFR |     17 | Value    | C19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 1.3 NSFR |     18 | Value    | C20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 1.3 NSFR |     19 | Value    | C21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 1.3 NSFR |     20 | Value    | C22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 1.3 NSFR |     21 | Value    | C23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 1.3 NSFR |     22 | Value    | C24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 1.3 NSFR |     23 | Value    | C25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 1.3 NSFR |     24 | Value    | C26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 1.3 NSFR |     25 | Value    | C27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 1.3 NSFR |     26 | Value    | C28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 1.3 NSFR |     27 | Value    | C29        | Must be blank                                                              |
|      31 | 1.3 NSFR |     28 | Value    | C30        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    |   Item | Column   | Cell Ref   | Validation Message                                                         |
|      32 | 1.3 NSFR |     29 | Value    | C31        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 1.3 NSFR |     29 | ASF/RSF  | C31        | Must be blank                                                              |
|      34 | 1.3 NSFR |     30 | Value    | C32        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 1.3 NSFR |     30 | ASF/RSF  | C32        | Must be blank                                                              |
|      36 | 1.3 NSFR |     31 | Value    | C33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 1.3 NSFR |     31 | ASF/RSF  | C33        | Must be blank                                                              |
|      38 | 1.3 NSFR |     32 | Value    | C34        | Must be blank                                                              |
|      39 | 1.3 NSFR |     33 | Value    | C35        | Must be blank                                                              |
|      40 | 1.3 NSFR |     34 | Value    | C36        | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet    |   Item | Column   | Cell Ref   | Excel             |
|---------|----------|--------|----------|------------|-------------------|
|      41 | 1.3 NSFR |      1 | Value    | D3         | =ROUND(C3*100%,0) |
|      42 | 1.3 NSFR |      2 | Value    | D4         | =ROUND(C4*95%,0)  |
|      43 | 1.3 NSFR |      3 | Value    | D5         | =ROUND(C5*90%,0)  |
|      44 | 1.3 NSFR |      4 | Value    | D6         | =ROUND(C6*50%,0)  |
|      45 | 1.3 NSFR |      5 | Value    | D7         | =ROUND(C7*50%,0)  |
|      46 | 1.3 NSFR |      6 | Value    | D8         | =ROUND(C8*50%,0)  |
|      47 | 1.3 NSFR |      8 | Value    | D10        | =SUM(D3:D8)       |
|      48 | 1.3 NSFR |     11 | Value    | D13        | =ROUND(C13*5%,0)  |
|      49 | 1.3 NSFR |     12 | Value    | D14        | =ROUND(C14*10%,0) |
|      50 | 1.3 NSFR |     13 | Value    | D15        | =ROUND(C15*15%,0) |
|      51 | 1.3 NSFR |     14 | Value    | D16        | =ROUND(C16*50%,0) |
|      52 | 1.3 NSFR |     15 | Value    | D17        | =ROUND(C17*50%,0) |
|      53 | 1.3 NSFR |     16 | Value    | D18        | =ROUND(C18*50%,0) |
|      54 | 1.3 NSFR |     17 | Value    | D19        | =ROUND(C19*50%,0) |
|      55 | 1.3 NSFR |     18 | Value    | D20        | =ROUND(C20*50%,0) |
|   Check | Sheet    |   Item | Column   | Cell Ref   | Excel              |
|      56 | 1.3 NSFR |     19 | Value    | D21        | =ROUND(C21*65%,0)  |
|      57 | 1.3 NSFR |     20 | Value    | D22        | =ROUND(C22*65%,0)  |
|      58 | 1.3 NSFR |     21 | Value    | D23        | =ROUND(C23*85%,0)  |
|      59 | 1.3 NSFR |     22 | Value    | D24        | =ROUND(C24*85%,0)  |
|      60 | 1.3 NSFR |     23 | Value    | D25        | =ROUND(C25*85%,0)  |
|      61 | 1.3 NSFR |     24 | Value    | D26        | =ROUND(C26*100%,0) |
|      62 | 1.3 NSFR |     25 | Value    | D27        | =ROUND(C27*100%,0) |
|      63 | 1.3 NSFR |     26 | Value    | D28        | =ROUND(C28*100%,0) |
|      64 | 1.3 NSFR |     27 | Value    | D29        | =SUM(D13:D28)      |
|      65 | 1.3 NSFR |     28 | Value    | D30        | =ROUND(C30*5%,0)   |
|      66 | 1.3 NSFR |     32 | Value    | D34        | =D30               |
|      67 | 1.3 NSFR |     33 | Value    | D35        | =D29+D34           |
|      68 | 1.3 NSFR |     34 | Value    | D36        | =ROUND(D10/D35,3)  |