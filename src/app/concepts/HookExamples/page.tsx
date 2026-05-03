export default function HookExamples() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Examples of add_action() and add_filter() in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              <code>add_action()</code> is used to execute custom code, while 
              <code>add_filter()</code> is used to modify existing data.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Action = Perform task  
              <br />
              👉 Filter = Modify data
            </p>
          </section>

          {/* Action Example 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. add_action() Example – Footer Message
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function show_footer_message() {
  echo "<p>Welcome to my website</p>";
}

add_action('wp_footer', 'show_footer_message');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Displays message at bottom of website
            </p>
          </section>

          {/* Action Example 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. add_action() Example – Add Script in Head
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function add_custom_script() {
  echo "<script>console.log('Hello')</script>";
}

add_action('wp_head', 'add_custom_script');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Adds JavaScript in website head
            </p>
          </section>

          {/* Filter Example 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. add_filter() Example – Modify Title
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function add_prefix_to_title($title) {
  return "🔥 " . $title;
}

add_filter('the_title', 'add_prefix_to_title');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Adds emoji before every post title
            </p>
          </section>

          {/* Filter Example 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. add_filter() Example – Modify Content
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function add_message_to_content($content) {
  return $content . "<p>Thanks for reading!</p>";
}

add_filter('the_content', 'add_message_to_content');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Adds message at end of blog post
            </p>
          </section>

          {/* Real Scenario */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Real-Life Scenario
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Action  
                <br />👉 Add Google Analytics code
              </li>

              <li>
                Filter  
                <br />👉 Change excerpt length or content
              </li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Forgetting return in filter  
                <br />👉 Output breaks
              </li>

              <li>
                Using echo in filter  
                <br />👉 Should return instead
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>add_action() executes code</li>
              <li>add_filter() modifies data</li>
              <li>Filters must return value</li>
              <li>Examples: wp_footer, the_title, the_content</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}