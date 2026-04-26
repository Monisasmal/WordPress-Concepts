export default function WhyUseWordPress() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Why Use WordPress Over Custom Development
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              WordPress is a ready-to-use CMS that provides pre-built features,
              themes, and plugins, whereas custom development requires building
              everything from scratch using code.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use WordPress Over Custom Development
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>When you need a website quickly</li>
              <li>When budget is limited</li>
              <li>For blogs, business websites, portfolios</li>
              <li>When non-developers need to manage content</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where WordPress is Better
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Content-heavy websites (blogs, news portals)</li>
              <li>Small to medium business websites</li>
              <li>eCommerce using WooCommerce</li>
              <li>Freelancer and portfolio sites</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Choose WordPress
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>Faster development (no need to build from scratch)</li>
              <li>Thousands of themes and plugins available</li>
              <li>Cost-effective compared to custom development</li>
              <li>Easy content management for non-technical users</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How WordPress Saves Time
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Pre-built CMS handles content management</li>
              <li>Plugins add features without coding</li>
              <li>Themes handle design and layout</li>
              <li>No need to build authentication, admin panel, etc.</li>
            </ul>
          </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Custom vs WordPress Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{String.raw`// Custom Development (Node/Express)
app.get('/blog', (req, res) => {
  // write logic, DB queries, templates manually
});

// WordPress (No code needed)
// Create a page → Add content → Publish`}
            </pre>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages of WordPress
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Quick setup and deployment</li>
              <li>Low development cost</li>
              <li>Large ecosystem (themes, plugins)</li>
              <li>SEO-friendly out of the box</li>
            </ul>
          </section>

          {/* Disadvantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. When Custom Development is Better
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Highly complex applications</li>
              <li>Custom business logic requirements</li>
              <li>Performance-critical large-scale systems</li>
              <li>When full control over architecture is needed</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>WordPress = speed + cost efficiency</li>
              <li>Custom development = flexibility + control</li>
              <li>Choose based on project complexity</li>
              <li>WordPress is ideal for most business websites</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}