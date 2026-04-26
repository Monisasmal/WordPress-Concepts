export default function WordPressSystemRequirements() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          WordPress System Requirements
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              To run WordPress smoothly, your server must meet certain minimum
              software and hardware requirements. These ensure proper performance,
              security, and compatibility.
            </p>
          </section>

          {/* Core Requirements */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Core Requirements
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>PHP version 7.4 or higher (8.x recommended)</li>
              <li>MySQL version 5.7+ or MariaDB 10.4+</li>
              <li>Web server (Apache or Nginx)</li>
              <li>HTTPS support (SSL certificate)</li>
            </ul>
          </section>

          {/* Recommended */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Recommended Setup
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>PHP 8.x for better performance</li>
              <li>Latest MySQL or MariaDB</li>
              <li>Nginx or Apache with mod_rewrite enabled</li>
              <li>At least 1GB RAM (2GB+ for better performance)</li>
            </ul>
          </section>

          {/* Optional */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Optional but Important
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>FTP or SSH access for file management</li>
              <li>cPanel or hosting control panel</li>
              <li>CDN for faster content delivery</li>
              <li>Caching tools for performance optimization</li>
            </ul>
          </section>

          {/* Local Development */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Local Development Setup
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Install XAMPP / WAMP / MAMP</li>
              <li>Enable Apache & MySQL</li>
              <li>Use phpMyAdmin to create database</li>
              <li>Run WordPress on localhost</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How These Requirements Work Together
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Web server handles incoming requests</li>
              <li>PHP processes WordPress logic</li>
              <li>Database stores content and settings</li>
              <li>Server returns HTML output to browser</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Why Requirements Matter
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Ensures website stability</li>
              <li>Improves performance and speed</li>
              <li>Enhances security</li>
              <li>Prevents compatibility issues</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Common Issues if Requirements Not Met
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Installation failures</li>
              <li>Slow website performance</li>
              <li>Plugin/theme incompatibility</li>
              <li>Security vulnerabilities</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Requires PHP, MySQL, and a web server</li>
              <li>PHP 8.x and latest DB recommended</li>
              <li>Works on Apache/Nginx</li>
              <li>HTTPS is recommended for security</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}