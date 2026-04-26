export default function LocalhostSetup() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Localhost & Setup using XAMPP/WAMP
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. What is Localhost
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Localhost refers to your own computer acting as a server.
              It allows you to run web applications locally without
              needing a live internet server.
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why Use Localhost
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Develop websites without hosting</li>
              <li>Test features before going live</li>
              <li>No internet required</li>
              <li>Safe environment for experimentation</li>
            </ul>
          </section>

          {/* Tools */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Tools for Local Setup
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>XAMPP (cross-platform)</li>
              <li>WAMP (Windows only)</li>
              <li>MAMP (Mac)</li>
            </ul>
          </section>

          {/* XAMPP Setup */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Setup using XAMPP
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Download and install XAMPP</li>
              <li>Open XAMPP Control Panel</li>
              <li>Start Apache and MySQL</li>
              <li>Go to <code>htdocs</code> folder</li>
              <li>Create a project folder (e.g., wordpress)</li>
              <li>Open browser → <code>localhost/wordpress</code></li>
            </ul>
          </section>

          {/* WAMP Setup */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Setup using WAMP
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Download and install WAMP</li>
              <li>Start WAMP server (turns green)</li>
              <li>Go to <code>www</code> folder</li>
              <li>Create project folder</li>
              <li>Open browser → <code>localhost/project-name</code></li>
            </ul>
          </section>

          {/* Database */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Database Setup
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Open <code>localhost/phpmyadmin</code></li>
              <li>Create new database</li>
              <li>Use this database in your application</li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. How It Works Internally
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Apache acts as local web server</li>
              <li>PHP processes application logic</li>
              <li>MySQL stores data</li>
              <li>Browser accesses via localhost</li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Advantages
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>No hosting cost</li>
              <li>Fast development and testing</li>
              <li>Offline work possible</li>
              <li>Safe environment</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Localhost = your own computer acting as server</li>
              <li>XAMPP/WAMP provide Apache + PHP + MySQL</li>
              <li>Used for local development</li>
              <li>Access via http://localhost</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}