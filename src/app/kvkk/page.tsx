import Link from "next/link";

export const metadata = {
  title: "KVKK Aydınlatma Metni",
};

export default function KVKKPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="wrap relative">
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40 mb-8">
          <Link href="/" className="hover:text-paper transition-colors">ANA SAYFA</Link>
          <span>/</span>
          <span className="text-neon-cyan">KVKK</span>
        </div>

        <h1 className="display-text text-5xl sm:text-7xl text-paper leading-none mb-4">
          KVKK<br /><span className="text-gradient">Aydınlatma</span>
        </h1>
        <p className="font-mono text-xs text-paper/50 uppercase tracking-wider mb-12">
          Son güncelleme: 2025.01.15
        </p>

        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-12 md:col-span-3 md:sticky md:top-24 self-start">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">
              / BÖLÜMLER
            </p>
            <nav className="space-y-2 text-sm">
              <a href="#veri-sorumlusu" className="block text-paper/60 hover:text-neon-cyan transition-colors">01. Veri Sorumlusu</a>
              <a href="#toplanan-veriler" className="block text-paper/60 hover:text-neon-cyan transition-colors">02. Toplanan Veriler</a>
              <a href="#amac" className="block text-paper/60 hover:text-neon-cyan transition-colors">03. İşleme Amacı</a>
              <a href="#haklar" className="block text-paper/60 hover:text-neon-cyan transition-colors">04. Haklarınız</a>
              <a href="#iletisim" className="block text-paper/60 hover:text-neon-cyan transition-colors">05. İletişim</a>
            </nav>
          </aside>

          <article className="col-span-12 md:col-span-9 space-y-12 text-paper/80 leading-relaxed">
            <section id="veri-sorumlusu">
              <h2 className="display-text text-3xl text-paper mb-4">01. Veri Sorumlusu</h2>
              <p>
                Güvenli Medya olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında veri sorumlusu sıfatıyla hareket ediyoruz. Kişisel verileriniz bu metinde belirtilen kapsam ve amaçlar dahilinde işlenmektedir.
              </p>
            </section>

            <section id="toplanan-veriler">
              <h2 className="display-text text-3xl text-paper mb-4">02. Toplanan Veriler</h2>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-neon-cyan">+</span> Ad, soyad, e-posta adresi (kayıt esnasında)</li>
                <li className="flex gap-2"><span className="text-neon-cyan">+</span> Kullanıcı rolü (ebeveyn / eğitimci)</li>
                <li className="flex gap-2"><span className="text-neon-cyan">+</span> IP adresi ve oturum bilgileri (güvenlik)</li>
                <li className="flex gap-2"><span className="text-neon-cyan">+</span> Çerezler (tercihler ve analitik)</li>
              </ul>
            </section>

            <section id="amac">
              <h2 className="display-text text-3xl text-paper mb-4">03. İşleme Amacı</h2>
              <p>
                Verileriniz; hizmetin sunulması, hesap yönetimi, güvenlik, hukuki yükümlülüklerin yerine getirilmesi ve platformun iyileştirilmesi amaçlarıyla işlenir. Üçüncü kişilerle izniniz olmadan paylaşılmaz.
              </p>
            </section>

            <section id="haklar">
              <h2 className="display-text text-3xl text-paper mb-4">04. Haklarınız</h2>
              <p className="mb-3">KVKK madde 11 uyarınca şu haklara sahipsiniz:</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-neon-pink">→</span> Verilerinizin işlenip işlenmediğini öğrenme</li>
                <li className="flex gap-2"><span className="text-neon-pink">→</span> İşlenmişse bilgi talep etme</li>
                <li className="flex gap-2"><span className="text-neon-pink">→</span> Düzeltme, silme veya yok etme isteme</li>
                <li className="flex gap-2"><span className="text-neon-pink">→</span> Kişisel verilerinizi dışa aktarma</li>
              </ul>
            </section>

            <section id="iletisim" className="bg-carbon border border-steel p-6">
              <h2 className="display-text text-3xl text-paper mb-4">05. İletişim</h2>
              <p className="mb-4">
                KVKK kapsamındaki taleplerinizi aşağıdaki kanallar üzerinden iletebilirsiniz:
              </p>
              <p className="font-mono text-sm">
                <span className="text-neon-cyan">E-POSTA:</span> kvkk@guvenlimedya.example
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
