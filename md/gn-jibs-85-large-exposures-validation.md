
## Guidance Note

## Validation and verification of the '8.5 Large Exposures' Sheet

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

|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|---------|---------------------|--------|-------------------------------------------------|------------|-----------------------------------------------------------------------------------|
|       1 | 8.5 Large Exposures | LE.1   | LE Ref                                          | D3         | LE approval reference up to 15 characters, or 'NONE'                              |
|       2 | 8.5 Large Exposures | LE.1   | Connected to bank?                              | E3         | Input must be Y or N                                                              |
|       3 | 8.5 Large Exposures | LE.1   | Outstanding Amount                              | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       4 | 8.5 Large Exposures | LE.1   | Facility Amount                                 | G3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       5 | 8.5 Large Exposures | LE.1   | Provision                                       | H3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       6 | 8.5 Large Exposures | LE.1   | Performing?                                     | I3         | Input must be Y or N                                                              |
|       7 | 8.5 Large Exposures | LE.1   | Parental Guarantee or  Loan Take-Over Agreement | J3         | Input must be Y or N                                                              |
|       8 | 8.5 Large Exposures | LE.1   | Collateral (Cash, Govt or  Other)               | K3         | Input must be text, between 2 and 50 characters                                   |
|       9 | 8.5 Large Exposures | LE.1   | Collateral Cover %                              | L3         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      10 | 8.5 Large Exposures | LE.1   | Currency                                        | M3         | Input must be 3 digit currency ISO code                                           |
|      11 | 8.5 Large Exposures | LE.1   | Maturity Date                                   | N3         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      12 | 8.5 Large Exposures | LE.2   | LE Ref                                          | D4         | LE approval reference up to 15 characters, or 'NONE'                              |
|      13 | 8.5 Large Exposures | LE.2   | Connected to bank?                              | E4         | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      14 | 8.5 Large Exposures | LE.2   | Outstanding Amount                              | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      15 | 8.5 Large Exposures | LE.2   | Facility Amount                                 | G4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      16 | 8.5 Large Exposures | LE.2   | Provision                                       | H4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      17 | 8.5 Large Exposures | LE.2   | Performing?                                     | I4         | Input must be Y or N                                                              |
|      18 | 8.5 Large Exposures | LE.2   | Parental Guarantee or  Loan Take-Over Agreement | J4         | Input must be Y or N                                                              |
|      19 | 8.5 Large Exposures | LE.2   | Collateral (Cash, Govt or  Other)               | K4         | Input must be text, between 2 and 50 characters                                   |
|      20 | 8.5 Large Exposures | LE.2   | Collateral Cover %                              | L4         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      21 | 8.5 Large Exposures | LE.2   | Currency                                        | M4         | Input must be 3 digit currency ISO code                                           |
|      22 | 8.5 Large Exposures | LE.2   | Maturity Date                                   | N4         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      23 | 8.5 Large Exposures | LE.3   | LE Ref                                          | D5         | LE approval reference up to 15 characters, or 'NONE'                              |
|      24 | 8.5 Large Exposures | LE.3   | Connected to bank?                              | E5         | Input must be Y or N                                                              |
|      25 | 8.5 Large Exposures | LE.3   | Outstanding Amount                              | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      26 | 8.5 Large Exposures | LE.3   | Facility Amount                                 | G5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      27 | 8.5 Large Exposures | LE.3   | Provision                                       | H5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      28 | 8.5 Large Exposures | LE.3   | Performing?                                     | I5         | Input must be Y or N                                                              |
|      29 | 8.5 Large Exposures | LE.3   | Parental Guarantee or  Loan Take-Over Agreement | J5         | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      30 | 8.5 Large Exposures | LE.3   | Collateral (Cash, Govt or  Other)               | K5         | Input must be text, between 2 and 50 characters                                   |
|      31 | 8.5 Large Exposures | LE.3   | Collateral Cover %                              | L5         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      32 | 8.5 Large Exposures | LE.3   | Currency                                        | M5         | Input must be 3 digit currency ISO code                                           |
|      33 | 8.5 Large Exposures | LE.3   | Maturity Date                                   | N5         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      34 | 8.5 Large Exposures | LE.4   | LE Ref                                          | D6         | LE approval reference up to 15 characters, or 'NONE'                              |
|      35 | 8.5 Large Exposures | LE.4   | Connected to bank?                              | E6         | Input must be Y or N                                                              |
|      36 | 8.5 Large Exposures | LE.4   | Outstanding Amount                              | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      37 | 8.5 Large Exposures | LE.4   | Facility Amount                                 | G6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      38 | 8.5 Large Exposures | LE.4   | Provision                                       | H6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      39 | 8.5 Large Exposures | LE.4   | Performing?                                     | I6         | Input must be Y or N                                                              |
|      40 | 8.5 Large Exposures | LE.4   | Parental Guarantee or  Loan Take-Over Agreement | J6         | Input must be Y or N                                                              |
|      41 | 8.5 Large Exposures | LE.4   | Collateral (Cash, Govt or  Other)               | K6         | Input must be text, between 2 and 50 characters                                   |
|      42 | 8.5 Large Exposures | LE.4   | Collateral Cover %                              | L6         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      43 | 8.5 Large Exposures | LE.4   | Currency                                        | M6         | Input must be 3 digit currency ISO code                                           |
|      44 | 8.5 Large Exposures | LE.4   | Maturity Date                                   | N6         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      45 | 8.5 Large Exposures | LE.5   | LE Ref                                          | D7         | LE approval reference up to 15 characters, or 'NONE'                              |
|      46 | 8.5 Large Exposures | LE.5   | Connected to bank?                              | E7         | Input must be Y or N                                                              |
|      47 | 8.5 Large Exposures | LE.5   | Outstanding Amount                              | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      48 | 8.5 Large Exposures | LE.5   | Facility Amount                                 | G7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      49 | 8.5 Large Exposures | LE.5   | Provision                                       | H7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      50 | 8.5 Large Exposures | LE.5   | Performing?                                     | I7         | Input must be Y or N                                                              |
|      51 | 8.5 Large Exposures | LE.5   | Parental Guarantee or  Loan Take-Over Agreement | J7         | Input must be Y or N                                                              |
|      52 | 8.5 Large Exposures | LE.5   | Collateral (Cash, Govt or  Other)               | K7         | Input must be text, between 2 and 50 characters                                   |
|      53 | 8.5 Large Exposures | LE.5   | Collateral Cover %                              | L7         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      54 | 8.5 Large Exposures | LE.5   | Currency                                        | M7         | Input must be 3 digit currency ISO code                                           |
|      55 | 8.5 Large Exposures | LE.5   | Maturity Date                                   | N7         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      56 | 8.5 Large Exposures | LE.6   | LE Ref                                          | D8         | LE approval reference up to 15 characters, or 'NONE'                              |
|      57 | 8.5 Large Exposures | LE.6   | Connected to bank?                              | E8         | Input must be Y or N                                                              |
|      58 | 8.5 Large Exposures | LE.6   | Outstanding Amount                              | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      59 | 8.5 Large Exposures | LE.6   | Facility Amount                                 | G8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      60 | 8.5 Large Exposures | LE.6   | Provision                                       | H8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      61 | 8.5 Large Exposures | LE.6   | Performing?                                     | I8         | Input must be Y or N                                                              |
|      62 | 8.5 Large Exposures | LE.6   | Parental Guarantee or  Loan Take-Over Agreement | J8         | Input must be Y or N                                                              |
|      63 | 8.5 Large Exposures | LE.6   | Collateral (Cash, Govt or  Other)               | K8         | Input must be text, between 2 and 50 characters                                   |
|      64 | 8.5 Large Exposures | LE.6   | Collateral Cover %                              | L8         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      65 | 8.5 Large Exposures | LE.6   | Currency                                        | M8         | Input must be 3 digit currency ISO code                                           |
|      66 | 8.5 Large Exposures | LE.6   | Maturity Date                                   | N8         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      67 | 8.5 Large Exposures | LE.7   | LE Ref                                          | D9         | LE approval reference up to 15 characters, or 'NONE'                              |
|      68 | 8.5 Large Exposures | LE.7   | Connected to bank?                              | E9         | Input must be Y or N                                                              |
|      69 | 8.5 Large Exposures | LE.7   | Outstanding Amount                              | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      70 | 8.5 Large Exposures | LE.7   | Facility Amount                                 | G9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      71 | 8.5 Large Exposures | LE.7   | Provision                                       | H9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      72 | 8.5 Large Exposures | LE.7   | Performing?                                     | I9         | Input must be Y or N                                                              |
|      73 | 8.5 Large Exposures | LE.7   | Parental Guarantee or  Loan Take-Over Agreement | J9         | Input must be Y or N                                                              |
|      74 | 8.5 Large Exposures | LE.7   | Collateral (Cash, Govt or  Other)               | K9         | Input must be text, between 2 and 50 characters                                   |
|      75 | 8.5 Large Exposures | LE.7   | Collateral Cover %                              | L9         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      76 | 8.5 Large Exposures | LE.7   | Currency                                        | M9         | Input must be 3 digit currency ISO code                                           |
|      77 | 8.5 Large Exposures | LE.7   | Maturity Date                                   | N9         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      78 | 8.5 Large Exposures | LE.8   | LE Ref                                          | D10        | LE approval reference up to 15 characters, or 'NONE'                              |
|      79 | 8.5 Large Exposures | LE.8   | Connected to bank?                              | E10        | Input must be Y or N                                                              |
|      80 | 8.5 Large Exposures | LE.8   | Outstanding Amount                              | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      81 | 8.5 Large Exposures | LE.8   | Facility Amount                                 | G10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      82 | 8.5 Large Exposures | LE.8   | Provision                                       | H10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      83 | 8.5 Large Exposures | LE.8   | Performing?                                     | I10        | Input must be Y or N                                                              |
|      84 | 8.5 Large Exposures | LE.8   | Parental Guarantee or  Loan Take-Over Agreement | J10        | Input must be Y or N                                                              |
|      85 | 8.5 Large Exposures | LE.8   | Collateral (Cash, Govt or  Other)               | K10        | Input must be text, between 2 and 50 characters                                   |
|      86 | 8.5 Large Exposures | LE.8   | Collateral Cover %                              | L10        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      87 | 8.5 Large Exposures | LE.8   | Currency                                        | M10        | Input must be 3 digit currency ISO code                                           |
|      88 | 8.5 Large Exposures | LE.8   | Maturity Date                                   | N10        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      89 | 8.5 Large Exposures | LE.9   | LE Ref                                          | D11        | LE approval reference up to 15 characters, or 'NONE'                              |
|      90 | 8.5 Large Exposures | LE.9   | Connected to bank?                              | E11        | Input must be Y or N                                                              |
|      91 | 8.5 Large Exposures | LE.9   | Outstanding Amount                              | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      92 | 8.5 Large Exposures | LE.9   | Facility Amount                                 | G11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      93 | 8.5 Large Exposures | LE.9   | Provision                                       | H11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      94 | 8.5 Large Exposures | LE.9   | Performing?                                     | I11        | Input must be Y or N                                                              |
|      95 | 8.5 Large Exposures | LE.9   | Parental Guarantee or  Loan Take-Over Agreement | J11        | Input must be Y or N                                                              |
|      96 | 8.5 Large Exposures | LE.9   | Collateral (Cash, Govt or  Other)               | K11        | Input must be text, between 2 and 50 characters                                   |
|      97 | 8.5 Large Exposures | LE.9   | Collateral Cover %                              | L11        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      98 | 8.5 Large Exposures | LE.9   | Currency                                        | M11        | Input must be 3 digit currency ISO code                                           |
|      99 | 8.5 Large Exposures | LE.9   | Maturity Date                                   | N11        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     100 | 8.5 Large Exposures | LE.10  | LE Ref                                          | D12        | LE approval reference up to 15 characters, or 'NONE'                              |
|     101 | 8.5 Large Exposures | LE.10  | Connected to bank?                              | E12        | Input must be Y or N                                                              |
|     102 | 8.5 Large Exposures | LE.10  | Outstanding Amount                              | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     103 | 8.5 Large Exposures | LE.10  | Facility Amount                                 | G12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     104 | 8.5 Large Exposures | LE.10  | Provision                                       | H12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     105 | 8.5 Large Exposures | LE.10  | Performing?                                     | I12        | Input must be Y or N                                                              |
|     106 | 8.5 Large Exposures | LE.10  | Parental Guarantee or  Loan Take-Over Agreement | J12        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     107 | 8.5 Large Exposures | LE.10  | Collateral (Cash, Govt or  Other)               | K12        | Input must be text, between 2 and 50 characters                                   |
|     108 | 8.5 Large Exposures | LE.10  | Collateral Cover %                              | L12        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     109 | 8.5 Large Exposures | LE.10  | Currency                                        | M12        | Input must be 3 digit currency ISO code                                           |
|     110 | 8.5 Large Exposures | LE.10  | Maturity Date                                   | N12        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     111 | 8.5 Large Exposures | LE.11  | LE Ref                                          | D13        | LE approval reference up to 15 characters, or 'NONE'                              |
|     112 | 8.5 Large Exposures | LE.11  | Connected to bank?                              | E13        | Input must be Y or N                                                              |
|     113 | 8.5 Large Exposures | LE.11  | Outstanding Amount                              | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     114 | 8.5 Large Exposures | LE.11  | Facility Amount                                 | G13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     115 | 8.5 Large Exposures | LE.11  | Provision                                       | H13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     116 | 8.5 Large Exposures | LE.11  | Performing?                                     | I13        | Input must be Y or N                                                              |
|     117 | 8.5 Large Exposures | LE.11  | Parental Guarantee or  Loan Take-Over Agreement | J13        | Input must be Y or N                                                              |
|     118 | 8.5 Large Exposures | LE.11  | Collateral (Cash, Govt or  Other)               | K13        | Input must be text, between 2 and 50 characters                                   |
|     119 | 8.5 Large Exposures | LE.11  | Collateral Cover %                              | L13        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     120 | 8.5 Large Exposures | LE.11  | Currency                                        | M13        | Input must be 3 digit currency ISO code                                           |
|     121 | 8.5 Large Exposures | LE.11  | Maturity Date                                   | N13        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     122 | 8.5 Large Exposures | LE.12  | LE Ref                                          | D14        | LE approval reference up to 15 characters, or 'NONE'                              |
|     123 | 8.5 Large Exposures | LE.12  | Connected to bank?                              | E14        | Input must be Y or N                                                              |
|     124 | 8.5 Large Exposures | LE.12  | Outstanding Amount                              | F14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     125 | 8.5 Large Exposures | LE.12  | Facility Amount                                 | G14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     126 | 8.5 Large Exposures | LE.12  | Provision                                       | H14        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     127 | 8.5 Large Exposures | LE.12  | Performing?                                     | I14        | Input must be Y or N                                                              |
|     128 | 8.5 Large Exposures | LE.12  | Parental Guarantee or  Loan Take-Over Agreement | J14        | Input must be Y or N                                                              |
|     129 | 8.5 Large Exposures | LE.12  | Collateral (Cash, Govt or  Other)               | K14        | Input must be text, between 2 and 50 characters                                   |
|     130 | 8.5 Large Exposures | LE.12  | Collateral Cover %                              | L14        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     131 | 8.5 Large Exposures | LE.12  | Currency                                        | M14        | Input must be 3 digit currency ISO code                                           |
|     132 | 8.5 Large Exposures | LE.12  | Maturity Date                                   | N14        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     133 | 8.5 Large Exposures | LE.13  | LE Ref                                          | D15        | LE approval reference up to 15 characters, or 'NONE'                              |
|     134 | 8.5 Large Exposures | LE.13  | Connected to bank?                              | E15        | Input must be Y or N                                                              |
|     135 | 8.5 Large Exposures | LE.13  | Outstanding Amount                              | F15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     136 | 8.5 Large Exposures | LE.13  | Facility Amount                                 | G15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     137 | 8.5 Large Exposures | LE.13  | Provision                                       | H15        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     138 | 8.5 Large Exposures | LE.13  | Performing?                                     | I15        | Input must be Y or N                                                              |
|     139 | 8.5 Large Exposures | LE.13  | Parental Guarantee or  Loan Take-Over Agreement | J15        | Input must be Y or N                                                              |
|     140 | 8.5 Large Exposures | LE.13  | Collateral (Cash, Govt or  Other)               | K15        | Input must be text, between 2 and 50 characters                                   |
|     141 | 8.5 Large Exposures | LE.13  | Collateral Cover %                              | L15        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     142 | 8.5 Large Exposures | LE.13  | Currency                                        | M15        | Input must be 3 digit currency ISO code                                           |
|     143 | 8.5 Large Exposures | LE.13  | Maturity Date                                   | N15        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     144 | 8.5 Large Exposures | LE.14  | LE Ref                                          | D16        | LE approval reference up to 15 characters, or 'NONE'                              |
|     145 | 8.5 Large Exposures | LE.14  | Connected to bank?                              | E16        | Input must be Y or N                                                              |
|     146 | 8.5 Large Exposures | LE.14  | Outstanding Amount                              | F16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     147 | 8.5 Large Exposures | LE.14  | Facility Amount                                 | G16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     148 | 8.5 Large Exposures | LE.14  | Provision                                       | H16        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     149 | 8.5 Large Exposures | LE.14  | Performing?                                     | I16        | Input must be Y or N                                                              |
|     150 | 8.5 Large Exposures | LE.14  | Parental Guarantee or  Loan Take-Over Agreement | J16        | Input must be Y or N                                                              |
|     151 | 8.5 Large Exposures | LE.14  | Collateral (Cash, Govt or  Other)               | K16        | Input must be text, between 2 and 50 characters                                   |
|     152 | 8.5 Large Exposures | LE.14  | Collateral Cover %                              | L16        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     153 | 8.5 Large Exposures | LE.14  | Currency                                        | M16        | Input must be 3 digit currency ISO code                                           |
|     154 | 8.5 Large Exposures | LE.14  | Maturity Date                                   | N16        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     155 | 8.5 Large Exposures | LE.15  | LE Ref                                          | D17        | LE approval reference up to 15 characters, or 'NONE'                              |
|     156 | 8.5 Large Exposures | LE.15  | Connected to bank?                              | E17        | Input must be Y or N                                                              |
|     157 | 8.5 Large Exposures | LE.15  | Outstanding Amount                              | F17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     158 | 8.5 Large Exposures | LE.15  | Facility Amount                                 | G17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     159 | 8.5 Large Exposures | LE.15  | Provision                                       | H17        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     160 | 8.5 Large Exposures | LE.15  | Performing?                                     | I17        | Input must be Y or N                                                              |
|     161 | 8.5 Large Exposures | LE.15  | Parental Guarantee or  Loan Take-Over Agreement | J17        | Input must be Y or N                                                              |
|     162 | 8.5 Large Exposures | LE.15  | Collateral (Cash, Govt or  Other)               | K17        | Input must be text, between 2 and 50 characters                                   |
|     163 | 8.5 Large Exposures | LE.15  | Collateral Cover %                              | L17        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     164 | 8.5 Large Exposures | LE.15  | Currency                                        | M17        | Input must be 3 digit currency ISO code                                           |
|     165 | 8.5 Large Exposures | LE.15  | Maturity Date                                   | N17        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     166 | 8.5 Large Exposures | LE.16  | LE Ref                                          | D18        | LE approval reference up to 15 characters, or 'NONE'                              |
|     167 | 8.5 Large Exposures | LE.16  | Connected to bank?                              | E18        | Input must be Y or N                                                              |
|     168 | 8.5 Large Exposures | LE.16  | Outstanding Amount                              | F18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     169 | 8.5 Large Exposures | LE.16  | Facility Amount                                 | G18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     170 | 8.5 Large Exposures | LE.16  | Provision                                       | H18        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     171 | 8.5 Large Exposures | LE.16  | Performing?                                     | I18        | Input must be Y or N                                                              |
|     172 | 8.5 Large Exposures | LE.16  | Parental Guarantee or  Loan Take-Over Agreement | J18        | Input must be Y or N                                                              |
|     173 | 8.5 Large Exposures | LE.16  | Collateral (Cash, Govt or  Other)               | K18        | Input must be text, between 2 and 50 characters                                   |
|     174 | 8.5 Large Exposures | LE.16  | Collateral Cover %                              | L18        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     175 | 8.5 Large Exposures | LE.16  | Currency                                        | M18        | Input must be 3 digit currency ISO code                                           |
|     176 | 8.5 Large Exposures | LE.16  | Maturity Date                                   | N18        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     177 | 8.5 Large Exposures | LE.17  | LE Ref                                          | D19        | LE approval reference up to 15 characters, or 'NONE'                              |
|     178 | 8.5 Large Exposures | LE.17  | Connected to bank?                              | E19        | Input must be Y or N                                                              |
|     179 | 8.5 Large Exposures | LE.17  | Outstanding Amount                              | F19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     180 | 8.5 Large Exposures | LE.17  | Facility Amount                                 | G19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     181 | 8.5 Large Exposures | LE.17  | Provision                                       | H19        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     182 | 8.5 Large Exposures | LE.17  | Performing?                                     | I19        | Input must be Y or N                                                              |
|     183 | 8.5 Large Exposures | LE.17  | Parental Guarantee or  Loan Take-Over Agreement | J19        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     184 | 8.5 Large Exposures | LE.17  | Collateral (Cash, Govt or  Other)               | K19        | Input must be text, between 2 and 50 characters                                   |
|     185 | 8.5 Large Exposures | LE.17  | Collateral Cover %                              | L19        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     186 | 8.5 Large Exposures | LE.17  | Currency                                        | M19        | Input must be 3 digit currency ISO code                                           |
|     187 | 8.5 Large Exposures | LE.17  | Maturity Date                                   | N19        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     188 | 8.5 Large Exposures | LE.18  | LE Ref                                          | D20        | LE approval reference up to 15 characters, or 'NONE'                              |
|     189 | 8.5 Large Exposures | LE.18  | Connected to bank?                              | E20        | Input must be Y or N                                                              |
|     190 | 8.5 Large Exposures | LE.18  | Outstanding Amount                              | F20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     191 | 8.5 Large Exposures | LE.18  | Facility Amount                                 | G20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     192 | 8.5 Large Exposures | LE.18  | Provision                                       | H20        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     193 | 8.5 Large Exposures | LE.18  | Performing?                                     | I20        | Input must be Y or N                                                              |
|     194 | 8.5 Large Exposures | LE.18  | Parental Guarantee or  Loan Take-Over Agreement | J20        | Input must be Y or N                                                              |
|     195 | 8.5 Large Exposures | LE.18  | Collateral (Cash, Govt or  Other)               | K20        | Input must be text, between 2 and 50 characters                                   |
|     196 | 8.5 Large Exposures | LE.18  | Collateral Cover %                              | L20        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     197 | 8.5 Large Exposures | LE.18  | Currency                                        | M20        | Input must be 3 digit currency ISO code                                           |
|     198 | 8.5 Large Exposures | LE.18  | Maturity Date                                   | N20        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     199 | 8.5 Large Exposures | LE.19  | LE Ref                                          | D21        | LE approval reference up to 15 characters, or 'NONE'                              |
|     200 | 8.5 Large Exposures | LE.19  | Connected to bank?                              | E21        | Input must be Y or N                                                              |
|     201 | 8.5 Large Exposures | LE.19  | Outstanding Amount                              | F21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     202 | 8.5 Large Exposures | LE.19  | Facility Amount                                 | G21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     203 | 8.5 Large Exposures | LE.19  | Provision                                       | H21        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     204 | 8.5 Large Exposures | LE.19  | Performing?                                     | I21        | Input must be Y or N                                                              |
|     205 | 8.5 Large Exposures | LE.19  | Parental Guarantee or  Loan Take-Over Agreement | J21        | Input must be Y or N                                                              |
|     206 | 8.5 Large Exposures | LE.19  | Collateral (Cash, Govt or  Other)               | K21        | Input must be text, between 2 and 50 characters                                   |
|     207 | 8.5 Large Exposures | LE.19  | Collateral Cover %                              | L21        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     208 | 8.5 Large Exposures | LE.19  | Currency                                        | M21        | Input must be 3 digit currency ISO code                                           |
|     209 | 8.5 Large Exposures | LE.19  | Maturity Date                                   | N21        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     210 | 8.5 Large Exposures | LE.20  | LE Ref                                          | D22        | LE approval reference up to 15 characters, or 'NONE'                              |
|     211 | 8.5 Large Exposures | LE.20  | Connected to bank?                              | E22        | Input must be Y or N                                                              |
|     212 | 8.5 Large Exposures | LE.20  | Outstanding Amount                              | F22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     213 | 8.5 Large Exposures | LE.20  | Facility Amount                                 | G22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     214 | 8.5 Large Exposures | LE.20  | Provision                                       | H22        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     215 | 8.5 Large Exposures | LE.20  | Performing?                                     | I22        | Input must be Y or N                                                              |
|     216 | 8.5 Large Exposures | LE.20  | Parental Guarantee or  Loan Take-Over Agreement | J22        | Input must be Y or N                                                              |
|     217 | 8.5 Large Exposures | LE.20  | Collateral (Cash, Govt or  Other)               | K22        | Input must be text, between 2 and 50 characters                                   |
|     218 | 8.5 Large Exposures | LE.20  | Collateral Cover %                              | L22        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     219 | 8.5 Large Exposures | LE.20  | Currency                                        | M22        | Input must be 3 digit currency ISO code                                           |
|     220 | 8.5 Large Exposures | LE.20  | Maturity Date                                   | N22        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     221 | 8.5 Large Exposures | LE.21  | LE Ref                                          | D23        | LE approval reference up to 15 characters, or 'NONE'                              |
|     222 | 8.5 Large Exposures | LE.21  | Connected to bank?                              | E23        | Input must be Y or N                                                              |
|     223 | 8.5 Large Exposures | LE.21  | Outstanding Amount                              | F23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     224 | 8.5 Large Exposures | LE.21  | Facility Amount                                 | G23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     225 | 8.5 Large Exposures | LE.21  | Provision                                       | H23        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     226 | 8.5 Large Exposures | LE.21  | Performing?                                     | I23        | Input must be Y or N                                                              |
|     227 | 8.5 Large Exposures | LE.21  | Parental Guarantee or  Loan Take-Over Agreement | J23        | Input must be Y or N                                                              |
|     228 | 8.5 Large Exposures | LE.21  | Collateral (Cash, Govt or  Other)               | K23        | Input must be text, between 2 and 50 characters                                   |
|     229 | 8.5 Large Exposures | LE.21  | Collateral Cover %                              | L23        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     230 | 8.5 Large Exposures | LE.21  | Currency                                        | M23        | Input must be 3 digit currency ISO code                                           |
|     231 | 8.5 Large Exposures | LE.21  | Maturity Date                                   | N23        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     232 | 8.5 Large Exposures | LE.22  | LE Ref                                          | D24        | LE approval reference up to 15 characters, or 'NONE'                              |
|     233 | 8.5 Large Exposures | LE.22  | Connected to bank?                              | E24        | Input must be Y or N                                                              |
|     234 | 8.5 Large Exposures | LE.22  | Outstanding Amount                              | F24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     235 | 8.5 Large Exposures | LE.22  | Facility Amount                                 | G24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     236 | 8.5 Large Exposures | LE.22  | Provision                                       | H24        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     237 | 8.5 Large Exposures | LE.22  | Performing?                                     | I24        | Input must be Y or N                                                              |
|     238 | 8.5 Large Exposures | LE.22  | Parental Guarantee or  Loan Take-Over Agreement | J24        | Input must be Y or N                                                              |
|     239 | 8.5 Large Exposures | LE.22  | Collateral (Cash, Govt or  Other)               | K24        | Input must be text, between 2 and 50 characters                                   |
|     240 | 8.5 Large Exposures | LE.22  | Collateral Cover %                              | L24        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     241 | 8.5 Large Exposures | LE.22  | Currency                                        | M24        | Input must be 3 digit currency ISO code                                           |
|     242 | 8.5 Large Exposures | LE.22  | Maturity Date                                   | N24        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     243 | 8.5 Large Exposures | LE.23  | LE Ref                                          | D25        | LE approval reference up to 15 characters, or 'NONE'                              |
|     244 | 8.5 Large Exposures | LE.23  | Connected to bank?                              | E25        | Input must be Y or N                                                              |
|     245 | 8.5 Large Exposures | LE.23  | Outstanding Amount                              | F25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     246 | 8.5 Large Exposures | LE.23  | Facility Amount                                 | G25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     247 | 8.5 Large Exposures | LE.23  | Provision                                       | H25        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     248 | 8.5 Large Exposures | LE.23  | Performing?                                     | I25        | Input must be Y or N                                                              |
|     249 | 8.5 Large Exposures | LE.23  | Parental Guarantee or  Loan Take-Over Agreement | J25        | Input must be Y or N                                                              |
|     250 | 8.5 Large Exposures | LE.23  | Collateral (Cash, Govt or  Other)               | K25        | Input must be text, between 2 and 50 characters                                   |
|     251 | 8.5 Large Exposures | LE.23  | Collateral Cover %                              | L25        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     252 | 8.5 Large Exposures | LE.23  | Currency                                        | M25        | Input must be 3 digit currency ISO code                                           |
|     253 | 8.5 Large Exposures | LE.23  | Maturity Date                                   | N25        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     254 | 8.5 Large Exposures | LE.24  | LE Ref                                          | D26        | LE approval reference up to 15 characters, or 'NONE'                              |
|     255 | 8.5 Large Exposures | LE.24  | Connected to bank?                              | E26        | Input must be Y or N                                                              |
|     256 | 8.5 Large Exposures | LE.24  | Outstanding Amount                              | F26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     257 | 8.5 Large Exposures | LE.24  | Facility Amount                                 | G26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     258 | 8.5 Large Exposures | LE.24  | Provision                                       | H26        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     259 | 8.5 Large Exposures | LE.24  | Performing?                                     | I26        | Input must be Y or N                                                              |
|     260 | 8.5 Large Exposures | LE.24  | Parental Guarantee or  Loan Take-Over Agreement | J26        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     261 | 8.5 Large Exposures | LE.24  | Collateral (Cash, Govt or  Other)               | K26        | Input must be text, between 2 and 50 characters                                   |
|     262 | 8.5 Large Exposures | LE.24  | Collateral Cover %                              | L26        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     263 | 8.5 Large Exposures | LE.24  | Currency                                        | M26        | Input must be 3 digit currency ISO code                                           |
|     264 | 8.5 Large Exposures | LE.24  | Maturity Date                                   | N26        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     265 | 8.5 Large Exposures | LE.25  | LE Ref                                          | D27        | LE approval reference up to 15 characters, or 'NONE'                              |
|     266 | 8.5 Large Exposures | LE.25  | Connected to bank?                              | E27        | Input must be Y or N                                                              |
|     267 | 8.5 Large Exposures | LE.25  | Outstanding Amount                              | F27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     268 | 8.5 Large Exposures | LE.25  | Facility Amount                                 | G27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     269 | 8.5 Large Exposures | LE.25  | Provision                                       | H27        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     270 | 8.5 Large Exposures | LE.25  | Performing?                                     | I27        | Input must be Y or N                                                              |
|     271 | 8.5 Large Exposures | LE.25  | Parental Guarantee or  Loan Take-Over Agreement | J27        | Input must be Y or N                                                              |
|     272 | 8.5 Large Exposures | LE.25  | Collateral (Cash, Govt or  Other)               | K27        | Input must be text, between 2 and 50 characters                                   |
|     273 | 8.5 Large Exposures | LE.25  | Collateral Cover %                              | L27        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     274 | 8.5 Large Exposures | LE.25  | Currency                                        | M27        | Input must be 3 digit currency ISO code                                           |
|     275 | 8.5 Large Exposures | LE.25  | Maturity Date                                   | N27        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     276 | 8.5 Large Exposures | LE.26  | LE Ref                                          | D28        | LE approval reference up to 15 characters, or 'NONE'                              |
|     277 | 8.5 Large Exposures | LE.26  | Connected to bank?                              | E28        | Input must be Y or N                                                              |
|     278 | 8.5 Large Exposures | LE.26  | Outstanding Amount                              | F28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     279 | 8.5 Large Exposures | LE.26  | Facility Amount                                 | G28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     280 | 8.5 Large Exposures | LE.26  | Provision                                       | H28        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     281 | 8.5 Large Exposures | LE.26  | Performing?                                     | I28        | Input must be Y or N                                                              |
|     282 | 8.5 Large Exposures | LE.26  | Parental Guarantee or  Loan Take-Over Agreement | J28        | Input must be Y or N                                                              |
|     283 | 8.5 Large Exposures | LE.26  | Collateral (Cash, Govt or  Other)               | K28        | Input must be text, between 2 and 50 characters                                   |
|     284 | 8.5 Large Exposures | LE.26  | Collateral Cover %                              | L28        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     285 | 8.5 Large Exposures | LE.26  | Currency                                        | M28        | Input must be 3 digit currency ISO code                                           |
|     286 | 8.5 Large Exposures | LE.26  | Maturity Date                                   | N28        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     287 | 8.5 Large Exposures | LE.27  | LE Ref                                          | D29        | LE approval reference up to 15 characters, or 'NONE'                              |
|     288 | 8.5 Large Exposures | LE.27  | Connected to bank?                              | E29        | Input must be Y or N                                                              |
|     289 | 8.5 Large Exposures | LE.27  | Outstanding Amount                              | F29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     290 | 8.5 Large Exposures | LE.27  | Facility Amount                                 | G29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     291 | 8.5 Large Exposures | LE.27  | Provision                                       | H29        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     292 | 8.5 Large Exposures | LE.27  | Performing?                                     | I29        | Input must be Y or N                                                              |
|     293 | 8.5 Large Exposures | LE.27  | Parental Guarantee or  Loan Take-Over Agreement | J29        | Input must be Y or N                                                              |
|     294 | 8.5 Large Exposures | LE.27  | Collateral (Cash, Govt or  Other)               | K29        | Input must be text, between 2 and 50 characters                                   |
|     295 | 8.5 Large Exposures | LE.27  | Collateral Cover %                              | L29        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     296 | 8.5 Large Exposures | LE.27  | Currency                                        | M29        | Input must be 3 digit currency ISO code                                           |
|     297 | 8.5 Large Exposures | LE.27  | Maturity Date                                   | N29        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     298 | 8.5 Large Exposures | LE.28  | LE Ref                                          | D30        | LE approval reference up to 15 characters, or 'NONE'                              |
|     299 | 8.5 Large Exposures | LE.28  | Connected to bank?                              | E30        | Input must be Y or N                                                              |
|     300 | 8.5 Large Exposures | LE.28  | Outstanding Amount                              | F30        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     301 | 8.5 Large Exposures | LE.28  | Facility Amount                                 | G30        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     302 | 8.5 Large Exposures | LE.28  | Provision                                       | H30        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     303 | 8.5 Large Exposures | LE.28  | Performing?                                     | I30        | Input must be Y or N                                                              |
|     304 | 8.5 Large Exposures | LE.28  | Parental Guarantee or  Loan Take-Over Agreement | J30        | Input must be Y or N                                                              |
|     305 | 8.5 Large Exposures | LE.28  | Collateral (Cash, Govt or  Other)               | K30        | Input must be text, between 2 and 50 characters                                   |
|     306 | 8.5 Large Exposures | LE.28  | Collateral Cover %                              | L30        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     307 | 8.5 Large Exposures | LE.28  | Currency                                        | M30        | Input must be 3 digit currency ISO code                                           |
|     308 | 8.5 Large Exposures | LE.28  | Maturity Date                                   | N30        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     309 | 8.5 Large Exposures | LE.29  | LE Ref                                          | D31        | LE approval reference up to 15 characters, or 'NONE'                              |
|     310 | 8.5 Large Exposures | LE.29  | Connected to bank?                              | E31        | Input must be Y or N                                                              |
|     311 | 8.5 Large Exposures | LE.29  | Outstanding Amount                              | F31        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     312 | 8.5 Large Exposures | LE.29  | Facility Amount                                 | G31        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     313 | 8.5 Large Exposures | LE.29  | Provision                                       | H31        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     314 | 8.5 Large Exposures | LE.29  | Performing?                                     | I31        | Input must be Y or N                                                              |
|     315 | 8.5 Large Exposures | LE.29  | Parental Guarantee or  Loan Take-Over Agreement | J31        | Input must be Y or N                                                              |
|     316 | 8.5 Large Exposures | LE.29  | Collateral (Cash, Govt or  Other)               | K31        | Input must be text, between 2 and 50 characters                                   |
|     317 | 8.5 Large Exposures | LE.29  | Collateral Cover %                              | L31        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     318 | 8.5 Large Exposures | LE.29  | Currency                                        | M31        | Input must be 3 digit currency ISO code                                           |
|     319 | 8.5 Large Exposures | LE.29  | Maturity Date                                   | N31        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     320 | 8.5 Large Exposures | LE.30  | LE Ref                                          | D32        | LE approval reference up to 15 characters, or 'NONE'                              |
|     321 | 8.5 Large Exposures | LE.30  | Connected to bank?                              | E32        | Input must be Y or N                                                              |
|     322 | 8.5 Large Exposures | LE.30  | Outstanding Amount                              | F32        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     323 | 8.5 Large Exposures | LE.30  | Facility Amount                                 | G32        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     324 | 8.5 Large Exposures | LE.30  | Provision                                       | H32        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     325 | 8.5 Large Exposures | LE.30  | Performing?                                     | I32        | Input must be Y or N                                                              |
|     326 | 8.5 Large Exposures | LE.30  | Parental Guarantee or  Loan Take-Over Agreement | J32        | Input must be Y or N                                                              |
|     327 | 8.5 Large Exposures | LE.30  | Collateral (Cash, Govt or  Other)               | K32        | Input must be text, between 2 and 50 characters                                   |
|     328 | 8.5 Large Exposures | LE.30  | Collateral Cover %                              | L32        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     329 | 8.5 Large Exposures | LE.30  | Currency                                        | M32        | Input must be 3 digit currency ISO code                                           |
|     330 | 8.5 Large Exposures | LE.30  | Maturity Date                                   | N32        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     331 | 8.5 Large Exposures | LE.31  | LE Ref                                          | D33        | LE approval reference up to 15 characters, or 'NONE'                              |
|     332 | 8.5 Large Exposures | LE.31  | Connected to bank?                              | E33        | Input must be Y or N                                                              |
|     333 | 8.5 Large Exposures | LE.31  | Outstanding Amount                              | F33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     334 | 8.5 Large Exposures | LE.31  | Facility Amount                                 | G33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     335 | 8.5 Large Exposures | LE.31  | Provision                                       | H33        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     336 | 8.5 Large Exposures | LE.31  | Performing?                                     | I33        | Input must be Y or N                                                              |
|     337 | 8.5 Large Exposures | LE.31  | Parental Guarantee or  Loan Take-Over Agreement | J33        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     338 | 8.5 Large Exposures | LE.31  | Collateral (Cash, Govt or  Other)               | K33        | Input must be text, between 2 and 50 characters                                   |
|     339 | 8.5 Large Exposures | LE.31  | Collateral Cover %                              | L33        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     340 | 8.5 Large Exposures | LE.31  | Currency                                        | M33        | Input must be 3 digit currency ISO code                                           |
|     341 | 8.5 Large Exposures | LE.31  | Maturity Date                                   | N33        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     342 | 8.5 Large Exposures | LE.32  | LE Ref                                          | D34        | LE approval reference up to 15 characters, or 'NONE'                              |
|     343 | 8.5 Large Exposures | LE.32  | Connected to bank?                              | E34        | Input must be Y or N                                                              |
|     344 | 8.5 Large Exposures | LE.32  | Outstanding Amount                              | F34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     345 | 8.5 Large Exposures | LE.32  | Facility Amount                                 | G34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     346 | 8.5 Large Exposures | LE.32  | Provision                                       | H34        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     347 | 8.5 Large Exposures | LE.32  | Performing?                                     | I34        | Input must be Y or N                                                              |
|     348 | 8.5 Large Exposures | LE.32  | Parental Guarantee or  Loan Take-Over Agreement | J34        | Input must be Y or N                                                              |
|     349 | 8.5 Large Exposures | LE.32  | Collateral (Cash, Govt or  Other)               | K34        | Input must be text, between 2 and 50 characters                                   |
|     350 | 8.5 Large Exposures | LE.32  | Collateral Cover %                              | L34        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     351 | 8.5 Large Exposures | LE.32  | Currency                                        | M34        | Input must be 3 digit currency ISO code                                           |
|     352 | 8.5 Large Exposures | LE.32  | Maturity Date                                   | N34        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     353 | 8.5 Large Exposures | LE.33  | LE Ref                                          | D35        | LE approval reference up to 15 characters, or 'NONE'                              |
|     354 | 8.5 Large Exposures | LE.33  | Connected to bank?                              | E35        | Input must be Y or N                                                              |
|     355 | 8.5 Large Exposures | LE.33  | Outstanding Amount                              | F35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     356 | 8.5 Large Exposures | LE.33  | Facility Amount                                 | G35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     357 | 8.5 Large Exposures | LE.33  | Provision                                       | H35        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     358 | 8.5 Large Exposures | LE.33  | Performing?                                     | I35        | Input must be Y or N                                                              |
|     359 | 8.5 Large Exposures | LE.33  | Parental Guarantee or  Loan Take-Over Agreement | J35        | Input must be Y or N                                                              |
|     360 | 8.5 Large Exposures | LE.33  | Collateral (Cash, Govt or  Other)               | K35        | Input must be text, between 2 and 50 characters                                   |
|     361 | 8.5 Large Exposures | LE.33  | Collateral Cover %                              | L35        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     362 | 8.5 Large Exposures | LE.33  | Currency                                        | M35        | Input must be 3 digit currency ISO code                                           |
|     363 | 8.5 Large Exposures | LE.33  | Maturity Date                                   | N35        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     364 | 8.5 Large Exposures | LE.34  | LE Ref                                          | D36        | LE approval reference up to 15 characters, or 'NONE'                              |
|     365 | 8.5 Large Exposures | LE.34  | Connected to bank?                              | E36        | Input must be Y or N                                                              |
|     366 | 8.5 Large Exposures | LE.34  | Outstanding Amount                              | F36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     367 | 8.5 Large Exposures | LE.34  | Facility Amount                                 | G36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     368 | 8.5 Large Exposures | LE.34  | Provision                                       | H36        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     369 | 8.5 Large Exposures | LE.34  | Performing?                                     | I36        | Input must be Y or N                                                              |
|     370 | 8.5 Large Exposures | LE.34  | Parental Guarantee or  Loan Take-Over Agreement | J36        | Input must be Y or N                                                              |
|     371 | 8.5 Large Exposures | LE.34  | Collateral (Cash, Govt or  Other)               | K36        | Input must be text, between 2 and 50 characters                                   |
|     372 | 8.5 Large Exposures | LE.34  | Collateral Cover %                              | L36        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     373 | 8.5 Large Exposures | LE.34  | Currency                                        | M36        | Input must be 3 digit currency ISO code                                           |
|     374 | 8.5 Large Exposures | LE.34  | Maturity Date                                   | N36        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     375 | 8.5 Large Exposures | LE.35  | LE Ref                                          | D37        | LE approval reference up to 15 characters, or 'NONE'                              |
|     376 | 8.5 Large Exposures | LE.35  | Connected to bank?                              | E37        | Input must be Y or N                                                              |
|     377 | 8.5 Large Exposures | LE.35  | Outstanding Amount                              | F37        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     378 | 8.5 Large Exposures | LE.35  | Facility Amount                                 | G37        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     379 | 8.5 Large Exposures | LE.35  | Provision                                       | H37        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     380 | 8.5 Large Exposures | LE.35  | Performing?                                     | I37        | Input must be Y or N                                                              |
|     381 | 8.5 Large Exposures | LE.35  | Parental Guarantee or  Loan Take-Over Agreement | J37        | Input must be Y or N                                                              |
|     382 | 8.5 Large Exposures | LE.35  | Collateral (Cash, Govt or  Other)               | K37        | Input must be text, between 2 and 50 characters                                   |
|     383 | 8.5 Large Exposures | LE.35  | Collateral Cover %                              | L37        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     384 | 8.5 Large Exposures | LE.35  | Currency                                        | M37        | Input must be 3 digit currency ISO code                                           |
|     385 | 8.5 Large Exposures | LE.35  | Maturity Date                                   | N37        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     386 | 8.5 Large Exposures | LE.36  | LE Ref                                          | D38        | LE approval reference up to 15 characters, or 'NONE'                              |
|     387 | 8.5 Large Exposures | LE.36  | Connected to bank?                              | E38        | Input must be Y or N                                                              |
|     388 | 8.5 Large Exposures | LE.36  | Outstanding Amount                              | F38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     389 | 8.5 Large Exposures | LE.36  | Facility Amount                                 | G38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     390 | 8.5 Large Exposures | LE.36  | Provision                                       | H38        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     391 | 8.5 Large Exposures | LE.36  | Performing?                                     | I38        | Input must be Y or N                                                              |
|     392 | 8.5 Large Exposures | LE.36  | Parental Guarantee or  Loan Take-Over Agreement | J38        | Input must be Y or N                                                              |
|     393 | 8.5 Large Exposures | LE.36  | Collateral (Cash, Govt or  Other)               | K38        | Input must be text, between 2 and 50 characters                                   |
|     394 | 8.5 Large Exposures | LE.36  | Collateral Cover %                              | L38        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     395 | 8.5 Large Exposures | LE.36  | Currency                                        | M38        | Input must be 3 digit currency ISO code                                           |
|     396 | 8.5 Large Exposures | LE.36  | Maturity Date                                   | N38        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     397 | 8.5 Large Exposures | LE.37  | LE Ref                                          | D39        | LE approval reference up to 15 characters, or 'NONE'                              |
|     398 | 8.5 Large Exposures | LE.37  | Connected to bank?                              | E39        | Input must be Y or N                                                              |
|     399 | 8.5 Large Exposures | LE.37  | Outstanding Amount                              | F39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     400 | 8.5 Large Exposures | LE.37  | Facility Amount                                 | G39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     401 | 8.5 Large Exposures | LE.37  | Provision                                       | H39        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     402 | 8.5 Large Exposures | LE.37  | Performing?                                     | I39        | Input must be Y or N                                                              |
|     403 | 8.5 Large Exposures | LE.37  | Parental Guarantee or  Loan Take-Over Agreement | J39        | Input must be Y or N                                                              |
|     404 | 8.5 Large Exposures | LE.37  | Collateral (Cash, Govt or  Other)               | K39        | Input must be text, between 2 and 50 characters                                   |
|     405 | 8.5 Large Exposures | LE.37  | Collateral Cover %                              | L39        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     406 | 8.5 Large Exposures | LE.37  | Currency                                        | M39        | Input must be 3 digit currency ISO code                                           |
|     407 | 8.5 Large Exposures | LE.37  | Maturity Date                                   | N39        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     408 | 8.5 Large Exposures | LE.38  | LE Ref                                          | D40        | LE approval reference up to 15 characters, or 'NONE'                              |
|     409 | 8.5 Large Exposures | LE.38  | Connected to bank?                              | E40        | Input must be Y or N                                                              |
|     410 | 8.5 Large Exposures | LE.38  | Outstanding Amount                              | F40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     411 | 8.5 Large Exposures | LE.38  | Facility Amount                                 | G40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     412 | 8.5 Large Exposures | LE.38  | Provision                                       | H40        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     413 | 8.5 Large Exposures | LE.38  | Performing?                                     | I40        | Input must be Y or N                                                              |
|     414 | 8.5 Large Exposures | LE.38  | Parental Guarantee or  Loan Take-Over Agreement | J40        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     415 | 8.5 Large Exposures | LE.38  | Collateral (Cash, Govt or  Other)               | K40        | Input must be text, between 2 and 50 characters                                   |
|     416 | 8.5 Large Exposures | LE.38  | Collateral Cover %                              | L40        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     417 | 8.5 Large Exposures | LE.38  | Currency                                        | M40        | Input must be 3 digit currency ISO code                                           |
|     418 | 8.5 Large Exposures | LE.38  | Maturity Date                                   | N40        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     419 | 8.5 Large Exposures | LE.39  | LE Ref                                          | D41        | LE approval reference up to 15 characters, or 'NONE'                              |
|     420 | 8.5 Large Exposures | LE.39  | Connected to bank?                              | E41        | Input must be Y or N                                                              |
|     421 | 8.5 Large Exposures | LE.39  | Outstanding Amount                              | F41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     422 | 8.5 Large Exposures | LE.39  | Facility Amount                                 | G41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     423 | 8.5 Large Exposures | LE.39  | Provision                                       | H41        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     424 | 8.5 Large Exposures | LE.39  | Performing?                                     | I41        | Input must be Y or N                                                              |
|     425 | 8.5 Large Exposures | LE.39  | Parental Guarantee or  Loan Take-Over Agreement | J41        | Input must be Y or N                                                              |
|     426 | 8.5 Large Exposures | LE.39  | Collateral (Cash, Govt or  Other)               | K41        | Input must be text, between 2 and 50 characters                                   |
|     427 | 8.5 Large Exposures | LE.39  | Collateral Cover %                              | L41        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     428 | 8.5 Large Exposures | LE.39  | Currency                                        | M41        | Input must be 3 digit currency ISO code                                           |
|     429 | 8.5 Large Exposures | LE.39  | Maturity Date                                   | N41        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     430 | 8.5 Large Exposures | LE.40  | LE Ref                                          | D42        | LE approval reference up to 15 characters, or 'NONE'                              |
|     431 | 8.5 Large Exposures | LE.40  | Connected to bank?                              | E42        | Input must be Y or N                                                              |
|     432 | 8.5 Large Exposures | LE.40  | Outstanding Amount                              | F42        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     433 | 8.5 Large Exposures | LE.40  | Facility Amount                                 | G42        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     434 | 8.5 Large Exposures | LE.40  | Provision                                       | H42        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     435 | 8.5 Large Exposures | LE.40  | Performing?                                     | I42        | Input must be Y or N                                                              |
|     436 | 8.5 Large Exposures | LE.40  | Parental Guarantee or  Loan Take-Over Agreement | J42        | Input must be Y or N                                                              |
|     437 | 8.5 Large Exposures | LE.40  | Collateral (Cash, Govt or  Other)               | K42        | Input must be text, between 2 and 50 characters                                   |
|     438 | 8.5 Large Exposures | LE.40  | Collateral Cover %                              | L42        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     439 | 8.5 Large Exposures | LE.40  | Currency                                        | M42        | Input must be 3 digit currency ISO code                                           |
|     440 | 8.5 Large Exposures | LE.40  | Maturity Date                                   | N42        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     441 | 8.5 Large Exposures | LE.41  | LE Ref                                          | D43        | LE approval reference up to 15 characters, or 'NONE'                              |
|     442 | 8.5 Large Exposures | LE.41  | Connected to bank?                              | E43        | Input must be Y or N                                                              |
|     443 | 8.5 Large Exposures | LE.41  | Outstanding Amount                              | F43        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     444 | 8.5 Large Exposures | LE.41  | Facility Amount                                 | G43        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     445 | 8.5 Large Exposures | LE.41  | Provision                                       | H43        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     446 | 8.5 Large Exposures | LE.41  | Performing?                                     | I43        | Input must be Y or N                                                              |
|     447 | 8.5 Large Exposures | LE.41  | Parental Guarantee or  Loan Take-Over Agreement | J43        | Input must be Y or N                                                              |
|     448 | 8.5 Large Exposures | LE.41  | Collateral (Cash, Govt or  Other)               | K43        | Input must be text, between 2 and 50 characters                                   |
|     449 | 8.5 Large Exposures | LE.41  | Collateral Cover %                              | L43        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     450 | 8.5 Large Exposures | LE.41  | Currency                                        | M43        | Input must be 3 digit currency ISO code                                           |
|     451 | 8.5 Large Exposures | LE.41  | Maturity Date                                   | N43        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     452 | 8.5 Large Exposures | LE.42  | LE Ref                                          | D44        | LE approval reference up to 15 characters, or 'NONE'                              |
|     453 | 8.5 Large Exposures | LE.42  | Connected to bank?                              | E44        | Input must be Y or N                                                              |
|     454 | 8.5 Large Exposures | LE.42  | Outstanding Amount                              | F44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     455 | 8.5 Large Exposures | LE.42  | Facility Amount                                 | G44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     456 | 8.5 Large Exposures | LE.42  | Provision                                       | H44        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     457 | 8.5 Large Exposures | LE.42  | Performing?                                     | I44        | Input must be Y or N                                                              |
|     458 | 8.5 Large Exposures | LE.42  | Parental Guarantee or  Loan Take-Over Agreement | J44        | Input must be Y or N                                                              |
|     459 | 8.5 Large Exposures | LE.42  | Collateral (Cash, Govt or  Other)               | K44        | Input must be text, between 2 and 50 characters                                   |
|     460 | 8.5 Large Exposures | LE.42  | Collateral Cover %                              | L44        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     461 | 8.5 Large Exposures | LE.42  | Currency                                        | M44        | Input must be 3 digit currency ISO code                                           |
|     462 | 8.5 Large Exposures | LE.42  | Maturity Date                                   | N44        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     463 | 8.5 Large Exposures | LE.43  | LE Ref                                          | D45        | LE approval reference up to 15 characters, or 'NONE'                              |
|     464 | 8.5 Large Exposures | LE.43  | Connected to bank?                              | E45        | Input must be Y or N                                                              |
|     465 | 8.5 Large Exposures | LE.43  | Outstanding Amount                              | F45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     466 | 8.5 Large Exposures | LE.43  | Facility Amount                                 | G45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     467 | 8.5 Large Exposures | LE.43  | Provision                                       | H45        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     468 | 8.5 Large Exposures | LE.43  | Performing?                                     | I45        | Input must be Y or N                                                              |
|     469 | 8.5 Large Exposures | LE.43  | Parental Guarantee or  Loan Take-Over Agreement | J45        | Input must be Y or N                                                              |
|     470 | 8.5 Large Exposures | LE.43  | Collateral (Cash, Govt or  Other)               | K45        | Input must be text, between 2 and 50 characters                                   |
|     471 | 8.5 Large Exposures | LE.43  | Collateral Cover %                              | L45        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     472 | 8.5 Large Exposures | LE.43  | Currency                                        | M45        | Input must be 3 digit currency ISO code                                           |
|     473 | 8.5 Large Exposures | LE.43  | Maturity Date                                   | N45        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     474 | 8.5 Large Exposures | LE.44  | LE Ref                                          | D46        | LE approval reference up to 15 characters, or 'NONE'                              |
|     475 | 8.5 Large Exposures | LE.44  | Connected to bank?                              | E46        | Input must be Y or N                                                              |
|     476 | 8.5 Large Exposures | LE.44  | Outstanding Amount                              | F46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     477 | 8.5 Large Exposures | LE.44  | Facility Amount                                 | G46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     478 | 8.5 Large Exposures | LE.44  | Provision                                       | H46        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     479 | 8.5 Large Exposures | LE.44  | Performing?                                     | I46        | Input must be Y or N                                                              |
|     480 | 8.5 Large Exposures | LE.44  | Parental Guarantee or  Loan Take-Over Agreement | J46        | Input must be Y or N                                                              |
|     481 | 8.5 Large Exposures | LE.44  | Collateral (Cash, Govt or  Other)               | K46        | Input must be text, between 2 and 50 characters                                   |
|     482 | 8.5 Large Exposures | LE.44  | Collateral Cover %                              | L46        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     483 | 8.5 Large Exposures | LE.44  | Currency                                        | M46        | Input must be 3 digit currency ISO code                                           |
|     484 | 8.5 Large Exposures | LE.44  | Maturity Date                                   | N46        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     485 | 8.5 Large Exposures | LE.45  | LE Ref                                          | D47        | LE approval reference up to 15 characters, or 'NONE'                              |
|     486 | 8.5 Large Exposures | LE.45  | Connected to bank?                              | E47        | Input must be Y or N                                                              |
|     487 | 8.5 Large Exposures | LE.45  | Outstanding Amount                              | F47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     488 | 8.5 Large Exposures | LE.45  | Facility Amount                                 | G47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     489 | 8.5 Large Exposures | LE.45  | Provision                                       | H47        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     490 | 8.5 Large Exposures | LE.45  | Performing?                                     | I47        | Input must be Y or N                                                              |
|     491 | 8.5 Large Exposures | LE.45  | Parental Guarantee or  Loan Take-Over Agreement | J47        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     492 | 8.5 Large Exposures | LE.45  | Collateral (Cash, Govt or  Other)               | K47        | Input must be text, between 2 and 50 characters                                   |
|     493 | 8.5 Large Exposures | LE.45  | Collateral Cover %                              | L47        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     494 | 8.5 Large Exposures | LE.45  | Currency                                        | M47        | Input must be 3 digit currency ISO code                                           |
|     495 | 8.5 Large Exposures | LE.45  | Maturity Date                                   | N47        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     496 | 8.5 Large Exposures | LE.46  | LE Ref                                          | D48        | LE approval reference up to 15 characters, or 'NONE'                              |
|     497 | 8.5 Large Exposures | LE.46  | Connected to bank?                              | E48        | Input must be Y or N                                                              |
|     498 | 8.5 Large Exposures | LE.46  | Outstanding Amount                              | F48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     499 | 8.5 Large Exposures | LE.46  | Facility Amount                                 | G48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     500 | 8.5 Large Exposures | LE.46  | Provision                                       | H48        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     501 | 8.5 Large Exposures | LE.46  | Performing?                                     | I48        | Input must be Y or N                                                              |
|     502 | 8.5 Large Exposures | LE.46  | Parental Guarantee or  Loan Take-Over Agreement | J48        | Input must be Y or N                                                              |
|     503 | 8.5 Large Exposures | LE.46  | Collateral (Cash, Govt or  Other)               | K48        | Input must be text, between 2 and 50 characters                                   |
|     504 | 8.5 Large Exposures | LE.46  | Collateral Cover %                              | L48        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     505 | 8.5 Large Exposures | LE.46  | Currency                                        | M48        | Input must be 3 digit currency ISO code                                           |
|     506 | 8.5 Large Exposures | LE.46  | Maturity Date                                   | N48        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     507 | 8.5 Large Exposures | LE.47  | LE Ref                                          | D49        | LE approval reference up to 15 characters, or 'NONE'                              |
|     508 | 8.5 Large Exposures | LE.47  | Connected to bank?                              | E49        | Input must be Y or N                                                              |
|     509 | 8.5 Large Exposures | LE.47  | Outstanding Amount                              | F49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     510 | 8.5 Large Exposures | LE.47  | Facility Amount                                 | G49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     511 | 8.5 Large Exposures | LE.47  | Provision                                       | H49        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     512 | 8.5 Large Exposures | LE.47  | Performing?                                     | I49        | Input must be Y or N                                                              |
|     513 | 8.5 Large Exposures | LE.47  | Parental Guarantee or  Loan Take-Over Agreement | J49        | Input must be Y or N                                                              |
|     514 | 8.5 Large Exposures | LE.47  | Collateral (Cash, Govt or  Other)               | K49        | Input must be text, between 2 and 50 characters                                   |
|     515 | 8.5 Large Exposures | LE.47  | Collateral Cover %                              | L49        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     516 | 8.5 Large Exposures | LE.47  | Currency                                        | M49        | Input must be 3 digit currency ISO code                                           |
|     517 | 8.5 Large Exposures | LE.47  | Maturity Date                                   | N49        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     518 | 8.5 Large Exposures | LE.48  | LE Ref                                          | D50        | LE approval reference up to 15 characters, or 'NONE'                              |
|     519 | 8.5 Large Exposures | LE.48  | Connected to bank?                              | E50        | Input must be Y or N                                                              |
|     520 | 8.5 Large Exposures | LE.48  | Outstanding Amount                              | F50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     521 | 8.5 Large Exposures | LE.48  | Facility Amount                                 | G50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     522 | 8.5 Large Exposures | LE.48  | Provision                                       | H50        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     523 | 8.5 Large Exposures | LE.48  | Performing?                                     | I50        | Input must be Y or N                                                              |
|     524 | 8.5 Large Exposures | LE.48  | Parental Guarantee or  Loan Take-Over Agreement | J50        | Input must be Y or N                                                              |
|     525 | 8.5 Large Exposures | LE.48  | Collateral (Cash, Govt or  Other)               | K50        | Input must be text, between 2 and 50 characters                                   |
|     526 | 8.5 Large Exposures | LE.48  | Collateral Cover %                              | L50        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     527 | 8.5 Large Exposures | LE.48  | Currency                                        | M50        | Input must be 3 digit currency ISO code                                           |
|     528 | 8.5 Large Exposures | LE.48  | Maturity Date                                   | N50        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     529 | 8.5 Large Exposures | LE.49  | LE Ref                                          | D51        | LE approval reference up to 15 characters, or 'NONE'                              |
|     530 | 8.5 Large Exposures | LE.49  | Connected to bank?                              | E51        | Input must be Y or N                                                              |
|     531 | 8.5 Large Exposures | LE.49  | Outstanding Amount                              | F51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     532 | 8.5 Large Exposures | LE.49  | Facility Amount                                 | G51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     533 | 8.5 Large Exposures | LE.49  | Provision                                       | H51        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     534 | 8.5 Large Exposures | LE.49  | Performing?                                     | I51        | Input must be Y or N                                                              |
|     535 | 8.5 Large Exposures | LE.49  | Parental Guarantee or  Loan Take-Over Agreement | J51        | Input must be Y or N                                                              |
|     536 | 8.5 Large Exposures | LE.49  | Collateral (Cash, Govt or  Other)               | K51        | Input must be text, between 2 and 50 characters                                   |
|     537 | 8.5 Large Exposures | LE.49  | Collateral Cover %                              | L51        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     538 | 8.5 Large Exposures | LE.49  | Currency                                        | M51        | Input must be 3 digit currency ISO code                                           |
|     539 | 8.5 Large Exposures | LE.49  | Maturity Date                                   | N51        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     540 | 8.5 Large Exposures | LE.50  | LE Ref                                          | D52        | LE approval reference up to 15 characters, or 'NONE'                              |
|     541 | 8.5 Large Exposures | LE.50  | Connected to bank?                              | E52        | Input must be Y or N                                                              |
|     542 | 8.5 Large Exposures | LE.50  | Outstanding Amount                              | F52        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     543 | 8.5 Large Exposures | LE.50  | Facility Amount                                 | G52        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     544 | 8.5 Large Exposures | LE.50  | Provision                                       | H52        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     545 | 8.5 Large Exposures | LE.50  | Performing?                                     | I52        | Input must be Y or N                                                              |
|     546 | 8.5 Large Exposures | LE.50  | Parental Guarantee or  Loan Take-Over Agreement | J52        | Input must be Y or N                                                              |
|     547 | 8.5 Large Exposures | LE.50  | Collateral (Cash, Govt or  Other)               | K52        | Input must be text, between 2 and 50 characters                                   |
|     548 | 8.5 Large Exposures | LE.50  | Collateral Cover %                              | L52        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     549 | 8.5 Large Exposures | LE.50  | Currency                                        | M52        | Input must be 3 digit currency ISO code                                           |
|     550 | 8.5 Large Exposures | LE.50  | Maturity Date                                   | N52        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     551 | 8.5 Large Exposures | LE.51  | LE Ref                                          | D53        | LE approval reference up to 15 characters, or 'NONE'                              |
|     552 | 8.5 Large Exposures | LE.51  | Connected to bank?                              | E53        | Input must be Y or N                                                              |
|     553 | 8.5 Large Exposures | LE.51  | Outstanding Amount                              | F53        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     554 | 8.5 Large Exposures | LE.51  | Facility Amount                                 | G53        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     555 | 8.5 Large Exposures | LE.51  | Provision                                       | H53        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     556 | 8.5 Large Exposures | LE.51  | Performing?                                     | I53        | Input must be Y or N                                                              |
|     557 | 8.5 Large Exposures | LE.51  | Parental Guarantee or  Loan Take-Over Agreement | J53        | Input must be Y or N                                                              |
|     558 | 8.5 Large Exposures | LE.51  | Collateral (Cash, Govt or  Other)               | K53        | Input must be text, between 2 and 50 characters                                   |
|     559 | 8.5 Large Exposures | LE.51  | Collateral Cover %                              | L53        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     560 | 8.5 Large Exposures | LE.51  | Currency                                        | M53        | Input must be 3 digit currency ISO code                                           |
|     561 | 8.5 Large Exposures | LE.51  | Maturity Date                                   | N53        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     562 | 8.5 Large Exposures | LE.52  | LE Ref                                          | D54        | LE approval reference up to 15 characters, or 'NONE'                              |
|     563 | 8.5 Large Exposures | LE.52  | Connected to bank?                              | E54        | Input must be Y or N                                                              |
|     564 | 8.5 Large Exposures | LE.52  | Outstanding Amount                              | F54        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     565 | 8.5 Large Exposures | LE.52  | Facility Amount                                 | G54        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     566 | 8.5 Large Exposures | LE.52  | Provision                                       | H54        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     567 | 8.5 Large Exposures | LE.52  | Performing?                                     | I54        | Input must be Y or N                                                              |
|     568 | 8.5 Large Exposures | LE.52  | Parental Guarantee or  Loan Take-Over Agreement | J54        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     569 | 8.5 Large Exposures | LE.52  | Collateral (Cash, Govt or  Other)               | K54        | Input must be text, between 2 and 50 characters                                   |
|     570 | 8.5 Large Exposures | LE.52  | Collateral Cover %                              | L54        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     571 | 8.5 Large Exposures | LE.52  | Currency                                        | M54        | Input must be 3 digit currency ISO code                                           |
|     572 | 8.5 Large Exposures | LE.52  | Maturity Date                                   | N54        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     573 | 8.5 Large Exposures | LE.53  | LE Ref                                          | D55        | LE approval reference up to 15 characters, or 'NONE'                              |
|     574 | 8.5 Large Exposures | LE.53  | Connected to bank?                              | E55        | Input must be Y or N                                                              |
|     575 | 8.5 Large Exposures | LE.53  | Outstanding Amount                              | F55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     576 | 8.5 Large Exposures | LE.53  | Facility Amount                                 | G55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     577 | 8.5 Large Exposures | LE.53  | Provision                                       | H55        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     578 | 8.5 Large Exposures | LE.53  | Performing?                                     | I55        | Input must be Y or N                                                              |
|     579 | 8.5 Large Exposures | LE.53  | Parental Guarantee or  Loan Take-Over Agreement | J55        | Input must be Y or N                                                              |
|     580 | 8.5 Large Exposures | LE.53  | Collateral (Cash, Govt or  Other)               | K55        | Input must be text, between 2 and 50 characters                                   |
|     581 | 8.5 Large Exposures | LE.53  | Collateral Cover %                              | L55        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     582 | 8.5 Large Exposures | LE.53  | Currency                                        | M55        | Input must be 3 digit currency ISO code                                           |
|     583 | 8.5 Large Exposures | LE.53  | Maturity Date                                   | N55        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     584 | 8.5 Large Exposures | LE.54  | LE Ref                                          | D56        | LE approval reference up to 15 characters, or 'NONE'                              |
|     585 | 8.5 Large Exposures | LE.54  | Connected to bank?                              | E56        | Input must be Y or N                                                              |
|     586 | 8.5 Large Exposures | LE.54  | Outstanding Amount                              | F56        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     587 | 8.5 Large Exposures | LE.54  | Facility Amount                                 | G56        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     588 | 8.5 Large Exposures | LE.54  | Provision                                       | H56        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     589 | 8.5 Large Exposures | LE.54  | Performing?                                     | I56        | Input must be Y or N                                                              |
|     590 | 8.5 Large Exposures | LE.54  | Parental Guarantee or  Loan Take-Over Agreement | J56        | Input must be Y or N                                                              |
|     591 | 8.5 Large Exposures | LE.54  | Collateral (Cash, Govt or  Other)               | K56        | Input must be text, between 2 and 50 characters                                   |
|     592 | 8.5 Large Exposures | LE.54  | Collateral Cover %                              | L56        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     593 | 8.5 Large Exposures | LE.54  | Currency                                        | M56        | Input must be 3 digit currency ISO code                                           |
|     594 | 8.5 Large Exposures | LE.54  | Maturity Date                                   | N56        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     595 | 8.5 Large Exposures | LE.55  | LE Ref                                          | D57        | LE approval reference up to 15 characters, or 'NONE'                              |
|     596 | 8.5 Large Exposures | LE.55  | Connected to bank?                              | E57        | Input must be Y or N                                                              |
|     597 | 8.5 Large Exposures | LE.55  | Outstanding Amount                              | F57        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     598 | 8.5 Large Exposures | LE.55  | Facility Amount                                 | G57        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     599 | 8.5 Large Exposures | LE.55  | Provision                                       | H57        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     600 | 8.5 Large Exposures | LE.55  | Performing?                                     | I57        | Input must be Y or N                                                              |
|     601 | 8.5 Large Exposures | LE.55  | Parental Guarantee or  Loan Take-Over Agreement | J57        | Input must be Y or N                                                              |
|     602 | 8.5 Large Exposures | LE.55  | Collateral (Cash, Govt or  Other)               | K57        | Input must be text, between 2 and 50 characters                                   |
|     603 | 8.5 Large Exposures | LE.55  | Collateral Cover %                              | L57        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     604 | 8.5 Large Exposures | LE.55  | Currency                                        | M57        | Input must be 3 digit currency ISO code                                           |
|     605 | 8.5 Large Exposures | LE.55  | Maturity Date                                   | N57        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     606 | 8.5 Large Exposures | LE.56  | LE Ref                                          | D58        | LE approval reference up to 15 characters, or 'NONE'                              |
|     607 | 8.5 Large Exposures | LE.56  | Connected to bank?                              | E58        | Input must be Y or N                                                              |
|     608 | 8.5 Large Exposures | LE.56  | Outstanding Amount                              | F58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     609 | 8.5 Large Exposures | LE.56  | Facility Amount                                 | G58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     610 | 8.5 Large Exposures | LE.56  | Provision                                       | H58        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     611 | 8.5 Large Exposures | LE.56  | Performing?                                     | I58        | Input must be Y or N                                                              |
|     612 | 8.5 Large Exposures | LE.56  | Parental Guarantee or  Loan Take-Over Agreement | J58        | Input must be Y or N                                                              |
|     613 | 8.5 Large Exposures | LE.56  | Collateral (Cash, Govt or  Other)               | K58        | Input must be text, between 2 and 50 characters                                   |
|     614 | 8.5 Large Exposures | LE.56  | Collateral Cover %                              | L58        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item         | Column                                          | Cell Ref   | Validation Message                                                                |
|     615 | 8.5 Large Exposures | LE.56        | Currency                                        | M58        | Input must be 3 digit currency ISO code                                           |
|     616 | 8.5 Large Exposures | LE.56        | Maturity Date                                   | N58        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     617 | 8.5 Large Exposures | LE.57 LE Ref |                                                 | D59        | LE approval reference up to 15 characters, or 'NONE'                              |
|     618 | 8.5 Large Exposures | LE.57        | Connected to bank?                              | E59        | Input must be Y or N                                                              |
|     619 | 8.5 Large Exposures | LE.57        | Outstanding Amount                              | F59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     620 | 8.5 Large Exposures | LE.57        | Facility Amount                                 | G59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     621 | 8.5 Large Exposures | LE.57        | Provision                                       | H59        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     622 | 8.5 Large Exposures | LE.57        | Performing?                                     | I59        | Input must be Y or N                                                              |
|     623 | 8.5 Large Exposures | LE.57        | Parental Guarantee or  Loan Take-Over Agreement | J59        | Input must be Y or N                                                              |
|     624 | 8.5 Large Exposures | LE.57        | Collateral (Cash, Govt or  Other)               | K59        | Input must be text, between 2 and 50 characters                                   |
|     625 | 8.5 Large Exposures | LE.57        | Collateral Cover %                              | L59        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     626 | 8.5 Large Exposures | LE.57        | Currency                                        | M59        | Input must be 3 digit currency ISO code                                           |
|     627 | 8.5 Large Exposures | LE.57        | Maturity Date                                   | N59        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     628 | 8.5 Large Exposures | LE.58        | LE Ref                                          | D60        | LE approval reference up to 15 characters, or 'NONE'                              |
|     629 | 8.5 Large Exposures | LE.58        | Connected to bank?                              | E60        | Input must be Y or N                                                              |
|     630 | 8.5 Large Exposures | LE.58        | Outstanding Amount                              | F60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     631 | 8.5 Large Exposures | LE.58  | Facility Amount                                 | G60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     632 | 8.5 Large Exposures | LE.58  | Provision                                       | H60        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     633 | 8.5 Large Exposures | LE.58  | Performing?                                     | I60        | Input must be Y or N                                                              |
|     634 | 8.5 Large Exposures | LE.58  | Parental Guarantee or  Loan Take-Over Agreement | J60        | Input must be Y or N                                                              |
|     635 | 8.5 Large Exposures | LE.58  | Collateral (Cash, Govt or  Other)               | K60        | Input must be text, between 2 and 50 characters                                   |
|     636 | 8.5 Large Exposures | LE.58  | Collateral Cover %                              | L60        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     637 | 8.5 Large Exposures | LE.58  | Currency                                        | M60        | Input must be 3 digit currency ISO code                                           |
|     638 | 8.5 Large Exposures | LE.58  | Maturity Date                                   | N60        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     639 | 8.5 Large Exposures | LE.59  | LE Ref                                          | D61        | LE approval reference up to 15 characters, or 'NONE'                              |
|     640 | 8.5 Large Exposures | LE.59  | Connected to bank?                              | E61        | Input must be Y or N                                                              |
|     641 | 8.5 Large Exposures | LE.59  | Outstanding Amount                              | F61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     642 | 8.5 Large Exposures | LE.59  | Facility Amount                                 | G61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     643 | 8.5 Large Exposures | LE.59  | Provision                                       | H61        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     644 | 8.5 Large Exposures | LE.59  | Performing?                                     | I61        | Input must be Y or N                                                              |
|     645 | 8.5 Large Exposures | LE.59  | Parental Guarantee or  Loan Take-Over Agreement | J61        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     646 | 8.5 Large Exposures | LE.59  | Collateral (Cash, Govt or  Other)               | K61        | Input must be text, between 2 and 50 characters                                   |
|     647 | 8.5 Large Exposures | LE.59  | Collateral Cover %                              | L61        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     648 | 8.5 Large Exposures | LE.59  | Currency                                        | M61        | Input must be 3 digit currency ISO code                                           |
|     649 | 8.5 Large Exposures | LE.59  | Maturity Date                                   | N61        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     650 | 8.5 Large Exposures | LE.60  | LE Ref                                          | D62        | LE approval reference up to 15 characters, or 'NONE'                              |
|     651 | 8.5 Large Exposures | LE.60  | Connected to bank?                              | E62        | Input must be Y or N                                                              |
|     652 | 8.5 Large Exposures | LE.60  | Outstanding Amount                              | F62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     653 | 8.5 Large Exposures | LE.60  | Facility Amount                                 | G62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     654 | 8.5 Large Exposures | LE.60  | Provision                                       | H62        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     655 | 8.5 Large Exposures | LE.60  | Performing?                                     | I62        | Input must be Y or N                                                              |
|     656 | 8.5 Large Exposures | LE.60  | Parental Guarantee or  Loan Take-Over Agreement | J62        | Input must be Y or N                                                              |
|     657 | 8.5 Large Exposures | LE.60  | Collateral (Cash, Govt or  Other)               | K62        | Input must be text, between 2 and 50 characters                                   |
|     658 | 8.5 Large Exposures | LE.60  | Collateral Cover %                              | L62        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     659 | 8.5 Large Exposures | LE.60  | Currency                                        | M62        | Input must be 3 digit currency ISO code                                           |
|     660 | 8.5 Large Exposures | LE.60  | Maturity Date                                   | N62        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     661 | 8.5 Large Exposures | LE.61  | LE Ref                                          | D63        | LE approval reference up to 15 characters, or 'NONE'                              |
|     662 | 8.5 Large Exposures | LE.61  | Connected to bank?                              | E63        | Input must be Y or N                                                              |
|     663 | 8.5 Large Exposures | LE.61  | Outstanding Amount                              | F63        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     664 | 8.5 Large Exposures | LE.61  | Facility Amount                                 | G63        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     665 | 8.5 Large Exposures | LE.61  | Provision                                       | H63        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     666 | 8.5 Large Exposures | LE.61  | Performing?                                     | I63        | Input must be Y or N                                                              |
|     667 | 8.5 Large Exposures | LE.61  | Parental Guarantee or  Loan Take-Over Agreement | J63        | Input must be Y or N                                                              |
|     668 | 8.5 Large Exposures | LE.61  | Collateral (Cash, Govt or  Other)               | K63        | Input must be text, between 2 and 50 characters                                   |
|     669 | 8.5 Large Exposures | LE.61  | Collateral Cover %                              | L63        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     670 | 8.5 Large Exposures | LE.61  | Currency                                        | M63        | Input must be 3 digit currency ISO code                                           |
|     671 | 8.5 Large Exposures | LE.61  | Maturity Date                                   | N63        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     672 | 8.5 Large Exposures | LE.62  | LE Ref                                          | D64        | LE approval reference up to 15 characters, or 'NONE'                              |
|     673 | 8.5 Large Exposures | LE.62  | Connected to bank?                              | E64        | Input must be Y or N                                                              |
|     674 | 8.5 Large Exposures | LE.62  | Outstanding Amount                              | F64        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     675 | 8.5 Large Exposures | LE.62  | Facility Amount                                 | G64        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     676 | 8.5 Large Exposures | LE.62  | Provision                                       | H64        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     677 | 8.5 Large Exposures | LE.62  | Performing?                                     | I64        | Input must be Y or N                                                              |
|     678 | 8.5 Large Exposures | LE.62  | Parental Guarantee or  Loan Take-Over Agreement | J64        | Input must be Y or N                                                              |
|     679 | 8.5 Large Exposures | LE.62  | Collateral (Cash, Govt or  Other)               | K64        | Input must be text, between 2 and 50 characters                                   |
|     680 | 8.5 Large Exposures | LE.62  | Collateral Cover %                              | L64        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     681 | 8.5 Large Exposures | LE.62  | Currency                                        | M64        | Input must be 3 digit currency ISO code                                           |
|     682 | 8.5 Large Exposures | LE.62  | Maturity Date                                   | N64        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     683 | 8.5 Large Exposures | LE.63  | LE Ref                                          | D65        | LE approval reference up to 15 characters, or 'NONE'                              |
|     684 | 8.5 Large Exposures | LE.63  | Connected to bank?                              | E65        | Input must be Y or N                                                              |
|     685 | 8.5 Large Exposures | LE.63  | Outstanding Amount                              | F65        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     686 | 8.5 Large Exposures | LE.63  | Facility Amount                                 | G65        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     687 | 8.5 Large Exposures | LE.63  | Provision                                       | H65        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     688 | 8.5 Large Exposures | LE.63  | Performing?                                     | I65        | Input must be Y or N                                                              |
|     689 | 8.5 Large Exposures | LE.63  | Parental Guarantee or  Loan Take-Over Agreement | J65        | Input must be Y or N                                                              |
|     690 | 8.5 Large Exposures | LE.63  | Collateral (Cash, Govt or  Other)               | K65        | Input must be text, between 2 and 50 characters                                   |
|     691 | 8.5 Large Exposures | LE.63  | Collateral Cover %                              | L65        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item         | Column                                          | Cell Ref   | Validation Message                                                                |
|     692 | 8.5 Large Exposures | LE.63        | Currency                                        | M65        | Input must be 3 digit currency ISO code                                           |
|     693 | 8.5 Large Exposures | LE.63        | Maturity Date                                   | N65        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     694 | 8.5 Large Exposures | LE.64 LE Ref |                                                 | D66        | LE approval reference up to 15 characters, or 'NONE'                              |
|     695 | 8.5 Large Exposures | LE.64        | Connected to bank?                              | E66        | Input must be Y or N                                                              |
|     696 | 8.5 Large Exposures | LE.64        | Outstanding Amount                              | F66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     697 | 8.5 Large Exposures | LE.64        | Facility Amount                                 | G66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     698 | 8.5 Large Exposures | LE.64        | Provision                                       | H66        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     699 | 8.5 Large Exposures | LE.64        | Performing?                                     | I66        | Input must be Y or N                                                              |
|     700 | 8.5 Large Exposures | LE.64        | Parental Guarantee or  Loan Take-Over Agreement | J66        | Input must be Y or N                                                              |
|     701 | 8.5 Large Exposures | LE.64        | Collateral (Cash, Govt or  Other)               | K66        | Input must be text, between 2 and 50 characters                                   |
|     702 | 8.5 Large Exposures | LE.64        | Collateral Cover %                              | L66        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     703 | 8.5 Large Exposures | LE.64        | Currency                                        | M66        | Input must be 3 digit currency ISO code                                           |
|     704 | 8.5 Large Exposures | LE.64        | Maturity Date                                   | N66        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     705 | 8.5 Large Exposures | LE.65        | LE Ref                                          | D67        | LE approval reference up to 15 characters, or 'NONE'                              |
|     706 | 8.5 Large Exposures | LE.65        | Connected to bank?                              | E67        | Input must be Y or N                                                              |
|     707 | 8.5 Large Exposures | LE.65        | Outstanding Amount                              | F67        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     708 | 8.5 Large Exposures | LE.65  | Facility Amount                                 | G67        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     709 | 8.5 Large Exposures | LE.65  | Provision                                       | H67        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     710 | 8.5 Large Exposures | LE.65  | Performing?                                     | I67        | Input must be Y or N                                                              |
|     711 | 8.5 Large Exposures | LE.65  | Parental Guarantee or  Loan Take-Over Agreement | J67        | Input must be Y or N                                                              |
|     712 | 8.5 Large Exposures | LE.65  | Collateral (Cash, Govt or  Other)               | K67        | Input must be text, between 2 and 50 characters                                   |
|     713 | 8.5 Large Exposures | LE.65  | Collateral Cover %                              | L67        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     714 | 8.5 Large Exposures | LE.65  | Currency                                        | M67        | Input must be 3 digit currency ISO code                                           |
|     715 | 8.5 Large Exposures | LE.65  | Maturity Date                                   | N67        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     716 | 8.5 Large Exposures | LE.66  | LE Ref                                          | D68        | LE approval reference up to 15 characters, or 'NONE'                              |
|     717 | 8.5 Large Exposures | LE.66  | Connected to bank?                              | E68        | Input must be Y or N                                                              |
|     718 | 8.5 Large Exposures | LE.66  | Outstanding Amount                              | F68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     719 | 8.5 Large Exposures | LE.66  | Facility Amount                                 | G68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     720 | 8.5 Large Exposures | LE.66  | Provision                                       | H68        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     721 | 8.5 Large Exposures | LE.66  | Performing?                                     | I68        | Input must be Y or N                                                              |
|     722 | 8.5 Large Exposures | LE.66  | Parental Guarantee or  Loan Take-Over Agreement | J68        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     723 | 8.5 Large Exposures | LE.66  | Collateral (Cash, Govt or  Other)               | K68        | Input must be text, between 2 and 50 characters                                   |
|     724 | 8.5 Large Exposures | LE.66  | Collateral Cover %                              | L68        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     725 | 8.5 Large Exposures | LE.66  | Currency                                        | M68        | Input must be 3 digit currency ISO code                                           |
|     726 | 8.5 Large Exposures | LE.66  | Maturity Date                                   | N68        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     727 | 8.5 Large Exposures | LE.67  | LE Ref                                          | D69        | LE approval reference up to 15 characters, or 'NONE'                              |
|     728 | 8.5 Large Exposures | LE.67  | Connected to bank?                              | E69        | Input must be Y or N                                                              |
|     729 | 8.5 Large Exposures | LE.67  | Outstanding Amount                              | F69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     730 | 8.5 Large Exposures | LE.67  | Facility Amount                                 | G69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     731 | 8.5 Large Exposures | LE.67  | Provision                                       | H69        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     732 | 8.5 Large Exposures | LE.67  | Performing?                                     | I69        | Input must be Y or N                                                              |
|     733 | 8.5 Large Exposures | LE.67  | Parental Guarantee or  Loan Take-Over Agreement | J69        | Input must be Y or N                                                              |
|     734 | 8.5 Large Exposures | LE.67  | Collateral (Cash, Govt or  Other)               | K69        | Input must be text, between 2 and 50 characters                                   |
|     735 | 8.5 Large Exposures | LE.67  | Collateral Cover %                              | L69        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     736 | 8.5 Large Exposures | LE.67  | Currency                                        | M69        | Input must be 3 digit currency ISO code                                           |
|     737 | 8.5 Large Exposures | LE.67  | Maturity Date                                   | N69        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     738 | 8.5 Large Exposures | LE.68  | LE Ref                                          | D70        | LE approval reference up to 15 characters, or 'NONE'                              |
|     739 | 8.5 Large Exposures | LE.68  | Connected to bank?                              | E70        | Input must be Y or N                                                              |
|     740 | 8.5 Large Exposures | LE.68  | Outstanding Amount                              | F70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     741 | 8.5 Large Exposures | LE.68  | Facility Amount                                 | G70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     742 | 8.5 Large Exposures | LE.68  | Provision                                       | H70        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     743 | 8.5 Large Exposures | LE.68  | Performing?                                     | I70        | Input must be Y or N                                                              |
|     744 | 8.5 Large Exposures | LE.68  | Parental Guarantee or  Loan Take-Over Agreement | J70        | Input must be Y or N                                                              |
|     745 | 8.5 Large Exposures | LE.68  | Collateral (Cash, Govt or  Other)               | K70        | Input must be text, between 2 and 50 characters                                   |
|     746 | 8.5 Large Exposures | LE.68  | Collateral Cover %                              | L70        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     747 | 8.5 Large Exposures | LE.68  | Currency                                        | M70        | Input must be 3 digit currency ISO code                                           |
|     748 | 8.5 Large Exposures | LE.68  | Maturity Date                                   | N70        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     749 | 8.5 Large Exposures | LE.69  | LE Ref                                          | D71        | LE approval reference up to 15 characters, or 'NONE'                              |
|     750 | 8.5 Large Exposures | LE.69  | Connected to bank?                              | E71        | Input must be Y or N                                                              |
|     751 | 8.5 Large Exposures | LE.69  | Outstanding Amount                              | F71        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     752 | 8.5 Large Exposures | LE.69  | Facility Amount                                 | G71        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     753 | 8.5 Large Exposures | LE.69  | Provision                                       | H71        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     754 | 8.5 Large Exposures | LE.69  | Performing?                                     | I71        | Input must be Y or N                                                              |
|     755 | 8.5 Large Exposures | LE.69  | Parental Guarantee or  Loan Take-Over Agreement | J71        | Input must be Y or N                                                              |
|     756 | 8.5 Large Exposures | LE.69  | Collateral (Cash, Govt or  Other)               | K71        | Input must be text, between 2 and 50 characters                                   |
|     757 | 8.5 Large Exposures | LE.69  | Collateral Cover %                              | L71        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     758 | 8.5 Large Exposures | LE.69  | Currency                                        | M71        | Input must be 3 digit currency ISO code                                           |
|     759 | 8.5 Large Exposures | LE.69  | Maturity Date                                   | N71        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     760 | 8.5 Large Exposures | LE.70  | LE Ref                                          | D72        | LE approval reference up to 15 characters, or 'NONE'                              |
|     761 | 8.5 Large Exposures | LE.70  | Connected to bank?                              | E72        | Input must be Y or N                                                              |
|     762 | 8.5 Large Exposures | LE.70  | Outstanding Amount                              | F72        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     763 | 8.5 Large Exposures | LE.70  | Facility Amount                                 | G72        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     764 | 8.5 Large Exposures | LE.70  | Provision                                       | H72        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     765 | 8.5 Large Exposures | LE.70  | Performing?                                     | I72        | Input must be Y or N                                                              |
|     766 | 8.5 Large Exposures | LE.70  | Parental Guarantee or  Loan Take-Over Agreement | J72        | Input must be Y or N                                                              |
|     767 | 8.5 Large Exposures | LE.70  | Collateral (Cash, Govt or  Other)               | K72        | Input must be text, between 2 and 50 characters                                   |
|     768 | 8.5 Large Exposures | LE.70  | Collateral Cover %                              | L72        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     769 | 8.5 Large Exposures | LE.70  | Currency                                        | M72        | Input must be 3 digit currency ISO code                                           |
|     770 | 8.5 Large Exposures | LE.70  | Maturity Date                                   | N72        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     771 | 8.5 Large Exposures | LE.71  | LE Ref                                          | D73        | LE approval reference up to 15 characters, or 'NONE'                              |
|     772 | 8.5 Large Exposures | LE.71  | Connected to bank?                              | E73        | Input must be Y or N                                                              |
|     773 | 8.5 Large Exposures | LE.71  | Outstanding Amount                              | F73        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     774 | 8.5 Large Exposures | LE.71  | Facility Amount                                 | G73        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     775 | 8.5 Large Exposures | LE.71  | Provision                                       | H73        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     776 | 8.5 Large Exposures | LE.71  | Performing?                                     | I73        | Input must be Y or N                                                              |
|     777 | 8.5 Large Exposures | LE.71  | Parental Guarantee or  Loan Take-Over Agreement | J73        | Input must be Y or N                                                              |
|     778 | 8.5 Large Exposures | LE.71  | Collateral (Cash, Govt or  Other)               | K73        | Input must be text, between 2 and 50 characters                                   |
|     779 | 8.5 Large Exposures | LE.71  | Collateral Cover %                              | L73        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     780 | 8.5 Large Exposures | LE.71  | Currency                                        | M73        | Input must be 3 digit currency ISO code                                           |
|     781 | 8.5 Large Exposures | LE.71  | Maturity Date                                   | N73        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     782 | 8.5 Large Exposures | LE.72  | LE Ref                                          | D74        | LE approval reference up to 15 characters, or 'NONE'                              |
|     783 | 8.5 Large Exposures | LE.72  | Connected to bank?                              | E74        | Input must be Y or N                                                              |
|     784 | 8.5 Large Exposures | LE.72  | Outstanding Amount                              | F74        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     785 | 8.5 Large Exposures | LE.72  | Facility Amount                                 | G74        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     786 | 8.5 Large Exposures | LE.72  | Provision                                       | H74        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     787 | 8.5 Large Exposures | LE.72  | Performing?                                     | I74        | Input must be Y or N                                                              |
|     788 | 8.5 Large Exposures | LE.72  | Parental Guarantee or  Loan Take-Over Agreement | J74        | Input must be Y or N                                                              |
|     789 | 8.5 Large Exposures | LE.72  | Collateral (Cash, Govt or  Other)               | K74        | Input must be text, between 2 and 50 characters                                   |
|     790 | 8.5 Large Exposures | LE.72  | Collateral Cover %                              | L74        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     791 | 8.5 Large Exposures | LE.72  | Currency                                        | M74        | Input must be 3 digit currency ISO code                                           |
|     792 | 8.5 Large Exposures | LE.72  | Maturity Date                                   | N74        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     793 | 8.5 Large Exposures | LE.73  | LE Ref                                          | D75        | LE approval reference up to 15 characters, or 'NONE'                              |
|     794 | 8.5 Large Exposures | LE.73  | Connected to bank?                              | E75        | Input must be Y or N                                                              |
|     795 | 8.5 Large Exposures | LE.73  | Outstanding Amount                              | F75        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     796 | 8.5 Large Exposures | LE.73  | Facility Amount                                 | G75        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     797 | 8.5 Large Exposures | LE.73  | Provision                                       | H75        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     798 | 8.5 Large Exposures | LE.73  | Performing?                                     | I75        | Input must be Y or N                                                              |
|     799 | 8.5 Large Exposures | LE.73  | Parental Guarantee or  Loan Take-Over Agreement | J75        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     800 | 8.5 Large Exposures | LE.73  | Collateral (Cash, Govt or  Other)               | K75        | Input must be text, between 2 and 50 characters                                   |
|     801 | 8.5 Large Exposures | LE.73  | Collateral Cover %                              | L75        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     802 | 8.5 Large Exposures | LE.73  | Currency                                        | M75        | Input must be 3 digit currency ISO code                                           |
|     803 | 8.5 Large Exposures | LE.73  | Maturity Date                                   | N75        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     804 | 8.5 Large Exposures | LE.74  | LE Ref                                          | D76        | LE approval reference up to 15 characters, or 'NONE'                              |
|     805 | 8.5 Large Exposures | LE.74  | Connected to bank?                              | E76        | Input must be Y or N                                                              |
|     806 | 8.5 Large Exposures | LE.74  | Outstanding Amount                              | F76        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     807 | 8.5 Large Exposures | LE.74  | Facility Amount                                 | G76        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     808 | 8.5 Large Exposures | LE.74  | Provision                                       | H76        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     809 | 8.5 Large Exposures | LE.74  | Performing?                                     | I76        | Input must be Y or N                                                              |
|     810 | 8.5 Large Exposures | LE.74  | Parental Guarantee or  Loan Take-Over Agreement | J76        | Input must be Y or N                                                              |
|     811 | 8.5 Large Exposures | LE.74  | Collateral (Cash, Govt or  Other)               | K76        | Input must be text, between 2 and 50 characters                                   |
|     812 | 8.5 Large Exposures | LE.74  | Collateral Cover %                              | L76        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     813 | 8.5 Large Exposures | LE.74  | Currency                                        | M76        | Input must be 3 digit currency ISO code                                           |
|     814 | 8.5 Large Exposures | LE.74  | Maturity Date                                   | N76        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     815 | 8.5 Large Exposures | LE.75  | LE Ref                                          | D77        | LE approval reference up to 15 characters, or 'NONE'                              |
|     816 | 8.5 Large Exposures | LE.75  | Connected to bank?                              | E77        | Input must be Y or N                                                              |
|     817 | 8.5 Large Exposures | LE.75  | Outstanding Amount                              | F77        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     818 | 8.5 Large Exposures | LE.75  | Facility Amount                                 | G77        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     819 | 8.5 Large Exposures | LE.75  | Provision                                       | H77        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     820 | 8.5 Large Exposures | LE.75  | Performing?                                     | I77        | Input must be Y or N                                                              |
|     821 | 8.5 Large Exposures | LE.75  | Parental Guarantee or  Loan Take-Over Agreement | J77        | Input must be Y or N                                                              |
|     822 | 8.5 Large Exposures | LE.75  | Collateral (Cash, Govt or  Other)               | K77        | Input must be text, between 2 and 50 characters                                   |
|     823 | 8.5 Large Exposures | LE.75  | Collateral Cover %                              | L77        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     824 | 8.5 Large Exposures | LE.75  | Currency                                        | M77        | Input must be 3 digit currency ISO code                                           |
|     825 | 8.5 Large Exposures | LE.75  | Maturity Date                                   | N77        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     826 | 8.5 Large Exposures | LE.76  | LE Ref                                          | D78        | LE approval reference up to 15 characters, or 'NONE'                              |
|     827 | 8.5 Large Exposures | LE.76  | Connected to bank?                              | E78        | Input must be Y or N                                                              |
|     828 | 8.5 Large Exposures | LE.76  | Outstanding Amount                              | F78        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     829 | 8.5 Large Exposures | LE.76  | Facility Amount                                 | G78        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     830 | 8.5 Large Exposures | LE.76  | Provision                                       | H78        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     831 | 8.5 Large Exposures | LE.76  | Performing?                                     | I78        | Input must be Y or N                                                              |
|     832 | 8.5 Large Exposures | LE.76  | Parental Guarantee or  Loan Take-Over Agreement | J78        | Input must be Y or N                                                              |
|     833 | 8.5 Large Exposures | LE.76  | Collateral (Cash, Govt or  Other)               | K78        | Input must be text, between 2 and 50 characters                                   |
|     834 | 8.5 Large Exposures | LE.76  | Collateral Cover %                              | L78        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     835 | 8.5 Large Exposures | LE.76  | Currency                                        | M78        | Input must be 3 digit currency ISO code                                           |
|     836 | 8.5 Large Exposures | LE.76  | Maturity Date                                   | N78        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     837 | 8.5 Large Exposures | LE.77  | LE Ref                                          | D79        | LE approval reference up to 15 characters, or 'NONE'                              |
|     838 | 8.5 Large Exposures | LE.77  | Connected to bank?                              | E79        | Input must be Y or N                                                              |
|     839 | 8.5 Large Exposures | LE.77  | Outstanding Amount                              | F79        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     840 | 8.5 Large Exposures | LE.77  | Facility Amount                                 | G79        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     841 | 8.5 Large Exposures | LE.77  | Provision                                       | H79        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     842 | 8.5 Large Exposures | LE.77  | Performing?                                     | I79        | Input must be Y or N                                                              |
|     843 | 8.5 Large Exposures | LE.77  | Parental Guarantee or  Loan Take-Over Agreement | J79        | Input must be Y or N                                                              |
|     844 | 8.5 Large Exposures | LE.77  | Collateral (Cash, Govt or  Other)               | K79        | Input must be text, between 2 and 50 characters                                   |
|     845 | 8.5 Large Exposures | LE.77  | Collateral Cover %                              | L79        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item         | Column                                          | Cell Ref   | Validation Message                                                                |
|     846 | 8.5 Large Exposures | LE.77        | Currency                                        | M79        | Input must be 3 digit currency ISO code                                           |
|     847 | 8.5 Large Exposures | LE.77        | Maturity Date                                   | N79        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     848 | 8.5 Large Exposures | LE.78 LE Ref |                                                 | D80        | LE approval reference up to 15 characters, or 'NONE'                              |
|     849 | 8.5 Large Exposures | LE.78        | Connected to bank?                              | E80        | Input must be Y or N                                                              |
|     850 | 8.5 Large Exposures | LE.78        | Outstanding Amount                              | F80        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     851 | 8.5 Large Exposures | LE.78        | Facility Amount                                 | G80        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     852 | 8.5 Large Exposures | LE.78        | Provision                                       | H80        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     853 | 8.5 Large Exposures | LE.78        | Performing?                                     | I80        | Input must be Y or N                                                              |
|     854 | 8.5 Large Exposures | LE.78        | Parental Guarantee or  Loan Take-Over Agreement | J80        | Input must be Y or N                                                              |
|     855 | 8.5 Large Exposures | LE.78        | Collateral (Cash, Govt or  Other)               | K80        | Input must be text, between 2 and 50 characters                                   |
|     856 | 8.5 Large Exposures | LE.78        | Collateral Cover %                              | L80        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     857 | 8.5 Large Exposures | LE.78        | Currency                                        | M80        | Input must be 3 digit currency ISO code                                           |
|     858 | 8.5 Large Exposures | LE.78        | Maturity Date                                   | N80        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     859 | 8.5 Large Exposures | LE.79        | LE Ref                                          | D81        | LE approval reference up to 15 characters, or 'NONE'                              |
|     860 | 8.5 Large Exposures | LE.79        | Connected to bank?                              | E81        | Input must be Y or N                                                              |
|     861 | 8.5 Large Exposures | LE.79        | Outstanding Amount                              | F81        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     862 | 8.5 Large Exposures | LE.79  | Facility Amount                                 | G81        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     863 | 8.5 Large Exposures | LE.79  | Provision                                       | H81        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     864 | 8.5 Large Exposures | LE.79  | Performing?                                     | I81        | Input must be Y or N                                                              |
|     865 | 8.5 Large Exposures | LE.79  | Parental Guarantee or  Loan Take-Over Agreement | J81        | Input must be Y or N                                                              |
|     866 | 8.5 Large Exposures | LE.79  | Collateral (Cash, Govt or  Other)               | K81        | Input must be text, between 2 and 50 characters                                   |
|     867 | 8.5 Large Exposures | LE.79  | Collateral Cover %                              | L81        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     868 | 8.5 Large Exposures | LE.79  | Currency                                        | M81        | Input must be 3 digit currency ISO code                                           |
|     869 | 8.5 Large Exposures | LE.79  | Maturity Date                                   | N81        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     870 | 8.5 Large Exposures | LE.80  | LE Ref                                          | D82        | LE approval reference up to 15 characters, or 'NONE'                              |
|     871 | 8.5 Large Exposures | LE.80  | Connected to bank?                              | E82        | Input must be Y or N                                                              |
|     872 | 8.5 Large Exposures | LE.80  | Outstanding Amount                              | F82        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     873 | 8.5 Large Exposures | LE.80  | Facility Amount                                 | G82        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     874 | 8.5 Large Exposures | LE.80  | Provision                                       | H82        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     875 | 8.5 Large Exposures | LE.80  | Performing?                                     | I82        | Input must be Y or N                                                              |
|     876 | 8.5 Large Exposures | LE.80  | Parental Guarantee or  Loan Take-Over Agreement | J82        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     877 | 8.5 Large Exposures | LE.80  | Collateral (Cash, Govt or  Other)               | K82        | Input must be text, between 2 and 50 characters                                   |
|     878 | 8.5 Large Exposures | LE.80  | Collateral Cover %                              | L82        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     879 | 8.5 Large Exposures | LE.80  | Currency                                        | M82        | Input must be 3 digit currency ISO code                                           |
|     880 | 8.5 Large Exposures | LE.80  | Maturity Date                                   | N82        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     881 | 8.5 Large Exposures | LE.81  | LE Ref                                          | D83        | LE approval reference up to 15 characters, or 'NONE'                              |
|     882 | 8.5 Large Exposures | LE.81  | Connected to bank?                              | E83        | Input must be Y or N                                                              |
|     883 | 8.5 Large Exposures | LE.81  | Outstanding Amount                              | F83        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     884 | 8.5 Large Exposures | LE.81  | Facility Amount                                 | G83        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     885 | 8.5 Large Exposures | LE.81  | Provision                                       | H83        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     886 | 8.5 Large Exposures | LE.81  | Performing?                                     | I83        | Input must be Y or N                                                              |
|     887 | 8.5 Large Exposures | LE.81  | Parental Guarantee or  Loan Take-Over Agreement | J83        | Input must be Y or N                                                              |
|     888 | 8.5 Large Exposures | LE.81  | Collateral (Cash, Govt or  Other)               | K83        | Input must be text, between 2 and 50 characters                                   |
|     889 | 8.5 Large Exposures | LE.81  | Collateral Cover %                              | L83        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     890 | 8.5 Large Exposures | LE.81  | Currency                                        | M83        | Input must be 3 digit currency ISO code                                           |
|     891 | 8.5 Large Exposures | LE.81  | Maturity Date                                   | N83        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     892 | 8.5 Large Exposures | LE.82  | LE Ref                                          | D84        | LE approval reference up to 15 characters, or 'NONE'                              |
|     893 | 8.5 Large Exposures | LE.82  | Connected to bank?                              | E84        | Input must be Y or N                                                              |
|     894 | 8.5 Large Exposures | LE.82  | Outstanding Amount                              | F84        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     895 | 8.5 Large Exposures | LE.82  | Facility Amount                                 | G84        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     896 | 8.5 Large Exposures | LE.82  | Provision                                       | H84        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     897 | 8.5 Large Exposures | LE.82  | Performing?                                     | I84        | Input must be Y or N                                                              |
|     898 | 8.5 Large Exposures | LE.82  | Parental Guarantee or  Loan Take-Over Agreement | J84        | Input must be Y or N                                                              |
|     899 | 8.5 Large Exposures | LE.82  | Collateral (Cash, Govt or  Other)               | K84        | Input must be text, between 2 and 50 characters                                   |
|     900 | 8.5 Large Exposures | LE.82  | Collateral Cover %                              | L84        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     901 | 8.5 Large Exposures | LE.82  | Currency                                        | M84        | Input must be 3 digit currency ISO code                                           |
|     902 | 8.5 Large Exposures | LE.82  | Maturity Date                                   | N84        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     903 | 8.5 Large Exposures | LE.83  | LE Ref                                          | D85        | LE approval reference up to 15 characters, or 'NONE'                              |
|     904 | 8.5 Large Exposures | LE.83  | Connected to bank?                              | E85        | Input must be Y or N                                                              |
|     905 | 8.5 Large Exposures | LE.83  | Outstanding Amount                              | F85        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     906 | 8.5 Large Exposures | LE.83  | Facility Amount                                 | G85        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     907 | 8.5 Large Exposures | LE.83  | Provision                                       | H85        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     908 | 8.5 Large Exposures | LE.83  | Performing?                                     | I85        | Input must be Y or N                                                              |
|     909 | 8.5 Large Exposures | LE.83  | Parental Guarantee or  Loan Take-Over Agreement | J85        | Input must be Y or N                                                              |
|     910 | 8.5 Large Exposures | LE.83  | Collateral (Cash, Govt or  Other)               | K85        | Input must be text, between 2 and 50 characters                                   |
|     911 | 8.5 Large Exposures | LE.83  | Collateral Cover %                              | L85        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     912 | 8.5 Large Exposures | LE.83  | Currency                                        | M85        | Input must be 3 digit currency ISO code                                           |
|     913 | 8.5 Large Exposures | LE.83  | Maturity Date                                   | N85        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     914 | 8.5 Large Exposures | LE.84  | LE Ref                                          | D86        | LE approval reference up to 15 characters, or 'NONE'                              |
|     915 | 8.5 Large Exposures | LE.84  | Connected to bank?                              | E86        | Input must be Y or N                                                              |
|     916 | 8.5 Large Exposures | LE.84  | Outstanding Amount                              | F86        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     917 | 8.5 Large Exposures | LE.84  | Facility Amount                                 | G86        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     918 | 8.5 Large Exposures | LE.84  | Provision                                       | H86        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     919 | 8.5 Large Exposures | LE.84  | Performing?                                     | I86        | Input must be Y or N                                                              |
|     920 | 8.5 Large Exposures | LE.84  | Parental Guarantee or  Loan Take-Over Agreement | J86        | Input must be Y or N                                                              |
|     921 | 8.5 Large Exposures | LE.84  | Collateral (Cash, Govt or  Other)               | K86        | Input must be text, between 2 and 50 characters                                   |
|     922 | 8.5 Large Exposures | LE.84  | Collateral Cover %                              | L86        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     923 | 8.5 Large Exposures | LE.84  | Currency                                        | M86        | Input must be 3 digit currency ISO code                                           |
|     924 | 8.5 Large Exposures | LE.84  | Maturity Date                                   | N86        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     925 | 8.5 Large Exposures | LE.85  | LE Ref                                          | D87        | LE approval reference up to 15 characters, or 'NONE'                              |
|     926 | 8.5 Large Exposures | LE.85  | Connected to bank?                              | E87        | Input must be Y or N                                                              |
|     927 | 8.5 Large Exposures | LE.85  | Outstanding Amount                              | F87        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     928 | 8.5 Large Exposures | LE.85  | Facility Amount                                 | G87        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     929 | 8.5 Large Exposures | LE.85  | Provision                                       | H87        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     930 | 8.5 Large Exposures | LE.85  | Performing?                                     | I87        | Input must be Y or N                                                              |
|     931 | 8.5 Large Exposures | LE.85  | Parental Guarantee or  Loan Take-Over Agreement | J87        | Input must be Y or N                                                              |
|     932 | 8.5 Large Exposures | LE.85  | Collateral (Cash, Govt or  Other)               | K87        | Input must be text, between 2 and 50 characters                                   |
|     933 | 8.5 Large Exposures | LE.85  | Collateral Cover %                              | L87        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     934 | 8.5 Large Exposures | LE.85  | Currency                                        | M87        | Input must be 3 digit currency ISO code                                           |
|     935 | 8.5 Large Exposures | LE.85  | Maturity Date                                   | N87        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     936 | 8.5 Large Exposures | LE.86  | LE Ref                                          | D88        | LE approval reference up to 15 characters, or 'NONE'                              |
|     937 | 8.5 Large Exposures | LE.86  | Connected to bank?                              | E88        | Input must be Y or N                                                              |
|     938 | 8.5 Large Exposures | LE.86  | Outstanding Amount                              | F88        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     939 | 8.5 Large Exposures | LE.86  | Facility Amount                                 | G88        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     940 | 8.5 Large Exposures | LE.86  | Provision                                       | H88        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     941 | 8.5 Large Exposures | LE.86  | Performing?                                     | I88        | Input must be Y or N                                                              |
|     942 | 8.5 Large Exposures | LE.86  | Parental Guarantee or  Loan Take-Over Agreement | J88        | Input must be Y or N                                                              |
|     943 | 8.5 Large Exposures | LE.86  | Collateral (Cash, Govt or  Other)               | K88        | Input must be text, between 2 and 50 characters                                   |
|     944 | 8.5 Large Exposures | LE.86  | Collateral Cover %                              | L88        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     945 | 8.5 Large Exposures | LE.86  | Currency                                        | M88        | Input must be 3 digit currency ISO code                                           |
|     946 | 8.5 Large Exposures | LE.86  | Maturity Date                                   | N88        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     947 | 8.5 Large Exposures | LE.87  | LE Ref                                          | D89        | LE approval reference up to 15 characters, or 'NONE'                              |
|     948 | 8.5 Large Exposures | LE.87  | Connected to bank?                              | E89        | Input must be Y or N                                                              |
|     949 | 8.5 Large Exposures | LE.87  | Outstanding Amount                              | F89        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     950 | 8.5 Large Exposures | LE.87  | Facility Amount                                 | G89        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     951 | 8.5 Large Exposures | LE.87  | Provision                                       | H89        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     952 | 8.5 Large Exposures | LE.87  | Performing?                                     | I89        | Input must be Y or N                                                              |
|     953 | 8.5 Large Exposures | LE.87  | Parental Guarantee or  Loan Take-Over Agreement | J89        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     954 | 8.5 Large Exposures | LE.87  | Collateral (Cash, Govt or  Other)               | K89        | Input must be text, between 2 and 50 characters                                   |
|     955 | 8.5 Large Exposures | LE.87  | Collateral Cover %                              | L89        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     956 | 8.5 Large Exposures | LE.87  | Currency                                        | M89        | Input must be 3 digit currency ISO code                                           |
|     957 | 8.5 Large Exposures | LE.87  | Maturity Date                                   | N89        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     958 | 8.5 Large Exposures | LE.88  | LE Ref                                          | D90        | LE approval reference up to 15 characters, or 'NONE'                              |
|     959 | 8.5 Large Exposures | LE.88  | Connected to bank?                              | E90        | Input must be Y or N                                                              |
|     960 | 8.5 Large Exposures | LE.88  | Outstanding Amount                              | F90        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     961 | 8.5 Large Exposures | LE.88  | Facility Amount                                 | G90        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     962 | 8.5 Large Exposures | LE.88  | Provision                                       | H90        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     963 | 8.5 Large Exposures | LE.88  | Performing?                                     | I90        | Input must be Y or N                                                              |
|     964 | 8.5 Large Exposures | LE.88  | Parental Guarantee or  Loan Take-Over Agreement | J90        | Input must be Y or N                                                              |
|     965 | 8.5 Large Exposures | LE.88  | Collateral (Cash, Govt or  Other)               | K90        | Input must be text, between 2 and 50 characters                                   |
|     966 | 8.5 Large Exposures | LE.88  | Collateral Cover %                              | L90        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     967 | 8.5 Large Exposures | LE.88  | Currency                                        | M90        | Input must be 3 digit currency ISO code                                           |
|     968 | 8.5 Large Exposures | LE.88  | Maturity Date                                   | N90        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     969 | 8.5 Large Exposures | LE.89  | LE Ref                                          | D91        | LE approval reference up to 15 characters, or 'NONE'                              |
|     970 | 8.5 Large Exposures | LE.89  | Connected to bank?                              | E91        | Input must be Y or N                                                              |
|     971 | 8.5 Large Exposures | LE.89  | Outstanding Amount                              | F91        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     972 | 8.5 Large Exposures | LE.89  | Facility Amount                                 | G91        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     973 | 8.5 Large Exposures | LE.89  | Provision                                       | H91        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     974 | 8.5 Large Exposures | LE.89  | Performing?                                     | I91        | Input must be Y or N                                                              |
|     975 | 8.5 Large Exposures | LE.89  | Parental Guarantee or  Loan Take-Over Agreement | J91        | Input must be Y or N                                                              |
|     976 | 8.5 Large Exposures | LE.89  | Collateral (Cash, Govt or  Other)               | K91        | Input must be text, between 2 and 50 characters                                   |
|     977 | 8.5 Large Exposures | LE.89  | Collateral Cover %                              | L91        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     978 | 8.5 Large Exposures | LE.89  | Currency                                        | M91        | Input must be 3 digit currency ISO code                                           |
|     979 | 8.5 Large Exposures | LE.89  | Maturity Date                                   | N91        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     980 | 8.5 Large Exposures | LE.90  | LE Ref                                          | D92        | LE approval reference up to 15 characters, or 'NONE'                              |
|     981 | 8.5 Large Exposures | LE.90  | Connected to bank?                              | E92        | Input must be Y or N                                                              |
|     982 | 8.5 Large Exposures | LE.90  | Outstanding Amount                              | F92        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     983 | 8.5 Large Exposures | LE.90  | Facility Amount                                 | G92        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     984 | 8.5 Large Exposures | LE.90  | Provision                                       | H92        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|     985 | 8.5 Large Exposures | LE.90  | Performing?                                     | I92        | Input must be Y or N                                                              |
|     986 | 8.5 Large Exposures | LE.90  | Parental Guarantee or  Loan Take-Over Agreement | J92        | Input must be Y or N                                                              |
|     987 | 8.5 Large Exposures | LE.90  | Collateral (Cash, Govt or  Other)               | K92        | Input must be text, between 2 and 50 characters                                   |
|     988 | 8.5 Large Exposures | LE.90  | Collateral Cover %                              | L92        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|     989 | 8.5 Large Exposures | LE.90  | Currency                                        | M92        | Input must be 3 digit currency ISO code                                           |
|     990 | 8.5 Large Exposures | LE.90  | Maturity Date                                   | N92        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|     991 | 8.5 Large Exposures | LE.91  | LE Ref                                          | D93        | LE approval reference up to 15 characters, or 'NONE'                              |
|     992 | 8.5 Large Exposures | LE.91  | Connected to bank?                              | E93        | Input must be Y or N                                                              |
|     993 | 8.5 Large Exposures | LE.91  | Outstanding Amount                              | F93        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     994 | 8.5 Large Exposures | LE.91  | Facility Amount                                 | G93        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     995 | 8.5 Large Exposures | LE.91  | Provision                                       | H93        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|     996 | 8.5 Large Exposures | LE.91  | Performing?                                     | I93        | Input must be Y or N                                                              |
|     997 | 8.5 Large Exposures | LE.91  | Parental Guarantee or  Loan Take-Over Agreement | J93        | Input must be Y or N                                                              |
|     998 | 8.5 Large Exposures | LE.91  | Collateral (Cash, Govt or  Other)               | K93        | Input must be text, between 2 and 50 characters                                   |
|     999 | 8.5 Large Exposures | LE.91  | Collateral Cover %                              | L93        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1000 | 8.5 Large Exposures | LE.91  | Currency                                        | M93        | Input must be 3 digit currency ISO code                                           |
|    1001 | 8.5 Large Exposures | LE.91  | Maturity Date                                   | N93        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1002 | 8.5 Large Exposures | LE.92  | LE Ref                                          | D94        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1003 | 8.5 Large Exposures | LE.92  | Connected to bank?                              | E94        | Input must be Y or N                                                              |
|    1004 | 8.5 Large Exposures | LE.92  | Outstanding Amount                              | F94        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1005 | 8.5 Large Exposures | LE.92  | Facility Amount                                 | G94        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1006 | 8.5 Large Exposures | LE.92  | Provision                                       | H94        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1007 | 8.5 Large Exposures | LE.92  | Performing?                                     | I94        | Input must be Y or N                                                              |
|    1008 | 8.5 Large Exposures | LE.92  | Parental Guarantee or  Loan Take-Over Agreement | J94        | Input must be Y or N                                                              |
|    1009 | 8.5 Large Exposures | LE.92  | Collateral (Cash, Govt or  Other)               | K94        | Input must be text, between 2 and 50 characters                                   |
|    1010 | 8.5 Large Exposures | LE.92  | Collateral Cover %                              | L94        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1011 | 8.5 Large Exposures | LE.92  | Currency                                        | M94        | Input must be 3 digit currency ISO code                                           |
|    1012 | 8.5 Large Exposures | LE.92  | Maturity Date                                   | N94        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1013 | 8.5 Large Exposures | LE.93  | LE Ref                                          | D95        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1014 | 8.5 Large Exposures | LE.93  | Connected to bank?                              | E95        | Input must be Y or N                                                              |
|    1015 | 8.5 Large Exposures | LE.93  | Outstanding Amount                              | F95        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1016 | 8.5 Large Exposures | LE.93  | Facility Amount                                 | G95        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1017 | 8.5 Large Exposures | LE.93  | Provision                                       | H95        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1018 | 8.5 Large Exposures | LE.93  | Performing?                                     | I95        | Input must be Y or N                                                              |
|    1019 | 8.5 Large Exposures | LE.93  | Parental Guarantee or  Loan Take-Over Agreement | J95        | Input must be Y or N                                                              |
|    1020 | 8.5 Large Exposures | LE.93  | Collateral (Cash, Govt or  Other)               | K95        | Input must be text, between 2 and 50 characters                                   |
|    1021 | 8.5 Large Exposures | LE.93  | Collateral Cover %                              | L95        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1022 | 8.5 Large Exposures | LE.93  | Currency                                        | M95        | Input must be 3 digit currency ISO code                                           |
|    1023 | 8.5 Large Exposures | LE.93  | Maturity Date                                   | N95        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1024 | 8.5 Large Exposures | LE.94  | LE Ref                                          | D96        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1025 | 8.5 Large Exposures | LE.94  | Connected to bank?                              | E96        | Input must be Y or N                                                              |
|    1026 | 8.5 Large Exposures | LE.94  | Outstanding Amount                              | F96        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1027 | 8.5 Large Exposures | LE.94  | Facility Amount                                 | G96        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1028 | 8.5 Large Exposures | LE.94  | Provision                                       | H96        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1029 | 8.5 Large Exposures | LE.94  | Performing?                                     | I96        | Input must be Y or N                                                              |
|    1030 | 8.5 Large Exposures | LE.94  | Parental Guarantee or  Loan Take-Over Agreement | J96        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1031 | 8.5 Large Exposures | LE.94  | Collateral (Cash, Govt or  Other)               | K96        | Input must be text, between 2 and 50 characters                                   |
|    1032 | 8.5 Large Exposures | LE.94  | Collateral Cover %                              | L96        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1033 | 8.5 Large Exposures | LE.94  | Currency                                        | M96        | Input must be 3 digit currency ISO code                                           |
|    1034 | 8.5 Large Exposures | LE.94  | Maturity Date                                   | N96        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1035 | 8.5 Large Exposures | LE.95  | LE Ref                                          | D97        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1036 | 8.5 Large Exposures | LE.95  | Connected to bank?                              | E97        | Input must be Y or N                                                              |
|    1037 | 8.5 Large Exposures | LE.95  | Outstanding Amount                              | F97        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1038 | 8.5 Large Exposures | LE.95  | Facility Amount                                 | G97        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1039 | 8.5 Large Exposures | LE.95  | Provision                                       | H97        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1040 | 8.5 Large Exposures | LE.95  | Performing?                                     | I97        | Input must be Y or N                                                              |
|    1041 | 8.5 Large Exposures | LE.95  | Parental Guarantee or  Loan Take-Over Agreement | J97        | Input must be Y or N                                                              |
|    1042 | 8.5 Large Exposures | LE.95  | Collateral (Cash, Govt or  Other)               | K97        | Input must be text, between 2 and 50 characters                                   |
|    1043 | 8.5 Large Exposures | LE.95  | Collateral Cover %                              | L97        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1044 | 8.5 Large Exposures | LE.95  | Currency                                        | M97        | Input must be 3 digit currency ISO code                                           |
|    1045 | 8.5 Large Exposures | LE.95  | Maturity Date                                   | N97        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1046 | 8.5 Large Exposures | LE.96  | LE Ref                                          | D98        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1047 | 8.5 Large Exposures | LE.96  | Connected to bank?                              | E98        | Input must be Y or N                                                              |
|    1048 | 8.5 Large Exposures | LE.96  | Outstanding Amount                              | F98        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1049 | 8.5 Large Exposures | LE.96  | Facility Amount                                 | G98        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1050 | 8.5 Large Exposures | LE.96  | Provision                                       | H98        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1051 | 8.5 Large Exposures | LE.96  | Performing?                                     | I98        | Input must be Y or N                                                              |
|    1052 | 8.5 Large Exposures | LE.96  | Parental Guarantee or  Loan Take-Over Agreement | J98        | Input must be Y or N                                                              |
|    1053 | 8.5 Large Exposures | LE.96  | Collateral (Cash, Govt or  Other)               | K98        | Input must be text, between 2 and 50 characters                                   |
|    1054 | 8.5 Large Exposures | LE.96  | Collateral Cover %                              | L98        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1055 | 8.5 Large Exposures | LE.96  | Currency                                        | M98        | Input must be 3 digit currency ISO code                                           |
|    1056 | 8.5 Large Exposures | LE.96  | Maturity Date                                   | N98        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1057 | 8.5 Large Exposures | LE.97  | LE Ref                                          | D99        | LE approval reference up to 15 characters, or 'NONE'                              |
|    1058 | 8.5 Large Exposures | LE.97  | Connected to bank?                              | E99        | Input must be Y or N                                                              |
|    1059 | 8.5 Large Exposures | LE.97  | Outstanding Amount                              | F99        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1060 | 8.5 Large Exposures | LE.97  | Facility Amount                                 | G99        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1061 | 8.5 Large Exposures | LE.97  | Provision                                       | H99        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1062 | 8.5 Large Exposures | LE.97  | Performing?                                     | I99        | Input must be Y or N                                                              |
|    1063 | 8.5 Large Exposures | LE.97  | Parental Guarantee or  Loan Take-Over Agreement | J99        | Input must be Y or N                                                              |
|    1064 | 8.5 Large Exposures | LE.97  | Collateral (Cash, Govt or  Other)               | K99        | Input must be text, between 2 and 50 characters                                   |
|    1065 | 8.5 Large Exposures | LE.97  | Collateral Cover %                              | L99        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1066 | 8.5 Large Exposures | LE.97  | Currency                                        | M99        | Input must be 3 digit currency ISO code                                           |
|    1067 | 8.5 Large Exposures | LE.97  | Maturity Date                                   | N99        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1068 | 8.5 Large Exposures | LE.98  | LE Ref                                          | D100       | LE approval reference up to 15 characters, or 'NONE'                              |
|    1069 | 8.5 Large Exposures | LE.98  | Connected to bank?                              | E100       | Input must be Y or N                                                              |
|    1070 | 8.5 Large Exposures | LE.98  | Outstanding Amount                              | F100       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1071 | 8.5 Large Exposures | LE.98  | Facility Amount                                 | G100       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1072 | 8.5 Large Exposures | LE.98  | Provision                                       | H100       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1073 | 8.5 Large Exposures | LE.98  | Performing?                                     | I100       | Input must be Y or N                                                              |
|    1074 | 8.5 Large Exposures | LE.98  | Parental Guarantee or  Loan Take-Over Agreement | J100       | Input must be Y or N                                                              |
|    1075 | 8.5 Large Exposures | LE.98  | Collateral (Cash, Govt or  Other)               | K100       | Input must be text, between 2 and 50 characters                                   |
|    1076 | 8.5 Large Exposures | LE.98  | Collateral Cover %                              | L100       | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1077 | 8.5 Large Exposures | LE.98  | Currency                                        | M100       | Input must be 3 digit currency ISO code                                           |
|    1078 | 8.5 Large Exposures | LE.98  | Maturity Date                                   | N100       | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1079 | 8.5 Large Exposures | LE.99  | LE Ref                                          | D101       | LE approval reference up to 15 characters, or 'NONE'                              |
|    1080 | 8.5 Large Exposures | LE.99  | Connected to bank?                              | E101       | Input must be Y or N                                                              |
|    1081 | 8.5 Large Exposures | LE.99  | Outstanding Amount                              | F101       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1082 | 8.5 Large Exposures | LE.99  | Facility Amount                                 | G101       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1083 | 8.5 Large Exposures | LE.99  | Provision                                       | H101       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1084 | 8.5 Large Exposures | LE.99  | Performing?                                     | I101       | Input must be Y or N                                                              |
|    1085 | 8.5 Large Exposures | LE.99  | Parental Guarantee or  Loan Take-Over Agreement | J101       | Input must be Y or N                                                              |
|    1086 | 8.5 Large Exposures | LE.99  | Collateral (Cash, Govt or  Other)               | K101       | Input must be text, between 2 and 50 characters                                   |
|    1087 | 8.5 Large Exposures | LE.99  | Collateral Cover %                              | L101       | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1088 | 8.5 Large Exposures | LE.99  | Currency                                        | M101       | Input must be 3 digit currency ISO code                                           |
|    1089 | 8.5 Large Exposures | LE.99  | Maturity Date                                   | N101       | Must be a date between 1/1/2019 and 31/12/2119                                    |
|    1090 | 8.5 Large Exposures | LE.100 | LE Ref                                          | D102       | LE approval reference up to 15 characters, or 'NONE'                              |
|    1091 | 8.5 Large Exposures | LE.100 | Connected to bank?                              | E102       | Input must be Y or N                                                              |
|    1092 | 8.5 Large Exposures | LE.100 | Outstanding Amount                              | F102       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|    1093 | 8.5 Large Exposures | LE.100 | Facility Amount                                 | G102       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1094 | 8.5 Large Exposures | LE.100 | Provision                                       | H102       | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|    1095 | 8.5 Large Exposures | LE.100 | Performing?                                     | I102       | Input must be Y or N                                                              |
|    1096 | 8.5 Large Exposures | LE.100 | Parental Guarantee or  Loan Take-Over Agreement | J102       | Input must be Y or N                                                              |
|    1097 | 8.5 Large Exposures | LE.100 | Collateral (Cash, Govt or  Other)               | K102       | Input must be text, between 2 and 50 characters                                   |
|    1098 | 8.5 Large Exposures | LE.100 | Collateral Cover %                              | L102       | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|    1099 | 8.5 Large Exposures | LE.100 | Currency                                        | M102       | Input must be 3 digit currency ISO code                                           |
|    1100 | 8.5 Large Exposures | LE.100 | Maturity Date                                   | N102       | Must be a date between 1/1/2019 and 31/12/2119                                    |