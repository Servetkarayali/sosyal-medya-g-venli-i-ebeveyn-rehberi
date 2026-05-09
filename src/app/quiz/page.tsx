"use client";

import { useState } from "react";

const quizQuestions = [
  { question: "Sosyal medyada güçlü bir şifre nasıl olmalıdır?", options: ["Doğum tarihiniz", "En az 12 karakter, büyük-küçük harf, rakam ve özel karakter içermeli", "Evcil hayvanınızın adı", "123456789"], correctIndex: 1, explanation: "Güçlü şifreler en az 12 karakter uzunluğunda olmalı ve harf, rakam, özel karakter karışımı içermelidir." },
  { question: "Çocuğunuz sosyal medyada tanımadığı birinden mesaj aldığında ne yapmalı?", options: ["Hemen cevap vermeli", "Kişiyi takip etmeli", "Mesajı silmeli ve bir yetişkine haber vermeli", "Kişisel bilgilerini paylaşmalı"], correctIndex: 2, explanation: "Tanımadığı kişilerden gelen mesajlara cevap vermemeli ve mutlaka bir yetişkine bildirmelidir." },
  { question: "Instagram'da hesabı 'Gizli' yapmak ne anlama gelir?", options: ["Hiç kimse profilinizi göremez", "Sadece onayladığınız kişiler paylaşımlarınızı görebilir", "Mesaj alamazsınız", "Hiçbir şey değişmez"], correctIndex: 1, explanation: "Gizli hesapta sadece takip isteğinizi onayladığınız kişiler paylaşımlarınızı görebilir." },
  { question: "Siber zorbalığın bir belirtisi aşağıdakilerden hangisidir?", options: ["Çocuğun sosyal ve neşeli olması", "Çocuğun telefonu kullanırken tedirgin olması ve ekranı gizlemesi", "Çocuğun arkadaşlarıyla vakit geçirmesi", "Çocuğun okul notlarının yükselmesi"], correctIndex: 1, explanation: "Cihazı kullanırken huzursuzluk, ekranı gizleme ve sosyal içe kapanma siber zorbalığın önemli belirtileridir." },
  { question: "Çocuklar için önerilen günlük ekran süresi ne kadardır? (6-12 yaş)", options: ["Sınırsız", "En fazla 1-2 saat", "En az 6 saat", "Sadece hafta sonları"], correctIndex: 1, explanation: "Uzmanlar 6-12 yaş arası çocuklar için günde en fazla 1-2 saat ekran süresi önermektedir." },
  { question: "İki faktörlü doğrulama (2FA) ne işe yarar?", options: ["Hesabınızı iki kişi yönetir", "Şifrenizin yanı sıra ikinci bir doğrulama adımı ekler", "İki farklı şifre kullanmanızı sağlar", "Hesabınızı iki cihazda açar"], correctIndex: 1, explanation: "2FA, şifreniz ele geçirilse bile hesabınıza giriş yapılmasını engelleyen ek bir güvenlik katmanıdır." },
  { question: "TikTok'ta 'Aile Eşleştirme' özelliği ne sağlar?", options: ["Aile fotoğrafları paylaşırsınız", "Ebeveyn hesabı ile çocuğun hesabını bağlayarak denetim sağlar", "Aile üyeleri otomatik takip eder", "Sadece aile üyeleri yorum yapabilir"], correctIndex: 1, explanation: "Aile Eşleştirme, ebeveynlerin çocuklarının TikTok kullanımını uzaktan yönetmesini sağlayan bir denetim aracıdır." },
  { question: "Snapchat'te 'Hayalet Mod' ne anlama gelir?", options: ["Hesabınız görünmez olur", "Snap Map'te konumunuz kimseye gösterilmez", "Mesajlarınız kaybolur", "Profiliniz silinir"], correctIndex: 1, explanation: "Hayalet Mod açıkken Snap Map'te konumunuz hiç kimseye gösterilmez. Bu özellik çocuklar için mutlaka açık tutulmalıdır." },
  { question: "Bir çocuk internette birinin kendisini rahatsız ettiğini söylerse ne yapmalısınız?", options: ["Telefonu elinden almalısınız", "Sakin bir şekilde dinlemeli, kanıt toplamalı ve gerekirse yetkililere bildirmelisiniz", "Olayı küçümsemelisiniz", "Çocuğun sosyal medya hesaplarını hemen silmelisiniz"], correctIndex: 1, explanation: "Çocuğunuzu dinlemek, kanıt toplamak ve uygun mercilere başvurmak en doğru yaklaşımdır. Cezalandırıcı tepkiler çocuğun size güvenini zedeler." },
  { question: "Aşağıdakilerden hangisi bir 'phishing' (oltalama) girişiminin belirtisidir?", options: ["Tanıdığınız bir arkadaştan gelen normal mesaj", "Acil işlem yapmanızı isteyen, şüpheli bağlantılı mesaj", "Platformun resmi bildirim e-postası", "Şifre değiştirme hatırlatması"], correctIndex: 1, explanation: "Phishing mesajları genellikle aciliyet yaratır, şüpheli linkler içerir ve kişisel bilgilerinizi isteme eğilimindedir." },
  { question: "YouTube'da çocuklar için en güvenli kullanım şekli hangisidir?", options: ["Normal YouTube'u kısıtlama olmadan kullanmak", "12 yaş altı için YouTube Kids uygulamasını kullanmak", "Sadece trend videolar izlemek", "Yorum yazmayı öğretmek"], correctIndex: 1, explanation: "YouTube Kids, çocuklara uygun içerikleri filtreleyen ve ebeveyn kontrolü sağlayan resmi uygulamadır." },
  { question: "Çocuğunuzun sosyal medya profilinde hangi bilgiler kesinlikle OLMAMALIDIR?", options: ["Takma adı", "Okul adı, ev adresi veya telefon numarası", "Profil fotoğrafı olarak çizim", "Doğum yılı (sadece yıl)"], correctIndex: 1, explanation: "Okul, adres, telefon gibi bilgiler kötü niyetli kişilerin çocuğunuzu bulmasını kolaylaştırır. Bu bilgiler asla paylaşılmamalıdır." },
  { question: "Çocuğunuz bir 'challenge' (meydan okuma) videosuna katılmak isterse ne yapmalısınız?", options: ["Kesinlikle yasaklamalısınız", "İçeriği birlikte izleyip güvenli olup olmadığını değerlendirmelisiniz", "İzin verip takip etmemelisiniz", "Tüm sosyal medya hesaplarını kapatmalısınız"], correctIndex: 1, explanation: "Challenge'ları birlikte değerlendirmek, çocuğunuzla iletişimi güçlendirir ve tehlikeli olabilecek durumları önler." },
  { question: "Konum paylaşımı neden tehlikeli olabilir?", options: ["Pil tüketimini artırır", "Yabancıların çocuğunuzun gerçek zamanlı yerini öğrenmesini sağlar", "İnternet hızını yavaşlatır", "Sadece veri kullanımını artırır"], correctIndex: 1, explanation: "Konum paylaşımı, kötü niyetli kişilerin çocuğunuzun okulunu, evini veya sık gittiği yerleri öğrenmesine yol açabilir." },
  { question: "Siber zorbalığa maruz kalan bir çocuk ilk olarak ne yapmalıdır?", options: ["Karşı tarafla kavga etmeli", "Zorbalık yapan kişiyi engellemeli ve kanıt olarak ekran görüntüsü almalı", "Hesabını silmeli", "Hiç kimseye söylememeli"], correctIndex: 1, explanation: "Engelleme + kanıt toplama + bir yetişkine bildirme, siber zorbalıkla başa çıkmanın en etkili yoludur." },
  { question: "Aşağıdakilerden hangisi güvenli bir çevrimiçi davranış DEĞİLDİR?", options: ["Düzenli olarak şifre değiştirmek", "Tüm platformlarda aynı şifreyi kullanmak", "İki faktörlü doğrulama kullanmak", "Bilinmeyen bağlantılara tıklamamak"], correctIndex: 1, explanation: "Tüm platformlarda aynı şifreyi kullanmak, bir hesap ele geçirildiğinde diğer tüm hesaplarınızın da risk altına girmesine neden olur." },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === quizQuestions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="min-h-screen section-padding bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="text-6xl mb-6">{percentage >= 80 ? "🏆" : percentage >= 60 ? "👍" : "📚"}</div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Quiz Tamamlandı!</h1>
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{percentage}%</div>
            <p className="text-lg text-gray-600 mb-2">{quizQuestions.length} sorudan <span className="font-bold text-emerald-600">{score} doğru</span> cevap verdiniz.</p>
            <p className="text-gray-500 mb-8">
              {percentage >= 80 ? "Harika! Dijital güvenlik konusunda çok bilgilisiniz." : percentage >= 60 ? "İyi bir başlangıç! Biraz daha pratik yaparak bilginizi artırabilirsiniz." : "Endişelenmeyin! Rehberimizi okuyarak bilginizi geliştirebilirsiniz."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetQuiz} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all">Tekrar Dene</button>
              <a href="/ebeveyn" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors">Rehbere Dön</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-indigo-50 to-white pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Quiz & Testler</h1>
          <p className="text-lg text-gray-600">Dijital güvenlik bilginizi test edin!</p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Soru {currentQuestion + 1} / {quizQuestions.length}</span>
              <span className="text-sm font-medium text-emerald-600">Puan: {score}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{question.question}</h2>
            <div className="space-y-3 mb-6">
              {question.options.map((option, i) => {
                let btnClass = "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                if (showResult) {
                  if (i === question.correctIndex) btnClass = "border-emerald-400 bg-emerald-50 text-emerald-900";
                  else if (i === selectedAnswer) btnClass = "border-red-400 bg-red-50 text-red-900";
                  else btnClass = "border-gray-200 opacity-50";
                }
                return (
                  <button key={i} onClick={() => handleAnswer(i)} disabled={showResult} className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${btnClass}`}>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">{String.fromCharCode(65 + i)}</span>
                      <span className="font-medium">{option}</span>
                      {showResult && i === question.correctIndex && <svg className="w-5 h-5 text-emerald-600 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {showResult && i === selectedAnswer && i !== question.correctIndex && <svg className="w-5 h-5 text-red-600 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 mb-6">
                <p className="text-sm text-blue-800">{question.explanation}</p>
              </div>
            )}

            {showResult && (
              <button onClick={nextQuestion} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-md hover:-translate-y-0.5 transition-all">
                {currentQuestion < quizQuestions.length - 1 ? "Sonraki Soru" : "Sonuçları Gör"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
