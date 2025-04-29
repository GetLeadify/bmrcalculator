import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: July 16, 2025
            </p>
            
            <p>
              Welcome to BMR Calculator. We respect your privacy and are committed to protecting the personal information that you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Calculator Input Data</h3>
            <p>
              When you use our BMR calculator, you may input personal information such as your age, gender, weight, height, and activity level. This information is processed locally on your device to calculate your BMR and daily calorie needs. We do not store this information on our servers.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Data</h3>
            <p>
              We may collect anonymous usage data, such as pages visited, time spent on the site, and clicks. This information helps us improve our website and user experience. This data does not personally identify you and is collected using cookies and similar technologies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies are small text files stored on your device that help analyze web traffic and let you know when you visit a particular site. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics to help us understand how our website is used. These services may collect information such as your IP address, browser type, and the pages you visit. The information collected is governed by the privacy policies of these third parties.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@bmrcalculator.xyz.
            </p>
            
            <div className="mt-8">
              <Link to="/" className="text-cyan-600 hover:text-cyan-800 transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;