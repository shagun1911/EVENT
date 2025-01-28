import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.759744053442!2d77.09122447550606!3d28.99428517946569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01bb2389bbab%3A0xbc7ac22878aabc3d!2sIIT%20Delhi%20Sonipat%20Campus!5e0!3m2!1sen!2sin!4v1675862437789!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Venue Details</h3>
              </div>
              <p className="text-gray-600 mb-4">
                IIT Delhi, Sonipat Campus
                <br />
                Sonipat, Haryana
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Training Hall:</strong> Main Academic Block
                </p>
                <p className="text-gray-600">
                  <strong>Accommodation:</strong> PG Block
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
