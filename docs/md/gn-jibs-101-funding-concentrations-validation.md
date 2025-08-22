
## Guidance Note

## Validation and verification of the '10.1 Funding Concentrations' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Revised later in March 2019 to align Items to  those used in Version 2.0 of the Submission Template

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

|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|---------|-----------------------------|--------|--------------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 10.1 Funding Concentrations | SCP.1  | Less than 30 days              | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 10.1 Funding Concentrations | SCP.1  | 31 days to 3 months            | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 10.1 Funding Concentrations | SCP.1  | More than 3 months to 6 months | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 10.1 Funding Concentrations | SCP.1  | More than 6 months to 1 year   | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 10.1 Funding Concentrations | SCP.1  | More than 1 year               | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 10.1 Funding Concentrations | SCP.2  | Less than 30 days              | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 10.1 Funding Concentrations | SCP.2  | 31 days to 3 months            | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 10.1 Funding Concentrations | SCP.2  | More than 3 months to 6 months | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 10.1 Funding Concentrations | SCP.2  | More than 6 months to 1 year   | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 10.1 Funding Concentrations | SCP.2  | More than 1 year               | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 10.1 Funding Concentrations | SCP.3  | Less than 30 days              | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 10.1 Funding Concentrations | SCP.3  | 31 days to 3 months            | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 10.1 Funding Concentrations | SCP.3  | More than 3 months to 6 months | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      14 | 10.1 Funding Concentrations | SCP.3  | More than 6 months to 1 year   | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 10.1 Funding Concentrations | SCP.3  | More than 1 year               | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 10.1 Funding Concentrations | SCP.4  | Less than 30 days              | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 10.1 Funding Concentrations | SCP.4  | 31 days to 3 months            | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 10.1 Funding Concentrations | SCP.4  | More than 3 months to 6 months | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 10.1 Funding Concentrations | SCP.4  | More than 6 months to 1 year   | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 10.1 Funding Concentrations | SCP.4  | More than 1 year               | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 10.1 Funding Concentrations | SCP.5  | Less than 30 days              | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 10.1 Funding Concentrations | SCP.5  | 31 days to 3 months            | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 10.1 Funding Concentrations | SCP.5  | More than 3 months to 6 months | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 10.1 Funding Concentrations | SCP.5  | More than 6 months to 1 year   | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 10.1 Funding Concentrations | SCP.5  | More than 1 year               | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 10.1 Funding Concentrations | SCP.6  | Less than 30 days              | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 10.1 Funding Concentrations | SCP.6  | 31 days to 3 months            | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 10.1 Funding Concentrations | SCP.6  | More than 3 months to 6 months | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 10.1 Funding Concentrations | SCP.6  | More than 6 months to 1 year   | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 10.1 Funding Concentrations | SCP.6  | More than 1 year               | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      31 | 10.1 Funding Concentrations | SCP.7  | Less than 30 days              | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 10.1 Funding Concentrations | SCP.7  | 31 days to 3 months            | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 10.1 Funding Concentrations | SCP.7  | More than 3 months to 6 months | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 10.1 Funding Concentrations | SCP.7  | More than 6 months to 1 year   | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 10.1 Funding Concentrations | SCP.7  | More than 1 year               | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 10.1 Funding Concentrations | SCP.8  | Less than 30 days              | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 10.1 Funding Concentrations | SCP.8  | 31 days to 3 months            | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 10.1 Funding Concentrations | SCP.8  | More than 3 months to 6 months | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 10.1 Funding Concentrations | SCP.8  | More than 6 months to 1 year   | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 10.1 Funding Concentrations | SCP.8  | More than 1 year               | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 10.1 Funding Concentrations | SCP.9  | Less than 30 days              | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 10.1 Funding Concentrations | SCP.9  | 31 days to 3 months            | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 10.1 Funding Concentrations | SCP.9  | More than 3 months to 6 months | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 10.1 Funding Concentrations | SCP.9  | More than 6 months to 1 year   | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 10.1 Funding Concentrations | SCP.9  | More than 1 year               | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 10.1 Funding Concentrations | SCP.10 | Less than 30 days              | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 10.1 Funding Concentrations | SCP.10 | 31 days to 3 months            | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      48 | 10.1 Funding Concentrations | SCP.10 | More than 3 months to 6 months | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 10.1 Funding Concentrations | SCP.10 | More than 6 months to 1 year   | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 10.1 Funding Concentrations | SCP.10 | More than 1 year               | I12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 10.1 Funding Concentrations | SCP.11 | Less than 30 days              | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 10.1 Funding Concentrations | SCP.11 | 31 days to 3 months            | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 10.1 Funding Concentrations | SCP.11 | More than 3 months to 6 months | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 10.1 Funding Concentrations | SCP.11 | More than 6 months to 1 year   | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 10.1 Funding Concentrations | SCP.11 | More than 1 year               | I13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 10.1 Funding Concentrations | SCP.12 | Less than 30 days              | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 10.1 Funding Concentrations | SCP.12 | 31 days to 3 months            | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 10.1 Funding Concentrations | SCP.12 | More than 3 months to 6 months | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 10.1 Funding Concentrations | SCP.12 | More than 6 months to 1 year   | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 10.1 Funding Concentrations | SCP.12 | More than 1 year               | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 10.1 Funding Concentrations | SCP.13 | Less than 30 days              | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 10.1 Funding Concentrations | SCP.13 | 31 days to 3 months            | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 10.1 Funding Concentrations | SCP.13 | More than 3 months to 6 months | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 10.1 Funding Concentrations | SCP.13 | More than 6 months to 1 year   | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      65 | 10.1 Funding Concentrations | SCP.13 | More than 1 year               | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 10.1 Funding Concentrations | SCP.14 | Less than 30 days              | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 10.1 Funding Concentrations | SCP.14 | 31 days to 3 months            | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 10.1 Funding Concentrations | SCP.14 | More than 3 months to 6 months | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 10.1 Funding Concentrations | SCP.14 | More than 6 months to 1 year   | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 10.1 Funding Concentrations | SCP.14 | More than 1 year               | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 10.1 Funding Concentrations | SCP.15 | Less than 30 days              | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 10.1 Funding Concentrations | SCP.15 | 31 days to 3 months            | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 10.1 Funding Concentrations | SCP.15 | More than 3 months to 6 months | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 10.1 Funding Concentrations | SCP.15 | More than 6 months to 1 year   | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 10.1 Funding Concentrations | SCP.15 | More than 1 year               | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 10.1 Funding Concentrations | SP.1   | Less than 30 days              | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 10.1 Funding Concentrations | SP.1   | 31 days to 3 months            | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 10.1 Funding Concentrations | SP.1   | More than 3 months to 6 months | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 10.1 Funding Concentrations | SP.1   | More than 6 months to 1 year   | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 10.1 Funding Concentrations | SP.1   | More than 1 year               | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 10.1 Funding Concentrations | SP.2   | Less than 30 days              | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      82 | 10.1 Funding Concentrations | SP.2   | 31 days to 3 months            | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 10.1 Funding Concentrations | SP.2   | More than 3 months to 6 months | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 10.1 Funding Concentrations | SP.2   | More than 6 months to 1 year   | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 10.1 Funding Concentrations | SP.2   | More than 1 year               | I19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 10.1 Funding Concentrations | SP.3   | Less than 30 days              | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 10.1 Funding Concentrations | SP.3   | 31 days to 3 months            | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 10.1 Funding Concentrations | SP.3   | More than 3 months to 6 months | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 10.1 Funding Concentrations | SP.3   | More than 6 months to 1 year   | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 10.1 Funding Concentrations | SP.3   | More than 1 year               | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 10.1 Funding Concentrations | SP.4   | Less than 30 days              | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 10.1 Funding Concentrations | SP.4   | 31 days to 3 months            | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 10.1 Funding Concentrations | SP.4   | More than 3 months to 6 months | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 10.1 Funding Concentrations | SP.4   | More than 6 months to 1 year   | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 10.1 Funding Concentrations | SP.4   | More than 1 year               | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 10.1 Funding Concentrations | SP.5   | Less than 30 days              | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 10.1 Funding Concentrations | SP.5   | 31 days to 3 months            | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 10.1 Funding Concentrations | SP.5   | More than 3 months to 6 months | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|      99 | 10.1 Funding Concentrations | SP.5   | More than 6 months to 1 year   | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 10.1 Funding Concentrations | SP.5   | More than 1 year               | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 10.1 Funding Concentrations | SP.6   | Less than 30 days              | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 10.1 Funding Concentrations | SP.6   | 31 days to 3 months            | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 10.1 Funding Concentrations | SP.6   | More than 3 months to 6 months | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 10.1 Funding Concentrations | SP.6   | More than 6 months to 1 year   | H23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 10.1 Funding Concentrations | SP.6   | More than 1 year               | I23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 10.1 Funding Concentrations | SP.7   | Less than 30 days              | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 10.1 Funding Concentrations | SP.7   | 31 days to 3 months            | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 10.1 Funding Concentrations | SP.7   | More than 3 months to 6 months | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 10.1 Funding Concentrations | SP.7   | More than 6 months to 1 year   | H24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 10.1 Funding Concentrations | SP.7   | More than 1 year               | I24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 10.1 Funding Concentrations | SP.8   | Less than 30 days              | E25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 10.1 Funding Concentrations | SP.8   | 31 days to 3 months            | F25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 10.1 Funding Concentrations | SP.8   | More than 3 months to 6 months | G25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 10.1 Funding Concentrations | SP.8   | More than 6 months to 1 year   | H25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 10.1 Funding Concentrations | SP.8   | More than 1 year               | I25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|     116 | 10.1 Funding Concentrations | SP.9   | Less than 30 days              | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 10.1 Funding Concentrations | SP.9   | 31 days to 3 months            | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 10.1 Funding Concentrations | SP.9   | More than 3 months to 6 months | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 10.1 Funding Concentrations | SP.9   | More than 6 months to 1 year   | H26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 10.1 Funding Concentrations | SP.9   | More than 1 year               | I26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 10.1 Funding Concentrations | SP.10  | Less than 30 days              | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 10.1 Funding Concentrations | SP.10  | 31 days to 3 months            | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 10.1 Funding Concentrations | SP.10  | More than 3 months to 6 months | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 10.1 Funding Concentrations | SP.10  | More than 6 months to 1 year   | H27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 10.1 Funding Concentrations | SP.10  | More than 1 year               | I27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 10.1 Funding Concentrations | SP.11  | Less than 30 days              | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 10.1 Funding Concentrations | SP.11  | 31 days to 3 months            | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 10.1 Funding Concentrations | SP.11  | More than 3 months to 6 months | G28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 10.1 Funding Concentrations | SP.11  | More than 6 months to 1 year   | H28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     130 | 10.1 Funding Concentrations | SP.11  | More than 1 year               | I28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 10.1 Funding Concentrations | SP.12  | Less than 30 days              | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     132 | 10.1 Funding Concentrations | SP.12  | 31 days to 3 months            | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|     133 | 10.1 Funding Concentrations | SP.12  | More than 3 months to 6 months | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     134 | 10.1 Funding Concentrations | SP.12  | More than 6 months to 1 year   | H29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 10.1 Funding Concentrations | SP.12  | More than 1 year               | I29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 10.1 Funding Concentrations | SP.13  | Less than 30 days              | E30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 10.1 Funding Concentrations | SP.13  | 31 days to 3 months            | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 10.1 Funding Concentrations | SP.13  | More than 3 months to 6 months | G30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 10.1 Funding Concentrations | SP.13  | More than 6 months to 1 year   | H30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     140 | 10.1 Funding Concentrations | SP.13  | More than 1 year               | I30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     141 | 10.1 Funding Concentrations | SP.14  | Less than 30 days              | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     142 | 10.1 Funding Concentrations | SP.14  | 31 days to 3 months            | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 10.1 Funding Concentrations | SP.14  | More than 3 months to 6 months | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     144 | 10.1 Funding Concentrations | SP.14  | More than 6 months to 1 year   | H31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 10.1 Funding Concentrations | SP.14  | More than 1 year               | I31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     146 | 10.1 Funding Concentrations | SP.15  | Less than 30 days              | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     147 | 10.1 Funding Concentrations | SP.15  | 31 days to 3 months            | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 10.1 Funding Concentrations | SP.15  | More than 3 months to 6 months | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     149 | 10.1 Funding Concentrations | SP.15  | More than 6 months to 1 year   | H32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|     150 | 10.1 Funding Concentrations | SP.15  | More than 1 year               | I32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     151 | 10.1 Funding Concentrations | SC.1   | Less than 30 days              | E33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     152 | 10.1 Funding Concentrations | SC.1   | 31 days to 3 months            | F33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 10.1 Funding Concentrations | SC.1   | More than 3 months to 6 months | G33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     154 | 10.1 Funding Concentrations | SC.1   | More than 6 months to 1 year   | H33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     155 | 10.1 Funding Concentrations | SC.1   | More than 1 year               | I33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     156 | 10.1 Funding Concentrations | SC.2   | Less than 30 days              | E34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 10.1 Funding Concentrations | SC.2   | 31 days to 3 months            | F34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     158 | 10.1 Funding Concentrations | SC.2   | More than 3 months to 6 months | G34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     159 | 10.1 Funding Concentrations | SC.2   | More than 6 months to 1 year   | H34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 10.1 Funding Concentrations | SC.2   | More than 1 year               | I34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     161 | 10.1 Funding Concentrations | SC.3   | Less than 30 days              | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 10.1 Funding Concentrations | SC.3   | 31 days to 3 months            | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     163 | 10.1 Funding Concentrations | SC.3   | More than 3 months to 6 months | G35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     164 | 10.1 Funding Concentrations | SC.3   | More than 6 months to 1 year   | H35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 10.1 Funding Concentrations | SC.3   | More than 1 year               | I35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     166 | 10.1 Funding Concentrations | SC.4   | Less than 30 days              | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Validation Message                                                         |
|     167 | 10.1 Funding Concentrations | SC.4   | 31 days to 3 months            | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     168 | 10.1 Funding Concentrations | SC.4   | More than 3 months to 6 months | G36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 10.1 Funding Concentrations | SC.4   | More than 6 months to 1 year   | H36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     170 | 10.1 Funding Concentrations | SC.4   | More than 1 year               | I36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     171 | 10.1 Funding Concentrations | SC.5   | Less than 30 days              | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 10.1 Funding Concentrations | SC.5   | 31 days to 3 months            | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     173 | 10.1 Funding Concentrations | SC.5   | More than 3 months to 6 months | G37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     174 | 10.1 Funding Concentrations | SC.5   | More than 6 months to 1 year   | H37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 10.1 Funding Concentrations | SC.5   | More than 1 year               | I37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                       | Item   | Column        | Cell Ref   | Excel                               |
|---------|-----------------------------|--------|---------------|------------|-------------------------------------|
|     176 | 10.1 Funding Concentrations | SC.1   | Funding Total | D3         | =IF(MAX(E3:I3)>0,SUM(E3:I3),'')     |
|     177 | 10.1 Funding Concentrations | SC.2   | Funding Total | D4         | =IF(MAX(E4:I4)>0,SUM(E4:I4),'')     |
|     178 | 10.1 Funding Concentrations | SC.3   | Funding Total | D5         | =IF(MAX(E5:I5)>0,SUM(E5:I5),'')     |
|     179 | 10.1 Funding Concentrations | SC.4   | Funding Total | D6         | =IF(MAX(E6:I6)>0,SUM(E6:I6),'')     |
|     180 | 10.1 Funding Concentrations | SC.5   | Funding Total | D7         | =IF(MAX(E7:I7)>0,SUM(E7:I7),'')     |
|     181 | 10.1 Funding Concentrations | SC.6   | Funding Total | D8         | =IF(MAX(E8:I8)>0,SUM(E8:I8),'')     |
|     182 | 10.1 Funding Concentrations | SC.7   | Funding Total | D9         | =IF(MAX(E9:I9)>0,SUM(E9:I9),'')     |
|     183 | 10.1 Funding Concentrations | SC.8   | Funding Total | D10        | =IF(MAX(E10:I10)>0,SUM(E10:I10),'') |
|     184 | 10.1 Funding Concentrations | SC.9   | Funding Total | D11        | =IF(MAX(E11:I11)>0,SUM(E11:I11),'') |
|     185 | 10.1 Funding Concentrations | SC.10  | Funding Total | D12        | =IF(MAX(E12:I12)>0,SUM(E12:I12),'') |
|     186 | 10.1 Funding Concentrations | SC.11  | Funding Total | D13        | =IF(MAX(E13:I13)>0,SUM(E13:I13),'') |
|     187 | 10.1 Funding Concentrations | SC.12  | Funding Total | D14        | =IF(MAX(E14:I14)>0,SUM(E14:I14),'') |
|     188 | 10.1 Funding Concentrations | SC.13  | Funding Total | D15        | =IF(MAX(E15:I15)>0,SUM(E15:I15),'') |
|     189 | 10.1 Funding Concentrations | SC.14  | Funding Total | D16        | =IF(MAX(E16:I16)>0,SUM(E16:I16),'') |
|     190 | 10.1 Funding Concentrations | SC.15  | Funding Total | D17        | =IF(MAX(E17:I17)>0,SUM(E17:I17),'') |
|   Check | Sheet                       | Item   | Column        | Cell Ref   | Excel                               |
|     191 | 10.1 Funding Concentrations | SP.1   | Funding Total | D18        | =IF(MAX(E18:I18)>0,SUM(E18:I18),'') |
|     192 | 10.1 Funding Concentrations | SP.2   | Funding Total | D19        | =IF(MAX(E19:I19)>0,SUM(E19:I19),'') |
|     193 | 10.1 Funding Concentrations | SP.3   | Funding Total | D20        | =IF(MAX(E20:I20)>0,SUM(E20:I20),'') |
|     194 | 10.1 Funding Concentrations | SP.4   | Funding Total | D21        | =IF(MAX(E21:I21)>0,SUM(E21:I21),'') |
|     195 | 10.1 Funding Concentrations | SP.5   | Funding Total | D22        | =IF(MAX(E22:I22)>0,SUM(E22:I22),'') |
|     196 | 10.1 Funding Concentrations | SP.6   | Funding Total | D23        | =IF(MAX(E23:I23)>0,SUM(E23:I23),'') |
|     197 | 10.1 Funding Concentrations | SP.7   | Funding Total | D24        | =IF(MAX(E24:I24)>0,SUM(E24:I24),'') |
|     198 | 10.1 Funding Concentrations | SP.8   | Funding Total | D25        | =IF(MAX(E25:I25)>0,SUM(E25:I25),'') |
|     199 | 10.1 Funding Concentrations | SP.9   | Funding Total | D26        | =IF(MAX(E26:I26)>0,SUM(E26:I26),'') |
|     200 | 10.1 Funding Concentrations | SP.10  | Funding Total | D27        | =IF(MAX(E27:I27)>0,SUM(E27:I27),'') |
|     201 | 10.1 Funding Concentrations | SP.11  | Funding Total | D28        | =IF(MAX(E28:I28)>0,SUM(E28:I28),'') |
|     202 | 10.1 Funding Concentrations | SP.12  | Funding Total | D29        | =IF(MAX(E29:I29)>0,SUM(E29:I29),'') |
|     203 | 10.1 Funding Concentrations | SP.13  | Funding Total | D30        | =IF(MAX(E30:I30)>0,SUM(E30:I30),'') |
|     204 | 10.1 Funding Concentrations | SP.14  | Funding Total | D31        | =IF(MAX(E31:I31)>0,SUM(E31:I31),'') |
|     205 | 10.1 Funding Concentrations | SP.15  | Funding Total | D32        | =IF(MAX(E32:I32)>0,SUM(E32:I32),'') |
|     206 | 10.1 Funding Concentrations | SC.1   | Funding Total | D33        | =IF(MAX(E33:I33)>0,SUM(E33:I33),'') |
|     207 | 10.1 Funding Concentrations | SC.2   | Funding Total | D34        | =IF(MAX(E34:I34)>0,SUM(E34:I34),'') |
|   Check | Sheet                       | Item   | Column        | Cell Ref   | Excel                               |
|     208 | 10.1 Funding Concentrations | SC.3   | Funding Total | D35        | =IF(MAX(E35:I35)>0,SUM(E35:I35),'') |
|     209 | 10.1 Funding Concentrations | SC.4   | Funding Total | D36        | =IF(MAX(E36:I36)>0,SUM(E36:I36),'') |
|     210 | 10.1 Funding Concentrations | SC.5   | Funding Total | D37        | =IF(MAX(E37:I37)>0,SUM(E37:I37),'') |