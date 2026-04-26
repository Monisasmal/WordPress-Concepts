export default function InstallWordPressManually() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Install WordPress Manually
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Manual installation of WordPress means setting up the CMS without
              one-click installers. You download WordPress, upload it to a server,
              configure the database, and connect everything manually.
            </p>
          </section>

          {/* Requirements */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Requirements
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Domain name and hosting server</li>
              <li>PHP installed on server</li>
              <li>MySQL database</li>
              <li>FTP access or file manager</li>
            </ul>
          </section>

          {/* Steps */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Installation Steps
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Download WordPress from official website</li>
              <li>Extract the ZIP file</li>
              <li>Upload files to your hosting server (public_html)</li>
              <li>Create a MySQL database</li>
              <li>Rename <code>wp-config-sample.php</code> to <code>wp-config.php</code></li>
              <li>Add database name, username, password in config file</li>
              <li>Open your domain in browser</li>
              <li>Complete WordPress setup (site name, admin user, password)</li>
            </ul>
          </section>

          {/* Config Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              4. wp-config.php Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{String.raw`<?php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_username');
define('DB_PASSWORD', 'your_password');
define('DB_HOST', 'localhost');
?>`}
            </pre>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Browser requests your domain</li>
              <li>Server runs WordPress PHP files</li>
              <li>WordPress connects to MySQL database</li>
              <li>Fetches content and applies theme</li>
              <li>Returns final HTML to browser</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages of Manual Installation
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Full control over setup</li>
              <li>Better understanding of configuration</li>
              <li>Useful for developers and advanced users</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Disadvantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Time-consuming compared to one-click install</li>
              <li>Requires basic technical knowledge</li>
              <li>Higher chance of configuration errors</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Download → Upload → Configure → Install</li>
              <li>Key file: <code>wp-config.php</code></li>
              <li>Requires PHP + MySQL</li>
              <li>Manual setup gives full control</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}