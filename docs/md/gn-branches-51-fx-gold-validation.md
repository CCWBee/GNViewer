
## Guidance Note

## Validation and verification of the '5.1 FX &amp; Gold' Sheet

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

|   Check | Sheet         | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|---------|---------------|--------|---------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 5.1 FX & Gold | A.1    | Balance Sheet Assets      | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 5.1 FX & Gold | A.1    | Balance Sheet Liabilities | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 5.1 FX & Gold | A.1    | Forward Gross Purchases   | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 5.1 FX & Gold | A.1    | Forward Gross Sales       | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 5.1 FX & Gold | A.2    | Balance Sheet Assets      | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 5.1 FX & Gold | A.2    | Balance Sheet Liabilities | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 5.1 FX & Gold | A.2    | Forward Gross Purchases   | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 5.1 FX & Gold | A.2    | Forward Gross Sales       | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 5.1 FX & Gold | A.3    | Balance Sheet Assets      | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 5.1 FX & Gold | A.3    | Balance Sheet Liabilities | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 5.1 FX & Gold | A.3    | Forward Gross Purchases   | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 5.1 FX & Gold | A.3    | Forward Gross Sales       | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 5.1 FX & Gold | A.4    | Balance Sheet Assets      | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 5.1 FX & Gold | A.4    | Balance Sheet Liabilities | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      15 | 5.1 FX & Gold | A.4    | Forward Gross Purchases   | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 5.1 FX & Gold | A.4    | Forward Gross Sales       | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 5.1 FX & Gold | A.5    | Balance Sheet Assets      | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 5.1 FX & Gold | A.5    | Balance Sheet Liabilities | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 5.1 FX & Gold | A.5    | Forward Gross Purchases   | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 5.1 FX & Gold | A.5    | Forward Gross Sales       | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 5.1 FX & Gold | A.6    | Balance Sheet Assets      | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 5.1 FX & Gold | A.6    | Balance Sheet Liabilities | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 5.1 FX & Gold | A.6    | Forward Gross Purchases   | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 5.1 FX & Gold | A.6    | Forward Gross Sales       | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 5.1 FX & Gold | A.7    | Balance Sheet Assets      | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 5.1 FX & Gold | A.7    | Balance Sheet Liabilities | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 5.1 FX & Gold | A.7    | Forward Gross Purchases   | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 5.1 FX & Gold | A.7    | Forward Gross Sales       | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 5.1 FX & Gold | A.8    | Balance Sheet Assets      | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 5.1 FX & Gold | A.8    | Balance Sheet Liabilities | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 5.1 FX & Gold | A.8    | Forward Gross Purchases   | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 5.1 FX & Gold | A.8    | Forward Gross Sales       | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                    | Cell  Ref   | Validation Message                                                         |
|      33 | 5.1 FX & Gold | A.9    | Balance Sheet Assets      | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 5.1 FX & Gold | A.9    | Balance Sheet Liabilities | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 5.1 FX & Gold | A.9    | Forward Gross Purchases   | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 5.1 FX & Gold | A.9    | Forward Gross Sales       | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 5.1 FX & Gold | A.10   | Balance Sheet Assets      | C12         | Must be blank                                                              |
|      38 | 5.1 FX & Gold | A.10   | Balance Sheet Liabilities | D12         | Must be blank                                                              |
|      39 | 5.1 FX & Gold | A.10   | Balance Sheet Liabilities | E12         | Must be blank                                                              |
|      40 | 5.1 FX & Gold | A.10   | Forward Gross Purchases   | F12         | Must be blank                                                              |
|      41 | 5.1 FX & Gold | A.10   | Forward Gross Sales       | G12         | Must be blank                                                              |
|      42 | 5.1 FX & Gold | A.10   | Forward Gross Sales       | H12         | Must be blank                                                              |
|      43 | 5.1 FX & Gold | A.0    | Balance Sheet Assets      | C13         | Must be blank                                                              |
|      44 | 5.1 FX & Gold | A.0    | Balance Sheet Liabilities | D13         | Must be blank                                                              |
|      45 | 5.1 FX & Gold | A.0    | Balance Sheet Liabilities | E13         | Must be blank                                                              |
|      46 | 5.1 FX & Gold | A.0    | Forward Gross Purchases   | F13         | Must be blank                                                              |
|      47 | 5.1 FX & Gold | A.0    | Forward Gross Sales       | G13         | Must be blank                                                              |
|      48 | 5.1 FX & Gold | A.0    | Forward Gross Sales       | H13         | Must be blank                                                              |
|      49 | 5.1 FX & Gold | B.0    | Balance Sheet Assets      | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 5.1 FX & Gold | B.0    | Balance Sheet Liabilities | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet         | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      51 | 5.1 FX & Gold | B.0    | Forward Gross Purchases | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 5.1 FX & Gold | B.0    | Forward Gross Sales     | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet         | Item   | Column        | Cell Ref   | Excel     |
|---------|---------------|--------|---------------|------------|-----------|
|      53 | 5.1 FX & Gold | A.1    | Spot - Net    | E3         | = C3 - D3 |
|      54 | 5.1 FX & Gold | A.1    | Forward - Net | H3         | = F3 - G3 |
|      55 | 5.1 FX & Gold | A.1    | Overall Total | I3         | = E3 + H3 |
|      56 | 5.1 FX & Gold | A.2    | Spot - Net    | E4         | = C4 - D4 |
|      57 | 5.1 FX & Gold | A.2    | Forward - Net | H4         | = F4 - G4 |
|      58 | 5.1 FX & Gold | A.2    | Overall Total | I4         | = E4 + H4 |
|      59 | 5.1 FX & Gold | A.3    | Spot - Net    | E5         | = C5 - D5 |
|      60 | 5.1 FX & Gold | A.3    | Forward - Net | H5         | = F5 - G5 |
|      61 | 5.1 FX & Gold | A.3    | Overall Total | I5         | = E5 + H5 |
|      62 | 5.1 FX & Gold | A.4    | Spot - Net    | E6         | = C6 - D6 |
|      63 | 5.1 FX & Gold | A.4    | Forward - Net | H6         | = F6 - G6 |
|      64 | 5.1 FX & Gold | A.4    | Overall Total | I6         | = E6 + H6 |
|      65 | 5.1 FX & Gold | A.5    | Spot - Net    | E7         | = C7 - D7 |
|      66 | 5.1 FX & Gold | A.5    | Forward - Net | H7         | = F7 - G7 |
|      67 | 5.1 FX & Gold | A.5    | Overall Total | I7         | = E7 + H7 |
|   Check | Sheet         | Item   | Column        | Cell Ref   | Excel                    |
|      68 | 5.1 FX & Gold | A.6    | Spot - Net    | E8         | = C8 - D8                |
|      69 | 5.1 FX & Gold | A.6    | Forward - Net | H8         | = F8 - G8                |
|      70 | 5.1 FX & Gold | A.6    | Overall Total | I8         | = E8 + H8                |
|      71 | 5.1 FX & Gold | A.7    | Spot - Net    | E9         | = C9 - D9                |
|      72 | 5.1 FX & Gold | A.7    | Forward - Net | H9         | = F9 - G9                |
|      73 | 5.1 FX & Gold | A.7    | Overall Total | I9         | = E9 + H9                |
|      74 | 5.1 FX & Gold | A.8    | Spot - Net    | E10        | = C10 - D10              |
|      75 | 5.1 FX & Gold | A.8    | Forward - Net | H10        | = F10 - G10              |
|      76 | 5.1 FX & Gold | A.8    | Overall Total | I10        | = E10 + H10              |
|      77 | 5.1 FX & Gold | A.9    | Spot - Net    | E11        | = C11 - D11              |
|      78 | 5.1 FX & Gold | A.9    | Forward - Net | H11        | = F11 - G11              |
|      79 | 5.1 FX & Gold | A.9    | Overall Total | I11        | = E11 + H11              |
|      80 | 5.1 FX & Gold | A.10   | Overall Total | I12        | = - SUM( I3:I11 )        |
|      81 | 5.1 FX & Gold | A.0    | Overall Total | I13        | = SUMIF( I3:I12 , ">0" ) |
|      82 | 5.1 FX & Gold | B.0    | Spot - Net    | E14        | = C14 - D14              |
|      83 | 5.1 FX & Gold | B.0    | Forward - Net | H14        | = F14 - G14              |
|      84 | 5.1 FX & Gold | B.0    | Overall Total | I14        | = E14 + H14              |