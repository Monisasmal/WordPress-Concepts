export default function PluginsInteractWithCore() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How Plugins Interact with WordPress Core
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Plugins interact with WordPress core using hooks, APIs,
              database functions, and WordPress internal events to extend
              website functionality without modifying core files.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugin = Extra functionality layer on top of WordPress core
            </p>
          </section>

          {/* How It Works */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. How Plugins Work Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                WordPress loads core files  
                <br />👉 wp-settings.php initializes system
              </li>

              <li>
                Active plugins are loaded  
                <br />👉 Reads plugin folder
              </li>

              <li>
                Hooks are executed  
                <br />👉 Plugins attach custom functionality
              </li>

              <li>
                Plugin modifies behavior  
                <br />👉 Add features or change output
              </li>

            </ul>
          </section>

          {/* Hooks */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Interaction Through Hooks
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Plugins mainly communicate with WordPress using Actions and Filters.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`function custom_footer_message() {
  echo "Welcome User";
}

add_action('wp_footer', 'custom_footer_message');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugin adds content to website footer
            </p>
          </section>

          {/* Filters */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Modifying Data Using Filters
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function modify_title($title) {
  return "🔥 " . $title;
}

add_filter('the_title', 'modify_title');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugin changes post titles dynamically
            </p>
          </section>

          {/* APIs */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Interaction Using WordPress APIs
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Settings API  
                <br />👉 Create admin settings
              </li>

              <li>
                REST API  
                <br />👉 External app communication
              </li>

              <li>
                Database API  
                <br />👉 Access WordPress database
              </li>

              <li>
                Shortcode API  
                <br />👉 Dynamic frontend content
              </li>

            </ul>
          </section>

          {/* Database */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Database Interaction Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`global $wpdb;

$results = $wpdb->get_results(
  "SELECT * FROM wp_posts"
);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Plugin reads data from WordPress database
            </p>
          </section>

          {/* Real Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Real-World Plugin Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WooCommerce  
                <br />👉 Adds eCommerce system to WordPress
              </li>

              <li>
                Yoast SEO  
                <br />👉 Modifies SEO metadata
              </li>

              <li>
                Elementor  
                <br />👉 Extends page builder functionality
              </li>

              <li>
                Contact Form 7  
                <br />👉 Adds form functionality
              </li>

            </ul>
          </section>

          {/* Internal Flow */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Internal Plugin Flow
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Browser Request
      ↓
WordPress Core Loads
      ↓
Active Plugins Load
      ↓
Hooks Execute
      ↓
Plugin Code Runs
      ↓
Final HTML Response`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Extend functionality safely  
                <br />👉 No core modification
              </li>

              <li>
                Modular architecture  
                <br />👉 Easy maintenance
              </li>

              <li>
                Reusable features  
                <br />👉 Install anywhere
              </li>

            </ul>
          </section>

          {/* Risks */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Risks & Limitations
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Too many plugins  
                <br />👉 Slow performance
              </li>

              <li>
                Poorly coded plugins  
                <br />👉 Security vulnerabilities
              </li>

              <li>
                Plugin conflicts  
                <br />👉 Website errors
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Plugins extend WordPress functionality</li>
              <li>Interact mainly using hooks and APIs</li>
              <li>Use add_action() and add_filter()</li>
              <li>Should not modify WordPress core files</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}