export default function WhatAreMenus() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Menus in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Menus in WordPress are navigation structures that help users move
              between different pages, posts, or sections of a website.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Home | About | Blog | Contact (top navigation bar)
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Purpose of Menus
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Provide navigation  
                <br />👉 Example: Go from Home → Blog page
              </li>
              <li>
                Organize content  
                <br />👉 Example: Group services under one menu
              </li>
              <li>
                Improve user experience  
                <br />👉 Example: Easy access to important pages
              </li>
            </ul>
          </section>

          {/* Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Menu Examples
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Main Menu:
Home | About | Services | Blog | Contact

Dropdown Menu:
Services
  ├── Web Design
  ├── SEO
  └── Marketing`}
            </pre>
          </section>

          {/* Types */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Types of Menus
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Primary Menu  
                <br />👉 Example: Top header navigation
              </li>

              <li>
                Footer Menu  
                <br />👉 Example: Privacy Policy, Terms
              </li>

              <li>
                Dropdown Menu  
                <br />👉 Example: Services → Sub-services
              </li>

              <li>
                Mobile Menu  
                <br />👉 Example: Hamburger menu
              </li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Create a Menu
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Go to Dashboard → Appearance → Menus</li>
              <li>Click “Create New Menu”</li>
              <li>Add pages, posts, or custom links</li>
              <li>Arrange items (drag & drop)</li>
              <li>Assign location (header/footer)</li>
              <li>Save menu</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Add “Contact” page to header menu
            </p>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How Menus Work Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Menu items stored in database  
                <br />👉 Linked to pages/posts
              </li>

              <li>
                Theme displays menu  
                <br />👉 Based on location (header/footer)
              </li>

              <li>
                Uses WordPress navigation system  
                <br />👉 Dynamic rendering
              </li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Easy navigation  
                <br />👉 Users find pages quickly
              </li>

              <li>
                Flexible structure  
                <br />👉 Drag & drop arrangement
              </li>

              <li>
                Supports dropdowns  
                <br />👉 Multi-level menus
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Limitations
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Depends on theme locations  
                <br />👉 Some themes limit menu areas
              </li>

              <li>
                Complex menus can confuse users  
                <br />👉 Too many dropdown levels
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Menus = navigation system</li>
              <li>Created in Appearance → Menus</li>
              <li>Supports dropdowns</li>
              <li>Example: Home, About, Contact</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}