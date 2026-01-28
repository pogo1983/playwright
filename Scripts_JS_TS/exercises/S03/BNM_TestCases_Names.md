# BNM Test Cases - Natural Language Names

**Total:** 27 test cases  
**Format:** `[Domain] - [Entity] - [Action Description]`

---

## Copy-Paste List for Azure:

```
BNM - Payment Agreement - Create Direct Debit via Portal
BNM - Payment Agreement - Pay Term Successfully
BNM - Payment Agreement - Reject Term
BNM - Payment Agreement - Break Agreement After Rejection
BNM - Acquisition - Create Direct Debit for AP304
BNM - Acquisition - Pay Direct Debit Successfully
BNM - Acquisition - Reject Direct Debit
BNM - Acquisition - Retry Direct Debit After Rejection
BNM - BA Invoice - Create Direct Debit Successfully
BNM - BA Invoice - Pay Direct Debit Successfully
BNM - BA Invoice - Reject Direct Debit
BNM - BA Invoice - Pay Manually Before Batch DD
BNM - BA Invoice - Pay with Standard Payment Before Batch DD
BNM - Patient - Create Direct Debit via Portal
BNM - Patient - Pay Direct Debit Successfully
BNM - Patient - Reject Direct Debit
BNM - Credit - Create Installment Direct Debit
BNM - Credit - Pay Installment Successfully
BNM - Credit - Reject Installment
BNM - Claim - Pay with Standard Payment
BNM - Insurance Receivable - Pay with Standard Payment
BNM - Helper - Confirm Direct Debit Payment
BNM - Helper - Reject Direct Debit Payment
BNM - Helper - Process Direct Debit with Wrong Amount
BNM - Patient Portal - Create Account without Invoice
BNM - Patient Portal - Create Account with Invoice
BNM - Patient Portal - Link Claim to Account
```

---

## Mapping: Old Names → New Names

| Old Name | New Name |
|----------|----------|
| `BNM_PaymentAgreement_Create_DirectDebit_Portal` | `BNM - Payment Agreement - Create Direct Debit via Portal` |
| `BNM_PaymentAgreement_Pay_Term_Success` | `BNM - Payment Agreement - Pay Term Successfully` |
| `BNM_PaymentAgreement_Reject_Term_Failed` | `BNM - Payment Agreement - Reject Term` |
| `BNM_PaymentAgreement_Break_AfterRejection` | `BNM - Payment Agreement - Break Agreement After Rejection` |
| `BNM_Acquisition_Create_DirectDebit_AP304` | `BNM - Acquisition - Create Direct Debit for AP304` |
| `BNM_Acquisition_Pay_DirectDebit_Success` | `BNM - Acquisition - Pay Direct Debit Successfully` |
| `BNM_Acquisition_Reject_DirectDebit_Failed` | `BNM - Acquisition - Reject Direct Debit` |
| `BNM_Acquisition_Retry_DirectDebit_AfterRejection` | `BNM - Acquisition - Retry Direct Debit After Rejection` |
| `BNM_BAInvoice_Create_DirectDebit_Success` | `BNM - BA Invoice - Create Direct Debit Successfully` |
| `BNM_BAInvoice_Pay_DirectDebit_Success` | `BNM - BA Invoice - Pay Direct Debit Successfully` |
| `BNM_BAInvoice_Reject_DirectDebit_Failed` | `BNM - BA Invoice - Reject Direct Debit` |
| `BNM_BAInvoice_Pay_Manual_BeforeBatchDD` | `BNM - BA Invoice - Pay Manually Before Batch DD` |
| `BNM_BAInvoice_Pay_Standard_BeforeBatchDD` | `BNM - BA Invoice - Pay with Standard Payment Before Batch DD` |
| `BNM_Patient_Create_DirectDebit_Portal` | `BNM - Patient - Create Direct Debit via Portal` |
| `BNM_Patient_Pay_DirectDebit_Success` | `BNM - Patient - Pay Direct Debit Successfully` |
| `BNM_Patient_Reject_DirectDebit_Failed` | `BNM - Patient - Reject Direct Debit` |
| `BNM_Credit_Create_Installment_DirectDebit` | `BNM - Credit - Create Installment Direct Debit` |
| `BNM_Credit_Pay_Installment_Success` | `BNM - Credit - Pay Installment Successfully` |
| `BNM_Credit_Reject_Installment_Failed` | `BNM - Credit - Reject Installment` |
| `BNM_Claim_Pay_Standard_Payment` | `BNM - Claim - Pay with Standard Payment` |
| `BNM_IR_Pay_Standard_Payment` | `BNM - Insurance Receivable - Pay with Standard Payment` |
| `BNM_Helper_Confirm_DirectDebit_Payment` | `BNM - Helper - Confirm Direct Debit Payment` |
| `BNM_Helper_Reject_DirectDebit_Payment` | `BNM - Helper - Reject Direct Debit Payment` |
| `BNM_Helper_Process_DirectDebit_WrongAmount` | `BNM - Helper - Process Direct Debit with Wrong Amount` |
| `BNM_Portal_Create_Account_WithoutInvoice` | `BNM - Patient Portal - Create Account without Invoice` |
| `BNM_Portal_Create_Account_WithInvoice` | `BNM - Patient Portal - Create Account with Invoice` |
| `BNM_Portal_Link_Claim_Account` | `BNM - Patient Portal - Link Claim to Account` |

---

## Quick Stats

**By Entity:**
- Payment Agreement: 4 tests
- Acquisition: 4 tests  
- BA Invoice: 5 tests
- Patient: 3 tests
- Credit: 3 tests
- Standard Payments: 2 tests
- Helpers: 3 tests
- Patient Portal: 3 tests

**Total: 27 test cases**
