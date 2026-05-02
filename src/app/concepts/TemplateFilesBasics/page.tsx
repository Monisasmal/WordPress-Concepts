export default function TemplateFilesBasics() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          header.php, footer.php, index.php in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Overview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              These are core template files in a WordPress theme that control
              different parts of your website layout.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: A page = Header + Content + Footer
            </p>
          </section>

          {/* header.php */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. header.php
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Contains the top section of your website including logo, navigation,
              meta tags, and opening HTML structure.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
</head>
<body>
<header>
  <h1>My Website</h1>
  <nav>Menu here</nav>
</header>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Logo + Navigation menu at the top
            </p>
          </section>

          {/* footer.php */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. footer.php
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              Contains the bottom section of your website including footer content,
              copyright, and closing tags.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`<footer>
  <p>© 2026 My Website</p>
</footer>

</body>
</html>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Copyright + footer links
            </p>
          </section>

          {/* index.php */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. index.php
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              The main template file and fallback in WordPress. It is used when
              no other specific template file is available.
            </p>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`<?php get_header(); ?>

<h2>Blog Posts</h2>

<?php
if (have_posts()) :
  while (have_posts()) : the_post();
    the_title();
    the_content();
  endwhile;
endif;
?>

<?php get_footer(); ?>`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Displays blog posts if no specific template exists
            </p>
          </section>

          {/* How they connect */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How They Work Together
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`index.php

→ get_header() → loads header.php
→ main content
→ get_footer() → loads footer.php`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Full page = header + content + footer
            </p>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Code reusability  
                <br />👉 Header/Footer used everywhere
              </li>

              <li>
                Easy maintenance  
                <br />👉 Change once, reflect everywhere
              </li>

              <li>
                Clean structure  
                <br />👉 Organized theme files
              </li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Not using get_header()/get_footer()  
                <br />👉 Breaks layout consistency
              </li>

              <li>
                Editing parent theme directly  
                <br />👉 Use child theme instead
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>header.php = top section</li>
              <li>footer.php = bottom section</li>
              <li>index.php = fallback template</li>
              <li>Used with get_header() & get_footer()</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}