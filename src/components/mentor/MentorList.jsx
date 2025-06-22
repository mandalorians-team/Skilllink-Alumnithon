import React from 'react';
import MentorCard from '../mentor/MentorCard';
import DavidPhoto from '../../assets/imagen/David.png';
import MariaPhoto from '../../assets/imagen/Maria.png';


const MentorList = () => {
    const mentors = [    
    {
        name: 'David Henao',
        title: 'UI/UX Design',
        rating: { stars: 4.9, count: 25 },
        skills: ['WordPress', 'Visily', 'Figma'],
        description: 'Me encanta transmitir mi pasión en los diseños Web!',
        image: DavidPhoto
    },

    {
        name: 'María Gómez',
        title: 'Data Scientist',
        rating: { stars: 4.8, count: 22 },
        skills: ['Python', 'Pandas', 'Machine Learning'],
        description: 'Experta en análisis de datos y mentoría...',
        image: MariaPhoto
    }
    ];

    return (
        <section className="featured-mentor">
            <h2>Mentores Disponibles</h2>
            <div className="mentor-list">
                {mentors.map((mentor, i) => (
                    <MentorCard key={i} {...mentor} />
                ))}
            </div>
        </section>
    );
};

export default MentorList;