export const metadata = {
  title: "WordPress Development, Themes, Plugins & Projects",
  description:
    "Learn WordPress development with themes, plugins, customization, and real-world projects.",
};

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">
           Learn <span className="text-green-700">WordPress</span> the Right Way
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Master WordPress from basics to advanced — themes, plugins,
          customization, and real-world website building.
        </p>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Theme Development</h3>
          <p className="text-gray-600 text-sm">
            Learn how to build and customize WordPress themes from scratch.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Plugin Development</h3>
          <p className="text-gray-600 text-sm">
            Create powerful plugins to extend WordPress functionality.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Real World Projects</h3>
          <p className="text-gray-600 text-sm">
            Build blogs, business sites, and dynamic web apps using WordPress.
          </p>
        </div>

      </section>

    </div>
  );
}