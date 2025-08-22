
## Guidance Note

## Validation and verification of the '10.4 LMR History' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Revised September 2020 to reflect addition of two input rows

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

|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|---------|------------------|--------|-----------------------------------------------------|-------------|------------------------------------------------------------------------------------|
|       1 | 10.4 LMR History | MH.1   | Date                                                | C3          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|       2 | 10.4 LMR History | MH.1   | LMR                                                 | D3          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|       3 | 10.4 LMR History | MH.1   | Total HQLA                                          | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       4 | 10.4 LMR History | MH.1   | Total Capped Inflows                                | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       5 | 10.4 LMR History | MH.1   | Total Qualifying Inflows                            | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       6 | 10.4 LMR History | MH.1   | Total HQLA, capped inflows plus  qualifying inflows | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       7 | 10.4 LMR History | MH.1   | Total Outflows                                      | I3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       8 | 10.4 LMR History | MH.2   | Date                                                | C4          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|       9 | 10.4 LMR History | MH.2   | LMR                                                 | D4          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      10 | 10.4 LMR History | MH.2   | Total HQLA                                          | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      11 | 10.4 LMR History | MH.2   | Total Capped Inflows                                | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      12 | 10.4 LMR History | MH.2   | Total Qualifying Inflows                            | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      13 | 10.4 LMR History | MH.2   | Total HQLA, capped inflows plus  qualifying inflows | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      14 | 10.4 LMR History | MH.2   | Total Outflows                                      | I4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      15 | 10.4 LMR History | MH.3   | Date                                                | C5          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      16 | 10.4 LMR History | MH.3   | LMR                                                 | D5          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      17 | 10.4 LMR History | MH.3   | Total HQLA                                          | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      18 | 10.4 LMR History | MH.3   | Total Capped Inflows                                | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      19 | 10.4 LMR History | MH.3   | Total Qualifying Inflows                            | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      20 | 10.4 LMR History | MH.3   | Total HQLA, capped inflows plus  qualifying inflows | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      21 | 10.4 LMR History | MH.3   | Total Outflows                                      | I5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      22 | 10.4 LMR History | MH.4   | Date                                                | C6          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      23 | 10.4 LMR History | MH.4   | LMR                                                 | D6          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      24 | 10.4 LMR History | MH.4   | Total HQLA                                          | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      25 | 10.4 LMR History | MH.4   | Total Capped Inflows                                | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      26 | 10.4 LMR History | MH.4   | Total Qualifying Inflows                            | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      27 | 10.4 LMR History | MH.4   | Total HQLA, capped inflows plus  qualifying inflows | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      28 | 10.4 LMR History | MH.4   | Total Outflows                                      | I6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      29 | 10.4 LMR History | MH.5   | Date                                                | C7          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      30 | 10.4 LMR History | MH.5   | LMR                                                 | D7          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      31 | 10.4 LMR History | MH.5   | Total HQLA                                          | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      32 | 10.4 LMR History | MH.5   | Total Capped Inflows                                | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      33 | 10.4 LMR History | MH.5   | Total Qualifying Inflows                            | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      34 | 10.4 LMR History | MH.5   | Total HQLA, capped inflows plus  qualifying inflows | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      35 | 10.4 LMR History | MH.5   | Total Outflows                                      | I7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      36 | 10.4 LMR History | MH.6   | Date                                                | C8          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      37 | 10.4 LMR History | MH.6   | LMR                                                 | D8          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      38 | 10.4 LMR History | MH.6   | Total HQLA                                          | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      39 | 10.4 LMR History | MH.6   | Total Capped Inflows                                | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      40 | 10.4 LMR History | MH.6   | Total Qualifying Inflows                            | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      41 | 10.4 LMR History | MH.6   | Total HQLA, capped inflows plus  qualifying inflows | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      42 | 10.4 LMR History | MH.6   | Total Outflows                                      | I8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      43 | 10.4 LMR History | MH.7   | Date                                                | C9          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      44 | 10.4 LMR History | MH.7   | LMR                                                 | D9          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      45 | 10.4 LMR History | MH.7   | Total HQLA                                          | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      46 | 10.4 LMR History | MH.7   | Total Capped Inflows                                | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      47 | 10.4 LMR History | MH.7   | Total Qualifying Inflows                            | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      48 | 10.4 LMR History | MH.7   | Total HQLA, capped inflows plus  qualifying inflows | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      49 | 10.4 LMR History | MH.7   | Total Outflows                                      | I9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      50 | 10.4 LMR History | MH.8   | Date                                                | C10         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      51 | 10.4 LMR History | MH.8   | LMR                                                 | D10         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      52 | 10.4 LMR History | MH.8   | Total HQLA                                          | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      53 | 10.4 LMR History | MH.8   | Total Capped Inflows                                | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      54 | 10.4 LMR History | MH.8   | Total Qualifying Inflows                            | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      55 | 10.4 LMR History | MH.8   | Total HQLA, capped inflows plus  qualifying inflows | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      56 | 10.4 LMR History | MH.8   | Total Outflows                                      | I10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      57 | 10.4 LMR History | MH.9   | Date                                                | C11         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      58 | 10.4 LMR History | MH.9   | LMR                                                 | D11         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      59 | 10.4 LMR History | MH.9   | Total HQLA                                          | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      60 | 10.4 LMR History | MH.9   | Total Capped Inflows                                | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      61 | 10.4 LMR History | MH.9   | Total Qualifying Inflows                            | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      62 | 10.4 LMR History | MH.9   | Total HQLA, capped inflows plus  qualifying inflows | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      63 | 10.4 LMR History | MH.9   | Total Outflows                                      | I11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      64 | 10.4 LMR History | MH.10  | Date                                                | C12         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      65 | 10.4 LMR History | MH.10  | LMR                                                 | D12         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      66 | 10.4 LMR History | MH.10  | Total HQLA                                          | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      67 | 10.4 LMR History | MH.10  | Total Capped Inflows                                | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      68 | 10.4 LMR History | MH.10  | Total Qualifying Inflows                            | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      69 | 10.4 LMR History | MH.10  | Total HQLA, capped inflows plus  qualifying inflows | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      70 | 10.4 LMR History | MH.10  | Total Outflows                                      | I12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      71 | 10.4 LMR History | MH.11  | Date                                                | C13         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      72 | 10.4 LMR History | MH.11  | LMR                                                 | D13         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      73 | 10.4 LMR History | MH.11  | Total HQLA                                          | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      74 | 10.4 LMR History | MH.11  | Total Capped Inflows                                | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      75 | 10.4 LMR History | MH.11  | Total Qualifying Inflows                            | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      76 | 10.4 LMR History | MH.11  | Total HQLA, capped inflows plus  qualifying inflows | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      77 | 10.4 LMR History | MH.11  | Total Outflows                                      | I13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      78 | 10.4 LMR History | MH.12  | Date                                                | C14         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      79 | 10.4 LMR History | MH.12  | LMR                                                 | D14         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      80 | 10.4 LMR History | MH.12  | Total HQLA                                          | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      81 | 10.4 LMR History | MH.12  | Total Capped Inflows                                | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      82 | 10.4 LMR History | MH.12  | Total Qualifying Inflows                            | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      83 | 10.4 LMR History | MH.12  | Total HQLA, capped inflows plus  qualifying inflows | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      84 | 10.4 LMR History | MH.12  | Total Outflows                                      | I14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      85 | 10.4 LMR History | MH.13  | Date                                                | C15         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      86 | 10.4 LMR History | MH.13  | LMR                                                 | D15         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      87 | 10.4 LMR History | MH.13  | Total HQLA                                          | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|      88 | 10.4 LMR History | MH.13  | Total Capped Inflows                                | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      89 | 10.4 LMR History | MH.13  | Total Qualifying Inflows                            | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      90 | 10.4 LMR History | MH.13  | Total HQLA, capped inflows plus  qualifying inflows | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      91 | 10.4 LMR History | MH.13  | Total Outflows                                      | I15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      92 | 10.4 LMR History | MH.14  | Date                                                | C16         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      93 | 10.4 LMR History | MH.14  | LMR                                                 | D16         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      94 | 10.4 LMR History | MH.14  | Total HQLA                                          | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      95 | 10.4 LMR History | MH.14  | Total Capped Inflows                                | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      96 | 10.4 LMR History | MH.14  | Total Qualifying Inflows                            | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      97 | 10.4 LMR History | MH.14  | Total HQLA, capped inflows plus  qualifying inflows | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      98 | 10.4 LMR History | MH.14  | Total Outflows                                      | I16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      99 | 10.4 LMR History | MH.15  | Date                                                | C17         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     100 | 10.4 LMR History | MH.15  | LMR                                                 | D17         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     101 | 10.4 LMR History | MH.15  | Total HQLA                                          | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     102 | 10.4 LMR History | MH.15  | Total Capped Inflows                                | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     103 | 10.4 LMR History | MH.15  | Total Qualifying Inflows                            | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     104 | 10.4 LMR History | MH.15  | Total HQLA, capped inflows plus  qualifying inflows | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     105 | 10.4 LMR History | MH.15  | Total Outflows                                      | I17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     106 | 10.4 LMR History | MH.16  | Date                                                | C18         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     107 | 10.4 LMR History | MH.16  | LMR                                                 | D18         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     108 | 10.4 LMR History | MH.16  | Total HQLA                                          | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     109 | 10.4 LMR History | MH.16  | Total Capped Inflows                                | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     110 | 10.4 LMR History | MH.16  | Total Qualifying Inflows                            | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     111 | 10.4 LMR History | MH.16  | Total HQLA, capped inflows plus  qualifying inflows | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     112 | 10.4 LMR History | MH.16  | Total Outflows                                      | I18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     113 | 10.4 LMR History | MH.17  | Date                                                | C19         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     114 | 10.4 LMR History | MH.17  | LMR                                                 | D19         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     115 | 10.4 LMR History | MH.17  | Total HQLA                                          | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     116 | 10.4 LMR History | MH.17  | Total Capped Inflows                                | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     117 | 10.4 LMR History | MH.17  | Total Qualifying Inflows                            | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     118 | 10.4 LMR History | MH.17  | Total HQLA, capped inflows plus  qualifying inflows | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     119 | 10.4 LMR History | MH.17  | Total Outflows                                      | I19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     120 | 10.4 LMR History | MH.18  | Date                                                | C20         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     121 | 10.4 LMR History | MH.18  | LMR                                                 | D20         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     122 | 10.4 LMR History | MH.18  | Total HQLA                                          | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     123 | 10.4 LMR History | MH.18  | Total Capped Inflows                                | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     124 | 10.4 LMR History | MH.18  | Total Qualifying Inflows                            | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     125 | 10.4 LMR History | MH.18  | Total HQLA, capped inflows plus  qualifying inflows | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     126 | 10.4 LMR History | MH.18  | Total Outflows                                      | I20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     127 | 10.4 LMR History | MH.19  | Date                                                | C21         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     128 | 10.4 LMR History | MH.19  | LMR                                                 | D21         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     129 | 10.4 LMR History | MH.19  | Total HQLA                                          | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     130 | 10.4 LMR History | MH.19  | Total Capped Inflows                                | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     131 | 10.4 LMR History | MH.19  | Total Qualifying Inflows                            | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     132 | 10.4 LMR History | MH.19  | Total HQLA, capped inflows plus  qualifying inflows | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     133 | 10.4 LMR History | MH.19  | Total Outflows                                      | I21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     134 | 10.4 LMR History | MH.20  | Date                                                | C22         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     135 | 10.4 LMR History | MH.20  | LMR                                                 | D22         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     136 | 10.4 LMR History | MH.20  | Total HQLA                                          | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     137 | 10.4 LMR History | MH.20  | Total Capped Inflows                                | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     138 | 10.4 LMR History | MH.20  | Total Qualifying Inflows                            | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     139 | 10.4 LMR History | MH.20  | Total HQLA, capped inflows plus  qualifying inflows | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     140 | 10.4 LMR History | MH.20  | Total Outflows                                      | I22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     141 | 10.4 LMR History | MH.21  | Date                                                | C23         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     142 | 10.4 LMR History | MH.21  | LMR                                                 | D23         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     143 | 10.4 LMR History | MH.21  | Total HQLA                                          | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     144 | 10.4 LMR History | MH.21  | Total Capped Inflows                                | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     145 | 10.4 LMR History | MH.21  | Total Qualifying Inflows                            | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     146 | 10.4 LMR History | MH.21  | Total HQLA, capped inflows plus  qualifying inflows | H23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     147 | 10.4 LMR History | MH.21  | Total Outflows                                      | I23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     148 | 10.4 LMR History | MH.22  | Date                                                | C24         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     149 | 10.4 LMR History | MH.22  | LMR                                                 | D24         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     150 | 10.4 LMR History | MH.22  | Total HQLA                                          | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     151 | 10.4 LMR History | MH.22  | Total Capped Inflows                                | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     152 | 10.4 LMR History | MH.22  | Total Qualifying Inflows                            | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     153 | 10.4 LMR History | MH.22  | Total HQLA, capped inflows plus  qualifying inflows | H24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     154 | 10.4 LMR History | MH.22  | Total Outflows                                      | I24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     155 | 10.4 LMR History | MH.23  | Date                                                | C25         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     156 | 10.4 LMR History | MH.23  | LMR                                                 | D25         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     157 | 10.4 LMR History | MH.23  | Total HQLA                                          | E25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     158 | 10.4 LMR History | MH.23  | Total Capped Inflows                                | F25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     159 | 10.4 LMR History | MH.23  | Total Qualifying Inflows                            | G25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     160 | 10.4 LMR History | MH.23  | Total HQLA, capped inflows plus  qualifying inflows | H25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     161 | 10.4 LMR History | MH.23  | Total Outflows                                      | I25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     162 | 10.4 LMR History | MH.24  | Date                                                | C26         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     163 | 10.4 LMR History | MH.24  | LMR                                                 | D26         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     164 | 10.4 LMR History | MH.24  | Total HQLA                                          | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     165 | 10.4 LMR History | MH.24  | Total Capped Inflows                                | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     166 | 10.4 LMR History | MH.24  | Total Qualifying Inflows                            | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     167 | 10.4 LMR History | MH.24  | Total HQLA, capped inflows plus  qualifying inflows | H26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     168 | 10.4 LMR History | MH.24  | Total Outflows                                      | I26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     169 | 10.4 LMR History | MH.25  | Date                                                | C27         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     170 | 10.4 LMR History | MH.25  | LMR                                                 | D27         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     171 | 10.4 LMR History | MH.25  | Total HQLA                                          | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     172 | 10.4 LMR History | MH.25  | Total Capped Inflows                                | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     173 | 10.4 LMR History | MH.25  | Total Qualifying Inflows                            | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     174 | 10.4 LMR History | MH.25  | Total HQLA, capped inflows plus  qualifying inflows | H27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     175 | 10.4 LMR History | MH.25  | Total Outflows                                      | I27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     176 | 10.4 LMR History | MH.26  | Date                                                | C28         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     177 | 10.4 LMR History | MH.26  | LMR                                                 | D28         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     178 | 10.4 LMR History | MH.26  | Total HQLA                                          | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     179 | 10.4 LMR History | MH.26  | Total Capped Inflows                                | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     180 | 10.4 LMR History | MH.26  | Total Qualifying Inflows                            | G28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     181 | 10.4 LMR History | MH.26  | Total HQLA, capped inflows plus  qualifying inflows | H28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     182 | 10.4 LMR History | MH.26  | Total Outflows                                      | I28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     183 | 10.4 LMR History | MH.27  | Date                                                | C29         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     184 | 10.4 LMR History | MH.27  | LMR                                                 | D29         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     185 | 10.4 LMR History | MH.27  | Total HQLA                                          | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     186 | 10.4 LMR History | MH.27  | Total Capped Inflows                                | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     187 | 10.4 LMR History | MH.27  | Total Qualifying Inflows                            | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     188 | 10.4 LMR History | MH.27  | Total HQLA, capped inflows plus  qualifying inflows | H29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     189 | 10.4 LMR History | MH.27  | Total Outflows                                      | I29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     190 | 10.4 LMR History | MH.28  | Date                                                | C30         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     191 | 10.4 LMR History | MH.28  | LMR                                                 | D30         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     192 | 10.4 LMR History | MH.28  | Total HQLA                                          | E30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     193 | 10.4 LMR History | MH.28  | Total Capped Inflows                                | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     194 | 10.4 LMR History | MH.28  | Total Qualifying Inflows                            | G30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     195 | 10.4 LMR History | MH.28  | Total HQLA, capped inflows plus  qualifying inflows | H30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     196 | 10.4 LMR History | MH.28  | Total Outflows                                      | I30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     197 | 10.4 LMR History | MH.29  | Date                                                | C31         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     198 | 10.4 LMR History | MH.29  | LMR                                                 | D31         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     199 | 10.4 LMR History | MH.29  | Total HQLA                                          | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     200 | 10.4 LMR History | MH.29  | Total Capped Inflows                                | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     201 | 10.4 LMR History | MH.29  | Total Qualifying Inflows                            | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     202 | 10.4 LMR History | MH.29  | Total HQLA, capped inflows plus  qualifying inflows | H31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     203 | 10.4 LMR History | MH.29  | Total Outflows                                      | I31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     204 | 10.4 LMR History | MH.30  | Date                                                | C32         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     205 | 10.4 LMR History | MH.30  | LMR                                                 | D32         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     206 | 10.4 LMR History | MH.30  | Total HQLA                                          | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     207 | 10.4 LMR History | MH.30  | Total Capped Inflows                                | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     208 | 10.4 LMR History | MH.30  | Total Qualifying Inflows                            | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     209 | 10.4 LMR History | MH.30  | Total HQLA, capped inflows plus  qualifying inflows | H32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     210 | 10.4 LMR History | MH.30  | Total Outflows                                      | I32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     211 | 10.4 LMR History | MH.31  | Date                                                | C33         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     212 | 10.4 LMR History | MH.31  | LMR                                                 | D33         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     213 | 10.4 LMR History | MH.31  | Total HQLA                                          | E33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     214 | 10.4 LMR History | MH.31  | Total Capped Inflows                                | F33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     215 | 10.4 LMR History | MH.31  | Total Qualifying Inflows                            | G33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     216 | 10.4 LMR History | MH.31  | Total HQLA, capped inflows plus  qualifying inflows | H33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     217 | 10.4 LMR History | MH.31  | Total Outflows                                      | I33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     218 | 10.4 LMR History | MH.32  | Date                                                | C34         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     219 | 10.4 LMR History | MH.32  | LMR                                                 | D34         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     220 | 10.4 LMR History | MH.32  | Total HQLA                                          | E34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     221 | 10.4 LMR History | MH.32  | Total Capped Inflows                                | F34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     222 | 10.4 LMR History | MH.32  | Total Qualifying Inflows                            | G34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     223 | 10.4 LMR History | MH.32  | Total HQLA, capped inflows plus  qualifying inflows | H34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     224 | 10.4 LMR History | MH.32  | Total Outflows                                      | I34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     225 | 10.4 LMR History | MH.33  | Date                                                | C35         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     226 | 10.4 LMR History | MH.33  | LMR                                                 | D35         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     227 | 10.4 LMR History | MH.33  | Total HQLA                                          | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     228 | 10.4 LMR History | MH.33  | Total Capped Inflows                                | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     229 | 10.4 LMR History | MH.33  | Total Qualifying Inflows                            | G35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     230 | 10.4 LMR History | MH.33  | Total HQLA, capped inflows plus  qualifying inflows | H35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     231 | 10.4 LMR History | MH.33  | Total Outflows                                      | I35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     232 | 10.4 LMR History | MH.34  | Date                                                | C36         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     233 | 10.4 LMR History | MH.34  | LMR                                                 | D36         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     234 | 10.4 LMR History | MH.34  | Total HQLA                                          | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     235 | 10.4 LMR History | MH.34  | Total Capped Inflows                                | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     236 | 10.4 LMR History | MH.34  | Total Qualifying Inflows                            | G36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     237 | 10.4 LMR History | MH.34  | Total HQLA, capped inflows plus  qualifying inflows | H36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     238 | 10.4 LMR History | MH.34  | Total Outflows                                      | I36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     239 | 10.4 LMR History | MH.35  | Date                                                | C37         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     240 | 10.4 LMR History | MH.35  | LMR                                                 | D37         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     241 | 10.4 LMR History | MH.35  | Total HQLA                                          | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     242 | 10.4 LMR History | MH.35  | Total Capped Inflows                                | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     243 | 10.4 LMR History | MH.35  | Total Qualifying Inflows                            | G37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     244 | 10.4 LMR History | MH.35  | Total HQLA, capped inflows plus  qualifying inflows | H37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     245 | 10.4 LMR History | MH.35  | Total Outflows                                      | I37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     246 | 10.4 LMR History | MH.36  | Date                                                | C38         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     247 | 10.4 LMR History | MH.36  | LMR                                                 | D38         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     248 | 10.4 LMR History | MH.36  | Total HQLA                                          | E38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     249 | 10.4 LMR History | MH.36  | Total Capped Inflows                                | F38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     250 | 10.4 LMR History | MH.36  | Total Qualifying Inflows                            | G38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     251 | 10.4 LMR History | MH.36  | Total HQLA, capped inflows plus  qualifying inflows | H38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     252 | 10.4 LMR History | MH.36  | Total Outflows                                      | I38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     253 | 10.4 LMR History | MH.37  | Date                                                | C39         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     254 | 10.4 LMR History | MH.37  | LMR                                                 | D39         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     255 | 10.4 LMR History | MH.37  | Total HQLA                                          | E39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     256 | 10.4 LMR History | MH.37  | Total Capped Inflows                                | F39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     257 | 10.4 LMR History | MH.37  | Total Qualifying Inflows                            | G39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     258 | 10.4 LMR History | MH.37  | Total HQLA, capped inflows plus  qualifying inflows | H39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     259 | 10.4 LMR History | MH.37  | Total Outflows                                      | I39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     260 | 10.4 LMR History | MH.38  | Date                                                | C40         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     261 | 10.4 LMR History | MH.38  | LMR                                                 | D40         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     262 | 10.4 LMR History | MH.38  | Total HQLA                                          | E40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     263 | 10.4 LMR History | MH.38  | Total Capped Inflows                                | F40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     264 | 10.4 LMR History | MH.38  | Total Qualifying Inflows                            | G40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     265 | 10.4 LMR History | MH.38  | Total HQLA, capped inflows plus  qualifying inflows | H40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     266 | 10.4 LMR History | MH.38  | Total Outflows                                      | I40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     267 | 10.4 LMR History | MH.39  | Date                                                | C41         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item      | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     268 | 10.4 LMR History | MH.39     | LMR                                                 | D41         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     269 | 10.4 LMR History | MH.39     | Total HQLA                                          | E41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     270 | 10.4 LMR History | MH.39     | Total Capped Inflows                                | F41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     271 | 10.4 LMR History | MH.39     | Total Qualifying Inflows                            | G41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     272 | 10.4 LMR History | MH.39     | Total HQLA, capped inflows plus  qualifying inflows | H41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     273 | 10.4 LMR History | MH.39     | Total Outflows                                      | I41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     274 | 10.4 LMR History | MH.40     | Date                                                | C42         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     275 | 10.4 LMR History | MH.40     | LMR                                                 | D42         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     276 | 10.4 LMR History | MH.40     | Total HQLA                                          | E42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     277 | 10.4 LMR History | MH.40     | Total Capped Inflows                                | F42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     278 | 10.4 LMR History | MH.40     | Total Qualifying Inflows                            | G42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     279 | 10.4 LMR History | MH.40     | Total HQLA, capped inflows plus  qualifying inflows | H42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     280 | 10.4 LMR History | MH.40     | Total Outflows                                      | I42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     281 | 10.4 LMR History | MH.41     | Date                                                | C43         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     282 | 10.4 LMR History | MH.41 LMR |                                                     | D43         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     283 | 10.4 LMR History | MH.41  | Total HQLA                                          | E43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     284 | 10.4 LMR History | MH.41  | Total Capped Inflows                                | F43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     285 | 10.4 LMR History | MH.41  | Total Qualifying Inflows                            | G43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     286 | 10.4 LMR History | MH.41  | Total HQLA, capped inflows plus  qualifying inflows | H43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     287 | 10.4 LMR History | MH.41  | Total Outflows                                      | I43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     288 | 10.4 LMR History | MH.42  | Date                                                | C44         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     289 | 10.4 LMR History | MH.42  | LMR                                                 | D44         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     290 | 10.4 LMR History | MH.42  | Total HQLA                                          | E44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     291 | 10.4 LMR History | MH.42  | Total Capped Inflows                                | F44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     292 | 10.4 LMR History | MH.42  | Total Qualifying Inflows                            | G44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     293 | 10.4 LMR History | MH.42  | Total HQLA, capped inflows plus  qualifying inflows | H44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     294 | 10.4 LMR History | MH.42  | Total Outflows                                      | I44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     295 | 10.4 LMR History | MH.43  | Date                                                | C45         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     296 | 10.4 LMR History | MH.43  | LMR                                                 | D45         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     297 | 10.4 LMR History | MH.43  | Total HQLA                                          | E45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     298 | 10.4 LMR History | MH.43  | Total Capped Inflows                                | F45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     299 | 10.4 LMR History | MH.43  | Total Qualifying Inflows                            | G45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     300 | 10.4 LMR History | MH.43  | Total HQLA, capped inflows plus  qualifying inflows | H45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     301 | 10.4 LMR History | MH.43  | Total Outflows                                      | I45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     302 | 10.4 LMR History | MH.44  | Date                                                | C46         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     303 | 10.4 LMR History | MH.44  | LMR                                                 | D46         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     304 | 10.4 LMR History | MH.44  | Total HQLA                                          | E46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     305 | 10.4 LMR History | MH.44  | Total Capped Inflows                                | F46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     306 | 10.4 LMR History | MH.44  | Total Qualifying Inflows                            | G46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     307 | 10.4 LMR History | MH.44  | Total HQLA, capped inflows plus  qualifying inflows | H46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     308 | 10.4 LMR History | MH.44  | Total Outflows                                      | I46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     309 | 10.4 LMR History | MH.45  | Date                                                | C47         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     310 | 10.4 LMR History | MH.45  | LMR                                                 | D47         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     311 | 10.4 LMR History | MH.45  | Total HQLA                                          | E47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     312 | 10.4 LMR History | MH.45  | Total Capped Inflows                                | F47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     313 | 10.4 LMR History | MH.45  | Total Qualifying Inflows                            | G47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     314 | 10.4 LMR History | MH.45  | Total HQLA, capped inflows plus  qualifying inflows | H47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     315 | 10.4 LMR History | MH.45  | Total Outflows                                      | I47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     316 | 10.4 LMR History | MH.46  | Date                                                | C48         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     317 | 10.4 LMR History | MH.46  | LMR                                                 | D48         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     318 | 10.4 LMR History | MH.46  | Total HQLA                                          | E48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     319 | 10.4 LMR History | MH.46  | Total Capped Inflows                                | F48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     320 | 10.4 LMR History | MH.46  | Total Qualifying Inflows                            | G48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     321 | 10.4 LMR History | MH.46  | Total HQLA, capped inflows plus  qualifying inflows | H48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     322 | 10.4 LMR History | MH.46  | Total Outflows                                      | I48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     323 | 10.4 LMR History | MH.47  | Date                                                | C49         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     324 | 10.4 LMR History | MH.47  | LMR                                                 | D49         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     325 | 10.4 LMR History | MH.47  | Total HQLA                                          | E49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     326 | 10.4 LMR History | MH.47  | Total Capped Inflows                                | F49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     327 | 10.4 LMR History | MH.47  | Total Qualifying Inflows                            | G49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     328 | 10.4 LMR History | MH.47  | Total HQLA, capped inflows plus  qualifying inflows | H49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     329 | 10.4 LMR History | MH.47  | Total Outflows                                      | I49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     330 | 10.4 LMR History | MH.48  | Date                                                | C50         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     331 | 10.4 LMR History | MH.48  | LMR                                                 | D50         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     332 | 10.4 LMR History | MH.48  | Total HQLA                                          | E50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     333 | 10.4 LMR History | MH.48  | Total Capped Inflows                                | F50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     334 | 10.4 LMR History | MH.48  | Total Qualifying Inflows                            | G50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     335 | 10.4 LMR History | MH.48  | Total HQLA, capped inflows plus  qualifying inflows | H50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     336 | 10.4 LMR History | MH.48  | Total Outflows                                      | I50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     337 | 10.4 LMR History | MH.49  | Date                                                | C51         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     338 | 10.4 LMR History | MH.49  | LMR                                                 | D51         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     339 | 10.4 LMR History | MH.49  | Total HQLA                                          | E51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     340 | 10.4 LMR History | MH.49  | Total Capped Inflows                                | F51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     341 | 10.4 LMR History | MH.49  | Total Qualifying Inflows                            | G51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     342 | 10.4 LMR History | MH.49  | Total HQLA, capped inflows plus  qualifying inflows | H51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     343 | 10.4 LMR History | MH.49  | Total Outflows                                      | I51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     344 | 10.4 LMR History | MH.50  | Date                                                | C52         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     345 | 10.4 LMR History | MH.50  | LMR                                                 | D52         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     346 | 10.4 LMR History | MH.50  | Total HQLA                                          | E52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     347 | 10.4 LMR History | MH.50  | Total Capped Inflows                                | F52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     348 | 10.4 LMR History | MH.50  | Total Qualifying Inflows                            | G52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     349 | 10.4 LMR History | MH.50  | Total HQLA, capped inflows plus  qualifying inflows | H52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     350 | 10.4 LMR History | MH.50  | Total Outflows                                      | I52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     351 | 10.4 LMR History | MH.51  | Date                                                | C53         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     352 | 10.4 LMR History | MH.51  | LMR                                                 | D53         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     353 | 10.4 LMR History | MH.51  | Total HQLA                                          | E53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     354 | 10.4 LMR History | MH.51  | Total Capped Inflows                                | F53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     355 | 10.4 LMR History | MH.51  | Total Qualifying Inflows                            | G53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     356 | 10.4 LMR History | MH.51  | Total HQLA, capped inflows plus  qualifying inflows | H53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     357 | 10.4 LMR History | MH.51  | Total Outflows                                      | I53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     358 | 10.4 LMR History | MH.52  | Date                                                | C54         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     359 | 10.4 LMR History | MH.52  | LMR                                                 | D54         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     360 | 10.4 LMR History | MH.52  | Total HQLA                                          | E54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     361 | 10.4 LMR History | MH.52  | Total Capped Inflows                                | F54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     362 | 10.4 LMR History | MH.52  | Total Qualifying Inflows                            | G54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     363 | 10.4 LMR History | MH.52  | Total HQLA, capped inflows plus  qualifying inflows | H54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     364 | 10.4 LMR History | MH.52  | Total Outflows                                      | I54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     365 | 10.4 LMR History | MH.53  | Date                                                | C55         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     366 | 10.4 LMR History | MH.53  | LMR                                                 | D55         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     367 | 10.4 LMR History | MH.53  | Total HQLA                                          | E55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     368 | 10.4 LMR History | MH.53  | Total Capped Inflows                                | F55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     369 | 10.4 LMR History | MH.53  | Total Qualifying Inflows                            | G55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     370 | 10.4 LMR History | MH.53  | Total HQLA, capped inflows plus  qualifying inflows | H55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     371 | 10.4 LMR History | MH.53  | Total Outflows                                      | I55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     372 | 10.4 LMR History | MH.54  | Date                                                | C56         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     373 | 10.4 LMR History | MH.54  | LMR                                                 | D56         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     374 | 10.4 LMR History | MH.54  | Total HQLA                                          | E56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     375 | 10.4 LMR History | MH.54  | Total Capped Inflows                                | F56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     376 | 10.4 LMR History | MH.54  | Total Qualifying Inflows                            | G56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     377 | 10.4 LMR History | MH.54  | Total HQLA, capped inflows plus  qualifying inflows | H56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     378 | 10.4 LMR History | MH.54  | Total Outflows                                      | I56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     379 | 10.4 LMR History | MH.55  | Date                                                | C57         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     380 | 10.4 LMR History | MH.55  | LMR                                                 | D57         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     381 | 10.4 LMR History | MH.55  | Total HQLA                                          | E57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     382 | 10.4 LMR History | MH.55  | Total Capped Inflows                                | F57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     383 | 10.4 LMR History | MH.55  | Total Qualifying Inflows                            | G57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     384 | 10.4 LMR History | MH.55  | Total HQLA, capped inflows plus  qualifying inflows | H57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     385 | 10.4 LMR History | MH.55  | Total Outflows                                      | I57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     386 | 10.4 LMR History | MH.56  | Date                                                | C58         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     387 | 10.4 LMR History | MH.56  | LMR                                                 | D58         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     388 | 10.4 LMR History | MH.56  | Total HQLA                                          | E58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     389 | 10.4 LMR History | MH.56  | Total Capped Inflows                                | F58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     390 | 10.4 LMR History | MH.56  | Total Qualifying Inflows                            | G58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     391 | 10.4 LMR History | MH.56  | Total HQLA, capped inflows plus  qualifying inflows | H58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     392 | 10.4 LMR History | MH.56  | Total Outflows                                      | I58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     393 | 10.4 LMR History | MH.57  | Date                                                | C59         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     394 | 10.4 LMR History | MH.57  | LMR                                                 | D59         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     395 | 10.4 LMR History | MH.57  | Total HQLA                                          | E59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     396 | 10.4 LMR History | MH.57  | Total Capped Inflows                                | F59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     397 | 10.4 LMR History | MH.57  | Total Qualifying Inflows                            | G59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     398 | 10.4 LMR History | MH.57  | Total HQLA, capped inflows plus  qualifying inflows | H59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     399 | 10.4 LMR History | MH.57  | Total Outflows                                      | I59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     400 | 10.4 LMR History | MH.58  | Date                                                | C60         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     401 | 10.4 LMR History | MH.58  | LMR                                                 | D60         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     402 | 10.4 LMR History | MH.58  | Total HQLA                                          | E60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     403 | 10.4 LMR History | MH.58  | Total Capped Inflows                                | F60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     404 | 10.4 LMR History | MH.58  | Total Qualifying Inflows                            | G60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     405 | 10.4 LMR History | MH.58  | Total HQLA, capped inflows plus  qualifying inflows | H60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     406 | 10.4 LMR History | MH.58  | Total Outflows                                      | I60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     407 | 10.4 LMR History | MH.59  | Date                                                | C61         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     408 | 10.4 LMR History | MH.59  | LMR                                                 | D61         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     409 | 10.4 LMR History | MH.59  | Total HQLA                                          | E61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     410 | 10.4 LMR History | MH.59  | Total Capped Inflows                                | F61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     411 | 10.4 LMR History | MH.59  | Total Qualifying Inflows                            | G61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     412 | 10.4 LMR History | MH.59  | Total HQLA, capped inflows plus  qualifying inflows | H61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     413 | 10.4 LMR History | MH.59  | Total Outflows                                      | I61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     414 | 10.4 LMR History | MH.60  | Date                                                | C62         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     415 | 10.4 LMR History | MH.60  | LMR                                                 | D62         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     416 | 10.4 LMR History | MH.60  | Total HQLA                                          | E62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     417 | 10.4 LMR History | MH.60  | Total Capped Inflows                                | F62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     418 | 10.4 LMR History | MH.60  | Total Qualifying Inflows                            | G62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     419 | 10.4 LMR History | MH.60  | Total HQLA, capped inflows plus  qualifying inflows | H62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     420 | 10.4 LMR History | MH.60  | Total Outflows                                      | I62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     421 | 10.4 LMR History | MH.61  | Date                                                | C63         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     422 | 10.4 LMR History | MH.61  | LMR                                                 | D63         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     423 | 10.4 LMR History | MH.61  | Total HQLA                                          | E63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     424 | 10.4 LMR History | MH.61  | Total Capped Inflows                                | F63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     425 | 10.4 LMR History | MH.61  | Total Qualifying Inflows                            | G63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     426 | 10.4 LMR History | MH.61  | Total HQLA, capped inflows plus  qualifying inflows | H63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     427 | 10.4 LMR History | MH.61  | Total Outflows                                      | I63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     428 | 10.4 LMR History | MH.62  | Date                                                | C64         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     429 | 10.4 LMR History | MH.62  | LMR                                                 | D64         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     430 | 10.4 LMR History | MH.62  | Total HQLA                                          | E64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     431 | 10.4 LMR History | MH.62  | Total Capped Inflows                                | F64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     432 | 10.4 LMR History | MH.62  | Total Qualifying Inflows                            | G64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     433 | 10.4 LMR History | MH.62  | Total HQLA, capped inflows plus  qualifying inflows | H64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     434 | 10.4 LMR History | MH.62  | Total Outflows                                      | I64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     435 | 10.4 LMR History | MH.63  | Date                                                | C65         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     436 | 10.4 LMR History | MH.63  | LMR                                                 | D65         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     437 | 10.4 LMR History | MH.63  | Total HQLA                                          | E65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     438 | 10.4 LMR History | MH.63  | Total Capped Inflows                                | F65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     439 | 10.4 LMR History | MH.63  | Total Qualifying Inflows                            | G65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     440 | 10.4 LMR History | MH.63  | Total HQLA, capped inflows plus  qualifying inflows | H65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     441 | 10.4 LMR History | MH.63  | Total Outflows                                      | I65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     442 | 10.4 LMR History | MH.64  | Date                                                | C66         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     443 | 10.4 LMR History | MH.64  | LMR                                                 | D66         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     444 | 10.4 LMR History | MH.64  | Total HQLA                                          | E66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     445 | 10.4 LMR History | MH.64  | Total Capped Inflows                                | F66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     446 | 10.4 LMR History | MH.64  | Total Qualifying Inflows                            | G66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     447 | 10.4 LMR History | MH.64  | Total HQLA, capped inflows plus  qualifying inflows | H66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column                                              | Cell  Ref   | Validation Message                                                                 |
|     448 | 10.4 LMR History | MH.64  | Total Outflows                                      | I66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     449 | 10.4 LMR History | MH.65  | Date                                                | C67         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     450 | 10.4 LMR History | MH.65  | LMR                                                 | D67         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     451 | 10.4 LMR History | MH.65  | Total HQLA                                          | E67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     452 | 10.4 LMR History | MH.65  | Total Capped Inflows                                | F67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     453 | 10.4 LMR History | MH.65  | Total Qualifying Inflows                            | G67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     454 | 10.4 LMR History | MH.65  | Total HQLA, capped inflows plus  qualifying inflows | H67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     455 | 10.4 LMR History | MH.65  | Total Outflows                                      | I67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |