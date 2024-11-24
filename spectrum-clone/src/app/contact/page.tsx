
export default function Contact() {
  return (

    <div className="container mx-auto p-4">
       
      {/* Naslov stranice */}
      <h1 className="text-4xl font-bold text-center my-8">Kontaktirajte nas</h1>

      {/* Kontakt forma */}
      <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Ime
          </label>
          <input
            id="name"
            type="text"
            placeholder="Vaše ime"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Vaš email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Poruka
          </label>
          <textarea
            id="message"
            placeholder="Vaša poruka"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pošalji
        </button>
      </form>

      {/* Dodatne informacije */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Kontakt informacije</h2>
        <p className="text-lg text-gray-400">
          <strong>Telefon:</strong> +381 64 123 4567
        </p>
        <p className="text-lg text-gray-400">
          <strong>Email:</strong> kontakt@spektrum.rs
        </p>
        <p className="text-lg text-gray-400">
          <strong>Adresa:</strong> Ulica primer 123, 11000 Beograd, Srbija
        </p>
      </div>

      {/* Mapa */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-4">Naša lokacija</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739.9000866815653!2d20.565241195758645!3d44.3036922153658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d18025628a5%3A0xb86ae82edbf52af3!2z0JrRgNCw0ZnQsCDQn9C10YLRgNCwINCf0YDQstC-0LMgNDAsINCQ0YDQsNC90ZLQtdC70L7QstCw0YY!5e0!3m2!1ssr!2srs!4v1731852308455!5m2!1ssr!2srs"            allowFullScreen={false}
            loading="lazy"
            title="Mapa lokacije"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
