export default function ImproveWordPressPerformance() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Improve WordPress Performance
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Improving WordPress performance means optimizing website speed,
              loading time, server response, and overall user experience.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster websites improve SEO, conversions, and user satisfaction
            </p>
          </section>

          {/* Why Important */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Performance is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Better SEO rankings  
                <br />👉 Google prefers fast websites
              </li>

              <li>
                Lower bounce rate  
                <br />👉 Users stay longer
              </li>

              <li>
                Higher conversions  
                <br />👉 Better business results
              </li>

              <li>
                Better mobile experience  
                <br />👉 Faster loading on phones
              </li>

            </ul>
          </section>

          {/* Good Hosting */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Use High-Quality Hosting
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Hosting quality directly affects performance.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Recommended Hosting:
- SiteGround
- Cloudways
- Hostinger
- Bluehost`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Better server = faster response time
            </p>
          </section>

          {/* Caching */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Enable Caching
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Caching stores pre-generated pages to reduce processing time.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular Cache Plugins:
- WP Rocket
- LiteSpeed Cache
- W3 Total Cache`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster page loading
            </p>
          </section>

          {/* Optimize Images */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Optimize Images
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Large images slow down websites significantly.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Optimization Methods:
- Compress images
- Use WebP format
- Resize images
- Enable lazy loading`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use plugins like Smush or Imagify
            </p>
          </section>

          {/* Minify */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Minify CSS and JavaScript
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Minification removes unnecessary spaces and comments from files.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Before:
function test() {
   console.log("Hello");
}

After:
function test(){console.log("Hello")}`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Smaller files load faster
            </p>
          </section>

          {/* Lightweight Theme */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Use Lightweight Themes
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Heavy themes increase loading time.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Fast Themes:
- Astra
- GeneratePress
- Kadence
- Neve`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Lightweight themes improve speed
            </p>
          </section>

          {/* Plugins */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Reduce Unnecessary Plugins
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Too many plugins increase server load.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Best Practice:
- Delete unused plugins
- Use trusted plugins
- Keep plugins updated`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Fewer plugins = better performance
            </p>
          </section>

          {/* Database */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Optimize Database
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Clean unnecessary data from the database.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Remove:
- Spam comments
- Post revisions
- Trash posts
- Expired transients`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use WP-Optimize plugin
            </p>
          </section>

          {/* CDN */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Use CDN (Content Delivery Network)
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              CDN stores website files on global servers.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular CDN:
- Cloudflare
- BunnyCDN
- StackPath`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster loading worldwide
            </p>
          </section>

          {/* Latest PHP */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Update PHP Version
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Newer PHP versions improve WordPress speed and security.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Recommended:
PHP 8.x`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster execution and better memory usage
            </p>
          </section>

          {/* Disable Unused */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Disable Unused Features
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Disable features that are not required.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Disable:
- Emojis
- Unused widgets
- Unused themes
- XML-RPC`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Reduces unnecessary processing
            </p>
          </section>

          {/* Performance Tools */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Performance Testing Tools
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                Google PageSpeed Insights  
                <br />👉 Website speed analysis
              </li>

              <li>
                GTmetrix  
                <br />👉 Performance reports
              </li>

              <li>
                Pingdom  
                <br />👉 Uptime and speed monitoring
              </li>

            </ul>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              14. Real-World Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              An online store using caching, CDN, optimized images,
              and lightweight themes may reduce loading time from
              6 seconds to less than 2 seconds.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster websites improve sales and SEO
            </p>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Use caching and CDN for faster loading</li>
              <li>Optimize images and database</li>
              <li>Use lightweight themes and fewer plugins</li>
              <li>Performance affects SEO and user experience</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}