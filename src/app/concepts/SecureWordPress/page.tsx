export default function SecureWordPress() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Secure WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress security means protecting your website from hackers,
              malware, spam, brute-force attacks, and unauthorized access.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Security protects website data, users, and server resources
            </p>
          </section>

          {/* Why Important */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why WordPress Security is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Protect user data  
                <br />👉 Prevent data theft
              </li>

              <li>
                Prevent hacking  
                <br />👉 Stop unauthorized access
              </li>

              <li>
                Improve SEO reputation  
                <br />👉 Avoid blacklisting by Google
              </li>

              <li>
                Maintain website uptime  
                <br />👉 Avoid downtime attacks
              </li>

            </ul>
          </section>

          {/* Update Regularly */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Keep WordPress Updated
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Always update WordPress core, plugins, and themes.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Update:
- WordPress Core
- Plugins
- Themes`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Updates fix security vulnerabilities
            </p>
          </section>

          {/* Strong Password */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Use Strong Passwords
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Weak passwords are easy targets for brute-force attacks.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Weak:
admin123

Strong:
Wp@2026#Secure!`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use strong and unique passwords
            </p>
          </section>

          {/* Change Username */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Avoid Using &quot;admin&quot; Username
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Hackers commonly target the default admin username.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Bad:
Username = admin

Better:
Username = manaswini_dev`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use custom usernames
            </p>
          </section>

          {/* Security Plugins */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Install Security Plugins
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Security plugins help monitor and protect websites.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular Security Plugins:
- Wordfence
- Sucuri Security
- iThemes Security
- All In One WP Security`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Adds firewall and malware protection
            </p>
          </section>

          {/* SSL */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Use SSL Certificate (HTTPS)
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              SSL encrypts data between browser and server.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`http://example.com ❌

https://example.com ✅`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Improves security and SEO
            </p>
          </section>

          {/* Backup */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Take Regular Backups
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Backups help restore websites after attacks or crashes.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular Backup Plugins:
- UpdraftPlus
- BackupBuddy
- Jetpack Backup`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Always keep backup copies
            </p>
          </section>

          {/* Limit Login Attempts */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Limit Login Attempts
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Prevent brute-force login attacks.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Example:
Allow only 3 failed login attempts`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Blocks repeated hacking attempts
            </p>
          </section>

          {/* 2FA */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Enable Two-Factor Authentication (2FA)
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Adds extra login security using OTP verification.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Login Process:
Password
   ↓
OTP Verification`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Strong protection against account theft
            </p>
          </section>

          {/* File Permissions */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Correct File Permissions
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Restrict file access permissions.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Folders: 755
Files: 644`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Prevent unauthorized modifications
            </p>
          </section>

          {/* Disable File Editing */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Disable Theme & Plugin File Editing
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Prevent attackers from editing files via dashboard.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`// wp-config.php

define('DISALLOW_FILE_EDIT', true);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Improves admin security
            </p>
          </section>

          {/* Database Prefix */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Change Database Prefix
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Default table prefix makes SQL injection easier.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Default:
wp_posts

Better:
mswp_posts`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Adds extra security layer
            </p>
          </section>

          {/* Disable XML-RPC */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              14. Disable XML-RPC if Unused
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              XML-RPC can be abused for attacks.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Disable using:
- Security plugin
- .htaccess rules`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Reduces attack surface
            </p>
          </section>

          {/* Internal Security Flow */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              15. Internal Security Flow
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`User Request
      ↓
Firewall Check
      ↓
Authentication
      ↓
Permission Validation
      ↓
WordPress Access`}
            </pre>
          </section>

          {/* Real World */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              16. Real-World Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              A WordPress eCommerce website may use:
            </p>

            <ul className="list-disc ml-5 mt-2 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Cloudflare firewall</li>
              <li>Wordfence security plugin</li>
              <li>Daily backups</li>
              <li>2FA authentication</li>
              <li>SSL encryption</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Multi-layer security approach
            </p>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Keep WordPress, themes, and plugins updated</li>
              <li>Use strong passwords and SSL</li>
              <li>Install security and backup plugins</li>
              <li>Enable firewall and two-factor authentication</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}