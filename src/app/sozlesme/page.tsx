"use client";

import { useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface ContractItem {
  id: string;
  text: string;
  category: string;
  checked: boolean;
}

const defaultItems: ContractItem[] = [
  // Ekran Süresi
  { id: "s1", text: "Hafta içi günde en fazla ___ saat ekran kullanacağım.", category: "Ekran Süresi", checked: false },
  { id: "s2", text: "Hafta sonu günde en fazla ___ saat ekran kullanacağım.", category: "Ekran Süresi", checked: false },
  { id: "s3", text: "Yatmadan en az 1 saat önce ekranları kapatacağım.", category: "Ekran Süresi", checked: false },
  { id: "s4", text: "Yemek saatlerinde telefon kullanmayacağım.", category: "Ekran Süresi", checked: false },
  // Gizlilik & Güvenlik
  { id: "g1", text: "Sosyal medya hesaplarımı 'Gizli' modda tutacağım.", category: "Gizlilik & Güvenlik", checked: false },
  { id: "g2", text: "Şifrelerimi güçlü tutacağım ve kimseyle paylaşmayacağım (ailem hariç).", category: "Gizlilik & Güvenlik", checked: false },
  { id: "g3", text: "Kişisel bilgilerimi (adres, okul, telefon) internette paylaşmayacağım.", category: "Gizlilik & Güvenlik", checked: false },
  { id: "g4", text: "Konum paylaşımımı kapalı tutacağım.", category: "Gizlilik & Güvenlik", checked: false },
  { id: "g5", text: "İki faktörlü doğrulamayı açık tutacağım.", category: "Gizlilik & Güvenlik", checked: false },
  // İletişim & Davranış
  { id: "i1", text: "Tanımadığım kişilerin arkadaşlık/takip isteklerini kabul etmeyeceğim.", category: "İletişim & Davranış", checked: false },
  { id: "i2", text: "Tanımadığım kişilerle özel mesajlaşmayacağım.", category: "İletişim & Davranış", checked: false },
  { id: "i3", text: "İnternette kimseye kötü, kırıcı veya zorbalık içeren mesajlar yazmayacağım.", category: "İletişim & Davranış", checked: false },
  { id: "i4", text: "Başkalarının fotoğraflarını izinsiz paylaşmayacağım.", category: "İletişim & Davranış", checked: false },
  // İçerik Paylaşımı
  { id: "c1", text: "Fotoğraf/video paylaşmadan önce bir yetişkine soracağım.", category: "İçerik Paylaşımı", checked: false },
  { id: "c2", text: "Uygunsuz, tehlikeli veya yasa dışı içerikleri paylaşmayacağım.", category: "İçerik Paylaşımı", checked: false },
  { id: "c3", text: "Özel/mahrem fotoğraflarımı hiç kimseye göndermeyeceğim.", category: "İçerik Paylaşımı", checked: false },
  // Yardım İsteme
  { id: "y1", text: "Beni rahatsız eden, korkutan veya üzen bir şey olursa hemen aileme söyleyeceğim.", category: "Yardım İsteme", checked: false },
  { id: "y2", text: "Siber zorbalığa maruz kalırsam kişiyi engelleyip bir yetişkine haber vereceğim.", category: "Yardım İsteme", checked: false },
  { id: "y3", text: "Birileri benden uygunsuz şeyler isterse hayır diyeceğim ve aileme söyleyeceğim.", category: "Yardım İsteme", checked: false },
  // Ebeveyn Taahhütleri
  { id: "e1", text: "Çocuğumun dijital aktivitelerini saygılı bir şekilde takip edeceğim.", category: "Ebeveyn Taahhütleri", checked: false },
  { id: "e2", text: "Çocuğum bana bir sorun bildirdiğinde cezalandırmak yerine destek olacağım.", category: "Ebeveyn Taahhütleri", checked: false },
  { id: "e3", text: "Dijital güvenlik konusunda bilgimi güncel tutacağım.", category: "Ebeveyn Taahhütleri", checked: false },
  { id: "e4", text: "Bu sözleşmeyi düzenli olarak birlikte gözden geçireceğiz.", category: "Ebeveyn Taahhütleri", checked: false },
];

export default function SozlesmePage() {
  const [items, setItems] = useState<ContractItem[]>(defaultItems);
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [customRule, setCustomRule] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: string) => {
    setItems(items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const addCustomRule = () => {
    if (!customRule.trim()) return;
    const newItem: ContractItem = {
      id: `custom_${Date.now()}`,
      text: customRule.trim(),
      category: "Özel Kurallar",
      checked: true,
    };
    setItems([...items, newItem]);
    setCustomRule("");
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const selectedItems = items.filter((item) => item.checked);
  const categories = [...new Set(items.map((item) => item.category))];
  const today = new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  const handlePrint = () => {
    setShowPreview(true);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-white">
        {/* Print-friendly version */}
        <div ref={printRef} className="max-w-3xl mx-auto p-8 print:p-4">
          <div className="text-center mb-8 border-b-2 border-blue-500 pb-6">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📜 Aile Dijital Güvenlik Sözleşmesi</h1>
            <p className="text-gray-600">Tarih: {today}</p>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-gray-700">
              Bu sözleşme, <strong>{childName || "___________"}</strong> ile <strong>{parentName || "___________"}</strong> arasında
              sosyal medya ve internet kullanımına ilişkin karşılıklı kuralları belirlemek amacıyla imzalanmıştır.
            </p>
          </div>

          {categories.map((category) => {
            const categoryItems = selectedItems.filter((item) => item.category === category);
            if (categoryItems.length === 0) return null;
            return (
              <div key={category} className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {category}
                </h2>
                <ul className="space-y-2 ml-4">
                  {categoryItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Signatures */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="grid grid-cols-2 gap-12">
              <div className="text-center">
                <div className="border-b-2 border-gray-400 pb-12 mb-2"></div>
                <p className="font-semibold text-gray-700">{childName || "Çocuk İmzası"}</p>
                <p className="text-sm text-gray-500">Çocuk</p>
              </div>
              <div className="text-center">
                <div className="border-b-2 border-gray-400 pb-12 mb-2"></div>
                <p className="font-semibold text-gray-700">{parentName || "Ebeveyn İmzası"}</p>
                <p className="text-sm text-gray-500">Ebeveyn</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            Bu sözleşme her iki tarafın da mutabakatıyla oluşturulmuştur. Düzenli olarak gözden geçirilecektir.
          </div>
        </div>

        {/* Back button (hidden in print) */}
        <div className="text-center py-8 print:hidden">
          <button
            onClick={() => setShowPreview(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
          >
            ← Düzenlemeye Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">📜</span>
              Aile Sözleşmesi
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Aile Dijital Güvenlik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                Sözleşmesi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Çocuğunuzla birlikte bir dijital kullanım sözleşmesi oluşturun. Kuralları seçin, kişiselleştirin ve birlikte imzalayın.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contract Builder */}
      <section className="section-padding pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Names */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">👥 Sözleşme Tarafları</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Çocuk Adı</label>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="Çocuğun adını girin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ebeveyn Adı</label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Ebeveyn adını girin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Rules by Category */}
          {categories.map((category) => {
            const categoryItems = items.filter((item) => item.category === category);
            return (
              <div key={category} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-violet-500"></span>
                  {category}
                </h3>
                <div className="space-y-3">
                  {categoryItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 group">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          item.checked
                            ? "bg-violet-500 border-violet-500 text-white"
                            : "border-gray-300 hover:border-violet-400"
                        }`}
                      >
                        {item.checked && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <span className={`text-sm leading-relaxed ${item.checked ? "text-gray-900" : "text-gray-500"}`}>
                        {item.text}
                      </span>
                      {item.id.startsWith("custom_") && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Custom Rule */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">➕ Kendi Kuralınızı Ekleyin</h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={customRule}
                onChange={(e) => setCustomRule(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustomRule()}
                placeholder="Yeni bir kural yazın..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
              />
              <button
                onClick={addCustomRule}
                className="px-5 py-3 rounded-xl gradient-primary text-white font-semibold shadow-md hover:-translate-y-0.5 transition-all"
              >
                Ekle
              </button>
            </div>
          </div>

          {/* Summary & Actions */}
          <div className="bg-violet-50 rounded-2xl border border-violet-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Sözleşme Özeti</h3>
              <span className="text-sm font-medium text-violet-700 bg-violet-100 px-3 py-1 rounded-full">
                {selectedItems.length} kural seçildi
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Seçtiğiniz kurallarla sözleşmenizi oluşturun. Yazdırabilir veya dijital olarak saklayabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePrint}
                disabled={selectedItems.length === 0}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Önizle & Yazdır
              </button>
              <button
                onClick={() => {
                  const all = items.map((i) => ({ ...i, checked: true }));
                  setItems(all);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Tümünü Seç
              </button>
              <button
                onClick={() => {
                  const all = items.map((i) => ({ ...i, checked: false }));
                  setItems(all);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Temizle
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
