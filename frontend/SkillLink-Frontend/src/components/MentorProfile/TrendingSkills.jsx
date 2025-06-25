import React from 'react';
import '../../styles/MentorPage.css';

const TrendingSkills = () => {
    const skills = ['React', 'Node.js', 'Figma', 'Data Science', 'IA', 'Next.js'];

    return (
        <aside className="trending-skills">
            <h3>Skills en Tendencia</h3>
            <ul>
                {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
                </ul>
        </aside>
    );
};

export default TrendingSkills;