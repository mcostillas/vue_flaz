<template>
  <div class="terms-of-service-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Terms of Service</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link> / <span>Terms of Service</span>
        </div>
      </div>
    </section>

    <!-- Terms of Service Content -->
    <section class="policy-content">
      <div class="container">
        <div class="policy-container">
          <div class="last-updated">
            <p>Last Updated: May 1, 2023</p>
          </div>
          
          <div class="policy-section">
            <h2>Introduction</h2>
            <p>Welcome to FLAZ Technical Services LLC. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.</p>
          </div>
          
          <div class="policy-section">
            <h2>Services</h2>
            <p>FLAZ Technical Services LLC provides various technical services, including but not limited to maintenance services, fitout solutions, electrical services, plumbing services, painting services, and HVAC solutions. The specific services provided will be outlined in a separate agreement or proposal.</p>
            <p>We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice or liability.</p>
          </div>
          
          <div class="policy-section">
            <h2>Service Requests and Appointments</h2>
            <p>You may request our services through our website, by phone, or by email. We will make reasonable efforts to accommodate your requested service date and time, but we cannot guarantee availability for specific times or dates.</p>
            <p>If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice. Failure to provide adequate notice may result in a cancellation fee.</p>
          </div>
          
          <div class="policy-section">
            <h2>Pricing and Payment</h2>
            <p>The prices for our services will be provided in a separate proposal or agreement. Prices are subject to change without notice.</p>
            <p>Payment terms will be specified in the proposal or agreement. Unless otherwise stated, payment is due upon completion of services. We accept various payment methods, including credit cards, bank transfers, and cash.</p>
            <p>Late payments may be subject to interest charges at the maximum rate permitted by law.</p>
          </div>
          
          <div class="policy-section">
            <h2>Warranties and Guarantees</h2>
            <p>We warrant that our services will be performed in a professional manner and in accordance with industry standards. For specific services, we may provide additional warranties as outlined in the service agreement.</p>
            <p>Except as expressly provided in these Terms or in a separate agreement, we make no warranties, express or implied, regarding our services.</p>
          </div>
          
          <div class="policy-section">
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, FLAZ Technical Services LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul>
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our website</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website</li>
            </ul>
            <p>Our total liability for any claims arising under these Terms shall not exceed the amount you paid for the services that are the subject of the claim.</p>
          </div>
          
          <div class="policy-section">
            <h2>Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless FLAZ Technical Services LLC, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.</p>
          </div>
          
          <div class="policy-section">
            <h2>Intellectual Property</h2>
            <p>The content on our website, including but not limited to text, graphics, logos, images, and software, is the property of FLAZ Technical Services LLC and is protected by copyright, trademark, and other intellectual property laws.</p>
            <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
          </div>
          
          <div class="policy-section">
            <h2>Website Use</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use our website in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Use our website to transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our website, the server on which our website is stored, or any server, computer, or database connected to our website</li>
              <li>Attack our website via a denial-of-service attack or a distributed denial-of-service attack</li>
            </ul>
          </div>
          
          <div class="policy-section">
            <h2>Termination</h2>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
            <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </div>
          
          <div class="policy-section">
            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
          </div>
          
          <div class="policy-section">
            <h2>Changes to These Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date at the top of these Terms.</p>
            <p>You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.</p>
          </div>
          
          <div class="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>FLAZ Technical Services LLC<br>
            Office No. 231, 2nd Floor, Al Barsha Business Center, Al Barsha 1<br>
            Dubai, UAE<br>
            Email: legal@flaztechnical.com<br>
            Phone: +971-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TermsOfServiceView',
  mounted() {
    document.title = 'Terms of Service | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* Terms of Service page styles will be added here */
</style>
