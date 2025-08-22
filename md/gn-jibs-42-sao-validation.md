
## Guidance Note

## Validation and verification of the '4.2 SAO' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

## 1 Overview

## General points

- 1.1 No data to be entered unless the JIB uses the SAO method for calculation of operational risk, which must be reflected in the Submission Header.
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

|   Check | Sheet   | Item   | Column    | Cell Ref   | Validation Message   |
|---------|---------|--------|-----------|------------|----------------------|
|       1 | 4.2 SAO | A.1    | Last Year | D3         | Must be blank        |
|   Check | Sheet   | Column        | Cell Ref   | Validation Message                                                         |
|---------|---------|---------------|------------|----------------------------------------------------------------------------|
|       2 | 4.2 SAO | 1 year prior  | E3         | Must be blank                                                              |
|       3 | 4.2 SAO | 2 years prior | F3         | Must be blank                                                              |
|       4 | 4.2 SAO | Consistency   | C4         | Must be blank                                                              |
|       5 | 4.2 SAO | Last Year     | D5         | Must be blank                                                              |
|       6 | 4.2 SAO | 1 year prior  | E5         | Must be blank                                                              |
|       7 | 4.2 SAO | 2 years prior | F5         | Must be blank                                                              |
|       8 | 4.2 SAO | Consistency   | C6         | Must be blank                                                              |
|       9 | 4.2 SAO | Last year     | D6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 4.2 SAO | 1 year prior  | E6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 4.2 SAO | 2 years prior | F6         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 4.2 SAO | Consistency   | C7         | Must be blank                                                              |
|      13 | 4.2 SAO | Last year     | D7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 4.2 SAO | 1 year prior  | E7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 4.2 SAO | 2 years prior | F7         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 4.2 SAO | Consistency   | C8         | Must be blank                                                              |
|      17 | 4.2 SAO | Last year     | D8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 4.2 SAO | 1 year prior  | E8         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet   | Item   | Column            | Cell Ref   | Validation Message                                                         |
|      19 | 4.2 SAO | B.3    | 2 years prior F8  |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 4.2 SAO | B.4    | Consistency C9    |            | Must be blank                                                              |
|      21 | 4.2 SAO | B.4    | Last year         | D9         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 4.2 SAO | B.4    | 1 year prior E9   |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 4.2 SAO | B.4    | 2 years prior F9  |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 4.2 SAO | B.5    | Consistency       | C10        | Must be blank                                                              |
|      25 | 4.2 SAO | B.5    | Last year         | D10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 4.2 SAO | B.5    | 1 year prior      | E10        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 4.2 SAO | B.5    | 2 years prior F10 |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 4.2 SAO | B.6    | Consistency       | C11        | Must be blank                                                              |
|      29 | 4.2 SAO | B.6    | Last year         | D11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 4.2 SAO | B.6    | 1 year prior      | E11        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 4.2 SAO | B.6    | 2 years prior F11 |            | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 4.2 SAO | B.7    | Consistency       | C12        | Must be blank                                                              |
|      33 | 4.2 SAO | B.7    | Last year         | D12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 4.2 SAO | B.7    | 1 year prior      | E12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 4.2 SAO | B.7    | 2 years prior     | F12        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet   | Item   | Column        | Cell Ref   | Validation Message                                                         |
|      36 | 4.2 SAO | B.8    | Consistency   | C13        | Must be blank                                                              |
|      37 | 4.2 SAO | B.8    | Last year     | D13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 4.2 SAO | B.8    | 1 year prior  | E13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 4.2 SAO | B.8    | 2 years prior | F13        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 4.2 SAO | B.0    | Consistency   | C14        | Must be blank                                                              |
|      41 | 4.2 SAO | C.1    | Consistency   | C15        | Must be blank                                                              |
|      42 | 4.2 SAO | C.2    | Consistency   | C16        | Must be blank                                                              |
|      43 | 4.2 SAO | C.3    | Consistency   | C17        | Must be blank                                                              |
|      44 | 4.2 SAO | C.4    | Consistency   | C18        | Must be blank                                                              |
|      45 | 4.2 SAO | C.5    | Consistency   | C19        | Must be blank                                                              |
|      46 | 4.2 SAO | C.6    | Consistency   | C20        | Must be blank                                                              |
|      47 | 4.2 SAO | C.7    | Consistency   | C21        | Must be blank                                                              |
|      48 | 4.2 SAO | C.8    | Consistency   | C22        | Must be blank                                                              |
|      49 | 4.2 SAO | C.0    | Consistency   | C23        | Must be blank                                                              |
|      50 | 4.2 SAO | D.0    | Consistency   | C24        | Must be blank                                                              |
|      51 | 4.2 SAO | D.0    | 1 year prior  | E24        | Must be blank                                                              |
|      52 | 4.2 SAO | D.0    | 2 years prior | F24        | Must be blank                                                              |

## Validation and verification of the '4.2 SAO' Sheet

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet   | Item   | Column        | Cell  Ref   | Excel                                                   |
|---------|---------|--------|---------------|-------------|---------------------------------------------------------|
|      53 | 4.2 SAO | A.1    | Last year     | C3          | = 'Submission Header'!B6                                |
|      54 | 4.2 SAO | A.2    | Last year     | D4          | = COUNT( D6:D13 )                                       |
|      55 | 4.2 SAO | A.2    | 1 year prior  | E4          | = COUNT( E6:E13 )                                       |
|      56 | 4.2 SAO | A.2    | 2 years prior | F4          | = COUNT( F6:F13 )                                       |
|      57 | 4.2 SAO | A.0    | Consistency   | C5          | =IF( OR( C3="SAO",  SUM(D4:F4)=0 ) , "TRUE" , "FALSE" ) |
|      58 | 4.2 SAO | B.0    | Last year     | D14         | = SUM( D6:D13 )                                         |
|      59 | 4.2 SAO | B.0    | 1 year prior  | E14         | = SUM( E6:E13 )                                         |
|      60 | 4.2 SAO | B.0    | 2 years prior | F14         | = SUM( F6:F13 )                                         |
|      61 | 4.2 SAO | C.1    | Last year     | D15         | = ROUND( D6*18% , 0 )                                   |
|      62 | 4.2 SAO | C.1    | 1 year prior  | E15         | = ROUND( E6*18% , 0 )                                   |
|      63 | 4.2 SAO | C.1    | 2 years prior | F15         | = ROUND( F6*18% , 0 )                                   |
|      64 | 4.2 SAO | C.2    | Last year     | D16         | = ROUND( D7*18% , 0 )                                   |
|      65 | 4.2 SAO | C.2    | 1 year prior  | E16         | = ROUND( E7*18% , 0 )                                   |
|      66 | 4.2 SAO | C.2    | 2 years prior | F16         | = ROUND( F7*18% , 0 )                                   |
|   67 | 4.2 SAO   | C.3   | Last year     | D17   | = ROUND( D8*12% , 0 )   |
|   68 | 4.2 SAO   | C.3   | 1 year prior  | E17   | = ROUND( E8*12% , 0 )   |
|   69 | 4.2 SAO   | C.3   | 2 years prior | F17   | = ROUND( F8*12% , 0 )   |
|   70 | 4.2 SAO   | C.4   | Last year     | D18   | = ROUND( D9*15% , 0 )   |
|   71 | 4.2 SAO   | C.4   | 1 year prior  | E18   | = ROUND( E9*15% , 0 )   |
|   72 | 4.2 SAO   | C.4   | 2 years prior | F18   | = ROUND( F9*15% , 0 )   |
|   73 | 4.2 SAO   | C.5   | Last year     | D19   | = ROUND( D10*18% , 0 )  |
|   74 | 4.2 SAO   | C.5   | 1 year prior  | E19   | = ROUND( E10*18% , 0 )  |
|   75 | 4.2 SAO   | C.5   | 2 years prior | F19   | = ROUND( F10*18% , 0 )  |
|   76 | 4.2 SAO   | C.6   | Last year     | D20   | = ROUND( D11*15% , 0 )  |
|   77 | 4.2 SAO   | C.6   | 1 year prior  | E20   | = ROUND( E11*15% , 0 )  |
|   78 | 4.2 SAO   | C.6   | 2 years prior | F20   | = ROUND( F11*15% , 0 )  |
|   79 | 4.2 SAO   | C.7   | Last year     | D21   | = ROUND( D12*12% , 0 )  |
|   80 | 4.2 SAO   | C.7   | 1 year prior  | E21   | = ROUND( E12*12% , 0 )  |
|   81 | 4.2 SAO   | C.7   | 2 years prior | F21   | = ROUND( F12*12% , 0 )  |
|   82 | 4.2 SAO   | C.8   | Last year     | D22   | = ROUND( D13*12% , 0 )  |
|   83 | 4.2 SAO   | C.8   | 1 year prior  | E22   | = ROUND( E13*12% , 0 )  |
|   84 | 4.2 SAO   | C.8   | 2 years prior | F22   | = ROUND( F13*12% , 0 )  |
|   85 | 4.2 SAO   | C.0   | Last year     | D23   | = SUM( D15:D22 )                                                                                    |
|   86 | 4.2 SAO   | C.0   | 1 year prior  | E23   | = SUM( E15:E22 )                                                                                    |
|   87 | 4.2 SAO   | C.0   | 2 years prior | F23   | = SUM( F15:F22 )                                                                                    |
|   88 | 4.2 SAO   | D.0   | Last year     | D24   | =IF ( MAX( D23:F23 )>0, ROUND( 1250% * SUMIF( D23:F23,  ">0" ) / COUNTIF( D23:F23, ">0" ) ,0 ) ,0 ) |

## 4 Logical checks

## 4.1 Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.

|   Check | Sheet   | Ite m   | Column    | Cell  Ref   | Check                 | Validation Message                                                                              |
|---------|---------|---------|-----------|-------------|-----------------------|-------------------------------------------------------------------------------------------------|
|      89 | 4.2 SAO | A.0     | Last year | C5          | Value must equal TRUE | IF Operational Risk Method is not 'SAO' then all data  entered on sheet '4.2 SAO' must be blank |