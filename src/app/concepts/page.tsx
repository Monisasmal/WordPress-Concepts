import Link from "next/link";

const concept = [
     {name: "What is WordPress? How does it work internally??", path:"/concepts/WhatIsWordPress"},
     {name: "What is WordPress.com vs WordPress.org??", path:"/concepts/WordPressComVsOrg"},
     {name: "Why Use WordPress Over Custom Development?", path:"/concepts/WhyUseWordPress"},
     {name: "What are the limitations of WordPress?", path:"/concepts/WordPressLimitations"},
     {name: "How to install WordPress manually?", path:"/concepts/InstallWordPressManually"},
     {name: "What are the system requirements?", path:"/concepts/WordPressSystemRequirements"},
     {name: "What is localhost? How to set up using XAMPP/WAMP?", path:"/concepts/LocalhostSetup"},
     {name: "What is the WordPress dashboard? ?", path:"/concepts/WordPressDashboard"},
     {name: "What are Posts and Pages in WordPress?", path:"/concepts/PostsVsPages"},
     {name: "What are  Difference Between Posts and Pages?", path:"/concepts/PostsVsPagesDifference"},
];

export default function Concepts(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">Wordpress Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {concept.map(c => (
          <li key={c.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}