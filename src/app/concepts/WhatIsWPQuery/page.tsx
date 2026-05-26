export default function WhatIsWPQuery() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is WP_Query in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WP_Query is a WordPress PHP class used to fetch posts,
              pages, custom post types, and other content from the database.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Used to create custom content queries in WordPress
            </p>
          </section>

          {/* Why Use */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use WP_Query
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Fetch custom posts  
                <br />👉 Display dynamic content
              </li>

              <li>
                Filter content  
                <br />👉 Categories, tags, authors
              </li>

              <li>
                Create custom loops  
                <br />👉 Custom layouts
              </li>

              <li>
                Build advanced websites  
                <br />👉 Blogs, portfolios, eCommerce
              </li>

            </ul>
          </section>

          {/* Basic Syntax */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Basic Syntax
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`<?php

$args = array(
  'post_type' => 'post'
);

$query = new WP_Query($args);

if($query->have_posts()) :
  while($query->have_posts()) :
    $query->the_post();

    the_title();

  endwhile;
endif;

wp_reset_postdata();

?>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Fetches and displays blog posts
            </p>
          </section>

          {/* How It Works */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. How WP_Query Works Internally
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`WP_Query Request
      ↓
Generate SQL Query
      ↓
Fetch Data from Database
      ↓
Store Results
      ↓
Loop Through Posts`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 WP_Query converts arguments into SQL queries
            </p>
          </section>

          {/* Query Arguments */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Common Query Arguments
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  'post_type' => 'post',
  'posts_per_page' => 5,
  'category_name' => 'react',
  'orderby' => 'date',
  'order' => 'DESC'
);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Controls how posts are fetched
            </p>
          </section>

          {/* Custom Post Type */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Query Custom Post Types
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  'post_type' => 'movies'
);

$movies = new WP_Query($args);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Fetches movie custom post type data
            </p>
          </section>

          {/* Category Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Category Query Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  'category_name' => 'wordpress'
);

$query = new WP_Query($args);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Displays posts from WordPress category
            </p>
          </section>

          {/* Search Query */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Search Query Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  's' => 'React'
);

$query = new WP_Query($args);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Searches posts containing &quot;React&quot;
            </p>
          </section>

          {/* Pagination */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Pagination Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  'posts_per_page' => 10,
  'paged' => get_query_var('paged')
);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Used for paginated content
            </p>
          </section>

          {/* Reset */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. wp_reset_postdata()
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Resets global post data after custom query.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`wp_reset_postdata();`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Prevents conflicts with main query
            </p>
          </section>

          {/* Real Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Real-World Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                Blog websites  
                <br />👉 Latest post sections
              </li>

              <li>
                Portfolio websites  
                <br />👉 Display projects
              </li>

              <li>
                News websites  
                <br />👉 Category-based news feeds
              </li>

              <li>
                eCommerce stores  
                <br />👉 Product queries
              </li>

            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Flexible content fetching  
                <br />👉 Highly customizable
              </li>

              <li>
                Supports CPTs and taxonomies  
                <br />👉 Advanced filtering
              </li>

              <li>
                Easy pagination  
                <br />👉 Better user experience
              </li>

            </ul>
          </section>

          {/* Common Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Forgetting wp_reset_postdata()  
                <br />👉 Breaks main loop
              </li>

              <li>
                Using too many queries  
                <br />👉 Performance issues
              </li>

              <li>
                Incorrect arguments  
                <br />👉 Empty results
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>WP_Query fetches data from WordPress database</li>
              <li>Used for custom loops and filtering</li>
              <li>Supports categories, tags, CPTs, pagination</li>
              <li>Always use wp_reset_postdata() after custom query</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}