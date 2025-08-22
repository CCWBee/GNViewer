
## Guidance Note

## Validation and verification of the '8.3 Total Deposits' Sheet

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

|   Check | Sheet              | Item   | Column      | Cell Ref   | Validation Message                                                         |
|---------|--------------------|--------|-------------|------------|----------------------------------------------------------------------------|
|       1 | 8.3 Total Deposits | A.1    | Sterling    | C3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 8.3 Total Deposits | A.1    | Euro        | D3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 8.3 Total Deposits | A.1    | US Dollar   | E3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 8.3 Total Deposits | A.1    | Swiss Franc | F3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 8.3 Total Deposits | A.1    | Yen         | G3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 8.3 Total Deposits | A.1    | Currency    | H3         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 8.3 Total Deposits | A.2    | Sterling    | C4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 8.3 Total Deposits | A.2    | Euro        | D4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 8.3 Total Deposits | A.2    | US Dollar   | E4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 8.3 Total Deposits | A.2    | Swiss Franc | F4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 8.3 Total Deposits | A.2    | Yen         | G4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 8.3 Total Deposits | A.2    | Currency    | H4         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 8.3 Total Deposits | A.3    | Sterling    | C5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 8.3 Total Deposits | A.3    | Euro        | D5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column      | Cell Ref   | Validation Message                                                         |
|      15 | 8.3 Total Deposits | A.3    | US Dollar   | E5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 8.3 Total Deposits | A.3    | Swiss Franc | F5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 8.3 Total Deposits | A.3    | Yen         | G5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 8.3 Total Deposits | A.3    | Currency    | H5         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 8.3 Total Deposits | A.4    | Sterling    | C6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 8.3 Total Deposits | A.4    | Euro        | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 8.3 Total Deposits | A.4    | US Dollar   | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 8.3 Total Deposits | A.4    | Swiss Franc | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 8.3 Total Deposits | A.4    | Yen         | G6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 8.3 Total Deposits | A.4    | Currency    | H6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 8.3 Total Deposits | A.5    | Sterling    | C7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 8.3 Total Deposits | A.5    | Euro        | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 8.3 Total Deposits | A.5    | US Dollar   | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 8.3 Total Deposits | A.5    | Swiss Franc | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 8.3 Total Deposits | A.5    | Yen         | G7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 8.3 Total Deposits | A.5    | Currency    | H7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 8.3 Total Deposits | A.6    | Sterling    | C8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column      | Cell Ref   | Validation Message                                                         |
|      32 | 8.3 Total Deposits | A.6    | Euro        | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 8.3 Total Deposits | A.6    | US Dollar   | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 8.3 Total Deposits | A.6    | Swiss Franc | F8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 8.3 Total Deposits | A.6    | Yen         | G8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 8.3 Total Deposits | A.6    | Currency    | H8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 8.3 Total Deposits | A.7    | Sterling    | C9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 8.3 Total Deposits | A.7    | Euro        | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 8.3 Total Deposits | A.7    | US Dollar   | E9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 8.3 Total Deposits | A.7    | Swiss Franc | F9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 8.3 Total Deposits | A.7    | Yen         | G9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 8.3 Total Deposits | A.7    | Currency    | H9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 8.3 Total Deposits | A.8    | Sterling    | C10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 8.3 Total Deposits | A.8    | Euro        | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 8.3 Total Deposits | A.8    | US Dollar   | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 8.3 Total Deposits | A.8    | Swiss Franc | F10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 8.3 Total Deposits | A.8    | Yen         | G10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 8.3 Total Deposits | A.8    | Currency    | H10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column      | Cell Ref   | Validation Message                                                         |
|      49 | 8.3 Total Deposits | A.9    | Sterling    | C11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 8.3 Total Deposits | A.9    | Euro        | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 8.3 Total Deposits | A.9    | US Dollar   | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 8.3 Total Deposits | A.9    | Swiss Franc | F11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 8.3 Total Deposits | A.9    | Yen         | G11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 8.3 Total Deposits | A.9    | Currency    | H11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 8.3 Total Deposits | B      | Euro        | D13        | Must be blank                                                              |
|      56 | 8.3 Total Deposits | B      | US Dollar   | E13        | Must be blank                                                              |
|      57 | 8.3 Total Deposits | B      | Swiss Franc | F13        | Must be blank                                                              |
|      58 | 8.3 Total Deposits | B      | Yen         | G13        | Must be blank                                                              |
|      59 | 8.3 Total Deposits | B      | Currency    | H13        | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              | Item   | Column      | Cell  Ref   | Excel         |
|---------|--------------------|--------|-------------|-------------|---------------|
|      60 | 8.3 Total Deposits | A.0    | Sterling    | C12         | =SUM(C3:C11)  |
|      61 | 8.3 Total Deposits | A.0    | Euro        | D12         | =SUM(D3:D11)  |
|      62 | 8.3 Total Deposits | A.0    | US Dollar   | E12         | =SUM(E3:E11)  |
|      63 | 8.3 Total Deposits | A.0    | Swiss Franc | F12         | =SUM(F3:F11)  |
|      64 | 8.3 Total Deposits | A.0    | Yen         | G12         | =SUM(G3:G11)  |
|      65 | 8.3 Total Deposits | A.0    | Currency    | H12         | =SUM(H3:H11)  |
|      66 | 8.3 Total Deposits | B      | Sterling    | C13         | =SUM(C12:H12) |

## 4 Logical checks

Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.  A 'Comment box' appears once user left-clicks the highlighted cell.

|   Check | Sheet              | Sum A (Excel)   | Sum B (Excel)               | Check          |
|---------|--------------------|-----------------|-----------------------------|----------------|
|      67 | 8.3 Total Deposits | =$C$13          | ='2.3 BS Liabilities'!$C$10 | A must equal B |