
## Guidance Note

## Validation and verification of the '3.2 SAC OBS' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

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

|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|---------|-------------|--------|----------------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 3.2 SAC OBS | M.1    | Amount                           | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 3.2 SAC OBS | M.1    | After CRM risk weight: 0%        | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 3.2 SAC OBS | M.1    | After CRM risk weight: 20%       | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 3.2 SAC OBS | M.1    | After CRM risk weight: 35%       | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 3.2 SAC OBS | M.1    | After CRM risk weight: 50%       | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 3.2 SAC OBS | M.1    | After CRM risk weight: 75%       | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 3.2 SAC OBS | M.1    | After CRM risk weight: 100%      | J3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 3.2 SAC OBS | M.1    | After CRM risk weight: 150%      | K3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 3.2 SAC OBS | M.1    | After CRM: Other total amount    | L3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 3.2 SAC OBS | M.1    | After CRM: Other avg risk weight | M3          | Must be a whole number between 1 and 1,250                                 |
|      11 | 3.2 SAC OBS | M.2    | Amount                           | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 3.2 SAC OBS | M.2    | After CRM risk weight: 0%        | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 3.2 SAC OBS | M.2    | After CRM risk weight: 20%       | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      14 | 3.2 SAC OBS | M.2    | After CRM risk weight: 35%       | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 3.2 SAC OBS | M.2    | After CRM risk weight: 50%       | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 3.2 SAC OBS | M.2    | After CRM risk weight: 75%       | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 3.2 SAC OBS | M.2    | After CRM risk weight: 100%      | J4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 3.2 SAC OBS | M.2    | After CRM risk weight: 150%      | K4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 3.2 SAC OBS | M.2    | After CRM: Other total amount    | L4          | Must be blank                                                              |
|      20 | 3.2 SAC OBS | M.2    | After CRM: Other avg risk weight | M4          | Must be blank                                                              |
|      21 | 3.2 SAC OBS | M.3    | Amount                           | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 3.2 SAC OBS | M.3    | After CRM risk weight: 0%        | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 3.2 SAC OBS | M.3    | After CRM risk weight: 20%       | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 3.2 SAC OBS | M.3    | After CRM risk weight: 35%       | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 3.2 SAC OBS | M.3    | After CRM risk weight: 50%       | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 3.2 SAC OBS | M.3    | After CRM risk weight: 75%       | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 3.2 SAC OBS | M.3    | After CRM risk weight: 100%      | J5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 3.2 SAC OBS | M.3    | After CRM risk weight: 150%      | K5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 3.2 SAC OBS | M.3    | After CRM: Other total amount    | L5          | Must be blank                                                              |
|      30 | 3.2 SAC OBS | M.3    | After CRM: Other avg risk weight | M5          | Must be blank                                                              |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      31 | 3.2 SAC OBS | M.4    | Amount                           | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 3.2 SAC OBS | M.4    | After CRM risk weight: 0%        | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 3.2 SAC OBS | M.4    | After CRM risk weight: 20%       | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 3.2 SAC OBS | M.4    | After CRM risk weight: 35%       | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 3.2 SAC OBS | M.4    | After CRM risk weight: 50%       | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 3.2 SAC OBS | M.4    | After CRM risk weight: 75%       | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 3.2 SAC OBS | M.4    | After CRM risk weight: 100%      | J6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 3.2 SAC OBS | M.4    | After CRM risk weight: 150%      | K6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 3.2 SAC OBS | M.4    | After CRM: Other total amount    | L6          | Must be blank                                                              |
|      40 | 3.2 SAC OBS | M.4    | After CRM: Other avg risk weight | M6          | Must be blank                                                              |
|      41 | 3.2 SAC OBS | M.5    | Amount                           | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 3.2 SAC OBS | M.5    | After CRM risk weight: 0%        | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 3.2 SAC OBS | M.5    | After CRM risk weight: 20%       | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 3.2 SAC OBS | M.5    | After CRM risk weight: 35%       | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 3.2 SAC OBS | M.5    | After CRM risk weight: 50%       | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 3.2 SAC OBS | M.5    | After CRM risk weight: 75%       | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 3.2 SAC OBS | M.5    | After CRM risk weight: 100%      | J7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      48 | 3.2 SAC OBS | M.5    | After CRM risk weight: 150%      | K7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 3.2 SAC OBS | M.5    | After CRM: Other total amount    | L7          | Must be blank                                                              |
|      50 | 3.2 SAC OBS | M.5    | After CRM: Other avg risk weight | M7          | Must be blank                                                              |
|      51 | 3.2 SAC OBS | M.6    | Amount                           | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 3.2 SAC OBS | M.6    | After CRM risk weight: 0%        | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 3.2 SAC OBS | M.6    | After CRM risk weight: 20%       | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 3.2 SAC OBS | M.6    | After CRM risk weight: 35%       | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 3.2 SAC OBS | M.6    | After CRM risk weight: 50%       | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 3.2 SAC OBS | M.6    | After CRM risk weight: 75%       | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 3.2 SAC OBS | M.6    | After CRM risk weight: 100%      | J8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 3.2 SAC OBS | M.6    | After CRM risk weight: 150%      | K8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 3.2 SAC OBS | M.6    | After CRM: Other total amount    | L8          | Must be blank                                                              |
|      60 | 3.2 SAC OBS | M.6    | After CRM: Other avg risk weight | M8          | Must be blank                                                              |
|      61 | 3.2 SAC OBS | M.7    | Amount                           | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 3.2 SAC OBS | M.7    | After CRM risk weight: 0%        | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 3.2 SAC OBS | M.7    | After CRM risk weight: 20%       | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 3.2 SAC OBS | M.7    | After CRM risk weight: 35%       | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      65 | 3.2 SAC OBS | M.7    | After CRM risk weight: 50%       | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 3.2 SAC OBS | M.7    | After CRM risk weight: 75%       | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 3.2 SAC OBS | M.7    | After CRM risk weight: 100%      | J9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 3.2 SAC OBS | M.7    | After CRM risk weight: 150%      | K9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 3.2 SAC OBS | M.7    | After CRM: Other total amount    | L9          | Must be blank                                                              |
|      70 | 3.2 SAC OBS | M.7    | After CRM: Other avg risk weight | M9          | Must be blank                                                              |
|      71 | 3.2 SAC OBS | M.8    | Amount                           | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 3.2 SAC OBS | M.8    | After CRM risk weight: 0%        | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 3.2 SAC OBS | M.8    | After CRM risk weight: 20%       | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 3.2 SAC OBS | M.8    | After CRM risk weight: 35%       | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 3.2 SAC OBS | M.8    | After CRM risk weight: 50%       | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 3.2 SAC OBS | M.8    | After CRM risk weight: 75%       | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 3.2 SAC OBS | M.8    | After CRM risk weight: 100%      | J10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 3.2 SAC OBS | M.8    | After CRM risk weight: 150%      | K10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 3.2 SAC OBS | M.8    | After CRM: Other total amount    | L10         | Must be blank                                                              |
|      80 | 3.2 SAC OBS | M.8    | After CRM: Other avg risk weight | M10         | Must be blank                                                              |
|      81 | 3.2 SAC OBS | M.9a   | Amount                           | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      82 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 0%        | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 20%       | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 35%       | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 50%       | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 75%       | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 100%      | J11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 3.2 SAC OBS | M.9a   | After CRM risk weight: 150%      | K11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 3.2 SAC OBS | M.9a   | After CRM: Other total amount    | L11         | Must be blank                                                              |
|      90 | 3.2 SAC OBS | M.9a   | After CRM: Other avg risk weight | M11         | Must be blank                                                              |
|      91 | 3.2 SAC OBS | M.9b   | Amount                           | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 0%        | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 20%       | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 35%       | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 50%       | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 75%       | I12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 100%      | J12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 3.2 SAC OBS | M.9b   | After CRM risk weight: 150%      | K12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                           | Cell  Ref   | Validation Message                                                         |
|      99 | 3.2 SAC OBS | M.9b   | After CRM: Other total amount    | L12         | Must be blank                                                              |
|     100 | 3.2 SAC OBS | M.9b   | After CRM: Other avg risk weight | M12         | Must be blank                                                              |
|     101 | 3.2 SAC OBS | M.9c   | Amount                           | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 3.2 SAC OBS | M.9c   | Credit Equivalent Amount         | D13         | Must be blank                                                              |
|     103 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 0%        | E13         | Must be blank                                                              |
|     104 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 20%       | F13         | Must be blank                                                              |
|     105 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 35%       | G13         | Must be blank                                                              |
|     106 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 50%       | H13         | Must be blank                                                              |
|     107 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 75%       | I13         | Must be blank                                                              |
|     108 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 100%      | J13         | Must be blank                                                              |
|     109 | 3.2 SAC OBS | M.9c   | After CRM risk weight: 150%      | K13         | Must be blank                                                              |
|     110 | 3.2 SAC OBS | M.9c   | After CRM: Other total amount    | L13         | Must be blank                                                              |
|     111 | 3.2 SAC OBS | M.9c   | After CRM: Other avg risk weight | M13         | Must be blank                                                              |
|     112 | 3.2 SAC OBS | M.9c   | Risk Weighted Amount             | N13         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet       | Item   | Column                   | Cell  Ref   | Excel                                                            |
|---------|-------------|--------|--------------------------|-------------|------------------------------------------------------------------|
|     113 | 3.2 SAC OBS | M.1    | Credit Equivalent Amount | D3          | =ROUND(C3*100%,0)                                                |
|     114 | 3.2 SAC OBS | M.1    | Risk Weighted Amount     | N3          | =ROUND(F3*20%+G3*35%+H3*50%+I3*75%+J3*100%+K3*150%+L3*M3/1 00,0) |
|     115 | 3.2 SAC OBS | M.2    | Credit Equivalent Amount | D4          | =ROUND(C4*50%,0)                                                 |
|     116 | 3.2 SAC OBS | M.2    | Risk Weighted Amount     | N4          | =ROUND(F4*20%+G4*35%+H4*50%+I4*75%+J4*100%+K4*150%,0)            |
|     117 | 3.2 SAC OBS | M.3    | Credit Equivalent Amount | D5          | =ROUND(C5*20%,0)                                                 |
|     118 | 3.2 SAC OBS | M.3    | Risk Weighted Amount     | N5          | =ROUND(F5*20%+G5*35%+H5*50%+I5*75%+J5*100%+K5*150%,0)            |
|     119 | 3.2 SAC OBS | M.4    | Credit Equivalent Amount | D6          | =ROUND(C6*100%,0)                                                |
|     120 | 3.2 SAC OBS | M.4    | Risk Weighted Amount     | N6          | =ROUND(F6*20%+G6*35%+H6*50%+I6*75%+J6*100%+K6*150%,0)            |
|     121 | 3.2 SAC OBS | M.5    | Credit Equivalent Amount | D7          | =ROUND(C7*100%,0)                                                |
|     122 | 3.2 SAC OBS | M.5    | Risk Weighted Amount     | N7          | =ROUND(F7*20%+G7*35%+H7*50%+I7*75%+J7*100%+K7*150%,0)            |
|     123 | 3.2 SAC OBS | M.6    | Credit Equivalent Amount | D8          | =ROUND(C8*100%,0)                                                |
|     124 | 3.2 SAC OBS | M.6    | Risk Weighted Amount     | N8          | =ROUND(F8*20%+G8*35%+H8*50%+I8*75%+J8*100%+K8*150%,0)            |
|     125 | 3.2 SAC OBS | M.7    | Credit Equivalent Amount | D9          | =ROUND(C9*100%,0)                                                |
|   Check | Sheet       | Item   | Column                   | Cell  Ref   | Excel                                                       |
|     126 | 3.2 SAC OBS | M.7    | Risk Weighted Amount     | N9          | =ROUND(F9*20%+G9*35%+H9*50%+I9*75%+J9*100%+K9*150%,0)       |
|     127 | 3.2 SAC OBS | M.8    | Credit Equivalent Amount | D10         | =ROUND(C10*50%,0)                                           |
|     128 | 3.2 SAC OBS | M.8    | Risk Weighted Amount     | N10         | =ROUND(F10*20%+G10*35%+H10*50%+I10*75%+J10*100%+K10*150%,0) |
|     129 | 3.2 SAC OBS | M.9a   | Credit Equivalent Amount | D11         | =ROUND(C11*20%,0)                                           |
|     130 | 3.2 SAC OBS | M.9a   | Risk Weighted Amount     | N11         | =ROUND(F11*20%+G11*35%+H11*50%+I11*75%+J11*100%+K11*150%,0) |
|     131 | 3.2 SAC OBS | M.9b   | Credit Equivalent Amount | D12         | =ROUND(C12*50%,0)                                           |
|     132 | 3.2 SAC OBS | M.9b   | Risk Weighted Amount     | N12         | =ROUND(F12*20%+G12*35%+H12*50%+I12*75%+J12*100%+K12*150%,0) |