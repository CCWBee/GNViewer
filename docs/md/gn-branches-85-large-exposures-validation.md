
## Guidance Note

## Validation and verification of the '8.5 Large Exposures' Sheet

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

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook).

|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|---------|---------------------|--------|-------------------------------------------------|------------|-----------------------------------------------------------------------------------|
|       1 | 8.5 Large Exposures | LE.1   | Connected to bank?                              | D3         | Input must be Y or N                                                              |
|       2 | 8.5 Large Exposures | LE.1   | Outstanding Amount                              | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       3 | 8.5 Large Exposures | LE.1   | Facility Amount                                 | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       4 | 8.5 Large Exposures | LE.1   | Provision                                       | G3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|       5 | 8.5 Large Exposures | LE.1   | Performing?                                     | H3         | Input must be Y or N                                                              |
|       6 | 8.5 Large Exposures | LE.1   | Parental Guarantee or  Loan Take-Over Agreement | I3         | Input must be Y or N                                                              |
|       7 | 8.5 Large Exposures | LE.1   | Collateral (Cash, Govt or  Other)               | J3         | Input must be text, between 2 and 50 characters                                   |
|       8 | 8.5 Large Exposures | LE.1   | Collateral Cover %                              | K3         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|       9 | 8.5 Large Exposures | LE.1   | Currency                                        | L3         | Input must be 3 digit currency ISO code                                           |
|      10 | 8.5 Large Exposures | LE.1   | Maturity Date                                   | M3         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      11 | 8.5 Large Exposures | LE.2   | Connected to bank?                              | D4         | Input must be Y or N                                                              |
|      12 | 8.5 Large Exposures | LE.2   | Outstanding Amount                              | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      13 | 8.5 Large Exposures | LE.2   | Facility Amount                                 | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      14 | 8.5 Large Exposures | LE.2   | Provision                                       | G4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      15 | 8.5 Large Exposures | LE.2   | Performing?                                     | H4         | Input must be Y or N                                                              |
|      16 | 8.5 Large Exposures | LE.2   | Parental Guarantee or  Loan Take-Over Agreement | I4         | Input must be Y or N                                                              |
|      17 | 8.5 Large Exposures | LE.2   | Collateral (Cash, Govt or  Other)               | J4         | Input must be text, between 2 and 50 characters                                   |
|      18 | 8.5 Large Exposures | LE.2   | Collateral Cover %                              | K4         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      19 | 8.5 Large Exposures | LE.2   | Currency                                        | L4         | Input must be 3 digit currency ISO code                                           |
|      20 | 8.5 Large Exposures | LE.2   | Maturity Date                                   | M4         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      21 | 8.5 Large Exposures | LE.3   | Connected to bank?                              | D5         | Input must be Y or N                                                              |
|      22 | 8.5 Large Exposures | LE.3   | Outstanding Amount                              | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      23 | 8.5 Large Exposures | LE.3   | Facility Amount                                 | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      24 | 8.5 Large Exposures | LE.3   | Provision                                       | G5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      25 | 8.5 Large Exposures | LE.3   | Performing?                                     | H5         | Input must be Y or N                                                              |
|      26 | 8.5 Large Exposures | LE.3   | Parental Guarantee or  Loan Take-Over Agreement | I5         | Input must be Y or N                                                              |
|      27 | 8.5 Large Exposures | LE.3   | Collateral (Cash, Govt or  Other)               | J5         | Input must be text, between 2 and 50 characters                                   |
|      28 | 8.5 Large Exposures | LE.3   | Collateral Cover %                              | K5         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      29 | 8.5 Large Exposures | LE.3   | Currency                                        | L5         | Input must be 3 digit currency ISO code                                           |
|      30 | 8.5 Large Exposures | LE.3   | Maturity Date                                   | M5         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      31 | 8.5 Large Exposures | LE.4   | Connected to bank?                              | D6         | Input must be Y or N                                                              |
|      32 | 8.5 Large Exposures | LE.4   | Outstanding Amount                              | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      33 | 8.5 Large Exposures | LE.4   | Facility Amount                                 | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      34 | 8.5 Large Exposures | LE.4   | Provision                                       | G6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      35 | 8.5 Large Exposures | LE.4   | Performing?                                     | H6         | Input must be Y or N                                                              |
|      36 | 8.5 Large Exposures | LE.4   | Parental Guarantee or  Loan Take-Over Agreement | I6         | Input must be Y or N                                                              |
|      37 | 8.5 Large Exposures | LE.4   | Collateral (Cash, Govt or  Other)               | J6         | Input must be text, between 2 and 50 characters                                   |
|      38 | 8.5 Large Exposures | LE.4   | Collateral Cover %                              | K6         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      39 | 8.5 Large Exposures | LE.4   | Currency                                        | L6         | Input must be 3 digit currency ISO code                                           |
|      40 | 8.5 Large Exposures | LE.4   | Maturity Date                                   | M6         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      41 | 8.5 Large Exposures | LE.5   | Connected to bank?                              | D7         | Input must be Y or N                                                              |
|      42 | 8.5 Large Exposures | LE.5   | Outstanding Amount                              | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      43 | 8.5 Large Exposures | LE.5   | Facility Amount                                 | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      44 | 8.5 Large Exposures | LE.5   | Provision                                       | G7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      45 | 8.5 Large Exposures | LE.5   | Performing?                                     | H7         | Input must be Y or N                                                              |
|      46 | 8.5 Large Exposures | LE.5   | Parental Guarantee or  Loan Take-Over Agreement | I7         | Input must be Y or N                                                              |
|      47 | 8.5 Large Exposures | LE.5   | Collateral (Cash, Govt or  Other)               | J7         | Input must be text, between 2 and 50 characters                                   |
|      48 | 8.5 Large Exposures | LE.5   | Collateral Cover %                              | K7         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      49 | 8.5 Large Exposures | LE.5   | Currency                                        | L7         | Input must be 3 digit currency ISO code                                           |
|      50 | 8.5 Large Exposures | LE.5   | Maturity Date                                   | M7         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      51 | 8.5 Large Exposures | LE.6   | Connected to bank?                              | D8         | Input must be Y or N                                                              |
|      52 | 8.5 Large Exposures | LE.6   | Outstanding Amount                              | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      53 | 8.5 Large Exposures | LE.6   | Facility Amount                                 | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      54 | 8.5 Large Exposures | LE.6   | Provision                                       | G8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      55 | 8.5 Large Exposures | LE.6   | Performing?                                     | H8         | Input must be Y or N                                                              |
|      56 | 8.5 Large Exposures | LE.6   | Parental Guarantee or  Loan Take-Over Agreement | I8         | Input must be Y or N                                                              |
|      57 | 8.5 Large Exposures | LE.6   | Collateral (Cash, Govt or  Other)               | J8         | Input must be text, between 2 and 50 characters                                   |
|      58 | 8.5 Large Exposures | LE.6   | Collateral Cover %                              | K8         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      59 | 8.5 Large Exposures | LE.6   | Currency                                        | L8         | Input must be 3 digit currency ISO code                                           |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      60 | 8.5 Large Exposures | LE.6   | Maturity Date                                   | M8         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      61 | 8.5 Large Exposures | LE.7   | Connected to bank?                              | D9         | Input must be Y or N                                                              |
|      62 | 8.5 Large Exposures | LE.7   | Outstanding Amount                              | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      63 | 8.5 Large Exposures | LE.7   | Facility Amount                                 | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      64 | 8.5 Large Exposures | LE.7   | Provision                                       | G9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      65 | 8.5 Large Exposures | LE.7   | Performing?                                     | H9         | Input must be Y or N                                                              |
|      66 | 8.5 Large Exposures | LE.7   | Parental Guarantee or  Loan Take-Over Agreement | I9         | Input must be Y or N                                                              |
|      67 | 8.5 Large Exposures | LE.7   | Collateral (Cash, Govt or  Other)               | J9         | Input must be text, between 2 and 50 characters                                   |
|      68 | 8.5 Large Exposures | LE.7   | Collateral Cover %                              | K9         | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      69 | 8.5 Large Exposures | LE.7   | Currency                                        | L9         | Input must be 3 digit currency ISO code                                           |
|      70 | 8.5 Large Exposures | LE.7   | Maturity Date                                   | M9         | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      71 | 8.5 Large Exposures | LE.8   | Connected to bank?                              | D10        | Input must be Y or N                                                              |
|      72 | 8.5 Large Exposures | LE.8   | Outstanding Amount                              | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      73 | 8.5 Large Exposures | LE.8   | Facility Amount                                 | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      74 | 8.5 Large Exposures | LE.8   | Provision                                       | G10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      75 | 8.5 Large Exposures | LE.8   | Performing?                                     | H10        | Input must be Y or N                                                              |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      76 | 8.5 Large Exposures | LE.8   | Parental Guarantee or  Loan Take-Over Agreement | I10        | Input must be Y or N                                                              |
|      77 | 8.5 Large Exposures | LE.8   | Collateral (Cash, Govt or  Other)               | J10        | Input must be text, between 2 and 50 characters                                   |
|      78 | 8.5 Large Exposures | LE.8   | Collateral Cover %                              | K10        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      79 | 8.5 Large Exposures | LE.8   | Currency                                        | L10        | Input must be 3 digit currency ISO code                                           |
|      80 | 8.5 Large Exposures | LE.8   | Maturity Date                                   | M10        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|      81 | 8.5 Large Exposures | LE.9   | Connected to bank?                              | D11        | Input must be Y or N                                                              |
|      82 | 8.5 Large Exposures | LE.9   | Outstanding Amount                              | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      83 | 8.5 Large Exposures | LE.9   | Facility Amount                                 | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      84 | 8.5 Large Exposures | LE.9   | Provision                                       | G11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      85 | 8.5 Large Exposures | LE.9   | Performing?                                     | H11        | Input must be Y or N                                                              |
|      86 | 8.5 Large Exposures | LE.9   | Parental Guarantee or  Loan Take-Over Agreement | I11        | Input must be Y or N                                                              |
|      87 | 8.5 Large Exposures | LE.9   | Collateral (Cash, Govt or  Other)               | J11        | Input must be text, between 2 and 50 characters                                   |
|      88 | 8.5 Large Exposures | LE.9   | Collateral Cover %                              | K11        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      89 | 8.5 Large Exposures | LE.9   | Currency                                        | L11        | Input must be 3 digit currency ISO code                                           |
|      90 | 8.5 Large Exposures | LE.9   | Maturity Date                                   | M11        | Must be a date between 1/1/2019 and 31/12/2119                                    |
|   Check | Sheet               | Item   | Column                                          | Cell Ref   | Validation Message                                                                |
|      91 | 8.5 Large Exposures | LE.10  | Connected to bank?                              | D12        | Input must be Y or N                                                              |
|      92 | 8.5 Large Exposures | LE.10  | Outstanding Amount                              | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      93 | 8.5 Large Exposures | LE.10  | Facility Amount                                 | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      94 | 8.5 Large Exposures | LE.10  | Provision                                       | G12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000        |
|      95 | 8.5 Large Exposures | LE.10  | Performing?                                     | H12        | Input must be Y or N                                                              |
|      96 | 8.5 Large Exposures | LE.10  | Parental Guarantee or  Loan Take-Over Agreement | I12        | Input must be Y or N                                                              |
|      97 | 8.5 Large Exposures | LE.10  | Collateral (Cash, Govt or  Other)               | J12        | Input must be text, between 2 and 50 characters                                   |
|      98 | 8.5 Large Exposures | LE.10  | Collateral Cover %                              | K12        | Input must be a percentage between 0 and 1,000%- enter 1,000% if exceeds  maximum |
|      99 | 8.5 Large Exposures | LE.10  | Currency                                        | L12        | Input must be 3 digit currency ISO code                                           |
|     100 | 8.5 Large Exposures | LE.10  | Maturity Date                                   | M12        | Must be a date between 1/1/2019 and 31/12/2119                                    |