
## Guidance Note

## Validation and verification of the '2.4 Off Balance Sheet' Sheet

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

|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|---------|-----------------------|--------|------------------------|------------|----------------------------------------------------------------------------|
|       1 | 2.4 Off Balance Sheet | A.1    | Standardised  Approach | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.4 Off Balance Sheet | A.1    | F-IRB                  | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.4 Off Balance Sheet | A.1    | A-IRB                  | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.4 Off Balance Sheet | A.1    | Trading Book           | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.4 Off Balance Sheet | A.2    | Standardised  Approach | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.4 Off Balance Sheet | A.2    | F-IRB                  | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.4 Off Balance Sheet | A.2    | A-IRB                  | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.4 Off Balance Sheet | A.2    | Trading Book           | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 2.4 Off Balance Sheet | A.3    | Standardised  Approach | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.4 Off Balance Sheet | A.3    | F-IRB                  | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.4 Off Balance Sheet | A.3    | A-IRB                  | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.4 Off Balance Sheet | A.3    | Trading Book           | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      13 | 2.4 Off Balance Sheet | A.4    | Standardised  Approach | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 2.4 Off Balance Sheet | A.4    | F-IRB                  | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 2.4 Off Balance Sheet | A.4    | A-IRB                  | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.4 Off Balance Sheet | A.4    | Trading Book           | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.4 Off Balance Sheet | A.5    | Standardised  Approach | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.4 Off Balance Sheet | A.5    | F-IRB                  | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.4 Off Balance Sheet | A.5    | A-IRB                  | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 2.4 Off Balance Sheet | A.5    | Trading Book           | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 2.4 Off Balance Sheet | A.6    | Standardised  Approach | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 2.4 Off Balance Sheet | A.6    | F-IRB                  | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 2.4 Off Balance Sheet | A.6    | A-IRB                  | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 2.4 Off Balance Sheet | A.6    | Trading Book           | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 2.4 Off Balance Sheet | A.7    | Standardised  Approach | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 2.4 Off Balance Sheet | A.7    | F-IRB                  | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 2.4 Off Balance Sheet | A.7    | A-IRB                  | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      28 | 2.4 Off Balance Sheet | A.7    | Trading Book           | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 2.4 Off Balance Sheet | A.8    | Standardised  Approach | C10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 2.4 Off Balance Sheet | A.8    | F-IRB                  | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 2.4 Off Balance Sheet | A.8    | A-IRB                  | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 2.4 Off Balance Sheet | A.8    | Trading Book           | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 2.4 Off Balance Sheet | A.9    | Standardised  Approach | C11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 2.4 Off Balance Sheet | A.9    | F-IRB                  | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 2.4 Off Balance Sheet | A.9    | A-IRB                  | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 2.4 Off Balance Sheet | A.9    | Trading Book           | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 2.4 Off Balance Sheet | A.10   | Standardised  Approach | C12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 2.4 Off Balance Sheet | A.10   | F-IRB                  | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 2.4 Off Balance Sheet | A.10   | A-IRB                  | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 2.4 Off Balance Sheet | A.10   | A-IRB                  | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 2.4 Off Balance Sheet | A.11   | Standardised  Approach | C13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 2.4 Off Balance Sheet | A.11   | F-IRB                  | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      43 | 2.4 Off Balance Sheet | A.11   | A-IRB                  | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 2.4 Off Balance Sheet | A.11   | Trading Book           | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 2.4 Off Balance Sheet | A.12   | Standardised  Approach | C14        | Must be blank                                                              |
|      46 | 2.4 Off Balance Sheet | A.12   | F-IRB                  | D14        | Must be blank                                                              |
|      47 | 2.4 Off Balance Sheet | A.12   | A-IRB                  | E14        | Must be blank                                                              |
|      48 | 2.4 Off Balance Sheet | A.12   | Trading Book           | F14        | Must be blank                                                              |
|      49 | 2.4 Off Balance Sheet | A.12   | Total                  | G14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 2.4 Off Balance Sheet | A.13   | Standardised  Approach | C15        | Must be blank                                                              |
|      51 | 2.4 Off Balance Sheet | A.13   | F-IRB                  | D15        | Must be blank                                                              |
|      52 | 2.4 Off Balance Sheet | A.13   | A-IRB                  | E15        | Must be blank                                                              |
|      53 | 2.4 Off Balance Sheet | A.13   | Trading Book           | F15        | Must be blank                                                              |
|      54 | 2.4 Off Balance Sheet | A.13   | Total                  | G15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 2.4 Off Balance Sheet | A.14   | Standardised  Approach | C16        | Must be blank                                                              |
|      56 | 2.4 Off Balance Sheet | A.14   | F-IRB                  | D16        | Must be blank                                                              |
|      57 | 2.4 Off Balance Sheet | A.14   | A-IRB                  | E16        | Must be blank                                                              |
|      58 | 2.4 Off Balance Sheet | A.14   | Trading Book           | F16        | Must be blank                                                              |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      59 | 2.4 Off Balance Sheet | A.14   | Total                  | G16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 2.4 Off Balance Sheet | B.1    | Standardised  Approach | C18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 2.4 Off Balance Sheet | B.1    | F-IRB                  | D18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 2.4 Off Balance Sheet | B.1    | A-IRB                  | E18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 2.4 Off Balance Sheet | B.1    | Trading Book           | F18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 2.4 Off Balance Sheet | B.2    | Standardised  Approach | C19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 2.4 Off Balance Sheet | B.2    | F-IRB                  | D19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 2.4 Off Balance Sheet | B.2    | A-IRB                  | E19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 2.4 Off Balance Sheet | B.2    | Trading Book           | F19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 2.4 Off Balance Sheet | B.3    | Standardised  Approach | C20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 2.4 Off Balance Sheet | B.3    | F-IRB                  | D20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 2.4 Off Balance Sheet | B.3    | A-IRB                  | E20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 2.4 Off Balance Sheet | B.3    | Trading Book           | F20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 2.4 Off Balance Sheet | B.4    | Standardised  Approach | C21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 2.4 Off Balance Sheet | B.4    | F-IRB                  | D21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      74 | 2.4 Off Balance Sheet | B.4    | A-IRB                  | E21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 2.4 Off Balance Sheet | B.4    | Trading Book           | F21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 2.4 Off Balance Sheet | B.5    | Standardised  Approach | C22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 2.4 Off Balance Sheet | B.5    | F-IRB                  | D22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 2.4 Off Balance Sheet | B.5    | A-IRB                  | E22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 2.4 Off Balance Sheet | B.5    | Trading Book           | F22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 2.4 Off Balance Sheet | C.1    | Standardised  Approach | C24        | Must be blank                                                              |
|      81 | 2.4 Off Balance Sheet | C.1    | F-IRB                  | D24        | Must be blank                                                              |
|      82 | 2.4 Off Balance Sheet | C.1    | A-IRB                  | E24        | Must be blank                                                              |
|      83 | 2.4 Off Balance Sheet | C.1    | Trading Book           | F24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 2.4 Off Balance Sheet | C.2    | Standardised  Approach | C25        | Must be blank                                                              |
|      85 | 2.4 Off Balance Sheet | C.2    | F-IRB                  | D25        | Must be blank                                                              |
|      86 | 2.4 Off Balance Sheet | C.2    | A-IRB                  | E25        | Must be blank                                                              |
|      87 | 2.4 Off Balance Sheet | C.2    | Trading Book           | F25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 2.4 Off Balance Sheet | C.0    | Standardised  Approach | C26        | Must be blank                                                              |
|   Check | Sheet                 | Item   | Column                 | Cell Ref   | Validation Message                                                         |
|      89 | 2.4 Off Balance Sheet | C.0    | F-IRB                  | D26        | Must be blank                                                              |
|      90 | 2.4 Off Balance Sheet | C.0    | A-IRB                  | E26        | Must be blank                                                              |
|      91 | 2.4 Off Balance Sheet | D.0    | Standardised  Approach | C27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 2.4 Off Balance Sheet | D.0    | F-IRB                  | D27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 2.4 Off Balance Sheet | D.0    | A-IRB                  | E27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 2.4 Off Balance Sheet | D.0    | Trading Book           | F27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                 | Item   | Column                 | Cell  Ref   | Excel         |
|---------|-----------------------|--------|------------------------|-------------|---------------|
|      95 | 2.4 Off Balance Sheet | A.1    | Total                  | G3          | =SUM(C3:F3)   |
|      96 | 2.4 Off Balance Sheet | A.2    | Total                  | G4          | =SUM(C4:F4)   |
|      97 | 2.4 Off Balance Sheet | A.3    | Total                  | G5          | =SUM(C5:F5)   |
|      98 | 2.4 Off Balance Sheet | A.4    | Total                  | G6          | =SUM(C6:F6)   |
|      99 | 2.4 Off Balance Sheet | A.5    | Total                  | G7          | =SUM(C7:F7)   |
|     100 | 2.4 Off Balance Sheet | A.6    | Total                  | G8          | =SUM(C8:F8)   |
|     101 | 2.4 Off Balance Sheet | A.7    | Total                  | G9          | =SUM(C9:F9)   |
|     102 | 2.4 Off Balance Sheet | A.8    | Total                  | G10         | =SUM(C10:F10) |
|     103 | 2.4 Off Balance Sheet | A.9    | Total                  | G11         | =SUM(C11:F11) |
|     104 | 2.4 Off Balance Sheet | A.10   | Total                  | G12         | =SUM(C12:F12) |
|     105 | 2.4 Off Balance Sheet | A.11   | Total                  | G13         | =SUM(C13:F13) |
|     106 | 2.4 Off Balance Sheet | A.0    | Standardised  Approach | C17         | =SUM(C3:C13)  |
|     107 | 2.4 Off Balance Sheet | A.0    | F-IRB                  | D17         | =SUM(D3:D13)  |
|   Check | Sheet                 | Item   | Column                 | Cell  Ref   | Excel         |
|     108 | 2.4 Off Balance Sheet | A.0    | A-IRB                  | E17         | =SUM(E3:E13)  |
|     109 | 2.4 Off Balance Sheet | A.0    | Trading Book           | F17         | =SUM(F3:F13)  |
|     110 | 2.4 Off Balance Sheet | A.0    | Total                  | G17         | =SUM(G3:G16)  |
|     111 | 2.4 Off Balance Sheet | B.1    | Total                  | G18         | =SUM(C18:F18) |
|     112 | 2.4 Off Balance Sheet | B.2    | Total                  | G19         | =SUM(C19:F19) |
|     113 | 2.4 Off Balance Sheet | B.3    | Total                  | G20         | =SUM(C20:F20) |
|     114 | 2.4 Off Balance Sheet | B.4    | Total                  | G21         | =SUM(C21:F21) |
|     115 | 2.4 Off Balance Sheet | B.5    | Total                  | G22         | =SUM(C22:F22) |
|     116 | 2.4 Off Balance Sheet | B.0    | Standardised  Approach | C23         | =SUM(C18:C22) |
|     117 | 2.4 Off Balance Sheet | B.0    | F-IRB                  | D23         | =SUM(D18:D22) |
|     118 | 2.4 Off Balance Sheet | B.0    | A-IRB                  | E23         | =SUM(E18:E22) |
|     119 | 2.4 Off Balance Sheet | B.0    | Trading Book           | F23         | =SUM(F18:F22) |
|     120 | 2.4 Off Balance Sheet | B.0    | Total                  | G23         | =SUM(G18:G22) |
|     121 | 2.4 Off Balance Sheet | C.1    | Total                  | G24         | =F24          |
|     122 | 2.4 Off Balance Sheet | C.2    | Total                  | G25         | =F25          |
|     123 | 2.4 Off Balance Sheet | C.0    | Trading Book           | F26         | =SUM(F24:F25) |
|   Check | Sheet                 | Item   | Column                 | Cell  Ref   | Excel            |
|     124 | 2.4 Off Balance Sheet | C.0    | Total                  | G26         | =SUM(G24:G25)    |
|     125 | 2.4 Off Balance Sheet | D.0    | Total                  | G27         | =SUM(C27:F27)    |
|     126 | 2.4 Off Balance Sheet | E.0    | Standardised  Approach | C28         | =C17+C23+C27     |
|     127 | 2.4 Off Balance Sheet | E.0    | F-IRB                  | D28         | =D17+D23+D27     |
|     128 | 2.4 Off Balance Sheet | E.0    | A-IRB                  | E28         | =E17+E23+E27     |
|     129 | 2.4 Off Balance Sheet | E.0    | Trading Book           | F28         | =F17+F23+F26+F27 |
|     130 | 2.4 Off Balance Sheet | E.0    | Total                  | G28         | =G17+G23+G26+G27 |

## 4 Logical checks

- 4.1 Checks that the data entered is not inconsistent. Fails are highlighted in

in the template.

|   Check | Sheet                 | Sum A (Excel)                                                                                            | Sum B (Excel)                                                                                                                  | Check          |
|---------|-----------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|----------------|
|     134 | 2.4 Off Balance Sheet | =$G$15 + '2.1 BS Assets'!$G$28 + '2.1  BS Assets'!$G$42 + '2.1 BS  Assets'!$G$53 + '2.1 BS Assets'!$G$54 | = '6.1 Capital Adequacy'!$C$18 + '6.1  Capital Adequacy'!$C$19 + '6.1 Capital  Adequacy'!$C$77 + '6.1 Capital  Adequacy'!$C$81 | A must equal B |