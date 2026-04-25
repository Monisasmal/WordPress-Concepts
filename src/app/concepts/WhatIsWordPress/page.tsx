export default function WhatIsWordPress() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              WordPress is an open-source Content Management System (CMS)
              used to create websites, blogs, and web applications without
              needing deep coding knowledge.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use WordPress
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Building blogs or personal websites</li>
              <li>Creating business or portfolio sites</li>
              <li>Developing eCommerce websites (WooCommerce)</li>
              <li>Quick website development without heavy coding</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Blogs and news websites</li>
              <li>Business and corporate websites</li>
              <li>eCommerce platforms</li>
              <li>Portfolio and freelance websites</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Use WordPress
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Easy to use and beginner-friendly</li>
              <li>Thousands of themes and plugins</li>
              <li>No need to build everything from scratch</li>
              <li>Large community support</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How WordPress Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>User requests a webpage (via browser)</li>
              <li>Web server runs WordPress (PHP)</li>
              <li>WordPress fetches data from MySQL database</li>
              <li>Theme decides layout/design</li>
              <li>Plugins add extra functionality</li>
              <li>Final HTML is generated and sent to the browser</li>
            </ul>
          </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Basic Concept (Template Example)
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{String.raw`<?php
// WordPress Loop Example
if (have_posts()) :
  while (have_posts()) : the_post();
    the_title();
    the_content();
  endwhile;
endif;
?>`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Real Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{String.raw`// Plugin Example
<?php
/*
Plugin Name: Custom Message
*/

function show_message() {
  echo "Hello from WordPress Plugin";
}

add_action('wp_footer', 'show_message');
?>`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>No coding required for basic sites</li>
              <li>Highly customizable</li>
              <li>SEO-friendly</li>
              <li>Large plugin ecosystem</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Performance issues with too many plugins</li>
              <li>Security risks if not updated</li>
              <li>Customization may require PHP knowledge</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>WordPress is a CMS built with PHP & MySQL</li>
              <li>Uses themes for UI and plugins for features</li>
              <li>Follows request → PHP → DB → HTML flow</li>
              <li>Powers a large portion of the web</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}