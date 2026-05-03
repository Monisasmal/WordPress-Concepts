export default function WhatAreHooks() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Hooks in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Hooks are functions in WordPress that allow you to modify or extend
              functionality without changing the core code.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Add custom message in footer without editing theme files
            </p>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Types of Hooks
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Actions  
                <br />👉 Used to add functionality
              </li>

              <li>
                Filters  
                <br />👉 Used to modify data
              </li>
            </ul>
          </section>

          {/* Action */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Action Hook
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Action hooks allow you to run custom code at specific points in WordPress.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`function my_footer_message() {
  echo "Hello from Hook!";
}

add_action('wp_footer', 'my_footer_message');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Display message in footer
            </p>
          </section>

          {/* Filter */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Filter Hook
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Filter hooks allow you to modify content before it is displayed.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`function change_title($title) {
  return "Updated: " . $title;
}

add_filter('the_title', 'change_title');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Modify post title
            </p>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How Hooks Work Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                WordPress defines hook points  
                <br />👉 Example: wp_footer
              </li>

              <li>
                Developer attaches function  
                <br />👉 add_action() / add_filter()
              </li>

              <li>
                Function runs automatically  
                <br />👉 At that hook point
              </li>
            </ul>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Real-Life Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`// Add Google Analytics script
function add_tracking_code() {
  echo "<script>console.log('Tracking')</script>";
}

add_action('wp_head', 'add_tracking_code');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Add tracking script in website head
            </p>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                No core file changes  
                <br />👉 Safe updates
              </li>

              <li>
                Flexible customization  
                <br />👉 Add/modify features
              </li>

              <li>
                Reusable logic  
                <br />👉 Use in plugins/themes
              </li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Using wrong hook name  
                <br />👉 Code won’t run
              </li>

              <li>
                Forgetting return in filters  
                <br />👉 Breaks data flow
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Hooks extend WordPress without modifying core</li>
              <li>Two types: Actions & Filters</li>
              <li>add_action() and add_filter()</li>
              <li>Example: wp_footer, the_title</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}