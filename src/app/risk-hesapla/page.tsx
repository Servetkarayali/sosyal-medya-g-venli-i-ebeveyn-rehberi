"use client";

import RiskCalculator from "@/components/RiskCalculator";
import AnimatedSection from "@/components/AnimatedSection";

export default function RiskHesaplaPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">📊</span>
              Risk Analizi
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Dijital Güvenlik{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Risk Skoru
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              10 basit soruyu cevaplayarak çocuğunuzun dijital güvenlik risk seviyesini öğrenin ve kişiselleştirilmiş öneriler alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">⏱️ ~2 dakika</span>
              <span className="flex items-center gap-1">📋 10 soru</span>
              <span className="flex items-center gap-1">🎯 Kişisel öneriler</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-16 -mt-4">
        <div className="max-w-3xl mx-auto">
          <RiskCalculator />
        </div>
      </section>
    </div>
  );
}
