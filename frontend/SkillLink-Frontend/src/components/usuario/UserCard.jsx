import React from "react";
import { Star, MessageCircle, Briefcase } from "lucide-react";

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.role}</p>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center text-yellow-400">
              <Star className="h-4 w-4" />
              <span className="ml-1 text-sm text-gray-600">{user.rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MessageCircle className="h-4 w-4" />
              <span className="ml-1 text-sm">{user.reviews} reviews</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-4 w-4" />
              <span className="ml-1 text-sm">{user.experience} years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">{user.bio}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {user.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <button className="btn btn-primary">Contact</button>
      </div>
    </div>
  );
}
