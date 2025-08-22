
## Guidance Note

## Validation and verification of the '9.8 Local Interbank Market' Sheet

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

|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|---------|----------------------------|--------|---------------|-------------|----------------------------------------------------------------------------|
|       1 | 9.8 Local Interbank Market | 101    | Placed with   | E3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 9.8 Local Interbank Market | 101    | Received From | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 9.8 Local Interbank Market | 102    | Placed with   | E4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 9.8 Local Interbank Market | 102    | Received From | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 9.8 Local Interbank Market | 103    | Placed with   | E5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 9.8 Local Interbank Market | 103    | Received From | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 9.8 Local Interbank Market | 104    | Placed with   | E6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 9.8 Local Interbank Market | 104    | Received From | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 9.8 Local Interbank Market | 105    | Placed with   | E7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 9.8 Local Interbank Market | 105    | Received From | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 9.8 Local Interbank Market | 106    | Placed with   | E8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 9.8 Local Interbank Market | 106    | Received From | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 9.8 Local Interbank Market | I.1    | Currency      | D10         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      14 | 9.8 Local Interbank Market | I.1    | Placed with   | E10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 9.8 Local Interbank Market | I.1    | Received From | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 9.8 Local Interbank Market | I.2    | Currency      | D11         | Input must be 3 digit currency ISO code                                    |
|      17 | 9.8 Local Interbank Market | I.2    | Placed with   | E11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 9.8 Local Interbank Market | I.2    | Received From | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 9.8 Local Interbank Market | I.3    | Currency      | D12         | Input must be 3 digit currency ISO code                                    |
|      20 | 9.8 Local Interbank Market | I.3    | Placed with   | E12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 9.8 Local Interbank Market | I.3    | Received From | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 9.8 Local Interbank Market | I.4    | Currency      | D13         | Input must be 3 digit currency ISO code                                    |
|      23 | 9.8 Local Interbank Market | I.4    | Placed with   | E13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 9.8 Local Interbank Market | I.4    | Received From | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 9.8 Local Interbank Market | I.5    | Currency      | D14         | Input must be 3 digit currency ISO code                                    |
|      26 | 9.8 Local Interbank Market | I.5    | Placed with   | E14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 9.8 Local Interbank Market | I.5    | Received From | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      28 | 9.8 Local Interbank Market | I.6    | Currency      | D15         | Input must be 3 digit currency ISO code                                    |
|      29 | 9.8 Local Interbank Market | I.6    | Placed with   | E15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      30 | 9.8 Local Interbank Market | I.6    | Received From | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      31 | 9.8 Local Interbank Market | I.7    | Currency      | D16         | Input must be 3 digit currency ISO code                                    |
|      32 | 9.8 Local Interbank Market | I.7    | Placed with   | E16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 9.8 Local Interbank Market | I.7    | Received From | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 9.8 Local Interbank Market | I.8    | Currency      | D17         | Input must be 3 digit currency ISO code                                    |
|      35 | 9.8 Local Interbank Market | I.8    | Placed with   | E17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 9.8 Local Interbank Market | I.8    | Received From | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 9.8 Local Interbank Market | I.9    | Currency      | D18         | Input must be 3 digit currency ISO code                                    |
|      38 | 9.8 Local Interbank Market | I.9    | Placed with   | E18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 9.8 Local Interbank Market | I.9    | Received From | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 9.8 Local Interbank Market | I.10   | Currency      | D19         | Input must be 3 digit currency ISO code                                    |
|      41 | 9.8 Local Interbank Market | I.10   | Placed with   | E19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 9.8 Local Interbank Market | I.10   | Received From | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 9.8 Local Interbank Market | I.11   | Currency      | D20         | Input must be 3 digit currency ISO code                                    |
|      44 | 9.8 Local Interbank Market | I.11   | Placed with   | E20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 9.8 Local Interbank Market | I.11   | Received From | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 9.8 Local Interbank Market | I.12   | Currency      | D21         | Input must be 3 digit currency ISO code                                    |
|      47 | 9.8 Local Interbank Market | I.12   | Placed with   | E21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      48 | 9.8 Local Interbank Market | I.12   | Received From | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 9.8 Local Interbank Market | I.13   | Currency      | D22         | Input must be 3 digit currency ISO code                                    |
|      50 | 9.8 Local Interbank Market | I.13   | Placed with   | E22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 9.8 Local Interbank Market | I.13   | Received From | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 9.8 Local Interbank Market | I.14   | Currency      | D23         | Input must be 3 digit currency ISO code                                    |
|      53 | 9.8 Local Interbank Market | I.14   | Placed with   | E23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 9.8 Local Interbank Market | I.14   | Received From | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 9.8 Local Interbank Market | I.15   | Currency      | D24         | Input must be 3 digit currency ISO code                                    |
|      56 | 9.8 Local Interbank Market | I.15   | Placed with   | E24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      57 | 9.8 Local Interbank Market | I.15   | Received From | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      58 | 9.8 Local Interbank Market | I.16   | Currency      | D25         | Input must be 3 digit currency ISO code                                    |
|      59 | 9.8 Local Interbank Market | I.16   | Placed with   | E25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      60 | 9.8 Local Interbank Market | I.16   | Received From | F25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      61 | 9.8 Local Interbank Market | I.17   | Currency      | D26         | Input must be 3 digit currency ISO code                                    |
|      62 | 9.8 Local Interbank Market | I.17   | Placed with   | E26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      63 | 9.8 Local Interbank Market | I.17   | Received From | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      64 | 9.8 Local Interbank Market | I.18   | Currency      | D27         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      65 | 9.8 Local Interbank Market | I.18   | Placed with   | E27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      66 | 9.8 Local Interbank Market | I.18   | Received From | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      67 | 9.8 Local Interbank Market | I.19   | Currency      | D28         | Input must be 3 digit currency ISO code                                    |
|      68 | 9.8 Local Interbank Market | I.19   | Placed with   | E28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      69 | 9.8 Local Interbank Market | I.19   | Received From | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      70 | 9.8 Local Interbank Market | I.20   | Currency      | D29         | Input must be 3 digit currency ISO code                                    |
|      71 | 9.8 Local Interbank Market | I.20   | Placed with   | E29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      72 | 9.8 Local Interbank Market | I.20   | Received From | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      73 | 9.8 Local Interbank Market | I.21   | Currency      | D30         | Input must be 3 digit currency ISO code                                    |
|      74 | 9.8 Local Interbank Market | I.21   | Placed with   | E30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      75 | 9.8 Local Interbank Market | I.21   | Received From | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      76 | 9.8 Local Interbank Market | I.22   | Currency      | D31         | Input must be 3 digit currency ISO code                                    |
|      77 | 9.8 Local Interbank Market | I.22   | Placed with   | E31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      78 | 9.8 Local Interbank Market | I.22   | Received From | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      79 | 9.8 Local Interbank Market | I.23   | Currency      | D32         | Input must be 3 digit currency ISO code                                    |
|      80 | 9.8 Local Interbank Market | I.23   | Placed with   | E32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      81 | 9.8 Local Interbank Market | I.23   | Received From | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      82 | 9.8 Local Interbank Market | I.24   | Currency      | D33         | Input must be 3 digit currency ISO code                                    |
|      83 | 9.8 Local Interbank Market | I.24   | Placed with   | E33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      84 | 9.8 Local Interbank Market | I.24   | Received From | F33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      85 | 9.8 Local Interbank Market | I.25   | Currency      | D34         | Input must be 3 digit currency ISO code                                    |
|      86 | 9.8 Local Interbank Market | I.25   | Placed with   | E34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      87 | 9.8 Local Interbank Market | I.25   | Received From | F34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      88 | 9.8 Local Interbank Market | I.26   | Currency      | D35         | Input must be 3 digit currency ISO code                                    |
|      89 | 9.8 Local Interbank Market | I.26   | Placed with   | E35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      90 | 9.8 Local Interbank Market | I.26   | Received From | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      91 | 9.8 Local Interbank Market | I.27   | Currency      | D36         | Input must be 3 digit currency ISO code                                    |
|      92 | 9.8 Local Interbank Market | I.27   | Placed with   | E36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      93 | 9.8 Local Interbank Market | I.27   | Received From | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      94 | 9.8 Local Interbank Market | I.28   | Currency      | D37         | Input must be 3 digit currency ISO code                                    |
|      95 | 9.8 Local Interbank Market | I.28   | Placed with   | E37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      96 | 9.8 Local Interbank Market | I.28   | Received From | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      97 | 9.8 Local Interbank Market | I.29   | Currency      | D38         | Input must be 3 digit currency ISO code                                    |
|      98 | 9.8 Local Interbank Market | I.29   | Placed with   | E38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|      99 | 9.8 Local Interbank Market | I.29   | Received From | F38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     100 | 9.8 Local Interbank Market | I.30   | Currency      | D39         | Input must be 3 digit currency ISO code                                    |
|     101 | 9.8 Local Interbank Market | I.30   | Placed with   | E39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     102 | 9.8 Local Interbank Market | I.30   | Received From | F39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     103 | 9.8 Local Interbank Market | I.31   | Currency      | D40         | Input must be 3 digit currency ISO code                                    |
|     104 | 9.8 Local Interbank Market | I.31   | Placed with   | E40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     105 | 9.8 Local Interbank Market | I.31   | Received From | F40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     106 | 9.8 Local Interbank Market | I.32   | Currency      | D41         | Input must be 3 digit currency ISO code                                    |
|     107 | 9.8 Local Interbank Market | I.32   | Placed with   | E41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     108 | 9.8 Local Interbank Market | I.32   | Received From | F41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     109 | 9.8 Local Interbank Market | I.33   | Currency      | D42         | Input must be 3 digit currency ISO code                                    |
|     110 | 9.8 Local Interbank Market | I.33   | Placed with   | E42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     111 | 9.8 Local Interbank Market | I.33   | Received From | F42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     112 | 9.8 Local Interbank Market | I.34   | Currency      | D43         | Input must be 3 digit currency ISO code                                    |
|     113 | 9.8 Local Interbank Market | I.34   | Placed with   | E43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     114 | 9.8 Local Interbank Market | I.34   | Received From | F43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     115 | 9.8 Local Interbank Market | I.35   | Currency      | D44         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     116 | 9.8 Local Interbank Market | I.35   | Placed with   | E44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     117 | 9.8 Local Interbank Market | I.35   | Received From | F44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     118 | 9.8 Local Interbank Market | I.36   | Currency      | D45         | Input must be 3 digit currency ISO code                                    |
|     119 | 9.8 Local Interbank Market | I.36   | Placed with   | E45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     120 | 9.8 Local Interbank Market | I.36   | Received From | F45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     121 | 9.8 Local Interbank Market | I.37   | Currency      | D46         | Input must be 3 digit currency ISO code                                    |
|     122 | 9.8 Local Interbank Market | I.37   | Placed with   | E46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     123 | 9.8 Local Interbank Market | I.37   | Received From | F46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     124 | 9.8 Local Interbank Market | I.38   | Currency      | D47         | Input must be 3 digit currency ISO code                                    |
|     125 | 9.8 Local Interbank Market | I.38   | Placed with   | E47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     126 | 9.8 Local Interbank Market | I.38   | Received From | F47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     127 | 9.8 Local Interbank Market | I.39   | Currency      | D48         | Input must be 3 digit currency ISO code                                    |
|     128 | 9.8 Local Interbank Market | I.39   | Placed with   | E48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     129 | 9.8 Local Interbank Market | I.39   | Received From | F48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     130 | 9.8 Local Interbank Market | I.40   | Currency      | D49         | Input must be 3 digit currency ISO code                                    |
|     131 | 9.8 Local Interbank Market | I.40   | Placed with   | E49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     132 | 9.8 Local Interbank Market | I.40   | Received From | F49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     133 | 9.8 Local Interbank Market | I.41   | Currency      | D50         | Input must be 3 digit currency ISO code                                    |
|     134 | 9.8 Local Interbank Market | I.41   | Placed with   | E50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     135 | 9.8 Local Interbank Market | I.41   | Received From | F50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     136 | 9.8 Local Interbank Market | I.42   | Currency      | D51         | Input must be 3 digit currency ISO code                                    |
|     137 | 9.8 Local Interbank Market | I.42   | Placed with   | E51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     138 | 9.8 Local Interbank Market | I.42   | Received From | F51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     139 | 9.8 Local Interbank Market | I.43   | Currency      | D52         | Input must be 3 digit currency ISO code                                    |
|     140 | 9.8 Local Interbank Market | I.43   | Placed with   | E52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     141 | 9.8 Local Interbank Market | I.43   | Received From | F52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     142 | 9.8 Local Interbank Market | I.44   | Currency      | D53         | Input must be 3 digit currency ISO code                                    |
|     143 | 9.8 Local Interbank Market | I.44   | Placed with   | E53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     144 | 9.8 Local Interbank Market | I.44   | Received From | F53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     145 | 9.8 Local Interbank Market | I.45   | Currency      | D54         | Input must be 3 digit currency ISO code                                    |
|     146 | 9.8 Local Interbank Market | I.45   | Placed with   | E54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     147 | 9.8 Local Interbank Market | I.45   | Received From | F54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     148 | 9.8 Local Interbank Market | I.46   | Currency      | D55         | Input must be 3 digit currency ISO code                                    |
|     149 | 9.8 Local Interbank Market | I.46   | Placed with   | E55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     150 | 9.8 Local Interbank Market | I.46   | Received From | F55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     151 | 9.8 Local Interbank Market | I.47   | Currency      | D56         | Input must be 3 digit currency ISO code                                    |
|     152 | 9.8 Local Interbank Market | I.47   | Placed with   | E56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     153 | 9.8 Local Interbank Market | I.47   | Received From | F56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     154 | 9.8 Local Interbank Market | I.48   | Currency      | D57         | Input must be 3 digit currency ISO code                                    |
|     155 | 9.8 Local Interbank Market | I.48   | Placed with   | E57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     156 | 9.8 Local Interbank Market | I.48   | Received From | F57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     157 | 9.8 Local Interbank Market | I.49   | Currency      | D58         | Input must be 3 digit currency ISO code                                    |
|     158 | 9.8 Local Interbank Market | I.49   | Placed with   | E58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     159 | 9.8 Local Interbank Market | I.49   | Received From | F58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     160 | 9.8 Local Interbank Market | I.50   | Currency      | D59         | Input must be 3 digit currency ISO code                                    |
|     161 | 9.8 Local Interbank Market | I.50   | Placed with   | E59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     162 | 9.8 Local Interbank Market | I.50   | Received From | F59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     163 | 9.8 Local Interbank Market | I.51   | Currency      | D60         | Input must be 3 digit currency ISO code                                    |
|     164 | 9.8 Local Interbank Market | I.51   | Placed with   | E60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     165 | 9.8 Local Interbank Market | I.51   | Received From | F60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     166 | 9.8 Local Interbank Market | I.52   | Currency      | D61         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     167 | 9.8 Local Interbank Market | I.52   | Placed with   | E61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     168 | 9.8 Local Interbank Market | I.52   | Received From | F61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     169 | 9.8 Local Interbank Market | I.53   | Currency      | D62         | Input must be 3 digit currency ISO code                                    |
|     170 | 9.8 Local Interbank Market | I.53   | Placed with   | E62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     171 | 9.8 Local Interbank Market | I.53   | Received From | F62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     172 | 9.8 Local Interbank Market | I.54   | Currency      | D63         | Input must be 3 digit currency ISO code                                    |
|     173 | 9.8 Local Interbank Market | I.54   | Placed with   | E63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     174 | 9.8 Local Interbank Market | I.54   | Received From | F63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     175 | 9.8 Local Interbank Market | I.55   | Currency      | D64         | Input must be 3 digit currency ISO code                                    |
|     176 | 9.8 Local Interbank Market | I.55   | Placed with   | E64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     177 | 9.8 Local Interbank Market | I.55   | Received From | F64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     178 | 9.8 Local Interbank Market | I.56   | Currency      | D65         | Input must be 3 digit currency ISO code                                    |
|     179 | 9.8 Local Interbank Market | I.56   | Placed with   | E65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     180 | 9.8 Local Interbank Market | I.56   | Received From | F65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     181 | 9.8 Local Interbank Market | I.57   | Currency      | D66         | Input must be 3 digit currency ISO code                                    |
|     182 | 9.8 Local Interbank Market | I.57   | Placed with   | E66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     183 | 9.8 Local Interbank Market | I.57   | Received From | F66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     184 | 9.8 Local Interbank Market | I.58   | Currency      | D67         | Input must be 3 digit currency ISO code                                    |
|     185 | 9.8 Local Interbank Market | I.58   | Placed with   | E67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     186 | 9.8 Local Interbank Market | I.58   | Received From | F67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     187 | 9.8 Local Interbank Market | I.59   | Currency      | D68         | Input must be 3 digit currency ISO code                                    |
|     188 | 9.8 Local Interbank Market | I.59   | Placed with   | E68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     189 | 9.8 Local Interbank Market | I.59   | Received From | F68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     190 | 9.8 Local Interbank Market | I.60   | Currency      | D69         | Input must be 3 digit currency ISO code                                    |
|     191 | 9.8 Local Interbank Market | I.60   | Placed with   | E69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     192 | 9.8 Local Interbank Market | I.60   | Received From | F69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     193 | 9.8 Local Interbank Market | I.61   | Currency      | D70         | Input must be 3 digit currency ISO code                                    |
|     194 | 9.8 Local Interbank Market | I.61   | Placed with   | E70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     195 | 9.8 Local Interbank Market | I.61   | Received From | F70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     196 | 9.8 Local Interbank Market | I.62   | Currency      | D71         | Input must be 3 digit currency ISO code                                    |
|     197 | 9.8 Local Interbank Market | I.62   | Placed with   | E71         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     198 | 9.8 Local Interbank Market | I.62   | Received From | F71         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     199 | 9.8 Local Interbank Market | I.63   | Currency      | D72         | Input must be 3 digit currency ISO code                                    |
|     200 | 9.8 Local Interbank Market | I.63   | Placed with   | E72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     201 | 9.8 Local Interbank Market | I.63   | Received From | F72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     202 | 9.8 Local Interbank Market | I.64   | Currency      | D73         | Input must be 3 digit currency ISO code                                    |
|     203 | 9.8 Local Interbank Market | I.64   | Placed with   | E73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     204 | 9.8 Local Interbank Market | I.64   | Received From | F73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     205 | 9.8 Local Interbank Market | I.65   | Currency      | D74         | Input must be 3 digit currency ISO code                                    |
|     206 | 9.8 Local Interbank Market | I.65   | Placed with   | E74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     207 | 9.8 Local Interbank Market | I.65   | Received From | F74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     208 | 9.8 Local Interbank Market | I.66   | Currency      | D75         | Input must be 3 digit currency ISO code                                    |
|     209 | 9.8 Local Interbank Market | I.66   | Placed with   | E75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     210 | 9.8 Local Interbank Market | I.66   | Received From | F75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     211 | 9.8 Local Interbank Market | I.67   | Currency      | D76         | Input must be 3 digit currency ISO code                                    |
|     212 | 9.8 Local Interbank Market | I.67   | Placed with   | E76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     213 | 9.8 Local Interbank Market | I.67   | Received From | F76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     214 | 9.8 Local Interbank Market | I.68   | Currency      | D77         | Input must be 3 digit currency ISO code                                    |
|     215 | 9.8 Local Interbank Market | I.68   | Placed with   | E77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     216 | 9.8 Local Interbank Market | I.68   | Received From | F77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     217 | 9.8 Local Interbank Market | I.69   | Currency      | D78         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     218 | 9.8 Local Interbank Market | I.69   | Placed with   | E78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     219 | 9.8 Local Interbank Market | I.69   | Received From | F78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     220 | 9.8 Local Interbank Market | I.70   | Currency      | D79         | Input must be 3 digit currency ISO code                                    |
|     221 | 9.8 Local Interbank Market | I.70   | Placed with   | E79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     222 | 9.8 Local Interbank Market | I.70   | Received From | F79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     223 | 9.8 Local Interbank Market | I.71   | Currency      | D80         | Input must be 3 digit currency ISO code                                    |
|     224 | 9.8 Local Interbank Market | I.71   | Placed with   | E80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     225 | 9.8 Local Interbank Market | I.71   | Received From | F80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     226 | 9.8 Local Interbank Market | I.72   | Currency      | D81         | Input must be 3 digit currency ISO code                                    |
|     227 | 9.8 Local Interbank Market | I.72   | Placed with   | E81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     228 | 9.8 Local Interbank Market | I.72   | Received From | F81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     229 | 9.8 Local Interbank Market | I.73   | Currency      | D82         | Input must be 3 digit currency ISO code                                    |
|     230 | 9.8 Local Interbank Market | I.73   | Placed with   | E82         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     231 | 9.8 Local Interbank Market | I.73   | Received From | F82         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     232 | 9.8 Local Interbank Market | I.74   | Currency      | D83         | Input must be 3 digit currency ISO code                                    |
|     233 | 9.8 Local Interbank Market | I.74   | Placed with   | E83         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     234 | 9.8 Local Interbank Market | I.74   | Received From | F83         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     235 | 9.8 Local Interbank Market | I.75   | Currency      | D84         | Input must be 3 digit currency ISO code                                    |
|     236 | 9.8 Local Interbank Market | I.75   | Placed with   | E84         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     237 | 9.8 Local Interbank Market | I.75   | Received From | F84         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     238 | 9.8 Local Interbank Market | I.76   | Currency      | D85         | Input must be 3 digit currency ISO code                                    |
|     239 | 9.8 Local Interbank Market | I.76   | Placed with   | E85         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     240 | 9.8 Local Interbank Market | I.76   | Received From | F85         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     241 | 9.8 Local Interbank Market | I.77   | Currency      | D86         | Input must be 3 digit currency ISO code                                    |
|     242 | 9.8 Local Interbank Market | I.77   | Placed with   | E86         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     243 | 9.8 Local Interbank Market | I.77   | Received From | F86         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     244 | 9.8 Local Interbank Market | I.78   | Currency      | D87         | Input must be 3 digit currency ISO code                                    |
|     245 | 9.8 Local Interbank Market | I.78   | Placed with   | E87         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     246 | 9.8 Local Interbank Market | I.78   | Received From | F87         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     247 | 9.8 Local Interbank Market | I.79   | Currency      | D88         | Input must be 3 digit currency ISO code                                    |
|     248 | 9.8 Local Interbank Market | I.79   | Placed with   | E88         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     249 | 9.8 Local Interbank Market | I.79   | Received From | F88         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     250 | 9.8 Local Interbank Market | I.80   | Currency      | D89         | Input must be 3 digit currency ISO code                                    |
|     251 | 9.8 Local Interbank Market | I.80   | Placed with   | E89         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     252 | 9.8 Local Interbank Market | I.80   | Received From | F89         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     253 | 9.8 Local Interbank Market | I.81   | Currency      | D90         | Input must be 3 digit currency ISO code                                    |
|     254 | 9.8 Local Interbank Market | I.81   | Placed with   | E90         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     255 | 9.8 Local Interbank Market | I.81   | Received From | F90         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     256 | 9.8 Local Interbank Market | I.82   | Currency      | D91         | Input must be 3 digit currency ISO code                                    |
|     257 | 9.8 Local Interbank Market | I.82   | Placed with   | E91         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     258 | 9.8 Local Interbank Market | I.82   | Received From | F91         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     259 | 9.8 Local Interbank Market | I.83   | Currency      | D92         | Input must be 3 digit currency ISO code                                    |
|     260 | 9.8 Local Interbank Market | I.83   | Placed with   | E92         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     261 | 9.8 Local Interbank Market | I.83   | Received From | F92         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     262 | 9.8 Local Interbank Market | I.84   | Currency      | D93         | Input must be 3 digit currency ISO code                                    |
|     263 | 9.8 Local Interbank Market | I.84   | Placed with   | E93         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     264 | 9.8 Local Interbank Market | I.84   | Received From | F93         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     265 | 9.8 Local Interbank Market | I.85   | Currency      | D94         | Input must be 3 digit currency ISO code                                    |
|     266 | 9.8 Local Interbank Market | I.85   | Placed with   | E94         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     267 | 9.8 Local Interbank Market | I.85   | Received From | F94         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     268 | 9.8 Local Interbank Market | I.86   | Currency      | D95         | Input must be 3 digit currency ISO code                                    |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     269 | 9.8 Local Interbank Market | I.86   | Placed with   | E95         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     270 | 9.8 Local Interbank Market | I.86   | Received From | F95         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     271 | 9.8 Local Interbank Market | I.87   | Currency      | D96         | Input must be 3 digit currency ISO code                                    |
|     272 | 9.8 Local Interbank Market | I.87   | Placed with   | E96         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     273 | 9.8 Local Interbank Market | I.87   | Received From | F96         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     274 | 9.8 Local Interbank Market | I.88   | Currency      | D97         | Input must be 3 digit currency ISO code                                    |
|     275 | 9.8 Local Interbank Market | I.88   | Placed with   | E97         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     276 | 9.8 Local Interbank Market | I.88   | Received From | F97         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     277 | 9.8 Local Interbank Market | I.89   | Currency      | D98         | Input must be 3 digit currency ISO code                                    |
|     278 | 9.8 Local Interbank Market | I.89   | Placed with   | E98         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     279 | 9.8 Local Interbank Market | I.89   | Received From | F98         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     280 | 9.8 Local Interbank Market | I.90   | Currency      | D99         | Input must be 3 digit currency ISO code                                    |
|     281 | 9.8 Local Interbank Market | I.90   | Placed with   | E99         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     282 | 9.8 Local Interbank Market | I.90   | Received From | F99         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     283 | 9.8 Local Interbank Market | I.91   | Currency      | D100        | Input must be 3 digit currency ISO code                                    |
|     284 | 9.8 Local Interbank Market | I.91   | Placed with   | E100        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     285 | 9.8 Local Interbank Market | I.91   | Received From | F100        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     286 | 9.8 Local Interbank Market | I.92   | Currency      | D101        | Input must be 3 digit currency ISO code                                    |
|     287 | 9.8 Local Interbank Market | I.92   | Placed with   | E101        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     288 | 9.8 Local Interbank Market | I.92   | Received From | F101        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     289 | 9.8 Local Interbank Market | I.93   | Currency      | D102        | Input must be 3 digit currency ISO code                                    |
|     290 | 9.8 Local Interbank Market | I.93   | Placed with   | E102        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     291 | 9.8 Local Interbank Market | I.93   | Received From | F102        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     292 | 9.8 Local Interbank Market | I.94   | Currency      | D103        | Input must be 3 digit currency ISO code                                    |
|     293 | 9.8 Local Interbank Market | I.94   | Placed with   | E103        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     294 | 9.8 Local Interbank Market | I.94   | Received From | F103        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     295 | 9.8 Local Interbank Market | I.95   | Currency      | D104        | Input must be 3 digit currency ISO code                                    |
|     296 | 9.8 Local Interbank Market | I.95   | Placed with   | E104        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     297 | 9.8 Local Interbank Market | I.95   | Received From | F104        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     298 | 9.8 Local Interbank Market | I.96   | Currency      | D105        | Input must be 3 digit currency ISO code                                    |
|     299 | 9.8 Local Interbank Market | I.96   | Placed with   | E105        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     300 | 9.8 Local Interbank Market | I.96   | Received From | F105        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     301 | 9.8 Local Interbank Market | I.97   | Currency      | D106        | Input must be 3 digit currency ISO code                                    |
|     302 | 9.8 Local Interbank Market | I.97   | Placed with   | E106        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                      | Item   | Column        | Cell  Ref   | Validation Message                                                         |
|     303 | 9.8 Local Interbank Market | I.97   | Received From | F106        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     304 | 9.8 Local Interbank Market | I.98   | Currency      | D107        | Input must be 3 digit currency ISO code                                    |
|     305 | 9.8 Local Interbank Market | I.98   | Placed with   | E107        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     306 | 9.8 Local Interbank Market | I.98   | Received From | F107        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     307 | 9.8 Local Interbank Market | I.99   | Currency      | D108        | Input must be 3 digit currency ISO code                                    |
|     308 | 9.8 Local Interbank Market | I.99   | Placed with   | E108        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     309 | 9.8 Local Interbank Market | I.99   | Received From | F108        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     310 | 9.8 Local Interbank Market | I.100  | Currency      | D109        | Input must be 3 digit currency ISO code                                    |
|     311 | 9.8 Local Interbank Market | I.100  | Placed with   | E109        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|     312 | 9.8 Local Interbank Market | I.100  | Received From | F109        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                      |   Item | Column        | Cell  Ref   | Excel       |
|---------|----------------------------|--------|---------------|-------------|-------------|
|     313 | 9.8 Local Interbank Market |    107 | Placed with   | E9          | =SUM(E3:E8) |
|     314 | 9.8 Local Interbank Market |    107 | Received from | F9          | =SUM(F3:F8) |