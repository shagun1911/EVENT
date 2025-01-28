import React, { useState } from 'react';

const DaySchedule = () => {
  const [activeTab, setActiveTab] = useState('senior');

  const juniorSchedule = [
    { time: "8:00 AM - 9:00 AM", session: "Breakfast", details: "Morning meal to start the day.", venue: "PG", team: "Catering Team of PG" },
    { time: "10:00 AM - 12:00 PM", session: "Project Time", details: "Research and Learn", venue: "PG", team: "Moderation Team" },
    { time: "12:00 AM - 1:00 PM", session: "Lunch", details: "Lunch", venue: "PG", team: "Catering Team of PG" },
    { time: "1:00 PM - 2:00 PM", session: "Travel Time", details: "From PG to Campus", venue: "-", team: "Moderation Team" },
    { time: "2:00 PM - 2:10 PM", session: "Attendance", details: "Mandatory for All", venue: "Training Hall", team: "Moderation Team" },
    { time: "2:10 PM - 4:10 PM", session: "Theory Session", details: "Theory Session by the Mentor", venue: "Training Hall", team: "Moderation Team" },
    { time: "4:10 PM - 4:30 PM", session: "Tea Break", details: "Refreshments and Break", venue: "Lounge Area", team: "Hospitality Team" },
    { time: "4:30 AM - 6:30 PM", session: "Workshop", details: "Hands-on training", venue: "Training Hall", team: "Moderation Team" },
    { time: "7:30 PM - 8:30 PM", session: "Dinner Time", details: "Dinner", venue: "PG", team: "Hospitality Team" }
  ];

  const seniorSchedule = [
    { time: "7:00 AM - 8:00 AM", session: "Breakfast", details: "Morning meal to start the day", venue: "PG", team: "Catering Team of PG" },
    { time: "8:00 AM - 8:20 AM", session: "Travel Time", details: "From PG to Campus", venue: "-", team: "Moderation Team" },
    { time: "8:30 AM - 8:40 AM", session: "Attendance", details: "Mandatory for All", venue: "Training Hall", team: "Moderation Team" },
    { time: "8:40 AM - 10:40 AM", session: "Theory Session", details: "Theory Session by the Mentor", venue: "Training Hall", team: "Moderation Team" },
    { time: "10:40 AM - 11:00 AM", session: "Tea Break", details: "Refreshments and Break", venue: "Lounge Area", team: "Hospitality Team" },
    { time: "11:00 AM - 1:00 PM", session: "Workshop", details: "Hands-on training", venue: "Training Hall", team: "Moderation Team" },
    { time: "1:30 PM - 2:30 PM", session: "Lunch", details: "Lunch", venue: "PG", team: "Catering Team" },
    { time: "3:00 PM - 5:00 PM", session: "Project Time", details: "Research and Learn", venue: "PG", team: "Moderation Team" },
    { time: "7:30 PM - 8:30 PM", session: "Dinner Time", details: "Dinner", venue: "PG", team: "Hospitality Team" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Daily Schedule</h2>
        
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-l-lg transition-colors ${activeTab === 'senior' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('senior')}
          >
            Senior Schedule
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg transition-colors ${activeTab === 'junior' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('junior')}
          >
            Junior Schedule
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(activeTab === 'junior' ? juniorSchedule : seniorSchedule).map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.session}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.details}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.venue}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DaySchedule;