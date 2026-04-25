export default function WordPressComVsOrg() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          WordPress.com vs WordPress.org
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              WordPress.com is a hosted platform where everything (hosting, security, maintenance)
              is managed for you. WordPress.org is a self-hosted solution where you download
              WordPress and host it on your own server.
            </p>
          </section>

          {/* Key Difference */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Key Differences
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WordPress.com → Fully managed platform</li>
              <li>WordPress.org → Self-hosted & fully customizable</li>
              <li>WordPress.com → Limited control (based on plan)</li>
              <li>WordPress.org → Full control over code, themes, plugins</li>
            </ul>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Use WordPress.com → If you want quick setup without technical work</li>
              <li>Use WordPress.org → If you want full control and scalability</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WordPress.com → Personal blogs, small websites</li>
              <li>WordPress.org → Business sites, eCommerce, large-scale apps</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Why Choose One
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>WordPress.com → Easy, no maintenance required</li>
              <li>WordPress.org → Full flexibility and ownership</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How They Work
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WordPress.com → Hosted on WordPress servers</li>
              <li>WordPress.org → Installed on your own hosting server</li>
              <li>WordPress.com → Limited plugin/theme access</li>
              <li>WordPress.org → Install any theme/plugin freely</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WordPress.com → Easy setup, no maintenance</li>
              <li>WordPress.org → Full customization, better scalability</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WordPress.com → Limited control, paid plans needed for features</li>
              <li>WordPress.org → Requires hosting, maintenance, and technical knowledge</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>WordPress.com is hosted, WordPress.org is self-hosted</li>
              <li>.com is beginner-friendly, .org is developer-friendly</li>
              <li>.org gives full control over themes and plugins</li>
              <li>.com has limitations based on subscription plans</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}