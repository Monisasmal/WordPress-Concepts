export default function OptimizeWordPressSite() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Optimize a WordPress Site
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress optimization means improving website speed,
              performance, SEO, and security for a better user experience.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster websites rank better and provide smoother browsing
            </p>
          </section>

          {/* Why Important */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Optimization is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Improves website speed  
                <br />👉 Faster loading time
              </li>

              <li>
                Better SEO ranking  
                <br />👉 Google prefers fast sites
              </li>

              <li>
                Better user experience  
                <br />👉 Lower bounce rate
              </li>

              <li>
                Improves security  
                <br />👉 Prevent attacks
              </li>

            </ul>
          </section>

          {/* Caching */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Use Caching
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Caching stores pre-generated pages to reduce server processing.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Popular Cache Plugins:
- WP Rocket
- W3 Total Cache
- LiteSpeed Cache`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Improves page loading speed significantly
            </p>
          </section>

          {/* Image Optimization */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Optimize Images
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Large images slow down websites.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Optimization Techniques:
- Compress images
- Use WebP format
- Lazy loading
- Resize properly`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Use plugins like Smush or Imagify
            </p>
          </section>

          {/* Minify */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Minify CSS and JavaScript
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

          {/* Database */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Optimize Database
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Remove unnecessary data from WordPress database.
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
              7. Use CDN (Content Delivery Network)
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              CDN stores website files on multiple global servers.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular CDN Providers:
- Cloudflare
- BunnyCDN
- StackPath`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Faster loading worldwide
            </p>
          </section>

          {/* Theme */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Use Lightweight Theme
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Heavy themes slow down websites.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Fast Themes:
- Astra
- GeneratePress
- Kadence
- Neve`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Lightweight themes improve performance
            </p>
          </section>

          {/* Plugin Management */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Remove Unused Plugins
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Too many plugins can slow the website and create conflicts.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Best Practice:
- Delete inactive plugins
- Use trusted plugins only
- Keep plugins updated`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Fewer plugins = better performance
            </p>
          </section>

          {/* Security */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Improve Security
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Secure websites perform better and avoid attacks.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Security Plugins:
- Wordfence
- Sucuri
- iThemes Security`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Protects from malware and hacking
            </p>
          </section>

          {/* SEO */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Optimize SEO
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              SEO optimization improves search rankings.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`SEO Plugins:
- Yoast SEO
- Rank Math
- All in One SEO`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Optimize titles, meta tags, and sitemap
            </p>
          </section>

          {/* Hosting */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Use Good Hosting
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Hosting quality directly affects website speed.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Popular Hosting:
- SiteGround
- Hostinger
- Bluehost
- Cloudways`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Better servers = faster websites
            </p>
          </section>

          {/* Performance Tools */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Performance Testing Tools
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Google PageSpeed Insights  
                <br />👉 Speed analysis
              </li>

              <li>
                GTmetrix  
                <br />👉 Performance reports
              </li>

              <li>
                Pingdom  
                <br />👉 Website monitoring
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Optimization improves speed, SEO, and security</li>
              <li>Use caching, CDN, image optimization</li>
              <li>Choose lightweight themes and fewer plugins</li>
              <li>Use tools like GTmetrix and PageSpeed Insights</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}