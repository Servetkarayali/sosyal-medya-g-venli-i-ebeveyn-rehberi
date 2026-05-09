import Link from "next/link";

const goldenRules = [
  { emoji: "🔒", title: "Kişisel Bilgilerini Paylaşma", description: "Adın, adresin, okulun, telefon numaran gibi bilgileri internette hiç kimseyle paylaşma.", color: "bg-red-50 border-red-100" },
  { emoji: "👤", title: "Tanımadığın Kişilere Güvenme", description: "İnternette tanımadığın kişiler sana mesaj atarsa, onlarla konuşma ve bir yetişkine haber ver.", color: "bg-amber-50 border-amber-100" },
  { emoji: "📸", title: "Fotoğraflarına Dikkat Et", description: "Fotoğraflarını ve videolarını herkesle paylaşma. Bir kez internete yüklenen şey sonsuza kadar kalabilir.", color: "bg-purple-50 border-purple-100" },
  { emoji: "🤝", title: "Nazik Ol", description: "İnternette de gerçek hayatta olduğu gibi kibar ol. Kimseyi üzecek şeyler yazma.", color: "bg-blue-50 border-blue-100" },
  { emoji: "🆘", title: "Yardım İste", description: "Seni rahatsız eden, korkutan veya üzen bir şey olursa hemen bir yetişkine söyle.", color: "bg-emerald-50 border-emerald-100" },
  { emoji: "⏰", title: "Ekran Süresine Dikkat Et", description: "Telefonun veya tabletin dışında da eğlenceli aktiviteler yap. Spor, kitap, arkadaşlar!", color: "bg-cyan-50 border-cyan-100" },
];

const scenarios = [
  { title: "Tanımadığın biri sana mesaj attı", question: "Sosyal medyada tanımadığın bir kişi sana 'Merhaba, arkadaş olalım mı?' diye mesaj atıyor. Ne yaparsın?", correct: "Mesaja cevap vermez ve bir yetişkine haber verirsin.", wrong: "Kabul edersin ve sohbet etmeye başlarsın.", explanation: "Tanımadığın kişilere güvenmemelisin. Kötü niyetli kişiler arkadaş gibi görünebilir." },
  { title: "Biri senden fotoğrafını istedi", question: "İnternette konuştuğun biri 'Fotoğrafını at' diyor. Ne yaparsın?", correct: "Hayır dersin ve durumu bir yetişkine anlatırsın.", wrong: "Fotoğrafını gönderirsin.", explanation: "Fotoğraflarını tanımadığın insanlara asla gönderme. Bir kez gönderdiğinde geri alamazsın." },
  { title: "Sana kötü yorumlar yazılıyor", question: "Paylaştığın bir gönderinin altına birisi sürekli kötü yorumlar yazıyor. Ne yaparsın?", correct: "Kişiyi engellersin, cevap vermezsin ve bir yetişkine söylersin.", wrong: "Sen de ona kötü şeyler yazarsın.", explanation: "Siber zorbalıkla karşılaştığında en doğrusu kişiyi engellemek ve yardım istemektir." },
];

export default function CocukPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">🌟</span> Çocuklar & Gençler İçin
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Sosyal Medyada <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Güvende Kal!</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İnternette güvenli bir şekilde vakit geçirmenin kurallarını öğren, senaryolarla pratik yap ve bilgini test et!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="px-6 py-3 rounded-xl bg-amber-100 text-amber-800 font-semibold hover:bg-amber-200 transition-colors">🎈 7-12 Yaş</button>
            <button className="px-6 py-3 rounded-xl bg-indigo-100 text-indigo-800 font-semibold hover:bg-indigo-200 transition-colors">🎓 13-17 Yaş</button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">⭐ Altın Kurallar</h2>
            <p className="text-lg text-gray-600">İnternette güvende kalmak için bu kuralları her zaman hatırla!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldenRules.map((rule, i) => (
              <div key={i} className={`rounded-2xl border-2 ${rule.color} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}>
                <div className="text-4xl mb-4">{rule.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{rule.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">🎭 Senaryolar - Ne Yapardın?</h2>
            <p className="text-lg text-gray-600">Bu durumlarda doğru kararı verebilir misin?</p>
          </div>
          <div className="space-y-6">
            {scenarios.map((scenario, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">{i + 1}</span>
                  <h3 className="text-lg font-bold text-gray-900">{scenario.title}</h3>
                </div>
                <p className="text-gray-700 mb-5 font-medium">{scenario.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="text-xs font-semibold text-emerald-700 uppercase">Doğru</span><p className="text-sm text-emerald-900 mt-1">{scenario.correct}</p></div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <div><span className="text-xs font-semibold text-red-700 uppercase">Yanlış</span><p className="text-sm text-red-900 mt-1">{scenario.wrong}</p></div>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-sm text-blue-800">{scenario.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">🏆 Bilgini Test Et!</h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">Sosyal medya güvenliği hakkında ne kadar bilgi sahibisin? Quizimizi çöz ve puanını öğren!</p>
            <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Quiz&apos;e Başla
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
