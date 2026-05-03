export default function ActionVsFilter() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between Action and Filter in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Actions and Filters are two types of hooks in WordPress used to
              extend or modify functionality without editing core files.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Action = Do something  
              <br />
              👉 Filter = Modify something
            </p>
          </section>

          {/* Key Difference */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Key Difference
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Action:
- Executes code
- Does NOT return value

Filter:
- Modifies data
- MUST return value`}
            </pre>
          </section>

          {/* Action */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Action Hook
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Used to perform tasks like adding content, logging, or executing code.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`function add_footer_text() {
  echo "Welcome to my website";
}

add_action('wp_footer', 'add_footer_text');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Add message in footer
            </p>
          </section>

          {/* Filter */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Filter Hook
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Used to modify existing data before displaying it.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`function modify_title($title) {
  return "🔥 " . $title;
}

add_filter('the_title', 'modify_title');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Add emoji to post title
            </p>
          </section>

          {/* Comparison Table */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Comparison Table
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Feature        Action             Filter
--------------------------------------------
Purpose        Execute code       Modify data
Return Value   Not required       Required
Function       add_action()       add_filter()
Example        wp_footer          the_title`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Real-Life Scenario
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Action  
                <br />👉 Add Google Analytics script in header
              </li>

              <li>
                Filter  
                <br />👉 Change post content before display
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
                <br />👉 Breaks output
              </li>

              <li>
                Using action instead of filter  
                <br />👉 Data won’t change
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Action = execute code</li>
              <li>Filter = modify data</li>
              <li>Filter must return value</li>
              <li>Examples: wp_footer, the_title</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}