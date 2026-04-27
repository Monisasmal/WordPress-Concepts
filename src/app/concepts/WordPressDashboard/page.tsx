export default function WordPressDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is the WordPress Dashboard
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              The WordPress Dashboard is the admin control panel where you manage
              your entire website — including content, design, plugins, users,
              and settings.
            </p>
          </section>

          {/* Access */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. How to Access Dashboard
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Go to <code>yourdomain.com/wp-admin</code></li>
              <li>Enter username and password</li>
              <li>Login to access dashboard</li>
            </ul>
          </section>

          {/* Sections */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Main Sections
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Posts → Manage blog posts</li>
              <li>Pages → Create static pages</li>
              <li>Media → Upload images/files</li>
              <li>Appearance → Themes and design</li>
              <li>Plugins → Add new features</li>
              <li>Users → Manage users and roles</li>
              <li>Settings → Configure website</li>
            </ul>
          </section>

          {/* Features */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Key Features
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>User-friendly interface</li>
              <li>No coding required for basic tasks</li>
              <li>Content management system (CMS)</li>
              <li>Customizable with plugins and themes</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How Dashboard Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>User interacts with dashboard UI</li>
              <li>WordPress processes actions using PHP</li>
              <li>Data is stored/retrieved from database</li>
              <li>Changes reflect on frontend website</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Centralized control of website</li>
              <li>Easy content management</li>
              <li>Beginner-friendly interface</li>
              <li>Quick updates and publishing</li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Limitations
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Advanced customization requires coding</li>
              <li>Too many plugins can clutter dashboard</li>
              <li>Performance depends on setup</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Dashboard = admin panel of WordPress</li>
              <li>Accessible via /wp-admin</li>
              <li>Used to manage content, themes, plugins</li>
              <li>Built with PHP + MySQL</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}