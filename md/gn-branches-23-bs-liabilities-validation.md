
## Guidance Note

## Validation and verification of the '2.3 BS Liabilities' Sheet

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

|   Check | Sheet              | Item   | Column    | Cell  Ref   | Validation Message                                                         |
|---------|--------------------|--------|-----------|-------------|----------------------------------------------------------------------------|
|       1 | 2.3 BS Liabilities | A.1    | Value     | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 2.3 BS Liabilities | A.2    | Value     | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 2.3 BS Liabilities | A.3    | Value     | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 2.3 BS Liabilities | A.4    | Value     | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 2.3 BS Liabilities | A.5    | Value     | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 2.3 BS Liabilities | A.6    | Value     | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 2.3 BS Liabilities | A.7    | Value     | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 2.3 BS Liabilities | A.0    | Liquidity | D10         | Must be blank                                                              |
|       9 | 2.3 BS Liabilities | B.1    | Value     | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 2.3 BS Liabilities | B.2    | Value     | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 2.3 BS Liabilities | B.3    | Value     | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 2.3 BS Liabilities | B.0    | Liquidity | D14         | Must be blank                                                              |
|      13 | 2.3 BS Liabilities | C.1    | Value     | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column    | Cell  Ref   | Validation Message                                                         |
|      14 | 2.3 BS Liabilities | C.2    | Value     | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 2.3 BS Liabilities | C.3    | Value     | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 2.3 BS Liabilities | C.4    | Value     | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 2.3 BS Liabilities | C.5    | Value     | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 2.3 BS Liabilities | C.6    | Value     | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 2.3 BS Liabilities | C.7.1  | Value     | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 2.3 BS Liabilities | C.7.2  | Value     | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 2.3 BS Liabilities | C.7.3  | Value     | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 2.3 BS Liabilities | C.7.4  | Value     | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 2.3 BS Liabilities | C.7    | Liquidity | D25         | Must be blank                                                              |
|      24 | 2.3 BS Liabilities | C.0    | Liquidity | D26         | Must be blank                                                              |
|      25 | 2.3 BS Liabilities | D.5    | Value     | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 2.3 BS Liabilities | D.6    | Value     | C28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 2.3 BS Liabilities | D.7    | Value     | C29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 2.3 BS Liabilities | D.8    | Value     | C30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 2.3 BS Liabilities | D.0    | Liquidity | D31         | Must be blank                                                              |
|      30 | 2.3 BS Liabilities | E.0    | Liquidity | D32         | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              | Item   | Column    | Cell  Ref   | Excel         |
|---------|--------------------|--------|-----------|-------------|---------------|
|      31 | 2.3 BS Liabilities | A.1    | Liquidity | D3          | B.1           |
|      32 | 2.3 BS Liabilities | A.2    | Liquidity | D4          | B.1           |
|      33 | 2.3 BS Liabilities | A.3    | Liquidity | D5          | B.1           |
|      34 | 2.3 BS Liabilities | A.4    | Liquidity | D6          | B.6           |
|      35 | 2.3 BS Liabilities | A.5    | Liquidity | D7          | B.2 / B.3     |
|      36 | 2.3 BS Liabilities | A.6    | Liquidity | D8          | B.4 / B.5     |
|      37 | 2.3 BS Liabilities | A.7    | Liquidity | D9          | B.7           |
|      38 | 2.3 BS Liabilities | A.0    | Value     | C10         | =SUM(C3:C9)   |
|      39 | 2.3 BS Liabilities | B.1    | Liquidity | D11         | B.9           |
|      40 | 2.3 BS Liabilities | B.2    | Liquidity | D12         | B.9           |
|      41 | 2.3 BS Liabilities | B.3    | Liquidity | D13         | B.9           |
|      42 | 2.3 BS Liabilities | B.0    | Value     | C14         | =SUM(C11:C13) |
|      43 | 2.3 BS Liabilities | C.1    | Liquidity | D15         | B.9           |
|      44 | 2.3 BS Liabilities | C.2    | Liquidity | D16         | B.9           |
|   Check | Sheet              | Item   | Column    | Cell  Ref   | Excel                 |
|      45 | 2.3 BS Liabilities | C.3    | Liquidity | D17         | B.9                   |
|      46 | 2.3 BS Liabilities | C.4    | Liquidity | D18         | B.9                   |
|      47 | 2.3 BS Liabilities | C.5    | Liquidity | D19         | B.9                   |
|      48 | 2.3 BS Liabilities | C.6    | Liquidity | D20         | B.9                   |
|      49 | 2.3 BS Liabilities | C.7.1  | Liquidity | D21         | B.9                   |
|      50 | 2.3 BS Liabilities | C.7.2  | Liquidity | D22         | B.9                   |
|      51 | 2.3 BS Liabilities | C.7.3  | Liquidity | D23         | B.9                   |
|      52 | 2.3 BS Liabilities | C.7.4  | Liquidity | D24         | B.9                   |
|      53 | 2.3 BS Liabilities | C.7    | Value     | C25         | =SUM(C21:C24)         |
|      54 | 2.3 BS Liabilities | C.0    | Value     | C26         | =SUM(C15:C20,C25)     |
|      55 | 2.3 BS Liabilities | D.5    | Liquidity | D27         | B.8                   |
|      56 | 2.3 BS Liabilities | D.6    | Liquidity | D28         | B.8                   |
|      57 | 2.3 BS Liabilities | D.7    | Liquidity | D29         | B.8                   |
|      58 | 2.3 BS Liabilities | D.8    | Liquidity | D30         | B.8                   |
|      59 | 2.3 BS Liabilities | D.0    | Value     | C31         | =SUM(C27:C30)         |
|      60 | 2.3 BS Liabilities | E.0    | Value     | C32         | =SUM(C10,C14,C26,C31) |

## 4 Logical checks

Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.  A 'Comment box' appears once user left-clicks the highlighted cell.

|   Check | Sheet              | Sum A (Excel)   | Sum B (Excel)               | Check          |
|---------|--------------------|-----------------|-----------------------------|----------------|
|      61 | 2.3 BS Liabilities | =$C$10          | ='8.3 Total Deposits'!$C$13 | A must equal B |
|      62 | 2.3 BS Liabilities | =$C$32          | ='2.1 BS Assets'!$C$71      | A must equal B |