
## Guidance Note

## Validation and verification of the '9.7 AIRB Detail' Sheet

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
|       1 | 9.7 AIRB Detail | AP.1   | Amount             | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 9.7 AIRB Detail | AP.1   | RWA (AIRB)         | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 9.7 AIRB Detail | AP.1   | RWA (Standardised) | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 9.7 AIRB Detail | AP.2   | Amount             | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 9.7 AIRB Detail | AP.2   | RWA (AIRB)         | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 9.7 AIRB Detail | AP.2   | RWA (Standardised) | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 9.7 AIRB Detail | AP.3   | Amount             | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 9.7 AIRB Detail | AP.3   | RWA (AIRB)         | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 9.7 AIRB Detail | AP.3   | RWA (Standardised) | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 9.7 AIRB Detail | AP.4   | Amount             | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 9.7 AIRB Detail | AP.4   | RWA (AIRB)         | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 9.7 AIRB Detail | AP.4   | RWA (Standardised) | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 9.7 AIRB Detail | AP.5   | Amount             | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 9.7 AIRB Detail | AP.5   | RWA (AIRB)         | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      15 | 9.7 AIRB Detail | AP.5   | RWA (Standardised) | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 9.7 AIRB Detail | AP.6   | Amount             | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 9.7 AIRB Detail | AP.6   | RWA (AIRB)         | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 9.7 AIRB Detail | AP.6   | RWA (Standardised) | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 9.7 AIRB Detail | AP.7   | Amount             | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 9.7 AIRB Detail | AP.7   | RWA (AIRB)         | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 9.7 AIRB Detail | AP.7   | RWA (Standardised) | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 9.7 AIRB Detail | AP.8   | Amount             | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 9.7 AIRB Detail | AP.8   | RWA (AIRB)         | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 9.7 AIRB Detail | AP.8   | RWA (Standardised) | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 9.7 AIRB Detail | AP.9   | Amount             | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 9.7 AIRB Detail | AP.9   | RWA (AIRB)         | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 9.7 AIRB Detail | AP.9   | RWA (Standardised) | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 9.7 AIRB Detail | AP.10  | Amount             | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 9.7 AIRB Detail | AP.10  | RWA (AIRB)         | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 9.7 AIRB Detail | AP.10  | RWA (Standardised) | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 9.7 AIRB Detail | AP.11  | Amount             | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      32 | 9.7 AIRB Detail | AP.11  | RWA (AIRB)         | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 9.7 AIRB Detail | AP.11  | RWA (Standardised) | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 9.7 AIRB Detail | AP.12  | Amount             | D14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 9.7 AIRB Detail | AP.12  | RWA (AIRB)         | E14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 9.7 AIRB Detail | AP.12  | RWA (Standardised) | F14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 9.7 AIRB Detail | AP.13  | Amount             | D15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 9.7 AIRB Detail | AP.13  | RWA (AIRB)         | E15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 9.7 AIRB Detail | AP.13  | RWA (Standardised) | F15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 9.7 AIRB Detail | AP.14  | Amount             | D16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 9.7 AIRB Detail | AP.14  | RWA (AIRB)         | E16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 9.7 AIRB Detail | AP.14  | RWA (Standardised) | F16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 9.7 AIRB Detail | AP.15  | Amount             | D17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 9.7 AIRB Detail | AP.15  | RWA (AIRB)         | E17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 9.7 AIRB Detail | AP.15  | RWA (Standardised) | F17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 9.7 AIRB Detail | AP.16  | Amount             | D18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 9.7 AIRB Detail | AP.16  | RWA (AIRB)         | E18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 9.7 AIRB Detail | AP.16  | RWA (Standardised) | F18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      49 | 9.7 AIRB Detail | AP.17  | Amount             | D19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 9.7 AIRB Detail | AP.17  | RWA (AIRB)         | E19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 9.7 AIRB Detail | AP.17  | RWA (Standardised) | F19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 9.7 AIRB Detail | AP.18  | Amount             | D20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 9.7 AIRB Detail | AP.18  | RWA (AIRB)         | E20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 9.7 AIRB Detail | AP.18  | RWA (Standardised) | F20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 9.7 AIRB Detail | AP.19  | Amount             | D21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 9.7 AIRB Detail | AP.19  | RWA (AIRB)         | E21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 9.7 AIRB Detail | AP.19  | RWA (Standardised) | F21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 9.7 AIRB Detail | AP.20  | Amount             | D22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 9.7 AIRB Detail | AP.20  | RWA (AIRB)         | E22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 9.7 AIRB Detail | AP.20  | RWA (Standardised) | F22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 9.7 AIRB Detail | AP.21  | Amount             | D23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 9.7 AIRB Detail | AP.21  | RWA (AIRB)         | E23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 9.7 AIRB Detail | AP.21  | RWA (Standardised) | F23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 9.7 AIRB Detail | AP.22  | Amount             | D24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 9.7 AIRB Detail | AP.22  | RWA (AIRB)         | E24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet           | Item   | Column             | Cell Ref   | Validation Message                                                         |
|      66 | 9.7 AIRB Detail | AP.22  | RWA (Standardised) | F24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 9.7 AIRB Detail | AP.23  | Amount             | D25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 9.7 AIRB Detail | AP.23  | RWA (AIRB)         | E25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 9.7 AIRB Detail | AP.23  | RWA (Standardised) | F25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 9.7 AIRB Detail | AP.24  | Amount             | D26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 9.7 AIRB Detail | AP.24  | RWA (AIRB)         | E26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 9.7 AIRB Detail | AP.24  | RWA (Standardised) | F26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 9.7 AIRB Detail | AP.25  | Amount             | D27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 9.7 AIRB Detail | AP.25  | RWA (AIRB)         | E27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 9.7 AIRB Detail | AP.25  | RWA (Standardised) | F27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 9.7 AIRB Detail | AP.26  | Amount             | D28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 9.7 AIRB Detail | AP.26  | RWA (AIRB)         | E28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 9.7 AIRB Detail | AP.26  | RWA (Standardised) | F28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |