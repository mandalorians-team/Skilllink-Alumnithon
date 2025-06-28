import React from 'react';
import MentorCard from '../MentorProfile/MentorCard';
import '../../styles/MentorPage.css';
import AnaPhoto from '../../assets/imagen/Ana.png';
import LuisPhoto from '../../assets/imagen/Luis.png';

const FeaturedMentor = () => {
    const mentors = [
        {
            name: 'Ana Torres',
            title: 'Senior UX Designer',
            rating: { stars: 5, count: 28 },
            skills: ['UX', 'UI', 'Figma'],
            description: 'Diseñadora con 10 años de experiencia...',
            image: AnaPhoto
        },
        {
            name: 'Luis Pérez',
            title: 'Full Stack Developer',
            rating: { stars: 4.9, count: 15 },
            skills: ['JavaScript', 'React', 'MongoDB'],
            description: 'Apasionado por compartir conocimiento',
            image: LuisPhoto
        }
    ];

    return (
        <section className="featured-mentor">
            <h2>Mentores Destacados</h2>
            <div className="mentor-list">
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} {...mentor} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedMentor;
