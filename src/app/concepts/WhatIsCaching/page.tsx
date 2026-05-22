export default function WhatIsCaching() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Caching in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Caching is the process of storing temporary copies of website
              data so pages can load faster without generating everything again.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Cache = Saved ready-made version of webpage
            </p>
          </section>

          {/* Why Important */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Caching is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Faster page loading  
                <br />👉 Better user experience
              </li>

              <li>
                Reduces server load  
                <br />👉 Fewer database queries
              </li>

              <li>
                Improves SEO  
                <br />👉 Google prefers fast sites
              </li>

              <li>
                Handles more traffic  
                <br />👉 Better scalability
              </li>

            </ul>
          </section>

          {/* How It Works */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. How Caching Works Internally
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Without Cache:
User Request
   ↓
PHP Executes
   ↓
Database Query
   ↓
Generate HTML
   ↓
Send Response

With Cache:
User Request
   ↓
Serve Saved HTML
   ↓
Fast Response`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Cached pages skip heavy processing
            </p>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Types of Caching
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                Page Cache  
                <br />👉 Stores full HTML pages
              </li>

              <li>
                Browser Cache  
                <br />👉 Saves CSS, JS, images in browser
              </li>

              <li>
                Object Cache  
                <br />👉 Stores database query results
              </li>

              <li>
                Opcode Cache  
                <br />👉 Caches compiled PHP code
              </li>

              <li>
                CDN Cache  
                <br />👉 Global file caching
              </li>

            </ul>
          </section>

          {/* Page Cache Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Page Cache Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress generates HTML once and stores it.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`First Visit:
Generate Page → Save Cache

Next Visit:
Load Cached Page`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Much faster response time
            </p>
          </section>

          {/* Browser Cache */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Browser Cache Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Browser stores:
- Images
- CSS files
- JavaScript files

Next visit:
Loads files from browser instead of server`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Reduces network requests
            </p>
          </section>

          {/* Popular Plugins */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Popular WordPress Caching Plugins
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WP Rocket  
                <br />👉 Premium caching plugin
              </li>

              <li>
                LiteSpeed Cache  
                <br />👉 High-performance caching
              </li>

              <li>
                W3 Total Cache  
                <br />👉 Advanced caching features
              </li>

              <li>
                WP Super Cache  
                <br />👉 Simple caching plugin
              </li>

            </ul>
          </section>

          {/* CDN */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. CDN and Caching
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              CDN stores cached files on global servers.
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

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Advantages of Caching
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Faster website speed  
                <br />👉 Better performance
              </li>

              <li>
                Lower server usage  
                <br />👉 Reduced hosting cost
              </li>

              <li>
                Better SEO score  
                <br />👉 Faster indexing
              </li>

              <li>
                Improved scalability  
                <br />👉 Handles traffic spikes
              </li>

            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Limitations of Caching
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Old content may appear  
                <br />👉 Stale cache problem
              </li>

              <li>
                Dynamic pages may break  
                <br />👉 Login/cart pages
              </li>

              <li>
                Cache conflicts  
                <br />👉 Plugin issues
              </li>

            </ul>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Real-World Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Without caching, an eCommerce website may take 5 seconds to load.
              With caching enabled, the same page may load within 1 second.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Better customer experience and conversions
            </p>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Caching stores temporary copies of webpages</li>
              <li>Improves website speed and performance</li>
              <li>Types: Page cache, browser cache, object cache</li>
              <li>Popular plugins: WP Rocket, LiteSpeed Cache</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}