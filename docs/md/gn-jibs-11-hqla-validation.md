
## Guidance Note

## Validation and verification of the '1.1 HQLA' Sheet

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

|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|---------|----------|--------|-------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 1.1 HQLA | L1.1   | Rehypothecated Holdings | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 1.1 HQLA | L1.1   | Realisable Amount       | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|       3 | 1.1 HQLA | L1.1   | Adjusted Amount         | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 1.1 HQLA | L1.1   | Haircut Amount          | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 1.1 HQLA | L1.2   | Rehypothecated Holdings | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 1.1 HQLA | L1.2   | Realisable Amount       | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 1.1 HQLA | L1.2   | Adjusted Amount         | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 1.1 HQLA | L1.2   | Haircut Amount          | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 1.1 HQLA | L1.3   | Unencumbered Holdings   | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 1.1 HQLA | L1.3   | Rehypothecated Holdings | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 1.1 HQLA | L1.3   | Realisable Amount       | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 1.1 HQLA | L1.3   | Adjusted Amount         | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 1.1 HQLA | L1.3   | Haircut Amount          | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 1.1 HQLA | L1.4   | Unencumbered Holdings   | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 1.1 HQLA | L1.4   | Rehypothecated Holdings | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 1.1 HQLA | L1.4   | Realisable Amount       | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 1.1 HQLA | L1.4   | Adjusted Amount         | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 1.1 HQLA | L1.4   | Haircut Amount          | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 1.1 HQLA | L1.5   | Unencumbered Holdings   | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      20 | 1.1 HQLA | L1.5   | Rehypothecated Holdings | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 1.1 HQLA | L1.5   | Realisable Amount       | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 1.1 HQLA | L1.5   | Adjusted Amount         | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 1.1 HQLA | L1.5   | Haircut Amount          | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 1.1 HQLA | L1.6   | Unencumbered Holdings   | C8          | Must be blank                                                              |
|      25 | 1.1 HQLA | L1.6   | Rehypothecated Holdings | D8          | Must be blank                                                              |
|      26 | 1.1 HQLA | L1.6   | Realisable Amount       | E8          | Must be blank                                                              |
|      27 | 1.1 HQLA | L1.6   | Adjusted Amount         | F8          | Must be blank                                                              |
|      28 | 1.1 HQLA | 2A.1   | Unencumbered Holdings   | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 1.1 HQLA | 2A.1   | Rehypothecated Holdings | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 1.1 HQLA | 2A.1   | Realisable Amount       | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 1.1 HQLA | 2A.1   | Adjusted Amount         | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 1.1 HQLA | 2A.1   | Haircut Amount          | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 1.1 HQLA | 2A.2   | Unencumbered Holdings   | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 1.1 HQLA | 2A.2   | Rehypothecated Holdings | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 1.1 HQLA | 2A.2   | Realisable Amount       | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 1.1 HQLA | 2A.2   | Adjusted Amount         | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      37 | 1.1 HQLA | 2A.2   | Haircut Amount          | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 1.1 HQLA | 2A.3   | Unencumbered Holdings   | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 1.1 HQLA | 2A.3   | Rehypothecated Holdings | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 1.1 HQLA | 2A.3   | Realisable Amount       | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 1.1 HQLA | 2A.3   | Adjusted Amount         | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 1.1 HQLA | 2A.3   | Haircut Amount          | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 1.1 HQLA | 2A.4   | Unencumbered Holdings   | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 1.1 HQLA | 2A.4   | Rehypothecated Holdings | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 1.1 HQLA | 2A.4   | Realisable Amount       | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 1.1 HQLA | 2A.4   | Adjusted Amount         | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 1.1 HQLA | 2A.4   | Haircut Amount          | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 1.1 HQLA | 2A.5   | Unencumbered Holdings   | C13         | Must be blank                                                              |
|      49 | 1.1 HQLA | 2A.5   | Rehypothecated Holdings | D13         | Must be blank                                                              |
|      50 | 1.1 HQLA | 2A.5   | Realisable Amount       | E13         | Must be blank                                                              |
|      51 | 1.1 HQLA | 2A.5   | Adjusted Amount         | F13         | Must be blank                                                              |
|      52 | 1.1 HQLA | 2B.1   | Unencumbered Holdings   | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 1.1 HQLA | 2B.1   | Rehypothecated Holdings | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      54 | 1.1 HQLA | 2B.1   | Realisable Amount       | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 1.1 HQLA | 2B.1   | Adjusted Amount         | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 1.1 HQLA | 2B.1   | Haircut Amount          | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 1.1 HQLA | 2B.2   | Unencumbered Holdings   | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 1.1 HQLA | 2B.2   | Rehypothecated Holdings | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 1.1 HQLA | 2B.2   | Realisable Amount       | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 1.1 HQLA | 2B.2   | Adjusted Amount         | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 1.1 HQLA | 2B.2   | Haircut Amount          | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 1.1 HQLA | 2B.3   | Unencumbered Holdings   | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 1.1 HQLA | 2B.3   | Rehypothecated Holdings | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 1.1 HQLA | 2B.3   | Realisable Amount       | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 1.1 HQLA | 2B.3   | Adjusted Amount         | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 1.1 HQLA | 2B.3   | Haircut Amount          | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 1.1 HQLA | 2B.4   | Unencumbered Holdings   | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 1.1 HQLA | 2B.4   | Rehypothecated Holdings | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 1.1 HQLA | 2B.4   | Realisable Amount       | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 1.1 HQLA | 2B.4   | Adjusted Amount         | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      71 | 1.1 HQLA | 2B.4   | Haircut Amount          | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 1.1 HQLA | 2B.5   | Unencumbered Holdings   | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 1.1 HQLA | 2B.5   | Rehypothecated Holdings | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 1.1 HQLA | 2B.5   | Realisable Amount       | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 1.1 HQLA | 2B.5   | Adjusted Amount         | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 1.1 HQLA | 2B.5   | Haircut Amount          | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 1.1 HQLA | 2B.6   | Unencumbered Holdings   | C19         | Must be blank                                                              |
|      78 | 1.1 HQLA | 2B.6   | Rehypothecated Holdings | D19         | Must be blank                                                              |
|      79 | 1.1 HQLA | 2B.6   | Realisable Amount       | E19         | Must be blank                                                              |
|      80 | 1.1 HQLA | 2B.6   | Adjusted Amount         | F19         | Must be blank                                                              |
|      81 | 1.1 HQLA | LA.1   | Unencumbered Holdings   | C20         | Must be blank                                                              |
|      82 | 1.1 HQLA | LA.1   | Rehypothecated Holdings | D20         | Must be blank                                                              |
|      83 | 1.1 HQLA | LA.1   | Realisable Amount       | E20         | Must be blank                                                              |
|      84 | 1.1 HQLA | LA.1   | Adjusted Amount         | F20         | Must be blank                                                              |
|      85 | 1.1 HQLA | LA.1   | Haircut Amount          | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 1.1 HQLA | LA.2   | Unencumbered Holdings   | C21         | Must be blank                                                              |
|      87 | 1.1 HQLA | LA.2   | Rehypothecated Holdings | D21         | Must be blank                                                              |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      88 | 1.1 HQLA | LA.2   | Realisable Amount       | E21         | Must be blank                                                              |
|      89 | 1.1 HQLA | LA.2   | Adjusted Amount         | F21         | Must be blank                                                              |
|      90 | 1.1 HQLA | LA.2   | Haircut Amount          | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 1.1 HQLA | LA.3   | Unencumbered Holdings   | C22         | Must be blank                                                              |
|      92 | 1.1 HQLA | LA.3   | Rehypothecated Holdings | D22         | Must be blank                                                              |
|      93 | 1.1 HQLA | LA.3   | Realisable Amount       | E22         | Must be blank                                                              |
|      94 | 1.1 HQLA | LA.3   | Adjusted Amount         | F22         | Must be blank                                                              |
|      95 | 1.1 HQLA | LA.3   | Haircut Amount          | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 1.1 HQLA | LA.4   | Unencumbered Holdings   | C23         | Must be blank                                                              |
|      97 | 1.1 HQLA | LA.4   | Rehypothecated Holdings | D23         | Must be blank                                                              |
|      98 | 1.1 HQLA | LA.4   | Realisable Amount       | E23         | Must be blank                                                              |
|      99 | 1.1 HQLA | LA.4   | Adjusted Amount         | F23         | Must be blank                                                              |
|     100 | 1.1 HQLA | LA.5   | Unencumbered Holdings   | C24         | Must be blank                                                              |
|     101 | 1.1 HQLA | LA.5   | Rehypothecated Holdings | D24         | Must be blank                                                              |
|     102 | 1.1 HQLA | LA.5   | Realisable Amount       | E24         | Must be blank                                                              |
|     103 | 1.1 HQLA | LA.5   | Adjusted Amount         | F24         | Must be blank                                                              |
|     104 | 1.1 HQLA | LA.6   | Unencumbered Holdings   | C25         | Must be blank                                                              |
|   Check | Sheet    | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|     105 | 1.1 HQLA | LA.6   | Rehypothecated Holdings | D25         | Must be blank                                                              |
|     106 | 1.1 HQLA | LA.6   | Realisable Amount       | E25         | Must be blank                                                              |
|     107 | 1.1 HQLA | LA.6   | Adjusted Amount         | F25         | Must be blank                                                              |
|     108 | 1.1 HQLA | LA.6   | Haircut Amount          | G25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 1.1 HQLA | LA.7   | Unencumbered Holdings   | C26         | Must be blank                                                              |
|     110 | 1.1 HQLA | LA.7   | Rehypothecated Holdings | D26         | Must be blank                                                              |
|     111 | 1.1 HQLA | LA.7   | Realisable Amount       | E26         | Must be blank                                                              |
|     112 | 1.1 HQLA | LA.7   | Adjusted Amount         | F26         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet    | Item   | Column               | Cell  Ref   | Excel                                                                  |
|---------|----------|--------|----------------------|-------------|------------------------------------------------------------------------|
|     113 | 1.1 HQLA | L1.1   | Unencumbered Holding | C3          | = '2.1 BS Assets'!G3                                                   |
|     114 | 1.1 HQLA | L1.2   | Unencumbered Holding | C4          | = '2.1 BS Assets'!G34                                                  |
|     115 | 1.1 HQLA | L1.6   | Haircut Amount       | G8          | = SUM( G3:G7 )                                                         |
|     116 | 1.1 HQLA | 2A.5   | Haircut Amount       | G13         | = SUM( G9:G12 )                                                        |
|     117 | 1.1 HQLA | 2B.6   | Haircut Amount       | G19         | = SUM( G14:G18 )                                                       |
|     118 | 1.1 HQLA | LA.4   | Haircut Amount       | G23         | =ROUND( MAX( G22 - (15/85) * ( G20 + G21 ), G22 -(1/4) * G20, 0 ), 0 ) |
|     119 | 1.1 HQLA | LA.5   | Haircut Amount       | G24         | =ROUND( MAX( G21 + G22 - G23 - ( ( 2/3 ) * G20 ), 0), 0)               |
|     120 | 1.1 HQLA | LA.7   | Haircut Amount       | G26         | = G8 + G13 + G19 + G25 - G23 - G24                                     |