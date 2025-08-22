
## Travel Rule guidance note

Issued date: February 2024

## Table of contents

| 1   | Context.3   | Context.3           |
|-----|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| 2   | JFSC guidance .4      | JFSC guidance .4              |
| 3   | VASP to VASP4       | VASP to VASP4               |
|     | 3.1                                                                                                             | We expect VASPs to: .4    |
|     | 3.2                                                                                                             | When sending a virtual asset transfer to a jurisdiction without the Travel Rule5                                    |
|     | 3.3                                                                                                             | When receiving a virtual asset transfer from a jurisdiction without the Travel Rule .5                                  |
|     | 3.4                                                                                                             | Required information to accompany an inter-VASP transfer5                             |
|     | 3.5                                                                                                             | Transaction values.5  |
|     | 3.6                                                                                                             | In-scope transfers6 |
|     | 3.7                                                                                                             | Out-of-scope transfers 6    |
|     | 3.8                                                                                                             | Guidance for intermediary VASPs .6            |
| 4   | Jersey VASP to/from non-VASP.7                  | Jersey VASP to/from non-VASP.7                          |
|     | 4.2                                                                                                             | Transfers to/from unhosted wallets .7             |

## Glossary

| Term            | Definition                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AML/CFT/CPF     | Anti-money laundering/countering the financing of  terrorism/countering proliferation financing.                                                                                                                                              |
| EU              | The European Union.                                                                                                                                                                                                                           |
| FATF            | The Financial Action Task Force.                                                                                                                                                                                                              |
| OTC             | Over-the-counter.                                                                                                                                                                                                                             |
| SAR             | Suspicious Activity Report.                                                                                                                                                                                                                   |
| Unhosted wallet | An unhosted VA wallet, also known as a non-custodial wallet or a  self-custody wallet, is a type of VA wallet where the private keys are  fully controlled by the wallet owner, rather than being managed by a  third-party service provider. |
| VA              | Virtual Asset. A digital representation of value that can be digitally  traded or transferred can be used for payment or investment  purposes.                                                                                                |
| VASP            | Virtual Asset Service Provider. Has the meaning in paragraph 24 of Part 4 of Schedule 2 to the  Proceeds of Crime Law .                                                                                                                       |

## 1 Context

- 1.1.1 The FATF has called on jurisdictions to swiftly implement its 'Travel Rule.' The Travel Rule requires transfers of virtual assets to be accompanied by accurate originator and beneficiary information.
- 1.1.2 The EU Legislation (Information Accompanying Transfer of Funds) (Jersey) Regulations 2017 ( Wire Transfer Regulations ) 1  were amended on 1 September 2023 so as to include VASPs.
- 1.1.3 The Wire Transfer Regulations implement Regulation EU 2015/847 2  to have effect in Jersey. Regulation EU 2015/847 lays down rules on the information on payers and payees accompanying transfer of funds.
- 1.1.4 This guidance is in addition to and does not amend or replace the requirements of Jersey's AML/CFT/CPF regime and therefore this guidance needs to be considered together with relevant legislation and regulatory requirements, such as the Proceeds of Crime (Jersey) Law 1999, the Proceeds of Crime (Supervisory Bodies) (Jersey) Law 2008, the Money Laundering (Jersey) Order 2008 and the JFSC's Handbook for the prevention and detection of money laundering, the countering of terrorist financing and the countering of proliferation financing.

## 2 JFSC guidance

- 2.1.1 The JFSC recognises the challenges with VASPs in different jurisdictions being at different stages of adoption and implementation of the Travel Rule. We have engaged industry to understand these challenges and this guidance note sets out the expectations for VASPs' compliance with the Travel Rule under different circumstances.

## 3 VASP to VASP

## 3.1 We expect VASPs to:

- 3.1.1 be able to demonstrate taking reasonable steps to comply with the Travel Rule. This may include the procurement process for and onboarding of a Travel Rule solution provider. The JFSC is not prescriptive on which solutions are used, however the VASP remains liable and retains ultimate responsibility for its AML/CFT/CPF obligations. Each VASP should have a documented plan that explains how and when they will be fully compliant within a reasonable time period.
- 3.1.2 comply with the Travel Rule when sending or receiving virtual assets to/from a VASP that is in Jersey or any jurisdiction that has implemented the Travel Rule. This includes the retention of the relevant information.
- 3.1.3 monitor on an ongoing basis the implementation of the Travel Rule in other jurisdictions.

1  EU Legislation (Information Accompanying Transfers of Funds) (Jersey) Regulations 2017 (jerseylaw.je)

2  Regulation - 2015/847 - EN - Funds Transfer Regulation - EUR-Lex (europa.eu)

## Travel Rule Guidance Note

- 3.2 When sending a virtual asset transfer to a jurisdiction without the Travel Rule we expect VASPs to:
- 3.2.1 take all reasonable steps to establish whether the recipient VASP can receive the required information.
- 3.2.2 where the recipient VASP cannot receive the required information, still collect and retain the transaction information to be made available to the JFSC upon request.
- 3.3 When receiving a virtual asset transfer from a jurisdiction without the Travel Rule:
- 3.3.1 Where the virtual asset transfer has missing or incomplete information, it is expected that the Jersey VASP consider the jurisdiction in which the originator VASP operates and the status of the Travel Rule in that jurisdiction.
- 3.3.2 These factors should be considered when making a risk-based assessment as to whether these funds are made available to the intended beneficiary.
- 3.3.3 Blockchain analytics solutions may be used to inform this risk-based assessment, however the Jersey VASP remains fully responsible for achieving compliance with their AML/CFT/CPF obligations, including the raising of SARs where relevant.

## 3.4 Required information to accompany an inter-VASP transfer

- 3.4.1 It is expected that the originator VASP ensure the following information accompanies transfers:
- 3.4.1.1 The name of the originator and the beneficiary
- 3.4.1.2 Where the originator or beneficiary is a legal entity, their registered or trading names
- 3.4.1.3 The account number of the originator and the beneficiary, or other unique transaction identifiers
- 3.4.1.4 The transaction hash number (every transaction that occurs on the blockchain is recorded as a block, and each block has a unique hash)
- 3.4.2 additionally, where the originator is an individual, one of the following:
- 3.4.2.1 Customer identification number
- 3.4.2.2 Address
- 3.4.2.3 Birth certificate, passport number, or national ID card number (or individual's date and place of birth)
- 3.4.3 where the originator is a legal entity, one of the following:
- 3.4.3.1 Customer identification number
- 3.4.3.2 Address of originator's registered office (or principal place of business)
- 3.4.4 It is the responsibility of the VASP to ensure that they have appropriate and effective procedures to detect missing or inaccurate information and to respond accordingly.
- 3.4.5 It is expected that the provision of the required information by the originator VASP occur before or at the moment the transaction is completed. The transaction is completed when the recipient VASP makes the virtual assets available to the beneficiary.

## 3.5 Transaction values

- 3.5.1 When assessing whether a transfer is equal to or exceeds the EUR 1,000, VASPs should take the Euro value recorded at the time the transfer is executed by the originator.
- 3.5.2 As per Regulation 2A of the Wire Transfer Regulations and with specific application to the Travel Rule transfers of funds not exceeding EUR 1,000 the VASP need not verify the information on the payer unless there are reasonable grounds for suspecting that the funds to be transferred are connected to money laundering or the financing of terrorism.
- 3.5.3 Aggregated transactions from the same originator to the same beneficiary over a short period of time should be considered as linked transactions. It is expected that VASPs have controls, policies and procedures in place to detect potentially linked transactions.
- 3.5.4 As per UK Guidance 3  the characteristics of the transactions should be considered when identifying linked transactions, for example, where several payments are made to the same recipient from one or more sources over a short period of time, or where a customer regularly transfers funds to one or more sources. For lower-risk situations, a three-month period for linking transactions might be appropriate, assuming this is not a regular occurrence.

## 3.6 In-scope transfers

- 3.6.1 Intragroup transfers (those transfers between different legal entities within the same group).
- 3.6.2 Transfer between VASPs where the originator and beneficiary are the same person (e.g. the same person has accounts with two different VASPs).

## 3.7 Out-of-scope transfers

- 3.7.1 Transfers where both the originator and beneficiary hold accounts with the same VASP.
- 3.7.2 Transfers between two VASPs acting on their own behalf.
- 3.7.3 Transfers between the same legal entity within the same VASP.
- 3.7.4 Transfers of funds not exceeding EUR 1,000 unless there are reasonable grounds for suspecting that the funds to be transferred are connected to money laundering or the financing of terrorism.

## 3.8 Guidance for intermediary VASPs

- 3.8.1 Definition : An intermediary VASP provides VASP services to, or for, the VASP of the originator or beneficiary, but does not have a business relationship with either the originator or beneficiary.

Example scenarios:

- 3.8.2 First scenario: Where VASP A

3  JMLSG-Guidance-Part-I June-2023-version, para 5.3.7 https://www.jmlsg.org.uk/guidance/currentguidance/

- -  offers 'safekeeping and/or administration of virtual assets' to customers,  - has a sub-custody contract with VASP B, which makes and receives virtual asset transfers on behalf of VASP A
- the Travel Rule will apply to both VASPs. It is expected that VASP A collect and supply VASP B with the required details. It is expected that VASP B ensure that the required details are received from VASP A and then passed on with the transfer to a third party.
- 3.8.3 Second scenario: VASP A provides virtual asset over-the-counter (OTC) services to its customers. In order to execute instructed transactions, VASP A trades virtual assets with exchange(s) on a proprietary basis (acting on its own behalf), this is out of scope for the Travel Rule.
- A customer of VASP A sends assets to VASP A for OTC trading from a wallet that is hosted at VASP B. The Travel Rule will apply to VASP B who is expected to supply VASP A with the required details. VASP A settles the traded assets to VASP B, the Travel Rule will apply to VASP A who it is expected will supply VASP B with the required details.
- 3.8.4 It is the responsibility of the intermediary VASP to check whether all information required has been received before completing the transfer of virtual assets. Where information is missing or incomplete it is expected that the intermediary VASP consider whether to delay the onward transfer until the information is received. This consideration should follow a risk-based approach and be sufficiently documented such that the JFSC can understand why the transfer of virtual assets was either completed or delayed/refused.
- 3.8.5 It is expected that the intermediary VASP send on any requested information which is received after it has transferred the virtual asset as soon as is practicable.

## 4 Jersey VASP to/from non-VASP

- 4.1.1 This is general guidance until Regulation (EU) 2023/1113 4  applies to transfers of virtual assets on 30 December 2024.
- 4.2 Transfers to/from unhosted wallets
- 4.2.1 Definition of an unhosted wallet: a wallet not hosted by a VASP.
- 4.2.2 Jersey VASPs should adopt a risk-based approach when dealing with unhosted wallet transfers.
- 4.2.3 In arriving at the risk rating from an unhosted transfer of virtual assets the VASP may take into account:
- 4.2.3.1 The purpose and nature of the business relationship with the owner of the unhosted wallet.
- 4.2.3.2 The jurisdiction (if known) of the unhosted wallet.
- 4.2.3.3 The value and/or frequency of the transfer(s)/linked transfers to/from the unhosted wallet
- 4.2.3.4 Outputs from Blockchain Analytics solutions detailing any association of the unhosted wallet with illicit activities.

4  Regulation - 2023/1113 - EN - EUR-Lex (europa.eu)

## Travel Rule Guidance Note

- 4.2.4 In higher risk cases, VASPs should also consider further steps to verify the ownership and control of the unhosted wallet.
- 4.2.5 Where a VASP does not obtain sufficient information to be comfortable with the ownership and control of the unhosted wallet the transferred virtual assets should not be made available to the intended beneficiary.