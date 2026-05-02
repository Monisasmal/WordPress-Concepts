export default function WhatIsChildTheme() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is a Child Theme in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              A child theme is a theme that inherits the design and functionality
              of another theme (called the parent theme) and allows you to make
              changes without modifying the original theme files.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Create a child theme of Astra and customize header design
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use a Child Theme
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Safe customization  
                <br />👉 Changes won’t be lost during updates
              </li>

              <li>
                Keep parent theme intact  
                <br />👉 Original files remain unchanged
              </li>

              <li>
                Easy maintenance  
                <br />👉 Update parent theme anytime
              </li>
            </ul>
          </section>

          {/* Parent vs Child */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Parent vs Child Theme
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Parent Theme:
- Original theme files
- Example: Astra, GeneratePress

Child Theme:
- Custom changes
- Overrides parent styles`}
            </pre>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Simple Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`/* style.css (Child Theme) */
Theme Name: Astra Child
Template: astra

body {
  background-color: #f0f0f0;
}`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Change background color without editing parent theme
            </p>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Create a Child Theme
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Create a new folder in <code>/wp-content/themes/</code></li>
              <li>Add <code>style.css</code> with theme details</li>
              <li>Add <code>functions.php</code> to load parent styles</li>
              <li>Activate child theme from dashboard</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Folder name → <code>astra-child</code>
            </p>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How Child Theme Works Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Loads parent theme first  
                <br />👉 Base design applied
              </li>

              <li>
                Child theme overrides styles/files  
                <br />👉 Custom changes applied
              </li>

              <li>
                Uses inheritance system  
                <br />👉 Only modified files are replaced
              </li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Safe updates  
                <br />👉 No data loss
              </li>

              <li>
                Clean customization  
                <br />👉 Separate code
              </li>

              <li>
                Reusable  
                <br />👉 Use across projects
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Limitations
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Requires basic coding knowledge  
                <br />👉 CSS/PHP needed
              </li>

              <li>
                Depends on parent theme  
                <br />👉 Cannot work independently
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Child theme inherits parent theme</li>
              <li>Safe customization method</li>
              <li>Prevents losing changes on update</li>
              <li>Example: Astra Child Theme</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}