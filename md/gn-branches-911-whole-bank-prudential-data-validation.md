
## Guidance Note

## Validation and verification of the '9.11 Whole-bank Prudential Data' Sheet

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

|   Check | Sheet                            | Item   | Column   | Cell  Ref   | Validation Message                                                         |
|---------|----------------------------------|--------|----------|-------------|----------------------------------------------------------------------------|
|       1 | 9.11 Whole-bank  Prudential Data | WB.1   | Amount 1 | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 9.11 Whole-bank  Prudential Data | WB.1   | Amount 2 | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 9.11 Whole-bank  Prudential Data | WB.2   | Amount 1 | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 9.11 Whole-bank  Prudential Data | WB.2   | Amount 2 | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 9.11 Whole-bank  Prudential Data | WB.3   | Amount 1 | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 9.11 Whole-bank  Prudential Data | WB.3   | Amount 2 | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 9.11 Whole-bank  Prudential Data | WB.4   | Amount 1 | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 9.11 Whole-bank  Prudential Data | WB.4   | Amount 2 | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                            | Item   | Column   | Cell  Ref   | Validation Message                                                           |
|       9 | 9.11 Whole-bank  Prudential Data | WB.5   | Amount 1 | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      10 | 9.11 Whole-bank  Prudential Data | WB.5   | Amount 2 | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      11 | 9.11 Whole-bank  Prudential Data | WB.6   | Amount 1 | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      12 | 9.11 Whole-bank  Prudential Data | WB.6   | Amount 2 | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|      13 | 9.11 Whole-bank  Prudential Data | WB.7   | Amount 1 | C9          | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      14 | 9.11 Whole-bank  Prudential Data | WB.7   | Amount 2 | D9          | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      15 | 9.11 Whole-bank  Prudential Data | WB.8   | Amount 1 | C10         | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      16 | 9.11 Whole-bank  Prudential Data | WB.8   | Amount 2 | D10         | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      17 | 9.11 Whole-bank  Prudential Data | WB.9   | Amount 1 | C11         | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      18 | 9.11 Whole-bank  Prudential Data | WB.9   | Amount 2 | D11         | Input must be a whole number in the range -10,000,000,000 to +10,000,000,000 |
|      19 | 9.11 Whole-bank  Prudential Data | WB.10  | Amount 1 | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000   |
|   Check | Sheet                            | Item   | Column   | Cell  Ref   | Validation Message                                                         |
|      20 | 9.11 Whole-bank  Prudential Data | WB.10  | Amount 2 | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 9.11 Whole-bank  Prudential Data | WB.11  | Amount 1 | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 9.11 Whole-bank  Prudential Data | WB.11  | Amount 2 | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 9.11 Whole-bank  Prudential Data | WB.12  | Amount 1 | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 9.11 Whole-bank  Prudential Data | WB.12  | Amount 2 | D14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 9.11 Whole-bank  Prudential Data | WB.13  | Amount 1 | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 9.11 Whole-bank  Prudential Data | WB.13  | Amount 2 | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 9.11 Whole-bank  Prudential Data | WB.14  | Amount 1 | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 9.11 Whole-bank  Prudential Data | WB.14  | Amount 2 | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 9.11 Whole-bank  Prudential Data | WB.15  | Amount 1 | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 9.11 Whole-bank  Prudential Data | WB.15  | Amount 2 | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                            | Item   | Column   | Cell  Ref   | Validation Message                                                         |
|      31 | 9.11 Whole-bank  Prudential Data | WB.16  | Amount 1 | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 9.11 Whole-bank  Prudential Data | WB.16  | Amount 2 | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 9.11 Whole-bank  Prudential Data | WB.17  | Amount 1 | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 9.11 Whole-bank  Prudential Data | WB.17  | Amount 2 | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 9.11 Whole-bank  Prudential Data | WB.18  | Amount 1 | C20         | Must be a percentage between 0 and 100%                                    |
|      36 | 9.11 Whole-bank  Prudential Data | WB.18  | Amount 2 | D20         | Must be a percentage between 0 and 100%                                    |
|      37 | 9.11 Whole-bank  Prudential Data | WB.19  | Amount 1 | C21         | Must be a percentage between 0 and 100%                                    |
|      38 | 9.11 Whole-bank  Prudential Data | WB.19  | Amount 2 | D21         | Must be a percentage between 0 and 100%                                    |
|      39 | 9.11 Whole-bank  Prudential Data | WB.20  | Amount 1 | C22         | Must be a percentage between 0 and 100%                                    |
|      40 | 9.11 Whole-bank  Prudential Data | WB.20  | Amount 2 | D22         | Must be a percentage between 0 and 100%                                    |