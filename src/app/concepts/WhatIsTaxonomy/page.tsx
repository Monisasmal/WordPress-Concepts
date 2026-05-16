export default function WhatIsTaxonomy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Taxonomy in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Taxonomy in WordPress is a way to group and organize content
              such as posts or custom post types.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Categories and Tags are default taxonomies
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Taxonomy is Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Organizes content  
                <br />👉 Easier navigation
              </li>

              <li>
                Improves search/filtering  
                <br />👉 Users find content faster
              </li>

              <li>
                Better website structure  
                <br />👉 Clean content management
              </li>
            </ul>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Types of Taxonomies
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">
              
              <li>
                <strong>Categories</strong>  
                <br />👉 Broad grouping
              </li>

              <li>
                <strong>Tags</strong>  
                <br />👉 Specific keywords
              </li>

              <li>
                <strong>Custom Taxonomies</strong>  
                <br />👉 Developer-created grouping
              </li>
            </ul>
          </section>

          {/* Category Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Categories Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Post:
"Learn React Basics"

Category:
Frontend`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Frontend, Backend, Database
            </p>
          </section>

          {/* Tag Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Tags Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Post:
"Learn React Basics"

Tags:
React, Hooks, JSX`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Smaller topic labels
            </p>
          </section>

          {/* Custom Taxonomy */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Custom Taxonomy Example
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Developers can create custom taxonomies for custom post types.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`register_taxonomy(
  'genre',
  'movies',
  array(
    'label' => 'Genres',
    'public' => true
  )
);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Movie Genres → Action, Comedy, Horror
            </p>
          </section>

          {/* How Works */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. How Taxonomy Works Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                WordPress stores taxonomy terms in database  
                <br />👉 Categories/Tags saved separately
              </li>

              <li>
                Links content with taxonomy  
                <br />👉 Post connected to terms
              </li>

              <li>
                Displays archive pages  
                <br />👉 category/react
              </li>
            </ul>
          </section>

          {/* Real Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Real-World Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">
              
              <li>
                eCommerce Website  
                <br />👉 Product Categories
              </li>

              <li>
                Movie Website  
                <br />👉 Genres
              </li>

              <li>
                Job Portal  
                <br />👉 Job Types
              </li>

              <li>
                Course Website  
                <br />👉 Skill Levels
              </li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Better organization  
                <br />👉 Structured content
              </li>

              <li>
                Improved SEO  
                <br />👉 Archive pages
              </li>

              <li>
                Easy filtering/searching  
                <br />👉 User-friendly navigation
              </li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Too many tags  
                <br />👉 Poor SEO structure
              </li>

              <li>
                Wrong taxonomy planning  
                <br />👉 Confusing navigation
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Taxonomy organizes content</li>
              <li>Default taxonomies = Categories & Tags</li>
              <li>Supports custom taxonomies</li>
              <li>Used with custom post types</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}