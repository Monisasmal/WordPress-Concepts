export default function CategoriesVsTags() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between Categories and Tags
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Categories and Tags are both taxonomies in WordPress used to organize
              content, but they serve different purposes in structuring and describing posts.
            </p>
          </section>

          {/* Key Differences */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Key Differences
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Categories → Broad grouping of posts</li>
              <li>Tags → Specific details or keywords</li>
              <li>Categories → Hierarchical (parent-child)</li>
              <li>Tags → Non-hierarchical</li>
              <li>Categories → Required (at least one per post)</li>
              <li>Tags → Optional</li>
              <li>Categories → Limited in number</li>
              <li>Tags → Can be many</li>
            </ul>
          </section>

          {/* Structure */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Structure Difference
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Categories → Create site structure</li>
              <li>Tags → Provide micro-level classification</li>
            </ul>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Example
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Post: &quot;Learn React Hooks&quot;</li>
              <li>Category: Web Development</li>
              <li>Tags: React, Hooks, JavaScript</li>
            </ul>
          </section>

          {/* SEO */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. SEO Impact
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Categories → Strong SEO structure</li>
              <li>Tags → Help internal linking</li>
              <li>Overuse of tags can harm SEO</li>
            </ul>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Internal Working
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Both stored as taxonomies in database</li>
              <li>Linked to posts via relationships</li>
              <li>Each has its own archive page</li>
            </ul>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Use Categories → Define main topics</li>
              <li>Use Tags → Add specific keywords</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Categories = broad grouping (hierarchical)</li>
              <li>Tags = specific keywords (non-hierarchical)</li>
              <li>Categories required; tags optional</li>
              <li>Both are taxonomies in WordPress</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}