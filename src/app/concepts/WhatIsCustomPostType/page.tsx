export default function WhatIsCustomPostType() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is a Custom Post Type in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              A Custom Post Type (CPT) is a custom content type in WordPress
              used to create and manage different kinds of content beyond
              default Posts and Pages.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Products, Movies, Courses, Portfolio Items
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use Custom Post Types
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Organize content separately  
                <br />👉 Blog posts vs Products
              </li>

              <li>
                Better content management  
                <br />👉 Separate admin sections
              </li>

              <li>
                Custom website functionality  
                <br />👉 Portfolio, Events, Jobs
              </li>
            </ul>
          </section>

          {/* Default vs Custom */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Default Post Types vs Custom Post Types
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Default Post Types:
- Posts
- Pages
- Attachments

Custom Post Types:
- Products
- Courses
- Portfolio
- Testimonials`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: WooCommerce uses &quot;product&quot; CPT
            </p>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. How Custom Post Types Work
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                WordPress registers a new post type  
                <br />👉 Using register_post_type()
              </li>

              <li>
                New admin menu appears  
                <br />👉 Separate content section
              </li>

              <li>
                Uses custom templates  
                <br />👉 single-product.php
              </li>
            </ul>
          </section>

          {/* Basic Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Basic Custom Post Type Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`function create_movie_post_type() {

  register_post_type('movies',
    array(
      'labels' => array(
        'name' => 'Movies',
        'singular_name' => 'Movie'
      ),
      'public' => true,
      'has_archive' => true,
    )
  );

}

add_action('init', 'create_movie_post_type');`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Creates a Movies section in dashboard
            </p>
          </section>

          {/* Real Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Real-World Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">
              <li>
                WooCommerce  
                <br />👉 Product post type
              </li>

              <li>
                LMS Website  
                <br />👉 Courses post type
              </li>

              <li>
                Portfolio Website  
                <br />👉 Projects post type
              </li>

              <li>
                Job Portal  
                <br />👉 Jobs post type
              </li>
            </ul>
          </section>

          {/* Template Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Template Hierarchy Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`single-movies.php
archive-movies.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Separate design for movie pages
            </p>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Better content organization  
                <br />👉 Separate sections
              </li>

              <li>
                Scalable architecture  
                <br />👉 Large websites
              </li>

              <li>
                Flexible customization  
                <br />👉 Custom templates
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Limitations
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Requires coding knowledge  
                <br />👉 PHP understanding needed
              </li>

              <li>
                Template management complexity  
                <br />👉 Multiple files
              </li>
            </ul>
          </section>

          {/* Plugin Method */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Plugins for Creating CPT
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Custom Post Type UI  
                <br />👉 Create CPT without coding
              </li>

              <li>
                ACF (Advanced Custom Fields)  
                <br />👉 Add custom fields
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Custom Post Types manage custom content</li>
              <li>Created using register_post_type()</li>
              <li>Example: Products, Movies, Courses</li>
              <li>Supports custom templates</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}