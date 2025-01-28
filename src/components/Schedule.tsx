import React from 'react';

const Schedule = () => {
  const scheduleData = [
    {
      date: "30th January 2025",
      onCampus: {
        event: "Departing of the first Batch from designated points.",
        details: "First batch includes 180 teachers from Dehradun, Haridwar and Tehri."
      }
    },
    {
      date: "31st January 2025",
      onCampus: {
        event: "Commencement of the training of the 1st batch.",
        details: "The training for the first batch starts in two batches of 90 participants each."
      }
    },
    {
      date: "4th February 2025",
      onCampus: {
        event: "Conclusion of the training of the 1st batch.",
        details: "The training for the first batch concludes and participants are departed to the respective districts."
      }
    },
    {
      date: "5th February 2025",
      onCampus: {
        event: "Departing of the second Batch from designated points.",
        details: "Second batch includes 180 teachers from Nainital, Almora and US Nagar."
      }
    },
    {
      date: "6th February 2025",
      onCampus: {
        event: "Commencement of the training of the 2nd batch.",
        details: "The training for the second batch starts in two batches of 90 participants each."
      },
      onlineTraining: {
        event: "Commencement of the training of the 1st batch.",
        details: "The training for the first batch starts in two batches of 90 participants each."
      }
    },
    {
      date: "10th February 2025",
      onCampus: {
        event: "Conclusion of the training of the 2nd batch.",
        details: "The training for the second batch concludes and participants are departed to the respective districts."
      },
      onlineTraining: {
        event: "Conclusion of the training of the 1st batch.",
        details: "The training for the first batch concludes and participants are departed to the respective districts."
      }
    },
    {
      date: "11th February 2025",
      onCampus: {
        event: "Departing of the third Batch from designated points.",
        details: "Third batch includes 180 teachers from Rudraprayag, Uttarkashi and Pauri."
      }
    },
    {
      date: "12th February 2025",
      onCampus: {
        event: "Commencement of the training of the 3rd batch.",
        details: "The training for the third batch starts in two batches of 90 participants each."
      },
      onlineTraining: {
        event: "Commencement of the training of the 2nd batch.",
        details: "The training for the second batch starts in two batches of 90 participants each."
      }
    },
    {
      date: "16th February 2025",
      onCampus: {
        event: "Conclusion of the training of the 3rd batch.",
        details: "The training for the third batch concludes and participants are departed to the respective districts."
      },
      onlineTraining: {
        event: "Conclusion of the training of the 2nd batch.",
        details: "The training for the second batch concludes and participants are departed to the respective districts."
      }
    },
    {
      date: "17th February 2025",
      onCampus: {
        event: "Departing of the fourth Batch from designated points.",
        details: "Fourth batch includes 180 teachers from Bageshwar, Pitthoragarh and Champawat."
      }
    },
    {
      date: "18th February 2025",
      onCampus: {
        event: "Commencement of the training of the 4th batch.",
        details: "The training for the fourth batch starts in two batches of 90 participants each."
      },
      onlineTraining: {
        event: "Commencement of the training of the 3rd batch.",
        details: "The training for the third batch starts in two batches of 90 participants each."
      }
    },
    {
      date: "22nd February 2025",
      onCampus: {
        event: "Conclusion of the training of the 4th batch.",
        details: "The training for the fourth batch concludes and participants are departed to the respective districts."
      },
      onlineTraining: {
        event: "Conclusion of the training of the 3rd batch.",
        details: "The training for the third batch concludes and participants are departed to the respective districts."
      }
    },
    {
      date: "23rd February 2025",
      onCampus: {
        event: "Departing of the fifth Batch from designated points.",
        details: "Fifth batch includes 60 teachers from Chamoli."
      }
    },
    {
      date: "24th February 2025",
      onCampus: {
        event: "Commencement of the training of the 5th batch.",
        details: "The training for the fifth batch starts in two batches of 30 participants each."
      },
      onlineTraining: {
        event: "Commencement of the training of the 4th batch.",
        details: "The training for the fourth batch starts in two batches of 90 participants each."
      }
    },
    {
      date: "28th February 2025",
      onCampus: {
        event: "Conclusion of the training of the 5th batch.",
        details: "The training for the fifth batch concludes and participants are departed to the respective districts."
      },
      onlineTraining: {
        event: "Conclusion of the training of the 4th batch.",
        details: "The training for the fourth batch concludes and participants are departed to the respective districts."
      }
    },
    {
      date: "2nd March 2025",
      onlineTraining: {
        event: "Commencement of the training of the 5th batch.",
        details: "The training for the fifth batch starts in two batches of 30 participants each."
      }
    },
    {
      date: "6th March 2025",
      onlineTraining: {
        event: "Conclusion of the training of the 5th batch.",
        details: "The training for the fifth batch concludes and participants are departed to the respective districts."
      }
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Training Schedule</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Campus Training</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Campus Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Online Training</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Online Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scheduleData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.onCampus?.event || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.onCampus?.details || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.onlineTraining?.event || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.onlineTraining?.details || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Schedule;