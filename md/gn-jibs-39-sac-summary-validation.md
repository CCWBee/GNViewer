
## Guidance Note

## Validation and verification of the '3.9 SAC Summary' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018.

Revised February 2019 to correct the 'Excel' column for Check 13 (Cell D8)

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

|   Check | Sheet           | Item   | Column   | Cell Ref   | Validation Message   |
|---------|-----------------|--------|----------|------------|----------------------|
|       1 | 3.9 SAC Summary | P      | RWAs     | D15        | Must be blank        |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

| Check   | Sheet           | Item   | Column   | Cell Ref   | Excel             |
|---------|-----------------|--------|----------|------------|-------------------|
| 2       | 3.9 SAC Summary | A      | Amount   | C3         | ='3.1 SAC BS'!C10 |
| 3       | 3.9 SAC Summary | A      | RWAs     | D3         | ='3.1 SAC BS'!E10 |
| 4       | 3.9 SAC Summary | B      | Amount   | C4         | ='3.1 SAC BS'!C17 |
| 5       | 3.9 SAC Summary | B      | RWAs     | D4         | ='3.1 SAC BS'!E17 |
| 6       | 3.9 SAC Summary | C      | Amount   | C5         | ='3.1 SAC BS'!C22 |
| 7       | 3.9 SAC Summary | C      | RWAs     | D5         | ='3.1 SAC BS'!E22 |
| 8       | 3.9 SAC Summary | D      | Amount   | C6         | ='3.1 SAC BS'!C41 |
| 9       | 3.9 SAC Summary | D      | RWAs     | D6         | ='3.1 SAC BS'!E41 |
| 10      | 3.9 SAC Summary | E      | Amount   | C7         | ='3.1 SAC BS'!C46 |
| 11      | 3.9 SAC Summary | E      | RWAs     | D7         | ='3.1 SAC BS'!E46 |
| 12      | 3.9 SAC Summary | F      | Amount   | C8         | ='3.1 SAC BS'!C52 |
| 13 i    | 3.9 SAC Summary | F      | RWAs     | D8         | ='3.1 SAC BS'!E52 |
| 14      | 3.9 SAC Summary | G      | Amount   | C9         | ='3.1 SAC BS'!C55 |
| 15      | 3.9 SAC Summary | G      | RWAs     | D9         | ='3.1 SAC BS'!E55 |
| 16      | 3.9 SAC Summary | H      | Amount   | C10        | ='3.1 SAC BS'!C60 |
|   Check | Sheet           | Item   | Column   | Cell Ref   | Excel                                                                                                                                        |
|      17 | 3.9 SAC Summary | H      | RWAs     | D10        | ='3.1 SAC BS'!E60                                                                                                                            |
|      18 | 3.9 SAC Summary | J      | Amount   | C11        | ='3.1 SAC BS'!C71                                                                                                                            |
|      19 | 3.9 SAC Summary | J      | RWAs     | D11        | ='3.1 SAC BS'!E71                                                                                                                            |
|      20 | 3.9 SAC Summary | L      | Amount   | C12        | ='3.1 SAC BS'!C82                                                                                                                            |
|      21 | 3.9 SAC Summary | L      | RWAs     | D12        | ='3.1 SAC BS'!E82                                                                                                                            |
|      22 | 3.9 SAC Summary | M      | Amount   | C13        | =SUM('3.2 SAC OBS'!C3:C13)                                                                                                                   |
|      23 | 3.9 SAC Summary | M      | RWAs     | D13        | =SUM('3.2 SAC OBS'!N3:N12)                                                                                                                   |
|      24 | 3.9 SAC Summary | N      | Amount   | C14        | ='3.3 OTC - Interest Rates'!C3+'3.4 OTC - FX & Gold'!C3+'3.5 OTC -  Equities'!C3+'3.6 OTC - Precious Metals'!C3+'3.7 OTC - Commodities'!C3   |
|      25 | 3.9 SAC Summary | N      | RWAs     | D14        | ='3.3 OTC - Interest Rates'!H3+'3.4 OTC - FX & Gold'!H3+'3.5 OTC - Equities'!H3 +  '3.6 OTC - Precious Metals'!H3+'3.7 OTC - Commodities'!H3 |
|      26 | 3.9 SAC Summary | P      | Amount   | C15        | ='3.8 SAC Netted Exposures'!C3                                                                                                               |
|      27 | 3.9 SAC Summary | Q      | Amount   | C16        | =SUM(C3:C15)                                                                                                                                 |
|      28 | 3.9 SAC Summary | Q      | RWAs     | D16        | =SUM(D3:D14)                                                                                                                                 |

i  'Excel' column revised February 2019, to correctly reflect the formula in the Prudential Return template