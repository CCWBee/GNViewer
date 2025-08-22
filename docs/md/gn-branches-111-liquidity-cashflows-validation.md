
## Guidance Note

## Validation and verification of the '11.1 Liquidity - Cashflows' Sheet

Relevant to the JFSC's prudential reporting requirements of OIBs

## 1 Overview

## General points

- 1.1 The validation and verification checks performed on submission are set out herein.
- 1.2 Excel data validation in the template is limited as follows:
- 1.2.1 For monetary amounts, cells have been restricted so that only integers in the range -1,000,000,000 to +1,000,000,000 can be entered, unless otherwise noted. As the unit is £1,000, this means that values of +/- £1 trillion are permitted.
- 1.2.2 Excel only checks validation on direct input and/or if manually requested so it should not be considered to be a failsafe OIBs should check their data and the JFSC will check the data on submission.
- 1.2.3 Submission of the template to the JFSC will prompt the checks to run. If all checks re passed, the submission will be accepted, this fact communicated to the OIB together with a list of any warnings.
- 1.3 In the tables below, both the item (in bold) and the Excel Location (Sheet and Cell reference) are provided.
- 1.4 When a test is failed, the message received will be as described herein.
- 1.5 The ' Check ' is a unique identifier for each test, provided within the message to enable the recipient to match the error message to this guidance.

## 2 Data input validation

## Validation of cells where data entry expected or that should be left blank

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook). Calculated fields are addressed in Section 3.

|   Check | Sheet                       | Item   | Column                | Cell  Ref   | Validation Message                                                         |
|---------|-----------------------------|--------|-----------------------|-------------|----------------------------------------------------------------------------|
|       1 | 11.1 Liquidity -  Cashflows | A.1    | Sight                 | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 11.1 Liquidity -  Cashflows | A.1    | 2 days to <8 days     | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 11.1 Liquidity -  Cashflows | A.1    | 8 days to <1 month    | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 11.1 Liquidity -  Cashflows | A.1    | 1 month to <3 months  | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 11.1 Liquidity -  Cashflows | A.1    | 3 months to <6 months | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 11.1 Liquidity -  Cashflows | A.1    | 6 months to <1 year   | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 11.1 Liquidity -  Cashflows | A.1    | 1 year to <3 years    | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 11.1 Liquidity -  Cashflows | A.1    | 3 years to <5 years   | K3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|       9 | 11.1 Liquidity -  Cashflows | A.1    | 5 years and over incl undated | L3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 11.1 Liquidity -  Cashflows | A.2    | Sight                         | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 11.1 Liquidity -  Cashflows | A.2    | 2 days to <8 days             | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 11.1 Liquidity -  Cashflows | A.2    | 8 days to <1 month            | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 11.1 Liquidity -  Cashflows | A.2    | 1 month to <3 months          | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 11.1 Liquidity -  Cashflows | A.2    | 3 months to <6 months         | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 11.1 Liquidity -  Cashflows | A.2    | 6 months to <1 year           | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 11.1 Liquidity -  Cashflows | A.2    | 1 year to <3 years            | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 11.1 Liquidity -  Cashflows | A.2    | 3 years to <5 years           | K4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 11.1 Liquidity -  Cashflows | A.2    | 5 years and over incl undated | L4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 11.1 Liquidity -  Cashflows | A.3    | Sight                         | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      20 | 11.1 Liquidity -  Cashflows | A.3    | 2 days to <8 days             | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 11.1 Liquidity -  Cashflows | A.3    | 8 days to <1 month            | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 11.1 Liquidity -  Cashflows | A.3    | 1 month to <3 months          | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 11.1 Liquidity -  Cashflows | A.3    | 3 months to <6 months         | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 11.1 Liquidity -  Cashflows | A.3    | 6 months to <1 year           | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 11.1 Liquidity -  Cashflows | A.3    | 1 year to <3 years            | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 11.1 Liquidity -  Cashflows | A.3    | 3 years to <5 years           | K5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 11.1 Liquidity -  Cashflows | A.3    | 5 years and over incl undated | L5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 11.1 Liquidity -  Cashflows | A.4    | Sight                         | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 11.1 Liquidity -  Cashflows | A.4    | 2 days to <8 days             | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 11.1 Liquidity -  Cashflows | A.4    | 8 days to <1 month            | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      31 | 11.1 Liquidity -  Cashflows | A.4    | 1 month to <3 months          | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 11.1 Liquidity -  Cashflows | A.4    | 3 months to <6 months         | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 11.1 Liquidity -  Cashflows | A.4    | 6 months to <1 year           | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 11.1 Liquidity -  Cashflows | A.4    | 1 year to <3 years            | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 11.1 Liquidity -  Cashflows | A.4    | 3 years to <5 years           | K6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 11.1 Liquidity -  Cashflows | A.4    | 5 years and over incl undated | L6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 11.1 Liquidity -  Cashflows | A.5    | Sight                         | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 11.1 Liquidity -  Cashflows | A.5    | 2 days to <8 days             | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 11.1 Liquidity -  Cashflows | A.5    | 8 days to <1 month            | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 11.1 Liquidity -  Cashflows | A.5    | 1 month to <3 months          | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 11.1 Liquidity -  Cashflows | A.5    | 3 months to <6 months         | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      42 | 11.1 Liquidity -  Cashflows | A.5    | 6 months to <1 year           | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 11.1 Liquidity -  Cashflows | A.5    | 1 year to <3 years            | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 11.1 Liquidity -  Cashflows | A.5    | 3 years to <5 years           | K7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 11.1 Liquidity -  Cashflows | A.5    | 5 years and over incl undated | L7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 11.1 Liquidity -  Cashflows | A.6    | Sight                         | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 11.1 Liquidity -  Cashflows | A.6    | 2 days to <8 days             | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 11.1 Liquidity -  Cashflows | A.6    | 8 days to <1 month            | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 11.1 Liquidity -  Cashflows | A.6    | 1 month to <3 months          | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 11.1 Liquidity -  Cashflows | A.6    | 3 months to <6 months         | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 11.1 Liquidity -  Cashflows | A.6    | 6 months to <1 year           | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 11.1 Liquidity -  Cashflows | A.6    | 1 year to <3 years            | J8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      53 | 11.1 Liquidity -  Cashflows | A.6    | 3 years to <5 years           | K8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 11.1 Liquidity -  Cashflows | A.6    | 5 years and over incl undated | L8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 11.1 Liquidity -  Cashflows | A.7    | Sight                         | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 11.1 Liquidity -  Cashflows | A.7    | 2 days to <8 days             | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 11.1 Liquidity -  Cashflows | A.7    | 8 days to <1 month            | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 11.1 Liquidity -  Cashflows | A.7    | 1 month to <3 months          | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 11.1 Liquidity -  Cashflows | A.7    | 3 months to <6 months         | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 11.1 Liquidity -  Cashflows | A.7    | 6 months to <1 year           | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 11.1 Liquidity -  Cashflows | A.7    | 1 year to <3 years            | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 11.1 Liquidity -  Cashflows | A.7    | 3 years to <5 years           | K9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 11.1 Liquidity -  Cashflows | A.7    | 5 years and over incl undated | L9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      64 | 11.1 Liquidity -  Cashflows | A.8    | Sight                         | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 11.1 Liquidity -  Cashflows | A.8    | 2 days to <8 days             | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 11.1 Liquidity -  Cashflows | A.8    | 8 days to <1 month            | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 11.1 Liquidity -  Cashflows | A.8    | 1 month to <3 months          | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 11.1 Liquidity -  Cashflows | A.8    | 3 months to <6 months         | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 11.1 Liquidity -  Cashflows | A.8    | 6 months to <1 year           | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 11.1 Liquidity -  Cashflows | A.8    | 1 year to <3 years            | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 11.1 Liquidity -  Cashflows | A.8    | 3 years to <5 years           | K10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 11.1 Liquidity -  Cashflows | A.8    | 5 years and over incl undated | L10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 11.1 Liquidity -  Cashflows | A.9    | Sight                         | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 11.1 Liquidity -  Cashflows | A.9    | 2 days to <8 days             | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      75 | 11.1 Liquidity -  Cashflows | A.9    | 8 days to <1 month            | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 11.1 Liquidity -  Cashflows | A.9    | 1 month to <3 months          | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 11.1 Liquidity -  Cashflows | A.9    | 3 months to <6 months         | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 11.1 Liquidity -  Cashflows | A.9    | 6 months to <1 year           | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 11.1 Liquidity -  Cashflows | A.9    | 1 year to <3 years            | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 11.1 Liquidity -  Cashflows | A.9    | 3 years to <5 years           | K11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 11.1 Liquidity -  Cashflows | A.9    | 5 years and over incl undated | L11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      82 | 11.1 Liquidity -  Cashflows | A.9.0  | Notes                         | C12         | Must be blank                                                              |
|      83 | 11.1 Liquidity -  Cashflows | A.10   | Sight                         | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 11.1 Liquidity -  Cashflows | A.10   | 2 days to <8 days             | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 11.1 Liquidity -  Cashflows | A.10   | 8 days to <1 month            | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      86 | 11.1 Liquidity -  Cashflows | A.10   | 1 month to <3 months          | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 11.1 Liquidity -  Cashflows | A.10   | 3 months to <6 months         | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 11.1 Liquidity -  Cashflows | A.10   | 6 months to <1 year           | I13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 11.1 Liquidity -  Cashflows | A.10   | 1 year to <3 years            | J13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 11.1 Liquidity -  Cashflows | A.10   | 3 years to <5 years           | K13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 11.1 Liquidity -  Cashflows | A.10   | 5 years and over incl undated | L13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 11.1 Liquidity -  Cashflows | A.11   | Sight                         | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 11.1 Liquidity -  Cashflows | A.11   | 2 days to <8 days             | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 11.1 Liquidity -  Cashflows | A.11   | 8 days to <1 month            | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 11.1 Liquidity -  Cashflows | A.11   | 1 month to <3 months          | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 11.1 Liquidity -  Cashflows | A.11   | 3 months to <6 months         | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|      97 | 11.1 Liquidity -  Cashflows | A.11   | 6 months to <1 year           | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 11.1 Liquidity -  Cashflows | A.11   | 1 year to <3 years            | J14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      99 | 11.1 Liquidity -  Cashflows | A.11   | 3 years to <5 years           | K14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 11.1 Liquidity -  Cashflows | A.11   | 5 years and over incl undated | L14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 11.1 Liquidity -  Cashflows | A.12   | Sight                         | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 11.1 Liquidity -  Cashflows | A.12   | 2 days to <8 days             | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 11.1 Liquidity -  Cashflows | A.12   | 8 days to <1 month            | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 11.1 Liquidity -  Cashflows | A.12   | 1 month to <3 months          | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 11.1 Liquidity -  Cashflows | A.12   | 3 months to <6 months         | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 11.1 Liquidity -  Cashflows | A.12   | 6 months to <1 year           | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 11.1 Liquidity -  Cashflows | A.12   | 1 year to <3 years            | J15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     108 | 11.1 Liquidity -  Cashflows | A.12   | 3 years to <5 years           | K15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 11.1 Liquidity -  Cashflows | A.12   | 5 years and over incl undated | L15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 11.1 Liquidity -  Cashflows | A.13   | Sight                         | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 11.1 Liquidity -  Cashflows | A.13   | 2 days to <8 days             | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 11.1 Liquidity -  Cashflows | A.13   | 8 days to <1 month            | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     113 | 11.1 Liquidity -  Cashflows | A.13   | 1 month to <3 months          | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 11.1 Liquidity -  Cashflows | A.13   | 3 months to <6 months         | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 11.1 Liquidity -  Cashflows | A.13   | 6 months to <1 year           | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     116 | 11.1 Liquidity -  Cashflows | A.13   | 1 year to <3 years            | J16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 11.1 Liquidity -  Cashflows | A.13   | 3 years to <5 years           | K16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 11.1 Liquidity -  Cashflows | A.13   | 5 years and over incl undated | L16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     119 | 11.1 Liquidity -  Cashflows | A.0    | Notes                         | C17         | Must be blank                                                              |
|     120 | 11.1 Liquidity -  Cashflows | B.1    | Sight                         | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 11.1 Liquidity -  Cashflows | B.1    | 2 days to <8 days             | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     122 | 11.1 Liquidity -  Cashflows | B.1    | 8 days to <1 month            | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 11.1 Liquidity -  Cashflows | B.1    | 1 month to <3 months          | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 11.1 Liquidity -  Cashflows | B.1    | 3 months to <6 months         | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     125 | 11.1 Liquidity -  Cashflows | B.1    | 6 months to <1 year           | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 11.1 Liquidity -  Cashflows | B.1    | 1 year to <3 years            | J18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 11.1 Liquidity -  Cashflows | B.1    | 3 years to <5 years           | K18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     128 | 11.1 Liquidity -  Cashflows | B.1    | 5 years and over incl undated | L18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 11.1 Liquidity -  Cashflows | B.2    | Sight                         | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     130 | 11.1 Liquidity -  Cashflows | B.2    | 2 days to <8 days             | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     131 | 11.1 Liquidity -  Cashflows | B.2    | 8 days to <1 month            | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     132 | 11.1 Liquidity -  Cashflows | B.2    | 1 month to <3 months          | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     133 | 11.1 Liquidity -  Cashflows | B.2    | 3 months to <6 months         | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     134 | 11.1 Liquidity -  Cashflows | B.2    | 6 months to <1 year           | I19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 11.1 Liquidity -  Cashflows | B.2    | 1 year to <3 years            | J19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 11.1 Liquidity -  Cashflows | B.2    | 3 years to <5 years           | K19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     137 | 11.1 Liquidity -  Cashflows | B.2    | 5 years and over incl undated | L19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 11.1 Liquidity -  Cashflows | B.3    | Sight                         | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 11.1 Liquidity -  Cashflows | B.3    | 2 days to <8 days             | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     140 | 11.1 Liquidity -  Cashflows | B.3    | 8 days to <1 month            | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     141 | 11.1 Liquidity -  Cashflows | B.3    | 1 month to <3 months          | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     142 | 11.1 Liquidity -  Cashflows | B.3    | 3 months to <6 months         | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     143 | 11.1 Liquidity -  Cashflows | B.3    | 6 months to <1 year           | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     144 | 11.1 Liquidity -  Cashflows | B.3    | 1 year to <3 years            | J20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 11.1 Liquidity -  Cashflows | B.3    | 3 years to <5 years           | K20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     146 | 11.1 Liquidity -  Cashflows | B.3    | 5 years and over incl undated | L20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     147 | 11.1 Liquidity -  Cashflows | B.4    | Sight                         | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 11.1 Liquidity -  Cashflows | B.4    | 2 days to <8 days             | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     149 | 11.1 Liquidity -  Cashflows | B.4    | 8 days to <1 month            | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     150 | 11.1 Liquidity -  Cashflows | B.4    | 1 month to <3 months          | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     151 | 11.1 Liquidity -  Cashflows | B.4    | 3 months to <6 months         | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     152 | 11.1 Liquidity -  Cashflows | B.4    | 6 months to <1 year           | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 11.1 Liquidity -  Cashflows | B.4    | 1 year to <3 years            | J21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     154 | 11.1 Liquidity -  Cashflows | B.4    | 3 years to <5 years           | K21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     155 | 11.1 Liquidity -  Cashflows | B.4    | 5 years and over incl undated | L21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     156 | 11.1 Liquidity -  Cashflows | B.5    | Sight                         | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 11.1 Liquidity -  Cashflows | B.5    | 2 days to <8 days             | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     158 | 11.1 Liquidity -  Cashflows | B.5    | 8 days to <1 month            | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     159 | 11.1 Liquidity -  Cashflows | B.5    | 1 month to <3 months          | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 11.1 Liquidity -  Cashflows | B.5    | 3 months to <6 months         | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     161 | 11.1 Liquidity -  Cashflows | B.5    | 6 months to <1 year           | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 11.1 Liquidity -  Cashflows | B.5    | 1 year to <3 years            | J22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     163 | 11.1 Liquidity -  Cashflows | B.5    | 3 years to <5 years           | K22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     164 | 11.1 Liquidity -  Cashflows | B.5    | 5 years and over incl undated | L22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 11.1 Liquidity -  Cashflows | B.6    | Notes                         | C23         | Must be blank                                                              |
|     166 | 11.1 Liquidity -  Cashflows | B.6    | Sight                         | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     167 | 11.1 Liquidity -  Cashflows | B.6    | 2 days to <8 days             | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     168 | 11.1 Liquidity -  Cashflows | B.6    | 8 days to <1 month            | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 11.1 Liquidity -  Cashflows | B.6    | 1 month to <3 months          | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     170 | 11.1 Liquidity -  Cashflows | B.6    | 3 months to <6 months         | H23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     171 | 11.1 Liquidity -  Cashflows | B.6    | 6 months to <1 year           | I23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 11.1 Liquidity -  Cashflows | B.6    | 1 year to <3 years            | J23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     173 | 11.1 Liquidity -  Cashflows | B.6    | 3 years to <5 years           | K23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     174 | 11.1 Liquidity -  Cashflows | B.6    | 5 years and over incl undated | L23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 11.1 Liquidity -  Cashflows | B.7    | Notes                         | C24         | Must be blank                                                              |
|     176 | 11.1 Liquidity -  Cashflows | B.7    | Sight                         | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     177 | 11.1 Liquidity -  Cashflows | B.7    | 2 days to <8 days             | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     178 | 11.1 Liquidity -  Cashflows | B.7    | 8 days to <1 month            | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     179 | 11.1 Liquidity -  Cashflows | B.7    | 1 month to <3 months          | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     180 | 11.1 Liquidity -  Cashflows | B.7    | 3 months to <6 months         | H24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     181 | 11.1 Liquidity -  Cashflows | B.7    | 6 months to <1 year           | I24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     182 | 11.1 Liquidity -  Cashflows | B.7    | 1 year to <3 years            | J24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     183 | 11.1 Liquidity -  Cashflows | B.7    | 3 years to <5 years           | K24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     184 | 11.1 Liquidity -  Cashflows | B.7    | 5 years and over incl undated | L24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     185 | 11.1 Liquidity -  Cashflows | B.7.1  | Notes                         | C25         | Must be blank                                                              |
|     186 | 11.1 Liquidity -  Cashflows | B.8    | Sight                         | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     187 | 11.1 Liquidity -  Cashflows | B.8    | 2 days to <8 days             | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     188 | 11.1 Liquidity -  Cashflows | B.8    | 8 days to <1 month            | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     189 | 11.1 Liquidity -  Cashflows | B.8    | 1 month to <3 months          | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     190 | 11.1 Liquidity -  Cashflows | B.8    | 3 months to <6 months         | H26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     191 | 11.1 Liquidity -  Cashflows | B.8    | 6 months to <1 year           | I26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     192 | 11.1 Liquidity -  Cashflows | B.8    | 1 year to <3 years            | J26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     193 | 11.1 Liquidity -  Cashflows | B.8    | 3 years to <5 years           | K26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     194 | 11.1 Liquidity -  Cashflows | B.8    | 5 years and over incl undated | L26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     195 | 11.1 Liquidity -  Cashflows | B.9    | Sight                         | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     196 | 11.1 Liquidity -  Cashflows | B.9    | 2 days to <8 days             | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     197 | 11.1 Liquidity -  Cashflows | B.9    | 8 days to <1 month            | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     198 | 11.1 Liquidity -  Cashflows | B.9    | 1 month to <3 months          | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     199 | 11.1 Liquidity -  Cashflows | B.9    | 3 months to <6 months         | H27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     200 | 11.1 Liquidity -  Cashflows | B.9    | 6 months to <1 year           | I27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     201 | 11.1 Liquidity -  Cashflows | B.9    | 1 year to <3 years            | J27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     202 | 11.1 Liquidity -  Cashflows | B.9    | 3 years to <5 years           | K27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     203 | 11.1 Liquidity -  Cashflows | B.9    | 5 years and over incl undated | L27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     204 | 11.1 Liquidity -  Cashflows | B.9.0  | Notes                         | C28         | Must be blank                                                              |
|     205 | 11.1 Liquidity -  Cashflows | B.10   | Sight                         | D29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     206 | 11.1 Liquidity -  Cashflows | B.10   | 2 days to <8 days             | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     207 | 11.1 Liquidity -  Cashflows | B.10   | 8 days to <1 month            | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     208 | 11.1 Liquidity -  Cashflows | B.10   | 1 month to <3 months          | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     209 | 11.1 Liquidity -  Cashflows | B.10   | 3 months to <6 months         | H29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     210 | 11.1 Liquidity -  Cashflows | B.10   | 6 months to <1 year           | I29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     211 | 11.1 Liquidity -  Cashflows | B.10   | 1 year to <3 years            | J29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     212 | 11.1 Liquidity -  Cashflows | B.10   | 3 years to <5 years           | K29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     213 | 11.1 Liquidity -  Cashflows | B.10   | 5 years and over incl undated | L29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     214 | 11.1 Liquidity -  Cashflows | B.11   | Sight                         | D30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     215 | 11.1 Liquidity -  Cashflows | B.11   | 2 days to <8 days             | E30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     216 | 11.1 Liquidity -  Cashflows | B.11   | 8 days to <1 month            | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     217 | 11.1 Liquidity -  Cashflows | B.11   | 1 month to <3 months          | G30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     218 | 11.1 Liquidity -  Cashflows | B.11   | 3 months to <6 months         | H30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     219 | 11.1 Liquidity -  Cashflows | B.11   | 6 months to <1 year           | I30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     220 | 11.1 Liquidity -  Cashflows | B.11   | 1 year to <3 years            | J30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     221 | 11.1 Liquidity -  Cashflows | B.11   | 3 years to <5 years           | K30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     222 | 11.1 Liquidity -  Cashflows | B.11   | 5 years and over incl undated | L30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     223 | 11.1 Liquidity -  Cashflows | B.12   | Sight                         | D31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     224 | 11.1 Liquidity -  Cashflows | B.12   | 2 days to <8 days             | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     225 | 11.1 Liquidity -  Cashflows | B.12   | 8 days to <1 month            | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     226 | 11.1 Liquidity -  Cashflows | B.12   | 1 month to <3 months          | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     227 | 11.1 Liquidity -  Cashflows | B.12   | 3 months to <6 months         | H31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     228 | 11.1 Liquidity -  Cashflows | B.12   | 6 months to <1 year           | I31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     229 | 11.1 Liquidity -  Cashflows | B.12   | 1 year to <3 years            | J31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     230 | 11.1 Liquidity -  Cashflows | B.12   | 3 years to <5 years           | K31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     231 | 11.1 Liquidity -  Cashflows | B.12   | 5 years and over incl undated | L31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     232 | 11.1 Liquidity -  Cashflows | B.13   | Sight                         | D32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     233 | 11.1 Liquidity -  Cashflows | B.13   | 2 days to <8 days             | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     234 | 11.1 Liquidity -  Cashflows | B.13   | 8 days to <1 month            | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     235 | 11.1 Liquidity -  Cashflows | B.13   | 1 month to <3 months          | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     236 | 11.1 Liquidity -  Cashflows | B.13   | 3 months to <6 months         | H32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     237 | 11.1 Liquidity -  Cashflows | B.13   | 6 months to <1 year           | I32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     238 | 11.1 Liquidity -  Cashflows | B.13   | 1 year to <3 years            | J32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     239 | 11.1 Liquidity -  Cashflows | B.13   | 3 years to <5 years           | K32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                       | Item   | Column                        | Cell  Ref   | Validation Message                                                         |
|     240 | 11.1 Liquidity -  Cashflows | B.13   | 5 years and over incl undated | L32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     241 | 11.1 Liquidity -  Cashflows | B.0    | Notes                         | C33         | Must be blank                                                              |
|     242 | 11.1 Liquidity -  Cashflows | E      | Notes                         | C34         | Must be blank                                                              |
|     243 | 11.1 Liquidity -  Cashflows | F      | Notes                         | C35         | Must be blank                                                              |
|     244 | 11.1 Liquidity -  Cashflows | G      | Notes                         | C36         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                       | Item   | Column   | Cell  Ref   | Excel   |
|---------|-----------------------------|--------|----------|-------------|---------|
|     245 | 11.1 Liquidity -  Cashflows | A.1    | Notes    | C3          | (A)     |
|     246 | 11.1 Liquidity -  Cashflows | A.2    | Notes    | C4          | (B)     |
|     247 | 11.1 Liquidity -  Cashflows | A.3    | Notes    | C5          | (B)     |
|     248 | 11.1 Liquidity -  Cashflows | A.4    | Notes    | C6          | (B)     |
|     249 | 11.1 Liquidity -  Cashflows | A.5    | Notes    | C7          | (B)     |
|     250 | 11.1 Liquidity -  Cashflows | A.6    | Notes    | C8          | (C)     |
|     251 | 11.1 Liquidity -  Cashflows | A.7    | Notes    | C9          | (D)     |
|     252 | 11.1 Liquidity -  Cashflows | A.8    | Notes    | C10         | (D)     |
|     253 | 11.1 Liquidity -  Cashflows | A.9    | Notes    | C11         | (E)     |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel        |
|     254 | 11.1 Liquidity -  Cashflows | A.9.0  | Sight                          | D12         | =SUM(D3:D11) |
|     255 | 11.1 Liquidity -  Cashflows | A.9.0  | 2 days to <8 days              | E12         | =SUM(E3:E11) |
|     256 | 11.1 Liquidity -  Cashflows | A.9.0  | 8 days to <1 month             | F12         | =SUM(F3:F11) |
|     257 | 11.1 Liquidity -  Cashflows | A.9.0  | 1 month to <3 months           | G12         | =SUM(G3:G11) |
|     258 | 11.1 Liquidity -  Cashflows | A.9.0  | 3 months to <6 months          | H12         | =SUM(H3:H11) |
|     259 | 11.1 Liquidity -  Cashflows | A.9.0  | 6 months to <1 year            | I12         | =SUM(I3:I11) |
|     260 | 11.1 Liquidity -  Cashflows | A.9.0  | 1 year to <3 years             | J12         | =SUM(J3:J11) |
|     261 | 11.1 Liquidity -  Cashflows | A.9.0  | 3 years to <5 years            | K12         | =SUM(K3:K11) |
|     262 | 11.1 Liquidity -  Cashflows | A.9.0  | 5 years and over incl  undated | L12         | =SUM(L3:L11) |
|     263 | 11.1 Liquidity -  Cashflows | A.10   | Notes                          | C13         | (F)          |
|     264 | 11.1 Liquidity -  Cashflows | A.11   | Notes                          | C14         | (G)          |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel         |
|     265 | 11.1 Liquidity -  Cashflows | A.12   | Notes                          | C15         | (G)           |
|     266 | 11.1 Liquidity -  Cashflows | A.13   | Notes                          | C16         | (H)           |
|     267 | 11.1 Liquidity -  Cashflows | A.0    | Sight                          | D17         | =SUM(D12:D16) |
|     268 | 11.1 Liquidity -  Cashflows | A.0    | 2 days to <8 days              | E17         | =SUM(E12:E16) |
|     269 | 11.1 Liquidity -  Cashflows | A.0    | 8 days to <1 month             | F17         | =SUM(F12:F16) |
|     270 | 11.1 Liquidity -  Cashflows | A.0    | 1 month to <3 months           | G17         | =SUM(G12:G16) |
|     271 | 11.1 Liquidity -  Cashflows | A.0    | 3 months to <6 months          | H17         | =SUM(H12:H16) |
|     272 | 11.1 Liquidity -  Cashflows | A.0    | 6 months to <1 year            | I17         | =SUM(I12:I16) |
|     273 | 11.1 Liquidity -  Cashflows | A.0    | 1 year to <3 years             | J17         | =SUM(J12:J16) |
|     274 | 11.1 Liquidity -  Cashflows | A.0    | 3 years to <5 years            | K17         | =SUM(K12:K16) |
|     275 | 11.1 Liquidity -  Cashflows | A.0    | 5 years and over incl  undated | L17         | =SUM(L12:L16) |
|   Check | Sheet                       | Item   | Column                | Cell  Ref   | Excel         |
|     276 | 11.1 Liquidity -  Cashflows | B.1    | Notes                 | C18         | (I)           |
|     277 | 11.1 Liquidity -  Cashflows | B.2    | Notes                 | C19         | (J)           |
|     278 | 11.1 Liquidity -  Cashflows | B.3    | Notes                 | C20         | (J)           |
|     279 | 11.1 Liquidity -  Cashflows | B.4    | Notes                 | C21         | (J)           |
|     280 | 11.1 Liquidity -  Cashflows | B.5    | Notes                 | C22         | (J)           |
|     281 | 11.1 Liquidity -  Cashflows | B.7.1  | Sight                 | D25         | =SUM(D18:D24) |
|     282 | 11.1 Liquidity -  Cashflows | B.7.1  | 2 days to <8 days     | E25         | =SUM(E18:E24) |
|     283 | 11.1 Liquidity -  Cashflows | B.7.1  | 8 days to <1 month    | F25         | =SUM(F18:F24) |
|     284 | 11.1 Liquidity -  Cashflows | B.7.1  | 1 month to <3 months  | G25         | =SUM(G18:G24) |
|     285 | 11.1 Liquidity -  Cashflows | B.7.1  | 3 months to <6 months | H25         | =SUM(H18:H24) |
|     286 | 11.1 Liquidity -  Cashflows | B.7.1  | 6 months to <1 year   | I25         | =SUM(I18:I24) |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel         |
|     287 | 11.1 Liquidity -  Cashflows | B.7.1  | 1 year to <3 years             | J25         | =SUM(J18:J24) |
|     288 | 11.1 Liquidity -  Cashflows | B.7.1  | 3 years to <5 years            | K25         | =SUM(K18:K24) |
|     289 | 11.1 Liquidity -  Cashflows | B.7.1  | 5 years and over incl  undated | L25         | =SUM(L18:L24) |
|     290 | 11.1 Liquidity -  Cashflows | B.8    | Notes                          | C26         | (K)           |
|     291 | 11.1 Liquidity -  Cashflows | B.9    | Notes                          | C27         | (K)           |
|     292 | 11.1 Liquidity -  Cashflows | B.9.0  | Sight                          | D28         | =SUM(D25:D27) |
|     293 | 11.1 Liquidity -  Cashflows | B.9.0  | 2 days to <8 days              | E28         | =SUM(E25:E27) |
|     294 | 11.1 Liquidity -  Cashflows | B.9.0  | 8 days to <1 month             | F28         | =SUM(F25:F27) |
|     295 | 11.1 Liquidity -  Cashflows | B.9.0  | 1 month to <3 months           | G28         | =SUM(G25:G27) |
|     296 | 11.1 Liquidity -  Cashflows | B.9.0  | 3 months to <6 months          | H28         | =SUM(H25:H27) |
|     297 | 11.1 Liquidity -  Cashflows | B.9.0  | 6 months to <1 year            | I28         | =SUM(I25:I27) |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel         |
|     298 | 11.1 Liquidity -  Cashflows | B.9.0  | 1 year to <3 years             | J28         | =SUM(J25:J27) |
|     299 | 11.1 Liquidity -  Cashflows | B.9.0  | 3 years to <5 years            | K28         | =SUM(K25:K27) |
|     300 | 11.1 Liquidity -  Cashflows | B.9.0  | 5 years and over incl  undated | L28         | =SUM(L25:L27) |
|     301 | 11.1 Liquidity -  Cashflows | B.10   | Notes                          | C29         | (F)           |
|     302 | 11.1 Liquidity -  Cashflows | B.11   | Notes                          | C30         | (L)           |
|     303 | 11.1 Liquidity -  Cashflows | B.12   | Notes                          | C31         | (M)           |
|     304 | 11.1 Liquidity -  Cashflows | B.13   | Notes                          | C32         | (H)           |
|     305 | 11.1 Liquidity -  Cashflows | B.0    | Sight                          | D33         | =SUM(D28:D32) |
|     306 | 11.1 Liquidity -  Cashflows | B.0    | 2 days to <8 days              | E33         | =SUM(E28:E32) |
|     307 | 11.1 Liquidity -  Cashflows | B.0    | 8 days to <1 month             | F33         | =SUM(F28:F32) |
|     308 | 11.1 Liquidity -  Cashflows | B.0    | 1 month to <3 months           | G33         | =SUM(G28:G32) |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel         |
|     309 | 11.1 Liquidity -  Cashflows | B.0    | 3 months to <6 months          | H33         | =SUM(H28:H32) |
|     310 | 11.1 Liquidity -  Cashflows | B.0    | 6 months to <1 year            | I33         | =SUM(I28:I32) |
|     311 | 11.1 Liquidity -  Cashflows | B.0    | 1 year to <3 years             | J33         | =SUM(J28:J32) |
|     312 | 11.1 Liquidity -  Cashflows | B.0    | 3 years to <5 years            | K33         | =SUM(K28:K32) |
|     313 | 11.1 Liquidity -  Cashflows | B.0    | 5 years and over incl  undated | L33         | =SUM(L28:L32) |
|     314 | 11.1 Liquidity -  Cashflows | E      | Sight                          | D34         | =D17-D33      |
|     315 | 11.1 Liquidity -  Cashflows | E      | 2 days to <8 days              | E34         | =E17-E33      |
|     316 | 11.1 Liquidity -  Cashflows | E      | 8 days to <1 month             | F34         | =F17-F33      |
|     317 | 11.1 Liquidity -  Cashflows | E      | 1 month to <3 months           | G34         | =G17-G33      |
|     318 | 11.1 Liquidity -  Cashflows | E      | 3 months to <6 months          | H34         | =H17-H33      |
|     319 | 11.1 Liquidity -  Cashflows | E      | 6 months to <1 year            | I34         | =I17-I33      |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel    |
|     320 | 11.1 Liquidity -  Cashflows | E      | 1 year to <3 years             | J34         | =J17-J33 |
|     321 | 11.1 Liquidity -  Cashflows | E      | 3 years to <5 years            | K34         | =K17-K33 |
|     322 | 11.1 Liquidity -  Cashflows | E      | 5 years and over incl  undated | L34         | =L17-L33 |
|     323 | 11.1 Liquidity -  Cashflows | F      | Sight                          | D35         | =D34     |
|     324 | 11.1 Liquidity -  Cashflows | F      | 2 days to <8 days              | E35         | =D35+E34 |
|     325 | 11.1 Liquidity -  Cashflows | F      | 8 days to <1 month             | F35         | =E35+F34 |
|     326 | 11.1 Liquidity -  Cashflows | F      | 1 month to <3 months           | G35         | =F35+G34 |
|     327 | 11.1 Liquidity -  Cashflows | F      | 3 months to <6 months          | H35         | =G35+H34 |
|     328 | 11.1 Liquidity -  Cashflows | F      | 6 months to <1 year            | I35         | =H35+I34 |
|     329 | 11.1 Liquidity -  Cashflows | F      | 1 year to <3 years             | J35         | =I35+J34 |
|     330 | 11.1 Liquidity -  Cashflows | F      | 3 years to <5 years            | K35         | =J35+K34 |
|   Check | Sheet                       | Item   | Column                         | Cell  Ref   | Excel                                                                   |
|     331 | 11.1 Liquidity -  Cashflows | F      | 5 years and over incl  undated | L35         | =K35+L34                                                                |
|     332 | 11.1 Liquidity -  Cashflows | G      | Sight                          | D36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*D35/'8.3 Total  Deposits'!$C$13) |
|     333 | 11.1 Liquidity -  Cashflows | G      | 2 days to <8 days              | E36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*E35/'8.3 Total  Deposits'!$C$13) |
|     334 | 11.1 Liquidity -  Cashflows | G      | 8 days to <1 month             | F36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*F35/'8.3 Total  Deposits'!$C$13) |
|     335 | 11.1 Liquidity -  Cashflows | G      | 1 month to <3 months           | G36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*G35/'8.3 Total  Deposits'!$C$13) |
|     336 | 11.1 Liquidity -  Cashflows | G      | 3 months to <6 months          | H36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*H35/'8.3 Total  Deposits'!$C$13) |
|     337 | 11.1 Liquidity -  Cashflows | G      | 6 months to <1 year            | I36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*I35/'8.3 Total  Deposits'!$C$13) |
|     338 | 11.1 Liquidity -  Cashflows | G      | 1 year to <3 years             | J36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*J35/'8.3 Total  Deposits'!$C$13) |
|     339 | 11.1 Liquidity -  Cashflows | G      | 3 years to <5 years            | K36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*K35/'8.3 Total  Deposits'!$C$13) |
|     340 | 11.1 Liquidity -  Cashflows | G      | 5 years and over incl  undated | L36         | =IF('8.3 Total Deposits'!$C$13=0,0,100*L35/'8.3 Total  Deposits'!$C$13) |

## 4 Logical checks

- 4.1 Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.  A 'Comment box' appears once user left-clicks the highlighted cell.

|   Check | Sheet                       | Item(s)   | Column                 | Range   | Validation Message                                                              |
|---------|-----------------------------|-----------|------------------------|---------|---------------------------------------------------------------------------------|
|     341 | 11.1 Liquidity -  Cashflows | A.1       | All data entry columns | D3:L3   | Sum of all cells in range must equal cell C3 on sheet '2.6  Liquidity Summary'  |
|     342 | 11.1 Liquidity -  Cashflows | A.2       | All data entry columns | D4:L4   | Sum of all cells in range must equal cell C4 on sheet '2.6  Liquidity Summary'  |
|     343 | 11.1 Liquidity -  Cashflows | A.3       | All data entry columns | D5:L5   | Sum of all cells in range must equal cell C5 on sheet '2.6  Liquidity Summary'  |
|     344 | 11.1 Liquidity -  Cashflows | A.4       | All data entry columns | D6:L6   | Sum of all cells in range must equal cell C6 on sheet '2.6  Liquidity Summary'  |
|     345 | 11.1 Liquidity -  Cashflows | A.5       | All data entry columns | D7:L7   | Sum of all cells in range must equal cell C7 on sheet '2.6  Liquidity Summary'  |
|     346 | 11.1 Liquidity -  Cashflows | A.6       | All data entry columns | D8:L8   | Sum of all cells in range must equal cell C8 on sheet '2.6  Liquidity Summary'  |
|     347 | 11.1 Liquidity -  Cashflows | A.7       | All data entry columns | D9:L9   | Sum of all cells in range must equal cell C9 on sheet '2.6  Liquidity Summary'  |
|     348 | 11.1 Liquidity -  Cashflows | A.8       | All data entry columns | D10:L10 | Sum of all cells in range must equal cell C10 on sheet '2.6  Liquidity Summary' |
|     349 | 11.1 Liquidity -  Cashflows | A.9       | All data entry columns | D11:L11 | Sum of all cells in range must equal cell C11 on sheet '2.6  Liquidity Summary' |
|   350 | 11.1 Liquidity -  Cashflows   | B.1       | All data entry columns   | D18:L18   | Sum of all cells in range must equal cell C13 on sheet '2.6  Liquidity Summary'   |
|   351 | 11.1 Liquidity -  Cashflows   | B.2 & B.3 | All data entry columns   | D19:L20   | Sum of all cells in range must equal cell C14 on sheet '2.6  Liquidity Summary'   |
|   352 | 11.1 Liquidity -  Cashflows   | B.4 & B.5 | All data entry columns   | D21:D22   | Sum of all cells in range must equal cell C15 on sheet '2.6  Liquidity Summary'   |
|   353 | 11.1 Liquidity -  Cashflows   | B.6       | All data entry columns   | D23:L23   | Sum of all cells in range must equal cell C16 on sheet '2.6  Liquidity Summary'   |
|   354 | 11.1 Liquidity -  Cashflows   | B.7       | All data entry columns   | D24:L24   | Sum of all cells in range must equal cell C17 on sheet '2.6  Liquidity Summary'   |
|   355 | 11.1 Liquidity -  Cashflows   | B.8       | All data entry columns   | D26:L26   | Sum of all cells in range must equal cell C18 on sheet '2.6  Liquidity Summary'   |
|   356 | 11.1 Liquidity -  Cashflows   | B.9       | All data entry columns   | D27:L27   | Sum of all cells in range must equal cell C19 on sheet '2.6  Liquidity Summary'   |