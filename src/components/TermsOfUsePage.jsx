const tocItems = [
  ['about-qpay', '1. ABOUT QPAY'],
  ['eligibility', '2. ELIGIBILITY'],
  ['account-registration', '3. ACCOUNT REGISTRATION'],
  ['one-account', '4. ONE ACCOUNT PER CUSTOMER'],
  ['identity-verification', '5. IDENTITY VERIFICATION AND KYC'],
  ['your-account', '6. YOUR QPAY ACCOUNT'],
  ['customer-funds', '7. CUSTOMER FUNDS'],
  ['funding', '8. FUNDING YOUR ACCOUNT'],
  ['qr-payments', '9. QR PAYMENTS'],
  ['payment-authorisation', '10. PAYMENT AUTHORISATION'],
  ['transaction-status', '11. TRANSACTION STATUS'],
  ['transaction-limits', '12. TRANSACTION LIMITS'],
  ['fees', '13. FEES'],
  ['failed-duplicate', '14. FAILED AND DUPLICATE TRANSACTIONS'],
  ['refunds-reversals', '15. REFUNDS AND REVERSALS'],
  ['merchant-payments', '16. MERCHANT PAYMENTS'],
  ['account-security', '17. ACCOUNT SECURITY'],
  ['unauthorised-transactions', '18. UNAUTHORISED TRANSACTIONS'],
  ['transaction-monitoring', '19. TRANSACTION MONITORING'],
  ['prohibited-use', '20. PROHIBITED USE'],
  ['account-restrictions', '21. ACCOUNT RESTRICTIONS'],
  ['suspension-termination', '22. SUSPENSION AND TERMINATION'],
  ['third-party-providers', '23. THIRD-PARTY SERVICE PROVIDERS'],
  ['service-availability', '24. SERVICE AVAILABILITY'],
  ['privacy-data', '25. PRIVACY AND PERSONAL DATA'],
  ['electronic-communications', '26. ELECTRONIC COMMUNICATIONS'],
  ['customer-support', '27. CUSTOMER SUPPORT'],
  ['complaints', '28. COMPLAINTS'],
  ['intellectual-property', '29. INTELLECTUAL PROPERTY'],
  ['limitation-liability', '30. LIMITATION OF LIABILITY'],
  ['your-responsibility', '31. YOUR RESPONSIBILITY'],
  ['changes-qpay', '32. CHANGES TO QPAY'],
  ['changes-terms', '33. CHANGES TO THESE TERMS'],
  ['international-expansion', '34. INTERNATIONAL EXPANSION'],
  ['governing-law', '35. GOVERNING LAW'],
  ['severability', '36. SEVERABILITY'],
  ['no-waiver', '37. NO WAIVER'],
  ['entire-agreement', '38. ENTIRE AGREEMENT'],
  ['contact-us', '39. CONTACT US'],
]

const sections = [
  {
    id: 'about-qpay',
    title: '1. ABOUT QPAY',
    paragraphs: [
      'QPay is a financial technology platform that enables users to make and receive payments, including payments initiated through QR codes, and access related financial services through the QPay application.',
      'Certain regulated financial services available through QPay may be provided by appropriately licensed financial institutions and payment service providers.',
      "QPay currently uses Anchor as an infrastructure partner for certain account, ledger and payment services.",
      'Where a service is provided by a regulated third party, additional terms imposed by that provider may apply.',
      'QPay is not a bank and does not represent itself as one.',
    ],
  },
  {
    id: 'eligibility',
    title: '2. ELIGIBILITY',
    intro: 'To create and maintain a QPay account, you must:',
    listType: 'alpha',
    list: [
      'be at least 18 years old;',
      'provide accurate, complete and current information;',
      'provide a valid Nigerian telephone number where required;',
      "successfully complete QPay's applicable identity verification and Know Your Customer (\"KYC\") requirements;",
      'satisfy applicable regulatory and compliance requirements; and',
      'use your account only for lawful purposes.',
    ],
    paragraphs: [
      'QPay may request additional information or documentation at any time where required for identity verification, fraud prevention, regulatory compliance or account security.',
    ],
  },
  {
    id: 'account-registration',
    title: '3. ACCOUNT REGISTRATION',
    paragraphs: [
      'You may open a QPay account by downloading the QPay mobile application and completing the registration process.',
      'You may be required to provide information including your:',
    ],
    list: [
      'full legal name;',
      'date of birth;',
      'telephone number;',
      'email address;',
      'residential address;',
      'Bank Verification Number ("BVN");',
      'National Identification Number ("NIN");',
      'government-issued identification; and',
      'other information reasonably required for verification or regulatory compliance.',
    ],
    paragraphsAfterList: [
      'QPay may use third-party identity verification providers to verify information submitted during onboarding.',
      'Providing false, misleading, fraudulent or incomplete information may result in your application being rejected or your account being restricted, suspended or terminated.',
    ],
  },
  {
    id: 'one-account',
    title: '4. ONE ACCOUNT PER CUSTOMER',
    paragraphs: [
      'Unless expressly permitted by QPay, each individual may maintain only one personal QPay account.',
      'You may not create multiple accounts to circumvent transaction limits, promotional restrictions, compliance requirements, account restrictions or any other QPay control.',
      'Separate products or profiles may subsequently be made available for businesses or merchants.',
    ],
  },
  {
    id: 'identity-verification',
    title: '5. IDENTITY VERIFICATION AND KYC',
    paragraphs: [
      'By creating or maintaining a QPay account, you authorise QPay and its authorised service providers to verify information you provide.',
      'Verification may include checking information against government, financial institution, identity verification and other authorised databases.',
      'QPay may conduct or facilitate:',
    ],
    list: [
      'NIN verification;',
      'BVN verification;',
      'document verification;',
      'facial or biometric verification where applicable;',
      'telephone number verification;',
      'sanctions screening;',
      'politically exposed person screening;',
      'fraud screening; and',
      'other AML/CFT checks required by applicable law.',
    ],
    paragraphsAfterList: [
      'QPay may request additional information after account opening.',
      'Failure to provide requested information may result in restrictions being placed on your account.',
    ],
  },
  {
    id: 'your-account',
    title: '6. YOUR QPAY ACCOUNT',
    paragraphs: [
      'Following successful onboarding and verification, you may be provided with access to payment functionality through QPay.',
      "Where applicable, account numbers or virtual accounts displayed within QPay may be issued or maintained through QPay's regulated banking or financial infrastructure partners.",
      'The underlying financial account infrastructure may therefore be provided by a third party rather than directly by QPay.',
      'Your available balance and transaction information will be displayed within the QPay application.',
    ],
  },
  {
    id: 'customer-funds',
    title: '7. CUSTOMER FUNDS',
    paragraphs: [
      'QPay does not acquire ownership of your funds merely because you use QPay.',
      'Where customer funds are maintained within an account provided by a regulated financial institution or infrastructure partner, those funds are held within the applicable financial infrastructure provided by that partner.',
      'QPay may provide the technology and instructions necessary to initiate authorised transactions but does not have unrestricted rights to use customer funds for QPay\'s own purposes.',
      'The precise safeguarding, custody and settlement arrangements applicable to your funds may depend on the financial institution providing the underlying account.',
    ],
  },
  {
    id: 'funding',
    title: '8. FUNDING YOUR ACCOUNT',
    paragraphs: ['Depending on the services available to you, you may fund your QPay account using supported methods including:'],
    list: ['NIP bank transfers;', 'book transfers;', 'card funding, where available; and', 'other methods introduced by QPay.'],
    paragraphsAfterList: [
      'Available funding methods may change.',
      'QPay may impose funding limits, verification requirements or other controls for security, compliance or operational reasons.',
    ],
  },
  {
    id: 'qr-payments',
    title: '9. QR PAYMENTS',
    paragraphs: [
      'QPay enables supported payments to be initiated through QR codes.',
      'Depending on the payment flow, a QR code may represent information necessary to identify a customer, merchant, transaction or payment instruction.',
      'Before authorising a transaction, you are responsible for checking the relevant transaction details displayed to you.',
      'Once you authorise a payment, QPay may submit the payment instruction for processing.',
      'A transaction should not be considered successful solely because a QR code has been scanned.',
      'A payment is considered completed when QPay or the relevant payment infrastructure confirms successful processing.',
    ],
  },
  {
    id: 'payment-authorisation',
    title: '10. PAYMENT AUTHORISATION',
    paragraphs: ['By confirming a payment within QPay, you authorise QPay and its payment partners to process the corresponding payment instruction.', 'QPay may require additional authentication, including:'],
    list: ['PIN;', 'password;', 'OTP;', 'biometric authentication;', 'device authentication; or', 'another security mechanism.'],
    paragraphsAfterList: ['You must not authorise a payment unless you have verified the transaction details.'],
  },
  {
    id: 'transaction-status',
    title: '11. TRANSACTION STATUS',
    paragraphs: ['Transactions may appear as:'],
    list: ['pending;', 'successful;', 'failed;', 'reversed;', 'cancelled; or', 'another status displayed within QPay.'],
    paragraphsAfterList: [
      'A transaction displayed as pending has not necessarily completed.',
      'If a transaction fails after your account has been debited, QPay and/or its payment partners will process any applicable reversal in accordance with the relevant payment network and regulatory requirements.',
    ],
  },
  {
    id: 'transaction-limits',
    title: '12. TRANSACTION LIMITS',
    paragraphs: ['QPay may establish limits on:'],
    list: ['individual transactions;', 'daily transactions;', 'monthly transactions;', 'account funding;', 'withdrawals;', 'transfers; and', 'other account activities.'],
    paragraphsAfterList: [
      'Limits may vary depending on your verification level, account type, risk profile and regulatory requirements.',
      'QPay may change applicable limits where necessary for compliance, fraud prevention, risk management or operational reasons.',
    ],
  },
  {
    id: 'fees',
    title: '13. FEES',
    paragraphs: [
      'QPay may charge fees for certain services.',
      'For applicable QR payment transactions, QPay currently charges a 2.5% transaction fee on successfully completed QR payments.',
      'The applicable fee will be disclosed to the relevant user before or as part of the transaction process where required.',
      'QPay may introduce or modify fees in the future.',
      'Where a fee changes materially, QPay will provide notice as required by applicable law before the new fee becomes effective.',
      "Fees charged by banks, card issuers, telecommunications providers or other third parties may be separate from QPay's fees.",
    ],
  },
  {
    id: 'failed-duplicate',
    title: '14. FAILED AND DUPLICATE TRANSACTIONS',
    paragraphs: [
      'QPay uses technical controls, including idempotency mechanisms where applicable, to reduce the risk of duplicate payment processing.',
      'However, network interruptions, third-party failures and other circumstances may affect transaction processing.',
      'If you believe you have been charged more than once for the same transaction, you should report the transaction to QPay immediately through the available customer support channels.',
    ],
  },
  {
    id: 'refunds-reversals',
    title: '15. REFUNDS AND REVERSALS',
    paragraphs: ['A refund, reversal or transaction cancellation may be available depending on:'],
    list: ['the transaction status;', 'payment method;', 'merchant;', 'applicable payment network rules;', 'QPay policies;', 'partner requirements; and', 'applicable law.'],
    paragraphsAfterList: [
      'A successfully completed transfer cannot necessarily be cancelled merely because the sender changes their mind.',
      'Where a payment has been sent to an incorrect recipient because the sender entered or confirmed incorrect information, QPay cannot guarantee recovery.',
    ],
  },
  {
    id: 'merchant-payments',
    title: '16. MERCHANT PAYMENTS',
    paragraphs: ['Merchants accepting QPay payments must ensure that:'],
    list: ['goods and services offered are lawful;', 'transaction descriptions are accurate;', 'customers are not deliberately misled;', 'QPay is not used for fraudulent activity;', 'applicable consumer protection obligations are followed; and', 'requested compliance information is provided.'],
    paragraphsAfterList: ['QPay may suspend merchant payment functionality where suspicious or prohibited activity is detected.', 'Separate QPay Merchant Terms may apply to merchants.'],
  },
  {
    id: 'account-security',
    title: '17. ACCOUNT SECURITY',
    paragraphs: ['You are responsible for maintaining the security of your QPay account and devices.', 'You must:'],
    list: ['protect your password and PIN;', 'never disclose an OTP to another person;', 'secure devices used to access QPay;', 'notify QPay immediately if you suspect unauthorised access;', 'ensure biometric credentials stored on your device belong only to authorised users; and', 'keep your contact information current.'],
    paragraphsAfterList: ['QPay will never ask you to disclose your complete password, PIN or OTP through unsolicited communications.'],
  },
  {
    id: 'unauthorised-transactions',
    title: '18. UNAUTHORISED TRANSACTIONS',
    paragraphs: ['If you believe your QPay account has been compromised or a transaction was conducted without your authorisation, you must notify QPay as soon as reasonably possible.', 'QPay may temporarily restrict your account while investigating suspected unauthorised activity.', 'You may be required to provide information reasonably necessary to investigate the transaction.'],
  },
  {
    id: 'transaction-monitoring',
    title: '19. TRANSACTION MONITORING',
    paragraphs: ['QPay and its financial infrastructure partners may monitor transactions to identify suspected:'],
    list: ['fraud;', 'money laundering;', 'terrorist financing;', 'proliferation financing;', 'sanctions violations;', 'account abuse;', 'unusual transaction patterns; and', 'other unlawful activity.'],
    paragraphsAfterList: [
      'Transactions may be automatically screened using transaction monitoring systems and internal risk controls.',
      'QPay may review, delay, reject or restrict transactions where required for security, compliance or legal reasons.',
      "Nigeria's regulatory framework specifically addresses payment-system risk, security, electronic payment channels and QR payments. CBN also announced baseline standards for automated AML/CFT/CPF monitoring solutions in 2026.",
    ],
  },
  {
    id: 'prohibited-use',
    title: '20. PROHIBITED USE',
    paragraphs: ['You must not use QPay to:'],
    list: ['commit fraud;', 'launder proceeds of crime;', 'finance terrorism;', 'evade sanctions;', 'impersonate another person;', 'operate an account using false identity information;', 'process transactions relating to unlawful goods or services;', "exploit technical vulnerabilities;", "interfere with QPay's infrastructure;", 'circumvent transaction or account limits;', 'artificially manipulate transactions;', 'misuse QR codes;', 'conduct transactions on behalf of another person where prohibited; or', 'engage in any activity prohibited by Nigerian law.'],
    paragraphsAfterList: ['QPay may restrict accounts associated with suspected prohibited activity.'],
  },
  {
    id: 'account-restrictions',
    title: '21. ACCOUNT RESTRICTIONS',
    paragraphs: ['QPay may temporarily restrict some or all account functionality where reasonably necessary because of:'],
    list: ['suspected fraud;', 'suspicious transactions;', 'incomplete KYC;', 'sanctions concerns;', 'security incidents;', 'regulatory requirements;', 'court orders;', 'requests from competent authorities;', 'disputes concerning account ownership;', 'breach of these Terms; or', 'risks to QPay, customers or payment partners.'],
    paragraphsAfterList: ['Where legally permitted, QPay will provide appropriate information regarding restrictions.'],
  },
  {
    id: 'suspension-termination',
    title: '22. SUSPENSION AND TERMINATION',
    paragraphs: ['You may request closure of your QPay account subject to outstanding transactions, investigations, obligations or regulatory retention requirements.', 'QPay may suspend or terminate your access where you materially breach these Terms, use QPay unlawfully, create unacceptable security or compliance risk, or where QPay is required to do so by law or a financial partner.', 'Closing an account does not eliminate obligations arising before closure.'],
  },
  {
    id: 'third-party-providers',
    title: '23. THIRD-PARTY SERVICE PROVIDERS',
    paragraphs: ['QPay relies on third-party providers to deliver portions of the QPay Services.', 'These may include:'],
    list: ['financial institutions;', 'payment processors;', 'banking infrastructure providers;', 'identity verification providers;', 'telecommunications providers;', 'cloud infrastructure providers;', 'fraud prevention providers; and', 'other technology providers.'],
    paragraphsAfterList: ["QPay currently uses Anchor for certain underlying account, ledger and payment infrastructure.", 'Use of certain services may therefore be subject to additional terms or requirements imposed by the relevant regulated provider.'],
  },
  {
    id: 'service-availability',
    title: '24. SERVICE AVAILABILITY',
    paragraphs: ['QPay aims to provide reliable access to its services but does not guarantee uninterrupted availability.', 'Services may temporarily become unavailable because of:'],
    list: ['maintenance;', 'internet outages;', 'telecommunications failures;', 'bank downtime;', 'NIP or payment network downtime;', 'third-party provider outages;', 'security incidents;', 'force majeure events; or', "circumstances outside QPay's reasonable control."],
    paragraphsAfterList: ['Where practical, QPay will take reasonable steps to restore affected services.'],
  },
  {
    id: 'privacy-data',
    title: '25. PRIVACY AND PERSONAL DATA',
    paragraphs: ["QPay processes personal information in accordance with its Privacy Policy and applicable Nigerian data protection requirements.", 'Personal information processed by QPay may include:'],
    list: ['identity information;', 'contact information;', 'date of birth;', 'residential address;', 'identification numbers;', 'account information;', 'device information;', 'IP address;', 'transaction information; and', 'information required for compliance and fraud prevention.'],
    paragraphsAfterList: ['QPay will implement appropriate technical and organisational measures designed to protect personal information.', "The Privacy Policy should separately address QPay's obligations under the Nigeria Data Protection Act 2023 and applicable guidance issued by the Nigeria Data Protection Commission."],
  },
  {
    id: 'electronic-communications',
    title: '26. ELECTRONIC COMMUNICATIONS',
    paragraphs: ['By creating a QPay account, you agree that QPay may provide agreements, disclosures, notices, statements, transaction information and other communications electronically, subject to applicable law.', 'Electronic communications may be delivered through:'],
    list: ['the QPay application;', 'push notifications;', 'email;', 'SMS; or', 'other electronic channels associated with your account.'],
    paragraphsAfterList: ['You are responsible for keeping your contact information current.', 'Your consent to electronic communications is further governed by the QPay Electronic Communications and E-Sign Consent Agreement.'],
  },
  {
    id: 'customer-support',
    title: '27. CUSTOMER SUPPORT',
    paragraphs: ["Customers may contact QPay through the support channels made available within the QPay application or through QPay's official support email.", "QPay's standard customer support hours are:", 'Monday to Friday, 9:00 AM to 5:00 PM WAT, excluding Nigerian public holidays.', 'The QPay platform may remain available outside customer support hours.'],
  },
  {
    id: 'complaints',
    title: '28. COMPLAINTS',
    paragraphs: ['If you experience a problem with QPay, you should first contact QPay Customer Support.', "QPay will record and investigate complaints in accordance with its complaints handling procedures and applicable requirements.", 'Where appropriate, complaints may be escalated internally or to the regulated financial institution responsible for the underlying service.', 'Customers may have additional escalation rights under applicable Nigerian financial services regulations.', "CBN's consumer-protection framework requires regulated financial institutions to maintain accessible complaints and redress mechanisms. CBN also provides an escalation mechanism where an eligible complaint against a regulated financial institution has not been resolved within the applicable timeframe."],
  },
  {
    id: 'intellectual-property',
    title: '29. INTELLECTUAL PROPERTY',
    paragraphs: ['QPay and its licensors retain all applicable intellectual property rights in the QPay platform, including its:'],
    list: ['software;', 'application;', 'designs;', 'branding;', 'trademarks;', 'logos;', 'interfaces;', 'documentation; and', 'proprietary technology.'],
    paragraphsAfterList: ['These Terms do not transfer ownership of QPay intellectual property to you.', 'You receive a limited, revocable, non-exclusive and non-transferable right to use the QPay application for its intended purpose.'],
  },
  {
    id: 'limitation-liability',
    title: '30. LIMITATION OF LIABILITY',
    paragraphs: ['To the extent permitted by applicable law, QPay will not be liable for indirect, incidental, consequential or special losses arising from circumstances outside QPay\'s reasonable control.', "Nothing in these Terms excludes or limits any liability that cannot legally be excluded or limited under Nigerian law.", 'Nothing in these Terms removes statutory rights available to consumers.'],
  },
  {
    id: 'your-responsibility',
    title: '31. YOUR RESPONSIBILITY',
    paragraphs: ['You are responsible for losses resulting from your fraudulent conduct, intentional misconduct or material breach of these Terms, subject to applicable law.', 'You are responsible for ensuring that information supplied to QPay is accurate and that payment details are checked before a transaction is authorised.'],
  },
  {
    id: 'changes-qpay',
    title: '32. CHANGES TO QPAY',
    paragraphs: ['QPay may introduce, modify, suspend or discontinue features where reasonably necessary.', 'Material changes affecting customers will be communicated where required by applicable law.', 'The availability of particular financial products may depend on regulatory approval, infrastructure partners, geographic location and account eligibility.'],
  },
  {
    id: 'changes-terms',
    title: '33. CHANGES TO THESE TERMS',
    paragraphs: ['QPay may update these Terms from time to time.', 'Where changes materially affect your rights or obligations, QPay will provide appropriate advance notice where required by law.', 'The latest Terms will be made available through the QPay application and/or QPay website.', 'The "Last Updated" date at the beginning of these Terms indicates when the Terms were most recently revised.'],
  },
  {
    id: 'international-expansion',
    title: '34. INTERNATIONAL EXPANSION',
    paragraphs: ['QPay currently provides its primary services within Nigeria.', 'QPay may expand into additional countries in the future.', 'Availability of QPay in another jurisdiction does not automatically mean that all Nigerian QPay products will be available in that jurisdiction.', 'Customers relocating outside Nigeria may only continue using regulated QPay financial services where QPay and its applicable partners are authorised to provide those services in the relevant jurisdiction.'],
  },
  {
    id: 'governing-law',
    title: '35. GOVERNING LAW',
    paragraphs: ['These Terms are governed by the laws of the Federal Republic of Nigeria, without prejudice to any mandatory consumer rights that may apply.', 'Any dispute arising from these Terms will be handled through the applicable complaints and dispute resolution procedures before further legal remedies are pursued where appropriate.'],
  },
  {
    id: 'severability',
    title: '36. SEVERABILITY',
    paragraphs: ['If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue in effect to the extent permitted by law.'],
  },
  {
    id: 'no-waiver',
    title: '37. NO WAIVER',
    paragraphs: ["If QPay does not immediately enforce a provision of these Terms, this does not constitute a waiver of QPay's right to enforce that provision later."],
  },
  {
    id: 'entire-agreement',
    title: '38. ENTIRE AGREEMENT',
    paragraphs: ["These Terms, together with QPay's:"],
    list: ['Privacy Policy', 'Electronic Communications and E-Sign Consent Agreement', 'Acceptable Use Policy', 'Complaints Policy', 'Merchant Terms, where applicable', 'and any other product-specific terms presented to you constitute the applicable agreement governing your use of QPay.'],
  },
  {
    id: 'contact-us',
    title: '39. CONTACT US',
    paragraphs: ['Questions, complaints or concerns regarding these Terms may be directed to:', 'QPay', 'Legal entity: MODULO TECHNOLOGIES LTD', 'RC Number: 9636999', 'Support Email: support@qpay-ng.com', 'Website: https://qpay-ng.com'],
  },
]

const legalLinkClass =
  'font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:text-slate-950'
const listClass = 'list-square space-y-3 pl-6'
const alphaListClass = 'list-[lower-alpha] space-y-3 pl-6'

function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-6 py-14 sm:px-8 md:px-12 md:py-16">
          <a
            href="/"
            className="w-fit rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            Back to Home
          </a>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Legal
            </p>
            <h1 className="text-4xl leading-tight text-slate-950 sm:text-5xl md:text-[3.5rem]">
              QPAY TERMS OF USE
            </h1>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              Effective date: May 20, 2026 · Last updated: May 20, 2026
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              These Terms govern your access to and use of the QPay mobile
              application, website, payment services and related products and
              services.
            </p>
            <a
              href="/qpay-terms-of-use.txt"
              download="qpay-terms-of-use.txt"
              className="mt-7 inline-flex w-fit items-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Download Terms of Use
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-6 py-12 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0 rounded-lg border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-12">
            <div className="space-y-10 text-[15px] leading-8 text-slate-700 sm:text-[16px] sm:leading-9">
              <p>
                These Terms of Use (&quot;Terms&quot;) govern your access to and use of
                the QPay mobile application, website, payment services and
                related products and services collectively referred to as the
                &quot;QPay Services.&quot;
              </p>
              <p>
                These Terms constitute a legally binding agreement between you
                and <strong>Modulo Technologies LTD</strong> (&quot;QPay&quot;, &quot;we&quot;,
                &quot;us&quot; or &quot;our&quot;).
              </p>
              <p>
                By creating a QPay account, accessing the QPay Services, or
                continuing to use the QPay Services, you confirm that you have
                read, understood and agreed to these Terms.
              </p>
              <p>
                If you do not agree to these Terms, you must not create or use
                a QPay account.
              </p>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl text-slate-950">{section.title}</h2>
                  <div className="mt-5 space-y-5">
                    {section.intro && <p>{section.intro}</p>}
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.list && (
                      <ul className={section.listType === 'alpha' ? alphaListClass : listClass}>
                        {section.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {section.paragraphsAfterList?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <p>
                For related information, see the{' '}
                <a href="/privacy-policy" className={legalLinkClass}>
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </article>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <h2 className="text-lg text-slate-950">Table of contents</h2>
            <nav aria-label="Terms of Use sections" className="mt-5">
              <ol className="space-y-3 text-xs leading-5 text-slate-600">
                {tocItems.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="transition-colors hover:text-slate-950">
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default TermsOfUsePage
