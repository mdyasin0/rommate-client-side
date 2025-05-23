import React from "react";

const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Terms & Conditions
      </h1>
      <p className="mb-4 text-base sm:text-lg">
        Welcome to Roommate Finder! By accessing or using our website, you agree to the following terms:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base leading-relaxed">
        <li>You must be at least 18 years old to use this service.</li>
        <li>You are responsible for the accuracy of the information you provide.</li>
        <li>Do not post inappropriate or harmful content.</li>
        <li>We reserve the right to remove any listing or user that violates our terms.</li>
      </ul>
      <p className="mt-4 text-base sm:text-lg">
        By using this site, you acknowledge that you have read and agreed to these terms.
      </p>
    </div>
  );
};

export default Terms;
