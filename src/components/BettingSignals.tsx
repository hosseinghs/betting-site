'use client';

interface Signal {
  type: string;
  prediction: string;
  confidence: number;
  description: string;
}

interface BettingSignalsProps {
  signals?: Signal[];
}

const BettingSignals: React.FC<BettingSignalsProps> = ({
  signals = [
    {
      type: 'Over/Under',
      prediction: 'Over 2.5',
      confidence: 85,
      description: 'هر دو تیم در بازی‌های اخیر گل‌های زیادی زده‌اند',
    },
    {
      type: 'Both Teams to Score',
      prediction: 'Yes',
      confidence: 75,
      description: 'هر دو تیم در ۸۰٪ بازی‌های اخیر گل زده‌اند',
    },
    {
      type: 'First Half Goals',
      prediction: 'Over 1.5',
      confidence: 70,
      description: 'تیم‌ها در نیمه اول بازی‌های اخیر گل‌های زیادی زده‌اند',
    },
  ],
}) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-100 text-green-800';
    if (confidence >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">سیگنال‌های شرط‌بندی</h2>
      
      <div className="space-y-4">
        {signals.map((signal, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{signal.type}</span>
              <span className={`px-3 py-1 rounded-full text-sm ${getConfidenceColor(signal.confidence)}`}>
                {signal.confidence}% اطمینان
              </span>
            </div>
            <div className="text-lg font-bold mb-2">{signal.prediction}</div>
            <p className="text-gray-600 text-sm">{signal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingSignals; 