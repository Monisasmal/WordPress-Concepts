export default function DefaultVsCustomTaxonomy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between Default and Custom Taxonomy
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Taxonomies are used in WordPress to organize and group content.
              WordPress provides default taxonomies, and developers can also
              create custom taxonomies.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Default = Built into WordPress  
              <br />
              👉 Custom = Created by developer
            </p>
          </section>

          {/* Default Taxonomy */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Default Taxonomy
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Default taxonomies are already included in WordPress.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Default Taxonomies:
- Categories
- Tags`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Blog categories like Frontend, Backend
            </p>
          </section>

          {/* Custom Taxonomy */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Custom Taxonomy
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Custom taxonomies are created by developers for specific content types.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Examples:
- Movie Genres
- Product Brands
- Course Levels`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Genre taxonomy for Movies CPT
            </p>
          </section>

          {/* Comparison */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Key Differences
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Feature          Default Taxonomy     Custom Taxonomy
--------------------------------------------------------
Created By        WordPress            Developer
Examples          Categories, Tags    Genres, Brands
Purpose           General grouping    Specific grouping
Customization     Limited              Highly flexible
Usage             Normal posts         CPTs & advanced sites`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Real-World Example
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                Blog Website  
                <br />👉 Categories: React, Node.js
              </li>

              <li>
                Movie Website  
                <br />👉 Custom Taxonomy: Action, Comedy, Horror
              </li>

              <li>
                eCommerce Website  
                <br />👉 Product Brands taxonomy
              </li>

            </ul>
          </section>

          {/* Custom Taxonomy Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Custom Taxonomy Example Code
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
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
              👉 Example: Creates Genre taxonomy for Movies
            </p>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages of Custom Taxonomy
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Better content organization  
                <br />👉 Structured websites
              </li>

              <li>
                Flexible filtering  
                <br />👉 Search by taxonomy
              </li>

              <li>
                Works with CPTs  
                <br />👉 Advanced websites
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
                Using too many taxonomies  
                <br />👉 Confusing structure
              </li>

              <li>
                Poor naming conventions  
                <br />👉 Hard maintenance
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Default taxonomies are built into WordPress</li>
              <li>Custom taxonomies are developer-created</li>
              <li>Examples: Categories vs Genres</li>
              <li>Custom taxonomies work well with CPTs</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}