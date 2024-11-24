import Link from 'next/link';

export default function Home() {
    return (
      <div className="relative flex flex-col min-h-screen">
       
      {/* Main content */}
      <main className="flex-grow relative z-10">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Dobrodošli u Spektrum</h1>
          <p className="text-lg text-gray-300 mb-8">
            Posvecenost poslu i maksimalna pouzdanost i strucnost na jednom mestu. Jer samo se znanje mnozi deljenjem.
         </p>
          
          {/* Sekcija sa uslugama */}
          <section className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Naše usluge u razlicitim oblastima</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100">
                <h3 className="text-xl text-gray-600 font-bold mb-2">Programiranje</h3>
                <p className="text-gray-600">Zakoracite u svet programiranja ukoliko ste pocetnik bez prethodnog iskustva ili prosirite svoje znanje iz najpopularnijih oblasti programiranja.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100">
                <h3 className="text-xl text-gray-600 font-bold mb-2">Strani jezici</h3>
                <p className="text-gray-600">Usavrsite poznavanje stranih jezika i steknite sve potrebne medjunarodno priznate sertifikate</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100">
                <h3 className="text-xl text-gray-600 font-bold mb-2">Muzička umetnost</h3>
                <p className="text-gray-600">Neki tekst o tome sta dobija covek kad upise kurs klavira :) </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100">
                <h3 className="text-xl text-gray-600 font-bold mb-2">Slikarska radionica</h3>
                <p className="text-gray-600">Crtanje sa Ninom Maksovic</p>
              </div>
            </div>
          </section>

          {/* Poziv na akciju */}
          <div className="my-12">
            <Link href="/contact" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
              Kontaktirajte nas za više informacija
            </Link>
          </div>
        </div>
      </main>

      
    </div>
  );
}
