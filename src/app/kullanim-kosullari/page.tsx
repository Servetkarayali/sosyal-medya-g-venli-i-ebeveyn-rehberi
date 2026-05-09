import Link from "next/link";

export const metadata = {
  title: "Kullanım Koşulları",
};

export default function KosullarPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="wrap-narrow">
        <p className="eyebrow mb-4">
          <Link href="/" className="hover:text-ink transition-colors">Ana sayfa</Link> / Koşullar
        </p>
        <h1 className="display-text text-5xl sm:text-6xl text-ink mb-6">
          Kullanım Koşulları
        </h1>
        <p className="text-sm text-muted mb-12">Son güncelleme: 15.01.2025</p>

        <div className="space-y-10 text-ink/80 leading-relaxed">
          <section>
            <h2 className="display-text text-2xl text-ink mb-3">01. Hizmet Tanımı</h2>
            <p>
              Güvenli Medya, aileler için sosyal medya güvenliği konusunda eğitim içeriği sunar. Bu içerikler hukuki veya profesyonel danışmanlık yerine geçmez.
            </p>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">02. Hesap</h2>
            <p>
              Hesap oluşturmak 13 yaş ve üzeri içindir. Çocuklar için hesap, ebeveyn onayıyla açılır. Hesap bilgilerinin güvenliği kullanıcı sorumluluğundadır.
            </p>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">03. Ücretlendirme</h2>
            <p>
              Free plan ücretsizdir. Pro ve Premium planlar aylık veya yıllık abonelik olarak sunulur. İlk 14 gün içinde iade hakkınız vardır.
            </p>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">04. Yasaklı Davranışlar</h2>
            <ul className="space-y-1.5">
              <li>— Hesabı başkalarıyla paylaşmak</li>
              <li>— Tersine mühendislik, scraping, kötüye kullanım</li>
              <li>— Üçüncü taraf haklarını ihlal eden içerik</li>
            </ul>
          </section>

          <section>
            <h2 className="display-text text-2xl text-ink mb-3">05. Fesih</h2>
            <p>
              Hesabınızı istediğiniz zaman kapatabilirsiniz. Koşullara aykırılık durumunda hesabınızı kapatma hakkımızı saklı tutarız.
            </p>
          </section>

          <section className="border-t border-line pt-8">
            <p className="text-sm">
              Sorularınız için: <span className="text-accent">hello@guvenlimedya.example</span>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
