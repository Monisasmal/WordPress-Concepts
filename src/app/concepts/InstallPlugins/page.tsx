export default function InstallPlugins() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Install Plugins in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Plugins can be installed in WordPress using multiple methods such as
              the dashboard, uploading a ZIP file, or manual installation using FTP.
            </p>
          </section>

          {/* Method 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Method 1: Install from WordPress Dashboard
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Dashboard → Plugins → Add New</li>
              <li>Search for a plugin</li>
              <li>Click “Install Now”</li>
              <li>Click “Activate”</li>
            </ul>
          </section>

          {/* Method 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Method 2: Upload Plugin (ZIP File)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Plugins → Add New</li>
              <li>Click “Upload Plugin”</li>
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
              <li>Download and extract plugin files</li>
              <li>Upload to <code>/wp-content/plugins/</code></li>
              <li>Go to Dashboard → Plugins</li>
              <li>Click “Activate”</li>
            </ul>
          </section>

          {/* Activation */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. What Happens After Activation
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Plugin becomes active</li>
              <li>New features/options appear in dashboard</li>
              <li>Plugin hooks into WordPress functionality</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Plugin files stored in plugins folder</li>
              <li>WordPress updates active plugins list in database</li>
              <li>Loads plugin code during runtime</li>
              <li>Executes hooks (actions & filters)</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Easy installation process</li>
              <li>No coding required</li>
              <li>Quickly extend features</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Too many plugins can slow site</li>
              <li>Compatibility issues</li>
              <li>Security risks if not updated</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Install via dashboard, ZIP upload, or FTP</li>
              <li>Activate to enable functionality</li>
              <li>Stored in /wp-content/plugins/</li>
              <li>Uses hooks internally</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}