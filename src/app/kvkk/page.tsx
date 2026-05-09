import Link from "next/link";

export const metadata = {
  title: "KVKK Aydınlatma Metni",
};

export default function KVKKPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="wrap-narrow">
        <p className="eyebrow mb-4">
          <Link href="/" className="hover:text-ink transition-colors">Ana sayfa</Link> / KVKK
        </p>
        <h1 className="display-text text-5xl sm:text-6xl text-ink mb-6">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-sm text-muted mb-12">Son güncelleme: 15.01.2025</p>

        <div className="space-y-10 text-ink/80 leading-relaxed">
          <section>
            <h2 className="display-text text-2xl text-ink mb-3">01. Veri Sorumlusu</h2>
            <p>
              Güvenli Medya olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hareket ediyoruz.
            </p>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">02. Toplanan Veriler</h2>
            <ul className="space-y-1.5">
              <li>— Ad, soyad, e-posta (kayıt esnasında)</li>
              <li>— Kullanıcı rolü (ebeveyn / eğitimci)</li>
              <li>— IP ve oturum bilgileri (güvenlik)</li>
              <li>— Çerezler (tercihler ve analitik)</li>
            </ul>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">03. İşleme Amacı</h2>
            <p>
              Verileriniz hizmetin sunulması, hesap yönetimi, güvenlik ve platformun iyileştirilmesi amaçlarıyla işlenir. İzniniz olmadan üçüncü kişilerle paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">04. Haklarınız</h2>
            <p className="mb-3">KVKK madde 11 kapsamında:</p>
            <ul className="space-y-1.5">
              <li>— Verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>— Bilgi talep etme</li>
              <li>— Düzeltme, silme veya yok etme isteme</li>
              <li>— Dışa aktarma</li>
            </ul>
          </section>

          <section className="border-t border-line pt-8">
            <h2 className="display-text text-2xl text-ink mb-3">05. İletişim</h2>
            <p className="mb-2">KVKK talepleriniz için:</p>
            <p className="text-accent">kvkk@guvenlimedya.example</p>
          </section>
        </div>
      </div>
    </article>
  );
}
