
## Guidance Note

## Validation and verification of the '2.2 Credit Summary' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

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

|   Check | Sheet              | Item   | Column                | Cell Ref   | Validation Message   |
|---------|--------------------|--------|-----------------------|------------|----------------------|
|       1 | 2.2 Credit Summary | K      | Standardised Approach | C12        | Must be blank        |
|       2 | 2.2 Credit Summary | K      | F-IRB                 | D12        | Must be blank        |
|       3 | 2.2 Credit Summary | K      | A-IRB                 | E12        | Must be blank        |
|       4 | 2.2 Credit Summary | K      | Trading Book          | F12        | Must be blank        |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              | Item   | Column                | Cell Ref   | Excel                                                        |
|---------|--------------------|--------|-----------------------|------------|--------------------------------------------------------------|
|       5 | 2.2 Credit Summary | A      | Standardised Approach | C3         | = SUMIF( '2.1 BS Assets'!$H:$H , $A3 , '2.1 BS Assets'!C:C ) |
|       6 | 2.2 Credit Summary | A      | F-IRB                 | D3         | = SUMIF( '2.1 BS Assets'!$H:$H , $A3 , '2.1 BS Assets'!D:D ) |
|       7 | 2.2 Credit Summary | A      | A-IRB                 | E3         | = SUMIF( '2.1 BS Assets'!$H:$H , $A3 , '2.1 BS Assets'!E:E ) |
|       8 | 2.2 Credit Summary | A      | Trading Book          | F3         | = SUMIF( '2.1 BS Assets'!$H:$H , $A3 , '2.1 BS Assets'!F:F ) |
|       9 | 2.2 Credit Summary | A      | Total                 | G3         | = C3 + D3 + E3 + F3                                          |
|      10 | 2.2 Credit Summary | B      | Standardised Approach | C4         | = SUMIF( '2.1 BS Assets'!$H:$H , $A4 , '2.1 BS Assets'!C:C ) |
|      11 | 2.2 Credit Summary | B      | F-IRB                 | D4         | = SUMIF( '2.1 BS Assets'!$H:$H , $A4 , '2.1 BS Assets'!D:D ) |
|      12 | 2.2 Credit Summary | B      | A-IRB                 | E4         | = SUMIF( '2.1 BS Assets'!$H:$H , $A4 , '2.1 BS Assets'!E:E ) |
|      13 | 2.2 Credit Summary | B      | Trading Book          | F4         | = SUMIF( '2.1 BS Assets'!$H:$H , $A4 , '2.1 BS Assets'!F:F ) |
|      14 | 2.2 Credit Summary | B      | Total                 | G4         | = C4 + D4 + E4 + F4                                          |
|      15 | 2.2 Credit Summary | C      | Standardised Approach | C5         | = SUMIF( '2.1 BS Assets'!$H:$H , $A5 , '2.1 BS Assets'!C:C ) |
|      16 | 2.2 Credit Summary | C      | F-IRB                 | D5         | = SUMIF( '2.1 BS Assets'!$H:$H , $A5 , '2.1 BS Assets'!D:D ) |
|      17 | 2.2 Credit Summary | C      | A-IRB                 | E5         | = SUMIF( '2.1 BS Assets'!$H:$H , $A5 , '2.1 BS Assets'!E:E ) |
|      18 | 2.2 Credit Summary | C      | Trading Book          | F5         | = SUMIF( '2.1 BS Assets'!$H:$H , $A5 , '2.1 BS Assets'!F:F ) |
|      19 | 2.2 Credit Summary | C      | Total                 | G5         | = C5 + D5 + E5 + F5                                          |
|   Check | Sheet              | Item   | Column                | Cell Ref   | Excel                                                        |
|      20 | 2.2 Credit Summary | D      | Standardised Approach | C6         | = SUMIF( '2.1 BS Assets'!$H:$H , $A6 , '2.1 BS Assets'!C:C ) |
|      21 | 2.2 Credit Summary | D      | F-IRB                 | D6         | = SUMIF( '2.1 BS Assets'!$H:$H , $A6 , '2.1 BS Assets'!D:D ) |
|      22 | 2.2 Credit Summary | D      | A-IRB                 | E6         | = SUMIF( '2.1 BS Assets'!$H:$H , $A6 , '2.1 BS Assets'!E:E ) |
|      23 | 2.2 Credit Summary | D      | Trading Book          | F6         | = SUMIF( '2.1 BS Assets'!$H:$H , $A6 , '2.1 BS Assets'!F:F ) |
|      24 | 2.2 Credit Summary | D      | Total                 | G6         | = C6 + D6 + E6 + F6                                          |
|      25 | 2.2 Credit Summary | E      | Standardised Approach | C7         | = SUMIF( '2.1 BS Assets'!$H:$H , $A7 , '2.1 BS Assets'!C:C ) |
|      26 | 2.2 Credit Summary | E      | F-IRB                 | D7         | = SUMIF( '2.1 BS Assets'!$H:$H , $A7 , '2.1 BS Assets'!D:D ) |
|      27 | 2.2 Credit Summary | E      | A-IRB                 | E7         | = SUMIF( '2.1 BS Assets'!$H:$H , $A7 , '2.1 BS Assets'!E:E ) |
|      28 | 2.2 Credit Summary | E      | Trading Book          | F7         | = SUMIF( '2.1 BS Assets'!$H:$H , $A7 , '2.1 BS Assets'!F:F ) |
|      29 | 2.2 Credit Summary | E      | Total                 | G7         | = C7 + D7 + E7 + F7                                          |
|      30 | 2.2 Credit Summary | F      | Standardised Approach | C8         | = SUMIF( '2.1 BS Assets'!$H:$H , $A8 , '2.1 BS Assets'!C:C ) |
|      31 | 2.2 Credit Summary | F      | F-IRB                 | D8         | = SUMIF( '2.1 BS Assets'!$H:$H , $A8 , '2.1 BS Assets'!D:D ) |
|      32 | 2.2 Credit Summary | F      | A-IRB                 | E8         | = SUMIF( '2.1 BS Assets'!$H:$H , $A8 , '2.1 BS Assets'!E:E ) |
|      33 | 2.2 Credit Summary | F      | Trading Book          | F8         | = SUMIF( '2.1 BS Assets'!$H:$H , $A8 , '2.1 BS Assets'!F:F ) |
|      34 | 2.2 Credit Summary | F      | Total                 | G8         | = C8 + D8 + E8 + F8                                          |
|      35 | 2.2 Credit Summary | G      | Standardised Approach | C9         | =SUMIF('2.1 BS Assets'!$H:$H,$A9,'2.1 BS Assets'!C:C)        |
|      36 | 2.2 Credit Summary | G      | F-IRB                 | D9         | = SUMIF( '2.1 BS Assets'!$H:$H , $A9 , '2.1 BS Assets'!D:D ) |
|   Check | Sheet              | Item   | Column                | Cell Ref   | Excel                                                           |
|      37 | 2.2 Credit Summary | G      | A-IRB                 | E9         | = SUMIF( '2.1 BS Assets'!$H:$H , $A9 , '2.1 BS Assets'!E:E )    |
|      38 | 2.2 Credit Summary | G      | Trading Book          | F9         | = SUMIF( '2.1 BS Assets'!$H:$H , $A9 , '2.1 BS Assets'!F:F )    |
|      39 | 2.2 Credit Summary | G      | Total                 | G9         | = C9 + D9 + E9 + F9                                             |
|      40 | 2.2 Credit Summary | H      | Standardised Approach | C10        | = SUMIF( '2.1 BS Assets'!$H:$H , $A10 , '2.1 BS Assets'!C:C )   |
|      41 | 2.2 Credit Summary | H      | F-IRB                 | D10        | = SUMIF( '2.1 BS Assets'!$H:$H , $A10 , '2.1 BS Assets'!D:D )   |
|      42 | 2.2 Credit Summary | H      | A-IRB                 | E10        | = SUMIF( '2.1 BS Assets'!$H:$H , $A10 , '2.1 BS Assets'!E:E )   |
|      43 | 2.2 Credit Summary | H      | Trading Book          | F10        | = SUMIF( '2.1 BS Assets'!$H:$H , $A10 , '2.1 BS Assets'!F:F )   |
|      44 | 2.2 Credit Summary | H      | Total                 | G10        | = C10 + D10 + E10 + F10                                         |
|      45 | 2.2 Credit Summary | J      | Standardised Approach | C11        | = SUMIF( '2.1 BS Assets'!$H:$H , $A11 , '2.1 BS Assets'!C:C )   |
|      46 | 2.2 Credit Summary | J      | F-IRB                 | D11        | = SUMIF( '2.1 BS Assets'!$H:$H , $A11 , '2.1 BS Assets'!D:D )   |
|      47 | 2.2 Credit Summary | J      | A-IRB                 | E11        | = SUMIF( '2.1 BS Assets'!$H:$H , $A11 , '2.1 BS Assets'!E:E )   |
|      48 | 2.2 Credit Summary | J      | Trading Book          | F11        | = SUMIF( '2.1 BS Assets'!$H:$H , $A11 , '2.1 BS Assets'!F:F )   |
|      49 | 2.2 Credit Summary | J      | Total                 | G11        | = C11 + D11 + E11 + F11                                         |
|      50 | 2.2 Credit Summary | K      | Total                 | G12        | = SUMIF( '2.1 BS Assets'!$H:$H , $A12 , '2.1 BS Assets'!G:G )   |
|      51 | 2.2 Credit Summary | L      | Standardised Approach | C13        | = SUMIF( '2.1 BS Assets'!$H:$H , $A13 , '2.1 BS Assets'!$C:$C ) |
|      52 | 2.2 Credit Summary | L      | F-IRB                 | D13        | = SUMIF( '2.1 BS Assets'!$H:$H , $A13 , '2.1 BS Assets'!D:D )   |
|      53 | 2.2 Credit Summary | L      | A-IRB                 | E13        | = SUMIF( '2.1 BS Assets'!$H:$H , $A13 , '2.1 BS Assets'!E:E )   |
|   Check | Sheet              | Item   | Column                | Cell Ref   | Excel                                                         |
|      54 | 2.2 Credit Summary | L      | Trading Book          | F13        | = SUMIF( '2.1 BS Assets'!$H:$H , $A13 , '2.1 BS Assets'!F:F ) |
|      55 | 2.2 Credit Summary | L      | Total                 | G13        | = C13 + D13 + E13 + F13                                       |
|      56 | 2.2 Credit Summary | M      | Standardised Approach | C14        | = SUM( C3:C11 , C13 )                                         |
|      57 | 2.2 Credit Summary | M      | F-IRB                 | D14        | = SUM( D3:D11 , D13 )                                         |
|      58 | 2.2 Credit Summary | M      | A-IRB                 | E14        | = SUM( E3:E11 , E13 )                                         |
|      59 | 2.2 Credit Summary | M      | Trading Book          | F14        | = SUM( F3:F11 , F13 )                                         |
|      60 | 2.2 Credit Summary | M      | Total                 | G14        | = SUM( G3:G13 )                                               |