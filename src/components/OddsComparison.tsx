'use client';

interface Odds {
  platform: string;
  homeWin: number;
  draw: number;
  awayWin: number;
}

interface OddsComparisonProps {
  odds?: Odds[];
}

const OddsComparison: React.FC<OddsComparisonProps> = ({
  odds = [
    { platform: 'Bet365', homeWin: 2.10, draw: 3.40, awayWin: 3.20 },
    { platform: '1xBet', homeWin: 2.15, draw: 3.50, awayWin: 3.25 },
    { platform: 'Unibet', homeWin: 2.05, draw: 3.35, awayWin: 3.15 },
  ],
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">مقایسه ضرایب</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-right">سایت</th>
              <th className="px-4 py-3 text-center">برد میزبان</th>
              <th className="px-4 py-3 text-center">مساوی</th>
              <th className="px-4 py-3 text-center">برد مهمان</th>
            </tr>
          </thead>
          <tbody>
            {odds.map((odd, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3 font-medium">{odd.platform}</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {odd.homeWin}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    {odd.draw}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {odd.awayWin}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OddsComparison; 