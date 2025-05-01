'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MatchHeaderProps {
  homeTeam?: string;
  awayTeam?: string;
  homeScore?: number;
  awayScore?: number;
  matchDate?: Date;
  isFinished?: boolean;
}

const MatchHeader: React.FC<MatchHeaderProps> = ({
  homeTeam = 'Girona FC',
  awayTeam = 'Real Betis',
  homeScore,
  awayScore,
  matchDate = new Date('2024-03-15T20:00:00'),
  isFinished = false,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    if (!isFinished) {
      const timer = setInterval(() => {
        const now = new Date();
        const diff = matchDate.getTime() - now.getTime();
        
        if (diff <= 0) {
          setTimeLeft('بازی شروع شده است');
          clearInterval(timer);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft(`${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [matchDate, isFinished]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={`/logos/${homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
              alt={homeTeam}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold">{homeTeam}</h2>
        </div>

        <div className="flex-1 text-center">
          {isFinished ? (
            <div className="text-4xl font-bold">
              {homeScore} - {awayScore}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">شروع بازی</div>
              <div className="text-xl font-bold">{timeLeft}</div>
            </div>
          )}
        </div>

        <div className="flex-1 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={`/logos/${awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
              alt={awayTeam}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold">{awayTeam}</h2>
        </div>
      </div>
    </div>
  );
};

export default MatchHeader; 