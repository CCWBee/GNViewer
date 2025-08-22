
## Guidance Note

## Validation and verification of the '3.1 SAC BS' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018.

Revised February 2019 to correct the 'Excel' column for Check 180 (Cell E33)

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

|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|---------|------------|--------|------------------|-------------|----------------------------------------------------------------------------|
|       1 | 3.1 SAC BS | A.1    | Amount           | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 3.1 SAC BS | A.1    | Amount After CRM | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 3.1 SAC BS | A.1    | RWA              | E3          | Must be blank                                                              |
|       4 | 3.1 SAC BS | A.2.1  | Amount           | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 3.1 SAC BS | A.2.1  | Amount After CRM | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 3.1 SAC BS | A.2.1  | RWA              | E4          | Must be blank                                                              |
|       7 | 3.1 SAC BS | A.2.2  | Amount           | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 3.1 SAC BS | A.2.2  | Amount After CRM | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 3.1 SAC BS | A.2.3  | Amount           | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 3.1 SAC BS | A.2.3  | Amount After CRM | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 3.1 SAC BS | A.2.4  | Amount           | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 3.1 SAC BS | A.2.4  | Amount After CRM | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 3.1 SAC BS | A.2.5  | Amount           | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|      14 | 3.1 SAC BS | A.2.5  | Amount After CRM | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 3.1 SAC BS | A.3    | Amount           | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 3.1 SAC BS | A.3    | Amount After CRM | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 3.1 SAC BS | A.3    | RWA              | E9          | Must be blank                                                              |
|      18 | 3.1 SAC BS | B.1    | Amount           | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 3.1 SAC BS | B.1    | Amount After CRM | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 3.1 SAC BS | B.2.1  | Amount           | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 3.1 SAC BS | B.2.1  | Amount After CRM | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 3.1 SAC BS | B.2.1  | RWA              | E12         | Must be blank                                                              |
|      23 | 3.1 SAC BS | B.2.2  | Amount           | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 3.1 SAC BS | B.2.2  | Amount After CRM | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 3.1 SAC BS | B.2.3  | Amount           | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 3.1 SAC BS | B.2.3  | Amount After CRM | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 3.1 SAC BS | B.2.4  | Amount           | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 3.1 SAC BS | B.2.4  | Amount After CRM | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 3.1 SAC BS | B.2.5  | Amount           | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 3.1 SAC BS | B.2.5  | Amount After CRM | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item    | Column           | Cell  Ref   | Validation Message                                                         |
|      31 | 3.1 SAC BS | C.1     | Amount           | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 3.1 SAC BS | C.1     | Amount After CRM | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 3.1 SAC BS | C.2     | Amount           | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 3.1 SAC BS | C.2     | Amount After CRM | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 3.1 SAC BS | C.3     | Amount           | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 3.1 SAC BS | C.3     | Amount After CRM | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 3.1 SAC BS | C.4     | Amount           | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 3.1 SAC BS | C.4     | Amount After CRM | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 3.1 SAC BS | D.1.1.1 | Amount           | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 3.1 SAC BS | D.1.1.1 | Amount After CRM | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 3.1 SAC BS | D.1.1.2 | Amount           | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 3.1 SAC BS | D.1.1.2 | Amount After CRM | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 3.1 SAC BS | D.1.1.3 | Amount           | C25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 3.1 SAC BS | D.1.1.3 | Amount After CRM | D25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 3.1 SAC BS | D.1.1.4 | Amount           | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 3.1 SAC BS | D.1.1.4 | Amount After CRM | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 3.1 SAC BS | D.1.2.1 | Amount           | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item    | Column           | Cell  Ref   | Validation Message                                                         |
|      48 | 3.1 SAC BS | D.1.2.1 | Amount After CRM | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 3.1 SAC BS | D.1.2.2 | Amount           | C28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 3.1 SAC BS | D.1.2.2 | Amount After CRM | D28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 3.1 SAC BS | D.1.2.3 | Amount           | C29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 3.1 SAC BS | D.1.2.3 | Amount After CRM | D29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 3.1 SAC BS | D.1.2.4 | Amount           | C30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 3.1 SAC BS | D.1.2.4 | Amount After CRM | D30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 3.1 SAC BS | D.2.1.1 | Amount           | C32         | Must be blank                                                              |
|      56 | 3.1 SAC BS | D.2.1.1 | Amount After CRM | D32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 3.1 SAC BS | D.2.1.2 | Amount           | C33         | Must be blank                                                              |
|      58 | 3.1 SAC BS | D.2.1.2 | Amount After CRM | D33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 3.1 SAC BS | D.2.1.3 | Amount           | C34         | Must be blank                                                              |
|      60 | 3.1 SAC BS | D.2.1.3 | Amount After CRM | D34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 3.1 SAC BS | D.2.1.4 | Amount           | C35         | Must be blank                                                              |
|      62 | 3.1 SAC BS | D.2.1.4 | Amount After CRM | D35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 3.1 SAC BS | D.2.2.1 | Amount           | C36         | Must be blank                                                              |
|      64 | 3.1 SAC BS | D.2.2.1 | Amount After CRM | D36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item    | Column           | Cell  Ref   | Validation Message                                                         |
|      65 | 3.1 SAC BS | D.2.2.2 | Amount           | C37         | Must be blank                                                              |
|      66 | 3.1 SAC BS | D.2.2.2 | Amount After CRM | D37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 3.1 SAC BS | D.2.2.3 | Amount           | C38         | Must be blank                                                              |
|      68 | 3.1 SAC BS | D.2.2.3 | Amount After CRM | D38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 3.1 SAC BS | D.2.2.4 | Amount           | C39         | Must be blank                                                              |
|      70 | 3.1 SAC BS | D.2.2.4 | Amount After CRM | D39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 3.1 SAC BS | D.2.0   | Amount           | C40         | Must be blank                                                              |
|      72 | 3.1 SAC BS | E.1     | Amount           | C42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 3.1 SAC BS | E.1     | Amount After CRM | D42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 3.1 SAC BS | E.2     | Amount           | C43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 3.1 SAC BS | E.2     | Amount After CRM | D43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 3.1 SAC BS | E.3     | Amount           | C44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 3.1 SAC BS | E.3     | Amount After CRM | D44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 3.1 SAC BS | E.4     | Amount           | C45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 3.1 SAC BS | E.4     | Amount After CRM | D45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 3.1 SAC BS | F.1     | Amount           | C47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 3.1 SAC BS | F.1     | Amount After CRM | D47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|      82 | 3.1 SAC BS | F.1    | RWA              | E47         | Must be blank                                                              |
|      83 | 3.1 SAC BS | F.2    | Amount           | C48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 3.1 SAC BS | F.2    | Amount After CRM | D48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 3.1 SAC BS | F.3    | Amount           | C49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 3.1 SAC BS | F.3    | Amount After CRM | D49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 3.1 SAC BS | F.3    | RWA              | E49         | Must be blank                                                              |
|      88 | 3.1 SAC BS | F.4    | Amount           | C50         | Must be blank                                                              |
|      89 | 3.1 SAC BS | F.4    | Amount After CRM | D50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 3.1 SAC BS | F.4    | RWA              | E50         | Must be blank                                                              |
|      91 | 3.1 SAC BS | F.5    | Amount           | C51         | Must be blank                                                              |
|      92 | 3.1 SAC BS | F.5    | Amount After CRM | D51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 3.1 SAC BS | G.1    | Amount           | C53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 3.1 SAC BS | G.1    | Amount After CRM | D53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 3.1 SAC BS | G.2    | Amount           | C54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 3.1 SAC BS | G.2    | Amount After CRM | D54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 3.1 SAC BS | H.1    | Amount           | C56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 3.1 SAC BS | H.1    | Amount After CRM | D56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|      99 | 3.1 SAC BS | H.2    | Amount           | C57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 3.1 SAC BS | H.2    | Amount After CRM | D57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 3.1 SAC BS | H.3    | Amount           | C58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 3.1 SAC BS | H.3    | Amount After CRM | D58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 3.1 SAC BS | H.4    | Amount           | C59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 3.1 SAC BS | H.4    | Amount After CRM | D59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 3.1 SAC BS | J.1.1  | Amount           | C61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 3.1 SAC BS | J.1.1  | Amount After CRM | D61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 3.1 SAC BS | J.1.1  | RWA              | E61         | Must be blank                                                              |
|     107 | 3.1 SAC BS | J.1.2  | Amount           | C62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 3.1 SAC BS | J.1.2  | Amount After CRM | D62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 3.1 SAC BS | J.1.3  | Amount           | C63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 3.1 SAC BS | J.1.3  | Amount After CRM | D63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 3.1 SAC BS | J.1.4  | Amount           | C64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 3.1 SAC BS | J.1.4  | Amount After CRM | D64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 3.1 SAC BS | J.1.5  | Amount           | C65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 3.1 SAC BS | J.1.5  | Amount After CRM | D65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|     115 | 3.1 SAC BS | J.1.6  | Amount           | C66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     116 | 3.1 SAC BS | J.1.6  | Amount After CRM | D66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 3.1 SAC BS | J.1.7  | Amount           | C67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 3.1 SAC BS | J.1.7  | Amount After CRM | D67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 3.1 SAC BS | J.2.1  | Amount           | C68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 3.1 SAC BS | J.2.1  | Amount After CRM | D68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 3.1 SAC BS | J.2.2  | Amount           | C69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 3.1 SAC BS | J.2.2  | Amount After CRM | D69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 3.1 SAC BS | J.2.3  | Amount           | C70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 3.1 SAC BS | J.2.3  | Amount After CRM | D70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 3.1 SAC BS | L.1    | Amount           | C72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 3.1 SAC BS | L.1    | Amount After CRM | D72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 3.1 SAC BS | L.2    | Amount           | C73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 3.1 SAC BS | L.2    | Amount After CRM | D73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 3.1 SAC BS | L.3    | Amount           | C74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     130 | 3.1 SAC BS | L.3    | Amount After CRM | D74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 3.1 SAC BS | L.4.1  | Amount           | C75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet      | Item   | Column           | Cell  Ref   | Validation Message                                                         |
|     132 | 3.1 SAC BS | L.4.1  | Amount After CRM | D75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     133 | 3.1 SAC BS | L.4.1  | RWA              | E75         | Must be blank                                                              |
|     134 | 3.1 SAC BS | L.4.2  | Amount           | C76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 3.1 SAC BS | L.4.2  | Amount After CRM | D76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 3.1 SAC BS | L.4.3  | Amount           | C77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 3.1 SAC BS | L.4.3  | Amount After CRM | D77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 3.1 SAC BS | L.4.4  | Amount           | C78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 3.1 SAC BS | L.4.4  | Amount After CRM | D78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     140 | 3.1 SAC BS | L.4.5  | Amount           | C79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     141 | 3.1 SAC BS | L.4.5  | Amount After CRM | D79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     142 | 3.1 SAC BS | L.4.6  | Amount           | C80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 3.1 SAC BS | L.4.6  | Amount After CRM | D80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     144 | 3.1 SAC BS | L.4.7  | Amount           | C81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 3.1 SAC BS | L.4.7  | Amount After CRM | D81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet      | Item   | Column           | Cell Ref   | Excel              |
|---------|------------|--------|------------------|------------|--------------------|
|     146 | 3.1 SAC BS | A.2.2  | RWA              | E5         | =ROUND(D5*20%,0)   |
|     147 | 3.1 SAC BS | A.2.3  | RWA              | E6         | =ROUND(D6*50%,0)   |
|     148 | 3.1 SAC BS | A.2.4  | RWA              | E7         | =ROUND(D7*100%,0)  |
|     149 | 3.1 SAC BS | A.2.5  | RWA              | E8         | =ROUND(D8*150%,0)  |
|     150 | 3.1 SAC BS | A.0    | Amount           | C10        | =SUM(C3:C9)        |
|     151 | 3.1 SAC BS | A.0    | Amount After CRM | D10        | =SUM(D3:D9)        |
|     152 | 3.1 SAC BS | A.0    | RWA              | E10        | =SUM(E5:E8)        |
|     153 | 3.1 SAC BS | B.1    | RWA              | E11        | =ROUND(D11*20%,0)  |
|     154 | 3.1 SAC BS | B.2.2  | RWA              | E13        | =ROUND(D13*20%,0)  |
|     155 | 3.1 SAC BS | B.2.3  | RWA              | E14        | =ROUND(D14*50%,0)  |
|     156 | 3.1 SAC BS | B.2.4  | RWA              | E15        | =ROUND(D15*100%,0) |
|     157 | 3.1 SAC BS | B.2.5  | RWA              | E16        | =ROUND(D16*150%,0) |
|     158 | 3.1 SAC BS | B.0    | Amount           | C17        | =SUM(C11:C16)      |
|     159 | 3.1 SAC BS | B.0    | Amount After CRM | D17        | =SUM(D11:D16)      |
|     160 | 3.1 SAC BS | B.0    | RWA              | E17        | =SUM(E11,E13:E16)  |
|   Check | Sheet      | Item    | Column           | Cell Ref   | Excel              |
|     161 | 3.1 SAC BS | C.1     | RWA              | E18        | =ROUND(D18*20%,0)  |
|     162 | 3.1 SAC BS | C.2     | RWA              | E19        | =ROUND(D19*50%,0)  |
|     163 | 3.1 SAC BS | C.3     | RWA              | E20        | =ROUND(D20*100%,0) |
|     164 | 3.1 SAC BS | C.4     | RWA              | E21        | =ROUND(D21*150%,0) |
|     165 | 3.1 SAC BS | C.0     | Amount           | C22        | =SUM(C18:C21)      |
|     166 | 3.1 SAC BS | C.0     | Amount After CRM | D22        | =SUM(D18:D21)      |
|     167 | 3.1 SAC BS | C.0     | RWA              | E22        | =SUM(E18:E21)      |
|     168 | 3.1 SAC BS | D.1.1.1 | RWA              | E23        | =ROUND(D23*20%,0)  |
|     169 | 3.1 SAC BS | D.1.1.2 | RWA              | E24        | =ROUND(D24*50%,0)  |
|     170 | 3.1 SAC BS | D.1.1.3 | RWA              | E25        | =ROUND(D25*100%,0) |
|     171 | 3.1 SAC BS | D.1.1.4 | RWA              | E26        | =ROUND(D26*150%,0) |
|     172 | 3.1 SAC BS | D.1.2.1 | RWA              | E27        | =ROUND(D27*20%,0)  |
|     173 | 3.1 SAC BS | D.1.2.2 | RWA              | E28        | =ROUND(D28*50%,0)  |
|     174 | 3.1 SAC BS | D.1.2.3 | RWA              | E29        | =ROUND(D29*100%,0) |
|     175 | 3.1 SAC BS | D.1.2.4 | RWA              | E30        | =ROUND(D30*150%,0) |
|     176 | 3.1 SAC BS | D.1.0   | Amount           | C31        | =SUM(C23:C30)      |
|     177 | 3.1 SAC BS | D.1.0   | Amount After CRM | D31        | =SUM(D23:D30)      |
| Check   | Sheet      | Item    | Column           | Cell Ref   | Excel              |
| 178     | 3.1 SAC BS | D.1.0   | RWA              | E31        | =SUM(E23:E30)      |
| 179     | 3.1 SAC BS | D.2.1.1 | RWA              | E32        | =ROUND(D32*20%,0)  |
| 180 i   | 3.1 SAC BS | D.2.1.2 | RWA              | E33        | =ROUND(D33*50%,0)  |
| 181     | 3.1 SAC BS | D.2.1.3 | RWA              | E34        | =ROUND(D34*100%,0) |
| 182     | 3.1 SAC BS | D.2.1.4 | RWA              | E35        | =ROUND(D35*150%,0) |
| 183     | 3.1 SAC BS | D.2.2.1 | RWA              | E36        | =ROUND(D36*20%,0)  |
| 184     | 3.1 SAC BS | D.2.2.2 | RWA              | E37        | =ROUND(D37*50%,0)  |
| 185     | 3.1 SAC BS | D.2.2.3 | RWA              | E38        | =ROUND(D38*100%,0) |
| 186     | 3.1 SAC BS | D.2.2.4 | RWA              | E39        | =ROUND(D39*150%,0) |
| 187     | 3.1 SAC BS | D.2.0   | Amount After CRM | D40        | =SUM(D32:D39)      |
| 188     | 3.1 SAC BS | D.2.0   | RWA              | E40        | =SUM(E32:E39)      |
| 189     | 3.1 SAC BS | D.0     | Amount           | C41        | =C31               |
| 190     | 3.1 SAC BS | D.0     | Amount After CRM | D41        | =D31+D40           |
| 191     | 3.1 SAC BS | D.0     | RWA              | E41        | =E31+E40           |
| 192     | 3.1 SAC BS | E.1     | RWA              | E42        | =ROUND(D42*20%,0)  |
| 193     | 3.1 SAC BS | E.2     | RWA              | E43        | =ROUND(D43*50%,0)  |
| 194     | 3.1 SAC BS | E.3     | RWA              | E44        | =ROUND(D44*100%,0) |
|   Check | Sheet      | Item   | Column           | Cell Ref   | Excel              |
|     195 | 3.1 SAC BS | E.4    | RWA              | E45        | =ROUND(D45*350%,0) |
|     196 | 3.1 SAC BS | E.0    | Amount           | C46        | =SUM(C42:C45)      |
|     197 | 3.1 SAC BS | E.0    | Amount After CRM | D46        | =SUM(D42:D45)      |
|     198 | 3.1 SAC BS | E.0    | RWA              | E46        | =SUM(E42:E45)      |
|     199 | 3.1 SAC BS | F.2    | RWA              | E48        | =ROUND(D48*20%,0)  |
|     200 | 3.1 SAC BS | F.5    | RWA              | E51        | =ROUND(D51*20%,0)  |
|     201 | 3.1 SAC BS | F.0    | Amount           | C52        | =SUM(C47:C49)      |
|     202 | 3.1 SAC BS | F.0    | Amount After CRM | D52        | =SUM(D47:D51)      |
|     203 | 3.1 SAC BS | F.0    | RWA              | E52        | =E48+E51           |
|     204 | 3.1 SAC BS | G.1    | RWA              | E53        | =ROUND(D53*75%,0)  |
|     205 | 3.1 SAC BS | G.2    | RWA              | E54        | =ROUND(D54*100%,0) |
|     206 | 3.1 SAC BS | G.0    | Amount           | C55        | =SUM(C53:C54)      |
|     207 | 3.1 SAC BS | G.0    | Amount After CRM | D55        | =SUM(D53:D54)      |
|     208 | 3.1 SAC BS | G.0    | RWA              | E55        | =SUM(E53:E54)      |
|     209 | 3.1 SAC BS | H.1    | RWA              | E56        | =ROUND(D56*35%,0)  |
|     210 | 3.1 SAC BS | H.2    | RWA              | E57        | =ROUND(D57*50%,0)  |
|     211 | 3.1 SAC BS | H.3    | RWA              | E58        | =ROUND(D58*75%,0)  |
|   Check | Sheet      | Item   | Column           | Cell Ref   | Excel              |
|     212 | 3.1 SAC BS | H.4    | RWA              | E59        | =ROUND(D59*100%,0) |
|     213 | 3.1 SAC BS | H.0    | Amount           | C60        | =SUM(C56:C59)      |
|     214 | 3.1 SAC BS | H.0    | Amount After CRM | D60        | =SUM(D56:D59)      |
|     215 | 3.1 SAC BS | H.0    | RWA              | E60        | =SUM(E56:E59)      |
|     216 | 3.1 SAC BS | J.1.2  | RWA              | E62        | =ROUND(D62*20%,0)  |
|     217 | 3.1 SAC BS | J.1.3  | RWA              | E63        | =ROUND(D63*35%,0)  |
|     218 | 3.1 SAC BS | J.1.4  | RWA              | E64        | =ROUND(D64*50%,0)  |
|     219 | 3.1 SAC BS | J.1.5  | RWA              | E65        | =ROUND(D65*75%,0)  |
|     220 | 3.1 SAC BS | J.1.6  | RWA              | E66        | =ROUND(D66*100%,0) |
|     221 | 3.1 SAC BS | J.1.7  | RWA              | E67        | =ROUND(D67*150%,0) |
|     222 | 3.1 SAC BS | J.2.1  | RWA              | E68        | =ROUND(D68*50%,0)  |
|     223 | 3.1 SAC BS | J.2.2  | RWA              | E69        | =ROUND(D69*100%,0) |
|     224 | 3.1 SAC BS | J.2.3  | RWA              | E70        | =ROUND(D70*150%,0) |
|     225 | 3.1 SAC BS | J.0    | Amount           | C71        | =SUM(C61:C70)      |
|     226 | 3.1 SAC BS | J.0    | Amount After CRM | D71        | =SUM(D61:D70)      |
|     227 | 3.1 SAC BS | J.0    | RWA              | E71        | =SUM(E62:E70)      |
|     228 | 3.1 SAC BS | L.1    | RWA              | E72        | =ROUND(D72*100%,0) |
|   Check | Sheet      | Item   | Column           | Cell Ref   | Excel                 |
|     229 | 3.1 SAC BS | L.2    | RWA              | E73        | =ROUND(D73*100%,0)    |
|     230 | 3.1 SAC BS | L.3    | RWA              | E74        | =ROUND(D74*150%,0)    |
|     231 | 3.1 SAC BS | L.4.2  | RWA              | E76        | =ROUND(D76*20%,0)     |
|     232 | 3.1 SAC BS | L.4.3  | RWA              | E77        | =ROUND(D77*35%,0)     |
|     233 | 3.1 SAC BS | L.4.4  | RWA              | E78        | =ROUND(D78*50%,0)     |
|     234 | 3.1 SAC BS | L.4.5  | RWA              | E79        | =ROUND(D79*75%,0)     |
|     235 | 3.1 SAC BS | L.4.6  | RWA              | E80        | =ROUND(D80*100%,0)    |
|     236 | 3.1 SAC BS | L.4.7  | RWA              | E81        | =ROUND(D81*150%,0)    |
|     237 | 3.1 SAC BS | L.0    | Amount           | C82        | =SUM(C72:C81)         |
|     238 | 3.1 SAC BS | L.0    | Amount After CRM | D82        | =SUM(D72:D81)         |
|     239 | 3.1 SAC BS | L.0    | RWA              | E82        | =SUM(E72:E74,E76:E81) |

i  'Excel' column revised February 2019, to correctly reflect the formula in the Prudential Return template