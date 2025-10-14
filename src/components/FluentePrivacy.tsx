import React from 'react'

export default function Privacy() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: October 14, 2025</p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            This Privacy Policy describes Our policies and procedures regarding Your information when You use the
            Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following
            conditions. The following definitions shall have the same meaning regardless of whether they appear
            in singular or in plural.
          </p>

          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>

          <ul>
            <li>
              <strong>Account</strong> means a unique account created for You to access our Service or parts of our
              Service.
            </li>
            <li>
              <strong>Application</strong> refers to Fluente, the software program provided by the Company.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
              refers to Fluente.
            </li>
            <li>
              <strong>Country</strong> refers to: Brazil
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or
              a digital tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable
              individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Application.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other
              legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2>Our Commitment to Your Privacy</h2>
          <div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              We do not collect, store, or share any of Your personal data.
            </p>
          </div>

          <p>
            Fluente is designed with privacy as a priority. The Application operates entirely on Your Device without
            collecting, transmitting, or storing any personally identifiable information or usage data.
          </p>

          <h2>What We Don't Collect</h2>
          <p>We do not collect:</p>
          <ul>
            <li>Personal identification information (such as name, email address, or phone number)</li>
            <li>Device information (such as IP address, device identifiers, or operating system details)</li>
            <li>Usage data (such as features used, time spent in the app, or interaction patterns)</li>
            <li>Location data</li>
            <li>Any other form of personal or non-personal information</li>
          </ul>

          <h2>Payment Information</h2>
          <p>
            Fluente is available for purchase in the App Store for $1.99. All payment transactions are processed
            directly by Apple through the App Store. We do not have access to or collect any payment information,
            credit card details, or purchase history. Please refer to Apple's Privacy Policy for information about
            how they handle payment data.
          </p>

          <h2>Data Storage</h2>
          <p>
            Since we do not collect any data, there is no data stored on our servers. All app functionality and any
            user preferences or content You create remain solely on Your Device.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our Application does not integrate with any third-party services, analytics tools, or advertising
            networks that would collect Your data.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Service is safe for users of all ages, including children under the age of 13. Since we do not
            collect any data, there is no personally identifiable information collected from anyone, including
            children.
          </p>

          <h2>Security</h2>
          <p>
            Since we do not collect, transmit, or store any personal data, there are no data security risks
            associated with using our Service. Your information remains entirely on Your Device under Your control.
          </p>

          <h2>Links to Other Websites</h2>
          <p>
            Our Service may contain links to other websites that are not operated by Us. If You click on a third
            party link, You will be directed to that third party's site. We strongly advise You to review the Privacy
            Policy of every site You visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the content, privacy policies or practices of
            any third party sites or services.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
            Policy are effective when they are posted on this page.
          </p>

          <h2>Your Rights</h2>
          <p>
            Since we do not collect any personal data, there is no data to access, modify, or delete. You maintain
            complete control over any information on Your Device simply by managing the Application settings or
            uninstalling the Application.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <ul>
            <li>
              By email:{' '}
              <a href="mailto:e.enrico2005@gmail.com" className="text-blue-600 hover:underline">
                e.enrico2005@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center italic text-gray-600 dark:text-gray-400">
            <p>This privacy policy reflects our commitment to protecting your privacy by simply not collecting any data at all.</p>
          </div>
        </article>
      </div>
    </>
  )
}