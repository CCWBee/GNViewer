
## Guidance Note

## Validation and verification of the '8.6 Exempt Large Exposures' Sheet

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

|   Check | Sheet                      | Item   | Column             | Cell  Ref   | Validation Message                                                         |
|---------|----------------------------|--------|--------------------|-------------|----------------------------------------------------------------------------|
|       1 | 8.6 Exempt Large Exposures | EL.1   | Outstanding Amount | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 8.6 Exempt Large Exposures | EL.2   | Outstanding Amount | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 8.6 Exempt Large Exposures | EL.3   | Outstanding Amount | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 8.6 Exempt Large Exposures | EL.4   | Outstanding Amount | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 8.6 Exempt Large Exposures | EL.5   | Outstanding Amount | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 8.6 Exempt Large Exposures | EL.6   | Outstanding Amount | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 8.6 Exempt Large Exposures | EL.7   | Outstanding Amount | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 8.6 Exempt Large Exposures | EL.8   | Outstanding Amount | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 8.6 Exempt Large Exposures | EL.9   | Outstanding Amount | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 8.6 Exempt Large Exposures | EL.10  | Outstanding Amount | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 8.6 Exempt Large Exposures | EL.1   | Facility Amount    | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 8.6 Exempt Large Exposures | EL.2   | Facility Amount    | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 8.6 Exempt Large Exposures | EL.3   | Facility Amount    | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column          | Cell  Ref   | Validation Message                                                         |
|      14 | 8.6 Exempt Large Exposures | EL.4   | Facility Amount | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 8.6 Exempt Large Exposures | EL.5   | Facility Amount | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 8.6 Exempt Large Exposures | EL.6   | Facility Amount | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 8.6 Exempt Large Exposures | EL.7   | Facility Amount | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 8.6 Exempt Large Exposures | EL.8   | Facility Amount | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 8.6 Exempt Large Exposures | EL.9   | Facility Amount | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 8.6 Exempt Large Exposures | EL.10  | Facility Amount | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 8.6 Exempt Large Exposures | EL.1   | Maturity Date   | F3          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      22 | 8.6 Exempt Large Exposures | EL.2   | Maturity Date   | F4          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      23 | 8.6 Exempt Large Exposures | EL.3   | Maturity Date   | F5          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      24 | 8.6 Exempt Large Exposures | EL.4   | Maturity Date   | F6          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      25 | 8.6 Exempt Large Exposures | EL.5   | Maturity Date   | F7          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      26 | 8.6 Exempt Large Exposures | EL.6   | Maturity Date   | F8          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      27 | 8.6 Exempt Large Exposures | EL.7   | Maturity Date   | F9          | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      28 | 8.6 Exempt Large Exposures | EL.8   | Maturity Date   | F10         | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      29 | 8.6 Exempt Large Exposures | EL.9   | Maturity Date   | F11         | Input must be a date between 1/1/2019 and 31/12/2119                       |
|      30 | 8.6 Exempt Large Exposures | EL.10  | Maturity Date   | F12         | Input must be a date between 1/1/2019 and 31/12/2119                       |
