import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function FeaturedCourse({ course }) {
  console.log(course);
  return (
    <div className="bg-[#111827] rounded-lg overflow-hidden shadow-lg border-2 border-purple-400/30">
      <div className="flex items-center">
        <div className="w-1/3">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover p-4 rounded-2xl"
          />
        </div>
        <div className="w-2/3 p-6 text-white">
          <p className="text-sm text-gray-400"></p>
          <h2 className="text-3xl font-bold mt-1 mb-3">{course.title}</h2>
          <p className="text-palette-steel-blue text-sm mb-3">
            {course.instructor} • Último acceso {course.lastAccess}
          </p>
          <p className="text-gray-200 flex items-center gap-2 mb-4">
            <Play className="h-5 w-5 text-palette-steel-blue" />
            Siguiente: {course.nextLesson}
          </p>

          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
            <div
              className="bg-palette-steel-blue h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}></div>
          </div>
          <div className="flex justify-between text-sm text-palette-steel-blue mb-6">
            <span>{course.progress}% Completado</span>
            <span>{course.status}</span>
          </div>

          <Link to={`/courses/${course.id}/content`}>
            <button className="bg-palette-steel-blue text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
              <Play className="h-5 w-5" />
              Reanudar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
