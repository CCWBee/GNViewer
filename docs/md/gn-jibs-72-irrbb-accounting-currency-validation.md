
## Guidance Note

## Validation and verification of the '7.2 IRRBB - Accounting Currency' Sheet

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

|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|---------|---------------------------------|--------|------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 7.2 IRRBB - Accounting Currency | A.1.1  | Up To 1 Month          | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 7.2 IRRBB - Accounting Currency | A.1.1  | 1 Month To <3 Months   | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 7.2 IRRBB - Accounting Currency | A.1.1  | 3 Months To <6 Months  | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 7.2 IRRBB - Accounting Currency | A.1.1  | 6 Months To <12 Months | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 7.2 IRRBB - Accounting Currency | A.1.1  | 1 Year To <2 Years     | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 7.2 IRRBB - Accounting Currency | A.1.1  | 2 Years To <4 Years    | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 7.2 IRRBB - Accounting Currency | A.1.1  | 4 Years To <10 Years   | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 7.2 IRRBB - Accounting Currency | A.1.1  | Over 10 Years          | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 7.2 IRRBB - Accounting Currency | A.1.2  | Up To 1 Month          | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 7.2 IRRBB - Accounting Currency | A.1.2  | 1 Month To <3 Months   | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 7.2 IRRBB - Accounting Currency | A.1.2  | 3 Months To <6 Months  | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 7.2 IRRBB - Accounting Currency | A.1.2  | 6 Months To <12 Months | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 7.2 IRRBB - Accounting Currency | A.1.2  | 1 Year To <2 Years     | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 7.2 IRRBB - Accounting Currency | A.1.2  | 2 Years To <4 Years    | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      15 | 7.2 IRRBB - Accounting Currency | A.1.2  | 4 Years To <10 Years   | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 7.2 IRRBB - Accounting Currency | A.1.2  | Over 10 Years          | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 7.2 IRRBB - Accounting Currency | A.1.3  | Up To 1 Month          | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 7.2 IRRBB - Accounting Currency | A.1.3  | 1 Month To <3 Months   | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 7.2 IRRBB - Accounting Currency | A.1.3  | 3 Months To <6 Months  | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 7.2 IRRBB - Accounting Currency | A.1.3  | 6 Months To <12 Months | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 7.2 IRRBB - Accounting Currency | A.1.3  | 1 Year To <2 Years     | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 7.2 IRRBB - Accounting Currency | A.1.3  | 2 Years To <4 Years    | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 7.2 IRRBB - Accounting Currency | A.1.3  | 4 Years To <10 Years   | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 7.2 IRRBB - Accounting Currency | A.1.3  | Over 10 Years          | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 7.2 IRRBB - Accounting Currency | A.1.4  | Up To 1 Month          | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 7.2 IRRBB - Accounting Currency | A.1.4  | 1 Month To <3 Months   | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 7.2 IRRBB - Accounting Currency | A.1.4  | 3 Months To <6 Months  | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 7.2 IRRBB - Accounting Currency | A.1.4  | 6 Months To <12 Months | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 7.2 IRRBB - Accounting Currency | A.1.4  | 1 Year To <2 Years     | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 7.2 IRRBB - Accounting Currency | A.1.4  | 2 Years To <4 Years    | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 7.2 IRRBB - Accounting Currency | A.1.4  | 4 Years To <10 Years   | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 7.2 IRRBB - Accounting Currency | A.1.4  | Over 10 Years          | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      33 | 7.2 IRRBB - Accounting Currency | A.1.5  | Up To 1 Month          | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 7.2 IRRBB - Accounting Currency | A.1.5  | 1 Month To <3 Months   | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 7.2 IRRBB - Accounting Currency | A.1.5  | 3 Months To <6 Months  | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 7.2 IRRBB - Accounting Currency | A.1.5  | 6 Months To <12 Months | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 7.2 IRRBB - Accounting Currency | A.1.5  | 1 Year To <2 Years     | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 7.2 IRRBB - Accounting Currency | A.1.5  | 2 Years To <4 Years    | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 7.2 IRRBB - Accounting Currency | A.1.5  | 4 Years To <10 Years   | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 7.2 IRRBB - Accounting Currency | A.1.5  | Over 10 Years          | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 7.2 IRRBB - Accounting Currency | A.2.1  | Up To 1 Month          | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 7.2 IRRBB - Accounting Currency | A.2.1  | 1 Month To <3 Months   | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 7.2 IRRBB - Accounting Currency | A.2.1  | 3 Months To <6 Months  | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 7.2 IRRBB - Accounting Currency | A.2.1  | 6 Months To <12 Months | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 7.2 IRRBB - Accounting Currency | A.2.1  | 1 Year To <2 Years     | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 7.2 IRRBB - Accounting Currency | A.2.1  | 2 Years To <4 Years    | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 7.2 IRRBB - Accounting Currency | A.2.1  | 4 Years To <10 Years   | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 7.2 IRRBB - Accounting Currency | A.2.1  | Over 10 Years          | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 7.2 IRRBB - Accounting Currency | A.2.2  | Up To 1 Month          | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 7.2 IRRBB - Accounting Currency | A.2.2  | 1 Month To <3 Months   | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      51 | 7.2 IRRBB - Accounting Currency | A.2.2  | 3 Months To <6 Months  | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 7.2 IRRBB - Accounting Currency | A.2.2  | 6 Months To <12 Months | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 7.2 IRRBB - Accounting Currency | A.2.2  | 1 Year To <2 Years     | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 7.2 IRRBB - Accounting Currency | A.2.2  | 2 Years To <4 Years    | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 7.2 IRRBB - Accounting Currency | A.2.2  | 4 Years To <10 Years   | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 7.2 IRRBB - Accounting Currency | A.2.2  | Over 10 Years          | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 7.2 IRRBB - Accounting Currency | A.2.3  | Up To 1 Month          | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 7.2 IRRBB - Accounting Currency | A.2.3  | 1 Month To <3 Months   | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 7.2 IRRBB - Accounting Currency | A.2.3  | 3 Months To <6 Months  | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 7.2 IRRBB - Accounting Currency | A.2.3  | 6 Months To <12 Months | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 7.2 IRRBB - Accounting Currency | A.2.3  | 1 Year To <2 Years     | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 7.2 IRRBB - Accounting Currency | A.2.3  | 2 Years To <4 Years    | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 7.2 IRRBB - Accounting Currency | A.2.3  | 4 Years To <10 Years   | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 7.2 IRRBB - Accounting Currency | A.2.3  | Over 10 Years          | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 7.2 IRRBB - Accounting Currency | B.1.1  | Up To 1 Month          | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 7.2 IRRBB - Accounting Currency | B.1.1  | 1 Month To <3 Months   | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 7.2 IRRBB - Accounting Currency | B.1.1  | 3 Months To <6 Months  | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 7.2 IRRBB - Accounting Currency | B.1.1  | 6 Months To <12 Months | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      69 | 7.2 IRRBB - Accounting Currency | B.1.1  | 1 Year To <2 Years     | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 7.2 IRRBB - Accounting Currency | B.1.1  | 2 Years To <4 Years    | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 7.2 IRRBB - Accounting Currency | B.1.1  | 4 Years To <10 Years   | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 7.2 IRRBB - Accounting Currency | B.1.1  | Over 10 Years          | J14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 7.2 IRRBB - Accounting Currency | B.1.2  | Up To 1 Month          | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 7.2 IRRBB - Accounting Currency | B.1.2  | 1 Month To <3 Months   | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 7.2 IRRBB - Accounting Currency | B.1.2  | 3 Months To <6 Months  | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 7.2 IRRBB - Accounting Currency | B.1.2  | 6 Months To <12 Months | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 7.2 IRRBB - Accounting Currency | B.1.2  | 1 Year To <2 Years     | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 7.2 IRRBB - Accounting Currency | B.1.2  | 2 Years To <4 Years    | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 7.2 IRRBB - Accounting Currency | B.1.2  | 4 Years To <10 Years   | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 7.2 IRRBB - Accounting Currency | B.1.2  | Over 10 Years          | J15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 7.2 IRRBB - Accounting Currency | B.1.3  | Up To 1 Month          | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      82 | 7.2 IRRBB - Accounting Currency | B.1.3  | 1 Month To <3 Months   | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 7.2 IRRBB - Accounting Currency | B.1.3  | 3 Months To <6 Months  | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 7.2 IRRBB - Accounting Currency | B.1.3  | 6 Months To <12 Months | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 7.2 IRRBB - Accounting Currency | B.1.3  | 1 Year To <2 Years     | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 7.2 IRRBB - Accounting Currency | B.1.3  | 2 Years To <4 Years    | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|      87 | 7.2 IRRBB - Accounting Currency | B.1.3  | 4 Years To <10 Years   | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 7.2 IRRBB - Accounting Currency | B.1.3  | Over 10 Years          | J16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 7.2 IRRBB - Accounting Currency | B.1.4  | Up To 1 Month          | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 7.2 IRRBB - Accounting Currency | B.1.4  | 1 Month To <3 Months   | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 7.2 IRRBB - Accounting Currency | B.1.4  | 3 Months To <6 Months  | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 7.2 IRRBB - Accounting Currency | B.1.4  | 6 Months To <12 Months | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 7.2 IRRBB - Accounting Currency | B.1.4  | 1 Year To <2 Years     | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 7.2 IRRBB - Accounting Currency | B.1.4  | 2 Years To <4 Years    | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 7.2 IRRBB - Accounting Currency | B.1.4  | 4 Years To <10 Years   | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 7.2 IRRBB - Accounting Currency | B.1.4  | Over 10 Years          | J17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 7.2 IRRBB - Accounting Currency | B.1.5  | Up To 1 Month          | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 7.2 IRRBB - Accounting Currency | B.1.5  | 1 Month To <3 Months   | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      99 | 7.2 IRRBB - Accounting Currency | B.1.5  | 3 Months To <6 Months  | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 7.2 IRRBB - Accounting Currency | B.1.5  | 6 Months To <12 Months | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 7.2 IRRBB - Accounting Currency | B.1.5  | 1 Year To <2 Years     | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 7.2 IRRBB - Accounting Currency | B.1.5  | 2 Years To <4 Years    | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 7.2 IRRBB - Accounting Currency | B.1.5  | 4 Years To <10 Years   | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 7.2 IRRBB - Accounting Currency | B.1.5  | Over 10 Years          | J18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column                 | Cell  Ref   | Validation Message                                                         |
|     105 | 7.2 IRRBB - Accounting Currency | B.2.1  | Up To 1 Month          | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 7.2 IRRBB - Accounting Currency | B.2.1  | 1 Month To <3 Months   | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 7.2 IRRBB - Accounting Currency | B.2.1  | 3 Months To <6 Months  | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 7.2 IRRBB - Accounting Currency | B.2.1  | 6 Months To <12 Months | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 7.2 IRRBB - Accounting Currency | B.2.1  | 1 Year To <2 Years     | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 7.2 IRRBB - Accounting Currency | B.2.1  | 2 Years To <4 Years    | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 7.2 IRRBB - Accounting Currency | B.2.1  | 4 Years To <10 Years   | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 7.2 IRRBB - Accounting Currency | B.2.1  | Over 10 Years          | J20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 7.2 IRRBB - Accounting Currency | B.2.2  | Up To 1 Month          | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 7.2 IRRBB - Accounting Currency | B.2.2  | 1 Month To <3 Months   | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 7.2 IRRBB - Accounting Currency | B.2.2  | 3 Months To <6 Months  | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     116 | 7.2 IRRBB - Accounting Currency | B.2.2  | 6 Months To <12 Months | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 7.2 IRRBB - Accounting Currency | B.2.2  | 1 Year To <2 Years     | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 7.2 IRRBB - Accounting Currency | B.2.2  | 2 Years To <4 Years    | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 7.2 IRRBB - Accounting Currency | B.2.2  | 4 Years To <10 Years   | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 7.2 IRRBB - Accounting Currency | B.2.2  | Over 10 Years          | J21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 7.2 IRRBB - Accounting Currency | B.2.3  | Up To 1 Month          | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 7.2 IRRBB - Accounting Currency | B.2.3  | 1 Month To <3 Months   | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item                                  | Column                 | Cell  Ref   | Validation Message                                                         |
|     123 | 7.2 IRRBB - Accounting Currency | B.2.3                                 | 3 Months To <6 Months  | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 7.2 IRRBB - Accounting Currency | B.2.3                                 | 6 Months To <12 Months | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 7.2 IRRBB - Accounting Currency | B.2.3                                 | 1 Year To <2 Years     | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 |                                 | 7.2 IRRBB - Accounting Currency B.2.3 | 2 Years To <4 Years    | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 |                                 | 7.2 IRRBB - Accounting Currency B.2.3 | 4 Years To <10 Years   | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 |                                 | 7.2 IRRBB - Accounting Currency B.2.3 | Over 10 Years          | J22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 7.2 IRRBB - Accounting Currency | D                                     | 1 Month To <3 Months   | D28         | Must be blank                                                              |
|     130 | 7.2 IRRBB - Accounting Currency | D                                     | 3 Months To <6 Months  | E28         | Must be blank                                                              |
|     131 | 7.2 IRRBB - Accounting Currency | D                                     | 6 Months To <12 Months | F28         | Must be blank                                                              |
|     132 | 7.2 IRRBB - Accounting Currency | D                                     | 1 Year To <2 Years     | G28         | Must be blank                                                              |
|     133 | 7.2 IRRBB - Accounting Currency | D                                     | 2 Years To <4 Years    | H28         | Must be blank                                                              |
|     134 |                                 | 7.2 IRRBB - Accounting Currency D     | 4 Years To <10 Years   | I28         | Must be blank                                                              |
|     135 | 7.2 IRRBB - Accounting Currency | D                                     | Over 10 Years          | J28         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel        |
|---------|----------------------------------|--------|------------------------|------------|--------------|
|     136 | 7.2 IRRBB - Accounting  Currency | A.1.0  | Up to 1 Month          | C8         | =SUM(C3:C7)  |
|     137 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 1 Month to <3 months   | D8         | =SUM(D3:D7)  |
|     138 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 3 Months to <6 months  | E8         | =SUM(E3:E7)  |
|     139 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 6 Months to <12 months | F8         | =SUM(F3:F7)  |
|     140 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 1 Year to <2 years     | G8         | =SUM(G3:G7)  |
|     141 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 2 Years to <4 years    | H8         | =SUM(H3:H7)  |
|     142 | 7.2 IRRBB - Accounting  Currency | A.1.0  | 4 Years to <10 years   | I8         | =SUM(I3:I7)  |
|     143 | 7.2 IRRBB - Accounting  Currency | A.1.0  | Over 10 years          | J8         | =SUM(J3:J7)  |
|     144 | 7.2 IRRBB - Accounting  Currency | A.2.0  | Up to 1 Month          | C12        | =SUM(C9:C11) |
|     145 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 1 Month to <3 months   | D12        | =SUM(D9:D11) |
|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel        |
|     146 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 3 Months to <6 months  | E12        | =SUM(E9:E11) |
|     147 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 6 Months to <12 months | F12        | =SUM(F9:F11) |
|     148 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 1 Year to <2 years     | G12        | =SUM(G9:G11) |
|     149 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 2 Years to <4 years    | H12        | =SUM(H9:H11) |
|     150 | 7.2 IRRBB - Accounting  Currency | A.2.0  | 4 Years to <10 years   | I12        | =SUM(I9:I11) |
|     151 | 7.2 IRRBB - Accounting  Currency | A.2.0  | Over 10 years          | J12        | =SUM(J9:J11) |
|     152 | 7.2 IRRBB - Accounting  Currency | A.0    | Up to 1 Month          | C13        | =C8+C12      |
|     153 | 7.2 IRRBB - Accounting  Currency | A.0    | 1 Month to <3 months   | D13        | =D8+D12      |
|     154 | 7.2 IRRBB - Accounting  Currency | A.0    | 3 Months to <6 months  | E13        | =E8+E12      |
|     155 | 7.2 IRRBB - Accounting  Currency | A.0    | 6 Months to <12 months | F13        | =F8+F12      |
|     156 | 7.2 IRRBB - Accounting  Currency | A.0    | 1 Year to <2 years     | G13        | =G8+G12      |
|     157 | 7.2 IRRBB - Accounting  Currency | A.0    | 2 Years to <4 years    | H13        | =H8+H12      |
|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel         |
|     158 | 7.2 IRRBB - Accounting  Currency | A.0    | 4 Years to <10 years   | I13        | =I8+I12       |
|     159 | 7.2 IRRBB - Accounting  Currency | A.0    | Over 10 years          | J13        | =J8+J12       |
|     160 | 7.2 IRRBB - Accounting  Currency | B.1.0  | Up to 1 Month          | C19        | =SUM(C14:C18) |
|     161 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 1 Month to <3 months   | D19        | =SUM(D14:D18) |
|     162 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 3 Months to <6 months  | E19        | =SUM(E14:E18) |
|     163 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 6 Months to <12 months | F19        | =SUM(F14:F18) |
|     164 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 1 Year to <2 years     | G19        | =SUM(G14:G18) |
|     165 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 2 Years to <4 years    | H19        | =SUM(H14:H18) |
|     166 | 7.2 IRRBB - Accounting  Currency | B.1.0  | 4 Years to <10 years   | I19        | =SUM(I14:I18) |
|     167 | 7.2 IRRBB - Accounting  Currency | B.1.0  | Over 10 years          | J19        | =SUM(J14:J18) |
|     168 | 7.2 IRRBB - Accounting  Currency | B.2.0  | Up to 1 Month          | C23        | =SUM(C20:C22) |
|     169 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 1 Month to <3 months   | D23        | =SUM(D20:D22) |
|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel         |
|     170 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 3 Months to <6 months  | E23        | =SUM(E20:E22) |
|     171 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 6 Months to <12 months | F23        | =SUM(F20:F22) |
|     172 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 1 Year to <2 years     | G23        | =SUM(G20:G22) |
|     173 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 2 Years to <4 years    | H23        | =SUM(H20:H22) |
|     174 | 7.2 IRRBB - Accounting  Currency | B.2.0  | 4 Years to <10 years   | I23        | =SUM(I20:I22) |
|     175 | 7.2 IRRBB - Accounting  Currency | B.2.0  | Over 10 years          | J23        | =SUM(J20:J22) |
|     176 | 7.2 IRRBB - Accounting  Currency | B.0    | Up to 1 Month          | C24        | =C19+C23      |
|     177 | 7.2 IRRBB - Accounting  Currency | B.0    | 1 Month to <3 months   | D24        | =D19+D23      |
|     178 | 7.2 IRRBB - Accounting  Currency | B.0    | 3 Months to <6 months  | E24        | =E19+E23      |
|     179 | 7.2 IRRBB - Accounting  Currency | B.0    | 6 Months to <12 months | F24        | =F19+F23      |
|     180 | 7.2 IRRBB - Accounting  Currency | B.0    | 1 Year to <2 years     | G24        | =G19+G23      |
|     181 | 7.2 IRRBB - Accounting  Currency | B.0    | 2 Years to <4 years    | H24        | =H19+H23      |
|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel    |
|     182 | 7.2 IRRBB - Accounting  Currency | B.0    | 4 Years to <10 years   | I24        | =I19+I23 |
|     183 | 7.2 IRRBB - Accounting  Currency | B.0    | Over 10 years          | J24        | =J19+J23 |
|     184 | 7.2 IRRBB - Accounting  Currency | C.1    | Up to 1 Month          | C25        | =C13-C24 |
|     185 | 7.2 IRRBB - Accounting  Currency | C.1    | 1 Month to <3 months   | D25        | =D13-D24 |
|     186 | 7.2 IRRBB - Accounting  Currency | C.1    | 3 Months to <6 months  | E25        | =E13-E24 |
|     187 | 7.2 IRRBB - Accounting  Currency | C.1    | 6 Months to <12 months | F25        | =F13-F24 |
|     188 | 7.2 IRRBB - Accounting  Currency | C.1    | 1 Year to <2 years     | G25        | =G13-G24 |
|     189 | 7.2 IRRBB - Accounting  Currency | C.1    | 2 Years to <4 years    | H25        | =H13-H24 |
|     190 | 7.2 IRRBB - Accounting  Currency | C.1    | 4 Years to <10 years   | I25        | =I13-I24 |
|     191 | 7.2 IRRBB - Accounting  Currency | C.1    | Over 10 years          | J25        | =J13-J24 |
|     192 | 7.2 IRRBB - Accounting  Currency | C.2    | Up to 1 Month          | C26        | -0.08%   |
|     193 | 7.2 IRRBB - Accounting  Currency | C.2    | 1 Month to <3 months   | D26        | -0.32%   |
|   Check | Sheet                            | Item   | Column                 | Cell Ref   | Excel             |
|     194 | 7.2 IRRBB - Accounting  Currency | C.2    | 3 Months to <6 months  | E26        | -0.72%            |
|     195 | 7.2 IRRBB - Accounting  Currency | C.2    | 6 Months to <12 months | F26        | -1.43%            |
|     196 | 7.2 IRRBB - Accounting  Currency | C.2    | 1 Year to <2 years     | G26        | -2.77%            |
|     197 | 7.2 IRRBB - Accounting  Currency | C.2    | 2 Years to <4 years    | H26        | -5.45%            |
|     198 | 7.2 IRRBB - Accounting  Currency | C.2    | 4 Years to <10 years   | I26        | -11.57%           |
|     199 | 7.2 IRRBB - Accounting  Currency | C.2    | Over 10 years          | J26        | -17.84%           |
|     200 | 7.2 IRRBB - Accounting  Currency | C.3    | Up to 1 Month          | C27        | =ROUND(C25*C26,0) |
|     201 | 7.2 IRRBB - Accounting  Currency | C.3    | 1 Month to <3 months   | D27        | =ROUND(D25*D26,0) |
|     202 | 7.2 IRRBB - Accounting  Currency | C.3    | 3 Months to <6 months  | E27        | =ROUND(E25*E26,0) |
|     203 | 7.2 IRRBB - Accounting  Currency | C.3    | 6 Months to <12 months | F27        | =ROUND(F25*F26,0) |
|     204 | 7.2 IRRBB - Accounting  Currency | C.3    | 1 Year to <2 years     | G27        | =ROUND(G25*G26,0) |
|     205 | 7.2 IRRBB - Accounting  Currency | C.3    | 2 Years to <4 years    | H27        | =ROUND(H25*H26,0) |
|   Check | Sheet                            | Item   | Column               | Cell Ref   | Excel              |
|     206 | 7.2 IRRBB - Accounting  Currency | C.3    | 4 Years to <10 years | I27        | =ROUND(I25*I26,0)  |
|     207 | 7.2 IRRBB - Accounting  Currency | C.3    | Over 10 years        | J27        | =ROUND(J25*J26,0)  |
|     208 | 7.2 IRRBB - Accounting  Currency | D      | Up to 1 Month        | C28        | =ABS(SUM(C27:J27)) |