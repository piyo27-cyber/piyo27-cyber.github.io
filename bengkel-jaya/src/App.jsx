function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Navbar */}
      <nav className="bg-orange-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Bengkel Jaya</h1>
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#beranda" className="hover:text-yellow-200 transition">Beranda</a>
            <a href="#layanan" className="hover:text-yellow-200 transition">Layanan</a>
            <a href="#tentang" className="hover:text-yellow-200 transition">Tentang</a>
            <a href="#kontak" className="hover:text-yellow-200 transition">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="beranda" className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Selamat Datang di <span className="text-orange-600">Bengkel Jaya</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Solusi terpercaya untuk perawatan motor dan mobil Anda. Kami buka setiap hari!
        </p>
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-semibold">
          <span className="text-2xl">🕐</span>
          Buka Setiap Hari &mdash; 07:00 &ndash; 23:00
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Layanan Kami
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🔧", title: "Tambal Ban" },
              { icon: "💨", title: "Isi Angin" },
              { icon: "🛞", title: "Ganti Ban" },
              { icon: "🛢️", title: "Ganti Oli" },
              { icon: "🏍️", title: "Service Motor" },
              { icon: "🚗", title: "Service Mobil" },
            ].map((item) => (
              <div key={item.title} className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-lg">
            Dan masalah motor &amp; mobil lainnya
          </p>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Kenapa Pilih <span className="text-orange-600">Bengkel Jaya</span>?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Buka Setiap Hari", desc: "Senin sampai Minggu, dari jam 7 pagi sampai 11 malam. Lebih fleksibel untuk Anda." },
              { title: "Harga Bersahabat", desc: "Biaya service yang terjangkau tanpa mengorbankan kualitas." },
              { title: "Mekanik Berpengalaman", desc: "Ditangani oleh mekanik yang sudah ahli di bidangnya." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ✓
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Hubungi Kami</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-gray-700 rounded-xl p-5">
              <div className="text-2xl mb-2">📍</div>
              <h4 className="font-semibold mb-1">Alamat</h4>
              <p className="text-gray-300 text-sm">Jl. Contoh No. 123, Kota Anda</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-5">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold mb-1">Telepon</h4>
              <p className="text-gray-300 text-sm">0812-3456-7890</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-5">
              <div className="text-2xl mb-2">🕐</div>
              <h4 className="font-semibold mb-1">Jam Operasional</h4>
              <p className="text-gray-300 text-sm">Setiap Hari &mdash; 07:00 &ndash; 23:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        &copy; 2026 Bengkel Jaya. All rights reserved.
      </footer>
    </div>
  )
}

export default App
