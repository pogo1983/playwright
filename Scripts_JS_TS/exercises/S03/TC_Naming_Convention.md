# Test Case Naming Convention

**Version:** 1.0  
**Date:** 2026-01-28  
**Status:** Active

---

## **Standard Format**

```
[Domain] - [Entity] - [Action Description]
```

### **Components:**

1. **Domain** (3-letter code)
   - Domain abbreviation representing the system area
   - Examples: `BNM`, `RCP`, `CLO`, `FAC`, `CTA`, etc.

2. **Entity** (Business object or area)
   - The main subject of the test
   - Use full names, no abbreviations
   - Examples: `Payment Agreement`, `Acquisition`, `BA Invoice`, `Patient Portal`

3. **Action Description** (Clear, verb-based phrase)
   - What the test does and expected outcome
   - Use natural language
   - Include context when helpful (via Portal, for AP304, etc.)
   - Examples: `Create Direct Debit via Portal`, `Pay Term Successfully`, `Reject Term`

---

## **Format Rules:**

✅ **DO:**
- Use spaces and dashes for readability
- Start action with a verb (Create, Pay, Reject, Validate, etc.)
- Include outcome when relevant (Successfully, Failed, After Rejection)
- Add context in action (via Portal, on Payment Page, for AP304)
- Keep it under 80 characters if possible

❌ **DON'T:**
- Use underscores or camelCase
- Use abbreviations in Entity or Action (except well-known ones like DD, BA, IR)
- Include test case numbers in the name
- Make it overly technical

---

## **Examples by Domain:**

### **Banking (BNM)**
```
BNM - Payment Agreement - Create Direct Debit via Portal
BNM - Payment Agreement - Pay Term Successfully
BNM - Payment Agreement - Reject Term
BNM - Acquisition - Create Direct Debit for AP304
BNM - BA Invoice - Pay Direct Debit Successfully
BNM - Patient Portal - Create Account without Invoice
```

### **Reception (RCP)**
```
RCP - Mediation - Process AP301 File Successfully
RCP - Validation - Reject Invalid Claim
RCP - Enrichment - Add Missing Patient Data
```

### **Claim Orchestration (CLO)**
```
CLO - Workflow - Route Claim to Correct Handler
CLO - Status - Update Claim Status to In Progress
CLO - Assignment - Assign Claim to User Automatically
```

### **Factoring (FAC)**
```
FAC - Risk Assessment - Calculate Risk Score
FAC - CHA - Process Claim Hold Authorization
FAC - Risk Management - Approve High Value Claim
```

---

## **Special Cases:**

### **Helper/Shared Steps:**
```
BNM - Helper - Confirm Direct Debit Payment
BNM - Helper - Reject Direct Debit Payment
```

### **End-to-End Tests:**
```
E2E - Full Claim Journey - From Receipt to Payment
E2E - Patient Portal - Complete Payment Agreement Flow
```

### **Integration Tests:**
```
INT - API - Validate Claim Receipt Endpoint
INT - Database - Verify Payment Matching Logic
```

---

## **Quick Reference:**

| Component | Length | Style | Example |
|-----------|--------|-------|---------|
| Domain | 3 chars | UPPERCASE | `BNM` |
| Separator | 3 chars | Space-Dash-Space | ` - ` |
| Entity | 2-4 words | Title Case | `Payment Agreement` |
| Separator | 3 chars | Space-Dash-Space | ` - ` |
| Action | 3-8 words | Title Case, Verb-first | `Create Direct Debit via Portal` |

---

## **Domain Codes:**

| Code | Domain Name |
|------|-------------|
| RCP | Reception |
| CLO | Claim Orchestration |
| FAC | Factoring |
| CTA | Costs and Tariffs |
| INS | Insurers |
| IVD | Invoicing and Dunning |
| BLF | Bailiff |
| BNM | Banking |
| PMT | Payment Matching |
| CFG | Customer Configuration |
| AUD | Auditing |
| ACC | Accounting |
| TPL | Templating and Messaging |
| FEI | Frontend Infrastructure |
| API | Vendor API |
| AUM | Authentication & User Management |
| BDC | BI Data Collector |
| E2E | End-to-End Testing |
| PFT | Performance Testing |
| SEC | Security Testing |

---

## **Action Verbs:**

Common verbs to start your Action Description:
- **Create** - Creating new records/items
- **Pay** - Payment operations
- **Reject** - Rejection scenarios
- **Validate** - Validation checks
- **Process** - Processing workflows
- **Update** - Updating existing data
- **Delete** - Deletion operations
- **Search** - Search functionality
- **Filter** - Filtering data
- **Export** - Export operations
- **Import** - Import operations
- **Send** - Sending messages/notifications
- **Receive** - Receiving data
- **Confirm** - Confirmation actions
- **Cancel** - Cancellation scenarios
- **Retry** - Retry logic
- **Break** - Breaking/terminating processes

---

## **Examples - Before & After:**

| ❌ Before (Technical) | ✅ After (Natural Language) |
|----------------------|----------------------------|
| `BNM_PaymentAgreement_Create_DirectDebit_Portal` | `BNM - Payment Agreement - Create Direct Debit via Portal` |
| `BNM_PAY_TERM_SUCCESS` | `BNM - Payment Agreement - Pay Term Successfully` |
| `bnm-acq-dd-pay` | `BNM - Acquisition - Pay Direct Debit Successfully` |
| `TC_BNM_001_PA_Create` | `BNM - Payment Agreement - Create Direct Debit via Portal` |
