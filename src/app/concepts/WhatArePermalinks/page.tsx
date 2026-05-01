export default function WhatArePermalinks() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Permalinks in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Permalinks are the permanent URLs of your posts, pages, and other content
              in WordPress.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example:  
              <br />
              https://mysite.com/blog/what-is-wordpress
            </p>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Default vs SEO-Friendly Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Default (Bad):
https://example.com/?p=123

SEO Friendly (Good):
https://example.com/what-is-wordpress`}
            </pre>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Types of Permalink Structures
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Plain → <code>?p=123</code>  
                <br />👉 Example: https://site.com/?p=10
              </li>

              <li>
                Day & Name → <code>/2026/05/01/post-name/</code>  
                <br />👉 Example: https://site.com/2026/05/01/wordpress-guide
              </li>

              <li>
                Month & Name → <code>/2026/05/post-name/</code>  
                <br />👉 Example: https://site.com/2026/05/wordpress-guide
              </li>

              <li>
                Post Name (Best) → <code>/post-name/</code>  
                <br />👉 Example: https://site.com/wordpress-guide
              </li>

              <li>
                Custom → <code>/category/post-name/</code>  
                <br />👉 Example: https://site.com/blog/wordpress-guide
              </li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Permalinks are Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                SEO Friendly  
                <br />👉 Example: Google prefers /wordpress-guide over ?p=123
              </li>

              <li>
                User-Friendly  
                <br />👉 Users understand the content from URL
              </li>

              <li>
                Easy Sharing  
                <br />👉 Clean links are easier to remember
              </li>
            </ul>
          </section>

          {/* Change */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Change Permalinks
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Go to Dashboard → Settings → Permalinks</li>
              <li>Select “Post Name”</li>
              <li>Click “Save Changes”</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example:  
              Change from  
              https://site.com/?p=45  
              to  
              https://site.com/wordpress-basics
            </p>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How Permalinks Work Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                URL is rewritten using rules  
                <br />👉 /wordpress-guide → mapped to post ID
              </li>

              <li>
                Uses .htaccess file  
                <br />👉 Controls routing on server
              </li>

              <li>
                Fetches content from database  
                <br />👉 Displays correct post
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
                Clean URLs  
                <br />👉 /learn-wordpress
              </li>

              <li>
                Better SEO  
                <br />👉 Keywords in URL improve ranking
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
                Changing permalinks after publishing  
                <br />👉 Breaks old links
              </li>

              <li>
                Not using SEO structure  
                <br />👉 ?p=123 instead of /post-name
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Permalinks = permanent URLs</li>
              <li>Post Name is best for SEO</li>
              <li>Uses rewrite rules</li>
              <li>Example: /wordpress-guide</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}