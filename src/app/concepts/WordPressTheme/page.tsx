export default function WordPressTheme() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is a Theme in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              A theme in WordPress controls the visual appearance and layout of your website.
              It defines how your content (posts, pages, media) is displayed to users.
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Purpose of a Theme
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Control website design and layout</li>
              <li>Define colors, fonts, and styling</li>
              <li>Structure content display</li>
              <li>Provide UI/UX for users</li>
            </ul>
          </section>

          {/* Features */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Key Features
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Pre-built templates (header, footer, pages)</li>
              <li>Customizable design options</li>
              <li>Responsive layouts</li>
              <li>Integration with plugins</li>
            </ul>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Types of Themes
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Free themes (WordPress repository)</li>
              <li>Premium themes (paid)</li>
              <li>Custom-built themes</li>
              <li>Child themes (extend existing themes)</li>
            </ul>
          </section>

          {/* Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Popular Theme Examples
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mb-2 font-medium">
              Free Themes:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Astra</li>
              <li>OceanWP</li>
              <li>GeneratePress</li>
              <li>Neve</li>
            </ul>

            <p className="text-sm sm:text-base text-gray-700 mt-4 mb-2 font-medium">
              Premium Themes:
            </p>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Divi</li>
              <li>Avada</li>
              <li>Flatsome</li>
              <li>Enfold</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How Themes Work Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Uses PHP template files</li>
              <li>Fetches content from database</li>
              <li>Applies HTML, CSS, and JavaScript</li>
              <li>Renders final UI in browser</li>
            </ul>
          </section>

          {/* Files */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Important Theme Files
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>style.css → Main styling</li>
              <li>index.php → Main template</li>
              <li>functions.php → Theme functionality</li>
              <li>header.php / footer.php → Layout parts</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Quick design setup</li>
              <li>No need to design from scratch</li>
              <li>Highly customizable</li>
              <li>Responsive and modern UI</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Heavy themes can slow performance</li>
              <li>Limited customization without coding</li>
              <li>Dependency on theme updates</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Theme controls UI/design</li>
              <li>Built using PHP, HTML, CSS</li>
              <li>Uses template files</li>
              <li>Can be customized or extended</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}