import React, { useState } from 'react';
import { BookOpen, Code, Brain, Notebook as Robot, Cpu, Network, Database, ChevronDown, ChevronUp } from 'lucide-react';

const curriculumData = [
  {
    day: 1,
    title: "Introduction to AI & Programming Fundamentals",
    description: "Foundation concepts and programming basics",
    topics: [
      "Introduction to Artificial Intelligence",
      "Python Programming Basics",
      "Variables, Data Types, and Operators",
      "Control Structures and Functions",
      "Basic Problem Solving Techniques"
    ],
    icon: BookOpen
  },
  {
    day: 2,
    title: "Data Structures & Basic Algorithms",
    description: "Essential programming constructs",
    topics: [
      "Lists, Tuples, and Dictionaries",
      "Basic Algorithms and Flowcharts",
      "Array Operations and Manipulations",
      "String Handling and Operations",
      "Introduction to Object-Oriented Programming"
    ],
    icon: Code
  },
  {
    day: 3,
    title: "Introduction to Machine Learning",
    description: "Basics of ML and its applications",
    topics: [
      "What is Machine Learning?",
      "Types of Machine Learning",
      "Supervised vs Unsupervised Learning",
      "Basic Statistical Concepts",
      "Introduction to NumPy and Pandas"
    ],
    icon: Brain
  },
  {
    day: 4,
    title: "Basic ML Algorithms",
    description: "Fundamental machine learning algorithms",
    topics: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Basic Classification Problems",
      "Model Evaluation Techniques"
    ],
    icon: Cpu
  },
  {
    day: 5,
    title: "Neural Networks Fundamentals",
    description: "Basics of neural networks",
    topics: [
      "Introduction to Neural Networks",
      "Perceptrons and Activation Functions",
      "Feedforward Neural Networks",
      "Backpropagation Basics",
      "Simple Neural Network Implementation"
    ],
    icon: Network
  },
  {
    day: 6,
    title: "Deep Learning Basics",
    description: "Introduction to deep learning",
    topics: [
      "Deep Learning Concepts",
      "Introduction to TensorFlow/PyTorch",
      "Building Simple Neural Networks",
      "Training and Validation",
      "Model Optimization Techniques"
    ],
    icon: Database
  },
  {
    day: 7,
    title: "Computer Vision & Image Processing",
    description: "Basics of image processing and CV",
    topics: [
      "Introduction to Computer Vision",
      "Image Processing Fundamentals",
      "Convolutional Neural Networks",
      "Image Classification Tasks",
      "Object Detection Basics"
    ],
    icon: Robot
  },
  {
    day: 8,
    title: "Natural Language Processing",
    description: "Text processing and NLP basics",
    topics: [
      "Introduction to NLP",
      "Text Processing Techniques",
      "Sentiment Analysis",
      "Basic Text Classification",
      "Introduction to Language Models"
    ],
    icon: BookOpen
  },
  {
    day: 9,
    title: "AI Ethics & Responsible AI",
    description: "Ethical considerations in AI",
    topics: [
      "AI Ethics and Privacy",
      "Bias in AI Systems",
      "Responsible AI Development",
      "AI Safety and Security",
      "Social Impact of AI"
    ],
    icon: Brain
  },
  {
    day: 10,
    title: "Project Work & Presentations",
    description: "Hands-on project implementation",
    topics: [
      "Project Planning and Design",
      "Implementation Guidance",
      "Testing and Debugging",
      "Project Presentations",
      "Future Learning Roadmap"
    ],
    icon: Code
  }
];

const CurriculumDay = ({ day, title, description, topics, icon: Icon, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">Day {day}: {title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      <div className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-3"></span>
              <span className="text-gray-700">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Curriculum = () => {
  const [openDays, setOpenDays] = useState(new Set([1])); // Day 1 open by default

  const toggleDay = (day) => {
    const newOpenDays = new Set(openDays);
    if (newOpenDays.has(day)) {
      newOpenDays.delete(day);
    } else {
      newOpenDays.add(day);
    }
    setOpenDays(newOpenDays);
  };

  return (
    <section id="curriculum" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive 10-day journey through AI and programming fundamentals to advanced concepts
          </p>
        </div>

        <div className="space-y-4">
          {curriculumData.map((day) => (
            <CurriculumDay
              key={day.day}
              {...day}
              isOpen={openDays.has(day.day)}
              onToggle={() => toggleDay(day.day)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;