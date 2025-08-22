
## Guidance Note

## Validation and verification of the '4.1 BIA' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

Revised February 2019 to amend column header in tables to refer to 'Column', rather than the previous 'Year'

## 1 Overview

## General points

- 1.1 No data to be entered unless the JIB uses the 4.1 BIA method for calculation of operational risk, which must be reflected in the Submission Header.
- 1.2 The validation and verification checks performed on submission are set out herein.
- 1.3 Excel data validation in the template is limited as follows:
- 1.3.1 For monetary amounts, cells have been restricted so that only integers in the range -1,000,000,000 to +1,000,000,000 can be entered, unless otherwise noted. As the unit is £1,000, this means that values of +/- £1 trillion are permitted.
- 1.3.2 Excel only checks validation on direct input and/or if manually requested so it should not be considered to be a failsafe JIBs should check their data and the JFSC will check the data on submission.
- 1.3.3 Submission of the template to the JFSC will prompt the checks to run. If all checks re passed, the submission will be accepted, this fact communicated to the JIB together with a list of any warnings.
- 1.4 In the tables below, both the item (in bold) and the Excel Location (Sheet and Cell reference) are provided.
- 1.5 When a test is failed, the message received will be as described herein.
- 1.6 The ' Check ' is a unique identifier for each test, provided within the message to enable the recipient to match the error message to this guidance.

## 2 Data input validation

## Validation of cells where data entry expected or that should be left blank

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook). Calculated fields are addressed in Section 3.

|   Check | Sheet   | Item   | Column        | Cell Ref   | Validation Message                                                         |
|---------|---------|--------|---------------|------------|----------------------------------------------------------------------------|
|       1 | 4.1 BIA | A.1    | Last Year     | D3         | Must be blank                                                              |
|       2 | 4.1 BIA | A.1    | 1 year prior  | E3         | Must be blank                                                              |
|       3 | 4.1 BIA | A.1    | 2 years prior | F3         | Must be blank                                                              |
|       4 | 4.1 BIA | A.2    | Consistency   | C4         | Must be blank                                                              |
|       5 | 4.1 BIA | A.0    | Last Year     | D5         | Must be blank                                                              |
|       6 | 4.1 BIA | A.0    | 1 year prior  | E5         | Must be blank                                                              |
|       7 | 4.1 BIA | A.0    | 2 years prior | F5         | Must be blank                                                              |
|       8 | 4.1 BIA | B.1    | Consistency   | C6         | Must be blank                                                              |
|       9 | 4.1 BIA | B.1    | Last year     | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 4.1 BIA | B.1    | 1 year prior  | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 4.1 BIA | B.1    | 2 years prior | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 4.1 BIA | B.2    | Consistency   | C7         | Must be blank                                                              |
|      13 | 4.1 BIA | B.2    | Last year     | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 4.1 BIA | B.2    | 1 year prior  | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet   | Item   | Column        | Cell Ref   | Validation Message                                                         |
|      15 | 4.1 BIA | B.2    | 2 years prior | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 4.1 BIA | B.0    | Consistency   | C8         | Must be blank                                                              |
|      17 | 4.1 BIA | C.1    | Consistency   | C9         | Must be blank                                                              |
|      18 | 4.1 BIA | C.1    | 1 year prior  | E9         | Must be blank                                                              |
|      19 | 4.1 BIA | C.1    | 2 years prior | F9         | Must be blank                                                              |
|      20 | 4.1 BIA | C.1    | Consistency   | C10        | Must be blank                                                              |
|      21 | 4.1 BIA | D.0    | 1 year prior  | E10        | Must be blank                                                              |
|      22 | 4.1 BIA | D.0    | 2 years prior | F10        | Must be blank                                                              |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet   | Item   | Column        | Cell  Ref   | Excel                                                                  |
|---------|---------|--------|---------------|-------------|------------------------------------------------------------------------|
|      23 | 4.1 BIA | A.1    | Last year     | C3          | = 'Submission Header'!B6                                               |
|      24 | 4.1 BIA | A.2    | Last year     | D4          | = COUNT( D6:D7 )                                                       |
|      25 | 4.1 BIA | A.2    | 1 year prior  | E4          | = COUNT( E6:E7 )                                                       |
|      26 | 4.1 BIA | A.2    | 2 years prior | F4          | = COUNT( F6:F7 )                                                       |
|      27 | 4.1 BIA | A.0    | Consistency   | C5          | =IF( OR( C3="BIA",  SUM(D4:F4)=0 ) , "TRUE" , "FALSE" )                |
|      27 | 4.1 BIA | B.0    | Last year     | D8          | = SUM( D6:D7 )                                                         |
|      28 | 4.1 BIA | B.0    | 1 year prior  | E8          | = SUM( E6:E7 )                                                         |
|      29 | 4.1 BIA | B.0    | 2 years prior | F8          | = SUM( F6:F7 )                                                         |
|      30 | 4.1 BIA | C.1    | Last year     | D9          | = IF( MAX( D8:F8 )>0, SUMIF( D8:F8,">0" ) / COUNTIF( D8:F8,">0" ) ,0 ) |
|      31 | 4.1 BIA | D.0    | Last year     | D10         | = ROUND( D9*15%*1250% ,0 )                                             |

## 4 Logical checks

- 4.1 Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.

|   Check | Sheet   | Item   | Column    | Cell Ref   | Check                 | Validation Message                                                                                  |
|---------|---------|--------|-----------|------------|-----------------------|-----------------------------------------------------------------------------------------------------|
|      32 | 4.1 BIA | A.0    | Last year | C5         | Value must equal TRUE | IF Operational Risk Method is not 'BIA' then all data  entry cells on sheet '4.1 BIA' must be blank |