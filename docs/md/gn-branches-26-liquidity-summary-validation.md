
## Guidance Note

## Validation and verification of the '2.6 Liquidity Summary' Sheet

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

- 2.1 There is no data entry expected in this sheet. Calculated fields are addressed in Section 3.

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                 | Item   | Column   | Cell   | Excel                                                                       |
|---------|-----------------------|--------|----------|--------|-----------------------------------------------------------------------------|
|       1 | 2.6 Liquidity Summary | A.1    | Total    | C3     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A3,'2.1 BS Assets'!C:C)  |
|       2 | 2.6 Liquidity Summary | A.2    | Total    | C4     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A4,'2.1 BS Assets'!C:C)  |
|       3 | 2.6 Liquidity Summary | A.3    | Total    | C5     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A5,'2.1 BS Assets'!C:C)  |
|       4 | 2.6 Liquidity Summary | A.4    | Total    | C6     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A6,'2.1 BS Assets'!C:C)  |
|       5 | 2.6 Liquidity Summary | A.5    | Total    | C7     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A7,'2.1 BS Assets'!C:C)  |
|       6 | 2.6 Liquidity Summary | A.6    | Total    | C8     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A8,'2.1 BS Assets'!C:C)  |
|       7 | 2.6 Liquidity Summary | A.7    | Total    | C9     | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A9,'2.1 BS Assets'!C:C)  |
|       8 | 2.6 Liquidity Summary | A.8    | Total    | C10    | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A10,'2.1 BS Assets'!C:C) |
|       9 | 2.6 Liquidity Summary | A.9    | Total    | C11    | =SUMIF('2.1 BS Assets'!D:D,'2.6 Liquidity Summary'!A11,'2.1 BS Assets'!C:C) |
|      10 | 2.6 Liquidity Summary | A.0    | Total    | C12    | =SUM(C3:C11)                                                                |
|   Check | Sheet                 | Item      | Column   | Cell  Ref   | Excel                                                                                  |
|      11 | 2.6 Liquidity Summary | B.1       | Total    | C13         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A13,'2.3 BS  Liabilities'!C:C) |
|      12 | 2.6 Liquidity Summary | B.2 / B.3 | Total    | C14         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A14,'2.3 BS  Liabilities'!C:C) |
|      13 | 2.6 Liquidity Summary | B.4 / B.5 | Total    | C15         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A15,'2.3 BS  Liabilities'!C:C) |
|      14 | 2.6 Liquidity Summary | B.6       | Total    | C16         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A16,'2.3 BS  Liabilities'!C:C) |
|      15 | 2.6 Liquidity Summary | B.7       | Total    | C17         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A17,'2.3 BS  Liabilities'!C:C) |
|      16 | 2.6 Liquidity Summary | B.8       | Total    | C18         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A18,'2.3 BS  Liabilities'!C:C) |
|      17 | 2.6 Liquidity Summary | B.9       | Total    | C19         | =SUMIF('2.3 BS Liabilities'!D:D,'2.6 Liquidity Summary'!A19,'2.3 BS  Liabilities'!C:C) |
|      18 | 2.6 Liquidity Summary | B.0       | Total    | C20         | =SUM(C13:C19)                                                                          |

## 4 Logical checks

Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.  A 'Comment box' appears once user left-clicks the highlighted cell.

|   Check | Sheet                 | Sum A (Excel)   | Sum B (Excel)                                   | Check          |
|---------|-----------------------|-----------------|-------------------------------------------------|----------------|
|      19 | 2.6 Liquidity Summary | =$C3            | =SUM('11.1 Liquidity - Cashflows'!$D3:$L3)      | A must equal B |
|      20 | 2.6 Liquidity Summary | =$C4            | =SUM('11.1 Liquidity - Cashflows'!$D4:$L4)      | A must equal B |
|      21 | 2.6 Liquidity Summary | =$C5            | =SUM('11.1 Liquidity - Cashflows'!$D5:$L5)      | A must equal B |
|      22 | 2.6 Liquidity Summary | =$C6            | =SUM('11.1 Liquidity - Cashflows'!$D6:$L6)      | A must equal B |
|      23 | 2.6 Liquidity Summary | =$C7            | = SUM('11.1 Liquidity - Cashflows'!$D7:$L7)     | A must equal B |
|      24 | 2.6 Liquidity Summary | =$C8            | = SUM('11.1 Liquidity - Cashflows'!$D8:$L8)     | A must equal B |
|      25 | 2.6 Liquidity Summary | =$C9            | = SUM('11.1 Liquidity - Cashflows'!$D9:$L9)     | A must equal B |
|      26 | 2.6 Liquidity Summary | =$C10           | = SUM('11.1 Liquidity - Cashflows'!$D10:$L10)   | A must equal B |
|      27 | 2.6 Liquidity Summary | =$C11           | = SUM('11.1 Liquidity - Cashflows'!$D11:$L11)   | A must equal B |
|      28 | 2.6 Liquidity Summary | =$C13           | = SUM('11.1 Liquidity - Cashflows'!$D18:$L18)   | A must equal B |
|      29 | 2.6 Liquidity Summary | =$C14           | = SUM('11.1 Liquidity - Cashflows'!$D$19:$L$20) | A must equal B |
|      30 | 2.6 Liquidity Summary | =$C15           | = SUM('11.1 Liquidity - Cashflows'!$D$21:$L$22) | A must equal B |
|      31 | 2.6 Liquidity Summary | =$C16           | = SUM('11.1 Liquidity - Cashflows'!$D23:$L23)   | A must equal B |
|      32 | 2.6 Liquidity Summary | =$C17           | = SUM('11.1 Liquidity - Cashflows'!$D24:$L24)   | A must equal B |
|      33 | 2.6 Liquidity Summary | =$C18           | = SUM('11.1 Liquidity - Cashflows'!$D26:$L26)   | A must equal B |
|      34 | 2.6 Liquidity Summary | =$C19           | = SUM('11.1 Liquidity - Cashflows'!$D27:$L27)   | A must equal B |
