
## Guidance Note

## Validation and verification of the '9.10 Directors Interests' Sheet

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

|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|---------|--------------------------|--------|------------------|------------|-------------------------------------------------------------|
|       1 | 9.10 Directors Interests | Dir.1  | Residence        | F3         | Input must be 2 digit country ISO code                      |
|       2 | 9.10 Directors Interests | Dir.1  | Shares in Parent | G3         | Input must be a whole number in the range 0 and 999,999,999 |
|       3 | 9.10 Directors Interests | Dir.1  | Shares in Bank   | H3         | Input must be a whole number in the range 0 and 999,999,999 |
|       4 | 9.10 Directors Interests | Dir.1  | Contract         | I3         | Input must be Y , N or left blank                           |
|       5 | 9.10 Directors Interests | Dir.1  | Amount of Loans  | J3         | Input must be a whole number in the range 0 and 999,999,999 |
|       6 | 9.10 Directors Interests | Dir.2  | Residence        | F4         | Input must be 2 digit country ISO code                      |
|       7 | 9.10 Directors Interests | Dir.2  | Shares in Parent | G4         | Input must be a whole number in the range 0 and 999,999,999 |
|       8 | 9.10 Directors Interests | Dir.2  | Shares in Bank   | H4         | Input must be a whole number in the range 0 and 999,999,999 |
|       9 | 9.10 Directors Interests | Dir.2  | Contract         | I4         | Input must be Y , N or left blank                           |
|      10 | 9.10 Directors Interests | Dir.2  | Amount of Loans  | J4         | Input must be a whole number in the range 0 and 999,999,999 |
|      11 | 9.10 Directors Interests | Dir.3  | Residence        | F5         | Input must be 2 digit country ISO code                      |
|      12 | 9.10 Directors Interests | Dir.3  | Shares in Parent | G5         | Input must be a whole number in the range 0 and 999,999,999 |
|      13 | 9.10 Directors Interests | Dir.3  | Shares in Bank   | H5         | Input must be a whole number in the range 0 and 999,999,999 |
|      14 | 9.10 Directors Interests | Dir.3  | Contract         | I5         | Input must be Y , N or left blank                           |
|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|      15 | 9.10 Directors Interests | Dir.3  | Amount of Loans  | J5         | Input must be a whole number in the range 0 and 999,999,999 |
|      16 | 9.10 Directors Interests | Dir.4  | Residence        | F6         | Input must be 2 digit country ISO code                      |
|      17 | 9.10 Directors Interests | Dir.4  | Shares in Parent | G6         | Input must be a whole number in the range 0 and 999,999,999 |
|      18 | 9.10 Directors Interests | Dir.4  | Shares in Bank   | H6         | Input must be a whole number in the range 0 and 999,999,999 |
|      19 | 9.10 Directors Interests | Dir.4  | Contract         | I6         | Input must be Y , N or left blank                           |
|      20 | 9.10 Directors Interests | Dir.4  | Amount of Loans  | J6         | Input must be a whole number in the range 0 and 999,999,999 |
|      21 | 9.10 Directors Interests | Dir.5  | Residence        | F7         | Input must be 2 digit country ISO code                      |
|      22 | 9.10 Directors Interests | Dir.5  | Shares in Parent | G7         | Input must be a whole number in the range 0 and 999,999,999 |
|      23 | 9.10 Directors Interests | Dir.5  | Shares in Bank   | H7         | Input must be a whole number in the range 0 and 999,999,999 |
|      24 | 9.10 Directors Interests | Dir.5  | Contract         | I7         | Input must be Y , N or left blank                           |
|      25 | 9.10 Directors Interests | Dir.5  | Amount of Loans  | J7         | Input must be a whole number in the range 0 and 999,999,999 |
|      26 | 9.10 Directors Interests | Dir.6  | Residence        | F8         | Input must be 2 digit country ISO code                      |
|      27 | 9.10 Directors Interests | Dir.6  | Shares in Parent | G8         | Input must be a whole number in the range 0 and 999,999,999 |
|      28 | 9.10 Directors Interests | Dir.6  | Shares in Bank   | H8         | Input must be a whole number in the range 0 and 999,999,999 |
|      29 | 9.10 Directors Interests | Dir.6  | Contract         | I8         | Input must be Y , N or left blank                           |
|      30 | 9.10 Directors Interests | Dir.6  | Amount of Loans  | J8         | Input must be a whole number in the range 0 and 999,999,999 |
|      31 | 9.10 Directors Interests | Dir.7  | Residence        | F9         | Input must be 2 digit country ISO code                      |
|      32 | 9.10 Directors Interests | Dir.7  | Shares in Parent | G9         | Input must be a whole number in the range 0 and 999,999,999 |
|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|      33 | 9.10 Directors Interests | Dir.7  | Shares in Bank   | H9         | Input must be a whole number in the range 0 and 999,999,999 |
|      34 | 9.10 Directors Interests | Dir.7  | Contract         | I9         | Input must be Y , N or left blank                           |
|      35 | 9.10 Directors Interests | Dir.7  | Amount of Loans  | J9         | Input must be a whole number in the range 0 and 999,999,999 |
|      36 | 9.10 Directors Interests | Dir.8  | Residence        | F10        | Input must be 2 digit country ISO code                      |
|      37 | 9.10 Directors Interests | Dir.8  | Shares in Parent | G10        | Input must be a whole number in the range 0 and 999,999,999 |
|      38 | 9.10 Directors Interests | Dir.8  | Shares in Bank   | H10        | Input must be a whole number in the range 0 and 999,999,999 |
|      39 | 9.10 Directors Interests | Dir.8  | Contract         | I10        | Input must be Y , N or left blank                           |
|      40 | 9.10 Directors Interests | Dir.8  | Amount of Loans  | J10        | Input must be a whole number in the range 0 and 999,999,999 |
|      41 | 9.10 Directors Interests | Dir.9  | Residence        | F11        | Input must be 2 digit country ISO code                      |
|      42 | 9.10 Directors Interests | Dir.9  | Shares in Parent | G11        | Input must be a whole number in the range 0 and 999,999,999 |
|      43 | 9.10 Directors Interests | Dir.9  | Shares in Bank   | H11        | Input must be a whole number in the range 0 and 999,999,999 |
|      44 | 9.10 Directors Interests | Dir.9  | Contract         | I11        | Input must be Y , N or left blank                           |
|      45 | 9.10 Directors Interests | Dir.9  | Amount of Loans  | J11        | Input must be a whole number in the range 0 and 999,999,999 |
|      46 | 9.10 Directors Interests | Dir.10 | Residence        | F12        | Input must be 2 digit country ISO code                      |
|      47 | 9.10 Directors Interests | Dir.10 | Shares in Parent | G12        | Input must be a whole number in the range 0 and 999,999,999 |
|      48 | 9.10 Directors Interests | Dir.10 | Shares in Bank   | H12        | Input must be a whole number in the range 0 and 999,999,999 |
|      49 | 9.10 Directors Interests | Dir.10 | Contract         | I12        | Input must be Y , N or left blank                           |
|      50 | 9.10 Directors Interests | Dir.10 | Amount of Loans  | J12        | Input must be a whole number in the range 0 and 999,999,999 |
|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|      51 | 9.10 Directors Interests | Dir.11 | Residence        | F13        | Input must be 2 digit country ISO code                      |
|      52 | 9.10 Directors Interests | Dir.11 | Shares in Parent | G13        | Input must be a whole number in the range 0 and 999,999,999 |
|      53 | 9.10 Directors Interests | Dir.11 | Shares in Bank   | H13        | Input must be a whole number in the range 0 and 999,999,999 |
|      54 | 9.10 Directors Interests | Dir.11 | Contract         | I13        | Input must be Y , N or left blank                           |
|      55 | 9.10 Directors Interests | Dir.11 | Amount of Loans  | J13        | Input must be a whole number in the range 0 and 999,999,999 |
|      56 | 9.10 Directors Interests | Dir.12 | Residence        | F14        | Input must be 2 digit country ISO code                      |
|      57 | 9.10 Directors Interests | Dir.12 | Shares in Parent | G14        | Input must be a whole number in the range 0 and 999,999,999 |
|      58 | 9.10 Directors Interests | Dir.12 | Shares in Bank   | H14        | Input must be a whole number in the range 0 and 999,999,999 |
|      59 | 9.10 Directors Interests | Dir.12 | Contract         | I14        | Input must be Y , N or left blank                           |
|      60 | 9.10 Directors Interests | Dir.12 | Amount of Loans  | J14        | Input must be a whole number in the range 0 and 999,999,999 |
|      61 | 9.10 Directors Interests | Dir.13 | Residence        | F15        | Input must be 2 digit country ISO code                      |
|      62 | 9.10 Directors Interests | Dir.13 | Shares in Parent | G15        | Input must be a whole number in the range 0 and 999,999,999 |
|      63 | 9.10 Directors Interests | Dir.13 | Shares in Bank   | H15        | Input must be a whole number in the range 0 and 999,999,999 |
|      64 | 9.10 Directors Interests | Dir.13 | Contract         | I15        | Input must be Y , N or left blank                           |
|      65 | 9.10 Directors Interests | Dir.13 | Amount of Loans  | J15        | Input must be a whole number in the range 0 and 999,999,999 |
|      66 | 9.10 Directors Interests | Dir.14 | Residence        | F16        | Input must be 2 digit country ISO code                      |
|      67 | 9.10 Directors Interests | Dir.14 | Shares in Parent | G16        | Input must be a whole number in the range 0 and 999,999,999 |
|      68 | 9.10 Directors Interests | Dir.14 | Shares in Bank   | H16        | Input must be a whole number in the range 0 and 999,999,999 |
|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|      69 | 9.10 Directors Interests | Dir.14 | Contract         | I16        | Input must be Y , N or left blank                           |
|      70 | 9.10 Directors Interests | Dir.14 | Amount of Loans  | J16        | Input must be a whole number in the range 0 and 999,999,999 |
|      71 | 9.10 Directors Interests | Dir.15 | Residence        | F17        | Input must be 2 digit country ISO code                      |
|      72 | 9.10 Directors Interests | Dir.15 | Shares in Parent | G17        | Input must be a whole number in the range 0 and 999,999,999 |
|      73 | 9.10 Directors Interests | Dir.15 | Shares in Bank   | H17        | Input must be a whole number in the range 0 and 999,999,999 |
|      74 | 9.10 Directors Interests | Dir.15 | Contract         | I17        | Input must be Y , N or left blank                           |
|      75 | 9.10 Directors Interests | Dir.15 | Amount of Loans  | J17        | Input must be a whole number in the range 0 and 999,999,999 |
|      76 | 9.10 Directors Interests | Dir.16 | Residence        | F18        | Input must be 2 digit country ISO code                      |
|      77 | 9.10 Directors Interests | Dir.16 | Shares in Parent | G18        | Input must be a whole number in the range 0 and 999,999,999 |
|      78 | 9.10 Directors Interests | Dir.16 | Shares in Bank   | H18        | Input must be a whole number in the range 0 and 999,999,999 |
|      79 | 9.10 Directors Interests | Dir.16 | Contract         | I18        | Input must be Y , N or left blank                           |
|      80 | 9.10 Directors Interests | Dir.16 | Amount of Loans  | J18        | Input must be a whole number in the range 0 and 999,999,999 |
|      81 | 9.10 Directors Interests | Dir.17 | Residence        | F19        | Input must be 2 digit country ISO code                      |
|      82 | 9.10 Directors Interests | Dir.17 | Shares in Parent | G19        | Input must be a whole number in the range 0 and 999,999,999 |
|      83 | 9.10 Directors Interests | Dir.17 | Shares in Bank   | H19        | Input must be a whole number in the range 0 and 999,999,999 |
|      84 | 9.10 Directors Interests | Dir.17 | Contract         | I19        | Input must be Y , N or left blank                           |
|      85 | 9.10 Directors Interests | Dir.17 | Amount of Loans  | J19        | Input must be a whole number in the range 0 and 999,999,999 |
|      86 | 9.10 Directors Interests | Dir.18 | Residence        | F20        | Input must be 2 digit country ISO code                      |
|   Check | Sheet                    | Item   | Column           | Cell Ref   | Validation Message                                          |
|      87 | 9.10 Directors Interests | Dir.18 | Shares in Parent | G20        | Input must be a whole number in the range 0 and 999,999,999 |
|      88 | 9.10 Directors Interests | Dir.18 | Shares in Bank   | H20        | Input must be a whole number in the range 0 and 999,999,999 |
|      89 | 9.10 Directors Interests | Dir.18 | Contract         | I20        | Input must be Y , N or left blank                           |
|      90 | 9.10 Directors Interests | Dir.18 | Amount of Loans  | J20        | Input must be a whole number in the range 0 and 999,999,999 |
|      91 | 9.10 Directors Interests | Dir.19 | Residence        | F21        | Input must be 2 digit country ISO code                      |
|      92 | 9.10 Directors Interests | Dir.19 | Shares in Parent | G21        | Input must be a whole number in the range 0 and 999,999,999 |
|      93 | 9.10 Directors Interests | Dir.19 | Shares in Bank   | H21        | Input must be a whole number in the range 0 and 999,999,999 |
|      94 | 9.10 Directors Interests | Dir.19 | Contract         | I21        | Input must be Y , N or left blank                           |
|      95 | 9.10 Directors Interests | Dir.19 | Amount of Loans  | J21        | Input must be a whole number in the range 0 and 999,999,999 |
|      96 | 9.10 Directors Interests | Dir.20 | Residence        | F22        | Input must be 2 digit country ISO code                      |
|      97 | 9.10 Directors Interests | Dir.20 | Shares in Parent | G22        | Input must be a whole number in the range 0 and 999,999,999 |
|      98 | 9.10 Directors Interests | Dir.20 | Shares in Bank   | H22        | Input must be a whole number in the range 0 and 999,999,999 |
|      99 | 9.10 Directors Interests | Dir.20 | Contract         | I22        | Input must be Y , N or left blank                           |
|     100 | 9.10 Directors Interests | Dir.20 | Amount of Loans  | J22        | Input must be a whole number in the range 0 and 999,999,999 |