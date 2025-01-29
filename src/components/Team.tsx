import React from 'react';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Program Director",
    email: "sarah.johnson@iitd.ac.in",
    phone: "+91 98765 43210"
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Technical Lead",
    email: "rajesh.kumar@iitd.ac.in",
    phone: "+91 98765 43211"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Curriculum Coordinator",
    email: "priya.sharma@iitd.ac.in",
    phone: "+91 98765 43212"
  },
  {
    name: "Dr. Amit Patel",
    role: "Research Head",
    email: "amit.patel@iitd.ac.in",
    phone: "+91 98765 43213"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Coordinating Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of experts who are working together to make this program a success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Contact Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>
               
                
                <div className="space-y-2">
                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="truncate">{member.email}</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
