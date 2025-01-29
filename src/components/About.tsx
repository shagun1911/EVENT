
import { Users, BookOpen, School, Award } from 'lucide-react';
import SAMAGRA from  "../assets/samagrashiksha logo.png";
import IHFC from "../assets/IHFC.png" ;

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About The Program</h2>
          <div className="mt-6 flex justify-center space-x-8">
            <img 
              src={IHFC}
              alt="IHFC Logo" 
              className="h-16"
            />
            <img 
              src={SAMAGRA} 
              alt="Cograd Logo" 
              className="h-16"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Program Overview</h3>
            <p className="text-gray-600">
              The training program aims to equip 780 teachers from Uttarakhand with skills in AI, coding and awareness of other emerging technologies, following NCF 2023 guidelines. The program includes separate modules for junior (6th-8th) and senior (9th-12th) teachers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Duration & Format</h3>
            <p className="text-gray-600">
              10-day comprehensive program:
              - 5 days on-campus training
              - 5 days online training
              With theory, practical and project sessions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold">780 Teachers</h4>
          </div>
          <div className="text-center">
            <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold">Comprehensive Curriculum</h4>
          </div>
          <div className="text-center">
            <School className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold">Expert Training</h4>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold">IHFC-TIH Certification</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;