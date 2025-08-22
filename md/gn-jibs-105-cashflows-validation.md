
## Guidance Note

## Validation and verification of the '10.5 Cashflows' Sheet

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

|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|---------|----------------|--------|---------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 10.5 Cashflows | RE.01  | Sight                     | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 10.5 Cashflows | RE.01  | > Sight To 5 Working Days | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 10.5 Cashflows | RE.01  | 6 Working Days To 30 Days | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 10.5 Cashflows | RE.01  | 31 Days To 3 Months       | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 10.5 Cashflows | RE.01  | > 3 Months To 6 Months    | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 10.5 Cashflows | RE.01  | > 6 Months To 1 Year      | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 10.5 Cashflows | RE.01  | > 1 Year To 3 Years       | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 10.5 Cashflows | RE.01  | > 3 Years To 5 Years      | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 10.5 Cashflows | RE.01  | > 5 Years                 | K3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 10.5 Cashflows | RE.02  | Sight                     | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 10.5 Cashflows | RE.02  | > Sight To 5 Working Days | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 10.5 Cashflows | RE.02  | 6 Working Days To 30 Days | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 10.5 Cashflows | RE.02  | 31 Days To 3 Months       | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      14 | 10.5 Cashflows | RE.02  | > 3 Months To 6 Months    | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 10.5 Cashflows | RE.02  | > 6 Months To 1 Year      | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 10.5 Cashflows | RE.02  | > 1 Year To 3 Years       | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 10.5 Cashflows | RE.02  | > 3 Years To 5 Years      | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 10.5 Cashflows | RE.02  | > 5 Years                 | K4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 10.5 Cashflows | RE.03  | Sight                     | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 10.5 Cashflows | RE.03  | > Sight To 5 Working Days | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 10.5 Cashflows | RE.03  | 6 Working Days To 30 Days | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 10.5 Cashflows | RE.03  | 31 Days To 3 Months       | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 10.5 Cashflows | RE.03  | > 3 Months To 6 Months    | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 10.5 Cashflows | RE.03  | > 6 Months To 1 Year      | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 10.5 Cashflows | RE.03  | > 1 Year To 3 Years       | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 10.5 Cashflows | RE.03  | > 3 Years To 5 Years      | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 10.5 Cashflows | RE.03  | > 5 Years                 | K5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 10.5 Cashflows | RE.04  | Sight                     | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 10.5 Cashflows | RE.04  | > Sight To 5 Working Days | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 10.5 Cashflows | RE.04  | 6 Working Days To 30 Days | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      31 | 10.5 Cashflows | RE.04  | 31 Days To 3 Months       | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 10.5 Cashflows | RE.04  | > 3 Months To 6 Months    | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 10.5 Cashflows | RE.04  | > 6 Months To 1 Year      | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 10.5 Cashflows | RE.04  | > 1 Year To 3 Years       | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 10.5 Cashflows | RE.04  | > 3 Years To 5 Years      | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 10.5 Cashflows | RE.04  | > 5 Years                 | K6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 10.5 Cashflows | RE.05  | Sight                     | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 10.5 Cashflows | RE.05  | > Sight To 5 Working Days | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 10.5 Cashflows | RE.05  | 6 Working Days To 30 Days | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 10.5 Cashflows | RE.05  | 31 Days To 3 Months       | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 10.5 Cashflows | RE.05  | > 3 Months To 6 Months    | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 10.5 Cashflows | RE.05  | > 6 Months To 1 Year      | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 10.5 Cashflows | RE.05  | > 1 Year To 3 Years       | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 10.5 Cashflows | RE.05  | > 3 Years To 5 Years      | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 10.5 Cashflows | RE.05  | > 5 Years                 | K7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 10.5 Cashflows | RE.06  | Sight                     | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 10.5 Cashflows | RE.06  | > Sight To 5 Working Days | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      48 | 10.5 Cashflows | RE.06  | 6 Working Days To 30 Days | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 10.5 Cashflows | RE.06  | 31 Days To 3 Months       | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 10.5 Cashflows | RE.06  | > 3 Months To 6 Months    | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 10.5 Cashflows | RE.06  | > 6 Months To 1 Year      | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 10.5 Cashflows | RE.06  | > 1 Year To 3 Years       | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 10.5 Cashflows | RE.06  | > 3 Years To 5 Years      | J8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 10.5 Cashflows | RE.06  | > 5 Years                 | K8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 10.5 Cashflows | RE.07  | Sight                     | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 10.5 Cashflows | RE.07  | > Sight To 5 Working Days | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 10.5 Cashflows | RE.07  | 6 Working Days To 30 Days | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 10.5 Cashflows | RE.07  | 31 Days To 3 Months       | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 10.5 Cashflows | RE.07  | > 3 Months To 6 Months    | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 10.5 Cashflows | RE.07  | > 6 Months To 1 Year      | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 10.5 Cashflows | RE.07  | > 1 Year To 3 Years       | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 10.5 Cashflows | RE.07  | > 3 Years To 5 Years      | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 10.5 Cashflows | RE.07  | > 5 Years                 | K9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 10.5 Cashflows | RE.08  | Sight                     | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      65 | 10.5 Cashflows | RE.08  | > Sight To 5 Working Days | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 10.5 Cashflows | RE.08  | 6 Working Days To 30 Days | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 10.5 Cashflows | RE.08  | 31 Days To 3 Months       | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 10.5 Cashflows | RE.08  | > 3 Months To 6 Months    | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 10.5 Cashflows | RE.08  | > 6 Months To 1 Year      | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 10.5 Cashflows | RE.08  | > 1 Year To 3 Years       | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 10.5 Cashflows | RE.08  | > 3 Years To 5 Years      | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 10.5 Cashflows | RE.08  | > 5 Years                 | K10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 10.5 Cashflows | RE.09  | Sight                     | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 10.5 Cashflows | RE.09  | > Sight To 5 Working Days | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 10.5 Cashflows | RE.09  | 6 Working Days To 30 Days | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 10.5 Cashflows | RE.09  | 31 Days To 3 Months       | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 10.5 Cashflows | RE.09  | > 3 Months To 6 Months    | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 10.5 Cashflows | RE.09  | > 6 Months To 1 Year      | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 10.5 Cashflows | RE.09  | > 1 Year To 3 Years       | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 10.5 Cashflows | RE.09  | > 3 Years To 5 Years      | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 10.5 Cashflows | RE.09  | > 5 Years                 | K11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      82 | 10.5 Cashflows | RE.10  | Sight                     | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 10.5 Cashflows | RE.10  | > Sight To 5 Working Days | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 10.5 Cashflows | RE.10  | 6 Working Days To 30 Days | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 10.5 Cashflows | RE.10  | 31 Days To 3 Months       | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 10.5 Cashflows | RE.10  | > 3 Months To 6 Months    | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 10.5 Cashflows | RE.10  | > 6 Months To 1 Year      | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 10.5 Cashflows | RE.10  | > 1 Year To 3 Years       | I12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 10.5 Cashflows | RE.10  | > 3 Years To 5 Years      | J12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 10.5 Cashflows | RE.10  | > 5 Years                 | K12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 10.5 Cashflows | RE.11  | Sight                     | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 10.5 Cashflows | RE.11  | > Sight To 5 Working Days | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 10.5 Cashflows | RE.11  | 6 Working Days To 30 Days | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 10.5 Cashflows | RE.11  | 31 Days To 3 Months       | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 10.5 Cashflows | RE.11  | > 3 Months To 6 Months    | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 10.5 Cashflows | RE.11  | > 6 Months To 1 Year      | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 10.5 Cashflows | RE.11  | > 1 Year To 3 Years       | I13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 10.5 Cashflows | RE.11  | > 3 Years To 5 Years      | J13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      99 | 10.5 Cashflows | RE.11  | > 5 Years                 | K13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 10.5 Cashflows | OL.01  | Sight                     | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 10.5 Cashflows | OL.01  | > Sight To 5 Working Days | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 10.5 Cashflows | OL.01  | 6 Working Days To 30 Days | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 10.5 Cashflows | OL.01  | 31 Days To 3 Months       | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 10.5 Cashflows | OL.01  | > 3 Months To 6 Months    | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 10.5 Cashflows | OL.01  | > 6 Months To 1 Year      | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 10.5 Cashflows | OL.01  | > 1 Year To 3 Years       | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 10.5 Cashflows | OL.01  | > 3 Years To 5 Years      | J15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 10.5 Cashflows | OL.01  | > 5 Years                 | K15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 10.5 Cashflows | OL.02  | Sight                     | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 10.5 Cashflows | OL.02  | > Sight To 5 Working Days | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 10.5 Cashflows | OL.02  | 6 Working Days To 30 Days | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 10.5 Cashflows | OL.02  | 31 Days To 3 Months       | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 10.5 Cashflows | OL.02  | > 3 Months To 6 Months    | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 10.5 Cashflows | OL.02  | > 6 Months To 1 Year      | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 10.5 Cashflows | OL.02  | > 1 Year To 3 Years       | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     116 | 10.5 Cashflows | OL.02  | > 3 Years To 5 Years      | J16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 10.5 Cashflows | OL.02  | > 5 Years                 | K16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 10.5 Cashflows | OL.03  | Sight                     | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 10.5 Cashflows | OL.03  | > Sight To 5 Working Days | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 10.5 Cashflows | OL.03  | 6 Working Days To 30 Days | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 10.5 Cashflows | OL.03  | 31 Days To 3 Months       | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 10.5 Cashflows | OL.03  | > 3 Months To 6 Months    | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 10.5 Cashflows | OL.03  | > 6 Months To 1 Year      | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 10.5 Cashflows | OL.03  | > 1 Year To 3 Years       | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 10.5 Cashflows | OL.03  | > 3 Years To 5 Years      | J17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 10.5 Cashflows | OL.03  | > 5 Years                 | K17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 10.5 Cashflows | OL.04  | Sight                     | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 10.5 Cashflows | OL.04  | > Sight To 5 Working Days | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 10.5 Cashflows | OL.04  | 6 Working Days To 30 Days | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     130 | 10.5 Cashflows | OL.04  | 31 Days To 3 Months       | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 10.5 Cashflows | OL.04  | > 3 Months To 6 Months    | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     132 | 10.5 Cashflows | OL.04  | > 6 Months To 1 Year      | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     133 | 10.5 Cashflows | OL.04  | > 1 Year To 3 Years       | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     134 | 10.5 Cashflows | OL.04  | > 3 Years To 5 Years      | J18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 10.5 Cashflows | OL.04  | > 5 Years                 | K18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 10.5 Cashflows | OL.05  | Sight                     | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 10.5 Cashflows | OL.05  | > Sight To 5 Working Days | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 10.5 Cashflows | OL.05  | 6 Working Days To 30 Days | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 10.5 Cashflows | OL.05  | 31 Days To 3 Months       | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     140 | 10.5 Cashflows | OL.05  | > 3 Months To 6 Months    | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     141 | 10.5 Cashflows | OL.05  | > 6 Months To 1 Year      | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     142 | 10.5 Cashflows | OL.05  | > 1 Year To 3 Years       | I19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 10.5 Cashflows | OL.05  | > 3 Years To 5 Years      | J19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     144 | 10.5 Cashflows | OL.05  | > 5 Years                 | K19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 10.5 Cashflows | OL.06  | Sight                     | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     146 | 10.5 Cashflows | OL.06  | > Sight To 5 Working Days | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     147 | 10.5 Cashflows | OL.06  | 6 Working Days To 30 Days | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 10.5 Cashflows | OL.06  | 31 Days To 3 Months       | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     149 | 10.5 Cashflows | OL.06  | > 3 Months To 6 Months    | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     150 | 10.5 Cashflows | OL.06  | > 6 Months To 1 Year      | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     151 | 10.5 Cashflows | OL.06  | > 1 Year To 3 Years       | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     152 | 10.5 Cashflows | OL.06  | > 3 Years To 5 Years      | J20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 10.5 Cashflows | OL.06  | > 5 Years                 | K20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     154 | 10.5 Cashflows | OL.07  | Sight                     | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     155 | 10.5 Cashflows | OL.07  | > Sight To 5 Working Days | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     156 | 10.5 Cashflows | OL.07  | 6 Working Days To 30 Days | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 10.5 Cashflows | OL.07  | 31 Days To 3 Months       | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     158 | 10.5 Cashflows | OL.07  | > 3 Months To 6 Months    | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     159 | 10.5 Cashflows | OL.07  | > 6 Months To 1 Year      | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 10.5 Cashflows | OL.07  | > 1 Year To 3 Years       | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     161 | 10.5 Cashflows | OL.07  | > 3 Years To 5 Years      | J21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 10.5 Cashflows | OL.07  | > 5 Years                 | K21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     163 | 10.5 Cashflows | OL.08  | Sight                     | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     164 | 10.5 Cashflows | OL.08  | > Sight To 5 Working Days | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 10.5 Cashflows | OL.08  | 6 Working Days To 30 Days | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     166 | 10.5 Cashflows | OL.08  | 31 Days To 3 Months       | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     167 | 10.5 Cashflows | OL.08  | > 3 Months To 6 Months    | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     168 | 10.5 Cashflows | OL.08  | > 6 Months To 1 Year      | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 10.5 Cashflows | OL.08  | > 1 Year To 3 Years       | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     170 | 10.5 Cashflows | OL.08  | > 3 Years To 5 Years      | J22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     171 | 10.5 Cashflows | OL.08  | > 5 Years                 | K22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 10.5 Cashflows | OL.09  | Sight                     | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     173 | 10.5 Cashflows | OL.09  | > Sight To 5 Working Days | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     174 | 10.5 Cashflows | OL.09  | 6 Working Days To 30 Days | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 10.5 Cashflows | OL.09  | 31 Days To 3 Months       | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     176 | 10.5 Cashflows | OL.09  | > 3 Months To 6 Months    | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     177 | 10.5 Cashflows | OL.09  | > 6 Months To 1 Year      | H23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     178 | 10.5 Cashflows | OL.09  | > 1 Year To 3 Years       | I23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     179 | 10.5 Cashflows | OL.09  | > 3 Years To 5 Years      | J23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     180 | 10.5 Cashflows | OL.09  | > 5 Years                 | K23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     181 | 10.5 Cashflows | OL.10  | Sight                     | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     182 | 10.5 Cashflows | OL.10  | > Sight To 5 Working Days | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     183 | 10.5 Cashflows | OL.10  | 6 Working Days To 30 Days | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     184 | 10.5 Cashflows | OL.10  | 31 Days To 3 Months       | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     185 | 10.5 Cashflows | OL.10  | > 3 Months To 6 Months    | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     186 | 10.5 Cashflows | OL.10  | > 6 Months To 1 Year      | H24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     187 | 10.5 Cashflows | OL.10  | > 1 Year To 3 Years       | I24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     188 | 10.5 Cashflows | OL.10  | > 3 Years To 5 Years      | J24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     189 | 10.5 Cashflows | OL.10  | > 5 Years                 | K24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     190 | 10.5 Cashflows | CM.01  | Sight                     | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     191 | 10.5 Cashflows | CM.01  | > Sight To 5 Working Days | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     192 | 10.5 Cashflows | CM.01  | 6 Working Days To 30 Days | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     193 | 10.5 Cashflows | CM.01  | 31 Days To 3 Months       | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     194 | 10.5 Cashflows | CM.01  | > 3 Months To 6 Months    | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     195 | 10.5 Cashflows | CM.01  | > 6 Months To 1 Year      | H26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     196 | 10.5 Cashflows | CM.01  | > 1 Year To 3 Years       | I26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     197 | 10.5 Cashflows | CM.01  | > 3 Years To 5 Years      | J26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     198 | 10.5 Cashflows | CM.01  | > 5 Years                 | K26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     199 | 10.5 Cashflows | CM.02  | Sight                     | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     200 | 10.5 Cashflows | CM.02  | > Sight To 5 Working Days | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     201 | 10.5 Cashflows | CM.02  | 6 Working Days To 30 Days | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     202 | 10.5 Cashflows | CM.02  | 31 Days To 3 Months       | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     203 | 10.5 Cashflows | CM.02  | > 3 Months To 6 Months    | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     204 | 10.5 Cashflows | CM.02  | > 6 Months To 1 Year      | H27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     205 | 10.5 Cashflows | CM.02  | > 1 Year To 3 Years       | I27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     206 | 10.5 Cashflows | CM.02  | > 3 Years To 5 Years      | J27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     207 | 10.5 Cashflows | CM.02  | > 5 Years                 | K27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     208 | 10.5 Cashflows | CM.03  | Sight                     | C28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     209 | 10.5 Cashflows | CM.03  | > Sight To 5 Working Days | D28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     210 | 10.5 Cashflows | CM.03  | 6 Working Days To 30 Days | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     211 | 10.5 Cashflows | CM.03  | 31 Days To 3 Months       | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     212 | 10.5 Cashflows | CM.03  | > 3 Months To 6 Months    | G28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     213 | 10.5 Cashflows | CM.03  | > 6 Months To 1 Year      | H28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     214 | 10.5 Cashflows | CM.03  | > 1 Year To 3 Years       | I28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     215 | 10.5 Cashflows | CM.03  | > 3 Years To 5 Years      | J28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     216 | 10.5 Cashflows | CM.03  | > 5 Years                 | K28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     217 | 10.5 Cashflows | CM.04  | Sight                     | C29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     218 | 10.5 Cashflows | CM.04  | > Sight To 5 Working Days | D29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     219 | 10.5 Cashflows | CM.04  | 6 Working Days To 30 Days | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     220 | 10.5 Cashflows | CM.04  | 31 Days To 3 Months       | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     221 | 10.5 Cashflows | CM.04  | > 3 Months To 6 Months    | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     222 | 10.5 Cashflows | CM.04  | > 6 Months To 1 Year      | H29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     223 | 10.5 Cashflows | CM.04  | > 1 Year To 3 Years       | I29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     224 | 10.5 Cashflows | CM.04  | > 3 Years To 5 Years      | J29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     225 | 10.5 Cashflows | CM.04  | > 5 Years                 | K29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     226 | 10.5 Cashflows | DO.01  | Sight                     | C31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     227 | 10.5 Cashflows | DO.01  | > Sight To 5 Working Days | D31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     228 | 10.5 Cashflows | DO.01  | 6 Working Days To 30 Days | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     229 | 10.5 Cashflows | DO.01  | 31 Days To 3 Months       | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     230 | 10.5 Cashflows | DO.01  | > 3 Months To 6 Months    | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     231 | 10.5 Cashflows | DO.01  | > 6 Months To 1 Year      | H31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     232 | 10.5 Cashflows | DO.01  | > 1 Year To 3 Years       | I31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     233 | 10.5 Cashflows | DO.01  | > 3 Years To 5 Years      | J31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     234 | 10.5 Cashflows | DO.01  | > 5 Years                 | K31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     235 | 10.5 Cashflows | DO.02  | Sight                     | C32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     236 | 10.5 Cashflows | DO.02  | > Sight To 5 Working Days | D32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     237 | 10.5 Cashflows | DO.02  | 6 Working Days To 30 Days | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     238 | 10.5 Cashflows | DO.02  | 31 Days To 3 Months       | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     239 | 10.5 Cashflows | DO.02  | > 3 Months To 6 Months    | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     240 | 10.5 Cashflows | DO.02  | > 6 Months To 1 Year      | H32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     241 | 10.5 Cashflows | DO.02  | > 1 Year To 3 Years       | I32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     242 | 10.5 Cashflows | DO.02  | > 3 Years To 5 Years      | J32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     243 | 10.5 Cashflows | DO.02  | > 5 Years                 | K32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     244 | 10.5 Cashflows | IF.01  | Sight                     | C35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     245 | 10.5 Cashflows | IF.01  | > Sight To 5 Working Days | D35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     246 | 10.5 Cashflows | IF.01  | 6 Working Days To 30 Days | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     247 | 10.5 Cashflows | IF.01  | 31 Days To 3 Months       | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     248 | 10.5 Cashflows | IF.01  | > 3 Months To 6 Months    | G35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     249 | 10.5 Cashflows | IF.01  | > 6 Months To 1 Year      | H35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     250 | 10.5 Cashflows | IF.01  | > 1 Year To 3 Years       | I35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     251 | 10.5 Cashflows | IF.01  | > 3 Years To 5 Years      | J35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     252 | 10.5 Cashflows | IF.01  | > 5 Years                 | K35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     253 | 10.5 Cashflows | IF.02  | Sight                     | C36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     254 | 10.5 Cashflows | IF.02  | > Sight To 5 Working Days | D36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     255 | 10.5 Cashflows | IF.02  | 6 Working Days To 30 Days | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     256 | 10.5 Cashflows | IF.02  | 31 Days To 3 Months       | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     257 | 10.5 Cashflows | IF.02  | > 3 Months To 6 Months    | G36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     258 | 10.5 Cashflows | IF.02  | > 6 Months To 1 Year      | H36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     259 | 10.5 Cashflows | IF.02  | > 1 Year To 3 Years       | I36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     260 | 10.5 Cashflows | IF.02  | > 3 Years To 5 Years      | J36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     261 | 10.5 Cashflows | IF.02  | > 5 Years                 | K36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     262 | 10.5 Cashflows | IF.03  | Sight                     | C37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     263 | 10.5 Cashflows | IF.03  | > Sight To 5 Working Days | D37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     264 | 10.5 Cashflows | IF.03  | 6 Working Days To 30 Days | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     265 | 10.5 Cashflows | IF.03  | 31 Days To 3 Months       | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     266 | 10.5 Cashflows | IF.03  | > 3 Months To 6 Months    | G37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     267 | 10.5 Cashflows | IF.03  | > 6 Months To 1 Year      | H37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     268 | 10.5 Cashflows | IF.03  | > 1 Year To 3 Years       | I37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     269 | 10.5 Cashflows | IF.03  | > 3 Years To 5 Years      | J37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     270 | 10.5 Cashflows | IF.03  | > 5 Years                 | K37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     271 | 10.5 Cashflows | IF.04  | Sight                     | C38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     272 | 10.5 Cashflows | IF.04  | > Sight To 5 Working Days | D38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     273 | 10.5 Cashflows | IF.04  | 6 Working Days To 30 Days | E38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     274 | 10.5 Cashflows | IF.04  | 31 Days To 3 Months       | F38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     275 | 10.5 Cashflows | IF.04  | > 3 Months To 6 Months    | G38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     276 | 10.5 Cashflows | IF.04  | > 6 Months To 1 Year      | H38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     277 | 10.5 Cashflows | IF.04  | > 1 Year To 3 Years       | I38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     278 | 10.5 Cashflows | IF.04  | > 3 Years To 5 Years      | J38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     279 | 10.5 Cashflows | IF.04  | > 5 Years                 | K38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     280 | 10.5 Cashflows | IF.05  | Sight                     | C39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     281 | 10.5 Cashflows | IF.05  | > Sight To 5 Working Days | D39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     282 | 10.5 Cashflows | IF.05  | 6 Working Days To 30 Days | E39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     283 | 10.5 Cashflows | IF.05  | 31 Days To 3 Months       | F39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     284 | 10.5 Cashflows | IF.05  | > 3 Months To 6 Months    | G39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     285 | 10.5 Cashflows | IF.05  | > 6 Months To 1 Year      | H39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     286 | 10.5 Cashflows | IF.05  | > 1 Year To 3 Years       | I39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     287 | 10.5 Cashflows | IF.05  | > 3 Years To 5 Years      | J39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     288 | 10.5 Cashflows | IF.05  | > 5 Years                 | K39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     289 | 10.5 Cashflows | IF.06  | Sight                     | C40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     290 | 10.5 Cashflows | IF.06  | > Sight To 5 Working Days | D40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     291 | 10.5 Cashflows | IF.06  | 6 Working Days To 30 Days | E40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     292 | 10.5 Cashflows | IF.06  | 31 Days To 3 Months       | F40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     293 | 10.5 Cashflows | IF.06  | > 3 Months To 6 Months    | G40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     294 | 10.5 Cashflows | IF.06  | > 6 Months To 1 Year      | H40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     295 | 10.5 Cashflows | IF.06  | > 1 Year To 3 Years       | I40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     296 | 10.5 Cashflows | IF.06  | > 3 Years To 5 Years      | J40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     297 | 10.5 Cashflows | IF.06  | > 5 Years                 | K40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     298 | 10.5 Cashflows | IF.07  | Sight                     | C41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     299 | 10.5 Cashflows | IF.07  | > Sight To 5 Working Days | D41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     300 | 10.5 Cashflows | IF.07  | 6 Working Days To 30 Days | E41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     301 | 10.5 Cashflows | IF.07  | 31 Days To 3 Months       | F41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     302 | 10.5 Cashflows | IF.07  | > 3 Months To 6 Months    | G41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     303 | 10.5 Cashflows | IF.07  | > 6 Months To 1 Year      | H41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     304 | 10.5 Cashflows | IF.07  | > 1 Year To 3 Years       | I41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     305 | 10.5 Cashflows | IF.07  | > 3 Years To 5 Years      | J41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     306 | 10.5 Cashflows | IF.07  | > 5 Years                 | K41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     307 | 10.5 Cashflows | IF.08  | Sight                     | C42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     308 | 10.5 Cashflows | IF.08  | > Sight To 5 Working Days | D42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     309 | 10.5 Cashflows | IF.08  | 6 Working Days To 30 Days | E42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     310 | 10.5 Cashflows | IF.08  | 31 Days To 3 Months       | F42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     311 | 10.5 Cashflows | IF.08  | > 3 Months To 6 Months    | G42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     312 | 10.5 Cashflows | IF.08  | > 6 Months To 1 Year      | H42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     313 | 10.5 Cashflows | IF.08  | > 1 Year To 3 Years       | I42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     314 | 10.5 Cashflows | IF.08  | > 3 Years To 5 Years      | J42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     315 | 10.5 Cashflows | IF.08  | > 5 Years                 | K42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     316 | 10.5 Cashflows | IF.09  | Sight                     | C43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     317 | 10.5 Cashflows | IF.09  | > Sight To 5 Working Days | D43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     318 | 10.5 Cashflows | IF.09  | 6 Working Days To 30 Days | E43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     319 | 10.5 Cashflows | IF.09  | 31 Days To 3 Months       | F43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|     320 | 10.5 Cashflows | IF.09  | > 3 Months To 6 Months    | G43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     321 | 10.5 Cashflows | IF.09  | > 6 Months To 1 Year      | H43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     322 | 10.5 Cashflows | IF.09  | > 1 Year To 3 Years       | I43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     323 | 10.5 Cashflows | IF.09  | > 3 Years To 5 Years      | J43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     324 | 10.5 Cashflows | IF.09  | > 5 Years                 | K43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     325 | 10.5 Cashflows | IF.10  | Sight                     | C44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     326 | 10.5 Cashflows | IF.10  | > Sight To 5 Working Days | D44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     327 | 10.5 Cashflows | IF.10  | 6 Working Days To 30 Days | E44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     328 | 10.5 Cashflows | IF.10  | 31 Days To 3 Months       | F44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     329 | 10.5 Cashflows | IF.10  | > 3 Months To 6 Months    | G44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     330 | 10.5 Cashflows | IF.10  | > 6 Months To 1 Year      | H44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     331 | 10.5 Cashflows | IF.10  | > 1 Year To 3 Years       | I44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     332 | 10.5 Cashflows | IF.10  | > 3 Years To 5 Years      | J44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     333 | 10.5 Cashflows | IF.10  | > 5 Years                 | K44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Excel         |
|---------|----------------|--------|---------------------------|-------------|---------------|
|     334 | 10.5 Cashflows | RE.12  | Sight                     | C14         | =SUM(C3:C13)  |
|     335 | 10.5 Cashflows | RE.12  | > Sight to 5 working days | D14         | =SUM(D3:D13)  |
|     336 | 10.5 Cashflows | RE.12  | 6 working days to 30 days | E14         | =SUM(E3:E13)  |
|     337 | 10.5 Cashflows | RE.12  | 31 days to 3 months       | F14         | =SUM(F3:F13)  |
|     338 | 10.5 Cashflows | RE.12  | > 3 months to 6 months    | G14         | =SUM(G3:G13)  |
|     339 | 10.5 Cashflows | RE.12  | > 6 months to 1 year      | H14         | =SUM(H3:H13)  |
|     340 | 10.5 Cashflows | RE.12  | > 1 year to 3 years       | I14         | =SUM(I3:I13)  |
|     341 | 10.5 Cashflows | RE.12  | > 3 years to 5 years      | J14         | =SUM(J3:J13)  |
|     342 | 10.5 Cashflows | RE.12  | > 5 years                 | K14         | =SUM(K3:K13)  |
|     343 | 10.5 Cashflows | OL.11  | Sight                     | C25         | =SUM(C15:C24) |
|     344 | 10.5 Cashflows | OL.11  | > Sight to 5 working days | D25         | =SUM(D15:D24) |
|     345 | 10.5 Cashflows | OL.11  | 6 working days to 30 days | E25         | =SUM(E15:E24) |
|     346 | 10.5 Cashflows | OL.11  | 31 days to 3 months       | F25         | =SUM(F15:F24) |
|     347 | 10.5 Cashflows | OL.11  | > 3 months to 6 months    | G25         | =SUM(G15:G24) |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Excel         |
|     348 | 10.5 Cashflows | OL.11  | > 6 months to 1 year      | H25         | =SUM(H15:H24) |
|     349 | 10.5 Cashflows | OL.11  | > 1 year to 3 years       | I25         | =SUM(I15:I24) |
|     350 | 10.5 Cashflows | OL.11  | > 3 years to 5 years      | J25         | =SUM(J15:J24) |
|     351 | 10.5 Cashflows | OL.11  | > 5 years                 | K25         | =SUM(K15:K24) |
|     352 | 10.5 Cashflows | CM.05  | Sight                     | C30         | =SUM(C26:C29) |
|     353 | 10.5 Cashflows | CM.05  | > Sight to 5 working days | D30         | =SUM(D26:D29) |
|     354 | 10.5 Cashflows | CM.05  | 6 working days to 30 days | E30         | =SUM(E26:E29) |
|     355 | 10.5 Cashflows | CM.05  | 31 days to 3 months       | F30         | =SUM(F26:F29) |
|     356 | 10.5 Cashflows | CM.05  | > 3 months to 6 months    | G30         | =SUM(G26:G29) |
|     357 | 10.5 Cashflows | CM.05  | > 6 months to 1 year      | H30         | =SUM(H26:H29) |
|     358 | 10.5 Cashflows | CM.05  | > 1 year to 3 years       | I30         | =SUM(I26:I29) |
|     359 | 10.5 Cashflows | CM.05  | > 3 years to 5 years      | J30         | =SUM(J26:J29) |
|     360 | 10.5 Cashflows | CM.05  | > 5 years                 | K30         | =SUM(K26:K29) |
|     361 | 10.5 Cashflows | DO.03  | Sight                     | C33         | =SUM(C31:C32) |
|     362 | 10.5 Cashflows | DO.03  | > Sight to 5 working days | D33         | =SUM(D31:D32) |
|     363 | 10.5 Cashflows | DO.03  | 6 working days to 30 days | E33         | =SUM(E31:E32) |
|     364 | 10.5 Cashflows | DO.03  | 31 days to 3 months       | F33         | =SUM(F31:F32) |
|   Check | Sheet          | Item   | Column                    | Cell  Ref   | Excel            |
|     365 | 10.5 Cashflows | DO.03  | > 3 months to 6 months    | G33         | =SUM(G31:G32)    |
|     366 | 10.5 Cashflows | DO.03  | > 6 months to 1 year      | H33         | =SUM(H31:H32)    |
|     367 | 10.5 Cashflows | DO.03  | > 1 year to 3 years       | I33         | =SUM(I31:I32)    |
|     368 | 10.5 Cashflows | DO.03  | > 3 years to 5 years      | J33         | =SUM(J31:J32)    |
|     369 | 10.5 Cashflows | DO.03  | > 5 years                 | K33         | =SUM(K31:K32)    |
|     370 | 10.5 Cashflows | CR.01  | Sight                     | C34         | =C14+C25+C30+C33 |
|     371 | 10.5 Cashflows | CR.01  | > Sight to 5 working days | D34         | =D14+D25+D30+D33 |
|     372 | 10.5 Cashflows | CR.01  | 6 working days to 30 days | E34         | =E14+E25+E30+E33 |
|     373 | 10.5 Cashflows | CR.01  | 31 days to 3 months       | F34         | =F14+F25+F30+F33 |
|     374 | 10.5 Cashflows | CR.01  | > 3 months to 6 months    | G34         | =G14+G25+G30+G33 |
|     375 | 10.5 Cashflows | CR.01  | > 6 months to 1 year      | H34         | =H14+H25+H30+H33 |
|     376 | 10.5 Cashflows | CR.01  | > 1 year to 3 years       | I34         | =I14+I25+I30+I33 |
|     377 | 10.5 Cashflows | CR.01  | > 3 years to 5 years      | J34         | =J14+J25+J30+J33 |
|     378 | 10.5 Cashflows | CR.01  | > 5 years                 | K34         | =K14+K25+K30+K33 |
|     379 | 10.5 Cashflows | IF.11  | Sight                     | C45         | =SUM(C35:C44)    |
|     380 | 10.5 Cashflows | IF.11  | > Sight to 5 working days | D45         | =SUM(D35:D44)    |
|     381 | 10.5 Cashflows | IF.11  | 6 working days to 30 days | E45         | =SUM(E35:E44)    |

4

|   Check | Sheet          | Item   | Column                 | Cell  Ref   | Excel         |
|---------|----------------|--------|------------------------|-------------|---------------|
|     382 | 10.5 Cashflows | IF.11  | 31 days to 3 months    | F45         | =SUM(F35:F44) |
|     383 | 10.5 Cashflows | IF.11  | > 3 months to 6 months | G45         | =SUM(G35:G44) |
|     384 | 10.5 Cashflows | IF.11  | > 6 months to 1 year   | H45         | =SUM(H35:H44) |
|     385 | 10.5 Cashflows | IF.11  | > 1 year to 3 years    | I45         | =SUM(I35:I44) |
|     386 | 10.5 Cashflows | IF.11  | > 3 years to 5 years   | J45         | =SUM(J35:J44) |
|     387 | 10.5 Cashflows | IF.11  | > 5 years              | K45         | =SUM(K35:K44) |