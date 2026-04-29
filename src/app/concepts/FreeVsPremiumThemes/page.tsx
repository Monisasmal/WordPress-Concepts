export default function FreeVsPremiumThemes() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Difference Between Free and Premium Themes
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              WordPress themes are available in both free and premium versions.
              Free themes are cost-effective and basic, while premium themes offer
              advanced features, customization, and dedicated support.
            </p>
          </section>

          {/* Key Differences */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Key Differences
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free Themes → No cost</li>
              <li>Premium Themes → Paid (one-time or subscription)</li>
              <li>Free → Limited features</li>
              <li>Premium → Advanced features & customization</li>
              <li>Free → Basic design</li>
              <li>Premium → Professional design</li>
              <li>Free → Community support</li>
              <li>Premium → Dedicated support</li>
            </ul>
          </section>

          {/* Customization */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Customization
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free → Limited customization options</li>
              <li>Premium → Full customization (layouts, colors, fonts)</li>
            </ul>
          </section>

          {/* Updates */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Updates & Security
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free → Less frequent updates</li>
              <li>Premium → Regular updates & security patches</li>
            </ul>
          </section>

          {/* Use Cases */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. When to Use
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free → Beginners, small projects, blogs</li>
              <li>Premium → Business, eCommerce, professional sites</li>
            </ul>
          </section>

          {/* Pros */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free → No cost, easy to start</li>
              <li>Premium → More features, better performance, support</li>
            </ul>
          </section>

          {/* Cons */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free → Limited features, no support</li>
              <li>Premium → Cost involved</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Free = basic, no cost</li>
              <li>Premium = advanced, paid</li>
              <li>Premium offers support & customization</li>
              <li>Choose based on project needs</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}