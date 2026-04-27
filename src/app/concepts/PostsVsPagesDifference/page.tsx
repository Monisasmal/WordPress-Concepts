export default function PostsVsPagesDifference() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between Posts and Pages
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              In WordPress, Posts and Pages are both content types, but they serve
              different purposes. Posts are dynamic and time-based, while Pages are
              static and used for permanent content.
            </p>
          </section>

          {/* Key Differences */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Key Differences
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Posts → Dynamic, time-based content</li>
              <li>Pages → Static, timeless content</li>
              <li>Posts → Appear in blog feed</li>
              <li>Pages → Not part of blog feed</li>
              <li>Posts → Use categories and tags</li>
              <li>Pages → No categories or tags</li>
              <li>Posts → Support comments</li>
              <li>Pages → Comments usually disabled</li>
            </ul>
          </section>

          {/* Structure */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Structure Difference
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Posts → Organized by categories & tags</li>
              <li>Pages → Organized hierarchically (parent-child)</li>
            </ul>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Use Posts → Blogs, news, updates</li>
              <li>Use Pages → About, Contact, Services, Landing pages</li>
            </ul>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Internal Working
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Both stored in same database table (wp_posts)</li>
              <li>Different post types: &quot;post&quot; vs &quot;page&quot;</li>
              <li>Rendered differently by themes</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Why This Separation Matters
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Better content organization</li>
              <li>Improves SEO structure</li>
              <li>Clear distinction between dynamic and static content</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Posts = dynamic, time-based, blog content</li>
              <li>Pages = static, permanent content</li>
              <li>Posts use categories/tags; pages don’t</li>
              <li>Both stored in same table but different post types</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}