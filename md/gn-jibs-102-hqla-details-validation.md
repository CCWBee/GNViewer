
## Guidance Note

## Validation and verification of the '10.2 HQLA Details' Sheet

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

|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|---------|-------------------|--------|----------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 10.2 HQLA Details | HH.1   | Location - Jurisdiction    | F3          | Input must be 2 digit country ISO code                                     |
|       2 | 10.2 HQLA Details | HH.1   | Type - HQLA Classification | G3          | Input must be HQLA item number from list of items on HQLA page             |
|       3 | 10.2 HQLA Details | HH.1   | Own Holdings               | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 10.2 HQLA Details | HH.1   | Rehypothecated Holdings    | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 10.2 HQLA Details | HH.1   | Amount Pledged             | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 10.2 HQLA Details | HH.1   | Realisable Value           | K3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 10.2 HQLA Details | HH.1   | Adjusted Amount            | L3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 10.2 HQLA Details | HH.1   | Haircut Amount             | M3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 10.2 HQLA Details | HH.1   | Repo Market Haircut        | N3          | Input must be a percentage between 0 and 100%                              |
|      10 | 10.2 HQLA Details | HH.1   | Repo Market Value          | O3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 10.2 HQLA Details | HH.1   | Central Bank Haircut       | P3          | Input must be a percentage between 0 and 100%                              |
|      12 | 10.2 HQLA Details | HH.1   | Central Bank Value         | Q3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 10.2 HQLA Details | HH.2   | Location - Jurisdiction    | F4          | Input must be 2 digit country ISO code                                     |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      14 | 10.2 HQLA Details | HH.2   | Type - HQLA Classification | G4          | Input must be HQLA item number from list of items on HQLA page             |
|      15 | 10.2 HQLA Details | HH.2   | Own Holdings               | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 10.2 HQLA Details | HH.2   | Rehypothecated Holdings    | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 10.2 HQLA Details | HH.2   | Amount Pledged             | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 10.2 HQLA Details | HH.2   | Realisable Value           | K4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 10.2 HQLA Details | HH.2   | Adjusted Amount            | L4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 10.2 HQLA Details | HH.2   | Haircut Amount             | M4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 10.2 HQLA Details | HH.2   | Repo Market Haircut        | N4          | Input must be a percentage between 0 and 100%                              |
|      22 | 10.2 HQLA Details | HH.2   | Repo Market Value          | O4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 10.2 HQLA Details | HH.2   | Central Bank Haircut       | P4          | Input must be a percentage between 0 and 100%                              |
|      24 | 10.2 HQLA Details | HH.2   | Central Bank Value         | Q4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 10.2 HQLA Details | HH.3   | Location - Jurisdiction    | F5          | Input must be 2 digit country ISO code                                     |
|      26 | 10.2 HQLA Details | HH.3   | Type - HQLA Classification | G5          | Input must be HQLA item number from list of items on HQLA page             |
|      27 | 10.2 HQLA Details | HH.3   | Own Holdings               | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 10.2 HQLA Details | HH.3   | Rehypothecated Holdings    | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 10.2 HQLA Details | HH.3   | Amount Pledged             | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 10.2 HQLA Details | HH.3   | Realisable Value           | K5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      31 | 10.2 HQLA Details | HH.3   | Adjusted Amount            | L5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 10.2 HQLA Details | HH.3   | Haircut Amount             | M5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 10.2 HQLA Details | HH.3   | Repo Market Haircut        | N5          | Input must be a percentage between 0 and 100%                              |
|      34 | 10.2 HQLA Details | HH.3   | Repo Market Value          | O5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 10.2 HQLA Details | HH.3   | Central Bank Haircut       | P5          | Input must be a percentage between 0 and 100%                              |
|      36 | 10.2 HQLA Details | HH.3   | Central Bank Value         | Q5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 10.2 HQLA Details | HH.4   | Location - Jurisdiction    | F6          | Input must be 2 digit country ISO code                                     |
|      38 | 10.2 HQLA Details | HH.4   | Type - HQLA Classification | G6          | Input must be HQLA item number from list of items on HQLA page             |
|      39 | 10.2 HQLA Details | HH.4   | Own Holdings               | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 10.2 HQLA Details | HH.4   | Rehypothecated Holdings    | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 10.2 HQLA Details | HH.4   | Amount Pledged             | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 10.2 HQLA Details | HH.4   | Realisable Value           | K6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 10.2 HQLA Details | HH.4   | Adjusted Amount            | L6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 10.2 HQLA Details | HH.4   | Haircut Amount             | M6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 10.2 HQLA Details | HH.4   | Repo Market Haircut        | N6          | Input must be a percentage between 0 and 100%                              |
|      46 | 10.2 HQLA Details | HH.4   | Repo Market Value          | O6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 10.2 HQLA Details | HH.4   | Central Bank Haircut       | P6          | Input must be a percentage between 0 and 100%                              |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      48 | 10.2 HQLA Details | HH.4   | Central Bank Value         | Q6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 10.2 HQLA Details | HH.5   | Location - Jurisdiction    | F7          | Input must be 2 digit country ISO code                                     |
|      50 | 10.2 HQLA Details | HH.5   | Type - HQLA Classification | G7          | Input must be HQLA item number from list of items on HQLA page             |
|      51 | 10.2 HQLA Details | HH.5   | Own Holdings               | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 10.2 HQLA Details | HH.5   | Rehypothecated Holdings    | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 10.2 HQLA Details | HH.5   | Amount Pledged             | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 10.2 HQLA Details | HH.5   | Realisable Value           | K7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 10.2 HQLA Details | HH.5   | Adjusted Amount            | L7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 10.2 HQLA Details | HH.5   | Haircut Amount             | M7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 10.2 HQLA Details | HH.5   | Repo Market Haircut        | N7          | Input must be a percentage between 0 and 100%                              |
|      58 | 10.2 HQLA Details | HH.5   | Repo Market Value          | O7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 10.2 HQLA Details | HH.5   | Central Bank Haircut       | P7          | Input must be a percentage between 0 and 100%                              |
|      60 | 10.2 HQLA Details | HH.5   | Central Bank Value         | Q7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 10.2 HQLA Details | HH.6   | Location - Jurisdiction    | F8          | Input must be 2 digit country ISO code                                     |
|      62 | 10.2 HQLA Details | HH.6   | Type - HQLA Classification | G8          | Input must be HQLA item number from list of items on HQLA page             |
|      63 | 10.2 HQLA Details | HH.6   | Own Holdings               | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 10.2 HQLA Details | HH.6   | Rehypothecated Holdings    | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      65 | 10.2 HQLA Details | HH.6   | Amount Pledged             | J8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 10.2 HQLA Details | HH.6   | Realisable Value           | K8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 10.2 HQLA Details | HH.6   | Adjusted Amount            | L8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 10.2 HQLA Details | HH.6   | Haircut Amount             | M8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 10.2 HQLA Details | HH.6   | Repo Market Haircut        | N8          | Input must be a percentage between 0 and 100%                              |
|      70 | 10.2 HQLA Details | HH.6   | Repo Market Value          | O8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 10.2 HQLA Details | HH.6   | Central Bank Haircut       | P8          | Input must be a percentage between 0 and 100%                              |
|      72 | 10.2 HQLA Details | HH.6   | Central Bank Value         | Q8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 10.2 HQLA Details | HH.7   | Location - Jurisdiction    | F9          | Input must be 2 digit country ISO code                                     |
|      74 | 10.2 HQLA Details | HH.7   | Type - HQLA Classification | G9          | Input must be HQLA item number from list of items on HQLA page             |
|      75 | 10.2 HQLA Details | HH.7   | Own Holdings               | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 10.2 HQLA Details | HH.7   | Rehypothecated Holdings    | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 10.2 HQLA Details | HH.7   | Amount Pledged             | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 10.2 HQLA Details | HH.7   | Realisable Value           | K9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 10.2 HQLA Details | HH.7   | Adjusted Amount            | L9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 10.2 HQLA Details | HH.7   | Haircut Amount             | M9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 10.2 HQLA Details | HH.7   | Repo Market Haircut        | N9          | Input must be a percentage between 0 and 100%                              |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      82 | 10.2 HQLA Details | HH.7   | Repo Market Value          | O9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 10.2 HQLA Details | HH.7   | Central Bank Haircut       | P9          | Input must be a percentage between 0 and 100%                              |
|      84 | 10.2 HQLA Details | HH.7   | Central Bank Value         | Q9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 10.2 HQLA Details | HH.8   | Location - Jurisdiction    | F10         | Input must be 2 digit country ISO code                                     |
|      86 | 10.2 HQLA Details | HH.8   | Type - HQLA Classification | G10         | Input must be HQLA item number from list of items on HQLA page             |
|      87 | 10.2 HQLA Details | HH.8   | Own Holdings               | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 10.2 HQLA Details | HH.8   | Rehypothecated Holdings    | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 10.2 HQLA Details | HH.8   | Amount Pledged             | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 10.2 HQLA Details | HH.8   | Realisable Value           | K10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 10.2 HQLA Details | HH.8   | Adjusted Amount            | L10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 10.2 HQLA Details | HH.8   | Haircut Amount             | M10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 10.2 HQLA Details | HH.8   | Repo Market Haircut        | N10         | Input must be a percentage between 0 and 100%                              |
|      94 | 10.2 HQLA Details | HH.8   | Repo Market Value          | O10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 10.2 HQLA Details | HH.8   | Central Bank Haircut       | P10         | Input must be a percentage between 0 and 100%                              |
|      96 | 10.2 HQLA Details | HH.8   | Central Bank Value         | Q10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 10.2 HQLA Details | HH.9   | Location - Jurisdiction    | F11         | Input must be 2 digit country ISO code                                     |
|      98 | 10.2 HQLA Details | HH.9   | Type - HQLA Classification | G11         | Input must be HQLA item number from list of items on HQLA page             |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|      99 | 10.2 HQLA Details | HH.9   | Own Holdings               | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 10.2 HQLA Details | HH.9   | Rehypothecated Holdings    | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 10.2 HQLA Details | HH.9   | Amount Pledged             | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 10.2 HQLA Details | HH.9   | Realisable Value           | K11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 10.2 HQLA Details | HH.9   | Adjusted Amount            | L11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 10.2 HQLA Details | HH.9   | Haircut Amount             | M11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 10.2 HQLA Details | HH.9   | Repo Market Haircut        | N11         | Input must be a percentage between 0 and 100%                              |
|     106 | 10.2 HQLA Details | HH.9   | Repo Market Value          | O11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 10.2 HQLA Details | HH.9   | Central Bank Haircut       | P11         | Input must be a percentage between 0 and 100%                              |
|     108 | 10.2 HQLA Details | HH.9   | Central Bank Value         | Q11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 10.2 HQLA Details | HH.10  | Location - Jurisdiction    | F12         | Input must be 2 digit country ISO code                                     |
|     110 | 10.2 HQLA Details | HH.10  | Type - HQLA Classification | G12         | Input must be HQLA item number from list of items on HQLA page             |
|     111 | 10.2 HQLA Details | HH.10  | Own Holdings               | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 10.2 HQLA Details | HH.10  | Rehypothecated Holdings    | I12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 10.2 HQLA Details | HH.10  | Amount Pledged             | J12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 10.2 HQLA Details | HH.10  | Realisable Value           | K12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 10.2 HQLA Details | HH.10  | Adjusted Amount            | L12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     116 | 10.2 HQLA Details | HH.10  | Haircut Amount             | M12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 10.2 HQLA Details | HH.10  | Repo Market Haircut        | N12         | Input must be a percentage between 0 and 100%                              |
|     118 | 10.2 HQLA Details | HH.10  | Repo Market Value          | O12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     119 | 10.2 HQLA Details | HH.10  | Central Bank Haircut       | P12         | Input must be a percentage between 0 and 100%                              |
|     120 | 10.2 HQLA Details | HH.10  | Central Bank Value         | Q12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 10.2 HQLA Details | HH.11  | Location - Jurisdiction    | F13         | Input must be 2 digit country ISO code                                     |
|     122 | 10.2 HQLA Details | HH.11  | Type - HQLA Classification | G13         | Input must be HQLA item number from list of items on HQLA page             |
|     123 | 10.2 HQLA Details | HH.11  | Own Holdings               | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 10.2 HQLA Details | HH.11  | Rehypothecated Holdings    | I13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 10.2 HQLA Details | HH.11  | Amount Pledged             | J13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 10.2 HQLA Details | HH.11  | Realisable Value           | K13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 10.2 HQLA Details | HH.11  | Adjusted Amount            | L13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 10.2 HQLA Details | HH.11  | Haircut Amount             | M13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 10.2 HQLA Details | HH.11  | Repo Market Haircut        | N13         | Input must be a percentage between 0 and 100%                              |
|     130 | 10.2 HQLA Details | HH.11  | Repo Market Value          | O13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 10.2 HQLA Details | HH.11  | Central Bank Haircut       | P13         | Input must be a percentage between 0 and 100%                              |
|     132 | 10.2 HQLA Details | HH.11  | Central Bank Value         | Q13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     133 | 10.2 HQLA Details | HH.12  | Location - Jurisdiction    | F14         | Input must be 2 digit country ISO code                                     |
|     134 | 10.2 HQLA Details | HH.12  | Type - HQLA Classification | G14         | Input must be HQLA item number from list of items on HQLA page             |
|     135 | 10.2 HQLA Details | HH.12  | Own Holdings               | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 10.2 HQLA Details | HH.12  | Rehypothecated Holdings    | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 10.2 HQLA Details | HH.12  | Amount Pledged             | J14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 10.2 HQLA Details | HH.12  | Realisable Value           | K14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 10.2 HQLA Details | HH.12  | Adjusted Amount            | L14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     140 | 10.2 HQLA Details | HH.12  | Haircut Amount             | M14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     141 | 10.2 HQLA Details | HH.12  | Repo Market Haircut        | N14         | Input must be a percentage between 0 and 100%                              |
|     142 | 10.2 HQLA Details | HH.12  | Repo Market Value          | O14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 10.2 HQLA Details | HH.12  | Central Bank Haircut       | P14         | Input must be a percentage between 0 and 100%                              |
|     144 | 10.2 HQLA Details | HH.12  | Central Bank Value         | Q14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 10.2 HQLA Details | HH.13  | Location - Jurisdiction    | F15         | Input must be 2 digit country ISO code                                     |
|     146 | 10.2 HQLA Details | HH.13  | Type - HQLA Classification | G15         | Input must be HQLA item number from list of items on HQLA page             |
|     147 | 10.2 HQLA Details | HH.13  | Own Holdings               | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 10.2 HQLA Details | HH.13  | Rehypothecated Holdings    | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     149 | 10.2 HQLA Details | HH.13  | Amount Pledged             | J15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     150 | 10.2 HQLA Details | HH.13  | Realisable Value           | K15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     151 | 10.2 HQLA Details | HH.13  | Adjusted Amount            | L15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     152 | 10.2 HQLA Details | HH.13  | Haircut Amount             | M15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 10.2 HQLA Details | HH.13  | Repo Market Haircut        | N15         | Input must be a percentage between 0 and 100%                              |
|     154 | 10.2 HQLA Details | HH.13  | Repo Market Value          | O15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     155 | 10.2 HQLA Details | HH.13  | Central Bank Haircut       | P15         | Input must be a percentage between 0 and 100%                              |
|     156 | 10.2 HQLA Details | HH.13  | Central Bank Value         | Q15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 10.2 HQLA Details | HH.14  | Location - Jurisdiction    | F16         | Input must be 2 digit country ISO code                                     |
|     158 | 10.2 HQLA Details | HH.14  | Type - HQLA Classification | G16         | Input must be HQLA item number from list of items on HQLA page             |
|     159 | 10.2 HQLA Details | HH.14  | Own Holdings               | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 10.2 HQLA Details | HH.14  | Rehypothecated Holdings    | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     161 | 10.2 HQLA Details | HH.14  | Amount Pledged             | J16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 10.2 HQLA Details | HH.14  | Realisable Value           | K16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     163 | 10.2 HQLA Details | HH.14  | Adjusted Amount            | L16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     164 | 10.2 HQLA Details | HH.14  | Haircut Amount             | M16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 10.2 HQLA Details | HH.14  | Repo Market Haircut        | N16         | Input must be a percentage between 0 and 100%                              |
|     166 | 10.2 HQLA Details | HH.14  | Repo Market Value          | O16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     167 | 10.2 HQLA Details | HH.14  | Central Bank Haircut       | P16         | Input must be a percentage between 0 and 100%                              |
|     168 | 10.2 HQLA Details | HH.14  | Central Bank Value         | Q16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 10.2 HQLA Details | HH.15  | Location - Jurisdiction    | F17         | Input must be 2 digit country ISO code                                     |
|     170 | 10.2 HQLA Details | HH.15  | Type - HQLA Classification | G17         | Input must be HQLA item number from list of items on HQLA page             |
|     171 | 10.2 HQLA Details | HH.15  | Own Holdings               | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 10.2 HQLA Details | HH.15  | Rehypothecated Holdings    | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     173 | 10.2 HQLA Details | HH.15  | Amount Pledged             | J17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     174 | 10.2 HQLA Details | HH.15  | Realisable Value           | K17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 10.2 HQLA Details | HH.15  | Adjusted Amount            | L17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     176 | 10.2 HQLA Details | HH.15  | Haircut Amount             | M17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     177 | 10.2 HQLA Details | HH.15  | Repo Market Haircut        | N17         | Input must be a percentage between 0 and 100%                              |
|     178 | 10.2 HQLA Details | HH.15  | Repo Market Value          | O17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     179 | 10.2 HQLA Details | HH.15  | Central Bank Haircut       | P17         | Input must be a percentage between 0 and 100%                              |
|     180 | 10.2 HQLA Details | HH.15  | Central Bank Value         | Q17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     181 | 10.2 HQLA Details | HH.16  | Location - Jurisdiction    | F18         | Input must be 2 digit country ISO code                                     |
|     182 | 10.2 HQLA Details | HH.16  | Type - HQLA Classification | G18         | Input must be HQLA item number from list of items on HQLA page             |
|     183 | 10.2 HQLA Details | HH.16  | Own Holdings               | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     184 | 10.2 HQLA Details | HH.16  | Rehypothecated Holdings    | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     185 | 10.2 HQLA Details | HH.16  | Amount Pledged             | J18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     186 | 10.2 HQLA Details | HH.16  | Realisable Value           | K18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     187 | 10.2 HQLA Details | HH.16  | Adjusted Amount            | L18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     188 | 10.2 HQLA Details | HH.16  | Haircut Amount             | M18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     189 | 10.2 HQLA Details | HH.16  | Repo Market Haircut        | N18         | Input must be a percentage between 0 and 100%                              |
|     190 | 10.2 HQLA Details | HH.16  | Repo Market Value          | O18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     191 | 10.2 HQLA Details | HH.16  | Central Bank Haircut       | P18         | Input must be a percentage between 0 and 100%                              |
|     192 | 10.2 HQLA Details | HH.16  | Central Bank Value         | Q18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     193 | 10.2 HQLA Details | HH.17  | Location - Jurisdiction    | F19         | Input must be 2 digit country ISO code                                     |
|     194 | 10.2 HQLA Details | HH.17  | Type - HQLA Classification | G19         | Input must be HQLA item number from list of items on HQLA page             |
|     195 | 10.2 HQLA Details | HH.17  | Own Holdings               | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     196 | 10.2 HQLA Details | HH.17  | Rehypothecated Holdings    | I19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     197 | 10.2 HQLA Details | HH.17  | Amount Pledged             | J19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     198 | 10.2 HQLA Details | HH.17  | Realisable Value           | K19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     199 | 10.2 HQLA Details | HH.17  | Adjusted Amount            | L19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     200 | 10.2 HQLA Details | HH.17  | Haircut Amount             | M19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     201 | 10.2 HQLA Details | HH.17  | Repo Market Haircut        | N19         | Input must be a percentage between 0 and 100%                              |
|     202 | 10.2 HQLA Details | HH.17  | Repo Market Value          | O19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     203 | 10.2 HQLA Details | HH.17  | Central Bank Haircut       | P19         | Input must be a percentage between 0 and 100%                              |
|     204 | 10.2 HQLA Details | HH.17  | Central Bank Value         | Q19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     205 | 10.2 HQLA Details | HH.18  | Location - Jurisdiction    | F20         | Input must be 2 digit country ISO code                                     |
|     206 | 10.2 HQLA Details | HH.18  | Type - HQLA Classification | G20         | Input must be HQLA item number from list of items on HQLA page             |
|     207 | 10.2 HQLA Details | HH.18  | Own Holdings               | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     208 | 10.2 HQLA Details | HH.18  | Rehypothecated Holdings    | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     209 | 10.2 HQLA Details | HH.18  | Amount Pledged             | J20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     210 | 10.2 HQLA Details | HH.18  | Realisable Value           | K20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     211 | 10.2 HQLA Details | HH.18  | Adjusted Amount            | L20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     212 | 10.2 HQLA Details | HH.18  | Haircut Amount             | M20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     213 | 10.2 HQLA Details | HH.18  | Repo Market Haircut        | N20         | Input must be a percentage between 0 and 100%                              |
|     214 | 10.2 HQLA Details | HH.18  | Repo Market Value          | O20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     215 | 10.2 HQLA Details | HH.18  | Central Bank Haircut       | P20         | Input must be a percentage between 0 and 100%                              |
|     216 | 10.2 HQLA Details | HH.18  | Central Bank Value         | Q20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     217 | 10.2 HQLA Details | HH.19  | Location - Jurisdiction    | F21         | Input must be 2 digit country ISO code                                     |
|   Check | Sheet             | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|     218 | 10.2 HQLA Details | HH.19  | Type - HQLA Classification | G21         | Input must be HQLA item number from list of items on HQLA page             |
|     219 | 10.2 HQLA Details | HH.19  | Own Holdings               | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     220 | 10.2 HQLA Details | HH.19  | Rehypothecated Holdings    | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     221 | 10.2 HQLA Details | HH.19  | Amount Pledged             | J21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     222 | 10.2 HQLA Details | HH.19  | Realisable Value           | K21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     223 | 10.2 HQLA Details | HH.19  | Adjusted Amount            | L21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     224 | 10.2 HQLA Details | HH.19  | Haircut Amount             | M21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     225 | 10.2 HQLA Details | HH.19  | Repo Market Haircut        | N21         | Input must be a percentage between 0 and 100%                              |
|     226 | 10.2 HQLA Details | HH.19  | Repo Market Value          | O21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     227 | 10.2 HQLA Details | HH.19  | Central Bank Haircut       | P21         | Input must be a percentage between 0 and 100%                              |
|     228 | 10.2 HQLA Details | HH.19  | Central Bank Value         | Q21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     229 | 10.2 HQLA Details | HH.20  | Location - Jurisdiction    | F22         | Input must be 2 digit country ISO code                                     |
|     230 | 10.2 HQLA Details | HH.20  | Type - HQLA Classification | G22         | Input must be HQLA item number from list of items on HQLA page             |
|     231 | 10.2 HQLA Details | HH.20  | Own Holdings               | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     232 | 10.2 HQLA Details | HH.20  | Rehypothecated Holdings    | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     233 | 10.2 HQLA Details | HH.20  | Amount Pledged             | J22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     234 | 10.2 HQLA Details | HH.20  | Realisable Value           | K22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet             | Item   | Column               | Cell  Ref   | Validation Message                                                         |
|     235 | 10.2 HQLA Details | HH.20  | Adjusted Amount      | L22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     236 | 10.2 HQLA Details | HH.20  | Haircut Amount       | M22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     237 | 10.2 HQLA Details | HH.20  | Repo Market Haircut  | N22         | Input must be a percentage between 0 and 100%                              |
|     238 | 10.2 HQLA Details | HH.20  | Repo Market Value    | O22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     239 | 10.2 HQLA Details | HH.20  | Central Bank Haircut | P22         | Input must be a percentage between 0 and 100%                              |
|     240 | 10.2 HQLA Details | HH.20  | Central Bank Value   | Q22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |