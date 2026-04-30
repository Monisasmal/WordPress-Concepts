export default function UpdatePlugins() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          How to Update Plugins in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Updating plugins is important for security, performance, and new features.
              WordPress allows you to update plugins manually or automatically.
            </p>
          </section>

          {/* Method 1 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Method 1: Update from Dashboard
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Dashboard → Plugins</li>
              <li>Check for update notifications</li>
              <li>Click “Update Now”</li>
            </ul>
          </section>

          {/* Method 2 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Method 2: Bulk Update
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Dashboard → Updates</li>
              <li>Select plugins</li>
              <li>Click “Update Plugins”</li>
            </ul>
          </section>

          {/* Method 3 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Method 3: Enable Auto Updates
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Go to Plugins page</li>
              <li>Click “Enable Auto-updates”</li>
              <li>WordPress updates automatically</li>
            </ul>
          </section>

          {/* Method 4 */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Method 4: Manual Update (FTP)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Download latest plugin version</li>
              <li>Deactivate plugin</li>
              <li>Replace old plugin folder in <code>/wp-content/plugins/</code></li>
              <li>Activate plugin again</li>
            </ul>
          </section>

          {/* What Happens */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. What Happens During Update
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Old plugin files are replaced</li>
              <li>New features and fixes are added</li>
              <li>Database may be updated</li>
            </ul>
          </section>

          {/* Best Practices */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Best Practices
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Always take backup before updating</li>
              <li>Update regularly</li>
              <li>Check compatibility with theme</li>
              <li>Test on staging site if possible</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Improves security</li>
              <li>Fixes bugs</li>
              <li>Adds new features</li>
            </ul>
          </section>

          {/* Risks */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Risks
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Plugin conflicts</li>
              <li>Site break if incompatible</li>
              <li>Data issues in rare cases</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Update via dashboard, bulk, auto, or FTP</li>
              <li>Important for security & performance</li>
              <li>Always take backup before update</li>
              <li>Check compatibility</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}