
## Guidance Note

## Validation and verification of the '8.4 Lending by Sector' Sheet

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

|   Check | Sheet                 | Item   | Column    | Cell  Ref   | Validation Message                                                         |
|---------|-----------------------|--------|-----------|-------------|----------------------------------------------------------------------------|
|       1 | 8.4 Lending by Sector | A.1    | Local     | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 8.4 Lending by Sector | A.1    | Non Local | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 8.4 Lending by Sector | A.2    | Local     | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 8.4 Lending by Sector | A.2    | Non Local | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 8.4 Lending by Sector | A.3    | Local     | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 8.4 Lending by Sector | A.3    | Non Local | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 8.4 Lending by Sector | A.4    | Local     | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 8.4 Lending by Sector | A.4    | Non Local | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 8.4 Lending by Sector | A.5.1  | Local     | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 8.4 Lending by Sector | A.5.1  | Non Local | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 8.4 Lending by Sector | A.5.2  | Local     | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 8.4 Lending by Sector | A.5.2  | Non Local | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 8.4 Lending by Sector | A.5.3  | Local     | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column    | Cell  Ref   | Validation Message                                                         |
|      14 | 8.4 Lending by Sector | A.5.3  | Non Local | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 8.4 Lending by Sector | A.5.4  | Local     | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 8.4 Lending by Sector | A.5.4  | Non Local | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 8.4 Lending by Sector | A.5.5  | Local     | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 8.4 Lending by Sector | A.5.5  | Non Local | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 8.4 Lending by Sector | A.5.6  | Local     | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 8.4 Lending by Sector | A.5.6  | Non Local | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 8.4 Lending by Sector | A.6    | Local     | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 8.4 Lending by Sector | A.6    | Non Local | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 8.4 Lending by Sector | A.7    | Local     | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 8.4 Lending by Sector | A.7    | Non Local | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 8.4 Lending by Sector | A.8.1  | Local     | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 8.4 Lending by Sector | A.8.1  | Non Local | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 8.4 Lending by Sector | A.8.2  | Local     | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 8.4 Lending by Sector | A.8.2  | Non Local | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 8.4 Lending by Sector | A.8.3  | Local     | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 8.4 Lending by Sector | A.8.3  | Non Local | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column    | Cell  Ref   | Validation Message                                                         |
|      31 | 8.4 Lending by Sector | A.8.4  | Local     | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 8.4 Lending by Sector | A.8.4  | Non Local | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 8.4 Lending by Sector | A.8.5  | Local     | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 8.4 Lending by Sector | A.8.5  | Non Local | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 8.4 Lending by Sector | A.9.1  | Local     | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 8.4 Lending by Sector | A.9.1  | Non Local | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 8.4 Lending by Sector | A.9.2  | Local     | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 8.4 Lending by Sector | A.9.2  | Non Local | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 8.4 Lending by Sector | A.9.3  | Local     | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 8.4 Lending by Sector | A.9.3  | Non Local | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 8.4 Lending by Sector | A.9.4  | Local     | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 8.4 Lending by Sector | A.9.4  | Non Local | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 8.4 Lending by Sector | A.10.1 | Local     | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 8.4 Lending by Sector | A.10.1 | Non Local | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 8.4 Lending by Sector | A.10.2 | Local     | C25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 8.4 Lending by Sector | A.10.2 | Non Local | D25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 8.4 Lending by Sector | A.10.3 | Local     | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                 | Item   | Column    | Cell   | Validation Message                                                         |
|      48 | 8.4 Lending by Sector | A.10.3 | Non Local | D26    | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 8.4 Lending by Sector | B.1    | Local     | C27    | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 8.4 Lending by Sector | B.1    | Non Local | D27    | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 8.4 Lending by Sector | B.2    | Local     | C28    | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 8.4 Lending by Sector | B.2    | Non Local | D28    | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                 | Item   | Column   | Cell Ref   | Excel    |
|---------|-----------------------|--------|----------|------------|----------|
|      53 | 8.4 Lending by Sector | A.1    | Total    | E3         | =C3+D3   |
|      54 | 8.4 Lending by Sector | A.2    | Total    | E4         | =C4+D4   |
|      55 | 8.4 Lending by Sector | A.3    | Total    | E5         | =C5+D5   |
|      56 | 8.4 Lending by Sector | A.4    | Total    | E6         | =C6+D6   |
|      57 | 8.4 Lending by Sector | A.5.1  | Total    | E7         | =C7+D7   |
|      58 | 8.4 Lending by Sector | A.5.2  | Total    | E8         | =C8+D8   |
|      59 | 8.4 Lending by Sector | A.5.3  | Total    | E9         | =C9+D9   |
|      60 | 8.4 Lending by Sector | A.5.4  | Total    | E10        | =C10+D10 |
|      61 | 8.4 Lending by Sector | A.5.5  | Total    | E11        | =C11+D11 |
|      62 | 8.4 Lending by Sector | A.5.6  | Total    | E12        | =C12+D12 |
|      63 | 8.4 Lending by Sector | A.6    | Total    | E13        | =C13+D13 |
|      64 | 8.4 Lending by Sector | A.7    | Total    | E14        | =C14+D14 |
|      65 | 8.4 Lending by Sector | A.8.1  | Total    | E15        | =C15+D15 |
|      66 | 8.4 Lending by Sector | A.8.2  | Total    | E16        | =C16+D16 |
|   Check | Sheet                 | Item   | Column    | Cell Ref   | Excel         |
|      67 | 8.4 Lending by Sector | A.8.3  | Total     | E17        | =C17+D17      |
|      68 | 8.4 Lending by Sector | A.8.4  | Total     | E18        | =C18+D18      |
|      69 | 8.4 Lending by Sector | A.8.5  | Total     | E19        | =C19+D19      |
|      70 | 8.4 Lending by Sector | A.9.1  | Total     | E20        | =C20+D20      |
|      71 | 8.4 Lending by Sector | A.9.2  | Total     | E21        | =C21+D21      |
|      72 | 8.4 Lending by Sector | A.9.3  | Total     | E22        | =C22+D22      |
|      73 | 8.4 Lending by Sector | A.9.4  | Total     | E23        | =C23+D23      |
|      74 | 8.4 Lending by Sector | A.10.1 | Total     | E24        | =C24+D24      |
|      75 | 8.4 Lending by Sector | A.10.2 | Total     | E25        | =C25+D25      |
|      76 | 8.4 Lending by Sector | A.10.3 | Total     | E26        | =C26+D26      |
|      77 | 8.4 Lending by Sector | B.1    | Total     | E27        | =C27+D27      |
|      78 | 8.4 Lending by Sector | B.2    | Total     | E28        | =C28+D28      |
|      79 | 8.4 Lending by Sector | B.0    | Local     | C29        | =SUM(C27:C28) |
|      80 | 8.4 Lending by Sector | B.0    | Non Local | D29        | =SUM(D27:D28) |
|      81 | 8.4 Lending by Sector | B.0    | Total     | E29        | =SUM(E27:E28) |
|      82 | 8.4 Lending by Sector | A.0    | Local     | C30        | =SUM(C3:C26)  |
|      83 | 8.4 Lending by Sector | A.0    | Non Local | D30        | =SUM(D3:D26)  |
|   Check | Sheet                 | Item   | Column    | Cell Ref   | Excel        |
|      84 | 8.4 Lending by Sector | A.0    | Total     | E30        | =SUM(E3:E26) |
|      85 | 8.4 Lending by Sector | A.0.1  | Local     | C31        | =C29-C30     |
|      86 | 8.4 Lending by Sector | A.0.1  | Non Local | D31        | =D29-D30     |
|      87 | 8.4 Lending by Sector | A.0.1  | Total     | E31        | =E29-E30     |

## 4 Logical checks

Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.  A 'Comment box' appears once user left-clicks the highlighted cell.

|   Check | Sheet                 | Sum A (Excel)   | Sum B (Excel)        | Check          |
|---------|-----------------------|-----------------|----------------------|----------------|
|      88 | 8.4 Lending by Sector | =E30            | ='2.1 BS Assets'!C40 | A must equal B |
|      89 | 8.4 Lending by Sector | =C31            | 0                    | A must equal B |
|      90 | 8.4 Lending by Sector | =D31            | 0                    | A must equal B |
|      91 | 8.4 Lending by Sector | =E31            | 0                    | A must equal B |