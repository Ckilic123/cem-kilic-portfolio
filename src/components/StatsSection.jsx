import React from 'react';
import CountUp from 'react-countup';

/**
 * StatsSection
 * Displays animated counters for key statistics from the CV.
 */
const StatsSection = () => {
  const stats = [
    { label: 'Years Experience', value: 5 },
    { label: 'Features Launched', value: 15 },
    { label: 'Teams Led', value: 3 },
    { label: 'Countries Worked', value: 4 },
  ];

  return (
    <section id="stats" className="relative z-10 py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-4">
                <CountUp end={stat.value} duration={2} />
              </div>
              <div className="text-lg text-gray-300 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
