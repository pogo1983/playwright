# Test Automation - Naming Convention & Test Structure

Version: 1.0
Date: 2026-03-17
Status: Draft

---

## Test Name Structure (Technical Format)

  {Actor}-{Subject}-{Action}-{Subtype}-{FileFormat}

Components:
  - Actor     : Who performs the action (role/system)     e.g. BA, Patient, Agent
  - Subject   : What the action is performed on           e.g. Claim, ClaimFile, Account
  - Action    : What is being done                        e.g. Stop, Resurrect, Send
  - Subtype   : Action variant / scenario                 e.g. Leniency, Full, UBO
  - Format    : File format (optional)                    e.g. LH, GDS, MZ, DPay

---

## Process Hierarchy & Test Names

Process
├── Admin
│   └── Account
│       └── Admin-Account-Create                        @admin @account @create
│
├── BA (Inzicht Provider)
│   ├── Claim
│   │   ├── Stop
│   │   │   ├── Leniency
│   │   │   │   ├── BA-Claim-Stop-Leniency-LH           @ba @claim @stop @leniency @lh
│   │   │   │   └── BA-Claim-Stop-Leniency-GDS          @ba @claim @stop @leniency @gds
│   │   │   └── Partial
│   │   │       └── BA-Claim-Stop-Partial               @ba @claim @stop @partial
│   │   ├── Resurrect
│   │   │   ├── BA-Claim-Resurrect-MZ                   @ba @claim @resurrect @mz
│   │   │   ├── BA-Claim-Resurrect-GDS                  @ba @claim @resurrect @gds
│   │   │   └── BA-Claim-Resurrect-DPay                 @ba @claim @resurrect @dpay
│   │   └── Redelivery
│   │       └── BA-Claim-Redelivery                     @ba @claim @redelivery
│   ├── ClaimFile
│   │   ├── UBO
│   │   │   ├── BA-ClaimFile-UBO-Unknown                @ba @claimfile @ubo @unknown
│   │   │   └── BA-ClaimFile-UBO-Verified               @ba @claimfile @ubo @verified
│   │   ├── BA-ClaimFile-FirstDelivery                  @ba @claimfile @firstdelivery
│   │   ├── BA-ClaimFile-AdminCode                      @ba @claimfile @admincode
│   │   ├── BA-ClaimFile-AGBValidator                   @ba @claimfile @agbvalidator
│   │   └── BA-ClaimFile-Stop                           @ba @claimfile @stop
│   └── 2FA
│       └── BA-2FA                                      @ba @2fa
│
├── Patient (Payment Page)
│   └── Claim
│       ├── Patient-Claim-SendPayment                   @patient @claim @sendpayment
│       ├── Patient-Claim-PaymentAgreement              @patient @claim @paymentagreement
│       ├── Patient-Claim-ExtendDueDate                 @patient @claim @extendduedate
│       ├── Patient-Claim-ContactAgent                  @patient @claim @contactagent
│       └── Patient-Claim-SendTicketHelpdesk            @patient @claim @helpdesk
│
└── Agent (TIM UI)
    ├── Claim
    │   ├── Stop
    │   │   └── Agent-Claim-Stop-Full                   @agent @claim @stop @full
    │   └── Helpdesk
    │       └── Agent-Claim-HandleHelpdesk              @agent @claim @helpdesk
    ├── Business Account
    │   └── Agent-BusinessAccount-AddContract           @agent @businessaccount @contract
    └── 2FA
        └── Agent-2FA                                   @agent @2fa

---

## Tag Categories (for filtering tests)

Run type:
  @regression  - full test suite, long run (1h+)
  @smoke       - short test suite, max 10-15 min

Actor (role):
  @ba          - Business Agent (Inzicht)
  @patient     - Patient (Payment Page)
  @agent       - Agent (TIM UI)
  @admin       - Administrator

Subject:
  @claim           - Claim
  @claimfile       - Claim File
  @account         - Account
  @businessaccount - Business Account

File format:
  @mz    - MZ format
  @lh    - LH format
  @gds   - GDS format
  @dpay  - DPay format (Direct Pay)

Domain:
  @dunning - Dunning
  @banking - Banking
  @ledger  - Ledger

Claim type:
  @digital - Digital
  @paper   - Paper

Printing party:
  @addcom - Addcom
  @datab  - Datab

Care category:
  @mentalhealth - Mental Health
  @dentalhealth - Dental Health

Contract type:
  @complete  - Complete
  @basis     - Basis
  @uidgebrid - Uidgebrid

---

## Playwright Usage Example (C# / NUnit)

```csharp
[TestFixture]
[Category("ba")]
[Category("claim")]
[Category("stop")]
[Category("regression")]
public class BA_Claim_Stop : PageTest
{
    [Test]
    [Category("leniency")]
    [Category("lh")]
    public async Task BA_Claim_Stop_Leniency_LH()
    {
        // test logic
    }

    [Test]
    [Category("leniency")]
    [Category("gds")]
    public async Task BA_Claim_Stop_Leniency_GDS()
    {
        // test logic
    }

    [Test]
    [Category("partial")]
    public async Task BA_Claim_Stop_Partial()
    {
        // test logic
    }
}
```

### Running by tags:

```bash
# Smoke tests only
dotnet test --filter "TestCategory=smoke"

# BA tests only
dotnet test --filter "TestCategory=ba"

# BA + stop tests
dotnet test --filter "TestCategory=ba&TestCategory=stop"

# Tests for GDS format
dotnet test --filter "TestCategory=gds"

# Exclude regression
dotnet test --filter "TestCategory!=regression"
```

---

## Suggested Test File Structure

```
Tests/
  BA/
    Claim/
      Stop/
        BA_Claim_Stop_Leniency.cs    → BA-Claim-Stop-Leniency-LH, BA-Claim-Stop-Leniency-GDS
        BA_Claim_Stop_Partial.cs     → BA-Claim-Stop-Partial
      BA_Claim_Resurrect.cs          → BA-Claim-Resurrect-MZ, BA-Claim-Resurrect-GDS, BA-Claim-Resurrect-DPay
      BA_Claim_Redelivery.cs         → BA-Claim-Redelivery
    ClaimFile/
      BA_ClaimFile_UBO.cs            → BA-ClaimFile-UBO-Unknown, BA-ClaimFile-UBO-Verified
      BA_ClaimFile_FirstDelivery.cs  → BA-ClaimFile-FirstDelivery
      BA_ClaimFile_AdminCode.cs      → BA-ClaimFile-AdminCode
      BA_ClaimFile_AGBValidator.cs   → BA-ClaimFile-AGBValidator
      BA_ClaimFile_Stop.cs           → BA-ClaimFile-Stop
    BA_2FA.cs                        → BA-2FA
  Patient/
    Claim/
      Patient_Claim_SendPayment.cs       → Patient-Claim-SendPayment
      Patient_Claim_PaymentAgreement.cs  → Patient-Claim-PaymentAgreement
      Patient_Claim_ExtendDueDate.cs     → Patient-Claim-ExtendDueDate
      Patient_Claim_ContactAgent.cs      → Patient-Claim-ContactAgent
      Patient_Claim_Helpdesk.cs          → Patient-Claim-SendTicketHelpdesk
  Agent/
    Claim/
      Agent_Claim_Stop.cs            → Agent-Claim-Stop-Full
      Agent_Claim_Helpdesk.cs        → Agent-Claim-HandleHelpdesk
    BusinessAccount/
      Agent_BusinessAccount_AddContract.cs → Agent-BusinessAccount-AddContract
    Agent_2FA.cs                     → Agent-2FA
  Admin/
    Admin_Account_Create.cs          → Admin-Account-Create
```
