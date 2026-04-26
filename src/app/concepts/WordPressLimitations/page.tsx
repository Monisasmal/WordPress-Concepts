export default function WordPressLimitations() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Limitations of WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              While WordPress is powerful and flexible, it has certain limitations
              compared to fully custom-built applications, especially for complex
              and large-scale systems.
            </p>
          </section>

          {/* Performance */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Performance Issues
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Can become slow with too many plugins</li>
              <li>Heavy themes may affect loading speed</li>
              <li>Requires optimization (caching, CDN, etc.)</li>
            </ul>
          </section>

          {/* Security */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Security Risks
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Popular target for hackers</li>
              <li>Vulnerabilities in outdated plugins/themes</li>
              <li>Needs regular updates and monitoring</li>
            </ul>
          </section>

          {/* Customization */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Limited Customization (Without Coding)
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Advanced features require PHP knowledge</li>
              <li>Heavy customization can get complex</li>
              <li>Dependent on plugins for functionality</li>
            </ul>
          </section>

          {/* Plugin Dependency */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Plugin Dependency
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Too many plugins can create conflicts</li>
              <li>Plugin updates may break the site</li>
              <li>Quality varies across plugins</li>
            </ul>
          </section>

          {/* Scalability */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Scalability Challenges
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Not ideal for very large-scale applications</li>
              <li>Requires advanced optimization for high traffic</li>
              <li>Database can become heavy over time</li>
            </ul>
          </section>

          {/* Maintenance */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Maintenance Required
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Regular updates for core, themes, plugins</li>
              <li>Backup management is necessary</li>
              <li>Hosting and security setup required</li>
            </ul>
          </section>

          {/* Advantages vs Reality */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. When WordPress is NOT Ideal
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Highly complex SaaS applications</li>
              <li>Real-time systems (chat apps, gaming)</li>
              <li>Custom enterprise-level architectures</li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Performance depends on plugins and hosting</li>
              <li>Security requires proper maintenance</li>
              <li>Customization may need coding knowledge</li>
              <li>Not ideal for highly complex applications</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}