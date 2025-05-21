import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This policy explains how we collect, use, and protect your data.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>We collect your name, email, and listing information during registration.</li>
        <li>We do not sell or share your personal information with third parties.</li>
        <li>All data is stored securely and protected with encryption.</li>
        <li>You may request deletion of your data at any time.</li>
      </ul>
      <p className="mt-4">
        If you have questions about your data, please contact us at support@roomfinder.com.
      </p>
    </div>
  );
};

export default Privacy;
