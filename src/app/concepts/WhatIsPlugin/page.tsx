export default function WhatIsPlugin() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is a Plugin in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              A plugin in WordPress is a piece of software that adds new features
              or functionality to your website without modifying the core code.
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Purpose of Plugins
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Add new features (SEO, forms, security)</li>
              <li>Extend website functionality</li>
              <li>Avoid writing code from scratch</li>
              <li>Customize site behavior</li>
            </ul>
          </section>

          {/* Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Popular Plugin Examples
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mb-2 font-medium">
              SEO Plugins:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Yoast SEO</li>
              <li>Rank Math</li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 mt-4 mb-2 font-medium">
              eCommerce Plugins:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WooCommerce</li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 mt-4 mb-2 font-medium">
              Page Builder Plugins:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Elementor</li>
              <li>WPBakery</li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 mt-4 mb-2 font-medium">
              Form Plugins:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Contact Form 7</li>
              <li>WPForms</li>
            </ul>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Types of Plugins
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free plugins (WordPress repository)</li>
              <li>Premium plugins (paid)</li>
              <li>Custom plugins (built for specific needs)</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How Plugins Work Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Hooks into WordPress using actions and filters</li>
              <li>Adds or modifies functionality dynamically</li>
              <li>Stored in <code>/wp-content/plugins/</code></li>
              <li>Loaded when activated</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Easy to install and use</li>
              <li>No coding required</li>
              <li>Extend functionality quickly</li>
              <li>Huge ecosystem</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Too many plugins can slow site</li>
              <li>Compatibility issues</li>
              <li>Security risks if not updated</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Plugins extend functionality</li>
              <li>No need to modify core WordPress</li>
              <li>Uses hooks (actions & filters)</li>
              <li>Examples: Yoast SEO, WooCommerce, Elementor</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}