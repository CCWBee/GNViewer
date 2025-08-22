
## Guidance Note

## Validation and verification of the '2.1 BS Assets' Sheet

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

|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|---------|---------------|--------|-----------------------|------------|----------------------------------------------------------------------------|
|       1 | 2.1 BS Assets | A.1    | Standardised Approach | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.1 BS Assets | A.1    | F-IRB                 | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.1 BS Assets | A.1    | A-IRB                 | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.1 BS Assets | A.1    | Trading Book          | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.1 BS Assets | A.2    | Standardised Approach | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.1 BS Assets | A.2    | F-IRB                 | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.1 BS Assets | A.2    | A-IRB                 | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.1 BS Assets | A.2    | Trading Book          | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 2.1 BS Assets | A.3    | Standardised Approach | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.1 BS Assets | A.3    | F-IRB                 | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.1 BS Assets | A.3    | A-IRB                 | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.1 BS Assets | A.3    | Trading Book          | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 2.1 BS Assets | A.0    | Credit Portfolio      | H6         | Must be blank                                                              |
|      14 | 2.1 BS Assets | B.1    | Standardised Approach | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|      15 | 2.1 BS Assets | B.1    | F-IRB                 | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.1 BS Assets | B.1    | A-IRB                 | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.1 BS Assets | B.1    | Trading Book          | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.1 BS Assets | B.2    | Standardised Approach | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.1 BS Assets | B.2    | F-IRB                 | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 2.1 BS Assets | B.2    | A-IRB                 | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 2.1 BS Assets | B.2    | Trading Book          | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 2.1 BS Assets | B.3    | Standardised Approach | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 2.1 BS Assets | B.3    | F-IRB                 | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 2.1 BS Assets | B.3    | A-IRB                 | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 2.1 BS Assets | B.3    | Trading Book          | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 2.1 BS Assets | B.4    | Standardised Approach | C10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 2.1 BS Assets | B.4    | F-IRB                 | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 2.1 BS Assets | B.4    | A-IRB                 | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 2.1 BS Assets | B.4    | Trading Book          | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 2.1 BS Assets | B.0    | Credit Portfolio      | H11        | Must be blank                                                              |
|      31 | 2.1 BS Assets | C.1    | Standardised Approach | C12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|      32 | 2.1 BS Assets | C.1    | F-IRB                 | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 2.1 BS Assets | C.1    | A-IRB                 | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 2.1 BS Assets | C.1    | Trading Book          | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 2.1 BS Assets | C.2    | Standardised Approach | C13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 2.1 BS Assets | C.2    | F-IRB                 | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 2.1 BS Assets | C.2    | A-IRB                 | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 2.1 BS Assets | C.2    | Trading Book          | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 2.1 BS Assets | C.3.1  | Standardised Approach | C14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 2.1 BS Assets | C.3.1  | F-IRB                 | D14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 2.1 BS Assets | C.3.1  | A-IRB                 | E14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 2.1 BS Assets | C.3.1  | Trading Book          | F14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 2.1 BS Assets | C.3.2  | Standardised Approach | C15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 2.1 BS Assets | C.3.2  | F-IRB                 | D15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 2.1 BS Assets | C.3.2  | A-IRB                 | E15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 2.1 BS Assets | C.3.2  | Trading Book          | F15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 2.1 BS Assets | C.3.3  | Standardised Approach | C16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 2.1 BS Assets | C.3.3  | F-IRB                 | D16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|      49 | 2.1 BS Assets | C.3.3  | A-IRB                 | E16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 2.1 BS Assets | C.3.3  | Trading Book          | F16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 2.1 BS Assets | C.3.4  | Standardised Approach | C17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 2.1 BS Assets | C.3.4  | F-IRB                 | D17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 2.1 BS Assets | C.3.4  | A-IRB                 | E17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 2.1 BS Assets | C.3.4  | Trading Book          | F17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 2.1 BS Assets | C.3    | Credit Portfolio      | H18        | Must be blank                                                              |
|      56 | 2.1 BS Assets | C.4.1  | Standardised Approach | C19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 2.1 BS Assets | C.4.1  | F-IRB                 | D19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 2.1 BS Assets | C.4.1  | A-IRB                 | E19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 2.1 BS Assets | C.4.1  | Trading Book          | F19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 2.1 BS Assets | C.4.2  | Standardised Approach | C20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 2.1 BS Assets | C.4.2  | F-IRB                 | D20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 2.1 BS Assets | C.4.2  | A-IRB                 | E20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 2.1 BS Assets | C.4.2  | Trading Book          | F20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 2.1 BS Assets | C.4.3  | Standardised Approach | C21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 2.1 BS Assets | C.4.3  | F-IRB                 | D21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|      66 | 2.1 BS Assets | C.4.3  | A-IRB                 | E21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 2.1 BS Assets | C.4.3  | Trading Book          | F21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 2.1 BS Assets | C.4    | Credit Portfolio      | H22        | Must be blank                                                              |
|      69 | 2.1 BS Assets | C.5.1  | Standardised Approach | C23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 2.1 BS Assets | C.5.1  | F-IRB                 | D23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 2.1 BS Assets | C.5.1  | A-IRB                 | E23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 2.1 BS Assets | C.5.1  | Trading Book          | F23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 2.1 BS Assets | C.5.2  | Standardised Approach | C24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 2.1 BS Assets | C.5.2  | F-IRB                 | D24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 2.1 BS Assets | C.5.2  | A-IRB                 | E24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 2.1 BS Assets | C.5.2  | Trading Book          | F24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 2.1 BS Assets | C.5.3  | Standardised Approach | C25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 2.1 BS Assets | C.5.3  | F-IRB                 | D25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 2.1 BS Assets | C.5.3  | A-IRB                 | E25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 2.1 BS Assets | C.5.3  | Trading Book          | F25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 2.1 BS Assets | C.5.4  | Standardised Approach | C26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      82 | 2.1 BS Assets | C.5.4  | F-IRB                 | D26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|      83 | 2.1 BS Assets | C.5.4  | A-IRB                 | E26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 2.1 BS Assets | C.5.4  | Trading Book          | F26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 2.1 BS Assets | C.5.5  | Standardised Approach | C27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 2.1 BS Assets | C.5.5  | F-IRB                 | D27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 2.1 BS Assets | C.5.5  | A-IRB                 | E27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 2.1 BS Assets | C.5.5  | Trading Book          | F27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 2.1 BS Assets | C.5.6  | Standardised Approach | C28        | Must be blank                                                              |
|      90 | 2.1 BS Assets | C.5.6  | F-IRB                 | D28        | Must be blank                                                              |
|      91 | 2.1 BS Assets | C.5.6  | A-IRB                 | E28        | Must be blank                                                              |
|      92 | 2.1 BS Assets | C.5.6  | Trading Book          | F28        | Must be blank                                                              |
|      93 | 2.1 BS Assets | C.5.6  | Total                 | G28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 2.1 BS Assets | C.5.7  | Standardised Approach | C29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 2.1 BS Assets | C.5.7  | F-IRB                 | D29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 2.1 BS Assets | C.5.7  | A-IRB                 | E29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 2.1 BS Assets | C.5.7  | Trading Book          | F29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 2.1 BS Assets | C.5.8  | Standardised Approach | C30        | Must be blank                                                              |
|      99 | 2.1 BS Assets | C.5.8  | F-IRB                 | D30        | Must be blank                                                              |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     100 | 2.1 BS Assets | C.5.8  | A-IRB                 | E30        | Must be blank                                                              |
|     101 | 2.1 BS Assets | C.5.8  | Trading Book          | F30        | Must be blank                                                              |
|     102 | 2.1 BS Assets | C.5.8  | Total                 | G30        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 2.1 BS Assets | C.5    | Credit Portfolio      | H31        | Must be blank                                                              |
|     104 | 2.1 BS Assets | C.0    | Credit Portfolio      | H32        | Must be blank                                                              |
|     105 | 2.1 BS Assets | D.1    | Standardised Approach | C33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 2.1 BS Assets | D.1    | F-IRB                 | D33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 2.1 BS Assets | D.1    | A-IRB                 | E33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 2.1 BS Assets | D.1    | Trading Book          | F33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 2.1 BS Assets | D.2.1  | Standardised Approach | C34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 2.1 BS Assets | D.2.1  | F-IRB                 | D34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 2.1 BS Assets | D.2.1  | A-IRB                 | E34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 2.1 BS Assets | D.2.1  | Trading Book          | F34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 2.1 BS Assets | D.2.2  | Standardised Approach | C35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 2.1 BS Assets | D.2.2  | F-IRB                 | D35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 2.1 BS Assets | D.2.2  | A-IRB                 | E35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     116 | 2.1 BS Assets | D.2.2  | Trading Book          | F35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     117 | 2.1 BS Assets | D.2.3  | Standardised Approach | C36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 2.1 BS Assets | D.2.3  | F-IRB                 | D36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 2.1 BS Assets | D.2.3  | A-IRB                 | E36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 2.1 BS Assets | D.2.3  | Trading Book          | F36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 2.1 BS Assets | D.2    | Credit Portfolio      | H37        | Must be blank                                                              |
|     122 | 2.1 BS Assets | D.3    | Standardised Approach | C38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 2.1 BS Assets | D.3    | F-IRB                 | D38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 2.1 BS Assets | D.3    | A-IRB                 | E38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 2.1 BS Assets | D.3    | Trading Book          | F38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 2.1 BS Assets | D.4    | Standardised Approach | C39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 2.1 BS Assets | D.4    | F-IRB                 | D39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 2.1 BS Assets | D.4    | A-IRB                 | E39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 2.1 BS Assets | D.4    | Trading Book          | F39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     130 | 2.1 BS Assets | D.5    | Standardised Approach | C40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 2.1 BS Assets | D.5    | F-IRB                 | D40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     132 | 2.1 BS Assets | D.5    | A-IRB                 | E40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     133 | 2.1 BS Assets | D.5    | Trading Book          | F40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     134 | 2.1 BS Assets | D.6    | Standardised Approach | C41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 2.1 BS Assets | D.6    | F-IRB                 | D41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 2.1 BS Assets | D.6    | A-IRB                 | E41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 2.1 BS Assets | D.6    | Trading Book          | F41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 2.1 BS Assets | D.7    | Standardised Approach | C42        | Must be blank                                                              |
|     139 | 2.1 BS Assets | D.7    | F-IRB                 | D42        | Must be blank                                                              |
|     140 | 2.1 BS Assets | D.7    | A-IRB                 | E42        | Must be blank                                                              |
|     141 | 2.1 BS Assets | D.7    | Trading Book          | F42        | Must be blank                                                              |
|     142 | 2.1 BS Assets | D.7    | Total                 | G42        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 2.1 BS Assets | D.0    | Credit Portfolio      | H43        | Must be blank                                                              |
|     144 | 2.1 BS Assets | E.1    | Standardised Approach | C44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 2.1 BS Assets | E.1    | F-IRB                 | D44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     146 | 2.1 BS Assets | E.1    | A-IRB                 | E44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     147 | 2.1 BS Assets | E.1    | Trading Book          | F44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 2.1 BS Assets | E.2    | Standardised Approach | C45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     149 | 2.1 BS Assets | E.2    | F-IRB                 | D45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     150 | 2.1 BS Assets | E.2    | A-IRB                 | E45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     151 | 2.1 BS Assets | E.2    | Trading Book          | F45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     152 | 2.1 BS Assets | E.3    | Standardised Approach | C46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 2.1 BS Assets | E.3    | F-IRB                 | D46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     154 | 2.1 BS Assets | E.3    | A-IRB                 | E46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     155 | 2.1 BS Assets | E.3    | Trading Book          | F46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     156 | 2.1 BS Assets | E.4    | Standardised Approach | C47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 2.1 BS Assets | E.4    | F-IRB                 | D47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     158 | 2.1 BS Assets | E.4    | A-IRB                 | E47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     159 | 2.1 BS Assets | E.4    | Trading Book          | F47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 2.1 BS Assets | E.5    | Standardised Approach | C48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     161 | 2.1 BS Assets | E.5    | F-IRB                 | D48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 2.1 BS Assets | E.5    | A-IRB                 | E48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     163 | 2.1 BS Assets | E.5    | Trading Book          | F48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     164 | 2.1 BS Assets | E.6    | Standardised Approach | C49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 2.1 BS Assets | E.6    | F-IRB                 | D49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     166 | 2.1 BS Assets | E.6    | A-IRB                 | E49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     167 | 2.1 BS Assets | E.6    | Trading Book          | F49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     168 | 2.1 BS Assets | E.7    | Standardised Approach | C50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 2.1 BS Assets | E.7    | F-IRB                 | D50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     170 | 2.1 BS Assets | E.7    | A-IRB                 | E50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     171 | 2.1 BS Assets | E.7    | Trading Book          | F50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 2.1 BS Assets | E.8    | Standardised Approach | C51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     173 | 2.1 BS Assets | E.8    | F-IRB                 | D51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     174 | 2.1 BS Assets | E.8    | A-IRB                 | E51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 2.1 BS Assets | E.8    | Trading Book          | F51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     176 | 2.1 BS Assets | E.9    | Standardised Approach | C52        | Must be blank                                                              |
|     177 | 2.1 BS Assets | E.9    | F-IRB                 | D52        | Must be blank                                                              |
|     178 | 2.1 BS Assets | E.9    | A-IRB                 | E52        | Must be blank                                                              |
|     179 | 2.1 BS Assets | E.9    | Trading Book          | F52        | Must be blank                                                              |
|     180 | 2.1 BS Assets | E.9    | Total                 | G52        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     181 | 2.1 BS Assets | E.10   | Standardised Approach | C53        | Must be blank                                                              |
|     182 | 2.1 BS Assets | E.10   | F-IRB                 | D53        | Must be blank                                                              |
|     183 | 2.1 BS Assets | E.10   | A-IRB                 | E53        | Must be blank                                                              |
|     184 | 2.1 BS Assets | E.10   | Trading Book          | F53        | Must be blank                                                              |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     185 | 2.1 BS Assets | E.10   | Total                 | G53        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     186 | 2.1 BS Assets | E.11   | Standardised Approach | C54        | Must be blank                                                              |
|     187 | 2.1 BS Assets | E.11   | F-IRB                 | D54        | Must be blank                                                              |
|     188 | 2.1 BS Assets | E.11   | A-IRB                 | E54        | Must be blank                                                              |
|     189 | 2.1 BS Assets | E.11   | Trading Book          | F54        | Must be blank                                                              |
|     190 | 2.1 BS Assets | E.11   | Total                 | G54        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     191 | 2.1 BS Assets | E.12   | Standardised Approach | C55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     192 | 2.1 BS Assets | E.12   | F-IRB                 | D55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     193 | 2.1 BS Assets | E.12   | A-IRB                 | E55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     194 | 2.1 BS Assets | E.12   | Trading Book          | F55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     195 | 2.1 BS Assets | E.13   | Standardised Approach | C56        | Must be blank                                                              |
|     196 | 2.1 BS Assets | E.13   | F-IRB                 | D56        | Must be blank                                                              |
|     197 | 2.1 BS Assets | E.13   | A-IRB                 | E56        | Must be blank                                                              |
|     198 | 2.1 BS Assets | E.13   | Trading Book          | F56        | Must be blank                                                              |
|     199 | 2.1 BS Assets | E.13   | Total                 | G56        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     200 | 2.1 BS Assets | E.0    | Credit Portfolio      | H57        | Must be blank                                                              |
|     201 | 2.1 BS Assets | F.1    | Standardised Approach | C58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     202 | 2.1 BS Assets | F.1    | F-IRB                 | D58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     203 | 2.1 BS Assets | F.1    | A-IRB                 | E58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     204 | 2.1 BS Assets | F.1    | Trading Book          | F58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     205 | 2.1 BS Assets | F.2    | Standardised Approach | C59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     206 | 2.1 BS Assets | F.2    | F-IRB                 | D59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     207 | 2.1 BS Assets | F.2    | A-IRB                 | E59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     208 | 2.1 BS Assets | F.2    | Trading Book          | F59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     209 | 2.1 BS Assets | F.3    | Standardised Approach | C60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     210 | 2.1 BS Assets | F.3    | F-IRB                 | D60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     211 | 2.1 BS Assets | F.3    | A-IRB                 | E60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     212 | 2.1 BS Assets | F.3    | Trading Book          | F60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     213 | 2.1 BS Assets | F.4    | Standardised Approach | C61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     214 | 2.1 BS Assets | F.4    | F-IRB                 | D61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     215 | 2.1 BS Assets | F.4    | A-IRB                 | E61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     216 | 2.1 BS Assets | F.4    | Trading Book          | F61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     217 | 2.1 BS Assets | F.5    | Standardised Approach | C62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     218 | 2.1 BS Assets | F.5    | F-IRB                 | D62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     219 | 2.1 BS Assets | F.5    | A-IRB                 | E62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     220 | 2.1 BS Assets | F.5    | Trading Book          | F62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     221 | 2.1 BS Assets | F.6    | Standardised Approach | C63        | Must be blank                                                              |
|     222 | 2.1 BS Assets | F.6    | F-IRB                 | D63        | Must be blank                                                              |
|     223 | 2.1 BS Assets | F.6    | A-IRB                 | E63        | Must be blank                                                              |
|     224 | 2.1 BS Assets | F.6    | Trading Book          | F63        | Must be blank                                                              |
|     225 | 2.1 BS Assets | F.6    | Total                 | G63        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     226 | 2.1 BS Assets | F.7    | Standardised Approach | C64        | Must be blank                                                              |
|     227 | 2.1 BS Assets | F.7    | F-IRB                 | D64        | Must be blank                                                              |
|     228 | 2.1 BS Assets | F.7    | A-IRB                 | E64        | Must be blank                                                              |
|     229 | 2.1 BS Assets | F.7    | Trading Book          | F64        | Must be blank                                                              |
|     230 | 2.1 BS Assets | F.7    | Total                 | G64        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     231 | 2.1 BS Assets | F.8    | Standardised Approach | C65        | Must be blank                                                              |
|     232 | 2.1 BS Assets | F.8    | F-IRB                 | D65        | Must be blank                                                              |
|     233 | 2.1 BS Assets | F.8    | A-IRB                 | E65        | Must be blank                                                              |
|     234 | 2.1 BS Assets | F.8    | Trading Book          | F65        | Must be blank                                                              |
|     235 | 2.1 BS Assets | F.8    | Total                 | G65        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     236 | 2.1 BS Assets | F.9    | Standardised Approach | C66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     237 | 2.1 BS Assets | F.9    | F-IRB                 | D66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     238 | 2.1 BS Assets | F.9    | A-IRB                 | E66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     239 | 2.1 BS Assets | F.9    | Trading Book          | F66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     240 | 2.1 BS Assets | F.0    | Credit Portfolio      | H67        | Must be blank                                                              |
|     241 | 2.1 BS Assets | G.1    | Standardised Approach | C68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     242 | 2.1 BS Assets | G.1    | F-IRB                 | D68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     243 | 2.1 BS Assets | G.1    | A-IRB                 | E68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     244 | 2.1 BS Assets | G.1    | Trading Book          | F68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     245 | 2.1 BS Assets | G.2    | Standardised Approach | C69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     246 | 2.1 BS Assets | G.2    | F-IRB                 | D69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     247 | 2.1 BS Assets | G.2    | A-IRB                 | E69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     248 | 2.1 BS Assets | G.2    | Trading Book          | F69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     249 | 2.1 BS Assets | G.3    | Standardised Approach | C70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     250 | 2.1 BS Assets | G.3    | F-IRB                 | D70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     251 | 2.1 BS Assets | G.3    | A-IRB                 | E70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     252 | 2.1 BS Assets | G.3    | Trading Book          | F70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                | Cell Ref   | Validation Message                                                         |
|     253 | 2.1 BS Assets | G.4    | Standardised Approach | C71        | Must be blank                                                              |
|     254 | 2.1 BS Assets | G.4    | F-IRB                 | D71        | Must be blank                                                              |
|     255 | 2.1 BS Assets | G.4    | A-IRB                 | E71        | Must be blank                                                              |
|     256 | 2.1 BS Assets | G.4    | Trading Book          | F71        | Must be blank                                                              |
|     257 | 2.1 BS Assets | G.4    | Total                 | G71        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     258 | 2.1 BS Assets | G.5    | Standardised Approach | C72        | Must be blank                                                              |
|     259 | 2.1 BS Assets | G.5    | F-IRB                 | D72        | Must be blank                                                              |
|     260 | 2.1 BS Assets | G.5    | A-IRB                 | E72        | Must be blank                                                              |
|     261 | 2.1 BS Assets | G.5    | Trading Book          | F72        | Must be blank                                                              |
|     262 | 2.1 BS Assets | G.5    | Total                 | G72        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     263 | 2.1 BS Assets | G.0    | Credit Portfolio      | H73        | Must be blank                                                              |
|     264 | 2.1 BS Assets | H.0    | Credit Portfolio      | H74        | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel          |
|---------|---------------|--------|-----------------------|-------------|----------------|
|     265 | 2.1 BS Assets | A.1    | Total                 | G3          | = SUM( C3:F3 ) |
|     266 | 2.1 BS Assets | A.1    | Credit Portfolio      | H3          | F              |
|     267 | 2.1 BS Assets | A.2    | Total                 | G4          | = SUM( C4:F4 ) |
|     268 | 2.1 BS Assets | A.2    | Credit Portfolio      | H4          | F              |
|     269 | 2.1 BS Assets | A.3    | Total                 | G5          | = SUM( C5:F5 ) |
|     270 | 2.1 BS Assets | A.3    | Credit Portfolio      | H5          | F              |
|     271 | 2.1 BS Assets | A.0    | Standardised Approach | C6          | = SUM( C3:C5 ) |
|     272 | 2.1 BS Assets | A.0    | F-IRB                 | D6          | = SUM( D3:D5 ) |
|     273 | 2.1 BS Assets | A.0    | A-IRB                 | E6          | = SUM( E3:E5 ) |
|     274 | 2.1 BS Assets | A.0    | Trading Book          | F6          | = SUM( F3:F5 ) |
|     275 | 2.1 BS Assets | A.0    | Total                 | G6          | = SUM( G3:G5 ) |
|     276 | 2.1 BS Assets | B.1    | Total                 | G7          | = SUM( C7:F7 ) |
|     277 | 2.1 BS Assets | B.1    | Credit Portfolio      | H7          | D              |
|     278 | 2.1 BS Assets | B.2    | Total                 | G8          | = SUM( C8:F8 ) |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel            |
|     279 | 2.1 BS Assets | B.2    | Credit Portfolio      | H8          | D                |
|     280 | 2.1 BS Assets | B.3    | Total                 | G9          | = SUM( C9:F9 )   |
|     281 | 2.1 BS Assets | B.3    | Credit Portfolio      | H9          | D                |
|     282 | 2.1 BS Assets | B.4    | Total                 | G10         | = SUM( C10:F10 ) |
|     283 | 2.1 BS Assets | B.4    | Credit Portfolio      | H10         | D                |
|     284 | 2.1 BS Assets | B.0    | Standardised Approach | C11         | = SUM( C7:C10 )  |
|     285 | 2.1 BS Assets | B.0    | F-IRB                 | D11         | = SUM( D7:D10 )  |
|     286 | 2.1 BS Assets | B.0    | A-IRB                 | E11         | = SUM( E7:E10 )  |
|     287 | 2.1 BS Assets | B.0    | Trading Book          | F11         | = SUM( F7:F10 )  |
|     288 | 2.1 BS Assets | B.0    | Total                 | G11         | = SUM( G7:G10 )  |
|     289 | 2.1 BS Assets | C.1    | Total                 | G12         | =SUM(C12:F12)    |
|     290 | 2.1 BS Assets | C.1    | Credit Portfolio      | H12         | A                |
|     291 | 2.1 BS Assets | C.2    | Total                 | G13         | = SUM( C13:F13 ) |
|     292 | 2.1 BS Assets | C.2    | Credit Portfolio      | H13         | B                |
|     293 | 2.1 BS Assets | C.3.1  | Total                 | G14         | = SUM( C14:F14 ) |
|     294 | 2.1 BS Assets | C.3.1  | Credit Portfolio      | H14         | D                |
|     295 | 2.1 BS Assets | C.3.2  | Total                 | G15         | = SUM( C15:F15 ) |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel            |
|     296 | 2.1 BS Assets | C.3.2  | Credit Portfolio      | H15         | D                |
|     297 | 2.1 BS Assets | C.3.3  | Total                 | G16         | = SUM( C16:F16 ) |
|     298 | 2.1 BS Assets | C.3.3  | Credit Portfolio      | H16         | D                |
|     299 | 2.1 BS Assets | C.3.4  | Total                 | G17         | = SUM( C17:F17 ) |
|     300 | 2.1 BS Assets | C.3.4  | Credit Portfolio      | H17         | C                |
|     301 | 2.1 BS Assets | C.3    | Standardised Approach | C18         | = SUM( C14:C17 ) |
|     302 | 2.1 BS Assets | C.3    | F-IRB                 | D18         | = SUM( D14:D17 ) |
|     303 | 2.1 BS Assets | C.3    | A-IRB                 | E18         | = SUM( E14:E17 ) |
|     304 | 2.1 BS Assets | C.3    | Trading Book          | F18         | = SUM( F14:F17 ) |
|     305 | 2.1 BS Assets | C.3    | Total                 | G18         | = SUM( G14:G17 ) |
|     306 | 2.1 BS Assets | C.4.1  | Total                 | G19         | = SUM( C19:F19 ) |
|     307 | 2.1 BS Assets | C.4.1  | Credit Portfolio      | H19         | D                |
|     308 | 2.1 BS Assets | C.4.2  | Total                 | G20         | = SUM( C20:F20 ) |
|     309 | 2.1 BS Assets | C.4.2  | Credit Portfolio      | H20         | D                |
|     310 | 2.1 BS Assets | C.4.3  | Total                 | G21         | = SUM( C21:F21 ) |
|     311 | 2.1 BS Assets | C.4.3  | Credit Portfolio      | H21         | D                |
|     312 | 2.1 BS Assets | C.4    | Standardised Approach | C22         | = SUM( C19:C21 ) |
|   Check | Sheet         | Item   | Column           | Cell  Ref   | Excel            |
|     313 | 2.1 BS Assets | C.4    | F-IRB            | D22         | = SUM( D19:D21 ) |
|     314 | 2.1 BS Assets | C.4    | A-IRB            | E22         | = SUM( E19:E21 ) |
|     315 | 2.1 BS Assets | C.4    | Trading Book     | F22         | = SUM( F19:F21 ) |
|     316 | 2.1 BS Assets | C.4    | Total            | G22         | = SUM( G19:G21 ) |
|     317 | 2.1 BS Assets | C.5.1  | Total            | G23         | = SUM( C23:F23 ) |
|     318 | 2.1 BS Assets | C.5.1  | Credit Portfolio | H23         | C                |
|     319 | 2.1 BS Assets | C.5.2  | Total            | G24         | = SUM( C24:F24 ) |
|     320 | 2.1 BS Assets | C.5.2  | Credit Portfolio | H24         | C                |
|     321 | 2.1 BS Assets | C.5.3  | Total            | G25         | = SUM( C25:F25 ) |
|     322 | 2.1 BS Assets | C.5.3  | Credit Portfolio | H25         | E                |
|     323 | 2.1 BS Assets | C,5,4  | Total            | G26         | = SUM( C26:F26 ) |
|     324 | 2.1 BS Assets | C.5.4  | Credit Portfolio | H26         | A                |
|     325 | 2.1 BS Assets | C.5.5  | Total            | G27         | = SUM( C27:F27 ) |
|     326 | 2.1 BS Assets | C.5.5  | Credit Portfolio | H27         | B                |
|     327 | 2.1 BS Assets | C.5.6  | Credit Portfolio | H28         | K                |
|     328 | 2.1 BS Assets | C.5.7  | Total            | G29         | = SUM( C29:F29 ) |
|     329 | 2.1 BS Assets | C.5.7  | Credit Portfolio | H29         | L                |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel                        |
|     330 | 2.1 BS Assets | C.5.8  | Credit Portfolio      | H30         | K                            |
|     331 | 2.1 BS Assets | C.5    | Standardised Approach | C31         | = SUM( C23:C27,C29 )         |
|     332 | 2.1 BS Assets | C.5    | F-IRB                 | D31         | = SUM( D23:D27,D29 )         |
|     333 | 2.1 BS Assets | C.5    | A-IRB                 | E31         | = SUM( E23:E27,E29 )         |
|     334 | 2.1 BS Assets | C.5    | Trading Book          | F31         | = SUM( F23:F27,F29 )         |
|     335 | 2.1 BS Assets | C.5    | Total                 | G31         | = SUM( G23:G30 )             |
|     336 | 2.1 BS Assets | C.0    | Standardised Approach | C32         | = SUM( C12:C13,C18,C22,C31 ) |
|     337 | 2.1 BS Assets | C.0    | F-IRB                 | D32         | = SUM( D12:D13,D18,D22,D31 ) |
|     338 | 2.1 BS Assets | C.0    | A-IRB                 | E32         | = SUM( E12:E13,E18,E22,E31 ) |
|     339 | 2.1 BS Assets | C.0    | Trading Book          | F32         | = SUM( F12:F13,F18,F22,F31 ) |
|     340 | 2.1 BS Assets | C.0    | Total                 | G32         | = SUM( G12:G13,G18,G22,G31 ) |
|     341 | 2.1 BS Assets | D.1    | Total                 | G33         | = SUM( C33:F33 )             |
|     342 | 2.1 BS Assets | D.1    | Credit Portfolio      | H33         | C                            |
|     343 | 2.1 BS Assets | D.2.1  | Total                 | G34         | = SUM( C34:F34 )             |
|     344 | 2.1 BS Assets | D.2.1  | Credit Portfolio      | H34         | A                            |
|     345 | 2.1 BS Assets | D.2.2  | Total                 | G35         | = SUM( C35:F35 )             |
|     346 | 2.1 BS Assets | D.2.2  | Credit Portfolio      | H35         | A                            |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel                  |
|     347 | 2.1 BS Assets | D.2.3  | Total                 | G36         | = SUM( C36:F36 )       |
|     348 | 2.1 BS Assets | D.2.3  | Credit Portfolio      | H36         | A                      |
|     349 | 2.1 BS Assets | D.2    | Standardised Approach | C37         | = SUM( C34:C36 )       |
|     350 | 2.1 BS Assets | D.2    | F-IRB                 | D37         | = SUM( D34:D36 )       |
|     351 | 2.1 BS Assets | D.2    | A-IRB                 | E37         | = SUM( E34:E36 )       |
|     352 | 2.1 BS Assets | D.2    | Trading Book          | F37         | = SUM( F34:F36 )       |
|     353 | 2.1 BS Assets | D.2    | Total                 | G37         | = SUM( G34:G36 )       |
|     354 | 2.1 BS Assets | D.3    | Total                 | G38         | = SUM( C38:F38 )       |
|     355 | 2.1 BS Assets | D.3    | Credit Portfolio      | H38         | B                      |
|     356 | 2.1 BS Assets | D.4    | Total                 | G39         | = SUM( C39:F39 )       |
|     357 | 2.1 BS Assets | D.4    | Credit Portfolio      | H39         | C                      |
|     358 | 2.1 BS Assets | D.5    | Total                 | G40         | = SUM( C40:F40 )       |
|     359 | 2.1 BS Assets | D.5    | Credit Portfolio      | H40         | G                      |
|     360 | 2.1 BS Assets | D.6    | Total                 | G41         | = SUM( C41:F41 )       |
|     361 | 2.1 BS Assets | D.6    | Credit Portfolio      | H41         | H                      |
|     362 | 2.1 BS Assets | D.7    | Credit Portfolio      | H42         | K                      |
|     363 | 2.1 BS Assets | D.0    | Standardised Approach | C43         | = SUM( C33 , C37:C41 ) |
|   Check | Sheet         | Item   | Column           | Cell  Ref   | Excel                  |
|     364 | 2.1 BS Assets | D.0    | F-IRB            | D43         | = SUM( D33 , D37:D41 ) |
|     365 | 2.1 BS Assets | D.0    | A-IRB            | E43         | = SUM( E33 , E37:E41 ) |
|     366 | 2.1 BS Assets | D.0    | Trading Book     | F43         | = SUM( F33 , F37:F41 ) |
|     367 | 2.1 BS Assets | D.0    | Total            | G43         | = SUM( G33 , G37:G42 ) |
|     368 | 2.1 BS Assets | E.1    | Total            | G44         | = SUM( C44:F44 )       |
|     369 | 2.1 BS Assets | E.1    | Credit Portfolio | H44         | A                      |
|     370 | 2.1 BS Assets | E.2    | Total            | G45         | = SUM( C45:F45 )       |
|     371 | 2.1 BS Assets | E.2    | Credit Portfolio | H45         | B                      |
|     372 | 2.1 BS Assets | E.3    | Total            | G46         | = SUM( C46:F46 )       |
|     373 | 2.1 BS Assets | E.3    | Credit Portfolio | H46         | D                      |
|     374 | 2.1 BS Assets | E.4    | Total            | G47         | = SUM( C47:F47 )       |
|     375 | 2.1 BS Assets | E.4    | Credit Portfolio | H47         | D                      |
|     376 | 2.1 BS Assets | E.5    | Total            | G48         | = SUM( C48:F48 )       |
|     377 | 2.1 BS Assets | E.5    | Credit Portfolio | H48         | D                      |
|     378 | 2.1 BS Assets | E.6    | Total            | G49         | = SUM( C49:F49 )       |
|     379 | 2.1 BS Assets | E.6    | Credit Portfolio | H49         | C                      |
|     380 | 2.1 BS Assets | E.7    | Total            | G50         | = SUM( C50:F50 )       |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel                  |
|     381 | 2.1 BS Assets | E.7    | Credit Portfolio      | H50         | C                      |
|     382 | 2.1 BS Assets | E.8    | Total                 | G51         | = SUM( C51:F51 )       |
|     383 | 2.1 BS Assets | E.8    | Credit Portfolio      | H51         | E                      |
|     384 | 2.1 BS Assets | E.9    | Credit Portfolio      | H52         | K                      |
|     385 | 2.1 BS Assets | E.10   | Credit Portfolio      | H53         | K                      |
|     386 | 2.1 BS Assets | E.11   | Credit Portfolio      | H54         | K                      |
|     387 | 2.1 BS Assets | E.12   | Total                 | G55         | = SUM( C55:F55 )       |
|     388 | 2.1 BS Assets | E.12   | Credit Portfolio      | H55         | L                      |
|     389 | 2.1 BS Assets | E.13   | Credit Portfolio      | H56         | K                      |
|     390 | 2.1 BS Assets | E.0    | Standardised Approach | C57         | = SUM( C44:C51 , C55 ) |
|     391 | 2.1 BS Assets | E.0    | F-IRB                 | D57         | = SUM( D44:D51 , D55 ) |
|     392 | 2.1 BS Assets | E.0    | A-IRB                 | E57         | = SUM( E44:E51 , E55 ) |
|     393 | 2.1 BS Assets | E.0    | Trading Book          | F57         | = SUM( F44:F51 , F55 ) |
|     394 | 2.1 BS Assets | E.0    | Total                 | G57         | = SUM( G44:G56 )       |
|     395 | 2.1 BS Assets | F.1    | Total                 | G58         | = SUM( C58:F58 )       |
|     396 | 2.1 BS Assets | F.1    | Credit Portfolio      | H58         | L                      |
|     397 | 2.1 BS Assets | F.2    | Total                 | G59         | = SUM( C59:F59 )       |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel                  |
|     398 | 2.1 BS Assets | F.2    | Credit Portfolio      | H59         | L                      |
|     399 | 2.1 BS Assets | F.3    | Total                 | G60         | = SUM( C60:F60 )       |
|     400 | 2.1 BS Assets | F.3    | Credit Portfolio      | H60         | L                      |
|     401 | 2.1 BS Assets | F.4    | Total                 | G61         | = SUM( C61:F61 )       |
|     402 | 2.1 BS Assets | F.4    | Credit Portfolio      | H61         | L                      |
|     403 | 2.1 BS Assets | F.5    | Total                 | G62         | = SUM( C62:F62 )       |
|     404 | 2.1 BS Assets | F.5    | Credit Portfolio      | H62         | J                      |
|     405 | 2.1 BS Assets | F.6    | Credit Portfolio      | H63         | K                      |
|     406 | 2.1 BS Assets | F.7    | Credit Portfolio      | H64         | K                      |
|     407 | 2.1 BS Assets | F.8    | Credit Portfolio      | H65         | K                      |
|     408 | 2.1 BS Assets | F.9    | Total                 | G66         | = SUM( C66:F66 )       |
|     409 | 2.1 BS Assets | F.9    | Credit Portfolio      | H66         | L                      |
|     410 | 2.1 BS Assets | F.0    | Standardised Approach | C67         | = SUM( C58:C62 , C66 ) |
|     411 | 2.1 BS Assets | F.0    | F-IRB                 | D67         | = SUM( D58:D62 , D66 ) |
|     412 | 2.1 BS Assets | F.0    | A-IRB                 | E67         | = SUM( E58:E62 , E66 ) |
|     413 | 2.1 BS Assets | F.0    | Trading Book          | F67         | = SUM( F58:F62 , F66 ) |
|     414 | 2.1 BS Assets | F.0    | Total                 | G67         | = SUM( G58:G66 )       |
|   Check | Sheet         | Item   | Column                | Cell  Ref   | Excel                                     |
|     415 | 2.1 BS Assets | G.1    | Total                 | G68         | = SUM( C68:F68 )                          |
|     416 | 2.1 BS Assets | G.1    | Credit Portfolio      | H68         | L                                         |
|     417 | 2.1 BS Assets | G.2    | Total                 | G69         | = SUM( C69:F69 )                          |
|     418 | 2.1 BS Assets | G.2    | Credit Portfolio      | H69         | L                                         |
|     419 | 2.1 BS Assets | G.3    | Total                 | G70         | = SUM( C70:F70 )                          |
|     420 | 2.1 BS Assets | G.3    | Credit Portfolio      | H70         | L                                         |
|     421 | 2.1 BS Assets | G.4    | Credit Portfolio      | H71         | K                                         |
|     422 | 2.1 BS Assets | G.5    | Credit Portfolio      | H72         | K                                         |
|     423 | 2.1 BS Assets | G.0    | Standardised Approach | C73         | = SUM( C68:C70 )                          |
|     424 | 2.1 BS Assets | G.0    | F-IRB                 | D73         | = SUM( D68:D70 )                          |
|     425 | 2.1 BS Assets | G.0    | A-IRB                 | E73         | = SUM( E68:E70 )                          |
|     426 | 2.1 BS Assets | G.0    | Trading Book          | F73         | = SUM( F68:F70 )                          |
|     427 | 2.1 BS Assets | G.0    | Total                 | G73         | = SUM( G68:G72 )                          |
|     428 | 2.1 BS Assets | H.0    | Standardised Approach | C74         | = C6 + C11 + C32 + C43 + C57 + C67 +  C73 |
|     429 | 2.1 BS Assets | H.0    | F-IRB                 | D74         | = D6 + D11 + D32 + D43 + D57 + D67  + D73 |
|   Check | Sheet         | Item   | Column       | Cell  Ref   | Excel                                     |
|     430 | 2.1 BS Assets | H.0    | A-IRB        | E74         | = E6 + E11 + E32 + E43 + E57 + E67 +  E73 |
|     431 | 2.1 BS Assets | H.0    | Trading Book | F74         | = F6 + F11 + F32 + F43 + F57 + F67 +  F73 |
|     432 | 2.1 BS Assets | H.0    | Total        | G74         | = G6 + G11 + G32 + G43 + G57 + G67  + G73 |

## 4 Logical checks

- 4.1
- Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.

|   Check | Sheet         | Sum A (Excel)                                                  | Sum B (Excel)                                                                                                                | Check          |
|---------|---------------|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------|
|     433 | 2.1 BS Assets | =G$28 + $G$42 +  G$53 +$G$54 +  '2.4 Off Balance  Sheet'!$G$15 | = '6.1 Capital Adequacy'!$C$18 + '6.1 Capital Adequacy'!$C$19 + '6.1  Capital Adequacy'!$C$77 + '6.1 Capital Adequacy'!$C$81 | A must equal B |