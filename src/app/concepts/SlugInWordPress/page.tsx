export default function SlugInWordPress() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is a Slug in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              A slug is the URL-friendly version of a post, page, category, or tag name.
              It appears at the end of the URL and helps identify a specific resource.
            </p>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Example
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Post Title: Learn WordPress Basics</li>
              <li>Slug: <code>learn-wordpress-basics</code></li>
              <li>URL: <code>example.com/learn-wordpress-basics</code></li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where Slugs Are Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Posts and Pages URLs</li>
              <li>Categories and Tags URLs</li>
              <li>Custom Post Types</li>
            </ul>
          </section>

          {/* Features */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Key Features
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Automatically generated from title</li>
              <li>Uses lowercase letters</li>
              <li>Spaces replaced with hyphens (-)</li>
              <li>Can be edited manually</li>
            </ul>
          </section>

          {/* SEO */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. SEO Importance
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Makes URLs readable and user-friendly</li>
              <li>Improves search engine ranking</li>
              <li>Helps users understand page content</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Stored in database with post data</li>
              <li>Used by WordPress routing system</li>
              <li>Mapped to content via rewrite rules</li>
            </ul>
          </section>

          {/* Best Practices */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Best Practices
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Keep it short and meaningful</li>
              <li>Use keywords</li>
              <li>Avoid special characters</li>
              <li>Use hyphens instead of underscores</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Slug = URL-friendly name</li>
              <li>Used in posts, pages, categories</li>
              <li>Important for SEO</li>
              <li>Automatically generated but editable</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}