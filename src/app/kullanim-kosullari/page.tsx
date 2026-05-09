import Link from "next/link";

export const metadata = {
  title: "Kullanım Koşulları",
};

export default function KosullarPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="wrap relative">
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40 mb-8">
          <Link href="/" className="hover:text-paper transition-colors">ANA SAYFA</Link>
          <span>/</span>
          <span className="text-neon-cyan">KOŞULLAR</span>
        </div>

        <h1 className="display-text text-5xl sm:text-7xl text-paper leading-none mb-4">
          Kullanım<br /><span className="text-gradient">koşulları.</span>
        </h1>
        <p className="font-mono text-xs text-paper/50 uppercase tracking-wider mb-12">Son güncelleme: 2025.01.15</p>

        <article className="max-w-3xl space-y-8 text-paper/80 leading-relaxed">
          <section>
            <h2 className="display-text text-3xl text-paper mb-4">01. Hizmet Tanımı</h2>
            <p>
              Güvenli Medya, aileler için sosyal medya güvenliği konusunda eğitim içeriği sunar. Bu içerikler hukuki veya profesyonel danışmanlık yerine geçmez.
            </p>
          </section>

          <section>
            <h2 className="display-text text-3xl text-paper mb-4">02. Hesap</h2>
            <p>
              Hesap oluşturmak 13 yaş ve üzeri içindir. Çocuklar için hesap, ebeveyn onayıyla ve ebeveyn tarafından açılır. Hesap bilgilerinin güvenliği kullanıcı sorumluluğundadır.
            </p>
          </section>

          <section>
            <h2 className="display-text text-3xl text-paper mb-4">03. Ücretlendirme</h2>
            <p>
              Free plan ücretsizdir. Pro ve Premium planlar aylık veya yıllık abonelik olarak sunulur. İlk 14 gün içinde iade hakkınız vardır.
            </p>
          </section>

          <section>
            <h2 className="display-text text-3xl text-paper mb-4">04. Yasaklı Davranışlar</h2>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-neon-pink">×</span> Hesabı başkalarıyla paylaşmak</li>
              <li className="flex gap-2"><span className="text-neon-pink">×</span> Tersine mühendislik, scraping, kötüye kullanım</li>
              <li className="flex gap-2"><span className="text-neon-pink">×</span> Üçüncü taraf haklarını ihlal eden içerik yükleme</li>
            </ul>
          </section>

          <section>
            <h2 className="display-text text-3xl text-paper mb-4">05. Fesih</h2>
            <p>
              Hesabınızı istediğiniz zaman kapatabilirsiniz. Koşullara aykırılık durumunda hesabınızı uyarı ile veya uyarısız kapatma hakkımızı saklı tutarız.
            </p>
          </section>

          <section className="bg-carbon border border-steel p-6 mt-12">
            <p className="text-sm">
              Sorularınız için: <span className="text-neon-cyan font-mono">hello@guvenlimedya.example</span>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
