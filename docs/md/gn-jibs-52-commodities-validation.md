
## Guidance Note

## Validation and verification of the '5.2 Commodities' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018. Revised February 2019 to correct the 'Excel' column for Check 45 (Cell G8)

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

|   Check | Sheet           | Item   | Column      | Cell Ref   | Validation Message                                                         |
|---------|-----------------|--------|-------------|------------|----------------------------------------------------------------------------|
|       1 | 5.2 Commodities | A.1    | Commodity   | C3         | Must be blank                                                              |
|       2 | 5.2 Commodities | A.1    | Gross Long  | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 5.2 Commodities | A.1    | Gross Short | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 5.2 Commodities | A.2    | Commodity   | C4         | Must be blank                                                              |
|       5 | 5.2 Commodities | A.2    | Gross Long  | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 5.2 Commodities | A.2    | Gross Short | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 5.2 Commodities | A.3    | Commodity   | C5         | Must be blank                                                              |
|       8 | 5.2 Commodities | A.3    | Gross Long  | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 5.2 Commodities | A.3    | Gross Short | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 5.2 Commodities | A.4    | Commodity   | C6         | Must be blank                                                              |
|      11 | 5.2 Commodities | A.4    | Gross Long  | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 5.2 Commodities | A.4    | Gross Short | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 5.2 Commodities | A.0    | Commodity   | C7         | Must be blank                                                              |
|      14 | 5.2 Commodities | B.0    | Commodity   | C8         | Must be blank                                                              |
|   Check | Sheet           | Item   | Column       | Cell Ref   | Validation Message                                                         |
|      15 | 5.2 Commodities | B.0    | Gross Long   | D8         | Must be blank                                                              |
|      16 | 5.2 Commodities | B.0    | Gross Short  | E8         | Must be blank                                                              |
|      17 | 5.2 Commodities | B.0    | Net Position | F8         | Must be blank                                                              |
|      18 | 5.2 Commodities | C.1    | Commodity    | C9         | Must be text, no more than 50 Characters                                   |
|      19 | 5.2 Commodities | C.1    | Gross Long   | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 5.2 Commodities | C.1    | Gross Short  | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 5.2 Commodities | C.2    | Commodity    | C10        | Must be text, no more than 50 Characters                                   |
|      22 | 5.2 Commodities | C.2    | Gross Long   | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 5.2 Commodities | C.2    | Gross Short  | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 5.2 Commodities | C.3    | Commodity    | C11        | Must be text, no more than 50 Characters                                   |
|      25 | 5.2 Commodities | C.3    | Gross Long   | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 5.2 Commodities | C.3    | Gross Short  | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 5.2 Commodities | C.4    | Commodity    | C12        | Must be text, no more than 50 Characters                                   |
|      28 | 5.2 Commodities | C.4    | Gross Long   | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 5.2 Commodities | C.4    | Gross Short  | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 5.2 Commodities | C.5    | Commodity    | C13        | Must be text, no more than 50 Characters                                   |
|      31 | 5.2 Commodities | C.5    | Gross Long   | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 5.2 Commodities | C.5    | Gross Short  | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

| Check   | Sheet           | Item   | Column              | Cell  Ref   | Excel                                             |
|---------|-----------------|--------|---------------------|-------------|---------------------------------------------------|
| 33      | 5.2 Commodities | A.1    | Net Position        | F3          | = D3 - E3                                         |
| 34      | 5.2 Commodities | A.1    | Simplified Approach | G3          | = ROUND( 15% * ABS( F3 ) + 3% * ( D3 + E3 ) , 0 ) |
| 35      | 5.2 Commodities | A.2    | Net Position        | F4          | = D4 - E4                                         |
| 36      | 5.2 Commodities | A.2    | Simplified Approach | G4          | = ROUND( 15% * ABS( F4 ) + 3% * ( D4 + E4 ) , 0 ) |
| 37      | 5.2 Commodities | A.3    | Net Position        | F5          | = D5 - E5                                         |
| 38      | 5.2 Commodities | A.3    | Simplified Approach | G5          | = ROUND( 15% * ABS( F5 ) + 3% * ( D5 + E5 ) , 0 ) |
| 39      | 5.2 Commodities | A.4    | Net Position        | F6          | = D6 - E6                                         |
| 40      | 5.2 Commodities | A.4    | Simplified Approach | G6          | = ROUND( 15% * ABS( F6 ) + 3% * ( D6+E6 ) , 0 )   |
| 41      | 5.2 Commodities | A.0    | Gross Long          | D7          | =SUM(D3:D6)                                       |
| 42      | 5.2 Commodities | A.0    | Gross Short         | E7          | =SUM(E3:E6)                                       |
| 43      | 5.2 Commodities | A.0    | Net Position        | F7          | = SUM( F3:F6 )                                    |
| 44      | 5.2 Commodities | A.0    | Simplified Approach | G7          | = SUM( G3:G6 )                                    |
| 45 i    | 5.2 Commodities | B.0    | Simplified Approach | G8          | =ROUND(12.5*G7,0)                                 |
| 46      | 5.2 Commodities | C.1    | Net Position        | F9          | = D9 - E9                                         |
|   Check | Sheet           | Item   | Column              | Cell  Ref   | Excel                                                |
|      47 | 5.2 Commodities | C.1    | Simplified Approach | G9          | = ROUND( 15% * ABS( F9 ) +3% * ( D9 + E9 ) , 0 )     |
|      48 | 5.2 Commodities | C.2    | Net Position        | F10         | = D10 - E10                                          |
|      49 | 5.2 Commodities | C.2    | Simplified Approach | G10         | = ROUND( 15% * ABS( F10 ) + 3% * ( D10 + E10 ) , 0 ) |
|      50 | 5.2 Commodities | C.3    | Net Position        | F11         | = D11 -E11                                           |
|      51 | 5.2 Commodities | C.3    | Simplified Approach | G11         | = ROUND( 15% * ABS( F11 ) +3% * ( D11 + E11 ) , 0 )  |
|      52 | 5.2 Commodities | C.4    | Net Position        | F12         | = D12 - E12                                          |
|      53 | 5.2 Commodities | C.4    | Simplified Approach | G12         | = ROUND( 15% * ABS( F12 ) + 3% * ( D12 + E12 ) , 0 ) |
|      54 | 5.2 Commodities | C.5    | Net Position        | F13         | =D13-E13                                             |
|      55 | 5.2 Commodities | C.5    | Simplified Approach | G13         | = ROUND( 15% * ABS( F13 ) + 3% * ( D13 + E13 ) , 0 ) |

i  'Excel' column revised February 2019, to correctly reflect the formula in the Prudential Return template