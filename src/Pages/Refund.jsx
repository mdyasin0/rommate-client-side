

const Refund = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Refund Policy</h1>
      <p className="mb-4">
        We strive to offer the best service. If you’re not satisfied, please review our refund policy below:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Refunds are only applicable for paid promotional features.</li>
        <li>You must request a refund within 7 days of purchase.</li>
        <li>No refunds will be issued for completed services or expired listings.</li>
        <li>To request a refund, contact our support with your order details.</li>
      </ul>
      <p className="mt-4">
        Our team will review and process your request within 3–5 business days.
      </p>
    </div>
  );
};

export default Refund;
