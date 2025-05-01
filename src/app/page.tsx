'use client';

import MatchHeader from '@/components/MatchHeader';
import LastGames from '@/components/LastGames';
import OddsComparison from '@/components/OddsComparison';
import RelatedArticles from '@/components/RelatedArticles';
import BettingSignals from '@/components/BettingSignals';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <MatchHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <LastGames />
            <OddsComparison />
            <RelatedArticles />
          </div>
          <div className="lg:col-span-1">
            <BettingSignals />
          </div>
        </div>
      </div>
    </main>
  );
} 