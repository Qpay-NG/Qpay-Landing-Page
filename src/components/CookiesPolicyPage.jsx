import { useEffect } from 'react'

const legalLinkClass =
  'font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:text-slate-950'

const policySections = [
  {
    title: 'Interpretation',
    paragraphs: [
      'The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
    ],
  },
  {
    title: 'Definitions',
    paragraphs: ['For the purposes of this Cookies Policy:'],
    definitions: [
      {
        term: 'Company',
        text: '(referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Qpay.',
      },
      {
        term: 'Cookies',
        text: 'means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.',
      },
      {
        term: 'Website',
        text: 'refers to Qpay-NG, accessible from qpay-ng.com.',
      },
      {
        term: 'You',
        text: 'means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.',
      },
    ],
  },
  {
    title: 'Type of Cookies We Use',
    paragraphs: [
      'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.',
      'Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.',
      'We use both session and persistent Cookies for the purposes set out below:',
    ],
  },
]

const browserLinks = [
  {
    name: 'Chrome',
    href: 'https://support.google.com/accounts/answer/32050',
    label: 'Google help page',
  },
  {
    name: 'Microsoft Edge',
    href: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
    label: 'Microsoft help page',
  },
  {
    name: 'Firefox',
    href: 'https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored',
    label: 'Mozilla help page',
  },
  {
    name: 'Safari',
    href: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
    label: 'Apple help page',
  },
]

function CookiesPolicyPage() {
  useEffect(() => {
    document.title = 'Cookies Policy | QPay NG'

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        'Read the QPay NG Cookies Policy to understand how cookies are used on qpay-ng.com and the choices available to website visitors.'
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
              Cookies Policy
            </h1>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              Last updated: May 20, 2026
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              This Cookies Policy explains what Cookies are and how We use them.
              You should read this policy so You can understand what type of
              cookies We use, or the information We collect using Cookies and
              how that information is used.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-6 py-12 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0 rounded-lg border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8 md:px-12 md:py-12">
            <div className="space-y-8 text-[15px] leading-8 text-slate-700 sm:text-[16px] sm:leading-9">
              <p>
                This Cookies Policy has been created with the help of the
                Cookies Policy Generator.
              </p>
              <p>
                Cookies do not typically contain any information that
                personally identifies a user, but personal information that We
                store about You may be linked to the information stored in and
                obtained from Cookies. For further information on how We use,
                store and keep your personal data secure, see our{' '}
                <a href="/privacy-policy" className={legalLinkClass}>
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                We do not store sensitive personal information, such as mailing
                addresses, account passwords, etc. in the Cookies We use.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl text-slate-950">
                    Interpretation and Definitions
                  </h2>
                  <div className="mt-6 space-y-10">
                    {policySections.map((section) => (
                      <div key={section.title}>
                        <h3 className="text-xl text-slate-900">
                          {section.title}
                        </h3>
                        <div className="mt-4 space-y-5">
                          {section.paragraphs?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {section.definitions?.map((definition) => (
                            <p key={definition.term}>
                              <strong className="font-semibold text-slate-950">
                                {definition.term}
                              </strong>{' '}
                              {definition.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl text-slate-950">
                    The Use of Cookies
                  </h2>

                  <div className="mt-6 space-y-8">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-xl text-slate-900">
                        Necessary / Essential Cookies
                      </h3>
                      <p className="mt-4">
                        <strong className="font-semibold text-slate-950">
                          Type:
                        </strong>{' '}
                        Session Cookies
                      </p>
                      <p>
                        <strong className="font-semibold text-slate-950">
                          Administered by:
                        </strong>{' '}
                        Us
                      </p>
                      <p>
                        <strong className="font-semibold text-slate-950">
                          Purpose:
                        </strong>{' '}
                        These Cookies are essential to provide You with services
                        available through the Website and to enable You to use
                        some of its features. They help to authenticate users
                        and prevent fraudulent use of user accounts. Without
                        these Cookies, the services that You have asked for
                        cannot be provided, and We only use these Cookies to
                        provide You with those services.
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-xl text-slate-900">
                        Functionality Cookies
                      </h3>
                      <p className="mt-4">
                        <strong className="font-semibold text-slate-950">
                          Type:
                        </strong>{' '}
                        Persistent Cookies
                      </p>
                      <p>
                        <strong className="font-semibold text-slate-950">
                          Administered by:
                        </strong>{' '}
                        Us
                      </p>
                      <p>
                        <strong className="font-semibold text-slate-950">
                          Purpose:
                        </strong>{' '}
                        These Cookies allow Us to remember choices You make when
                        You use the Website, such as remembering your login
                        details or language preference. The purpose of these
                        Cookies is to provide You with a more personal
                        experience and to avoid You having to re-enter your
                        preferences every time You use the Website.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl text-slate-950">
                    Your Choices Regarding Cookies
                  </h2>
                  <div className="mt-6 space-y-5">
                    <p>
                      If You prefer to avoid the use of Cookies on the Website,
                      first You must disable the use of Cookies in your browser
                      and then delete the Cookies saved in your browser
                      associated with the Website. You may use this option for
                      preventing the use of Cookies at any time.
                    </p>
                    <p>
                      If You do not accept Our Cookies, You may experience some
                      inconvenience in your use of the Website and some features
                      may not function properly.
                    </p>
                    <p>
                      If You&apos;d like to delete Cookies or instruct your web
                      browser to delete or refuse Cookies, please visit the help
                      pages of your web browser.
                    </p>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                      <ul className="space-y-4">
                        {browserLinks.map((browser) => (
                          <li key={browser.name}>
                            For the {browser.name} web browser, please visit{' '}
                            <a
                              href={browser.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={legalLinkClass}
                            >
                              this page
                            </a>{' '}
                            from {browser.label.split(' ')[0]}.
                          </li>
                        ))}
                        <li>
                          For any other web browser, please visit your web
                          browser&apos;s official web pages.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl text-slate-950">
                    Changes to this Cookies Policy
                  </h2>
                  <p className="mt-5">
                    We may update this Cookies Policy from time to time. The
                    &quot;Last updated&quot; date at the top indicates when it
                    was last revised.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl text-slate-950">Contact Us</h2>
                  <p className="mt-5">
                    If you have any questions about this Cookies Policy, You can
                    contact us:
                  </p>
                  <p className="mt-3">
                    By email:{' '}
                    <a
                      href="mailto:support@qpay-ng.com"
                      className={legalLinkClass}
                    >
                      support@qpay-ng.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Quick Summary
              </p>
              <ul className="mt-4 space-y-5 text-sm leading-8 text-slate-700">
                <li>We use session and persistent cookies on qpay-ng.com.</li>
                <li>Necessary cookies help the website work properly.</li>
                <li>Functionality cookies remember your choices and preferences.</li>
                <li>You can disable or delete cookies through your browser settings.</li>
                <li>
                  Questions about this policy can be sent to
                  {' '}
                  <a
                    href="mailto:support@qpay-ng.com"
                    className="font-semibold text-customOrange"
                  >
                    support@qpay-ng.com
                  </a>
                  .
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default CookiesPolicyPage
