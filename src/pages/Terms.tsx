
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>Welcome to Dollar Keeper. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily access the materials on Dollar Keeper's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                <p className="mt-3">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Dollar Keeper at any time.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Course Purchases and Access</h2>
                <p>When you purchase a course on Dollar Keeper, you receive a non-exclusive, lifetime license to access the course content for your personal, non-commercial use. You may not share your account or course access with others.</p>
                <p className="mt-3">Dollar Keeper reserves the right to update course content or remove outdated content as necessary. While we strive to maintain all content indefinitely, we cannot guarantee that all courses will remain available forever.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Refund Policy</h2>
                <p>We offer a 30-day money-back guarantee on all course purchases. If you are not satisfied with your purchase, you can request a full refund within 30 days of the purchase date.</p>
                <p className="mt-3">To request a refund, contact our support team through the Contact page. Refunds will be processed within 5-7 business days.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Content Protection</h2>
                <p>All course content, including videos, PDFs, worksheets, and other materials, is protected by copyright law. You may not:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Download videos (unless specifically allowed)</li>
                  <li>Share or distribute course materials</li>
                  <li>Create derivative works based on our content</li>
                  <li>Use screen recording software to capture course videos</li>
                  <li>Sell or license any course materials to third parties</li>
                </ul>
                <p className="mt-3">Violation of these restrictions may result in termination of your account and potential legal action.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer</h2>
                <p>The materials on Dollar Keeper's website are provided on an 'as is' basis. Dollar Keeper makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p className="mt-3">Trading and investing involve risk. The educational content provided is for informational purposes only and should not be considered financial advice. We do not guarantee any specific results from following our trading strategies or courses.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Limitations</h2>
                <p>In no event shall Dollar Keeper or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Dollar Keeper or a Dollar Keeper authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Revisions and Errata</h2>
                <p>The materials appearing on Dollar Keeper's website could include technical, typographical, or photographic errors. Dollar Keeper does not warrant that any of the materials on its website are accurate, complete or current. Dollar Keeper may make changes to the materials contained on its website at any time without notice.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
                <p>Dollar Keeper reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p className="mt-3">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-secondary hover:underline">Contact Page</a>.</p>
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

export default Terms;
