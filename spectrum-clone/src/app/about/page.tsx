
export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Lorem Ipsum 1",
      bio: "Biografija 1",
      img: "/assets/pavle.jpg",
    },
    {
      id: 2,
      name: "Lorem Ipsum 2",
      bio: "Biografija 2",
      img: "/assets/paja.jpeg",
    },
    {
      id: 3,
      name: "Lorem Ipsum 3",
      bio: "Biografija 3",
      img: "/assets/pavle.jpg",
    },
    {
      id: 4,
      name: "Lorem Ipsum 4",
      bio: "Biografija 4",
      img: "/assets/paja.jpeg",
    },
    {
      id: 5,
      name: "Lorem Ipsum 5",
      bio: "Biografija 5",
      img: "/assets/pavle.jpg",
    },
    {
      id: 6,
      name: "Lorem Ipsum 6",
      bio: "Biografija 6",
      img: "/assets/paja.jpeg",
    },
  ];

  return (
    <div className="container mx-auto p-4">
    
      {/* Naslov stranice */}
      <h1 className="text-4xl font-bold text-center mb-8">O nama</h1>

      {/* Tekst ispod naslova */}
      <p className="text-lg text-gray-400 text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula libero vitae tincidunt dapibus. Donec
        efficitur ex nec dolor volutpat, vel dapibus lorem accumsan. Sed id nibh nec ligula luctus hendrerit. Fusce
        vehicula magna eget magna cursus, at tempus elit luctus.
      </p>

      <h2 className="text-4xl font-bold text-center mb-8">Nas tim</h2>


      {/* Tim i slike */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group h-64 w-full overflow-hidden rounded-lg shadow-lg"
          >
            {/* Slika */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Biografija */}
            <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-center">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
