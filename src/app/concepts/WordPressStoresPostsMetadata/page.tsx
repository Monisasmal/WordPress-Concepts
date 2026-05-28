export default function WordPressStoresPostsMetadata() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How WordPress Stores Posts and Metadata
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              WordPress stores posts, pages, custom post types,
              and metadata inside MySQL database tables.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Core content is mainly stored in wp_posts and wp_postmeta tables
            </p>
          </section>

          {/* Main Tables */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Important Database Tables
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                wp_posts  
                <br />👉 Stores posts, pages, CPTs, attachments
              </li>

              <li>
                wp_postmeta  
                <br />👉 Stores custom metadata
              </li>

              <li>
                wp_terms  
                <br />👉 Stores categories and tags names
              </li>

              <li>
                wp_term_taxonomy  
                <br />👉 Stores taxonomy types
              </li>

              <li>
                wp_term_relationships  
                <br />👉 Connects posts with taxonomies
              </li>

            </ul>
          </section>

          {/* wp_posts */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. wp_posts Table
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              The wp_posts table stores all main content in WordPress.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Examples Stored:
- Blog Posts
- Pages
- Attachments
- Menus
- Custom Post Types`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Everything is treated as a &quot;post&quot; internally
            </p>
          </section>

          {/* wp_posts columns */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6 overflow-x-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              4. Important Columns in wp_posts
            </h2>

            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border p-2">Column</th>
                  <th className="border p-2">Purpose</th>
                </tr>
              </thead>

              <tbody>

                <tr className="bg-white">
                  <td className="border p-2">ID</td>
                  <td className="border p-2">Unique post ID</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2">post_title</td>
                  <td className="border p-2">Post title</td>
                </tr>

                <tr className="bg-white">
                  <td className="border p-2">post_content</td>
                  <td className="border p-2">Main content</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2">post_type</td>
                  <td className="border p-2">post, page, product, etc.</td>
                </tr>

                <tr className="bg-white">
                  <td className="border p-2">post_status</td>
                  <td className="border p-2">publish, draft, trash</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2">post_date</td>
                  <td className="border p-2">Creation date</td>
                </tr>

              </tbody>
            </table>
          </section>

          {/* Example Post */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Example Post Record
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`ID: 101
post_title: "Learn React"
post_type: "post"
post_status: "publish"
post_content: "React tutorial content..."`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Represents one blog post
            </p>
          </section>

          {/* Metadata */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. What is Metadata
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Metadata is additional information related to a post.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`Examples:
- Featured image
- Custom fields
- SEO settings
- Product price`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Stored inside wp_postmeta table
            </p>
          </section>

          {/* wp_postmeta */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6 overflow-x-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              7. wp_postmeta Table Structure
            </h2>

            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border p-2">Column</th>
                  <th className="border p-2">Purpose</th>
                </tr>
              </thead>

              <tbody>

                <tr className="bg-white">
                  <td className="border p-2">meta_id</td>
                  <td className="border p-2">Unique meta ID</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2">post_id</td>
                  <td className="border p-2">Related post ID</td>
                </tr>

                <tr className="bg-white">
                  <td className="border p-2">meta_key</td>
                  <td className="border p-2">Metadata name</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border p-2">meta_value</td>
                  <td className="border p-2">Metadata value</td>
                </tr>

              </tbody>
            </table>
          </section>

          {/* Metadata Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Metadata Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`post_id: 101
meta_key: "_thumbnail_id"
meta_value: "220"`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Stores featured image ID for post 101
            </p>
          </section>

          {/* Internal Flow */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Internal Storage Flow
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`User Creates Post
       ↓
WordPress Saves Data
       ↓
wp_posts Table
       ↓
Additional Metadata
       ↓
wp_postmeta Table`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Core content and metadata are separated
            </p>
          </section>

          {/* Fetch Meta */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Fetch Metadata Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`$price = get_post_meta(101, 'price', true);

echo $price;`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Retrieves custom metadata value
            </p>
          </section>

          {/* Save Meta */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Save Metadata Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`update_post_meta(
  101,
  'price',
  '499'
);`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Saves product price metadata
            </p>
          </section>

          {/* Real World */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              12. Real-World Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">

              <li>
                WooCommerce  
                <br />👉 Stores product prices in metadata
              </li>

              <li>
                SEO Plugins  
                <br />👉 Stores meta title and description
              </li>

              <li>
                Custom Fields  
                <br />👉 Additional post information
              </li>

            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              13. Advantages of This Structure
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">

              <li>
                Flexible data storage  
                <br />👉 Unlimited metadata
              </li>

              <li>
                Easy querying  
                <br />👉 Search and filtering
              </li>

              <li>
                Extensible architecture  
                <br />👉 Plugins can add custom data
              </li>

            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>wp_posts stores posts, pages, CPTs</li>
              <li>wp_postmeta stores additional metadata</li>
              <li>Metadata uses key-value structure</li>
              <li>WordPress uses MySQL relational database</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}