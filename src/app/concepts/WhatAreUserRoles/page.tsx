export default function WhatAreUserRoles() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What are User Roles in WordPress
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>

            <p className="text-sm sm:text-base text-gray-700">
              User roles in WordPress define what actions a user can perform
              inside the website dashboard.
            </p>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Admin can manage entire website, while Subscriber can only read content
            </p>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. Why User Roles are Important
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Improves security  
                <br />👉 Prevent unauthorized access
              </li>

              <li>
                Controls permissions  
                <br />👉 Different access for different users
              </li>

              <li>
                Helps team management  
                <br />👉 Writers, editors, admins work separately
              </li>
            </ul>
          </section>

          {/* Roles */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Default User Roles
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-3">
              
              <li>
                <strong>Administrator</strong>  
                <br />👉 Full website control
              </li>

              <li>
                <strong>Editor</strong>  
                <br />👉 Manage all posts/pages
              </li>

              <li>
                <strong>Author</strong>  
                <br />👉 Create and publish own posts
              </li>

              <li>
                <strong>Contributor</strong>  
                <br />👉 Write posts but cannot publish
              </li>

              <li>
                <strong>Subscriber</strong>  
                <br />👉 Only manage profile/read content
              </li>
            </ul>
          </section>

          {/* Administrator */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Administrator Role
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Administrator can:
- Install plugins
- Change themes
- Manage users
- Delete content`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Website owner
            </p>
          </section>

          {/* Editor */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              5. Editor Role
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Editor can:
- Edit all posts
- Publish content
- Manage categories`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Content manager
            </p>
          </section>

          {/* Author */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              6. Author Role
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Author can:
- Write posts
- Publish own posts
- Upload media`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Blog writer
            </p>
          </section>

          {/* Contributor */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              7. Contributor Role
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Contributor can:
- Write posts
- Edit own drafts
- Cannot publish`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Guest writer
            </p>
          </section>

          {/* Subscriber */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              8. Subscriber Role
            </h2>

            <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
{`Subscriber can:
- Login
- Update profile
- Read content`}
            </pre>

            <p className="text-sm text-gray-800 mt-2">
              👉 Example: Website member/user
            </p>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              9. Real-Life Example
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Admin  
                <br />👉 Website owner
              </li>

              <li>
                Editor  
                <br />👉 Team manager
              </li>

              <li>
                Author  
                <br />👉 Blog writer
              </li>

              <li>
                Subscriber  
                <br />👉 Registered user
              </li>
            </ul>
          </section>

          {/* Advantages */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              10. Advantages
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Better security  
                <br />👉 Limited access
              </li>

              <li>
                Organized workflow  
                <br />👉 Separate responsibilities
              </li>

              <li>
                Easy team collaboration  
                <br />👉 Multi-user management
              </li>
            </ul>
          </section>

          {/* Mistakes */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              11. Common Mistakes
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Giving admin access to everyone  
                <br />👉 Security risk
              </li>

              <li>
                Wrong permission setup  
                <br />👉 Unauthorized actions
              </li>
            </ul>
          </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>

            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>User roles control permissions</li>
              <li>Main roles: Admin, Editor, Author, Contributor, Subscriber</li>
              <li>Administrator has full access</li>
              <li>Improves website security</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}