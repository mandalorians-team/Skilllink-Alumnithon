import React, { useState } from 'react';

export default function TestMentor() {
  const [mentorData, setMentorData] = useState({
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    photoUrl: '',
    bio: '',
    experience: '',
    education: '',
    linkedinProfile: ''
  });

  const getMentor = () => {
    fetch("http://localhost:8081/api/mentors/1")
      .then(res => res.json())
      .then(data => {
        console.log("🎯 Mentor obtenido:", data);
        setMentorData(data);
      })
      .catch(err => console.error("❌ Error GET:", err));
  };

  const putMentor = () => {
    const updatedMentor = {
      ...mentorData,
      username: "updated.username",
      firstName: "Juan",
      lastName: "Pérez",
      email: "juan.perez@example.com",
      bio: "Actualización bio",
      experience: "5 años",
      education: "Universidad React",
      linkedinProfile: "https://linkedin.com/in/juan"
    };

    fetch("http://localhost:8081/api/mentors/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMentor)
    })
      .then(res => res.json())
      .then(data => console.log("✅ Mentor actualizado:", data))
      .catch(err => console.error("❌ Error PUT:", err));
  };

  return (
    <div className="p-4">
      <button onClick={getMentor} className="bg-blue-500 text-white p-2 rounded m-2">GET Mentor</button>
      <button onClick={putMentor} className="bg-green-500 text-white p-2 rounded m-2">PUT Mentor</button>
    </div>
  );
}
