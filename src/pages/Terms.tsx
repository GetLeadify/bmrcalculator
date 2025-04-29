import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: July 16, 2025
            </p>
            
            <p>
              Welcome to BMR Calculator. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the BMR Calculator website (the "Service") operated by BMR Calculator ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Service</h2>
            
            <p>
              The BMR Calculator is provided for informational and educational purposes only. The calculations and information provided by the Service are based on general formulas and should not be considered medical advice.
            </p>
            
            <p>
              The Service provides estimates based on the information you input. These estimates are not a substitute for professional medical or nutritional advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or nutritional needs.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content Accuracy</h2>
            
            <p>
              We strive to provide accurate and up-to-date information, but we make no guarantees about the accuracy, reliability, completeness, or timeliness of the information provided by the Service. Use of any information or calculations from the Service is at your own risk.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of BMR Calculator and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BMR Calculator.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Links To Other Web Sites</h2>
            
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by BMR Calculator.
            </p>
            
            <p>
              BMR Calculator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that BMR Calculator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
            
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            
            <p>
              In no event shall BMR Calculator, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at contact@bmrcalculator.xyz.
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

export default Terms;