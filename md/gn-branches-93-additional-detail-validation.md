
Validation and verification of the '9.3 Additional Detail' Sheet

Page 1 of 27

## Guidance Note

## Validation and verification of the '9.3 Additional Detail' Sheet

Relevant to the JFSC's prudential reporting requirements of OIBs

Issued: September 2019

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

|   Check | Sheet                 | Item   | Column     | Cell  Ref   | Validation Message                                                                   |
|---------|-----------------------|--------|------------|-------------|--------------------------------------------------------------------------------------|
|       1 | 9.3 Additional Detail | AD.1   | Sheet      | C3          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|       2 | 9.3 Additional Detail | AD.1   | Sheet Item | D3          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|       3 | 9.3 Additional Detail | AD.1   | This Quarter | F3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|       4 | 9.3 Additional Detail | AD.1   | Last Quarter | G3          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|       5 | 9.3 Additional Detail | AD.2   | Sheet        | C4          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|       6 | 9.3 Additional Detail | AD.2   | Sheet Item   | D4          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|       7 | 9.3 Additional Detail | AD.2   | This Quarter | F4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|       8 | 9.3 Additional Detail | AD.2   | Last Quarter | G4          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|       9 | 9.3 Additional Detail | AD.3   | Sheet        | C5          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      10 | 9.3 Additional Detail | AD.3   | Sheet Item   | D5          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      11 | 9.3 Additional Detail | AD.3   | This Quarter | F5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      12 | 9.3 Additional Detail | AD.3   | Last Quarter | G5          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      13 | 9.3 Additional Detail | AD.4   | Sheet        | C6          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      14 | 9.3 Additional Detail | AD.4   | Sheet Item   | D6          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      15 | 9.3 Additional Detail | AD.4   | This Quarter | F6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      16 | 9.3 Additional Detail | AD.4   | Last Quarter | G6          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      17 | 9.3 Additional Detail | AD.5   | Sheet        | C7          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      18 | 9.3 Additional Detail | AD.5   | Sheet Item   | D7          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      19 | 9.3 Additional Detail | AD.5   | This Quarter | F7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      20 | 9.3 Additional Detail | AD.5   | Last Quarter | G7          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      21 | 9.3 Additional Detail | AD.6   | Sheet        | C8          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      22 | 9.3 Additional Detail | AD.6   | Sheet Item   | D8          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      23 | 9.3 Additional Detail | AD.6   | This Quarter | F8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      24 | 9.3 Additional Detail | AD.6   | Last Quarter | G8          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      25 | 9.3 Additional Detail | AD.7   | Sheet        | C9          | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      26 | 9.3 Additional Detail | AD.7   | Sheet Item   | D9          | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      27 | 9.3 Additional Detail | AD.7   | This Quarter | F9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      28 | 9.3 Additional Detail | AD.7   | Last Quarter | G9          | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      29 | 9.3 Additional Detail | AD.8   | Sheet        | C10         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      30 | 9.3 Additional Detail | AD.8   | Sheet Item   | D10         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      31 | 9.3 Additional Detail | AD.8   | This Quarter | F10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      32 | 9.3 Additional Detail | AD.8   | Last Quarter | G10         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      33 | 9.3 Additional Detail | AD.9   | Sheet        | C11         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      34 | 9.3 Additional Detail | AD.9   | Sheet Item   | D11         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      35 | 9.3 Additional Detail | AD.9   | This Quarter | F11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      36 | 9.3 Additional Detail | AD.9   | Last Quarter | G11         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      37 | 9.3 Additional Detail | AD.10  | Sheet        | C12         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      38 | 9.3 Additional Detail | AD.10  | Sheet Item   | D12         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      39 | 9.3 Additional Detail | AD.10  | This Quarter | F12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      40 | 9.3 Additional Detail | AD.10  | Last Quarter | G12         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      41 | 9.3 Additional Detail | AD.11  | Sheet        | C13         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      42 | 9.3 Additional Detail | AD.11  | Sheet Item   | D13         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      43 | 9.3 Additional Detail | AD.11  | This Quarter | F13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      44 | 9.3 Additional Detail | AD.11  | Last Quarter | G13         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      45 | 9.3 Additional Detail | AD.12  | Sheet        | C14         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      46 | 9.3 Additional Detail | AD.12  | Sheet Item   | D14         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      47 | 9.3 Additional Detail | AD.12  | This Quarter | F14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      48 | 9.3 Additional Detail | AD.12  | Last Quarter | G14         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      49 | 9.3 Additional Detail | AD.13  | Sheet        | C15         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      50 | 9.3 Additional Detail | AD.13  | Sheet Item   | D15         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      51 | 9.3 Additional Detail | AD.13  | This Quarter | F15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      52 | 9.3 Additional Detail | AD.13  | Last Quarter | G15         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      53 | 9.3 Additional Detail | AD.14  | Sheet        | C16         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      54 | 9.3 Additional Detail | AD.14  | Sheet Item   | D16         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      55 | 9.3 Additional Detail | AD.14  | This Quarter | F16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      56 | 9.3 Additional Detail | AD.14  | Last Quarter | G16         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      57 | 9.3 Additional Detail | AD.15  | Sheet        | C17         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      58 | 9.3 Additional Detail | AD.15  | Sheet Item   | D17         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      59 | 9.3 Additional Detail | AD.15  | This Quarter | F17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      60 | 9.3 Additional Detail | AD.15  | Last Quarter | G17         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      61 | 9.3 Additional Detail | AD.16  | Sheet        | C18         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      62 | 9.3 Additional Detail | AD.16  | Sheet Item   | D18         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      63 | 9.3 Additional Detail | AD.16  | This Quarter | F18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      64 | 9.3 Additional Detail | AD.16  | Last Quarter | G18         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      65 | 9.3 Additional Detail | AD.17  | Sheet        | C19         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      66 | 9.3 Additional Detail | AD.17  | Sheet Item   | D19         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      67 | 9.3 Additional Detail | AD.17  | This Quarter | F19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      68 | 9.3 Additional Detail | AD.17  | Last Quarter | G19         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      69 | 9.3 Additional Detail | AD.18  | Sheet        | C20         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      70 | 9.3 Additional Detail | AD.18  | Sheet Item   | D20         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      71 | 9.3 Additional Detail | AD.18  | This Quarter | F20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      72 | 9.3 Additional Detail | AD.18  | Last Quarter | G20         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      73 | 9.3 Additional Detail | AD.19  | Sheet        | C21         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      74 | 9.3 Additional Detail | AD.19  | Sheet Item   | D21         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      75 | 9.3 Additional Detail | AD.19  | This Quarter | F21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      76 | 9.3 Additional Detail | AD.19  | Last Quarter | G21         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      77 | 9.3 Additional Detail | AD.20  | Sheet        | C22         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      78 | 9.3 Additional Detail | AD.20  | Sheet Item   | D22         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      79 | 9.3 Additional Detail | AD.20  | This Quarter | F22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      80 | 9.3 Additional Detail | AD.20  | Last Quarter | G22         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      81 | 9.3 Additional Detail | AD.21  | Sheet        | C23         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      82 | 9.3 Additional Detail | AD.21  | Sheet Item   | D23         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      83 | 9.3 Additional Detail | AD.21  | This Quarter | F23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      84 | 9.3 Additional Detail | AD.21  | Last Quarter | G23         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      85 | 9.3 Additional Detail | AD.22  | Sheet        | C24         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      86 | 9.3 Additional Detail | AD.22  | Sheet Item   | D24         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      87 | 9.3 Additional Detail | AD.22  | This Quarter | F24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      88 | 9.3 Additional Detail | AD.22  | Last Quarter | G24         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      89 | 9.3 Additional Detail | AD.23  | Sheet        | C25         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      90 | 9.3 Additional Detail | AD.23  | Sheet Item   | D25         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      91 | 9.3 Additional Detail | AD.23  | This Quarter | F25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      92 | 9.3 Additional Detail | AD.23  | Last Quarter | G25         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      93 | 9.3 Additional Detail | AD.24  | Sheet        | C26         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      94 | 9.3 Additional Detail | AD.24  | Sheet Item   | D26         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|      95 | 9.3 Additional Detail | AD.24  | This Quarter | F26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      96 | 9.3 Additional Detail | AD.24  | Last Quarter | G26         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|      97 | 9.3 Additional Detail | AD.25  | Sheet        | C27         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|      98 | 9.3 Additional Detail | AD.25  | Sheet Item   | D27         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|      99 | 9.3 Additional Detail | AD.25  | This Quarter | F27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     100 | 9.3 Additional Detail | AD.25  | Last Quarter | G27         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     101 | 9.3 Additional Detail | AD.26  | Sheet        | C28         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     102 | 9.3 Additional Detail | AD.26  | Sheet Item   | D28         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     103 | 9.3 Additional Detail | AD.26  | This Quarter | F28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     104 | 9.3 Additional Detail | AD.26  | Last Quarter | G28         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     105 | 9.3 Additional Detail | AD.27  | Sheet        | C29         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     106 | 9.3 Additional Detail | AD.27  | Sheet Item   | D29         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     107 | 9.3 Additional Detail | AD.27  | This Quarter | F29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     108 | 9.3 Additional Detail | AD.27  | Last Quarter | G29         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     109 | 9.3 Additional Detail | AD.28  | Sheet        | C30         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     110 | 9.3 Additional Detail | AD.28  | Sheet Item   | D30         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     111 | 9.3 Additional Detail | AD.28  | This Quarter | F30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     112 | 9.3 Additional Detail | AD.28  | Last Quarter | G30         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     113 | 9.3 Additional Detail | AD.29  | Sheet        | C31         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     114 | 9.3 Additional Detail | AD.29  | Sheet Item   | D31         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     115 | 9.3 Additional Detail | AD.29  | This Quarter | F31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     116 | 9.3 Additional Detail | AD.29  | Last Quarter | G31         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     117 | 9.3 Additional Detail | AD.30  | Sheet        | C32         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     118 | 9.3 Additional Detail | AD.30  | Sheet Item   | D32         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     119 | 9.3 Additional Detail | AD.30  | This Quarter | F32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     120 | 9.3 Additional Detail | AD.30  | Last Quarter | G32         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     121 | 9.3 Additional Detail | AD.31  | Sheet        | C33         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     122 | 9.3 Additional Detail | AD.31  | Sheet Item   | D33         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     123 | 9.3 Additional Detail | AD.31  | This Quarter | F33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     124 | 9.3 Additional Detail | AD.31  | Last Quarter | G33         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     125 | 9.3 Additional Detail | AD.32  | Sheet        | C34         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     126 | 9.3 Additional Detail | AD.32  | Sheet Item   | D34         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     127 | 9.3 Additional Detail | AD.32  | This Quarter | F34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     128 | 9.3 Additional Detail | AD.32  | Last Quarter | G34         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     129 | 9.3 Additional Detail | AD.33  | Sheet        | C35         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     130 | 9.3 Additional Detail | AD.33  | Sheet Item   | D35         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     131 | 9.3 Additional Detail | AD.33  | This Quarter | F35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     132 | 9.3 Additional Detail | AD.33  | Last Quarter | G35         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     133 | 9.3 Additional Detail | AD.34  | Sheet        | C36         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     134 | 9.3 Additional Detail | AD.34  | Sheet Item   | D36         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     135 | 9.3 Additional Detail | AD.34  | This Quarter | F36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     136 | 9.3 Additional Detail | AD.34  | Last Quarter | G36         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     137 | 9.3 Additional Detail | AD.35  | Sheet        | C37         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     138 | 9.3 Additional Detail | AD.35  | Sheet Item   | D37         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     139 | 9.3 Additional Detail | AD.35  | This Quarter | F37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     140 | 9.3 Additional Detail | AD.35  | Last Quarter | G37         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     141 | 9.3 Additional Detail | AD.36  | Sheet        | C38         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     142 | 9.3 Additional Detail | AD.36  | Sheet Item   | D38         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     143 | 9.3 Additional Detail | AD.36  | This Quarter | F38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     144 | 9.3 Additional Detail | AD.36  | Last Quarter | G38         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     145 | 9.3 Additional Detail | AD.37  | Sheet        | C39         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     146 | 9.3 Additional Detail | AD.37  | Sheet Item   | D39         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     147 | 9.3 Additional Detail | AD.37  | This Quarter | F39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     148 | 9.3 Additional Detail | AD.37  | Last Quarter | G39         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     149 | 9.3 Additional Detail | AD.38  | Sheet        | C40         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     150 | 9.3 Additional Detail | AD.38  | Sheet Item   | D40         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     151 | 9.3 Additional Detail | AD.38  | This Quarter | F40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     152 | 9.3 Additional Detail | AD.38  | Last Quarter | G40         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     153 | 9.3 Additional Detail | AD.39  | Sheet        | C41         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     154 | 9.3 Additional Detail | AD.39  | Sheet Item   | D41         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     155 | 9.3 Additional Detail | AD.39  | This Quarter | F41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     156 | 9.3 Additional Detail | AD.39  | Last Quarter | G41         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     157 | 9.3 Additional Detail | AD.40  | Sheet        | C42         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     158 | 9.3 Additional Detail | AD.40  | Sheet Item   | D42         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     159 | 9.3 Additional Detail | AD.40  | This Quarter | F42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     160 | 9.3 Additional Detail | AD.40  | Last Quarter | G42         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     161 | 9.3 Additional Detail | AD.41  | Sheet        | C43         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     162 | 9.3 Additional Detail | AD.41  | Sheet Item   | D43         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     163 | 9.3 Additional Detail | AD.41  | This Quarter | F43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     164 | 9.3 Additional Detail | AD.41  | Last Quarter | G43         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     165 | 9.3 Additional Detail | AD.42  | Sheet        | C44         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     166 | 9.3 Additional Detail | AD.42  | Sheet Item   | D44         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     167 | 9.3 Additional Detail | AD.42  | This Quarter | F44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     168 | 9.3 Additional Detail | AD.42  | Last Quarter | G44         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     169 | 9.3 Additional Detail | AD.43  | Sheet        | C45         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     170 | 9.3 Additional Detail | AD.43  | Sheet Item   | D45         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     171 | 9.3 Additional Detail | AD.43  | This Quarter | F45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     172 | 9.3 Additional Detail | AD.43  | Last Quarter | G45         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     173 | 9.3 Additional Detail | AD.44  | Sheet        | C46         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     174 | 9.3 Additional Detail | AD.44  | Sheet Item   | D46         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     175 | 9.3 Additional Detail | AD.44  | This Quarter | F46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     176 | 9.3 Additional Detail | AD.44  | Last Quarter | G46         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     177 | 9.3 Additional Detail | AD.45  | Sheet        | C47         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     178 | 9.3 Additional Detail | AD.45  | Sheet Item   | D47         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     179 | 9.3 Additional Detail | AD.45  | This Quarter | F47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     180 | 9.3 Additional Detail | AD.45  | Last Quarter | G47         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     181 | 9.3 Additional Detail | AD.46  | Sheet        | C48         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     182 | 9.3 Additional Detail | AD.46  | Sheet Item   | D48         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     183 | 9.3 Additional Detail | AD.46  | This Quarter | F48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     184 | 9.3 Additional Detail | AD.46  | Last Quarter | G48         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     185 | 9.3 Additional Detail | AD.47  | Sheet        | C49         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     186 | 9.3 Additional Detail | AD.47  | Sheet Item   | D49         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     187 | 9.3 Additional Detail | AD.47  | This Quarter | F49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     188 | 9.3 Additional Detail | AD.47  | Last Quarter | G49         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     189 | 9.3 Additional Detail | AD.48  | Sheet        | C50         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     190 | 9.3 Additional Detail | AD.48  | Sheet Item   | D50         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     191 | 9.3 Additional Detail | AD.48  | This Quarter | F50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     192 | 9.3 Additional Detail | AD.48  | Last Quarter | G50         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     193 | 9.3 Additional Detail | AD.49  | Sheet        | C51         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     194 | 9.3 Additional Detail | AD.49  | Sheet Item   | D51         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     195 | 9.3 Additional Detail | AD.49  | This Quarter | F51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     196 | 9.3 Additional Detail | AD.49  | Last Quarter | G51         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     197 | 9.3 Additional Detail | AD.50  | Sheet        | C52         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     198 | 9.3 Additional Detail | AD.50  | Sheet Item   | D52         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     199 | 9.3 Additional Detail | AD.50  | This Quarter | F52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     200 | 9.3 Additional Detail | AD.50  | Last Quarter | G52         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     201 | 9.3 Additional Detail | AD.51  | Sheet        | C53         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     202 | 9.3 Additional Detail | AD.51  | Sheet Item   | D53         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     203 | 9.3 Additional Detail | AD.51  | This Quarter | F53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     204 | 9.3 Additional Detail | AD.51  | Last Quarter | G53         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     205 | 9.3 Additional Detail | AD.52  | Sheet        | C54         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     206 | 9.3 Additional Detail | AD.52  | Sheet Item   | D54         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     207 | 9.3 Additional Detail | AD.52  | This Quarter | F54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     208 | 9.3 Additional Detail | AD.52  | Last Quarter | G54         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     209 | 9.3 Additional Detail | AD.53  | Sheet        | C55         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     210 | 9.3 Additional Detail | AD.53  | Sheet Item   | D55         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     211 | 9.3 Additional Detail | AD.53  | This Quarter | F55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     212 | 9.3 Additional Detail | AD.53  | Last Quarter | G55         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     213 | 9.3 Additional Detail | AD.54  | Sheet        | C56         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     214 | 9.3 Additional Detail | AD.54  | Sheet Item   | D56         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     215 | 9.3 Additional Detail | AD.54  | This Quarter | F56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     216 | 9.3 Additional Detail | AD.54  | Last Quarter | G56         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     217 | 9.3 Additional Detail | AD.55  | Sheet        | C57         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     218 | 9.3 Additional Detail | AD.55  | Sheet Item   | D57         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     219 | 9.3 Additional Detail | AD.55  | This Quarter | F57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     220 | 9.3 Additional Detail | AD.55  | Last Quarter | G57         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     221 | 9.3 Additional Detail | AD.56  | Sheet        | C58         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     222 | 9.3 Additional Detail | AD.56  | Sheet Item   | D58         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     223 | 9.3 Additional Detail | AD.56  | This Quarter | F58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     224 | 9.3 Additional Detail | AD.56  | Last Quarter | G58         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     225 | 9.3 Additional Detail | AD.57  | Sheet        | C59         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     226 | 9.3 Additional Detail | AD.57  | Sheet Item   | D59         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     227 | 9.3 Additional Detail | AD.57  | This Quarter | F59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     228 | 9.3 Additional Detail | AD.57  | Last Quarter | G59         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     229 | 9.3 Additional Detail | AD.58  | Sheet        | C60         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     230 | 9.3 Additional Detail | AD.58  | Sheet Item   | D60         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     231 | 9.3 Additional Detail | AD.58  | This Quarter | F60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     232 | 9.3 Additional Detail | AD.58  | Last Quarter | G60         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     233 | 9.3 Additional Detail | AD.59  | Sheet        | C61         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     234 | 9.3 Additional Detail | AD.59  | Sheet Item   | D61         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     235 | 9.3 Additional Detail | AD.59  | This Quarter | F61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     236 | 9.3 Additional Detail | AD.59  | Last Quarter | G61         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     237 | 9.3 Additional Detail | AD.60  | Sheet        | C62         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     238 | 9.3 Additional Detail | AD.60  | Sheet Item   | D62         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     239 | 9.3 Additional Detail | AD.60  | This Quarter | F62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     240 | 9.3 Additional Detail | AD.60  | Last Quarter | G62         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     241 | 9.3 Additional Detail | AD.61  | Sheet        | C63         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     242 | 9.3 Additional Detail | AD.61  | Sheet Item   | D63         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     243 | 9.3 Additional Detail | AD.61  | This Quarter | F63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     244 | 9.3 Additional Detail | AD.61  | Last Quarter | G63         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     245 | 9.3 Additional Detail | AD.62  | Sheet        | C64         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     246 | 9.3 Additional Detail | AD.62  | Sheet Item   | D64         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     247 | 9.3 Additional Detail | AD.62  | This Quarter | F64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     248 | 9.3 Additional Detail | AD.62  | Last Quarter | G64         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     249 | 9.3 Additional Detail | AD.63  | Sheet        | C65         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     250 | 9.3 Additional Detail | AD.63  | Sheet Item   | D65         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     251 | 9.3 Additional Detail | AD.63  | This Quarter | F65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     252 | 9.3 Additional Detail | AD.63  | Last Quarter | G65         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     253 | 9.3 Additional Detail | AD.64  | Sheet        | C66         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     254 | 9.3 Additional Detail | AD.64  | Sheet Item   | D66         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     255 | 9.3 Additional Detail | AD.64  | This Quarter | F66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     256 | 9.3 Additional Detail | AD.64  | Last Quarter | G66         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     257 | 9.3 Additional Detail | AD.65  | Sheet        | C67         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     258 | 9.3 Additional Detail | AD.65  | Sheet Item   | D67         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     259 | 9.3 Additional Detail | AD.65  | This Quarter | F67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     260 | 9.3 Additional Detail | AD.65  | Last Quarter | G67         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     261 | 9.3 Additional Detail | AD.66  | Sheet        | C68         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     262 | 9.3 Additional Detail | AD.66  | Sheet Item   | D68         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     263 | 9.3 Additional Detail | AD.66  | This Quarter | F68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     264 | 9.3 Additional Detail | AD.66  | Last Quarter | G68         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     265 | 9.3 Additional Detail | AD.67  | Sheet        | C69         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     266 | 9.3 Additional Detail | AD.67  | Sheet Item   | D69         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     267 | 9.3 Additional Detail | AD.67  | This Quarter | F69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     268 | 9.3 Additional Detail | AD.67  | Last Quarter | G69         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     269 | 9.3 Additional Detail | AD.68  | Sheet        | C70         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     270 | 9.3 Additional Detail | AD.68  | Sheet Item   | D70         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     271 | 9.3 Additional Detail | AD.68  | This Quarter | F70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     272 | 9.3 Additional Detail | AD.68  | Last Quarter | G70         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     273 | 9.3 Additional Detail | AD.69  | Sheet        | C71         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     274 | 9.3 Additional Detail | AD.69  | Sheet Item   | D71         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     275 | 9.3 Additional Detail | AD.69  | This Quarter | F71         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     276 | 9.3 Additional Detail | AD.69  | Last Quarter | G71         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     277 | 9.3 Additional Detail | AD.70  | Sheet        | C72         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     278 | 9.3 Additional Detail | AD.70  | Sheet Item   | D72         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     279 | 9.3 Additional Detail | AD.70  | This Quarter | F72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     280 | 9.3 Additional Detail | AD.70  | Last Quarter | G72         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     281 | 9.3 Additional Detail | AD.71  | Sheet        | C73         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     282 | 9.3 Additional Detail | AD.71  | Sheet Item   | D73         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     283 | 9.3 Additional Detail | AD.71  | This Quarter | F73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     284 | 9.3 Additional Detail | AD.71  | Last Quarter | G73         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     285 | 9.3 Additional Detail | AD.72  | Sheet        | C74         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     286 | 9.3 Additional Detail | AD.72  | Sheet Item   | D74         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     287 | 9.3 Additional Detail | AD.72  | This Quarter | F74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     288 | 9.3 Additional Detail | AD.72  | Last Quarter | G74         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     289 | 9.3 Additional Detail | AD.73  | Sheet        | C75         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     290 | 9.3 Additional Detail | AD.73  | Sheet Item   | D75         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     291 | 9.3 Additional Detail | AD.73  | This Quarter | F75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     292 | 9.3 Additional Detail | AD.73  | Last Quarter | G75         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     293 | 9.3 Additional Detail | AD.74  | Sheet        | C76         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     294 | 9.3 Additional Detail | AD.74  | Sheet Item   | D76         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     295 | 9.3 Additional Detail | AD.74  | This Quarter | F76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     296 | 9.3 Additional Detail | AD.74  | Last Quarter | G76         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     297 | 9.3 Additional Detail | AD.75  | Sheet        | C77         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     298 | 9.3 Additional Detail | AD.75  | Sheet Item   | D77         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     299 | 9.3 Additional Detail | AD.75  | This Quarter | F77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     300 | 9.3 Additional Detail | AD.75  | Last Quarter | G77         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     301 | 9.3 Additional Detail | AD.76  | Sheet        | C78         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     302 | 9.3 Additional Detail | AD.76  | Sheet Item   | D78         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     303 | 9.3 Additional Detail | AD.76  | This Quarter | F78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     304 | 9.3 Additional Detail | AD.76  | Last Quarter | G78         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     305 | 9.3 Additional Detail | AD.77  | Sheet        | C79         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     306 | 9.3 Additional Detail | AD.77  | Sheet Item   | D79         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     307 | 9.3 Additional Detail | AD.77  | This Quarter | F79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     308 | 9.3 Additional Detail | AD.77  | Last Quarter | G79         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     309 | 9.3 Additional Detail | AD.78  | Sheet        | C80         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     310 | 9.3 Additional Detail | AD.78  | Sheet Item   | D80         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     311 | 9.3 Additional Detail | AD.78  | This Quarter | F80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     312 | 9.3 Additional Detail | AD.78  | Last Quarter | G80         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     313 | 9.3 Additional Detail | AD.79  | Sheet        | C81         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     314 | 9.3 Additional Detail | AD.79  | Sheet Item   | D81         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     315 | 9.3 Additional Detail | AD.79  | This Quarter | F81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     316 | 9.3 Additional Detail | AD.79  | Last Quarter | G81         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     317 | 9.3 Additional Detail | AD.80  | Sheet        | C82         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     318 | 9.3 Additional Detail | AD.80  | Sheet Item   | D82         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     319 | 9.3 Additional Detail | AD.80  | This Quarter | F82         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     320 | 9.3 Additional Detail | AD.80  | Last Quarter | G82         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     321 | 9.3 Additional Detail | AD.81  | Sheet        | C83         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     322 | 9.3 Additional Detail | AD.81  | Sheet Item   | D83         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     323 | 9.3 Additional Detail | AD.81  | This Quarter | F83         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     324 | 9.3 Additional Detail | AD.81  | Last Quarter | G83         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     325 | 9.3 Additional Detail | AD.82  | Sheet        | C84         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     326 | 9.3 Additional Detail | AD.82  | Sheet Item   | D84         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     327 | 9.3 Additional Detail | AD.82  | This Quarter | F84         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     328 | 9.3 Additional Detail | AD.82  | Last Quarter | G84         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     329 | 9.3 Additional Detail | AD.83  | Sheet        | C85         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     330 | 9.3 Additional Detail | AD.83  | Sheet Item   | D85         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     331 | 9.3 Additional Detail | AD.83  | This Quarter | F85         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     332 | 9.3 Additional Detail | AD.83  | Last Quarter | G85         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     333 | 9.3 Additional Detail | AD.84  | Sheet        | C86         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     334 | 9.3 Additional Detail | AD.84  | Sheet Item   | D86         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     335 | 9.3 Additional Detail | AD.84  | This Quarter | F86         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     336 | 9.3 Additional Detail | AD.84  | Last Quarter | G86         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     337 | 9.3 Additional Detail | AD.85  | Sheet        | C87         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     338 | 9.3 Additional Detail | AD.85  | Sheet Item   | D87         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     339 | 9.3 Additional Detail | AD.85  | This Quarter | F87         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     340 | 9.3 Additional Detail | AD.85  | Last Quarter | G87         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     341 | 9.3 Additional Detail | AD.86  | Sheet        | C88         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     342 | 9.3 Additional Detail | AD.86  | Sheet Item   | D88         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     343 | 9.3 Additional Detail | AD.86  | This Quarter | F88         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     344 | 9.3 Additional Detail | AD.86  | Last Quarter | G88         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     345 | 9.3 Additional Detail | AD.87  | Sheet        | C89         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     346 | 9.3 Additional Detail | AD.87  | Sheet Item   | D89         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     347 | 9.3 Additional Detail | AD.87  | This Quarter | F89         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     348 | 9.3 Additional Detail | AD.87  | Last Quarter | G89         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     349 | 9.3 Additional Detail | AD.88  | Sheet        | C90         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     350 | 9.3 Additional Detail | AD.88  | Sheet Item   | D90         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     351 | 9.3 Additional Detail | AD.88  | This Quarter | F90         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     352 | 9.3 Additional Detail | AD.88  | Last Quarter | G90         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     353 | 9.3 Additional Detail | AD.89  | Sheet        | C91         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     354 | 9.3 Additional Detail | AD.89  | Sheet Item   | D91         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     355 | 9.3 Additional Detail | AD.89  | This Quarter | F91         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     356 | 9.3 Additional Detail | AD.89  | Last Quarter | G91         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     357 | 9.3 Additional Detail | AD.90  | Sheet        | C92         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     358 | 9.3 Additional Detail | AD.90  | Sheet Item   | D92         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     359 | 9.3 Additional Detail | AD.90  | This Quarter | F92         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     360 | 9.3 Additional Detail | AD.90  | Last Quarter | G92         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     361 | 9.3 Additional Detail | AD.91  | Sheet        | C93         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     362 | 9.3 Additional Detail | AD.91  | Sheet Item   | D93         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     363 | 9.3 Additional Detail | AD.91  | This Quarter | F93         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     364 | 9.3 Additional Detail | AD.91  | Last Quarter | G93         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     365 | 9.3 Additional Detail | AD.92  | Sheet        | C94         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     366 | 9.3 Additional Detail | AD.92  | Sheet Item   | D94         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     367 | 9.3 Additional Detail | AD.92  | This Quarter | F94         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     368 | 9.3 Additional Detail | AD.92  | Last Quarter | G94         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     369 | 9.3 Additional Detail | AD.93  | Sheet        | C95         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     370 | 9.3 Additional Detail | AD.93  | Sheet Item   | D95         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     371 | 9.3 Additional Detail | AD.93  | This Quarter | F95         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     372 | 9.3 Additional Detail | AD.93  | Last Quarter | G95         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     373 | 9.3 Additional Detail | AD.94  | Sheet        | C96         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     374 | 9.3 Additional Detail | AD.94  | Sheet Item   | D96         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     375 | 9.3 Additional Detail | AD.94  | This Quarter | F96         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     376 | 9.3 Additional Detail | AD.94  | Last Quarter | G96         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     377 | 9.3 Additional Detail | AD.95  | Sheet        | C97         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     378 | 9.3 Additional Detail | AD.95  | Sheet Item   | D97         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     379 | 9.3 Additional Detail | AD.95  | This Quarter | F97         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     380 | 9.3 Additional Detail | AD.95  | Last Quarter | G97         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     381 | 9.3 Additional Detail | AD.96  | Sheet        | C98         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     382 | 9.3 Additional Detail | AD.96  | Sheet Item   | D98         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     383 | 9.3 Additional Detail | AD.96  | This Quarter | F98         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     384 | 9.3 Additional Detail | AD.96  | Last Quarter | G98         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     385 | 9.3 Additional Detail | AD.97  | Sheet        | C99         | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     386 | 9.3 Additional Detail | AD.97  | Sheet Item   | D99         | Input must be an item number for which detail is being provided - 1 to 7  characters |
|   Check | Sheet                 | Item   | Column       | Cell  Ref   | Validation Message                                                                   |
|     387 | 9.3 Additional Detail | AD.97  | This Quarter | F99         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     388 | 9.3 Additional Detail | AD.97  | Last Quarter | G99         | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     389 | 9.3 Additional Detail | AD.98  | Sheet        | C100        | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     390 | 9.3 Additional Detail | AD.98  | Sheet Item   | D100        | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     391 | 9.3 Additional Detail | AD.98  | This Quarter | F100        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     392 | 9.3 Additional Detail | AD.98  | Last Quarter | G100        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     393 | 9.3 Additional Detail | AD.99  | Sheet        | C101        | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     394 | 9.3 Additional Detail | AD.99  | Sheet Item   | D101        | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     395 | 9.3 Additional Detail | AD.99  | This Quarter | F101        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     396 | 9.3 Additional Detail | AD.99  | Last Quarter | G101        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     397 | 9.3 Additional Detail | AD.100 | Sheet        | C102        | Input must be valid sheet name from list on the sheet 'Contents'                     |
|     398 | 9.3 Additional Detail | AD.100 | Sheet Item   | D102        | Input must be an item number for which detail is being provided - 1 to 7  characters |
|     399 | 9.3 Additional Detail | AD.100 | This Quarter | F102        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |
|     400 | 9.3 Additional Detail | AD.100 | Last Quarter | G102        | Input must be a whole number in the range -1,000,000,000 to +1,000,000,000           |