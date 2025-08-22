
## Guidance Note

## Validation and verification of the '3.5 OTC - Equities' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

Revised February 2019, to correct name in the 'Sheet' column

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

|   Check | Sheet              | Item   | Column                     | Cell  Ref   | Validation Message                                                         |
|---------|--------------------|--------|----------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 3.5 OTC - Equities | N.3.1  | Amount                     | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 3.5 OTC - Equities | N.3.1  | Positive Mark-to-Market    | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 3.5 OTC - Equities | N.3.1  | Amount After CRM           | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 3.5 OTC - Equities | N.3.1  | Risk Weighted Amount       | H4          | Must be blank                                                              |
|       5 | 3.5 OTC - Equities | N.3.2  | Amount                     | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 3.5 OTC - Equities | N.3.2  | Positive Mark-to-Market    | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 3.5 OTC - Equities | N.3.2  | Amount After CRM           | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 3.5 OTC - Equities | N.3.3  | Amount                     | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 3.5 OTC - Equities | N.3.3  | Positive Mark-to-Market D6 |             | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 3.5 OTC - Equities | N.3.3  | Amount After CRM           | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 3.5 OTC - Equities | N.3.4  | Amount                     | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 3.5 OTC - Equities | N.3.4  | Positive Mark-to-Market    | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 3.5 OTC - Equities | N.3.4  | Amount After CRM           | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 3.5 OTC - Equities | N.3.5  | Amount                     | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      15 | 3.5 OTC - Equities | N.3.5  | Positive Mark-to-Market | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 3.5 OTC - Equities | N.3.5  | Amount After CRM        | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 3.5 OTC - Equities | N.3.6  | Amount                  | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 3.5 OTC - Equities | N.3.6  | Positive Mark-to-Market | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 3.5 OTC - Equities | N.3.6  | Amount After CRM        | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 3.5 OTC - Equities | N.3.6  | Risk Weighted Amount    | H9          | Must be blank                                                              |
|      21 | 3.5 OTC - Equities | N.3.7  | Amount                  | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 3.5 OTC - Equities | N.3.7  | Positive Mark-to-Market | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 3.5 OTC - Equities | N.3.7  | Amount After CRM        | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 3.5 OTC - Equities | N.3.8  | Amount                  | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 3.5 OTC - Equities | N.3.8  | Positive Mark-to-Market | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 3.5 OTC - Equities | N.3.8  | Amount After CRM        | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 3.5 OTC - Equities | N.3.9  | Amount                  | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 3.5 OTC - Equities | N.3.9  | Positive Mark-to-Market | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 3.5 OTC - Equities | N.3.9  | Amount After CRM        | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 3.5 OTC - Equities | N.3.10 | Amount                  | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 3.5 OTC - Equities | N.3.10 | Positive Mark-to-Market | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet              | Item   | Column                  | Cell  Ref   | Validation Message                                                         |
|      32 | 3.5 OTC - Equities | N.3.10 | Amount After CRM        | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 3.5 OTC - Equities | N.3.11 | Amount                  | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 3.5 OTC - Equities | N.3.11 | Positive Mark-to-Market | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 3.5 OTC - Equities | N.3.11 | Amount After CRM        | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 3.5 OTC - Equities | N.3.11 | Risk Weighted Amount    | H14         | Must be blank                                                              |
|      37 | 3.5 OTC - Equities | N.3.12 | Amount                  | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 3.5 OTC - Equities | N.3.12 | Positive Mark-to-Market | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 3.5 OTC - Equities | N.3.12 | Amount After CRM        | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 3.5 OTC - Equities | N.3.13 | Amount                  | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 3.5 OTC - Equities | N.3.13 | Positive Mark-to-Market | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 3.5 OTC - Equities | N.3.13 | Amount After CRM        | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 3.5 OTC - Equities | N.3.14 | Amount                  | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 3.5 OTC - Equities | N.3.14 | Positive Mark-to-Market | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 3.5 OTC - Equities | N.3.14 | Amount After CRM        | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 3.5 OTC - Equities | N.3.15 | Amount                  | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 3.5 OTC - Equities | N.3.15 | Positive Mark-to-Market | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 3.5 OTC - Equities | N.3.15 | Amount After CRM        | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet              | Item   | Column                   | Cell  Ref   | Excel                       |
|---------|--------------------|--------|--------------------------|-------------|-----------------------------|
|      49 | 3.5 OTC - Equities | N.3.0  | Amount                   | C3          | =SUM(C4:C18)                |
|      50 | 3.5 OTC - Equities | N.3.0  | Positive Mark-to-Market  | D3          | =SUM(D4:D18)                |
|      51 | 3.5 OTC - Equities | N.3.0  | Add-on Amount            | E3          | =SUM(E4:E18)                |
|      52 | 3.5 OTC - Equities | N.3.0  | Credit Equivalent Amount | F3          | =SUM(F4:F18)                |
|      53 | 3.5 OTC - Equities | N.3.0  | Amount After CRM         | G3          | =SUM(G4:G18)                |
|      54 | 3.5 OTC - Equities | N.3.0  | Risk Weighted Amount     | H3          | =SUM(H5:H8,H10:H13,H15:H18) |
|      55 | 3.5 OTC - Equities | N.3.1  | Add-on Amount            | E4          | =ROUND(C4*6%,0)             |
|      56 | 3.5 OTC - Equities | N.3.1  | Credit Equivalent Amount | F4          | =D4+E4                      |
|      57 | 3.5 OTC - Equities | N.3.2  | Add-on Amount            | E5          | =ROUND(C5*6%,0)             |
|      58 | 3.5 OTC - Equities | N.3.2  | Credit Equivalent Amount | F5          | =D5+E5                      |
|      59 | 3.5 OTC - Equities | N.3.2  | Risk Weighted Amount     | H5          | =ROUND(G5*20%,0)            |
|      60 | 3.5 OTC - Equities | N.3.3  | Add-on Amount            | E6          | =ROUND(C6*6%,0)             |
|      61 | 3.5 OTC - Equities | N.3.3  | Credit Equivalent Amount | F6          | =D6+E6                      |
|      62 | 3.5 OTC - Equities | N.3.3  | Risk Weighted Amount     | H6          | =ROUND(G6*50%,0)            |
|      63 | 3.5 OTC - Equities | N.3.4  | Add-on Amount            | E7          | =ROUND(C7*6%,0)             |
|   Check | Sheet              | Item   | Column                   | Cell  Ref   | Excel              |
|      64 | 3.5 OTC - Equities | N.3.4  | Credit Equivalent Amount | F7          | =D7+E7             |
|      65 | 3.5 OTC - Equities | N.3.4  | Risk Weighted Amount     | H7          | =ROUND(G7*100%,0)  |
|      66 | 3.5 OTC - Equities | N.3.5  | Add-on Amount            | E8          | =ROUND(C8*6%,0)    |
|      67 | 3.5 OTC - Equities | N.3.5  | Credit Equivalent Amount | F8          | =D8+E8             |
|      68 | 3.5 OTC - Equities | N.3.5  | Risk Weighted Amount     | H8          | =ROUND(G8*150%,0)  |
|      69 | 3.5 OTC - Equities | N.3.6  | Add-on Amount            | E9          | =ROUND(C9*8%,0)    |
|      70 | 3.5 OTC - Equities | N.3.6  | Credit Equivalent Amount | F9          | =D9+E9             |
|      71 | 3.5 OTC - Equities | N.3.7  | Add-on Amount            | E10         | =ROUND(C10*8%,0)   |
|      72 | 3.5 OTC - Equities | N.3.7  | Credit Equivalent Amount | F10         | =D10+E10           |
|      73 | 3.5 OTC - Equities | N.3.7  | Risk Weighted Amount     | H10         | =ROUND(G10*20%,0)  |
|      74 | 3.5 OTC - Equities | N.3.8  | Add-on Amount            | E11         | =ROUND(C11*8%,0)   |
|      75 | 3.5 OTC - Equities | N.3.8  | Credit Equivalent Amount | F11         | =D11+E11           |
|      76 | 3.5 OTC - Equities | N.3.8  | Risk Weighted Amount     | H11         | =ROUND(G11*50%,0)  |
|      77 | 3.5 OTC - Equities | N.3.9  | Add-on Amount            | E12         | =ROUND(C12*8%,0)   |
|      78 | 3.5 OTC - Equities | N.3.9  | Credit Equivalent Amount | F12         | =D12+E12           |
|      79 | 3.5 OTC - Equities | N.3.9  | Risk Weighted Amount     | H12         | =ROUND(G12*100%,0) |
|      80 | 3.5 OTC - Equities | N.3.10 | Add-on Amount            | E13         | =ROUND(C13*8%,0)   |
|   Check | Sheet              | Item   | Column                   | Cell  Ref   | Excel              |
|      81 | 3.5 OTC - Equities | N.3.10 | Credit Equivalent Amount | F13         | =D13+E13           |
|      82 | 3.5 OTC - Equities | N.3.10 | Risk Weighted Amount     | H13         | =ROUND(G13*150%,0) |
|      83 | 3.5 OTC - Equities | N.3.11 | Add-on Amount            | E14         | =ROUND(C14*10%,0)  |
|      84 | 3.5 OTC - Equities | N.3.11 | Credit Equivalent Amount | F14         | =D14+E14           |
|      85 | 3.5 OTC - Equities | N.3.12 | Add-on Amount            | E15         | =ROUND(C15*10%,0)  |
|      86 | 3.5 OTC - Equities | N.3.12 | Credit Equivalent Amount | F15         | =D15+E15           |
|      87 | 3.5 OTC - Equities | N.3.12 | Risk Weighted Amount     | H15         | =ROUND(G15*20%,0)  |
|      88 | 3.5 OTC - Equities | N.3.13 | Add-on Amount            | E16         | =ROUND(C16*10%,0)  |
|      89 | 3.5 OTC - Equities | N.3.13 | Credit Equivalent Amount | F16         | =D16+E16           |
|      90 | 3.5 OTC - Equities | N.3.13 | Risk Weighted Amount     | H16         | =ROUND(G16*50%,0)  |
|      91 | 3.5 OTC - Equities | N.3.14 | Add-on Amount            | E17         | =ROUND(C17*10%,0)  |
|      92 | 3.5 OTC - Equities | N.3.14 | Credit Equivalent Amount | F17         | =D17+E17           |
|      93 | 3.5 OTC - Equities | N.3.14 | Risk Weighted Amount     | H17         | =ROUND(G17*100%,0) |
|      94 | 3.5 OTC - Equities | N.3.15 | Add-on Amount            | E18         | =ROUND(C18*10%,0)  |
|      95 | 3.5 OTC - Equities | N.3.15 | Credit Equivalent Amount | F18         | =D18+E18           |
|      96 | 3.5 OTC - Equities | N.3.15 | Risk Weighted Amount     | H18         | =ROUND(G18*150%,0) |