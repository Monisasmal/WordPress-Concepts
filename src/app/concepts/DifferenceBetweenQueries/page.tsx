export default function DifferenceBetweenQueries() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between WP_Query, get_posts() and query_posts()
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Introduction */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Introduction
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress provides multiple ways to fetch posts from the database.
              The most common methods are:
            </p>

            <ul className="list-disc ml-5 mt-2 text-sm sm:text-base text-gray-700 space-y-1">
              <li>WP_Query</li>
              <li>get_posts()</li>
              <li>query_posts()</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Each method works differently and has different use cases
            </p>
          </section>

          {/* WP_Query */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. What is WP_Query
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WP_Query is the most powerful and flexible way to fetch posts.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`$args = array(
  'post_type' => 'post'
);

$query = new WP_Query($args);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Recommended method for custom queries
            </p>
          </section>

          {/* get_posts */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. What is get_posts()
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              get_posts() is a simplified wrapper around WP_Query.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`$posts = get_posts(array(
  'numberposts' => 5
));`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Best for simple queries
            </p>
          </section>

          {/* query_posts */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. What is query_posts()
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              query_posts() modifies the main WordPress query.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`query_posts(array(
  'posts_per_page' => 5
));`}
            </pre>

            <p className="text-sm text-red-700 mt-2 font-semibold">
              ⚠️ Not recommended for modern WordPress development
            </p>
          </section>

          {/* Internal Working */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Internal Working Difference
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`WP_Query
   ↓
Creates New Query Object

get_posts()
   ↓
Uses WP_Query Internally

query_posts()
   ↓
Modifies Main Global Query`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 query_posts() affects the entire page query
            </p>
          </section>

          {/* Comparison Table */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6 overflow-x-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              6. Main Differences
            </h2>

            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border p-2">Feature</th>
                  <th className="border p-2">WP_Query</th>
                  <th className="border p-2">get_posts()</th>
                  <th className="border p-2">query_posts()</th>
                </tr>
              </thead>

              <tbody>

                <tr className="bg-white">
                  <td className="border p-2 font-medium">Performance</td>
                  <td className="border p-2">Good</td>
                  <td className="border p-2">Fast</td>
                  <td className="border p-2">Poor</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2 font-medium">Flexibility</td>
                  <td className="border p-2">Very High</td>
                  <td className="border p-2">Limited</td>
                  <td className="border p-2">Medium</td>
                </tr>

                <tr className="bg-white">
                  <td className="border p-2 font-medium">Creates New Query</td>
                  <td className="border p-2">Yes</td>
                  <td className="border p-2">Yes</td>
                  <td className="border p-2">No</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2 font-medium">Modifies Main Query</td>
                  <td className="border p-2">No</td>
                  <td className="border p-2">No</td>
                  <td className="border p-2">Yes</td>
                </tr>

                <tr className="bg-white">
                  <td className="border p-2 font-medium">Recommended</td>
                  <td className="border p-2">Yes</td>
                  <td className="border p-2">Yes</td>
                  <td className="border p-2">No</td>
                </tr>

              </tbody>
            </table>
          </section>

          {/* WP_Query Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. WP_Query Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$args = array(
  'category_name' => 'wordpress'
);

$query = new WP_Query($args);

while($query->have_posts()) :
  $query->the_post();

  the_title();

endwhile;

wp_reset_postdata();`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Best for advanced custom loops
            </p>
          </section>

          {/* get_posts Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. get_posts() Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$posts = get_posts(array(
  'numberposts' => 3
));

foreach($posts as $post) {
  echo $post->post_title;
}`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Easy for small simple queries
            </p>
          </section>

          {/* query_posts Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. query_posts() Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`query_posts(array(
  'posts_per_page' => 2
));

while(have_posts()) :
  the_post();

  the_title();

endwhile;`}
            </pre>

            <p className="text-sm text-red-700 mt-2 font-semibold">
              ⚠️ Can break pagination and performance
            </p>
          </section>

          {/* Real World */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Real-World Usage
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WP_Query  
                <br />👉 Portfolio sections, custom layouts
              </li>

              <li>
                get_posts()  
                <br />👉 Sidebar recent posts
              </li>

              <li>
                query_posts()  
                <br />👉 Old themes (avoid now)
              </li>

            </ul>
          </section>

          {/* Best Practice */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Best Practice
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Use WP_Query for custom queries
              </li>

              <li>
                Use get_posts() for simple data fetching
              </li>

              <li>
                Avoid query_posts()
              </li>

              <li>
                Always reset post data
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>WP_Query is the most powerful query method</li>
              <li>get_posts() is a simplified WP_Query wrapper</li>
              <li>query_posts() modifies the global query</li>
              <li>Modern development prefers WP_Query</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}