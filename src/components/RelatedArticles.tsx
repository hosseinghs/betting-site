'use client';

import Image from 'next/image';

interface Article {
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
}

interface RelatedArticlesProps {
  articles?: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles = [
    {
      title: 'پیش‌بینی بازی Girona vs Betis',
      summary: 'تحلیل کامل بازی و پیش‌بینی نتیجه نهایی',
      date: '2024-03-14',
      imageUrl: '/images/match-preview.jpg',
    },
    {
      title: 'آخرین اخبار تیم Girona',
      summary: 'وضعیت مصدومین و ترکیب احتمالی تیم',
      date: '2024-03-13',
      imageUrl: '/images/team-news.jpg',
    },
    {
      title: 'آمار و ارقام بازی',
      summary: 'مقایسه آماری دو تیم در فصل جاری',
      date: '2024-03-12',
      imageUrl: '/images/stats.jpg',
    },
  ],
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{article.summary}</p>
              <span className="text-gray-500 text-xs">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles; 