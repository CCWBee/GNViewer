
## Guidance Note

## Validation and verification of the '1.2 LCR-LMR' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

Revised February 2019, to address non-substantive layout issue.

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

|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|---------|-------------|--------|---------------------------------------------------------|-------------|----------------------------------------------------------------------------|
|       1 | 1.2 LCR-LMR | RE.01  | Balance sheet asset / Balance sheet liability / Nominal | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 1.2 LCR-LMR | RE.01  | Contractually due inflow / Contractually due outflow    | D3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 1.2 LCR-LMR | RE.01  | Predicted inflow / Predicted outflow                    | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 1.2 LCR-LMR | RE.02  | Balance sheet asset / Balance sheet liability / Nominal | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 1.2 LCR-LMR | RE.02  | Contractually due inflow / Contractually due outflow    | D4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 1.2 LCR-LMR | RE.02  | Predicted inflow / Predicted outflow                    | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 1.2 LCR-LMR | RE.03  | Balance sheet asset / Balance sheet liability / Nominal | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|       8 | 1.2 LCR-LMR | RE.03  | Contractually due inflow / Contractually due outflow    | D5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 1.2 LCR-LMR | RE.03  | Predicted inflow / Predicted outflow                    | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 1.2 LCR-LMR | RE.04  | Balance sheet asset / Balance sheet liability / Nominal | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 1.2 LCR-LMR | RE.04  | Contractually due inflow / Contractually due outflow    | D6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 1.2 LCR-LMR | RE.04  | Predicted inflow / Predicted outflow                    | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 1.2 LCR-LMR | RE.05  | Balance sheet asset / Balance sheet liability / Nominal | C7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      14 | 1.2 LCR-LMR | RE.05  | Contractually due inflow / Contractually due outflow    | D7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 1.2 LCR-LMR | RE.05  | Predicted inflow / Predicted outflow                    | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 1.2 LCR-LMR | RE.06  | Balance sheet asset / Balance sheet liability / Nominal | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 1.2 LCR-LMR | RE.06  | Contractually due inflow / Contractually due outflow    | D8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      18 | 1.2 LCR-LMR | RE.06  | Predicted inflow / Predicted outflow                    | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 1.2 LCR-LMR | RE.07  | Balance sheet asset / Balance sheet liability / Nominal | C9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 1.2 LCR-LMR | RE.07  | Contractually due inflow / Contractually due outflow    | D9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 1.2 LCR-LMR | RE.07  | Predicted inflow / Predicted outflow                    | E9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 1.2 LCR-LMR | RE.08  | Balance sheet asset / Balance sheet liability / Nominal | C10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 1.2 LCR-LMR | RE.08  | Contractually due inflow / Contractually due outflow    | D10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 1.2 LCR-LMR | RE.08  | Predicted inflow / Predicted outflow                    | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 1.2 LCR-LMR | RE.09  | Balance sheet asset / Balance sheet liability / Nominal | C11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 1.2 LCR-LMR | RE.09  | Contractually due inflow / Contractually due outflow    | D11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 1.2 LCR-LMR | RE.09  | Predicted inflow / Predicted outflow                    | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      28 | 1.2 LCR-LMR | RE.10  | Balance sheet asset / Balance sheet liability / Nominal | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      29 | 1.2 LCR-LMR | RE.10  | Contractually due inflow / Contractually due outflow    | D12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 1.2 LCR-LMR | RE.10  | Predicted inflow / Predicted outflow                    | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      31 | 1.2 LCR-LMR | RE.11  | Balance sheet asset / Balance sheet liability / Nominal | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 1.2 LCR-LMR | RE.11  | Contractually due inflow / Contractually due outflow    | D13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 1.2 LCR-LMR | RE.11  | Predicted inflow / Predicted outflow                    | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 1.2 LCR-LMR | OL.01  | Balance sheet asset / Balance sheet liability / Nominal | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 1.2 LCR-LMR | OL.01  | Contractually due inflow / Contractually due outflow    | D15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 1.2 LCR-LMR | OL.01  | Predicted inflow / Predicted outflow                    | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      37 | 1.2 LCR-LMR | OL.02  | Balance sheet asset / Balance sheet liability / Nominal | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 1.2 LCR-LMR | OL.02  | Contractually due inflow / Contractually due outflow    | D16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 1.2 LCR-LMR | OL.02  | Predicted inflow / Predicted outflow                    | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 1.2 LCR-LMR | OL.03  | Balance sheet asset / Balance sheet liability / Nominal | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 1.2 LCR-LMR | OL.03  | Contractually due inflow / Contractually due outflow    | D17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 1.2 LCR-LMR | OL.03  | Predicted inflow / Predicted outflow                    | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 1.2 LCR-LMR | OL.04  | Balance sheet asset / Balance sheet liability / Nominal | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 1.2 LCR-LMR | OL.04  | Contractually due inflow / Contractually due outflow    | D18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 1.2 LCR-LMR | OL.04  | Predicted inflow / Predicted outflow                    | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      46 | 1.2 LCR-LMR | OL.05  | Balance sheet asset / Balance sheet liability / Nominal | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 1.2 LCR-LMR | OL.05  | Contractually due inflow / Contractually due outflow    | D19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      48 | 1.2 LCR-LMR | OL.05  | Predicted inflow / Predicted outflow                    | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 1.2 LCR-LMR | OL.06  | Balance sheet asset / Balance sheet liability / Nominal | C20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 1.2 LCR-LMR | OL.06  | Contractually due inflow / Contractually due outflow    | D20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 1.2 LCR-LMR | OL.06  | Predicted inflow / Predicted outflow                    | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 1.2 LCR-LMR | OL.07  | Balance sheet asset / Balance sheet liability / Nominal | C21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 1.2 LCR-LMR | OL.07  | Contractually due inflow / Contractually due outflow    | D21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 1.2 LCR-LMR | OL.07  | Predicted inflow / Predicted outflow                    | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      55 | 1.2 LCR-LMR | OL.08  | Balance sheet asset / Balance sheet liability / Nominal | C22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      56 | 1.2 LCR-LMR | OL.08  | Contractually due inflow / Contractually due outflow    | D22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 1.2 LCR-LMR | OL.08  | Predicted inflow / Predicted outflow                    | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 1.2 LCR-LMR | OL.09  | Balance sheet asset / Balance sheet liability / Nominal | C23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      59 | 1.2 LCR-LMR | OL.09  | Contractually due inflow / Contractually due outflow    | D23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 1.2 LCR-LMR | OL.09  | Predicted inflow / Predicted outflow                    | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 1.2 LCR-LMR | OL.10  | Balance sheet asset / Balance sheet liability / Nominal | C24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      62 | 1.2 LCR-LMR | OL.10  | Contractually due inflow / Contractually due outflow    | D24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 1.2 LCR-LMR | OL.10  | Predicted inflow / Predicted outflow                    | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      64 | 1.2 LCR-LMR | CM.01  | Balance sheet asset / Balance sheet liability / Nominal | C26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      65 | 1.2 LCR-LMR | CM.01  | Contractually due inflow / Contractually due outflow    | D26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 1.2 LCR-LMR | CM.01  | Predicted inflow / Predicted outflow                    | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 1.2 LCR-LMR | CM.02  | Balance sheet asset / Balance sheet liability / Nominal | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      68 | 1.2 LCR-LMR | CM.02  | Contractually due inflow / Contractually due outflow    | D27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 1.2 LCR-LMR | CM.02  | Predicted inflow / Predicted outflow                    | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 1.2 LCR-LMR | CM.03  | Balance sheet asset / Balance sheet liability / Nominal | C28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      71 | 1.2 LCR-LMR | CM.03  | Contractually due inflow / Contractually due outflow    | D28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 1.2 LCR-LMR | CM.03  | Predicted inflow / Predicted outflow                    | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      73 | 1.2 LCR-LMR | CM.04  | Balance sheet asset / Balance sheet liability / Nominal | C29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      74 | 1.2 LCR-LMR | CM.04  | Contractually due inflow / Contractually due outflow    | D29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 1.2 LCR-LMR | CM.04  | Predicted inflow / Predicted outflow                    | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 1.2 LCR-LMR | DO.01  | Balance sheet asset / Balance sheet liability / Nominal | C31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      77 | 1.2 LCR-LMR | DO.01  | Contractually due inflow / Contractually due outflow    | D31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 1.2 LCR-LMR | DO.01  | Predicted inflow / Predicted outflow                    | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 1.2 LCR-LMR | DO.02  | Balance sheet asset / Balance sheet liability / Nominal | C32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      80 | 1.2 LCR-LMR | DO.02  | Contractually due inflow / Contractually due outflow    | D32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 1.2 LCR-LMR | DO.02  | Predicted inflow / Predicted outflow                    | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      82 | 1.2 LCR-LMR | IF.01  | Balance sheet asset / Balance sheet liability / Nominal | C34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      83 | 1.2 LCR-LMR | IF.01  | Contractually due inflow / Contractually due outflow    | D34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 1.2 LCR-LMR | IF.01  | Predicted inflow / Predicted outflow                    | E34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 1.2 LCR-LMR | IF.02  | Balance sheet asset / Balance sheet liability / Nominal | C35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      86 | 1.2 LCR-LMR | IF.02  | Contractually due inflow / Contractually due outflow    | D35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 1.2 LCR-LMR | IF.02  | Predicted inflow / Predicted outflow                    | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 1.2 LCR-LMR | IF.03  | Balance sheet asset / Balance sheet liability / Nominal | C36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      89 | 1.2 LCR-LMR | IF.03  | Contractually due inflow / Contractually due outflow    | D36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 1.2 LCR-LMR | IF.03  | Predicted inflow / Predicted outflow                    | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|      91 | 1.2 LCR-LMR | IF.04  | Balance sheet asset / Balance sheet liability / Nominal | C37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      92 | 1.2 LCR-LMR | IF.04  | Contractually due inflow / Contractually due outflow    | D37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 1.2 LCR-LMR | IF.04  | Predicted inflow / Predicted outflow                    | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 1.2 LCR-LMR | IF.05  | Balance sheet asset / Balance sheet liability / Nominal | C38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      95 | 1.2 LCR-LMR | IF.05  | Contractually due inflow / Contractually due outflow    | D38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 1.2 LCR-LMR | IF.05  | Predicted inflow / Predicted outflow                    | E38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 1.2 LCR-LMR | IF.06  | Balance sheet asset / Balance sheet liability / Nominal | C39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      98 | 1.2 LCR-LMR | IF.06  | Contractually due inflow / Contractually due outflow    | D39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      99 | 1.2 LCR-LMR | IF.06  | Predicted inflow / Predicted outflow                    | E39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|     100 | 1.2 LCR-LMR | IF.07  | Balance sheet asset / Balance sheet liability / Nominal | C40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     101 | 1.2 LCR-LMR | IF.07  | Contractually due inflow / Contractually due outflow    | D40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 1.2 LCR-LMR | IF.07  | Predicted inflow / Predicted outflow                    | E40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 1.2 LCR-LMR | IF.08  | Balance sheet asset / Balance sheet liability / Nominal | C41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     104 | 1.2 LCR-LMR | IF.08  | Contractually due inflow / Contractually due outflow    | D41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 1.2 LCR-LMR | IF.08  | Predicted inflow / Predicted outflow                    | E41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 1.2 LCR-LMR | IF.09  | Balance sheet asset / Balance sheet liability / Nominal | C42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     107 | 1.2 LCR-LMR | IF.09  | Contractually due inflow / Contractually due outflow    | D42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 1.2 LCR-LMR | IF.09  | Predicted inflow / Predicted outflow                    | E42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message                                                         |
|     109 | 1.2 LCR-LMR | IF.10  | Balance sheet asset / Balance sheet liability / Nominal | C43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     110 | 1.2 LCR-LMR | IF.10  | Contractually due inflow / Contractually due outflow    | D43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 1.2 LCR-LMR | IF.10  | Predicted inflow / Predicted outflow                    | E43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 1.2 LCR-LMR | CR.02  | Balance sheet asset / Balance sheet liability / Nominal | C46         | Must be blank                                                              |
|     113 | 1.2 LCR-LMR | CR.02  | Contractually due inflow / Contractually due outflow    | D46         | Must be blank                                                              |
|     114 | 1.2 LCR-LMR | CR.03  | Balance sheet asset / Balance sheet liability / Nominal | C47         | Must be blank                                                              |
|     115 | 1.2 LCR-LMR | CR.03  | Contractually due inflow / Contractually due outflow    | D47         | Must be blank                                                              |
|     116 | 1.2 LCR-LMR | CR.04  | Balance sheet asset / Balance sheet liability / Nominal | C48         | Must be blank                                                              |
|     117 | 1.2 LCR-LMR | CR.04  | Contractually due inflow / Contractually due outflow    | D48         | Must be blank                                                              |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Validation Message   |
|     118 | 1.2 LCR-LMR | MR.02  | Balance sheet asset / Balance sheet liability / Nominal | C50         | Must be blank        |
|     119 | 1.2 LCR-LMR | MR.02  | Contractually due inflow / Contractually due outflow    | D50         | Must be blank        |
|     120 | 1.2 LCR-LMR | MR.03  | Balance sheet asset / Balance sheet liability / Nominal | C51         | Must be blank        |
|     121 | 1.2 LCR-LMR | MR.03  | Contractually due inflow / Contractually due outflow    | D51         | Must be blank        |
|     122 | 1.2 LCR-LMR | MR.04  | Balance sheet asset / Balance sheet liability / Nominal | C52         | Must be blank        |
|     123 | 1.2 LCR-LMR | MR.04  | Contractually due inflow / Contractually due outflow    | D52         | Must be blank        |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Excel            |
|---------|-------------|--------|---------------------------------------------------------|-------------|------------------|
|     124 | 1.2 LCR-LMR | RE.12  | Balance sheet asset / Balance sheet liability / Nominal | C14         | = SUM( C3:C13 )  |
|     125 | 1.2 LCR-LMR | RE.12  | Contractually due inflow / Contractually due outflow    | D14         | = SUM( D3:D13 )  |
|     126 | 1.2 LCR-LMR | RE.12  | Predicted inflow / Predicted outflow                    | E14         | = SUM( E3:E13 )  |
|     127 | 1.2 LCR-LMR | OL.11  | Balance sheet asset / Balance sheet liability / Nominal | C25         | = SUM( C15:C24 ) |
|     128 | 1.2 LCR-LMR | OL.11  | Contractually due inflow / Contractually due outflow    | D25         | = SUM( D15:D24 ) |
|     129 | 1.2 LCR-LMR | OL.11  | Predicted inflow / Predicted outflow                    | E25         | = SUM( E15:E24 ) |
|     130 | 1.2 LCR-LMR | CM.05  | Balance sheet asset / Balance sheet liability / Nominal | C30         | = SUM( C26:C29 ) |
|     131 | 1.2 LCR-LMR | CM.05  | Contractually due inflow / Contractually due outflow    | D30         | = SUM( D26:D29 ) |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Excel                                                                 |
|     132 | 1.2 LCR-LMR | CM.05  | Predicted inflow / Predicted outflow                    | E30         | = SUM( E26:E29 )                                                      |
|     133 | 1.2 LCR-LMR | DO.03  | Balance sheet asset / Balance sheet liability / Nominal | C33         | = SUM( C31:C32 )                                                      |
|     134 | 1.2 LCR-LMR | DO.03  | Contractually due inflow / Contractually due outflow    | D33         | = SUM( D31:D32 )                                                      |
|     135 | 1.2 LCR-LMR | DO.03  | Predicted inflow / Predicted outflow                    | E33         | = SUM( E31:E32 )                                                      |
|     136 | 1.2 LCR-LMR | IF.11  | Balance sheet asset / Balance sheet liability / Nominal | C44         | = SUM( C34:C43 )                                                      |
|     137 | 1.2 LCR-LMR | IF.11  | Contractually due inflow / Contractually due outflow    | D44         | = SUM( D34:D43 )                                                      |
|     138 | 1.2 LCR-LMR | IF.11  | Predicted inflow / Predicted outflow                    | E44         | = SUM( E34:E43 )                                                      |
|     139 | 1.2 LCR-LMR | CR.01  | Balance sheet asset / Balance sheet liability / Nominal | C45         | = IF( 'Submission Header'!$B$7 = "LCR" , C14 + C25 + C30 + C33, "" )  |
|     140 | 1.2 LCR-LMR | CR.01  | Contractually due inflow / Contractually due outflow    | D45         | = IF( 'Submission Header'!$B$7 = "LCR" , D14 + D25 + D30 + D33 , "" ) |
|     141 | 1.2 LCR-LMR | CR.01  | Predicted inflow / Predicted outflow                    | E45         | = IF( 'Submission Header'!$B$7 = "LCR" , E14 + E25 + E30 + E33 , "" ) |
|   Check | Sheet       | Item   | Column                                                  | Cell  Ref   | Excel                                                                                     |
|     142 | 1.2 LCR-LMR | CR.02  | Predicted inflow / Predicted outflow                    | E46         | = IF( 'Submission Header'!$B$7 = "LCR" , MIN( E44 , ROUND( 75%*E45 ,  0 ) ) , "" )        |
|     143 | 1.2 LCR-LMR | CR.03  | Predicted inflow / Predicted outflow                    | E47         | = IF( 'Submission Header'!$B$7 = "LCR" , E45-E46 , "" )                                   |
|     144 | 1.2 LCR-LMR | CR.04  | Predicted inflow / Predicted outflow                    | E48         | = IF( 'Submission Header'!$B$7 = "LCR" , ROUND( '1.1 HQLA'!$G$26 /  E47 , 3 ) , "" )      |
|     145 | 1.2 LCR-LMR | MR.01  | Balance sheet asset / Balance sheet liability / Nominal | C49         | = IF( 'Submission Header'!$B$7 = "LMR" , C14 + C25 + C30 + C33 , "" )                     |
|     146 | 1.2 LCR-LMR | MR.01  | Contractually due inflow / Contractually due outflow    | D49         | = IF( 'Submission Header'!$B$7="LMR" , D14 + D25 + D30 + D33 , "" )                       |
|     147 | 1.2 LCR-LMR | MR.01  | Predicted inflow / Predicted outflow                    | E49         | = IF( 'Submission Header'!$B$7 = "LMR" , E14 + E25 + E30 + E33 , "" )                     |
|     148 | 1.2 LCR-LMR | MR.02  | Predicted inflow / Predicted outflow                    | E50         | = IF( 'Submission Header'!$B$7 = "LMR" , MIN( (E44-E38 ) , ROUND(  75%*E49 , 0 ) ) , "" ) |
|     149 | 1.2 LCR-LMR | MR.03  | Predicted inflow / Predicted outflow                    | E51         | = IF( 'Submission Header'!$B$7 = "LMR" , E50 + E38 + '1.1 HQLA'!G26 ,  "" )               |
|     150 | 1.2 LCR-LMR | MR.04  | Predicted inflow / Predicted outflow                    | E52         | = IF( 'Submission Header'!$B$7 = "LMR" , ROUND( E51/E49 , 3 ) , "" )                      |