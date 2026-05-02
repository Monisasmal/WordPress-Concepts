export default function WhatIsTemplateHierarchy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Template Hierarchy in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Template hierarchy is the system WordPress uses to decide which
              template file should be used to display a specific page or post.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: A single blog post may use <code>single.php</code>
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Template Hierarchy is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Controls page design  
                <br />👉 Example: Blog page vs homepage layout
              </li>

              <li>
                Allows customization  
                <br />👉 Example: Different design for categories
              </li>

              <li>
                Avoids code duplication  
                <br />👉 Reuse templates
              </li>
            </ul>
          </section>

          {/* How it works */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. How It Works
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress checks template files in a specific order and uses
              the first file it finds.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Example (Single Post):
single-post.php → single.php → index.php`}
            </pre>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Real Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              If you open a blog post:
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`WordPress will try:

single-post.php
single.php
index.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 If <code>single-post.php</code> exists → it will be used
            </p>
          </section>

          {/* Common templates */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Common Template Files
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                <code>index.php</code> (fallback)  
                <br />👉 Used if no other file found
              </li>

              <li>
                <code>home.php</code>  
                <br />👉 Blog homepage
              </li>

              <li>
                <code>page.php</code>  
                <br />👉 Static pages
              </li>

              <li>
                <code>single.php</code>  
                <br />👉 Single post
              </li>

              <li>
                <code>archive.php</code>  
                <br />👉 Category/tag pages
              </li>

              <li>
                <code>404.php</code>  
                <br />👉 Not found page
              </li>
            </ul>
          </section>

          {/* Category Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Category Page Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`category-tech.php
category.php
archive.php
index.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 WordPress picks the first available file
            </p>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Flexible design  
                <br />👉 Different layouts for different pages
              </li>

              <li>
                Organized structure  
                <br />👉 Easy to manage themes
              </li>

              <li>
                Reusability  
                <br />👉 Common templates reused
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
                Not understanding hierarchy order  
                <br />👉 Wrong file used
              </li>

              <li>
                Missing fallback file  
                <br />👉 Always need index.php
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Defines which template file is used</li>
              <li>Follows priority order</li>
              <li>index.php is fallback</li>
              <li>Example: single.php, page.php</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}