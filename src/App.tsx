import React, { useState } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SampleRequestModal } from './components/SampleRequestModal';
import { HomePage } from './pages/HomePage';
import { WhyPage } from './pages/WhyPage';
import { ProductsPage } from './pages/ProductsPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { ApplyPage } from './pages/ApplyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'why' && (
          <WhyPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'requirements' && (
          <RequirementsPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
        {currentPage === 'apply' && (
          <ApplyPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Sticky/Floating WhatsApp Button Site-Wide */}
      <FloatingWhatsApp />

      {/* Sample Request & Catalog Download Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </div>
  );
}
