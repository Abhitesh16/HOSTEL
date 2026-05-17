import React from 'react';
import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Privacy Policy & Terms of Use</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>
            This Website is the property of Assam University, Assam, India.
          </p>

          <p>
            Though all efforts have been made to ensure the accuracy of the content on this website, the same should not be constructed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Assam University, Assam and/or other source(s), and to obtain appropriate professional advice.
          </p>

          <p>
            Under no circumstances will Assam University, Assam be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
          </p>

          <p>
            These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
          </p>

          <p>
            The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government / private organizations. Assam University, Assam is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the Assam University, Assam website and are subject to the privacy and security policies of the owners/sponsors of the outside website. Assam University, does not guarantee the availability of such linked pages at all times. Assam University cannot authorize the use of copyrighted materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website. Assam University, does not guarantee that linked websites comply with Indian Government Web Guidelines.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> registrar@aus.ac.in
            <br />
            <strong>Phone:</strong> +91 3842-270806
          </p>
        </div>
      </div>
    </motion.div>
  );
}
