
## Guidance Note

## Validation and verification of the '9.6 FIRB Detail' Sheet

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

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook).

|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|---------|-----------------|--------|--------------------|------------|----------------------------------------------------------------------------|
|       1 | 9.6 FIRB Detail | FP.1   | Amount             | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 9.6 FIRB Detail | FP.1   | RWA (FIRB)         | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 9.6 FIRB Detail | FP.1   | RWA (Standardised) | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 9.6 FIRB Detail | FP.2   | Amount             | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 9.6 FIRB Detail | FP.2   | RWA (FIRB)         | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 9.6 FIRB Detail | FP.2   | RWA (Standardised) | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 9.6 FIRB Detail | FP.3   | Amount             | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 9.6 FIRB Detail | FP.3   | RWA (FIRB)         | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 9.6 FIRB Detail | FP.3   | RWA (Standardised) | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 9.6 FIRB Detail | FP.4   | Amount             | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 9.6 FIRB Detail | FP.4   | RWA (FIRB)         | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 9.6 FIRB Detail | FP.4   | RWA (Standardised) | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 9.6 FIRB Detail | FP.5   | Amount             | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 9.6 FIRB Detail | FP.5   | RWA (FIRB)         | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      15 | 9.6 FIRB Detail | FP.5   | RWA (Standardised) | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 9.6 FIRB Detail | FP.6   | Amount             | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 9.6 FIRB Detail | FP.6   | RWA (FIRB)         | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 9.6 FIRB Detail | FP.6   | RWA (Standardised) | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 9.6 FIRB Detail | FP.7   | Amount             | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 9.6 FIRB Detail | FP.7   | RWA (FIRB)         | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 9.6 FIRB Detail | FP.7   | RWA (Standardised) | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 9.6 FIRB Detail | FP.8   | Amount             | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 9.6 FIRB Detail | FP.8   | RWA (FIRB)         | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 9.6 FIRB Detail | FP.8   | RWA (Standardised) | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 9.6 FIRB Detail | FP.9   | Amount             | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 9.6 FIRB Detail | FP.9   | RWA (FIRB)         | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 9.6 FIRB Detail | FP.9   | RWA (Standardised) | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 9.6 FIRB Detail | FP.10  | Amount             | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 9.6 FIRB Detail | FP.10  | RWA (FIRB)         | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 9.6 FIRB Detail | FP.10  | RWA (Standardised) | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 9.6 FIRB Detail | FP.11  | Amount             | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      32 | 9.6 FIRB Detail | FP.11  | RWA (FIRB)         | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 9.6 FIRB Detail | FP.11  | RWA (Standardised) | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 9.6 FIRB Detail | FP.12  | Amount             | D14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 9.6 FIRB Detail | FP.12  | RWA (FIRB)         | E14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 9.6 FIRB Detail | FP.12  | RWA (Standardised) | F14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 9.6 FIRB Detail | FP.13  | Amount             | D15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 9.6 FIRB Detail | FP.13  | RWA (FIRB)         | E15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 9.6 FIRB Detail | FP.13  | RWA (Standardised) | F15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 9.6 FIRB Detail | FP.14  | Amount             | D16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 9.6 FIRB Detail | FP.14  | RWA (FIRB)         | E16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 9.6 FIRB Detail | FP.14  | RWA (Standardised) | F16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 9.6 FIRB Detail | FP.15  | Amount             | D17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 9.6 FIRB Detail | FP.15  | RWA (FIRB)         | E17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 9.6 FIRB Detail | FP.15  | RWA (Standardised) | F17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 9.6 FIRB Detail | FP.16  | Amount             | D18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 9.6 FIRB Detail | FP.16  | RWA (FIRB)         | E18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 9.6 FIRB Detail | FP.16  | RWA (Standardised) | F18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      49 | 9.6 FIRB Detail | FP.17  | Amount             | D19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 9.6 FIRB Detail | FP.17  | RWA (FIRB)         | E19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 9.6 FIRB Detail | FP.17  | RWA (Standardised) | F19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 9.6 FIRB Detail | FP.18  | Amount             | D20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 9.6 FIRB Detail | FP.18  | RWA (FIRB)         | E20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 9.6 FIRB Detail | FP.18  | RWA (Standardised) | F20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 9.6 FIRB Detail | FP.19  | Amount             | D21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 9.6 FIRB Detail | FP.19  | RWA (FIRB)         | E21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 9.6 FIRB Detail | FP.19  | RWA (Standardised) | F21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 9.6 FIRB Detail | FP.20  | Amount             | D22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 9.6 FIRB Detail | FP.20  | RWA (FIRB)         | E22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 9.6 FIRB Detail | FP.20  | RWA (Standardised) | F22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 9.6 FIRB Detail | FP.21  | Amount             | D23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 9.6 FIRB Detail | FP.21  | RWA (FIRB)         | E23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 9.6 FIRB Detail | FP.21  | RWA (Standardised) | F23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 9.6 FIRB Detail | FP.22  | Amount             | D24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 9.6 FIRB Detail | FP.22  | RWA (FIRB)         | E24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      66 | 9.6 FIRB Detail | FP.22  | RWA (Standardised) | F24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 9.6 FIRB Detail | FP.23  | Amount             | D25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 9.6 FIRB Detail | FP.23  | RWA (FIRB)         | E25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 9.6 FIRB Detail | FP.23  | RWA (Standardised) | F25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 9.6 FIRB Detail | FP.24  | Amount             | D26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 9.6 FIRB Detail | FP.24  | RWA (FIRB)         | E26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 9.6 FIRB Detail | FP.24  | RWA (Standardised) | F26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 9.6 FIRB Detail | FP.25  | Amount             | D27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 9.6 FIRB Detail | FP.25  | RWA (FIRB)         | E27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 9.6 FIRB Detail | FP.25  | RWA (Standardised) | F27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 9.6 FIRB Detail | FP.26  | Amount             | D28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 9.6 FIRB Detail | FP.26  | RWA (FIRB)         | E28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 9.6 FIRB Detail | FP.26  | RWA (Standardised) | F28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |