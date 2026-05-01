export default function WhatAreWidgets() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are Widgets in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Widgets are small blocks in WordPress used to add content and features
              to specific areas of a website like the sidebar, footer, or header.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: A “Search Bar” widget in the sidebar
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Purpose of Widgets
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Add extra features without coding  
                <br />👉 Example: Add recent posts list
              </li>
              <li>
                Customize layout easily  
                <br />👉 Example: Add footer links
              </li>
              <li>
                Improve user experience  
                <br />👉 Example: Add search box
              </li>
            </ul>
          </section>

          {/* Examples */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Common Widget Examples
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Search Widget  
                <br />👉 Example: Search blog posts
              </li>

              <li>
                Recent Posts  
                <br />👉 Example: Show latest 5 posts
              </li>

              <li>
                Categories  
                <br />👉 Example: Show blog categories
              </li>

              <li>
                Text/Custom HTML  
                <br />👉 Example: Add custom message or code
              </li>

              <li>
                Navigation Menu  
                <br />👉 Example: Add menu in footer
              </li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Where Widgets are Used
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Sidebar  
                <br />👉 Example: Search + Categories
              </li>

              <li>
                Footer  
                <br />👉 Example: Contact info + links
              </li>

              <li>
                Header (theme-dependent)  
                <br />👉 Example: Announcement bar
              </li>
            </ul>
          </section>

          {/* How */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. How to Add Widgets
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Go to Dashboard → Appearance → Widgets</li>
              <li>Drag and drop widget to area</li>
              <li>Configure settings</li>
              <li>Save changes</li>
            </ul>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Drag “Recent Posts” to sidebar
            </p>
          </section>

          {/* Internal */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. How Widgets Work Internally
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Stored in database  
                <br />👉 Widget settings saved
              </li>

              <li>
                Rendered by theme  
                <br />👉 Displayed in sidebar/footer
              </li>

              <li>
                Uses WordPress APIs  
                <br />👉 Dynamic content loading
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
                Easy to use  
                <br />👉 No coding required
              </li>

              <li>
                Flexible layout  
                <br />👉 Drag and drop placement
              </li>

              <li>
                Extend features  
                <br />👉 Add multiple widgets
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
                Depends on theme support  
                <br />👉 Some areas may not exist
              </li>

              <li>
                Limited customization  
                <br />👉 Advanced changes need coding
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Widgets = small content blocks</li>
              <li>Used in sidebar, footer</li>
              <li>No coding required</li>
              <li>Example: Search, Recent Posts</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}