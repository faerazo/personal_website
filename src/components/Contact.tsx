import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@faerazo.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">Let's discuss how we can work together on your next data science project.</p>
            
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md mx-auto shadow-lg border border-gray-700">
                <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
                  <span className="text-blue-400 font-medium">{email}</span>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 bg-gray-600 hover:bg-gray-500 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}