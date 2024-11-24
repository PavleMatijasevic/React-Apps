// src/app/services/page.tsx


export default function Services() {
  const services = [
    { title: "Programiranje", description: "Python, Java, JavaScript, Web programiranje, ML/AI" },
    { title: "Strani jezici", description: "Engleski jezik, Nemački jezik, Španski jezik" },
    { title: "Muzička umetnost", description: "Klavir, Violina, solfeđo, hor" },
    { title: "Likovna umetnost", description: "Crtanje, vajanje, izrada portreta, stripova" },
  ];

  return (
    <div className="container mx-auto p-4">
      
      <h1 className="text-4xl font-bold text-center my-8">Naše usluge</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-400 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
