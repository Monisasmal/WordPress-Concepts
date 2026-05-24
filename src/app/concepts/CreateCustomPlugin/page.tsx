export default function CreateCustomPlugin() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Create a Custom WordPress Plugin
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              A custom plugin is a user-created WordPress plugin used to add
              specific functionality without modifying WordPress core files.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugins extend WordPress features safely
            </p>
          </section>

          {/* Why Use */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Create a Custom Plugin
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Add custom functionality  
                <br />👉 Unique features
              </li>

              <li>
                Avoid editing core files  
                <br />👉 Safe updates
              </li>

              <li>
                Reusable functionality  
                <br />👉 Use on multiple websites
              </li>

              <li>
                Better code organization  
                <br />👉 Easy maintenance
              </li>

            </ul>
          </section>

          {/* Step 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Step 1 — Open Plugins Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Go to the WordPress plugins directory.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`wp-content/plugins/`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 All WordPress plugins are stored here
            </p>
          </section>

          {/* Step 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Step 2 — Create Plugin Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Create a new folder for your plugin.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`wp-content/plugins/custom-message-plugin`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use meaningful folder names
            </p>
          </section>

          {/* Step 3 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Step 3 — Create Main Plugin File
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Create a PHP file inside the plugin folder.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`custom-message-plugin.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Main entry point of plugin
            </p>
          </section>

          {/* Plugin Header */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Add Plugin Header
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress reads plugin information from the header comment.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`<?php
/*
Plugin Name: Custom Message Plugin
Plugin URI: https://example.com
Description: Simple custom plugin example
Version: 1.0
Author: John Doe
*/
?>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Without this header WordPress cannot detect the plugin
            </p>
          </section>

          {/* Add Functionality */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Add Plugin Functionality
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Add custom features using hooks.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`<?php
/*
Plugin Name: Custom Message Plugin
*/

function custom_footer_message() {
  echo "<p>Hello from Custom Plugin</p>";
}

add_action('wp_footer', 'custom_footer_message');
?>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Displays message in website footer
            </p>
          </section>

          {/* Activate */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Activate Plugin
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Go to WordPress admin dashboard and activate the plugin.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Dashboard → Plugins → Activate`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugin becomes active instantly
            </p>
          </section>

          {/* Plugin Structure */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Recommended Plugin Structure
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`custom-plugin/
│
├── custom-plugin.php
├── includes/
├── admin/
├── public/
├── assets/
└── templates/`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Organized structure improves scalability
            </p>
          </section>

          {/* Security */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Security Best Practice
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Prevent direct file access using ABSPATH.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`defined('ABSPATH') || exit;`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Improves plugin security
            </p>
          </section>

          {/* Real Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Real-World Plugin Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WooCommerce  
                <br />👉 eCommerce functionality
              </li>

              <li>
                Yoast SEO  
                <br />👉 SEO optimization
              </li>

              <li>
                Elementor  
                <br />👉 Drag-and-drop page builder
              </li>

            </ul>
          </section>

          {/* Common Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Editing WordPress core files  
                <br />👉 Unsafe approach
              </li>

              <li>
                No plugin structure  
                <br />👉 Hard maintenance
              </li>

              <li>
                Missing security checks  
                <br />👉 Vulnerability risk
              </li>

            </ul>
          </section>

          {/* Internal Flow */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Internal Plugin Flow
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`WordPress Loads
      ↓
Reads Active Plugins
      ↓
Loads Plugin File
      ↓
Hooks Execute
      ↓
Plugin Features Run`}
            </pre>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Plugins extend WordPress functionality</li>
              <li>Main plugin file contains plugin header</li>
              <li>Use add_action() and add_filter()</li>
              <li>Never modify WordPress core directly</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}