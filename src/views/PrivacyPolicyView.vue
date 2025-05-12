<template>
  <div class="privacy-policy-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link> / <span>Privacy Policy</span>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="policy-content">
      <div class="container">
        <div class="policy-container">
          <div class="last-updated">
            <p>Last Updated: May 1, 2023</p>
          </div>
          
          <div class="policy-section">
            <h2>Introduction</h2>
            <p>FLAZ Technical Services LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            <p>Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.</p>
          </div>
          
          <div class="policy-section">
            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information or services</li>
              <li>Contact us through our website or by email</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </div>
          
          <div class="policy-section">
            <h2>Automatically Collected Information</h2>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time and date of your visit</li>
              <li>Referring website</li>
              <li>Other statistics</li>
            </ul>
            <p>We collect this information using cookies and similar technologies. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </div>
          
          <div class="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our website and services</li>
              <li>Process and fulfill your requests</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          
          <div class="policy-section">
            <h2>Disclosure of Your Information</h2>
            <p>We may share your personal information in the following situations:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
            </ul>
          </div>
          
          <div class="policy-section">
            <h2>Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </div>
          
          <div class="policy-section">
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
          </div>
          
          <div class="policy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </div>
          
          <div class="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>FLAZ Technical Services LLC<br>
            Office No. 231, 2nd Floor, Al Barsha Business Center, Al Barsha 1<br>
            Dubai, UAE<br>
            Email: privacy@flaztechnical.com<br>
            Phone: +971-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyView',
  mounted() {
    document.title = 'Privacy Policy | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* Privacy Policy page styles will be added here */
</style>
