
## Guidance Note

## Validation and verification of the '6.1 Capital Adequacy' Sheet

Relevant to the JFSC's prudential reporting requirements of JIBs

Issued: December 2018

Revised March 2025 to reflect the changes in the values in cells C74 to C76 (items 69 to 71), reflecting changes made to capital minima

## 1 Overview

## General points

- 1.1 The validation and verification checks performed on submission are set out herein.
- 1.2 Excel data validation in the template is limited as follows:
- 1.2.1 For monetary amounts, cells have been restricted so that only integers in the range -1,000,000,000 to +1,000,000,000 can be entered, unless otherwise noted. As the unit is £1,000, this means that values of +/- £1 trillion are permitted.
- 1.2.2 Excel only checks validation on direct input and/or if manually requested so it should not be considered to be a failsafe JIBs should check their data and the JFSC will check the data on submission.
- 1.2.3 Submission of the template to the JFSC will prompt the checks to run. If all checks re passed, the submission will be accepted, this fact is communicated to the JIB together with a list of any warnings.
- 1.3 In the tables below, both the item (in bold) and the Excel Location (Sheet and Cell reference) are provided.
- 1.4 When a test is failed, the message received will be as described herein.
- 1.5 The ' Check ' is a unique identifier for each test, provided within the message to enable the recipient to match the error message to this guidance.

## 2 Data input validation

## Validation of cells where data entry expected or that should be left blank

- 2.1 The table in this Section outlines the tests performed on cells where data entry is expected or that should be left blank (and are locked in the Excel workbook). Calculated fields are addressed in Section 3.

|   Check | Sheet                | Item   | Cell  Ref   | Validation Message                                                         |
|---------|----------------------|--------|-------------|----------------------------------------------------------------------------|
|       1 | 6.1 Capital Adequacy | 1      | C3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       2 | 6.1 Capital Adequacy | 2      | C4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       3 | 6.1 Capital Adequacy | 3      | C5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       4 | 6.1 Capital Adequacy | 5      | C6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       5 | 6.1 Capital Adequacy | 7      | C8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       6 | 6.1 Capital Adequacy | 11     | C12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       7 | 6.1 Capital Adequacy | 12     | C13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       8 | 6.1 Capital Adequacy | 13     | C14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|       9 | 6.1 Capital Adequacy | 14     | C15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      10 | 6.1 Capital Adequacy | 14a    | C16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      11 | 6.1 Capital Adequacy | 15     | C17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      12 | 6.1 Capital Adequacy | 16     | C18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      13 | 6.1 Capital Adequacy | 17     | C19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                | Item   | Cell  Ref   | Validation Message                                                         |
|      14 | 6.1 Capital Adequacy | 26     | C27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      15 | 6.1 Capital Adequacy | 30     | C31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      16 | 6.1 Capital Adequacy | 31     | C32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      17 | 6.1 Capital Adequacy | 34     | C34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      18 | 6.1 Capital Adequacy | 37     | C36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      19 | 6.1 Capital Adequacy | 38     | C37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      20 | 6.1 Capital Adequacy | 41     | C40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      21 | 6.1 Capital Adequacy | 46     | C46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      22 | 6.1 Capital Adequacy | 48     | C47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      23 | 6.1 Capital Adequacy | 52     | C50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      24 | 6.1 Capital Adequacy | 53     | C51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      25 | 6.1 Capital Adequacy | 56     | C54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      26 | 6.1 Capital Adequacy | 60f    | C65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      27 | 6.1 Capital Adequacy | 64     | C69         | Input must be a number in the range 0 to 1 (100%)                          |
|      28 | 6.1 Capital Adequacy | 65     | C70         | Input must be a number in the range 0 to 1 (100%)                          |
|      29 | 6.1 Capital Adequacy | 66     | C71         | Input must be a number in the range 0 to 1 (100%)                          |
|      30 | 6.1 Capital Adequacy | 67     | C72         | Input must be a number in the range 0 to 1 (100%)                          |
|   Check | Sheet                | Item   | Cell  Ref   | Validation Message                                                         |
|      31 | 6.1 Capital Adequacy | 72a    | C78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      32 | 6.1 Capital Adequacy | 72b    | C79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      33 | 6.1 Capital Adequacy | 72c    | C80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      34 | 6.1 Capital Adequacy | 73     | C81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      35 | 6.1 Capital Adequacy | 73a    | C82         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      36 | 6.1 Capital Adequacy | 73c    | C84         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      37 | 6.1 Capital Adequacy | 73d    | C85         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      38 | 6.1 Capital Adequacy | 74     | C86         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      39 | 6.1 Capital Adequacy | 75     | C87         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      40 | 6.1 Capital Adequacy | 75a    | C88         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      41 | 6.1 Capital Adequacy | 76     | C89         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      42 | 6.1 Capital Adequacy | 78     | C91         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      43 | 6.1 Capital Adequacy | 80     | C93         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      44 | 6.1 Capital Adequacy | 80a    | C94         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      45 | 6.1 Capital Adequacy | 81     | C95         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      46 | 6.1 Capital Adequacy | 81a    | C96         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      47 | 6.1 Capital Adequacy | 82b    | C99         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|   Check | Sheet                | Item   | Cell  Ref   | Validation Message                                                         |
|      48 | 6.1 Capital Adequacy | 84b    | C103        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      49 | 6.1 Capital Adequacy | 85d    | C109        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      50 | 6.1 Capital Adequacy | 87c    | C115        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      51 | 6.1 Capital Adequacy | 87d    | C116        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      52 | 6.1 Capital Adequacy | 87e    | C117        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      53 | 6.1 Capital Adequacy | 87f    | C118        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      54 | 6.1 Capital Adequacy | 87g    | C119        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |
|      55 | 6.1 Capital Adequacy | 87h    | C120        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000 |

## 3 Calculation checks

## Validation of cells where there is a calculation

- 3.1 The tables in this Section outline the tests performed on cells where the Excel workbook contains calculations.

|   Check | Sheet                | Item   | Cell  Ref   | Excel                                                                                          |
|---------|----------------------|--------|-------------|------------------------------------------------------------------------------------------------|
|      55 | 6.1 Capital Adequacy | 6      | C7          | =Sum( C3:C6 )                                                                                  |
|      56 | 6.1 Capital Adequacy | 8      | C9          | = C93 - C94                                                                                    |
|      57 | 6.1 Capital Adequacy | 9      | C10         | = C95 - C96                                                                                    |
|      58 | 6.1 Capital Adequacy | 10     | C11         | = C98 - C99                                                                                    |
|      59 | 6.1 Capital Adequacy | 17a    | C20         | = ROUND( 10%*MAX( C7-SUM( C8:C15,C17:C19 ),0 ),0 )                                             |
|      60 | 6.1 Capital Adequacy | 17b    | C21         | = ROUND( 15%*MAX( C7-SUM( C8:C15,C17:C19 ),0 ),0 )                                             |
|      61 | 6.1 Capital Adequacy | 18     | C22         | =IF( C77=0 , 0 , ROUND( MAX( C77-C20 ,0 ) * ( C78/C77 ),0 ) )                                  |
|      62 | 6.1 Capital Adequacy | 19     | C23         | =MAX( C83-C20 ,0 )                                                                             |
|      63 | 6.1 Capital Adequacy | 20     | C24         | =MAX( C86-C20 ,0 )                                                                             |
|      64 | 6.1 Capital Adequacy | 21     | C25         | =MAX( C88-C20 ,0 )                                                                             |
|      65 | 6.1 Capital Adequacy | 22     | C26         | =MAX( MIN (VALUE( C83 ), C20 ) + MIN( VALUE( C86 ), C20 ) + MIN( VALUE( C88 ),C20 ) - C21 ,0 ) |
|      66 | 6.1 Capital Adequacy | 27     | C28         | = C43                                                                                          |
|      67 | 6.1 Capital Adequacy | 28     | C29         | =  SUM( C8:C15,C17:C19,C22:C28 )                                                               |
|      68 | 6.1 Capital Adequacy | 29     | C30         | = C7 - C29                                                                                     |
|   Check | Sheet                | Item   | Cell  Ref   | Excel                                                          |
|      69 | 6.1 Capital Adequacy | 32     | C33         | = C31 - C32                                                    |
|      70 | 6.1 Capital Adequacy | 36     | C35         | = C31 + C34                                                    |
|      71 | 6.1 Capital Adequacy | 39     | C38         | = IF( C77=0 , 0 ,ROUND( MAX( C77-C20 ,0 ) * ( C79 /C77 ),0 ) ) |
|      72 | 6.1 Capital Adequacy | 40     | C39         | = C84                                                          |
|      73 | 6.1 Capital Adequacy | 42     | C41         | = C56                                                          |
|      74 | 6.1 Capital Adequacy | 43     | C42         | = SUM( C36:C41 )                                               |
|      75 | 6.1 Capital Adequacy | 43a    | C43         | = MAX( C42 - C35 ,0)                                           |
|      76 | 6.1 Capital Adequacy | 44     | C44         | = MAX( C35 - C42 ,0 )                                          |
|      77 | 6.1 Capital Adequacy | 45     | C45         | = C30 + C44                                                    |
|      78 | 6.1 Capital Adequacy | 50     | C48         | = IF( C91>C92 ,C92,C91 ) + IF( C89>C90,C90,C89 )               |
|      79 | 6.1 Capital Adequacy | 51     | C49         | = SUM( C46:C48 )                                               |
|      80 | 6.1 Capital Adequacy | 54     | C52         | = IF (C77=0 ,0 ,ROUND( MAX( C77 - C20 ,0 ) * ( C80/C77 ),0 ) ) |
|      81 | 6.1 Capital Adequacy | 55     | C53         | = C85                                                          |
|      82 | 6.1 Capital Adequacy | 57     | C55         | = SUM( C50:C54 )                                               |
|      83 | 6.1 Capital Adequacy | 57a    | C56         | = MAX( C55-C49 ,0 )                                            |
|      84 | 6.1 Capital Adequacy | 58     | C57         | = MAX( C49-C55 ,0 )                                            |
|      85 | 6.1 Capital Adequacy | 59     | C58         | = C45 + C57                                                    |
|   Check | Sheet                | Item   | Cell  Ref   | Excel                                      |
|      86 | 6.1 Capital Adequacy | 60     | C59         | = SUM( C60:C65 )                           |
|      87 | 6.1 Capital Adequacy | 60a    | C60         | = ROUND( 250%*C100 ,0 )                    |
|      88 | 6.1 Capital Adequacy | 60b    | C61         | = ROUND( 1250%*C101 ,0 )                   |
|      89 | 6.1 Capital Adequacy | 60c    | C62         | = SUM( C106:C110 )                         |
|      90 | 6.1 Capital Adequacy | 60d    | C63         | = SUM( C111:C112 )                         |
|      91 | 6.1 Capital Adequacy | 60e    | C64         | = SUM( C113:C120 )                         |
|      92 | 6.1 Capital Adequacy | 61     | C66         | = ROUND( C30/C59 ,4 )                      |
|      93 | 6.1 Capital Adequacy | 62     | C67         | = ROUND( C45/C59 ,4 )                      |
|      94 | 6.1 Capital Adequacy | 63     | C68         | = ROUND( C58/C59 ,4 )                      |
|      95 | 6.1 Capital Adequacy | 68     | C73         | = MIN( C66 - C69 , C67 - C70 , C68 - C71 ) |
|      96 | 6.1 Capital Adequacy | 69     | C74         | 4.5%                                       |
|      97 | 6.1 Capital Adequacy | 70     | C75         | 6%                                         |
|      98 | 6.1 Capital Adequacy | 71     | C76         | 8%                                         |
|      99 | 6.1 Capital Adequacy | 72     | C77         | = SUM( C78:C80 )                           |
|     100 | 6.1 Capital Adequacy | 73b    | C83         | = C82 - SUM( C84:C85 )                     |
|     101 | 6.1 Capital Adequacy | 77     | C90         | = ROUND( 1.25% * C62 ,0 )                  |
|     102 | 6.1 Capital Adequacy | 79     | C92         | = ROUND( 0.6% * C62 ,0 )                   |
|   Check | Sheet                | Item   | Cell  Ref   | Excel                                                                     |
|     103 | 6.1 Capital Adequacy | 82     | C97         | = '2.1 BS Assets'!G64                                                     |
|     104 | 6.1 Capital Adequacy | 82a    | C98         | = C97 - C87                                                               |
|     105 | 6.1 Capital Adequacy | 83     | C100        | = ( C83 + C86 + C88 ) - SUM( C23:C26 )                                    |
|     106 | 6.1 Capital Adequacy | 84     | C101        | = SUM( C102:C105 )                                                        |
|     107 | 6.1 Capital Adequacy | 84a    | C102        | = '2.1 BS Assets'!G30 + '2.1 BS Assets'!G56 + '2.4 Off Balance Sheet'!G14 |
|     108 | 6.1 Capital Adequacy | 84c    | C104        | = '5.4 Settlement Risk - Capital'!E8                                      |
|     109 | 6.1 Capital Adequacy | 84d    | C105        | = '2.1 BS Assets'!G52 + '2.4 Off Balance Sheet'!G16                       |
|     110 | 6.1 Capital Adequacy | 85a    | C106        | = '3.9 SAC Summary'!D16                                                   |
|     111 | 6.1 Capital Adequacy | 85b    | C107        | = SUM( '9.6 FIRB Detail'!E3:E28 )                                         |
|     112 | 6.1 Capital Adequacy | 85c    | C108        | = SUM( '9.7 AIRB Detail'!E3:E28 )                                         |
|     113 | 6.1 Capital Adequacy | 85e    | C110        | = '5.3 Settlement Risk-Credit Risk'!E8                                    |
|     114 | 6.1 Capital Adequacy | 86a    | C111        | =IF( 'Submission Header'!B6 = "BIA" , '4.1 BIA'!D10 , 0 )                 |
|     115 | 6.1 Capital Adequacy | 86b    | C112        | =IF( 'Submission Header'!B6 = "SAO" , '4.2 SAO'!D24 , 0 )                 |
|     116 | 6.1 Capital Adequacy | 87a    | C113        | = '5.1 FX & Gold'!I15                                                     |
|     117 | 6.1 Capital Adequacy | 87b    | C114        | = '5.2 Commodities'!G8                                                    |

## 4 Logical checks

- 4.1 Checks that the data entered is not inconsistent. Fails are highlighted in

in the template.

|   Check | Sheet                | Sum A (Excel)                    | Sum B (Excel)                                                                                                                    | Check          |
|---------|----------------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------|
|     118 | 6.1 Capital Adequacy | = $C$18 + $C$19  + $C$77 + $C$81 | = '2.1 BS Assets'!$G$28 + '2.1 BS Assets'!$G$42 + '2.1 BS Assets'!$G$53  + '2.1 BS Assets'!$G$54 + '2.4 Off Balance Sheet'!$G$15 | A must equal B |