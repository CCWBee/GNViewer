
## Guidance Note

## Validation and verification of the '7.4 IRRBB - Major 2' Sheet

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

|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|---------|---------------------|--------|------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 7.4 IRRBB - Major 2 | A.1.1  | Up to 1 month          | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 7.4 IRRBB - Major 2 | A.1.1  | 1 Month to <3 months   | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 7.4 IRRBB - Major 2 | A.1.1  | 3 Months to <6 months  | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 7.4 IRRBB - Major 2 | A.1.1  | 6 Months to <12 months | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 7.4 IRRBB - Major 2 | A.1.1  | 1 Year to <2 years     | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 7.4 IRRBB - Major 2 | A.1.1  | 2 Years to <4 years    | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 7.4 IRRBB - Major 2 | A.1.1  | 4 Years to <10 years   | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 7.4 IRRBB - Major 2 | A.1.1  | Over 10 years          | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 7.4 IRRBB - Major 2 | A.1.2  | Up to 1 month          | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 7.4 IRRBB - Major 2 | A.1.2  | 1 Month to <3 months   | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 7.4 IRRBB - Major 2 | A.1.2  | 3 Months to <6 months  | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 7.4 IRRBB - Major 2 | A.1.2  | 6 Months to <12 months | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 7.4 IRRBB - Major 2 | A.1.2  | 1 Year to <2 years     | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 7.4 IRRBB - Major 2 | A.1.2  | 2 Years to <4 years    | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      15 | 7.4 IRRBB - Major 2 | A.1.2  | 4 Years to <10 years   | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 7.4 IRRBB - Major 2 | A.1.2  | Over 10 years          | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 7.4 IRRBB - Major 2 | A.1.3  | Up to 1 month          | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 7.4 IRRBB - Major 2 | A.1.3  | 1 Month to <3 months   | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 7.4 IRRBB - Major 2 | A.1.3  | 3 Months to <6 months  | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 7.4 IRRBB - Major 2 | A.1.3  | 6 Months to <12 months | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 7.4 IRRBB - Major 2 | A.1.3  | 1 Year to <2 years     | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 7.4 IRRBB - Major 2 | A.1.3  | 2 Years to <4 years    | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 7.4 IRRBB - Major 2 | A.1.3  | 4 Years to <10 years   | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 7.4 IRRBB - Major 2 | A.1.3  | Over 10 years          | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 7.4 IRRBB - Major 2 | A.1.4  | Up to 1 month          | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 7.4 IRRBB - Major 2 | A.1.4  | 1 Month to <3 months   | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 7.4 IRRBB - Major 2 | A.1.4  | 3 Months to <6 months  | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 7.4 IRRBB - Major 2 | A.1.4  | 6 Months to <12 months | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 7.4 IRRBB - Major 2 | A.1.4  | 1 Year to <2 years     | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 7.4 IRRBB - Major 2 | A.1.4  | 2 Years to <4 years    | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 7.4 IRRBB - Major 2 | A.1.4  | 4 Years to <10 years   | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 7.4 IRRBB - Major 2 | A.1.4  | Over 10 years          | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      33 | 7.4 IRRBB - Major 2 | A.1.5  | Up to 1 month          | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 7.4 IRRBB - Major 2 | A.1.5  | 1 Month to <3 months   | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 7.4 IRRBB - Major 2 | A.1.5  | 3 Months to <6 months  | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 7.4 IRRBB - Major 2 | A.1.5  | 6 Months to <12 months | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 7.4 IRRBB - Major 2 | A.1.5  | 1 Year to <2 years     | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 7.4 IRRBB - Major 2 | A.1.5  | 2 Years to <4 years    | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 7.4 IRRBB - Major 2 | A.1.5  | 4 Years to <10 years   | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 7.4 IRRBB - Major 2 | A.1.5  | Over 10 years          | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 7.4 IRRBB - Major 2 | A.2.1  | Up to 1 month          | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 7.4 IRRBB - Major 2 | A.2.1  | 1 Month to <3 months   | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 7.4 IRRBB - Major 2 | A.2.1  | 3 Months to <6 months  | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 7.4 IRRBB - Major 2 | A.2.1  | 6 Months to <12 months | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 7.4 IRRBB - Major 2 | A.2.1  | 1 Year to <2 years     | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 7.4 IRRBB - Major 2 | A.2.1  | 2 Years to <4 years    | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 7.4 IRRBB - Major 2 | A.2.1  | 4 Years to <10 years   | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 7.4 IRRBB - Major 2 | A.2.1  | Over 10 years          | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 7.4 IRRBB - Major 2 | A.2.2  | Up to 1 month          | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 7.4 IRRBB - Major 2 | A.2.2  | 1 Month to <3 months   | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      51 | 7.4 IRRBB - Major 2 | A.2.2  | 3 Months to <6 months  | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 7.4 IRRBB - Major 2 | A.2.2  | 6 Months to <12 months | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 7.4 IRRBB - Major 2 | A.2.2  | 1 Year to <2 years     | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 7.4 IRRBB - Major 2 | A.2.2  | 2 Years to <4 years    | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 7.4 IRRBB - Major 2 | A.2.2  | 4 Years to <10 years   | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 7.4 IRRBB - Major 2 | A.2.2  | Over 10 years          | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 7.4 IRRBB - Major 2 | A.2.3  | Up to 1 month          | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 7.4 IRRBB - Major 2 | A.2.3  | 1 Month to <3 months   | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 7.4 IRRBB - Major 2 | A.2.3  | 3 Months to <6 months  | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 7.4 IRRBB - Major 2 | A.2.3  | 6 Months to <12 months | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 7.4 IRRBB - Major 2 | A.2.3  | 1 Year to <2 years     | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 7.4 IRRBB - Major 2 | A.2.3  | 2 Years to <4 years    | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 7.4 IRRBB - Major 2 | A.2.3  | 4 Years to <10 years   | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 7.4 IRRBB - Major 2 | A.2.3  | Over 10 years          | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 7.4 IRRBB - Major 2 | B.1.1  | Up to 1 month          | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 7.4 IRRBB - Major 2 | B.1.1  | 1 Month to <3 months   | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 7.4 IRRBB - Major 2 | B.1.1  | 3 Months to <6 months  | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 7.4 IRRBB - Major 2 | B.1.1  | 6 Months to <12 months | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      69 | 7.4 IRRBB - Major 2 | B.1.1  | 1 Year to <2 years     | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 7.4 IRRBB - Major 2 | B.1.1  | 2 Years to <4 years    | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 7.4 IRRBB - Major 2 | B.1.1  | 4 Years to <10 years   | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 7.4 IRRBB - Major 2 | B.1.1  | Over 10 years          | J14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 7.4 IRRBB - Major 2 | B.1.2  | Up to 1 month          | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 7.4 IRRBB - Major 2 | B.1.2  | 1 Month to <3 months   | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 7.4 IRRBB - Major 2 | B.1.2  | 3 Months to <6 months  | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 7.4 IRRBB - Major 2 | B.1.2  | 6 Months to <12 months | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 7.4 IRRBB - Major 2 | B.1.2  | 1 Year to <2 years     | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 7.4 IRRBB - Major 2 | B.1.2  | 2 Years to <4 years    | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 7.4 IRRBB - Major 2 | B.1.2  | 4 Years to <10 years   | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 7.4 IRRBB - Major 2 | B.1.2  | Over 10 years          | J15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 7.4 IRRBB - Major 2 | B.1.3  | Up to 1 month          | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      82 | 7.4 IRRBB - Major 2 | B.1.3  | 1 Month to <3 months   | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 7.4 IRRBB - Major 2 | B.1.3  | 3 Months to <6 months  | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 7.4 IRRBB - Major 2 | B.1.3  | 6 Months to <12 months | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 7.4 IRRBB - Major 2 | B.1.3  | 1 Year to <2 years     | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 7.4 IRRBB - Major 2 | B.1.3  | 2 Years to <4 years    | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      87 | 7.4 IRRBB - Major 2 | B.1.3  | 4 Years to <10 years   | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 7.4 IRRBB - Major 2 | B.1.3  | Over 10 years          | J16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 7.4 IRRBB - Major 2 | B.1.4  | Up to 1 month          | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 7.4 IRRBB - Major 2 | B.1.4  | 1 Month to <3 months   | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 7.4 IRRBB - Major 2 | B.1.4  | 3 Months to <6 months  | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 7.4 IRRBB - Major 2 | B.1.4  | 6 Months to <12 months | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 7.4 IRRBB - Major 2 | B.1.4  | 1 Year to <2 years     | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 7.4 IRRBB - Major 2 | B.1.4  | 2 Years to <4 years    | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 7.4 IRRBB - Major 2 | B.1.4  | 4 Years to <10 years   | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 7.4 IRRBB - Major 2 | B.1.4  | Over 10 years          | J17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 7.4 IRRBB - Major 2 | B.1.5  | Up to 1 month          | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 7.4 IRRBB - Major 2 | B.1.5  | 1 Month to <3 months   | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      99 | 7.4 IRRBB - Major 2 | B.1.5  | 3 Months to <6 months  | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 7.4 IRRBB - Major 2 | B.1.5  | 6 Months to <12 months | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 7.4 IRRBB - Major 2 | B.1.5  | 1 Year to <2 years     | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 7.4 IRRBB - Major 2 | B.1.5  | 2 Years to <4 years    | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 7.4 IRRBB - Major 2 | B.1.5  | 4 Years to <10 years   | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 7.4 IRRBB - Major 2 | B.1.5  | Over 10 years          | J18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|     105 | 7.4 IRRBB - Major 2 | B.2.1  | Up to 1 month          | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 7.4 IRRBB - Major 2 | B.2.1  | 1 Month to <3 months   | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 7.4 IRRBB - Major 2 | B.2.1  | 3 Months to <6 months  | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 7.4 IRRBB - Major 2 | B.2.1  | 6 Months to <12 months | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 7.4 IRRBB - Major 2 | B.2.1  | 1 Year to <2 years     | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 7.4 IRRBB - Major 2 | B.2.1  | 2 Years to <4 years    | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 7.4 IRRBB - Major 2 | B.2.1  | 4 Years to <10 years   | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 7.4 IRRBB - Major 2 | B.2.1  | Over 10 years          | J20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 7.4 IRRBB - Major 2 | B.2.2  | Up to 1 month          | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 7.4 IRRBB - Major 2 | B.2.2  | 1 Month to <3 months   | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 7.4 IRRBB - Major 2 | B.2.2  | 3 Months to <6 months  | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     116 | 7.4 IRRBB - Major 2 | B.2.2  | 6 Months to <12 months | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 7.4 IRRBB - Major 2 | B.2.2  | 1 Year to <2 years     | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 7.4 IRRBB - Major 2 | B.2.2  | 2 Years to <4 years    | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 7.4 IRRBB - Major 2 | B.2.2  | 4 Years to <10 years   | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 7.4 IRRBB - Major 2 | B.2.2  | Over 10 years          | J21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 7.4 IRRBB - Major 2 | B.2.3  | Up to 1 month          | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 7.4 IRRBB - Major 2 | B.2.3  | 1 Month to <3 months   | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet               | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|     123 | 7.4 IRRBB - Major 2 | B.2.3  | 3 Months to <6 months  | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 7.4 IRRBB - Major 2 | B.2.3  | 6 Months to <12 months | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 7.4 IRRBB - Major 2 | B.2.3  | 1 Year to <2 years     | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 7.4 IRRBB - Major 2 | B.2.3  | 2 Years to <4 years    | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 7.4 IRRBB - Major 2 | B.2.3  | 4 Years to <10 years   | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 7.4 IRRBB - Major 2 | B.2.3  | Over 10 years          | J22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 7.4 IRRBB - Major 2 | D      | 1 Month to <3 months   | D28         | Must be blank                                                              |
|     130 | 7.4 IRRBB - Major 2 | D      | 3 Months to <6 months  | E28         | Must be blank                                                              |
|     131 | 7.4 IRRBB - Major 2 | D      | 6 Months to <12 months | F28         | Must be blank                                                              |
|     132 | 7.4 IRRBB - Major 2 | D      | 1 Year to <2 years     | G28         | Must be blank                                                              |
|     133 | 7.4 IRRBB - Major 2 | D      | 2 Years to <4 years    | H28         | Must be blank                                                              |
|     134 | 7.4 IRRBB - Major 2 | D      | 4 Years to <10 years   | I28         | Must be blank                                                              |
|     135 | 7.4 IRRBB - Major 2 | D      | Over 10 years          | J28         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet               | Item   | Column                 | Cell Ref   | Excel        |
|---------|---------------------|--------|------------------------|------------|--------------|
|     136 | 7.4 IRRBB - Major 2 | A.1.0  | Up to 1 month          | C8         | =SUM(C3:C7)  |
|     137 | 7.4 IRRBB - Major 2 | A.1.0  | 1 Month to <3 months   | D8         | =SUM(D3:D7)  |
|     138 | 7.4 IRRBB - Major 2 | A.1.0  | 3 Months to <6 months  | E8         | =SUM(E3:E7)  |
|     139 | 7.4 IRRBB - Major 2 | A.1.0  | 6 Months to <12 months | F8         | =SUM(F3:F7)  |
|     140 | 7.4 IRRBB - Major 2 | A.1.0  | 1 Year to <2 years     | G8         | =SUM(G3:G7)  |
|     141 | 7.4 IRRBB - Major 2 | A.1.0  | 2 Years to <4 years    | H8         | =SUM(H3:H7)  |
|     142 | 7.4 IRRBB - Major 2 | A.1.0  | 4 Years to <10 years   | I8         | =SUM(I3:I7)  |
|     143 | 7.4 IRRBB - Major 2 | A.1.0  | Over 10 years          | J8         | =SUM(J3:J7)  |
|     144 | 7.4 IRRBB - Major 2 | A.2.0  | Up to 1 month          | C12        | =SUM(C9:C11) |
|     145 | 7.4 IRRBB - Major 2 | A.2.0  | 1 Month to <3 months   | D12        | =SUM(D9:D11) |
|     146 | 7.4 IRRBB - Major 2 | A.2.0  | 3 Months to <6 months  | E12        | =SUM(E9:E11) |
|     147 | 7.4 IRRBB - Major 2 | A.2.0  | 6 Months to <12 months | F12        | =SUM(F9:F11) |
|     148 | 7.4 IRRBB - Major 2 | A.2.0  | 1 Year to <2 years     | G12        | =SUM(G9:G11) |
|   Check | Sheet               | Item   | Column                 | Cell Ref   | Excel         |
|     149 | 7.4 IRRBB - Major 2 | A.2.0  | 2 Years to <4 years    | H12        | =SUM(H9:H11)  |
|     150 | 7.4 IRRBB - Major 2 | A.2.0  | 4 Years to <10 years   | I12        | =SUM(I9:I11)  |
|     151 | 7.4 IRRBB - Major 2 | A.2.0  | Over 10 years          | J12        | =SUM(J9:J11)  |
|     152 | 7.4 IRRBB - Major 2 | A.0    | Up to 1 month          | C13        | =C8+C12       |
|     153 | 7.4 IRRBB - Major 2 | A.0    | 1 Month to <3 months   | D13        | =D8+D12       |
|     154 | 7.4 IRRBB - Major 2 | A.0    | 3 Months to <6 months  | E13        | =E8+E12       |
|     155 | 7.4 IRRBB - Major 2 | A.0    | 6 Months to <12 months | F13        | =F8+F12       |
|     156 | 7.4 IRRBB - Major 2 | A.0    | 1 Year to <2 years     | G13        | =G8+G12       |
|     157 | 7.4 IRRBB - Major 2 | A.0    | 2 Years to <4 years    | H13        | =H8+H12       |
|     158 | 7.4 IRRBB - Major 2 | A.0    | 4 Years to <10 years   | I13        | =I8+I12       |
|     159 | 7.4 IRRBB - Major 2 | A.0    | Over 10 years          | J13        | =J8+J12       |
|     160 | 7.4 IRRBB - Major 2 | B.1.0  | Up to 1 month          | C19        | =SUM(C14:C18) |
|     161 | 7.4 IRRBB - Major 2 | B.1.0  | 1 Month to <3 months   | D19        | =SUM(D14:D18) |
|     162 | 7.4 IRRBB - Major 2 | B.1.0  | 3 Months to <6 months  | E19        | =SUM(E14:E18) |
|     163 | 7.4 IRRBB - Major 2 | B.1.0  | 6 Months to <12 months | F19        | =SUM(F14:F18) |
|   Check | Sheet               | Item   | Column                 | Cell Ref   | Excel         |
|     164 | 7.4 IRRBB - Major 2 | B.1.0  | 1 Year to <2 years     | G19        | =SUM(G14:G18) |
|     165 | 7.4 IRRBB - Major 2 | B.1.0  | 2 Years to <4 years    | H19        | =SUM(H14:H18) |
|     166 | 7.4 IRRBB - Major 2 | B.1.0  | 4 Years to <10 years   | I19        | =SUM(I14:I18) |
|     167 | 7.4 IRRBB - Major 2 | B.1.0  | Over 10 years          | J19        | =SUM(J14:J18) |
|     168 | 7.4 IRRBB - Major 2 | B.2.0  | Up to 1 month          | C23        | =SUM(C20:C22) |
|     169 | 7.4 IRRBB - Major 2 | B.2.0  | 1 Month to <3 months   | D23        | =SUM(D20:D22) |
|     170 | 7.4 IRRBB - Major 2 | B.2.0  | 3 Months to <6 months  | E23        | =SUM(E20:E22) |
|     171 | 7.4 IRRBB - Major 2 | B.2.0  | 6 Months to <12 months | F23        | =SUM(F20:F22) |
|     172 | 7.4 IRRBB - Major 2 | B.2.0  | 1 Year to <2 years     | G23        | =SUM(G20:G22) |
|     173 | 7.4 IRRBB - Major 2 | B.2.0  | 2 Years to <4 years    | H23        | =SUM(H20:H22) |
|     174 | 7.4 IRRBB - Major 2 | B.2.0  | 4 Years to <10 years   | I23        | =SUM(I20:I22) |
|     175 | 7.4 IRRBB - Major 2 | B.2.0  | Over 10 years          | J23        | =SUM(J20:J22) |
|     176 | 7.4 IRRBB - Major 2 | B.0    | Up to 1 month          | C24        | =C19+C23      |
|     178 | 7.4 IRRBB - Major 2 | B.0    | 1 Month to <3 months   | D24        | =D19+D23      |
|     179 | 7.4 IRRBB - Major 2 | B.0    | 3 Months to <6 months  | E24        | =E19+E23      |
|   Check | Sheet               | Item   | Column                 | Cell Ref   | Excel    |
|     180 | 7.4 IRRBB - Major 2 | B.0    | 6 Months to <12 months | F24        | =F19+F23 |
|     181 | 7.4 IRRBB - Major 2 | B.0    | 1 Year to <2 years     | G24        | =G19+G23 |
|     182 | 7.4 IRRBB - Major 2 | B.0    | 2 Years to <4 years    | H24        | =H19+H23 |
|     183 | 7.4 IRRBB - Major 2 | B.0    | 4 Years to <10 years   | I24        | =I19+I23 |
|     184 | 7.4 IRRBB - Major 2 | B.0    | Over 10 years          | J24        | =J19+J23 |
|     185 | 7.4 IRRBB - Major 2 | C.1    | Up to 1 month          | C25        | =C13-C24 |
|     186 | 7.4 IRRBB - Major 2 | C.1    | 1 Month to <3 months   | D25        | =D13-D24 |
|     187 | 7.4 IRRBB - Major 2 | C.1    | 3 Months to <6 months  | E25        | =E13-E24 |
|     188 | 7.4 IRRBB - Major 2 | C.1    | 6 Months to <12 months | F25        | =F13-F24 |
|     189 | 7.4 IRRBB - Major 2 | C.1    | 1 Year to <2 years     | G25        | =G13-G24 |
|     190 | 7.4 IRRBB - Major 2 | C.1    | 2 Years to <4 years    | H25        | =H13-H24 |
|     191 | 7.4 IRRBB - Major 2 | C.1    | 4 Years to <10 years   | I25        | =I13-I24 |
|     192 | 7.4 IRRBB - Major 2 | C.1    | Over 10 years          | J25        | =J13-J24 |
|     193 | 7.4 IRRBB - Major 2 | C.2    | Up to 1 month          | C26        | -0.08%   |
|     194 | 7.4 IRRBB - Major 2 | C.2    | 1 Month to <3 months   | D26        | -0.32%   |
|   Check | Sheet               | Item   | Column                 | Cell Ref   | Excel              |
|     195 | 7.4 IRRBB - Major 2 | C.2    | 3 Months to <6 months  | E26        | -0.72%             |
|     196 | 7.4 IRRBB - Major 2 | C.2    | 6 Months to <12 months | F26        | -1.43%             |
|     197 | 7.4 IRRBB - Major 2 | C.2    | 1 Year to <2 years     | G26        | -2.77%             |
|     198 | 7.4 IRRBB - Major 2 | C.2    | 2 Years to <4 years    | H26        | -5.45%             |
|     199 | 7.4 IRRBB - Major 2 | C.2    | 4 Years to <10 years   | I26        | -11.57%            |
|     200 | 7.4 IRRBB - Major 2 | C.2    | Over 10 years          | J26        | -17.84%            |
|     201 | 7.4 IRRBB - Major 2 | C.3    | Up to 1 month          | C27        | =ROUND(C25*C26,0)  |
|     202 | 7.4 IRRBB - Major 2 | C.3    | 1 Month to <3 months   | D27        | =ROUND(D25*D26,0)  |
|     203 | 7.4 IRRBB - Major 2 | C.3    | 3 Months to <6 months  | E27        | =ROUND(E25*E26,0)  |
|     204 | 7.4 IRRBB - Major 2 | C.3    | 6 Months to <12 months | F27        | =ROUND(F25*F26,0)  |
|     205 | 7.4 IRRBB - Major 2 | C.3    | 1 Year to <2 years     | G27        | =ROUND(G25*G26,0)  |
|     206 | 7.4 IRRBB - Major 2 | C.3    | 2 Years to <4 years    | H27        | =ROUND(H25*H26,0)  |
|     207 | 7.4 IRRBB - Major 2 | C.3    | 4 Years to <10 years   | I27        | =ROUND(I25*I26,0)  |
|     208 | 7.4 IRRBB - Major 2 | C.3    | Over 10 years          | J27        | =ROUND(J25*J26,0)  |
|     209 | 7.4 IRRBB - Major 2 | D      | Up to 1 month          | C28        | =ABS(SUM(C27:J27)) |