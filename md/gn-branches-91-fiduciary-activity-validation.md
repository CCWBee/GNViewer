
## Guidance Note

## Validation and verification of the '9.1 Fiduciary Activity' Sheet

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

|   Check | Sheet                  | Item   | Column   | Cell   | Validation Message                                                         |
|---------|------------------------|--------|----------|--------|----------------------------------------------------------------------------|
|       1 | 9.1 Fiduciary Activity | A.1    | Value    | C3     | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 9.1 Fiduciary Activity | A.2    | Value    | C4     | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 9.1 Fiduciary Activity | A.3    | Value    | C5     | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |