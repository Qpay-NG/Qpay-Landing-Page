import { useEffect } from 'react'

const tocItems = [
  { id: 'infocollect', label: '1. WHAT INFORMATION DO WE COLLECT?' },
  { id: 'infouse', label: '2. HOW DO WE PROCESS YOUR INFORMATION?' },
  {
    id: 'whoshare',
    label: '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
  },
  {
    id: 'cookies',
    label: '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
  },
  { id: 'inforetain', label: '5. HOW LONG DO WE KEEP YOUR INFORMATION?' },
  { id: 'infosafe', label: '6. HOW DO WE KEEP YOUR INFORMATION SAFE?' },
  { id: 'privacyrights', label: '7. WHAT ARE YOUR PRIVACY RIGHTS?' },
  { id: 'DNT', label: '8. CONTROLS FOR DO-NOT-TRACK FEATURES' },
  { id: 'policyupdates', label: '9. DO WE MAKE UPDATES TO THIS NOTICE?' },
  { id: 'contact', label: '10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
  {
    id: 'request',
    label:
      '11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
  },
]

const legalLinkClass =
  'font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:text-slate-950'

const listClass = 'list-square space-y-3 pl-6'

function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | QPay NG'

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        'Read the QPay NG Privacy Policy to understand how personal information is collected, used, stored, and shared on qpay-ng.com and related services.'
      )
    }
  }, [])

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
              PRIVACY POLICY
            </h1>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              Last updated: May 20, 2026
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              This Privacy Notice explains how QPay-NG may access, collect,
              store, use, and share your personal information when you use our
              website, mobile application, and related services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-6 py-12 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0 rounded-lg border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-12">
            <div className="space-y-8 text-[15px] leading-8 text-slate-700 sm:text-[16px] sm:leading-9">
              <p>
                This Privacy Notice for <strong>QPay-NG</strong> ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:
              </p>

              <ul className={listClass}>
                <li>
                  Visit our website at{' '}
                  <a
                    href="https://qpay-ng.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={legalLinkClass}
                  >
                    https://qpay-ng.com
                  </a>{' '}
                  or any website of ours that links to this Privacy Notice
                </li>
                <li>
                  Download and use our mobile application (QPay-NG), or any
                  other application of ours that links to this Privacy Notice
                </li>
                <li>
                  Engage with us in other related ways, including any marketing
                  or events
                </li>
              </ul>

              <p>
                <strong>Questions or concerns?</strong> Reading this Privacy
                Notice will help you understand your privacy rights and choices.
                We are responsible for making decisions about how your personal
                information is processed. If you do not agree with our policies
                and practices, please do not use our Services. If you still
                have any questions or concerns, please contact us at{' '}
                <a href="mailto:support@qpay-ng.com" className={legalLinkClass}>
                  support@qpay-ng.com
                </a>
                .
              </p>

              <section id="summary" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  Summary of Key Points
                </h2>
                <div className="mt-6 space-y-5">
                  <p>
                    <strong>
                      <em>
                        This summary provides key points from our Privacy
                        Notice, but you can find out more details about any of
                        these topics by clicking the link following each key
                        point or by using our{' '}
                      </em>
                    </strong>
                    <a href="#toc" className={legalLinkClass}>
                      <strong>
                        <em>table of contents</em>
                      </strong>
                    </a>
                    <strong>
                      <em>
                        {' '}
                        below to find the section you are looking for.
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      What personal information do we process?
                    </strong>{' '}
                    We may process personal information depending on how you
                    interact with us and the Services. Learn more about{' '}
                    <a href="#personalinfo" className={legalLinkClass}>
                      personal information you disclose to us
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      Do we process any sensitive personal information?
                    </strong>{' '}
                    Some of the information may be considered 'special' or
                    'sensitive' in certain jurisdictions, for example your
                    racial or ethnic origins, sexual orientation, and religious
                    beliefs. We may process sensitive personal information when
                    necessary with your consent or as otherwise permitted by
                    applicable law. Learn more about{' '}
                    <a href="#sensitiveinfo" className={legalLinkClass}>
                      sensitive information we process
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      Do we collect any information from third parties?
                    </strong>{' '}
                    We do not collect any information from third parties.
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      How do we process your information?
                    </strong>{' '}
                    We process your information to provide, improve, and
                    administer our Services, communicate with you, for security
                    and fraud prevention, and to comply with law. We may also
                    process your information for other purposes with your
                    consent. We process your information only when we have a
                    valid legal reason to do so. Learn more about{' '}
                    <a href="#infouse" className={legalLinkClass}>
                      how we process your information
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                    In what situations and with which parties do we share
                    personal information?
                    </strong>{' '}
                    We may share information in specific situations and with
                    specific third parties. Learn more about{' '}
                    <a href="#whoshare" className={legalLinkClass}>
                      when and with whom we share your personal information
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      How do we keep your information safe?
                    </strong>{' '}
                    We have adequate organisational and technical processes and
                    procedures in place to protect your personal information.
                    However, no electronic transmission over the internet or
                    information storage technology can be guaranteed to be 100%
                    secure, so we cannot promise or guarantee that hackers,
                    cybercriminals, or other unauthorised third parties will
                    not be able to defeat our security and improperly collect,
                    access, steal, or modify your information. Learn more
                    about{' '}
                    <a href="#infosafe" className={legalLinkClass}>
                      how we keep your information safe
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      What are your rights?
                    </strong>{' '}
                    Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights
                    regarding your personal information. Learn more about{' '}
                    <a href="#privacyrights" className={legalLinkClass}>
                      your privacy rights
                    </a>
                    .
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      How do you exercise your rights?
                    </strong>{' '}
                    The easiest way to exercise your rights is by submitting a{' '}
                    <a
                      href="https://app.termly.io/dsar/effe54f8-c98d-42e2-a3ce-518796d7fe73"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={legalLinkClass}
                    >
                      data subject access request
                    </a>{' '}
                    or by contacting us directly.
                  </p>
                  <p>
                    Want to learn more about what we do with any information we
                    collect?{' '}
                    <a href="#toc" className={legalLinkClass}>
                      Review the Privacy Notice in full
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="toc" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">Table of Contents</h2>
                <div className="mt-6 grid gap-4">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className={legalLinkClass}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>

              <section id="infocollect" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  1. What Information Do We Collect?
                </h2>
                <div id="personalinfo" className="mt-5 scroll-mt-24">
                  <h3 className="text-xl text-slate-900">
                    Personal information you disclose to us
                  </h3>
                  <p className="mt-4">
                    <strong className="text-slate-950">In Short:</strong> We
                    collect personal information that you provide to us.
                  </p>
                  <p>
                    We collect personal information that you voluntarily provide
                    when you register on the Services, express an interest in
                    obtaining information about us or our products and Services,
                    participate in activities on the Services, or otherwise
                    contact us.
                  </p>
                  <p>
                    <strong className="text-slate-950">
                      Personal Information Provided by You.
                    </strong>{' '}
                    The personal information that we collect depends on the
                    context of your interactions with us and the Services, the
                    choices you make, and the products and features you use.
                    The personal information we collect may include the
                    following:
                  </p>
                  <ul className="list-square space-y-3 pl-6">
                    <li>names</li>
                    <li>phone numbers</li>
                    <li>email addresses</li>
                    <li>passwords</li>
                    <li>mailing addresses</li>
                    <li>contact or authentication data</li>
                    <li>debit or credit card numbers</li>
                    <li>contact preferences</li>
                    <li>billing addresses</li>
                  </ul>
                </div>

                <div id="sensitiveinfo" className="mt-8 scroll-mt-24">
                  <h3 className="text-xl text-slate-900">Sensitive Information</h3>
                  <p className="mt-4">
                    When necessary, with your consent or as otherwise permitted
                    by applicable law, we process the following categories of
                    sensitive information:
                  </p>
                  <ul className="list-square space-y-3 pl-6">
                    <li>social security numbers or other government identifiers</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl text-slate-900">Payment Data</h3>
                  <p className="mt-4">
                    We may collect data necessary to process your payment if you
                    choose to make purchases, such as your payment instrument
                    number, and the security code associated with your payment
                    instrument. All payment data is handled and stored by
                    Paystack and Monnify. You may find their privacy notice
                    links here:
                  </p>
                  <ul className="list-square space-y-3 pl-6">
                    <li>
                      <a
                        href="https://paystack.com/privacy/merchant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={legalLinkClass}
                      >
                        https://paystack.com/privacy/merchant
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://monnify.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={legalLinkClass}
                      >
                        https://monnify.com/privacy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl text-slate-900">Application Data</h3>
                  <p className="mt-4">
                    If you use our application, we may collect the following
                    information if you choose to provide us with access or
                    permission:
                  </p>
                  <ul className="list-square space-y-3 pl-6">
                    <li>
                      <strong className="text-slate-950">
                        Mobile Device Data.
                      </strong>{' '}
                      We automatically collect device information such as your
                      mobile device ID, model, manufacturer, operating system,
                      version information, browser type and version, hardware
                      model, service provider, IP address, phone network,
                      platform, unique device ID, and information about the
                      features of our application you accessed.
                    </li>
                    <li>
                      <strong className="text-slate-950">
                        Push Notifications.
                      </strong>{' '}
                      We may request to send you push notifications regarding
                      your account or certain features of the application. If
                      you wish to opt out, you may turn them off in your device
                      settings.
                    </li>
                  </ul>
                  <p>
                    This information is primarily needed to maintain the
                    security and operation of our application, troubleshoot
                    issues, and support internal analytics and reporting.
                  </p>
                  <p>
                    All personal information that you provide to us must be
                    true, complete, and accurate, and you must notify us of any
                    changes to such personal information.
                  </p>
                </div>
              </section>

              <section id="infouse" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  2. How Do We Process Your Information?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> We
                  process your information to provide, improve, and administer
                  our Services, communicate with you, for security and fraud
                  prevention, and to comply with law. We may also process your
                  information for other purposes with your consent.
                </p>
                <p>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
                <ul className="list-square space-y-3 pl-6">
                  <li>
                    <strong className="text-slate-950">
                      To facilitate account creation and authentication and
                      otherwise manage user accounts.
                    </strong>{' '}
                    We may process your information so you can create and log
                    in to your account, as well as keep your account in working
                    order.
                  </li>
                  <li>
                    <strong className="text-slate-950">
                      To deliver and facilitate delivery of services to the
                      user.
                    </strong>{' '}
                    We may process your information to provide you with the
                    requested service.
                  </li>
                  <li>
                    <strong className="text-slate-950">
                      To respond to user inquiries and offer support.
                    </strong>{' '}
                    We may process your information to respond to your
                    inquiries and solve any potential issues you might have
                    with the requested service.
                  </li>
                  <li>
                    <strong className="text-slate-950">
                      To protect our Services.
                    </strong>{' '}
                    We may process your information as part of our efforts to
                    keep our Services safe and secure, including fraud
                    monitoring and prevention.
                  </li>
                  <li>
                    <strong className="text-slate-950">
                      To comply with our legal obligations.
                    </strong>{' '}
                    We may process your information to comply with legal
                    obligations, respond to legal requests, and exercise,
                    establish, or defend our legal rights.
                  </li>
                </ul>
              </section>

              <section id="whoshare" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  3. When and With Whom Do We Share Your Personal Information?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> We may
                  share information in specific situations described in this
                  section and/or with the following third parties.
                </p>
                <p>
                  We may need to share your personal information in the
                  following situations:
                </p>
                <ul className="list-square space-y-3 pl-6">
                  <li>
                    <strong className="text-slate-950">Business Transfers.</strong>{' '}
                    We may share or transfer your information in connection
                    with, or during negotiations of, any merger, sale of
                    company assets, financing, or acquisition of all or a
                    portion of our business to another company.
                  </li>
                </ul>
              </section>

              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  4. Do We Use Cookies and Other Tracking Technologies?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> We may
                  use cookies and other tracking technologies to collect and
                  store your information.
                </p>
                <p>
                  We may use cookies and similar tracking technologies (like
                  web beacons and pixels) to gather information when you
                  interact with our Services. Some online tracking technologies
                  help us maintain the security of our Services and your
                  account, prevent crashes, fix bugs, save your preferences,
                  and assist with basic site functions.
                </p>
                <p>
                  We also permit third parties and service providers to use
                  online tracking technologies on our Services for analytics and
                  advertising, including to help manage and display
                  advertisements, to tailor advertisements to your interests,
                  or to send abandoned shopping cart reminders (depending on
                  your communication preferences).
                </p>
                <p>
                  Specific information about how we use such technologies and
                  how you can refuse certain cookies is set out in our Cookie
                  Notice:{' '}
                  <a href="/cookies-policy" className={legalLinkClass}>
                    https://qpay-ng.com/cookies-policy
                  </a>
                  .
                </p>
              </section>

              <section id="inforetain" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  5. How Long Do We Keep Your Information?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> We keep
                  your information for as long as necessary to fulfil the
                  purposes outlined in this Privacy Notice unless otherwise
                  required by law.
                </p>
                <p>
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this Privacy Notice,
                  unless a longer retention period is required or permitted by
                  law, such as for tax, accounting, or other legal
                  requirements.
                </p>
                <p>
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymise
                  it, or, if this is not possible, then we will securely store
                  it and isolate it from any further processing until deletion
                  is possible.
                </p>
              </section>

              <section id="infosafe" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  6. How Do We Keep Your Information Safe?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> We aim
                  to protect your personal information through a system of
                  organisational and technical security measures.
                </p>
                <p>
                  We have implemented appropriate and reasonable technical and
                  organisational security measures designed to protect the
                  security of any personal information we process. However, no
                  electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorised third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information.
                </p>
              </section>

              <section id="privacyrights" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  7. What Are Your Privacy Rights?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> You may
                  review, change, or terminate your account at any time,
                  depending on your country, province, or state of residence.
                </p>
                <p id="withdrawconsent" className="scroll-mt-24">
                  <strong className="text-slate-950">
                    Withdrawing your consent:
                  </strong>{' '}
                  If we are relying on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time by contacting us using the details provided in the{' '}
                  <a href="#contact" className={legalLinkClass}>
                    contact section
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-slate-950">
                    Opting out of marketing and promotional communications:
                  </strong>{' '}
                  You can unsubscribe from our marketing and promotional
                  communications at any time by using unsubscribe links, STOP or
                  UNSUBSCRIBE replies where applicable, or by contacting us
                  directly.
                </p>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl text-slate-900">Account Information</h3>
                  <p className="mt-3">
                    If you would at any time like to review or change the
                    information in your account or terminate your account, you
                    can:
                  </p>
                  <ul className="list-square space-y-3 pl-6">
                    <li>Log in to your account settings and update your user account.</li>
                    <li>Contact us using the contact information provided.</li>
                  </ul>
                  <p>
                    Upon your request to terminate your account, we will
                    deactivate or delete your account and information from our
                    active databases, subject to lawful retention needs.
                  </p>
                </div>
                <p className="mt-6">
                  <strong className="text-slate-950">
                    Cookies and similar technologies:
                  </strong>{' '}
                  Most web browsers are set to accept cookies by default. If
                  you prefer, you can usually choose to set your browser to
                  remove cookies and to reject cookies. For further
                  information, please see our Cookie Notice:{' '}
                  <a href="/cookies-policy" className={legalLinkClass}>
                    https://qpay-ng.com/cookies-policy
                  </a>
                  .
                </p>
                <p>
                  If you have questions or comments about your privacy rights,
                  you may email us at{' '}
                  <a href="mailto:support@qpay-ng.com" className={legalLinkClass}>
                    support@qpay-ng.com
                  </a>
                  .
                </p>
              </section>

              <section id="DNT" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  8. Controls for Do-Not-Track Features
                </h2>
                <p className="mt-6">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (DNT) feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected.
                </p>
                <p>
                  At this stage, no uniform technology standard for recognising
                  and implementing DNT signals has been finalised. As such, we
                  do not currently respond to DNT browser signals or any other
                  mechanism that automatically communicates your choice not to
                  be tracked online.
                </p>
              </section>

              <section id="policyupdates" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  9. Do We Make Updates to This Notice?
                </h2>
                <p className="mt-6">
                  <strong className="text-slate-950">In Short:</strong> Yes, we
                  will update this notice as necessary to stay compliant with
                  relevant laws.
                </p>
                <p>
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated revised date
                  at the top of this Privacy Notice. If we make material
                  changes, we may notify you either by prominently posting a
                  notice or by directly sending you a notification.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  10. How Can You Contact Us About This Notice?
                </h2>
                <p className="mt-5">
                  If you have questions or comments about this notice, you may
                  email us at{' '}
                  <a href="mailto:support@qpay-ng.com" className={legalLinkClass}>
                    support@qpay-ng.com
                  </a>{' '}
                  or contact us by post at:
                </p>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-slate-800">
                  <p>QPay-NG</p>
                  <p>No 20 Aderigbigbe Onike, Yaba, Lagos</p>
                  <p>Yaba, Lagos 100213</p>
                  <p>Nigeria</p>
                </div>
              </section>

              <section id="request" className="scroll-mt-24">
                <h2 className="text-2xl text-slate-950">
                  11. How Can You Review, Update, or Delete the Data We Collect
                  From You?
                </h2>
                <p className="mt-6">
                  You have the right to request access to the personal
                  information we collect from you, details about how we have
                  processed it, correct inaccuracies, or delete your personal
                  information. You may also have the right to withdraw your
                  consent to our processing of your personal information. These
                  rights may be limited in some circumstances by applicable law.
                </p>
                <p>
                  To request to review, update, or delete your personal
                  information, please fill out and submit a{' '}
                  <a
                    href="https://app.termly.io/dsar/effe54f8-c98d-42e2-a3ce-518796d7fe73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={legalLinkClass}
                  >
                    data subject access request
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                On This Page
              </p>
              <div className="mt-4 grid gap-4 text-sm leading-7">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-slate-700 transition-colors hover:text-slate-950"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-8 text-slate-700">
                Need help? Email{' '}
                <a href="mailto:support@qpay-ng.com" className={legalLinkClass}>
                  support@qpay-ng.com
                </a>{' '}
                or review our{' '}
                <a href="/cookies-policy" className={legalLinkClass}>
                  Cookies Policy
                </a>
                .
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
