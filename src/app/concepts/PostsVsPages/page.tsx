export default function PostsVsPages() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Posts and Pages in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Posts and Pages are two main content types in WordPress.
              Posts are dynamic and used for blog content, while Pages are static
              and used for fixed website content.
            </p>
          </section>

          {/* Posts */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. What are Posts
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Used for blog articles and updates</li>
              <li>Displayed in reverse chronological order</li>
              <li>Can have categories and tags</li>
              <li>Supports comments</li>
              <li>Dynamic and regularly updated</li>
            </ul>
          </section>

          {/* Pages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. What are Pages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Used for static content</li>
              <li>Examples: About Us, Contact, Services</li>
              <li>No categories or tags</li>
              <li>Usually no comments (optional)</li>
              <li>Do not change frequently</li>
            </ul>
          </section>

          {/* Key Differences */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Key Differences
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Posts → Dynamic, time-based content</li>
              <li>Pages → Static, timeless content</li>
              <li>Posts → Categories & tags</li>
              <li>Pages → Hierarchical (parent-child)</li>
            </ul>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Use Posts → Blogs, news, updates</li>
              <li>Use Pages → About, Contact, Landing pages</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How They Work Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Both are stored in the same database table (wp_posts)</li>
              <li>Different post types: &quot;post&quot; and &quot;page&quot;</li>
              <li>WordPress renders them using themes</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Clear content organization</li>
              <li>Better SEO structure</li>
              <li>Easy content management</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Posts = dynamic blog content</li>
              <li>Pages = static website content</li>
              <li>Stored in same table but different post types</li>
              <li>Posts support categories/tags, pages don’t</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}