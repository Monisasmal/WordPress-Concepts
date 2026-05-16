export default function PluginStructure() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Plugin Structure in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Plugin structure refers to the folder and file organization
              used to build a WordPress plugin properly.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 A well-structured plugin is easier to manage, scale, and maintain
            </p>
          </section>

          {/* Basic Structure */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Basic Plugin Structure
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`my-plugin/
│
├── my-plugin.php
├── readme.txt
├── assets/
├── includes/
├── admin/
├── public/
└── templates/`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Organized plugin folder structure
            </p>
          </section>

          {/* Main Plugin File */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Main Plugin File
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              The main plugin file contains plugin information and initialization logic.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`<?php
/*
Plugin Name: My Plugin
Plugin URI: https://example.com
Description: Sample WordPress Plugin
Version: 1.0
Author: John Doe
*/

defined('ABSPATH') || exit;

echo "Plugin Loaded";
?>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 WordPress reads this header to detect the plugin
            </p>
          </section>

          {/* Includes Folder */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Includes Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Stores reusable PHP classes and helper functions.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`includes/
├── class-loader.php
├── helper-functions.php
└── database.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Keeps code modular and reusable
            </p>
          </section>

          {/* Admin Folder */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Admin Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Contains admin dashboard related functionality.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`admin/
├── admin-menu.php
├── settings-page.php
└── admin-style.css`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Used for plugin settings pages
            </p>
          </section>

          {/* Public Folder */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Public Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Stores frontend-related files such as CSS, JS, and templates.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`public/
├── css/
├── js/
└── templates/`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Frontend UI functionality
            </p>
          </section>

          {/* Assets */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Assets Folder
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Stores images, icons, stylesheets, and JavaScript files.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`assets/
├── images/
├── css/
└── js/`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Static resources for plugin UI
            </p>
          </section>

          {/* Example Flow */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Plugin Loading Flow
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`WordPress Starts
      ↓
Loads Active Plugins
      ↓
Reads Plugin Header
      ↓
Executes Main Plugin File
      ↓
Loads Includes/Admin/Public Files`}
            </pre>
          </section>

          {/* Best Practices */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Best Practices
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Use separate folders  
                <br />👉 Clean architecture
              </li>

              <li>
                Avoid writing everything in one file  
                <br />👉 Easier maintenance
              </li>

              <li>
                Use classes and OOP  
                <br />👉 Better scalability
              </li>

              <li>
                Protect files using ABSPATH  
                <br />👉 Security improvement
              </li>

            </ul>
          </section>

          {/* Real Plugin Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Real-World Plugin Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WooCommerce  
                <br />👉 Large modular plugin structure
              </li>

              <li>
                Yoast SEO  
                <br />👉 Separate admin and frontend modules
              </li>

              <li>
                Elementor  
                <br />👉 Component-based architecture
              </li>

            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Single large PHP file  
                <br />👉 Hard to maintain
              </li>

              <li>
                No folder organization  
                <br />👉 Messy structure
              </li>

              <li>
                Direct file access  
                <br />👉 Security vulnerability
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Plugin structure organizes plugin files properly</li>
              <li>Main plugin file contains plugin header</li>
              <li>Uses folders like admin, public, includes, assets</li>
              <li>Improves scalability and maintenance</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}