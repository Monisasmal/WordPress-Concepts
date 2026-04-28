export default function TagsInWordPress() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Tags in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Tags in WordPress are used to describe specific details of a post.
              They help connect related content across different categories and
              improve content discoverability.
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Purpose of Tags
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Highlight specific topics within a post</li>
              <li>Improve content navigation</li>
              <li>Connect related posts</li>
              <li>Enhance search and SEO</li>
            </ul>
          </section>

          {/* Features */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Key Features
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Non-hierarchical (no parent-child)</li>
              <li>Optional (not required like categories)</li>
              <li>Flexible and descriptive</li>
              <li>Can assign multiple tags to a post</li>
            </ul>
          </section>

          {/* Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Example
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Post Title: Learn React</li>
              <li>Category: Web Development</li>
              <li>Tags: React, Hooks, JavaScript, Frontend</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Stored in taxonomy tables in database</li>
              <li>Linked to posts via relationships</li>
              <li>WordPress creates tag archive pages</li>
              <li>Used to filter and display related content</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Improves content discoverability</li>
              <li>Connects related posts easily</li>
              <li>Flexible content organization</li>
              <li>Enhances user experience</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Overuse can create clutter</li>
              <li>No hierarchical structure</li>
              <li>Poor planning can hurt SEO</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Tags describe specific details of posts</li>
              <li>Non-hierarchical taxonomy</li>
              <li>Optional for posts</li>
              <li>Used to connect related content</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}