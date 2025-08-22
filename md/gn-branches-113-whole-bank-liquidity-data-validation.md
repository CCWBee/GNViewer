
## Guidance Note

## Validation and verification of the '11.3 Whole-bank Liquidity Data' Sheet

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

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook).

|   Check | Sheet                           | Item   | Column         | Cell  Ref   | Validation Message                                                         |
|---------|---------------------------------|--------|----------------|-------------|----------------------------------------------------------------------------|
|       1 | 11.3 Whole-bank  Liquidity Data | LCR.1  | Approach  used | C3          | Input must be LCR: Y or LCR: N                                             |
|       2 | 11.3 Whole-bank  Liquidity Data | LCR.1  | Amount 1       | D3          | Must be blank                                                              |
|       3 | 11.3 Whole-bank  Liquidity Data | LCR.1  | Amount 2       | E3          | Must be blank                                                              |
|       4 | 11.3 Whole-bank  Liquidity Data | LCR.2  | Approach  used | C4          | Must be blank                                                              |
|       5 | 11.3 Whole-bank  Liquidity Data | LCR.2  | Amount 1       | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 11.3 Whole-bank  Liquidity Data | LCR.2  | Amount 2       | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 11.3 Whole-bank  Liquidity Data | LCR.3  | Amount 1       | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 11.3 Whole-bank  Liquidity Data | LCR.3  | Amount 2       | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column         | Cell  Ref   | Validation Message                                                         |
|      10 | 11.3 Whole-bank  Liquidity Data | LCR.4  | Approach  used | C6          | Must be blank                                                              |
|      11 | 11.3 Whole-bank  Liquidity Data | LCR.4  | Amount 1       | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 11.3 Whole-bank  Liquidity Data | LCR.4  | Amount 2       | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 11.3 Whole-bank  Liquidity Data | LCR.5  | Approach  used | C7          | Must be blank                                                              |
|      14 | 11.3 Whole-bank  Liquidity Data | LCR.5  | Amount 1       | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 11.3 Whole-bank  Liquidity Data | LCR.5  | Amount 2       | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 11.3 Whole-bank  Liquidity Data | LCR.6  | Approach  used | C8          | Must be blank                                                              |
|      17 | 11.3 Whole-bank  Liquidity Data | LCR.6  | Amount 1       | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 11.3 Whole-bank  Liquidity Data | LCR.6  | Amount 2       | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 11.3 Whole-bank  Liquidity Data | LCR.7  | Approach  used | C9          | Must be blank                                                              |
|      20 | 11.3 Whole-bank  Liquidity Data | LCR.7  | Amount 1       | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                           | Item   | Column         | Cell  Ref   | Validation Message                                                                 |
|      21 | 11.3 Whole-bank  Liquidity Data | LCR.7  | Amount 2       | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      22 | 11.3 Whole-bank  Liquidity Data | LCR.8  | Approach  used | C10         | Must be blank                                                                      |
|      23 | 11.3 Whole-bank  Liquidity Data | LCR.8  | Amount 1       | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      24 | 11.3 Whole-bank  Liquidity Data | LCR.8  | Amount 2       | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      25 | 11.3 Whole-bank  Liquidity Data | LCR.9  | Approach  used | C11         | Must be blank                                                                      |
|      26 | 11.3 Whole-bank  Liquidity Data | LCR.9  | Amount 1       | D11         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      27 | 11.3 Whole-bank  Liquidity Data | LCR.9  | Amount 2       | E11         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      28 | 11.3 Whole-bank  Liquidity Data | LCR.10 | Approach  used | C12         | Must be blank                                                                      |
|      29 | 11.3 Whole-bank  Liquidity Data | LCR.10 | Amount 1       | D12         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      30 | 11.3 Whole-bank  Liquidity Data | LCR.10 | Amount 2       | E12         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      31 | 11.3 Whole-bank  Liquidity Data | NSFR.1 | Approach  used | C13         | Input must be NSFR: Y or NSFR: N                                                   |
|   Check | Sheet                           | Item   | Column         | Cell  Ref   | Validation Message                                                                 |
|      32 | 11.3 Whole-bank  Liquidity Data | NSFR.1 | Amount 1       | D13         | Must be blank                                                                      |
|      33 | 11.3 Whole-bank  Liquidity Data | NSFR.1 | Amount 2       | E13         | Must be blank                                                                      |
|      34 | 11.3 Whole-bank  Liquidity Data | NSFR.2 | Approach  used | C14         | Must be blank                                                                      |
|      35 | 11.3 Whole-bank  Liquidity Data | NSFR.2 | Amount 1       | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      36 | 11.3 Whole-bank  Liquidity Data | NSFR.2 | Amount 2       | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      37 | 11.3 Whole-bank  Liquidity Data | NSFR.3 | Approach  used | C15         | Must be blank                                                                      |
|      38 | 11.3 Whole-bank  Liquidity Data | NSFR.3 | Amount 1       | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      39 | 11.3 Whole-bank  Liquidity Data | NSFR.3 | Amount 2       | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      40 | 11.3 Whole-bank  Liquidity Data | NSFR.4 | Approach  used | C16         | Must be blank                                                                      |
|      41 | 11.3 Whole-bank  Liquidity Data | NSFR.4 | Amount 1       | D16         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      42 | 11.3 Whole-bank  Liquidity Data | NSFR.4 | Amount 2       | E16         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet                           | Item       | Column         | Cell  Ref   | Validation Message                                                                 |
|      43 | 11.3 Whole-bank  Liquidity Data | NSFR.5     | Approach  used | C17         | Must be blank                                                                      |
|      44 | 11.3 Whole-bank  Liquidity Data | NSFR.5     | Amount 1       | D17         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      45 | 11.3 Whole-bank  Liquidity Data | NSFR.5     | Amount 2       | E17         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      46 | 11.3 Whole-bank  Liquidity Data | Metric 1.1 | Approach  used | C18         | Input must be text: name of Metric 1                                               |
|      47 | 11.3 Whole-bank  Liquidity Data | Metric 1.1 | Amount 1       | D18         | Must be blank                                                                      |
|      48 | 11.3 Whole-bank  Liquidity Data | Metric 1.1 | Amount 2       | E18         | Must be blank                                                                      |
|      49 | 11.3 Whole-bank  Liquidity Data | Metric 1.2 | Approach  used | C19         | Must be blank                                                                      |
|      50 | 11.3 Whole-bank  Liquidity Data | Metric 1.2 | Amount 1       | D19         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      51 | 11.3 Whole-bank  Liquidity Data | Metric 1.2 | Amount 2       | E19         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      52 | 11.3 Whole-bank  Liquidity Data | Metric 1.3 | Approach  used | C20         | Must be blank                                                                      |
|      53 | 11.3 Whole-bank  Liquidity Data | Metric 1.3 | Amount 1       | D20         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|   Check | Sheet                           | Item       | Column         | Cell  Ref   | Validation Message                                                                 |
|      54 | 11.3 Whole-bank  Liquidity Data | Metric 1.3 | Amount 2       | E20         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      55 | 11.3 Whole-bank  Liquidity Data | Metric 1.4 | Approach  used | C21         | Must be blank                                                                      |
|      56 | 11.3 Whole-bank  Liquidity Data | Metric 1.4 | Amount 1       | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      57 | 11.3 Whole-bank  Liquidity Data | Metric 1.4 | Amount 2       | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      58 | 11.3 Whole-bank  Liquidity Data | Metric 1.5 | Approach  used | C22         | Must be blank                                                                      |
|      59 | 11.3 Whole-bank  Liquidity Data | Metric 1.5 | Amount 1       | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      60 | 11.3 Whole-bank  Liquidity Data | Metric 1.5 | Amount 2       | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      61 | 11.3 Whole-bank  Liquidity Data | Metric 2.1 | Approach  used | C23         | Input must be text: name of Metric 2                                               |
|      62 | 11.3 Whole-bank  Liquidity Data | Metric 2.1 | Amount 1       | D23         | Must be blank                                                                      |
|      63 | 11.3 Whole-bank  Liquidity Data | Metric 2.1 | Amount 2       | E23         | Must be blank                                                                      |
|      64 | 11.3 Whole-bank  Liquidity Data | Metric 2.2 | Approach  used | C24         | Must be blank                                                                      |
|   Check | Sheet                           | Item       | Column         | Cell  Ref   | Validation Message                                                                 |
|      65 | 11.3 Whole-bank  Liquidity Data | Metric 2.2 | Amount 1       | D24         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      66 | 11.3 Whole-bank  Liquidity Data | Metric 2.2 | Amount 2       | E24         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      67 | 11.3 Whole-bank  Liquidity Data | Metric 2.3 | Approach  used | C25         | Must be blank                                                                      |
|      68 | 11.3 Whole-bank  Liquidity Data | Metric 2.3 | Amount 1       | D25         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      69 | 11.3 Whole-bank  Liquidity Data | Metric 2.3 | Amount 2       | E25         | Input must be a percentage between 0 and 1,000% - enter 1,000% if exceeds  maximum |
|      70 | 11.3 Whole-bank  Liquidity Data | Metric 2.4 | Approach  used | C26         | Must be blank                                                                      |
|      71 | 11.3 Whole-bank  Liquidity Data | Metric 2.4 | Amount 1       | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      72 | 11.3 Whole-bank  Liquidity Data | Metric 2.4 | Amount 2       | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      73 | 11.3 Whole-bank  Liquidity Data | Metric 2.5 | Approach  used | C27         | Must be blank                                                                      |
|      74 | 11.3 Whole-bank  Liquidity Data | Metric 2.5 | Amount 1       | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |
|      75 | 11.3 Whole-bank  Liquidity Data | Metric 2.5 | Amount 2       | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000         |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 There are no calculations in this Excel workbook.

## 4 Logical checks

Checks that the data entered is not inconsistent. Fails are highlighted in Red in the template.

|   Check | Sheet                          | Item(s)                  | Column               | Range   | Validation Message                                                                      |
|---------|--------------------------------|--------------------------|----------------------|---------|-----------------------------------------------------------------------------------------|
|      76 | 11.3 Whole-bank Liquidity Data | LCR.2 -  LCR.10          | Amount 1 &  Amount 2 | D4:E12  | If LCR.1 Approach used is "LCR: N" then the LCR data entry cells  must be blank.        |
|      77 | 11.3 Whole-bank Liquidity Data | NSFR.2 -  NSFR.5         | Amount 1 &  Amount 2 | D14:E17 | If NSFR.1 Approach used is "NSFR: N" then all the NSFR data  entry cells must be blank. |
|      78 | 11.3 Whole-bank Liquidity Data | Metric 1.2 -  Metric 1.5 | Amount 1 &  Amount 2 | D19:E22 | If Metric 1.1 Approach used is blank then the Metric 1 data  entry cells must be blank. |
|      79 | 11.3 Whole-bank Liquidity Data | Metric 2.2 -  Metric 2.5 | Amount 1 &  Amount 2 | D24:E27 | If Metric 2.1 Approach used is blank then the Metric 2 data  entry cells must be blank. |