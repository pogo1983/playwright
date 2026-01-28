# TEST CASE NAMING CONVENTIONS
**TIM Project - Version 1.0**  
**Date:** January 28, 2026

---

## OVERVIEW

This document defines two complementary naming conventions for test cases:
1. **Natural Language Format** (Recommended for Azure DevOps Test Plans)
2. **Technical Format** (For automation scripts and code references)

Both formats can be used together - Natural Language for human-readable test titles in Azure DevOps, and Technical Format for automation test identifiers.

---

## OPTION 1: NATURAL LANGUAGE FORMAT - RECOMMENDED FOR AZURE DEVOPS

**Format:** `[Domain] - [Entity] - [Action Description]`

**Example:** `BNM - Payment Agreement - Create Direct Debit via Portal`

### COMPONENTS:

**1. Domain (3-letter code)**
- System area or module abbreviation
- Always UPPERCASE
- Examples: BNM (Banking), RCP (Reception), CLO (Claim Orchestration)

**2. Entity (Business object or functional area)**
- The main subject being tested
- Use full descriptive names (no abbreviations)
- Title Case format
- Examples: Payment Agreement, Acquisition, BA Invoice, Patient Portal

**3. Action Description (Verb-based phrase with context)**
- What the test does + expected outcome + context
- Start with action verb
- Include specific details when helpful
- Examples:
  - Create Direct Debit via Portal
  - Pay Term Successfully
  - Reject Direct Debit
  - Pay Manually Before Batch DD

### EXAMPLES:

- BNM - Payment Agreement - Create Direct Debit via Portal
- BNM - Payment Agreement - Pay Term Successfully
- BNM - Patient - Reject Direct Debit
- BNM - BA Invoice - Pay with Standard Payment Before Batch DD
- RCP - Mediation - Process AP301 File Successfully
- CLO - Workflow - Route Claim to Correct Handler
- FAC - Risk Assessment - Calculate Risk Score for High Value Claim

### PROS & CONS:

**PROS:**
- Extremely readable - no learning curve
- Works perfectly in Azure DevOps
- Easy to search and filter
- Professional appearance
- Anyone can understand immediately
- Standard format used by 80% of teams

**CONS:**
- Longer than technical format
- Contains spaces (not ideal for code)
- Harder to use as variable names in scripts

**BEST FOR:** Azure DevOps test case titles, documentation, test reports

---

## OPTION 2: TECHNICAL FORMAT (For Automation & Code)

**Format:** `[Domain]_[Entity]_[Action]_[Scenario]_[Result]`

**Example:** `BNM_PaymentAgreement_Create_DirectDebit_Portal`

### COMPONENTS:

**1. Domain (3-letter code)**
- System area abbreviation
- Always UPPERCASE
- Examples: BNM, RCP, CLO, FAC

**2. Entity (Business object)**
- Main subject being tested
- CamelCase format
- Examples: PaymentAgreement, Acquisition, BAInvoice, Patient

**3. Action (Operation being tested)**
- Action verb
- CamelCase format
- Examples: Create, Pay, Reject, Process, Validate, Match

**4. Scenario (Context or type)**
- Additional context about the test
- CamelCase format
- Examples: DirectDebit, Term, Portal, Manual, AP304

**5. Result (Optional - expected outcome)**
- Expected result or status
- CamelCase format
- Examples: Success, Failed, Rejected, AfterRejection

### EXAMPLES:

- BNM_PaymentAgreement_Create_DirectDebit_Portal
- BNM_PaymentAgreement_Pay_Term_Success
- BNM_Patient_Reject_DirectDebit_Failed
- BNM_BAInvoice_Pay_Manual_BeforeBatchDD
- RCP_Mediation_Process_AP301_Success
- CLO_Workflow_Route_Claim_AutoAssign
- FAC_RiskAssessment_Calculate_Score_HighValue

### PROS & CONS:

**PROS:**
- Compact and concise
- No spaces - perfect for code/scripts
- Easy to use as variable/function names
- Good for automation frameworks
- Programmatically parseable

**CONS:**
- Less readable for humans
- Requires familiarity with abbreviations
- Harder to scan visually
- Not as professional in reports

**BEST FOR:** Test automation scripts, code identifiers, CI/CD pipelines, API names

---

## COMPONENT VOCABULARY - USE THESE STANDARD TERMS

### DOMAIN CODES:

- **BNM** = Banking
- **RCP** = Reception
- **CLO** = Claim Orchestration
- **FAC** = Factoring
- **CTA** = Costs and Tariffs
- **INS** = Insurers
- **IVD** = Invoicing and Dunning
- **BLF** = Bailiff
- **PMT** = Payment Matching
- **CFG** = Customer Configuration
- **AUD** = Auditing
- **ACC** = Accounting
- **TPL** = Templating and Messaging
- **FEI** = Frontend Infrastructure
- **API** = Vendor API
- **AUM** = Authentication & User Management
- **BDC** = BI Data Collector
- **E2E** = End-to-End Testing
- **PFT** = Performance Testing
- **SEC** = Security Testing

### ENTITY TERMS:

**Natural Language → Technical Format:**
- Payment Agreement → PaymentAgreement
- Acquisition → Acquisition
- BA Invoice → BAInvoice
- Patient → Patient
- Patient Portal → PatientPortal
- Credit → Credit
- Claim → Claim
- Insurance Receivable → InsuranceReceivable / IR
- Direct Debit → DirectDebit
- Installment → Installment
- Term → Term
- Settlement → Settlement
- Mediation → Mediation
- Validation → Validation
- Risk Assessment → RiskAssessment
- Workflow → Workflow

### ACTION VERBS:

Create, Pay, Reject, Process, Validate, Match, Update, Delete, Search, Filter, Export, Import, Send, Receive, Confirm, Cancel, Retry, Break, Link, Route, Calculate, Generate, Approve, Assign

### SCENARIO/CONTEXT TERMS:

**Natural Language → Technical Format:**
- via Portal → Portal / ViaPortal
- on Payment Page → PaymentPage
- for AP304 → AP304 / ForAP304
- Before Batch DD → BeforeBatchDD
- After Rejection → AfterRejection
- with Standard Payment → StandardPayment / WithStandard
- to Account → ToAccount
- Manually → Manual
- Automatically → Auto / Automatic

### RESULT/OUTCOME TERMS:

**Natural Language → Technical Format:**
- Successfully → Success
- Failed → Failed
- Rejected → Rejected
- After Rejection → AfterRejection
- with Error → WithError

---

## NAMING RULES

### NATURAL LANGUAGE FORMAT RULES:

**DO:**
- Use spaces and dashes ( - ) for readability
- Start action with a verb (Create, Pay, Reject, etc.)
- Include outcome when relevant (Successfully, Failed, After Rejection)
- Add context in action (via Portal, for AP304, Before Batch DD)
- Keep entity names clear and business-friendly
- Use Title Case for Entity and Action Description
- Keep under 80 characters when possible

**DON'T:**
- Use underscores or camelCase
- Abbreviate entity names (use "Payment Agreement" not "PA")
- Include technical IDs or numbers in the title
- Use technical jargon without context
- Make it overly long or complex

### TECHNICAL FORMAT RULES:

**DO:**
- Use underscores (_) to separate components
- Use CamelCase for multi-word components
- Keep abbreviations consistent
- Include Result component when outcome matters
- Make it parseable by code
- Keep components in order: Domain_Entity_Action_Scenario_Result

**DON'T:**
- Use spaces or dashes
- Mix CamelCase and lowercase randomly
- Use special characters (except underscore)
- Make components too long
- Omit critical context

---

## SIDE-BY-SIDE COMPARISON

### Examples:

**1. Payment Agreement - Create**
- Natural: `BNM - Payment Agreement - Create Direct Debit via Portal`
- Technical: `BNM_PaymentAgreement_Create_DirectDebit_Portal`

**2. Payment Agreement - Pay**
- Natural: `BNM - Payment Agreement - Pay Term Successfully`
- Technical: `BNM_PaymentAgreement_Pay_Term_Success`

**3. Acquisition - Reject**
- Natural: `BNM - Acquisition - Reject Direct Debit`
- Technical: `BNM_Acquisition_Reject_DirectDebit_Failed`

**4. Patient Portal - Create**
- Natural: `BNM - Patient Portal - Create Account without Invoice`
- Technical: `BNM_PatientPortal_Create_Account_WithoutInvoice`

**5. Reception - Process**
- Natural: `RCP - Mediation - Process AP301 File Successfully`
- Technical: `RCP_Mediation_Process_AP301_Success`

**6. Claim Orchestration - Route**
- Natural: `CLO - Workflow - Route Claim to Correct Handler`
- Technical: `CLO_Workflow_Route_Claim_AutoAssign`

---

## RECOMMENDATION: HYBRID APPROACH

Use both formats for different purposes:

### AZURE DEVOPS TEST CASE TITLE (User-facing)
**Use Natural Language Format**

Example: `BNM - Payment Agreement - Create Direct Debit via Portal`

**Benefits:**
- Easy for testers, BAs, and stakeholders to understand
- Professional appearance in test reports
- Good for filtering and searching in Azure

### AUTOMATION TEST IDENTIFIER (Code-facing)
**Use Technical Format**

Example: `BNM_PaymentAgreement_Create_DirectDebit_Portal`

**Benefits:**
- Works as function/class names in Playwright tests
- Easy to reference in CI/CD pipelines
- Parseable by scripts and tools

---

## REAL-WORLD EXAMPLES - BNM DOMAIN (27 TEST CASES)

### NATURAL LANGUAGE FORMAT:

**Payment Agreement (4):**
1. BNM - Payment Agreement - Create Direct Debit via Portal
2. BNM - Payment Agreement - Pay Term Successfully
3. BNM - Payment Agreement - Reject Term
4. BNM - Payment Agreement - Break Agreement After Rejection

**Acquisition (4):**
5. BNM - Acquisition - Create Direct Debit for AP304
6. BNM - Acquisition - Pay Direct Debit Successfully
7. BNM - Acquisition - Reject Direct Debit
8. BNM - Acquisition - Retry Direct Debit After Rejection

**BA Invoice (5):**
9. BNM - BA Invoice - Create Direct Debit Successfully
10. BNM - BA Invoice - Pay Direct Debit Successfully
11. BNM - BA Invoice - Reject Direct Debit
12. BNM - BA Invoice - Pay Manually Before Batch DD
13. BNM - BA Invoice - Pay with Standard Payment Before Batch DD

**Patient (3):**
14. BNM - Patient - Create Direct Debit via Portal
15. BNM - Patient - Pay Direct Debit Successfully
16. BNM - Patient - Reject Direct Debit

**Credit (3):**
17. BNM - Credit - Create Installment Direct Debit
18. BNM - Credit - Pay Installment Successfully
19. BNM - Credit - Reject Installment

**Standard Payments (2):**
20. BNM - Claim - Pay with Standard Payment
21. BNM - Insurance Receivable - Pay with Standard Payment

**Helpers (3):**
22. BNM - Helper - Confirm Direct Debit Payment
23. BNM - Helper - Reject Direct Debit Payment
24. BNM - Helper - Process Direct Debit with Wrong Amount

**Patient Portal (3):**
25. BNM - Patient Portal - Create Account without Invoice
26. BNM - Patient Portal - Create Account with Invoice
27. BNM - Patient Portal - Link Claim to Account

### TECHNICAL FORMAT:

**Payment Agreement (4):**
1. BNM_PaymentAgreement_Create_DirectDebit_Portal
2. BNM_PaymentAgreement_Pay_Term_Success
3. BNM_PaymentAgreement_Reject_Term_Failed
4. BNM_PaymentAgreement_Break_AfterRejection

**Acquisition (4):**
5. BNM_Acquisition_Create_DirectDebit_AP304
6. BNM_Acquisition_Pay_DirectDebit_Success
7. BNM_Acquisition_Reject_DirectDebit_Failed
8. BNM_Acquisition_Retry_DirectDebit_AfterRejection

**BA Invoice (5):**
9. BNM_BAInvoice_Create_DirectDebit_Success
10. BNM_BAInvoice_Pay_DirectDebit_Success
11. BNM_BAInvoice_Reject_DirectDebit_Failed
12. BNM_BAInvoice_Pay_Manual_BeforeBatchDD
13. BNM_BAInvoice_Pay_Standard_BeforeBatchDD

**Patient (3):**
14. BNM_Patient_Create_DirectDebit_Portal
15. BNM_Patient_Pay_DirectDebit_Success
16. BNM_Patient_Reject_DirectDebit_Failed

**Credit (3):**
17. BNM_Credit_Create_Installment_DirectDebit
18. BNM_Credit_Pay_Installment_Success
19. BNM_Credit_Reject_Installment_Failed

**Standard Payments (2):**
20. BNM_Claim_Pay_Standard_Payment
21. BNM_IR_Pay_Standard_Payment

**Helpers (3):**
22. BNM_Helper_Confirm_DirectDebit_Payment
23. BNM_Helper_Reject_DirectDebit_Payment
24. BNM_Helper_Process_DirectDebit_WrongAmount

**Patient Portal (3):**
25. BNM_Portal_Create_Account_WithoutInvoice
26. BNM_Portal_Create_Account_WithInvoice
27. BNM_Portal_Link_Claim_Account

---

## DISCUSSION QUESTIONS FOR TEAM

1. Which format do you find more readable and easier to understand?

2. Should we use Natural Language for Azure and Technical for automation? Or standardize on just one format?

3. Are the domain codes (BNM, RCP, CLO, etc.) clear enough? Should we add a reference guide?

4. Do the entity names make sense from a business perspective? Any suggestions for improvements?

5. Are there any action verbs or scenario terms we should add to the vocabulary?

6. Should we enforce character limits? (e.g., max 80 characters)

7. How should we handle edge cases or complex scenarios that don't fit the format?

8. Should we create a tool/template to help generate names automatically?

9. Who will be responsible for maintaining the naming convention standards?

10. How do we ensure consistency across all domains and test suites?

---

## NEXT STEPS

- Review both formats with team
- Decide on primary format (or hybrid approach)
- Get approval from stakeholders
- Update existing test cases to match convention
- Create templates and examples for other domains
- Train team members on the conventions
- Set up validation/linting for new test cases
- Document in team wiki/confluence

---

## DOCUMENT VERSION CONTROL

**Version:** 1.0  
**Date:** January 28, 2026  
**Owner:** Marcin Pogorzelski  
**Status:** Draft - For Team Discussion  
**Next Review:** [To be scheduled]
