
## Guidance Note

## Validation and verification of the '10.3 LCR History' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: March 2019

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

|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|---------|------------------|--------|------------------|-------------|------------------------------------------------------------------------------------|
|       1 | 10.3 LCR History | CH.1   | Date             | C3          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|       2 | 10.3 LCR History | CH.1   | LCR              | D3          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|       3 | 10.3 LCR History | CH.1   | Total HQLA       | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       4 | 10.3 LCR History | CH.1   | Total Inflows    | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       5 | 10.3 LCR History | CH.1   | Total Outflows   | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       6 | 10.3 LCR History | CH.1   | HQLA Requirement | H3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|       7 | 10.3 LCR History | CH.2   | Date             | C4          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|       8 | 10.3 LCR History | CH.2   | LCR              | D4          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|       9 | 10.3 LCR History | CH.2   | Total HQLA       | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      10 | 10.3 LCR History | CH.2   | Total Inflows    | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      11 | 10.3 LCR History | CH.2   | Total Outflows   | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      12 | 10.3 LCR History | CH.2   | HQLA Requirement | H4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      13 | 10.3 LCR History | CH.3   | Date             | C5          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      14 | 10.3 LCR History | CH.3   | LCR              | D5          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      15 | 10.3 LCR History | CH.3   | Total HQLA       | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      16 | 10.3 LCR History | CH.3   | Total Inflows    | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      17 | 10.3 LCR History | CH.3   | Total Outflows   | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      18 | 10.3 LCR History | CH.3   | HQLA Requirement | H5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      19 | 10.3 LCR History | CH.4   | Date             | C6          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      20 | 10.3 LCR History | CH.4   | LCR              | D6          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      21 | 10.3 LCR History | CH.4   | Total HQLA       | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      22 | 10.3 LCR History | CH.4   | Total Inflows    | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      23 | 10.3 LCR History | CH.4   | Total Outflows   | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      24 | 10.3 LCR History | CH.4   | HQLA Requirement | H6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      25 | 10.3 LCR History | CH.5   | Date             | C7          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      26 | 10.3 LCR History | CH.5   | LCR              | D7          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      27 | 10.3 LCR History | CH.5   | Total HQLA       | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      28 | 10.3 LCR History | CH.5   | Total Inflows    | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      29 | 10.3 LCR History | CH.5   | Total Outflows   | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      30 | 10.3 LCR History | CH.5   | HQLA Requirement | H7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      31 | 10.3 LCR History | CH.6   | Date             | C8          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      32 | 10.3 LCR History | CH.6   | LCR              | D8          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      33 | 10.3 LCR History | CH.6   | Total HQLA       | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      34 | 10.3 LCR History | CH.6   | Total Inflows    | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      35 | 10.3 LCR History | CH.6   | Total Outflows   | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      36 | 10.3 LCR History | CH.6   | HQLA Requirement | H8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      37 | 10.3 LCR History | CH.7   | Date             | C9          | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      38 | 10.3 LCR History | CH.7   | LCR              | D9          | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      39 | 10.3 LCR History | CH.7   | Total HQLA       | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      40 | 10.3 LCR History | CH.7   | Total Inflows    | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      41 | 10.3 LCR History | CH.7   | Total Outflows   | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      42 | 10.3 LCR History | CH.7   | HQLA Requirement | H9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      43 | 10.3 LCR History | CH.8   | Date             | C10         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      44 | 10.3 LCR History | CH.8   | LCR              | D10         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      45 | 10.3 LCR History | CH.8   | Total HQLA       | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      46 | 10.3 LCR History | CH.8   | Total Inflows    | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      47 | 10.3 LCR History | CH.8   | Total Outflows   | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      48 | 10.3 LCR History | CH.8   | HQLA Requirement | H10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      49 | 10.3 LCR History | CH.9   | Date             | C11         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      50 | 10.3 LCR History | CH.9   | LCR              | D11         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      51 | 10.3 LCR History | CH.9   | Total HQLA       | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      52 | 10.3 LCR History | CH.9   | Total Inflows    | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      53 | 10.3 LCR History | CH.9   | Total Outflows   | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      54 | 10.3 LCR History | CH.9   | HQLA Requirement | H11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      55 | 10.3 LCR History | CH.10  | Date             | C12         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      56 | 10.3 LCR History | CH.10  | LCR              | D12         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      57 | 10.3 LCR History | CH.10  | Total HQLA       | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      58 | 10.3 LCR History | CH.10  | Total Inflows    | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      59 | 10.3 LCR History | CH.10  | Total Outflows   | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      60 | 10.3 LCR History | CH.10  | HQLA Requirement | H12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      61 | 10.3 LCR History | CH.11  | Date             | C13         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      62 | 10.3 LCR History | CH.11  | LCR              | D13         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      63 | 10.3 LCR History | CH.11  | Total HQLA       | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      64 | 10.3 LCR History | CH.11  | Total Inflows    | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      65 | 10.3 LCR History | CH.11  | Total Outflows   | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      66 | 10.3 LCR History | CH.11  | HQLA Requirement | H13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      67 | 10.3 LCR History | CH.12  | Date             | C14         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      68 | 10.3 LCR History | CH.12  | LCR              | D14         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      69 | 10.3 LCR History | CH.12  | Total HQLA       | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      70 | 10.3 LCR History | CH.12  | Total Inflows    | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      71 | 10.3 LCR History | CH.12  | Total Outflows   | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      72 | 10.3 LCR History | CH.12  | HQLA Requirement | H14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      73 | 10.3 LCR History | CH.13  | Date             | C15         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      74 | 10.3 LCR History | CH.13  | LCR              | D15         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      75 | 10.3 LCR History | CH.13  | Total HQLA       | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      76 | 10.3 LCR History | CH.13  | Total Inflows    | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      77 | 10.3 LCR History | CH.13  | Total Outflows   | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      78 | 10.3 LCR History | CH.13  | HQLA Requirement | H15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      79 | 10.3 LCR History | CH.14  | Date             | C16         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      80 | 10.3 LCR History | CH.14  | LCR              | D16         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      81 | 10.3 LCR History | CH.14  | Total HQLA       | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      82 | 10.3 LCR History | CH.14  | Total Inflows    | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      83 | 10.3 LCR History | CH.14  | Total Outflows   | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      84 | 10.3 LCR History | CH.14  | HQLA Requirement | H16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      85 | 10.3 LCR History | CH.15  | Date             | C17         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      86 | 10.3 LCR History | CH.15  | LCR              | D17         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      87 | 10.3 LCR History | CH.15  | Total HQLA       | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      88 | 10.3 LCR History | CH.15  | Total Inflows    | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      89 | 10.3 LCR History | CH.15  | Total Outflows   | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      90 | 10.3 LCR History | CH.15  | HQLA Requirement | H17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      91 | 10.3 LCR History | CH.16  | Date             | C18         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      92 | 10.3 LCR History | CH.16  | LCR              | D18         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      93 | 10.3 LCR History | CH.16  | Total HQLA       | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|      94 | 10.3 LCR History | CH.16  | Total Inflows    | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      95 | 10.3 LCR History | CH.16  | Total Outflows   | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      96 | 10.3 LCR History | CH.16  | HQLA Requirement | H18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      97 | 10.3 LCR History | CH.17  | Date             | C19         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|      98 | 10.3 LCR History | CH.17  | LCR              | D19         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      99 | 10.3 LCR History | CH.17  | Total HQLA       | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     100 | 10.3 LCR History | CH.17  | Total Inflows    | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     101 | 10.3 LCR History | CH.17  | Total Outflows   | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     102 | 10.3 LCR History | CH.17  | HQLA Requirement | H19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     103 | 10.3 LCR History | CH.18  | Date             | C20         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     104 | 10.3 LCR History | CH.18  | LCR              | D20         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     105 | 10.3 LCR History | CH.18  | Total HQLA       | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     106 | 10.3 LCR History | CH.18  | Total Inflows    | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     107 | 10.3 LCR History | CH.18  | Total Outflows   | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     108 | 10.3 LCR History | CH.18  | HQLA Requirement | H20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     109 | 10.3 LCR History | CH.19  | Date             | C21         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     110 | 10.3 LCR History | CH.19  | LCR              | D21         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     111 | 10.3 LCR History | CH.19  | Total HQLA       | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     112 | 10.3 LCR History | CH.19  | Total Inflows    | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     113 | 10.3 LCR History | CH.19  | Total Outflows   | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     114 | 10.3 LCR History | CH.19  | HQLA Requirement | H21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     115 | 10.3 LCR History | CH.20  | Date             | C22         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     116 | 10.3 LCR History | CH.20  | LCR              | D22         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     117 | 10.3 LCR History | CH.20  | Total HQLA       | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     118 | 10.3 LCR History | CH.20  | Total Inflows    | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     119 | 10.3 LCR History | CH.20  | Total Outflows   | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     120 | 10.3 LCR History | CH.20  | HQLA Requirement | H22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     121 | 10.3 LCR History | CH.21  | Date             | C23         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     122 | 10.3 LCR History | CH.21  | LCR              | D23         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     123 | 10.3 LCR History | CH.21  | Total HQLA       | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     124 | 10.3 LCR History | CH.21  | Total Inflows    | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     125 | 10.3 LCR History | CH.21  | Total Outflows   | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     126 | 10.3 LCR History | CH.21  | HQLA Requirement | H23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     127 | 10.3 LCR History | CH.22  | Date             | C24         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     128 | 10.3 LCR History | CH.22  | LCR              | D24         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     129 | 10.3 LCR History | CH.22  | Total HQLA       | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     130 | 10.3 LCR History | CH.22  | Total Inflows    | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     131 | 10.3 LCR History | CH.22  | Total Outflows   | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     132 | 10.3 LCR History | CH.22  | HQLA Requirement | H24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     133 | 10.3 LCR History | CH.23  | Date             | C25         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     134 | 10.3 LCR History | CH.23  | LCR              | D25         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     135 | 10.3 LCR History | CH.23  | Total HQLA       | E25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     136 | 10.3 LCR History | CH.23  | Total Inflows    | F25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     137 | 10.3 LCR History | CH.23  | Total Outflows   | G25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     138 | 10.3 LCR History | CH.23  | HQLA Requirement | H25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     139 | 10.3 LCR History | CH.24  | Date             | C26         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     140 | 10.3 LCR History | CH.24  | LCR              | D26         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     141 | 10.3 LCR History | CH.24  | Total HQLA       | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     142 | 10.3 LCR History | CH.24  | Total Inflows    | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     143 | 10.3 LCR History | CH.24  | Total Outflows   | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     144 | 10.3 LCR History | CH.24  | HQLA Requirement | H26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     145 | 10.3 LCR History | CH.25  | Date             | C27         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     146 | 10.3 LCR History | CH.25  | LCR              | D27         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     147 | 10.3 LCR History | CH.25  | Total HQLA       | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     148 | 10.3 LCR History | CH.25  | Total Inflows    | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     149 | 10.3 LCR History | CH.25  | Total Outflows   | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     150 | 10.3 LCR History | CH.25  | HQLA Requirement | H27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     151 | 10.3 LCR History | CH.26  | Date             | C28         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     152 | 10.3 LCR History | CH.26  | LCR              | D28         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     153 | 10.3 LCR History | CH.26  | Total HQLA       | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     154 | 10.3 LCR History | CH.26  | Total Inflows    | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     155 | 10.3 LCR History | CH.26  | Total Outflows   | G28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     156 | 10.3 LCR History | CH.26  | HQLA Requirement | H28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     157 | 10.3 LCR History | CH.27  | Date             | C29         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     158 | 10.3 LCR History | CH.27  | LCR              | D29         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     159 | 10.3 LCR History | CH.27  | Total HQLA       | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     160 | 10.3 LCR History | CH.27  | Total Inflows    | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     161 | 10.3 LCR History | CH.27  | Total Outflows   | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     162 | 10.3 LCR History | CH.27  | HQLA Requirement | H29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     163 | 10.3 LCR History | CH.28  | Date             | C30         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     164 | 10.3 LCR History | CH.28  | LCR              | D30         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     165 | 10.3 LCR History | CH.28  | Total HQLA       | E30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     166 | 10.3 LCR History | CH.28  | Total Inflows    | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     167 | 10.3 LCR History | CH.28  | Total Outflows   | G30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     168 | 10.3 LCR History | CH.28  | HQLA Requirement | H30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     169 | 10.3 LCR History | CH.29  | Date             | C31         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     170 | 10.3 LCR History | CH.29  | LCR              | D31         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     171 | 10.3 LCR History | CH.29  | Total HQLA       | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     172 | 10.3 LCR History | CH.29  | Total Inflows    | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     173 | 10.3 LCR History | CH.29  | Total Outflows   | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     174 | 10.3 LCR History | CH.29  | HQLA Requirement | H31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     175 | 10.3 LCR History | CH.30  | Date             | C32         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     176 | 10.3 LCR History | CH.30  | LCR              | D32         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     177 | 10.3 LCR History | CH.30  | Total HQLA       | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     178 | 10.3 LCR History | CH.30  | Total Inflows    | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     179 | 10.3 LCR History | CH.30  | Total Outflows   | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     180 | 10.3 LCR History | CH.30  | HQLA Requirement | H32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     181 | 10.3 LCR History | CH.31  | Date             | C33         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     182 | 10.3 LCR History | CH.31  | LCR              | D33         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     183 | 10.3 LCR History | CH.31  | Total HQLA       | E33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     184 | 10.3 LCR History | CH.31  | Total Inflows    | F33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     185 | 10.3 LCR History | CH.31  | Total Outflows   | G33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     186 | 10.3 LCR History | CH.31  | HQLA Requirement | H33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     187 | 10.3 LCR History | CH.32  | Date             | C34         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     188 | 10.3 LCR History | CH.32  | LCR              | D34         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     189 | 10.3 LCR History | CH.32  | Total HQLA       | E34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     190 | 10.3 LCR History | CH.32  | Total Inflows    | F34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     191 | 10.3 LCR History | CH.32  | Total Outflows   | G34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     192 | 10.3 LCR History | CH.32  | HQLA Requirement | H34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     193 | 10.3 LCR History | CH.33  | Date             | C35         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     194 | 10.3 LCR History | CH.33  | LCR              | D35         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     195 | 10.3 LCR History | CH.33  | Total HQLA       | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     196 | 10.3 LCR History | CH.33  | Total Inflows    | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     197 | 10.3 LCR History | CH.33  | Total Outflows   | G35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     198 | 10.3 LCR History | CH.33  | HQLA Requirement | H35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     199 | 10.3 LCR History | CH.34  | Date             | C36         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     200 | 10.3 LCR History | CH.34  | LCR              | D36         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     201 | 10.3 LCR History | CH.34  | Total HQLA       | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     202 | 10.3 LCR History | CH.34  | Total Inflows    | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     203 | 10.3 LCR History | CH.34  | Total Outflows   | G36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     204 | 10.3 LCR History | CH.34  | HQLA Requirement | H36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     205 | 10.3 LCR History | CH.35  | Date             | C37         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     206 | 10.3 LCR History | CH.35  | LCR              | D37         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     207 | 10.3 LCR History | CH.35  | Total HQLA       | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     208 | 10.3 LCR History | CH.35  | Total Inflows    | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     209 | 10.3 LCR History | CH.35  | Total Outflows   | G37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     210 | 10.3 LCR History | CH.35  | HQLA Requirement | H37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     211 | 10.3 LCR History | CH.36  | Date             | C38         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     212 | 10.3 LCR History | CH.36  | LCR              | D38         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     213 | 10.3 LCR History | CH.36  | Total HQLA       | E38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     214 | 10.3 LCR History | CH.36  | Total Inflows    | F38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     215 | 10.3 LCR History | CH.36  | Total Outflows   | G38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     216 | 10.3 LCR History | CH.36  | HQLA Requirement | H38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     217 | 10.3 LCR History | CH.37  | Date             | C39         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     218 | 10.3 LCR History | CH.37  | LCR              | D39         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     219 | 10.3 LCR History | CH.37  | Total HQLA       | E39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     220 | 10.3 LCR History | CH.37  | Total Inflows    | F39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     221 | 10.3 LCR History | CH.37  | Total Outflows   | G39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     222 | 10.3 LCR History | CH.37  | HQLA Requirement | H39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     223 | 10.3 LCR History | CH.38  | Date             | C40         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     224 | 10.3 LCR History | CH.38  | LCR              | D40         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     225 | 10.3 LCR History | CH.38  | Total HQLA       | E40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     226 | 10.3 LCR History | CH.38  | Total Inflows    | F40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     227 | 10.3 LCR History | CH.38  | Total Outflows   | G40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     228 | 10.3 LCR History | CH.38  | HQLA Requirement | H40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     229 | 10.3 LCR History | CH.39  | Date             | C41         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     230 | 10.3 LCR History | CH.39  | LCR              | D41         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     231 | 10.3 LCR History | CH.39  | Total HQLA       | E41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     232 | 10.3 LCR History | CH.39  | Total Inflows    | F41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     233 | 10.3 LCR History | CH.39  | Total Outflows   | G41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     234 | 10.3 LCR History | CH.39  | HQLA Requirement | H41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     235 | 10.3 LCR History | CH.40  | Date             | C42         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     236 | 10.3 LCR History | CH.40  | LCR              | D42         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     237 | 10.3 LCR History | CH.40  | Total HQLA       | E42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     238 | 10.3 LCR History | CH.40  | Total Inflows    | F42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     239 | 10.3 LCR History | CH.40  | Total Outflows   | G42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     240 | 10.3 LCR History | CH.40  | HQLA Requirement | H42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     241 | 10.3 LCR History | CH.41  | Date             | C43         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     242 | 10.3 LCR History | CH.41  | LCR              | D43         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     243 | 10.3 LCR History | CH.41  | Total HQLA       | E43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     244 | 10.3 LCR History | CH.41  | Total Inflows    | F43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     245 | 10.3 LCR History | CH.41  | Total Outflows   | G43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     246 | 10.3 LCR History | CH.41  | HQLA Requirement | H43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     247 | 10.3 LCR History | CH.42  | Date             | C44         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     248 | 10.3 LCR History | CH.42  | LCR              | D44         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     249 | 10.3 LCR History | CH.42  | Total HQLA       | E44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     250 | 10.3 LCR History | CH.42  | Total Inflows    | F44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     251 | 10.3 LCR History | CH.42  | Total Outflows   | G44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     252 | 10.3 LCR History | CH.42  | HQLA Requirement | H44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     253 | 10.3 LCR History | CH.43  | Date             | C45         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     254 | 10.3 LCR History | CH.43  | LCR              | D45         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     255 | 10.3 LCR History | CH.43  | Total HQLA       | E45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     256 | 10.3 LCR History | CH.43  | Total Inflows    | F45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     257 | 10.3 LCR History | CH.43  | Total Outflows   | G45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     258 | 10.3 LCR History | CH.43  | HQLA Requirement | H45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     259 | 10.3 LCR History | CH.44  | Date             | C46         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     260 | 10.3 LCR History | CH.44  | LCR              | D46         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     261 | 10.3 LCR History | CH.44  | Total HQLA       | E46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     262 | 10.3 LCR History | CH.44  | Total Inflows    | F46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     263 | 10.3 LCR History | CH.44  | Total Outflows   | G46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     264 | 10.3 LCR History | CH.44  | HQLA Requirement | H46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     265 | 10.3 LCR History | CH.45  | Date             | C47         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     266 | 10.3 LCR History | CH.45  | LCR              | D47         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     267 | 10.3 LCR History | CH.45  | Total HQLA       | E47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     268 | 10.3 LCR History | CH.45  | Total Inflows    | F47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     269 | 10.3 LCR History | CH.45  | Total Outflows   | G47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     270 | 10.3 LCR History | CH.45  | HQLA Requirement | H47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     271 | 10.3 LCR History | CH.46  | Date             | C48         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     272 | 10.3 LCR History | CH.46  | LCR              | D48         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     273 | 10.3 LCR History | CH.46  | Total HQLA       | E48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     274 | 10.3 LCR History | CH.46  | Total Inflows    | F48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     275 | 10.3 LCR History | CH.46  | Total Outflows   | G48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     276 | 10.3 LCR History | CH.46  | HQLA Requirement | H48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     277 | 10.3 LCR History | CH.47  | Date             | C49         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     278 | 10.3 LCR History | CH.47  | LCR              | D49         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     279 | 10.3 LCR History | CH.47  | Total HQLA       | E49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     280 | 10.3 LCR History | CH.47  | Total Inflows    | F49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     281 | 10.3 LCR History | CH.47  | Total Outflows   | G49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     282 | 10.3 LCR History | CH.47  | HQLA Requirement | H49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     283 | 10.3 LCR History | CH.48  | Date             | C50         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     284 | 10.3 LCR History | CH.48  | LCR              | D50         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     285 | 10.3 LCR History | CH.48  | Total HQLA       | E50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     286 | 10.3 LCR History | CH.48  | Total Inflows    | F50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     287 | 10.3 LCR History | CH.48  | Total Outflows   | G50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     288 | 10.3 LCR History | CH.48  | HQLA Requirement | H50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     289 | 10.3 LCR History | CH.49  | Date             | C51         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     290 | 10.3 LCR History | CH.49  | LCR              | D51         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     291 | 10.3 LCR History | CH.49  | Total HQLA       | E51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     292 | 10.3 LCR History | CH.49  | Total Inflows    | F51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     293 | 10.3 LCR History | CH.49  | Total Outflows   | G51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     294 | 10.3 LCR History | CH.49  | HQLA Requirement | H51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     295 | 10.3 LCR History | CH.50  | Date             | C52         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     296 | 10.3 LCR History | CH.50  | LCR              | D52         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     297 | 10.3 LCR History | CH.50  | Total HQLA       | E52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     298 | 10.3 LCR History | CH.50  | Total Inflows    | F52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     299 | 10.3 LCR History | CH.50  | Total Outflows   | G52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     300 | 10.3 LCR History | CH.50  | HQLA Requirement | H52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     301 | 10.3 LCR History | CH.50  | Date             | C52         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     302 | 10.3 LCR History | CH.51  | LCR              | D53         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     303 | 10.3 LCR History | CH.51  | Total HQLA       | E53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     304 | 10.3 LCR History | CH.51  | Total Inflows    | F53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     305 | 10.3 LCR History | CH.51  | Total Outflows   | G53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     306 | 10.3 LCR History | CH.51  | HQLA Requirement | H53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     307 | 10.3 LCR History | CH.52  | Date             | C54         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     308 | 10.3 LCR History | CH.52  | LCR              | D54         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     309 | 10.3 LCR History | CH.52  | Total HQLA       | E54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     310 | 10.3 LCR History | CH.52  | Total Inflows    | F54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     311 | 10.3 LCR History | CH.52  | Total Outflows   | G54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     312 | 10.3 LCR History | CH.52  | HQLA Requirement | H54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     313 | 10.3 LCR History | CH.53  | Date             | C55         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     314 | 10.3 LCR History | CH.53  | LCR              | D55         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     315 | 10.3 LCR History | CH.53  | Total HQLA       | E55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     316 | 10.3 LCR History | CH.53  | Total Inflows    | F55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     317 | 10.3 LCR History | CH.53  | Total Outflows   | G55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     318 | 10.3 LCR History | CH.53  | HQLA Requirement | H55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     319 | 10.3 LCR History | CH.54  | Date             | C56         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     320 | 10.3 LCR History | CH.54  | LCR              | D56         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     321 | 10.3 LCR History | CH.54  | Total HQLA       | E56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     322 | 10.3 LCR History | CH.54  | Total Inflows    | F56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     323 | 10.3 LCR History | CH.54  | Total Outflows   | G56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     324 | 10.3 LCR History | CH.54  | HQLA Requirement | H56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     325 | 10.3 LCR History | CH.55  | Date             | C57         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     326 | 10.3 LCR History | CH.55  | LCR              | D57         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     327 | 10.3 LCR History | CH.55  | Total HQLA       | E57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     328 | 10.3 LCR History | CH.55  | Total Inflows    | F57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     329 | 10.3 LCR History | CH.55  | Total Outflows   | G57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     330 | 10.3 LCR History | CH.55  | HQLA Requirement | H57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     331 | 10.3 LCR History | CH.56  | Date             | C58         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     332 | 10.3 LCR History | CH.56  | LCR              | D58         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     333 | 10.3 LCR History | CH.56  | Total HQLA       | E58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     334 | 10.3 LCR History | CH.56  | Total Inflows    | F58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     335 | 10.3 LCR History | CH.56  | Total Outflows   | G58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     336 | 10.3 LCR History | CH.56  | HQLA Requirement | H58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     337 | 10.3 LCR History | CH.57  | Date             | C59         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     338 | 10.3 LCR History | CH.57  | LCR              | D59         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     339 | 10.3 LCR History | CH.57  | Total HQLA       | E59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     340 | 10.3 LCR History | CH.57  | Total Inflows    | F59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     341 | 10.3 LCR History | CH.57  | Total Outflows   | G59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     342 | 10.3 LCR History | CH.57  | HQLA Requirement | H59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     343 | 10.3 LCR History | CH.58  | Date             | C60         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     344 | 10.3 LCR History | CH.58  | LCR              | D60         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     345 | 10.3 LCR History | CH.58  | Total HQLA       | E60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     346 | 10.3 LCR History | CH.58  | Total Inflows    | F60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     347 | 10.3 LCR History | CH.58  | Total Outflows   | G60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     348 | 10.3 LCR History | CH.58  | HQLA Requirement | H60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     349 | 10.3 LCR History | CH.59  | Date             | C61         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     350 | 10.3 LCR History | CH.59  | LCR              | D61         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     351 | 10.3 LCR History | CH.59  | Total HQLA       | E61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     352 | 10.3 LCR History | CH.59  | Total Inflows    | F61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     353 | 10.3 LCR History | CH.59  | Total Outflows   | G61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     354 | 10.3 LCR History | CH.59  | HQLA Requirement | H61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     355 | 10.3 LCR History | CH.60  | Date             | C62         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     356 | 10.3 LCR History | CH.60  | LCR              | D62         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     357 | 10.3 LCR History | CH.60  | Total HQLA       | E62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     358 | 10.3 LCR History | CH.60  | Total Inflows    | F62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     359 | 10.3 LCR History | CH.60  | Total Outflows   | G62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     360 | 10.3 LCR History | CH.60  | HQLA Requirement | H62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     361 | 10.3 LCR History | CH.61  | Date             | C63         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     362 | 10.3 LCR History | CH.61  | LCR              | D63         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     363 | 10.3 LCR History | CH.61  | Total HQLA       | E63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     364 | 10.3 LCR History | CH.61  | Total Inflows    | F63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     365 | 10.3 LCR History | CH.61  | Total Outflows   | G63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     366 | 10.3 LCR History | CH.61  | HQLA Requirement | H63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     367 | 10.3 LCR History | CH.62  | Date             | C64         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     368 | 10.3 LCR History | CH.62  | LCR              | D64         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     369 | 10.3 LCR History | CH.62  | Total HQLA       | E64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     370 | 10.3 LCR History | CH.62  | Total Inflows    | F64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     371 | 10.3 LCR History | CH.62  | Total Outflows   | G64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     372 | 10.3 LCR History | CH.62  | HQLA Requirement | H64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     373 | 10.3 LCR History | CH.63  | Date             | C65         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     374 | 10.3 LCR History | CH.63  | LCR              | D65         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     375 | 10.3 LCR History | CH.63  | Total HQLA       | E65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     376 | 10.3 LCR History | CH.63  | Total Inflows    | F65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     377 | 10.3 LCR History | CH.63  | Total Outflows   | G65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     378 | 10.3 LCR History | CH.63  | HQLA Requirement | H65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     379 | 10.3 LCR History | CH.64  | Date             | C66         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     380 | 10.3 LCR History | CH.64  | LCR              | D66         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     381 | 10.3 LCR History | CH.64  | Total HQLA       | E66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|   Check | Sheet            | Item   | Column           | Cell  Ref   | Validation Message                                                                 |
|     382 | 10.3 LCR History | CH.64  | Total Inflows    | F66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     383 | 10.3 LCR History | CH.64  | Total Outflows   | G66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     384 | 10.3 LCR History | CH.64  | HQLA Requirement | H66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     385 | 10.3 LCR History | CH.65  | Date             | C67         | Input must be a date between 1/1/2019 and 31/12/2050                               |
|     386 | 10.3 LCR History | CH.65  | LCR              | D67         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|     387 | 10.3 LCR History | CH.65  | Total HQLA       | E67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     388 | 10.3 LCR History | CH.65  | Total Inflows    | F67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     389 | 10.3 LCR History | CH.65  | Total Outflows   | G67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|     390 | 10.3 LCR History | CH.65  | HQLA Requirement | H67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |