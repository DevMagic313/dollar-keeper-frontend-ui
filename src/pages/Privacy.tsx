
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>At Dollar Keeper, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or purchase our courses.</p>
                <p className="mt-3">Please read this privacy policy carefully. If you do not agree with our policies and practices, you should not use our website. By accessing or using our website, you agree to this privacy policy.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p>We collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Personal information: Name, email address, billing address, payment details</li>
                  <li>Usage data: Information about how you use our website and courses</li>
                  <li>Device information: IP address, browser type, operating system</li>
                  <li>Cookies and tracking technologies: Information stored on your device that helps us improve user experience</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Collect Information</h2>
                <p>We collect information from you in several ways:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>When you register on our website or create an account</li>
                  <li>When you purchase a course</li>
                  <li>When you subscribe to our newsletter</li>
                  <li>When you contact our support team</li>
                  <li>When you respond to surveys or questionnaires</li>
                  <li>When you interact with our website (through cookies and similar technologies)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
                <p>We use the information we collect about you for various purposes, including to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your purchases and manage your account</li>
                  <li>Send you important information about your courses</li>
                  <li>Improve our website and course offerings</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send promotional emails about new courses or features (if you have opted in)</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.</p>
                <p className="mt-3">While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Services</h2>
                <p>We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.</p>
                <p className="mt-3">These third-party service providers include:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Email service providers</li>
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Customer support platforms</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Similar Technologies</h2>
                <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</p>
                <p className="mt-3">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Your Data Protection Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to correct inaccurate or incomplete data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your data</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, please contact us through our Contact page.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p>Our service is not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the bottom of this Privacy Policy.</p>
                <p className="mt-3">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-secondary hover:underline">Contact Page</a>.</p>
              </section>
              
              <div className="pt-4">
                <p className="text-gray-400 text-sm">Last updated: May 5, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
