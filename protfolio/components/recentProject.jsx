export default function RecentProjects() {
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Next.js • TypeScript • Tailwind",
        image: "Project 1",
      },
      {
        id: 2,
        title: "Task Manager",
        description: "React • Node.js • MongoDB",
        image: "Project 2",
      },
      {
        id: 3,
        title: "Chat Application",
        description: "Vue.js • Firebase • Tailwind",
        image: "Project 3",
      },
    ];
  
    return (
    
        <div className="w-full p-2 mt-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg shadow-sm bg-white p-4"
              >
                <div className="h-32 flex justify-center items-center bg-gray-100 rounded-lg mb-4">
                  <span className="text-gray-400 text-xl font-bold">{project.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="text-green-500 text-sm hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    );
  }
  