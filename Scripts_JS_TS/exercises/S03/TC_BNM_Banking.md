# Test Cases - Banking (BNM)

**Domain:** Banking  
**Version:** 1.0  
**Date:** 2026-01-27  
**Status:** Draft  
**Owner:** Marcin Pogorzelski Infoprojekt

---

## **Naming Convention**

**Format:** `[Domain] - [Entity] - [Action Description]`

**Example:** `BNM - Payment Agreement - Create Direct Debit via Portal`

---

### **Components:**

**1. Domain** (3-letter code)
- System area or module abbreviation
- Always UPPERCASE
- Examples:
  - `BNM` = Banking
  - `RCP` = Reception
  - `CLO` = Claim Orchestration
  - `FAC` = Factoring
  - `CTA` = Costs and Tariffs

**2. Entity** (Business object or functional area)
- The main subject being tested
- Use full descriptive names (no abbreviations)
- Title Case format
- Examples:
  - `Payment Agreement` - for PA/payment plan tests
  - `Acquisition` - for AP304 claim processing
  - `BA Invoice` - for business account invoicing
  - `Patient Portal` - for patient-facing features
  - `Insurance Receivable` - for IR/IA tests

**3. Action Description** (Verb-based phrase with context)
- What the test does + expected outcome + context
- Start with action verb
- Include specific details when helpful
- Examples:
  - `Create Direct Debit via Portal` - verb: Create, context: via Portal
  - `Pay Term Successfully` - verb: Pay, outcome: Successfully
  - `Reject Direct Debit` - verb: Reject
  - `Pay Manually Before Batch DD` - verb: Pay, context: Manually Before Batch DD
  - `Link Claim to Account` - verb: Link, context: to Account

---

### **Component Vocabulary:**

Use these standard terms when constructing test case names:

**Domain Codes:**
- `BNM` (Banking)
- `RCP` (Reception)
- `CLO` (Claim Orchestration)
- `FAC` (Factoring)
- `CTA` (Costs and Tariffs)
- `INS` (Insurers)
- `IVD` (Invoicing and Dunning)
- `BLF` (Bailiff)
- `PMT` (Payment Matching)
- `ACC` (Accounting)
- `API` (Vendor API)
- `E2E` (End-to-End)

**Entity Terms:**
- Payment Agreement
- Acquisition
- BA Invoice
- Patient
- Patient Portal
- Credit
- Claim
- Insurance Receivable
- Direct Debit
- Installment
- Term
- Settlement

**Action Verbs:**
- Create
- Pay
- Reject
- Process
- Validate
- Match
- Update
- Cancel
- Retry
- Break
- Confirm
- Link
- Send
- Export
- Import

**Scenario/Context Terms:**
- via Portal
- on Payment Page
- for AP304
- Before Batch DD
- After Rejection
- with Standard Payment
- to Account
- Manually
- Automatically

**Result/Outcome Terms (optional):**
- Successfully
- Failed
- Rejected
- After Rejection
- with Error

---

### **Rules:**
✅ **DO:**
- Use spaces and dashes (` - `) for readability
- Start action with a verb (Create, Pay, Reject, Validate, Process, etc.)
- Include outcome when relevant (Successfully, Failed, After Rejection)
- Add context in action (via Portal, on Payment Page, for AP304, Before Batch DD)
- Keep entity names clear and business-friendly

❌ **DON'T:**
- Use underscores or camelCase (`Payment_Agreement`, `PaymentAgreement`)
- Abbreviate entity names (use `Payment Agreement` not `PA`)
- Include technical IDs or numbers in the title
- Make it overly long (aim for < 80 characters)

---

### **More Examples:**

```
BNM - Patient - Create Direct Debit via Portal
     ↑        ↑                    ↑
   Domain  Entity         Action Description

RCP - Mediation - Process AP301 File Successfully
CLO - Workflow - Route Claim to Correct Handler
FAC - Risk Assessment - Calculate Risk Score for High Value Claim
```

---

## 8.1. Payment Agreement Direct Debit

### BNM - Payment Agreement - Create Direct Debit via Portal
**Test Case ID:** 42304  
**State:** Design  
**Priority:** High

**Preconditions:**
- Printable claim or claim with AmountOpen > 0 exists
- Payment Page is accessible

**Steps:**
1. Put Printable claim or find claim with an AmountOpen > 0.
   - Query: 
   ```sql
   select top 15 cm.PaymId, cm.StatusEn, * 
   from TIM_WebApi..ClaimModels cm
   where cm.StatusEn in ('Printed')
   order by id desc
   ```

2. Go to Payment Page (https://[domain]/Betalen?invoice=[PAYMID])
   - Example: https://05-rekening.imfint.local/Betalen?invoice=02293715993071
   - **Expected:** Payment Page should be properly opened and claim's details should be visible

3. Extend 'Betalingsregeling anvragen' option, fill in all fields and confirm to make a PA creation request.

4. Wait until claim status is marked as 'In payment agreement' within TIM UI.
   - **Expected:** 
     - Claim should be in the Payment Agreement status
     - In the TIM_BNM items for Terms should be created with type_id=21, status_id=9 and with DesiredProcessingDate set for Term's expiration
     - 0,01 € promise should also be created on the claim
   - Query:
   ```sql
   select ExternalId, DesiredProcessingDate, PaymentOutgoingFile_Id, *
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like 'PAYMID%'
   order by id asc
   ```

5. Go to Successor TC

---

### BNM - Payment Agreement - Pay Term Successfully
**Test Case ID:** 42305  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Payment Agreement - Create Direct Debit via Portal

**Steps:**
1. Make 0,01 € iDEAL payment to confirm bank account number using CAMT generator.
   - Query to find payment number:
   ```sql
   select mi2.MatchableItemNo, mi2.OriginalAmount, mi2.OpenAmount, mi2.MatchedAmount 
   from TIM_BnM..MatchableItemRelation mir
   join tim_bnm..MatchableItem mi on mi.Id=mir.MatchableItemToId
   join TIM_BnM..MatchableItem mi2 on mi2.Id=mir.MatchableItemFromId
   where mi.MatchableItemNo='PAYMID'
   and mir.RelationTypeId=11
   ```
   - Put data to CAMT Generator and create the payment which will be processed by TIM (path/Payments/Incoming)
   - **Expected After processing:**
     - 0,01 € promise on the claim should be paid
     - 0,01 € on main matchable item should be paid
     - One PA's Term should be decreased with 0,01€
     - On the TIM UI, 0,01€ should be also paid

2. Set MatchableItem of 1st term to be put into POF (Payment Outgoing File)
   ```sql
   update tim_bnm..MatchableItem 
   set DesiredProcessingDate = GETDATE() 
   where MatchableItemNo = 'PAYMID-1'
   ```
   - **Expected:**
     - DesiredDate should be changed which results in POF DD file creation within few minutes
     - POF file should be created in: \\[env]\Data\TIM\POF\
     - In matchable item for first term pof_id and externalid should be filled
     - Status of Term's Matchable Item should be changed to 11

3. **Prepare payment for Direct Debit which will confirm and pay the item**

   3.1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

   3.2. Use CAMT generator tool to make batch payment
   - Type value of LastBatchId into Batch number field
   - Type value of PaymentsAmount into Amount field
   - Choose correct File Path for the test environment
   - Click 'Generate and Save' button

   3.3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry should be created in the PaymentFile table
     - New payment should be created (batch DD payment unpacked into artificial payments)
     - Artificial item should be matched with desired matchable item and OpenAmount on payment should be 0.00

   3.4. Check Matchable item after matching:
   ```sql
   select ExternalId, DesiredProcessingDate, PaymentOutgoingFile_Id, * 
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like '72293726249071%' 
   order by id asc
   ```
   - **Expected:** Amounts on the Matchable Item should be updated

   3.5. Check claim in TIM UI
   - **Expected:** Paid amounts should be updated on TIMUI claim view, proper note should be added

4. **After Matching:**
   - PA Term should be paid in Matchable item and UI
   - On the PA view Term should be paid (Claim View/PaymentAgreement link)
   - Status of Term's Matchable item should be changed to 2
   - Open amount on term should be = 0
   - Matched amount on term should be equal with paid term
   - Matched amount on matchable items type 1 and 2 should be also updated with paid term's amount

5. Expire next term till PA will be paid

---

### BNM - Payment Agreement - Reject Term
**Test Case ID:** 42306  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Payment Agreement - Create Direct Debit via Portal

**Steps:**
1. Set MatchableItem of 1st term to be put into POF (Payment Outgoing File)
   ```sql
   update tim_bnm..MatchableItem 
   set DesiredProcessingDate = GETDATE() 
   where MatchableItemNo = 'PAYMID-1'
   ```
   - **Expected:**
     - DesiredDate should be changed which results in POF DD file creation
     - POF file created in: \\[env]\Data\TIM\POF\
     - In matchable item for first term pof_id and externalid should be filled
     - Status of Term's Matchable Item should be changed to 11

2. **Prepare Direct Debit payment - reject DD**

   2.1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

   2.2. Use CAMT generator tool to make batch payment
   - **On Batch N247 Tab:**
     - Type value of LastBatchId into Batch number field
     - Type value of PaymentsAmount into Amount field
   - **On Reject N246 tab:**
     - Type value of PaymentsAmount into Amount field
     - Type value of MatchableItemNo into PaymentTitle and ExternalId fields
     - Return Code - MS03
     - Choose correct File Path and Click 'Generate and Save' button

   2.3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry created in PaymentFile table
     - New payment created (batch unpacked into artificial payments)
     - Artificial item matched with desired matchable item

3. **After Matching:**
   ```sql
   select ExternalId, DesiredProcessingDate, MinimalPackFirstDate, PaymentOutgoingFile_Id, DDate, dby, *
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like 'PAYMID%'
   order by id asc
   ```
   - **Expected:**
     - PA Term should be rejected in Matchable item and UI
     - On the PA view Term should be unpaid (Claim View/PaymentAgreement link)
     - Status of Term's Matchable item should be changed to 16
     - Open amount on term should be equal to the term
     - Matched amount on term should be equal 0
     - Matched amount on matchable items type 1 and 2 shouldn't be changed
     - PA compliance check, TIM_core.charging.Terms, TIM_Webapi..PaymentAgreementTermModel, TIM_BNM..Matching should be checked

---

### BNM - Payment Agreement - Break Agreement After Rejection
**Test Case ID:** 42307  
**State:** Design  
**Priority:** Medium  
**Prerequisites:** BNM - Payment Agreement - Reject Term

**Steps:**
1. Instead of paying the term, reject it.

2. Update expiration item in core to expire compliance check after rejection DD
   ```sql
   select * 
   from TIM_Core.ExpiratorARP.ExpirationItem
   where RelatedObjectUid in (select uid from tim_Core.Charging.Term where TermNo like '%PAYMID%')
   and StatusId=2
   order by id desc
   ```
   ```sql
   update TIM_Core.ExpiratorARP.ExpirationItem 
   set ExpirationDate= getdate()
   where RelatedObjectUid in (select uid from tim_Core.Charging.Term where TermNo like '%paymid%')
   and StatusId=2
   ```

3. [to prepare POGO]

---

## 8.2. Acquisition Direct Debit (AP304)

### BNM - Acquisition - Create Direct Debit for AP304
**Test Case ID:** 42308  
**State:** Design  
**Priority:** High

**Preconditions:**
- AP304 file available with valid debtor records

**Steps:**
1. Prepare AP304 file (or use prepared from the attachment) that contains at least 1 claim that meets all prerequisites for DD:
   - Debtorrecord contains correct: IBAN in rubric 0325
   - Mandate date in rubric 0329
   - Mandate number in rubric 0380
   - Process the file

2. Check Matchable Items:
   ```sql
   select ExternalId, DesiredProcessingDate, MinimalPackFirstDate, PaymentOutgoingFile_Id, *
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like 'PAYMID%'
   order by id asc
   ```
   - **Expected:**
     - Special Matchable item for AP DD with typeid=35 and statusid=9
     - MinimalPackFirstDate should be set
     - DesiredProcessingDate should be set

3. //test TC STEP

---

### BNM - Acquisition - Pay Direct Debit Successfully
**Test Case ID:** 42309  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Acquisition - Create Direct Debit for AP304

**Steps:**
1. Use TC from Predecessor

2. Expire dates to speed up the process and create POF DD for the Claim:
   ```sql
   update TIM_BnM.dbo.MatchableItem
   set DesiredProcessingDate = getdate(), MinimalPackFirstDate = getdate()
   where MatchableItemNo = 'PAYM_ID' and TypeId=35
   ```
   - **Expected:**
     - DesiredDate changed resulting in POF DD file creation
     - POF file created in: \\[env]\Data\TIM\POF\
     - In matchable item pof_id and externalid should be filled
     - Status of Matchable Item changed to 11

3. **Shared steps:** Prepare payment for Direct Debit which will confirm and pay the item

4. **After Matching:**
   - Claim should be paid in Matchable item and UI
   - Status of Matchable item should be changed to 17
   - Open amount on Matchable item should be = 0
   - Matched amount on matchable items type 1 and 2 should be updated with paid amount
   - Check also: TIM_core.charging.Settlement, TIM_Webapi.., TIM_BNM..Matching

---

### BNM - Acquisition - Reject Direct Debit
**Test Case ID:** 42310  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Acquisition - Create Direct Debit for AP304

**Steps:**
1. Use TC from Predecessor

2. **Prepare Direct Debit payment - reject DD**

   2.1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

   2.2. Use CAMT generator tool to make batch payment
   - **On Batch N247 Tab:**
     - Type value of LastBatchId into Batch number field
     - Type value of PaymentsAmount into Amount field
   - **On Reject N246 tab:**
     - Type value of PaymentsAmount into Amount field
     - Type value of MatchableItemNo into PaymentTitle and ExternalId fields
     - Return Code - MS03
     - Choose correct File Path and Click 'Generate and Save' button

   2.3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry in PaymentFile table
     - New payment created (batch unpacked)
     - Artificial item matched with desired matchable item

3. **After Matching:**
   ```sql
   select ExternalId, DesiredProcessingDate, MinimalPackFirstDate, PaymentOutgoingFile_Id, DDate, dby, *
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like 'PAYMID%'
   order by id asc
   ```
   - **Expected:**
     - DD should be rejected in Matchable item and UI
     - Status of Matchable item changed to 16
     - Open amount on term equal to the term
     - Matched amount on term equal 0
     - Matched amount on matchable items type 1 and 2 shouldn't be changed
     - Note on Claim: "Let op! De automatische incasso van 27-02-2024 is mislukt. Er staat nu nog een bedrag van € 13,78 open."
     - Check: TIM_BNM..Matching

---

### BNM - Acquisition - Retry Direct Debit After Rejection
**Test Case ID:** 42311  
**State:** Design  
**Priority:** Medium  
**Prerequisites:** BNM - Acquisition - Reject Direct Debit

**Steps:**
1. AM04 [To be detailed]

---

## 8.3. Business Account Invoice Direct Debit

### BNM - BA Invoice - Create Direct Debit Successfully
**Test Case ID:** 42312  
**State:** Design  
**Priority:** High

**Preconditions:**
- Business Account with Monthly Subscription exists

**Steps:**
1. Set up a BA with Monthly Subscription or find it with query:
   ```sql
   select c.ContractNo, pprp.Description 
   from tim_core..Contract c
   join TIM_Core..Activation a on a.ContractId=c.Id
   join TIM_Core..PricingPlanRatePreference pprp on pprp.ContractId=c.Id
   where 1=1
   and (a.ToDate is null or a.ToDate>getdate())
   and pprp.ToDate is null
   and (pprp.ToDate is null or pprp.ToDate>getdate())
   and pprp.Description like 'Tarief maandabonnement'
   ```
   - **Expected:** BA should have the proper fee attached which will result in Monthly Invoice creation

2. Expire the subscription:
   ```sql
   select * 
   from tim_core..v_ContractScheduledItems 
   where ServiceItemMnemonic='Subscription' and ContractNo='70558' 
   and RatingDate is null and CancelDate is null 
   order by CalculationDate desc
   ```
   ```sql
   update tim_core.ExpiratorARP.ExpirationItem 
   set ExpirationDate=getdate() 
   where RelatedObjectUid='862ABCE5-3632-408D-963F-05A94C6F96A7'
   ```
   - **Expected:** On the BA's Ledger tab, new entry for Monthly Subscription should be created

3. Find that settlement on TO DO\Finance\Daily settlement overview
   - **Expected:** Settlement should be waiting on the To be checked tab

4. Move that settlement to Checked tab and Send Payment for selected settlement
   - **Expected:**
     - After few minutes POF file created in: \\[env]\Data\TIM\POF\
     - New matchable item for BA created with TypeId=6
     - Externalid and paymentoutgoingfile_id should be filled
     - Status of Matchable Item should be 11
     - On the BA's ledger tab settlement moved to Sent
     - Report AbonnementskostenNota_2818843679.pdf created and sent by email

---

### BNM - BA Invoice - Pay Direct Debit Successfully
**Test Case ID:** 42313  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - BA Invoice - Create Direct Debit Successfully

**Steps:**
1. Use TC from Predecessor

2. **Shared steps:** Prepare payment for Direct Debit which will confirm and pay the item

3. **After Matching:**
   - Invoice should be paid in Matchable item and UI
   - Status of Matchable item stays at 11 (for other types of DD matching status is changed)
   - Open amount on Matchable item should be = 0
   - Matched amount on matchable items type 1 and 2 should be updated with paid amount
   - On the BA\Ledger\Settled tab invoice should be paid and amount should be = 0€
   - Check also: TIM_core.charging.Settlement, TIM_Webapi.., TIM_BNM..Matching

---

### BNM - BA Invoice - Reject Direct Debit
**Test Case ID:** 42314  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - BA Invoice - Create Direct Debit Successfully

**Steps:**
1. Use TC from Predecessor

2. **Prepare Direct Debit payment - reject DD**

   2.1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

   2.2. Use CAMT generator tool to make batch payment
   - **On Batch N247 Tab:**
     - Type value of LastBatchId into Batch number field
     - Type value of PaymentsAmount into Amount field
   - **On Reject N246 tab:**
     - Type value of PaymentsAmount into Amount field
     - Type value of MatchableItemNo into PaymentTitle and ExternalId fields
     - Return Code - MS03
     - Choose correct File Path and Click 'Generate and Save' button

   2.3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry in PaymentFile table
     - New payment created

3. **Shared steps:** Prepare Direct Debit payment - reject DD

4. **After Matching:**
   ```sql
   select top 15 DesiredProcessingDate, ExternalId, PaymentOutgoingFile_Id, EndToEndIdentifier, *
   from TIM_BnM..MatchableItem
   where TypeId = 6 and DebtorPartyNo='BA_Number'
   order by id desc
   ```
   - **Expected:**
     - DD should be rejected in Matchable item and UI
     - On TIMUI BA\Ledger\Settled rejections presented in two types:
       - When DD accepted first, then rejected in next file - storno shown
       - When only one payment with accept DD and Reject DD in one file - settlement stays open
     - Status of Matchable item stays on 11 (for other DD changed to 16)
     - Open amount on term equal to the term
     - Matched amount on Matchable items equal 0
     - Storno added in Matching table
     - Check also: TIM_Core

---

### BNM - BA Invoice - Pay Manually Before Batch DD
**Test Case ID:** 44725  
**State:** Design  
**Priority:** Medium  
**Prerequisites:** BNM - BA Invoice - Create Direct Debit Successfully

**Steps:**
1. Use TC from Predecessor
   - POF DD and Matchable item should be created
   - Use query to obtain Batch number and Invoice number:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```
   ```sql
   select top 15 DesiredProcessingDate, ExternalId, PaymentOutgoingFile_Id, *
   from TIM_BnM..MatchableItem
   where TypeId = 6 and DebtorPartyNo='BA_NUMBER'
   order by id desc
   ```

2. When POF DD is created prepare a standard Payment with CAMT Generator Tool
   - Amount: same as sent POF DD
   - Invoice number: taken from MatchableItemNo
   - BankAccount in Debtor Data: BA's IBAN number
   - Process the payment

3. [To be detailed]

4. On the TIM UI Matching View find that payment

---

### BNM - BA Invoice - Pay with Standard Payment Before Batch DD
**Test Case ID:** 44726  
**State:** Design  
**Priority:** Medium  
**Prerequisites:** BNM - BA Invoice - Create Direct Debit Successfully

**Steps:**
[To be detailed]

---

## 8.4. Patient Direct Debit

### BNM - Patient - Create Direct Debit via Portal
**Test Case ID:** 42315  
**State:** Design  
**Priority:** High

**Preconditions:**
- Patient Portal accessible
- Unpaid invoice exists

**Steps:**
1. Use TC from Predecessor

2. On the Patient Portal with attached Invoices choose unpaid one and open it
   - **Expected:** Details should be shown

3. Choose "Eenmalige incasso" button to pay the Claim with DirectDebit

4. Mark checkbox and put bank account if necessary
   - NL Bank Account can be taken from DB or generated: randomiban.com/?country=Netherlands
   - **Expected:**
     - Payment's request created in DB
     - Proper note added to Claim: "Omstreeks 24-07-2024 zal € 10,99 middels automatische incasso van uw rekening worden afgeschreven."
     - Matchable item for DD created and sent in POF within few minutes
     - Matchable item with typeid=11 should have status=11, externalid and paymentoutgoingfile_id filled

---

### BNM - Patient - Pay Direct Debit Successfully
**Test Case ID:** 42316  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Patient - Create Direct Debit via Portal

**Steps:**
1. Use TC from Predecessor

2. **Shared steps:** Prepare payment for Direct Debit which will confirm and pay the item

3. **After Matching:**
   - Claim should be paid in Matchable item and UI
   - Status of MatchableItem typeid=11 stays at 11, matched amount changed
   - Open amount on matchableitems should be = 0
   - Matched amount on term equal with paid term
   - Matched amount on matchable items type 1 and 2 updated with paid term's amount and status changed to 2
   - Claim should be handled on TIM UI and on Patient Portal
   - Check also: TIM_core.charging.Terms, TIM_Webapi..PaymentAgreementTermModel, TIM_BNM..Matching

---

### BNM - Patient - Reject Direct Debit
**Test Case ID:** 42317  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Patient - Create Direct Debit via Portal

**Steps:**
1. Use TC from Predecessor

2. **Shared steps:** Prepare Direct Debit payment - reject DD

3. **After Matching:**
   - Matchable Item should be rejected
   - Proper note on UI for claim visible: "Let op! De automatische incasso van 27-02-2024 is mislukt. Er staat nu nog een bedrag van € 13,78 open."
   - Email "Automatische incasso voor rekening 32302738843071 mislukt" should be sent

---

## 8.5. Credit Installment Direct Debit

### BNM - Credit - Create Installment Direct Debit
**Test Case ID:** 42318  
**State:** Design  
**Priority:** High

**Preconditions:**
- PII with Betaalplan functionality enabled
- Active credit exists

**Steps:**
1. Create a Credit in PII or find active credit
2. Expire Matchable Item related with installment from PaymentProvider database

**Queries:**
```sql
-- List of Credit's installments
SELECT TOP (1000) * 
FROM [TIM_PaymentProvider].[dbo].[Installment]
where creditid = 'here_put_credit_id'

-- Send installment to BnM
select uid, * 
from TIM_PaymentProvider..Installment 
where PaymentIdentification='200000284698'

-- Expire installment to send it to BNM
select * 
from TIM_PaymentProvider.Expirator.ExpirationItem 
where RelatedObjectUid='0BFFFF95-5707-4154-896F-DF4E0BC67DFE'

update TIM_PaymentProvider.Expirator.ExpirationItem 
set ExpirationDate=getdate()-1 
where RelatedObjectUid='0BFFFF95-5707-4154-896F-DF4E0BC67DFE'

-- Check if installment is present in BnM
select DesiredProcessingDate, PaymentOutgoingFile_Id, ExternalId, * 
from tim_bnm..MatchableItem 
where MatchableItemNo='200000284698'

-- Update to create DD
update tim_bnm..MatchableItem 
set DesiredProcessingDate = GETDATE() 
where MatchableItemNo = 'PAYMID'

-- Wait until POF is generated
select top 10 LastBatchId, PaymentsAmount, * 
from tim_bnm..PaymentOutgoingFile 
order by id desc
```

3. Prepare Reject DD payment in CamtGenerator with proper amount and externalid = installment's payment identification
   - **Expected:** New matchable item in BnM for that installment created after rejection

---

### BNM - Credit - Pay Installment Successfully
**Test Case ID:** 42319  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Credit - Create Installment Direct Debit

**Steps:**
[To be detailed]

---

### BNM - Credit - Reject Installment
**Test Case ID:** 42320  
**State:** Design  
**Priority:** High  
**Prerequisites:** BNM - Credit - Create Installment Direct Debit

**Steps:**
[To be detailed]

---

## 8.6. Standard Payment Processing

### BNM - Claim - Pay with Standard Payment
**Test Case ID:** 42324  
**State:** Design  
**Priority:** High

**Steps:**
[To be detailed]

---

### BNM - Insurance Receivable - Pay with Standard Payment
**Test Case ID:** 42325  
**State:** Design  
**Priority:** High

**Preconditions:**
- Insurance Receivable (IR) exists with promised amount

**Steps:**
1. Use CAMT generator tool to make Insurance payment on Payment TAB
   - Use values from TIM UI\IR View:
     - Amount must be equal to IA's promised amount
     - Amount must be credit
     - IR Paymid should be put in Payment title
     - Put Insurance Company IBAN in Debtor Data\Account Number
     - Choose correct File Path for test environment
     - Click 'Generate and Save' button

2. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - IR/IA should be Matched and status on UI should be Paid
     - New entry created in PaymentFile table
     - New payment created

---

## 8.7. Helper & Shared Steps

### BNM - Helper - Confirm Direct Debit Payment
**Test Case ID:** 42321  
**State:** Design  
**Type:** Shared Steps

**Steps:**
1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

2. Use CAMT generator tool to make batch payment on Batch N247 TAB
   - Type value of LastBatchId into Batch number field
   - Type value of PaymentsAmount into Amount field
   - Choose correct File Path for test environment
   - Click 'Generate and Save' button

3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry in PaymentFile table
     - New payment created
     - Batch DD payment unpacked into artificial payments
     - Artificial item matched with desired matchable item, OpenAmount = 0.00

4. Check Matchable item after matching:
   ```sql
   select ExternalId, DesiredProcessingDate, PaymentOutgoingFile_Id, *
   from TIM_BnM..MatchableItem 
   where MatchableItemNo like '72293726249071%'
   order by id asc
   ```
   - **Expected:** Amounts on Matchable Item updated

5. Check claim in TIM UI
   - **Expected:** Paid amounts updated on TIMUI claim view, proper note added

---

### BNM - Helper - Reject Direct Debit Payment
**Test Case ID:** 42322  
**State:** Design  
**Type:** Shared Steps

**Steps:**
1. Find ExternalId and amount for last created POF DD:
   ```sql
   select top 10 LastBatchId, PaymentsAmount, * 
   from tim_bnm..PaymentOutgoingFile 
   order by id desc
   ```

2. Use CAMT generator tool to make batch payment
   - **On Batch N247 Tab:**
     - Type value of LastBatchId into Batch number field
     - Type value of PaymentsAmount into Amount field
   - **On Reject N246 tab:**
     - Type value of PaymentsAmount into Amount field
     - Type value of MatchableItemNo into PaymentTitle and ExternalId fields
     - Return Code - MS03
     - Choose correct File Path and Click 'Generate and Save' button

3. Wait till Payment will be processed and TIM will match the payment
   - **Expected:**
     - New entry in PaymentFile table
     - New payment created
     - Batch DD payment unpacked into artificial payments
     - For Rejected DD (storno), artificial item matched with desired matchable item, OpenAmount <> 0€
     - Status of Rejected artificial payment = 101

---

### BNM - Helper - Process Direct Debit with Wrong Amount
**Test Case ID:** 42323  
**State:** Design  
**Type:** Helper

**Steps:**
[To be detailed]

---

## 8.8. Portal Account Management

### BNM - Patient Portal - Create Account without Invoice
**Test Case ID:** 42326  
**State:** Design  
**Priority:** Medium

**Preconditions:**
- Patient Portal accessible

**Steps:**
1. Open Patient Portal (https://[env]-rekening.imfint.local/Invoice)
   - Example: https://05-rekening.imfint.local/Invoice
   - Create an account for Patient by pressing "Account aanmaken" button

2. On the next page press "Ik heb geen papieren rekening" button to create account without claim
   - Note: Claim can be attached later

3. Fill all necessary data on the formula
   - **Expected:** When all data properly filled, there shouldn't be any checks marked in red

4. Press "Account aanmaken" button
   - **Expected:** Page to confirm phone number with SMS should appear

5. Find SMS in log or Audit
   - SMS code in RnN_NotificationServer.log file or Audit database XML's content:
   ```sql
   select top 10 content, * 
   from TIM_Audit..Audit 
   where name='ISendAuthOTPCmd' and cdate > getdate()-1 
   order by id desc
   ```

6. Put SMS and press "Verder" button
   - **Expected:** Account on Patient Portal should be created

---

### BNM - Patient Portal - Create Account with Invoice
**Test Case ID:** 42327  
**State:** Design  
**Priority:** Medium

**Preconditions:**
- Patient Portal accessible
- Printable claim with email and phone number available

**Steps:**
1. Open Patient Portal (https://[env]-rekening.imfint.local/Invoice)
   - Example: https://05-rekening.imfint.local/Invoice
   - Create an account by pressing "Account aanmaken" button

2. Prepare Claim using ClaimFileGenerator or find Printable claim:
   ```sql
   select top 50 cm.paymid, cm.statusen, dlm.Phone, dlm.Email, cm.AuthzInvoiceUserUid, *
   from TIM_WebApi..ClaimModels cm
   join TIM_WebApi..debtorModels dlm on dlm.id=cm.Debtor_Id
   where cm.StatusEn in ('Printed','Printed (Digital)')
   and dlm.Phone is not null and dlm.Phone not in ('')
   and dlm.Email is not null and dlm.Email not in ('')
   and AuthzInvoiceUserUid is null
   order by cm.id desc
   ```

3. Take the Claim's paymid and put it into "Betalingskenmerk" input and press "Verder" button

4. Fill all necessary data on the formula
   - **Expected:** When all data properly filled, there shouldn't be any checks marked in red

5. Press "Account aanmaken" button
   - **Expected:** Page to confirm phone number with SMS should appear

6. Find SMS in log or Audit:
   ```sql
   select top 10 content, * 
   from TIM_Audit..Audit 
   where name='ISendAuthOTPCmd' and cdate > getdate()-1 
   order by id desc
   ```

7. Put SMS and press "Verder" button
   - **Expected:** 
     - Account on Patient Portal created with attached Invoice
     - Relation in core created
     - Account in IIP2 created

---

### BNM - Patient Portal - Link Claim to Account
**Test Case ID:** 42328  
**State:** Design  
**Priority:** Medium  
**Prerequisites:** BNM - Patient Portal - Create Account without Invoice or BNM - Patient Portal - Create Account with Invoice

**Steps:**
[To be detailed]

---

## Notes & References

**Test Data Locations:**
- POF Files: `\\[env]\Data\TIM\POF\`
- Payment Files: `\\[env]\Data\TIM\Payments\Incoming\`
- CAMT Files: `CAMT_YYYYMMDDHHMMSS.xml`

**Key Database Tables:**
- TIM_BnM..MatchableItem
- TIM_BnM..PaymentOutgoingFile
- TIM_BnM..PaymentFile
- TIM_BnM..Payment
- TIM_BnM..Matching
- TIM_Core.Charging.Term
- TIM_Core.ExpiratorARP.ExpirationItem
- TIM_WebApi..ClaimModels
- TIM_PaymentProvider..Installment

**Common Status IDs:**
- 2: Matched/Paid
- 9: Created/Pending
- 11: Sent to POF
- 16: Rejected
- 17: Paid (Acquisition)
- 101: Rejected artificial payment

**Common Type IDs:**
- 1: Main Matchable Item
- 2: Secondary Matchable Item
- 6: BA Invoice
- 11: Patient DD
- 21: PA Term
- 35: Acquisition DD (AP304)
