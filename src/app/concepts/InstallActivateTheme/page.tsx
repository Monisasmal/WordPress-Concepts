export default function InstallActivateTheme() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Install and Activate a Theme in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Installing a theme in WordPress allows you to change the design and layout
              of your website. You can install themes from the WordPress repository,
              upload custom themes, or add them manually.
            </p>
          </section>

          {/* Method 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Method 1: Install from WordPress Dashboard
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Dashboard → Appearance → Themes</li>
              <li>Click on “Add New”</li>
              <li>Search for a theme</li>
              <li>Click “Install”</li>
              <li>Click “Activate”</li>
            </ul>
          </section>

          {/* Method 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Method 2: Upload Theme (ZIP File)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Appearance → Themes → Add New</li>
              <li>Click “Upload Theme”</li>
              <li>Select ZIP file</li>
              <li>Click “Install Now”</li>
              <li>Click “Activate”</li>
            </ul>
          </section>

          {/* Method 3 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Method 3: Manual Installation (FTP)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Download and extract theme files</li>
              <li>Upload to <code>/wp-content/themes/</code></li>
              <li>Go to Dashboard → Appearance → Themes</li>
              <li>Click “Activate”</li>
            </ul>
          </section>

          {/* Activation */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. What Happens After Activation
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Theme becomes active on website</li>
              <li>Layout and design change instantly</li>
              <li>Theme settings become available</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Theme files stored in themes folder</li>
              <li>WordPress updates active theme setting in database</li>
              <li>Loads template files from active theme</li>
              <li>Renders UI accordingly</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Quick design change</li>
              <li>No coding required</li>
              <li>Easy to switch themes</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Theme compatibility issues</li>
              <li>Customization may be limited</li>
              <li>Switching themes can affect layout</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Install via dashboard, upload, or FTP</li>
              <li>Activate to apply design</li>
              <li>Stored in /wp-content/themes/</li>
              <li>Only one active theme at a time</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}