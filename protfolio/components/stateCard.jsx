export default function StatsCards() {
    const stats = [
      { title: "Total Projects", value: 12 },
      { title: "Skills", value: 8 },
      { title: "Completed", value: 10 },
    ];
  
    return (
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-4xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>
      
    );
  }
  