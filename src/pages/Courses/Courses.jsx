import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'Unleash your creativity at RSAP4YOU Arts Courses, where every stroke tells a unique story. Immerse yourself in a world of colors and shapes, letting your imagination soar!'
        
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Elevate your business skills at RSAP4YOU with dynamic courses, shaping leaders through practical insights and strategic mastery. Navigate the complexities of the business world and step confidently towards professional triumph.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Embark on a digital discovery at RSAP4YOU Computer Science Courses, where coding is an art and innovation is the language. Unleash your potential in the world of computer science, with each line of code a step towards innovation'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Transform your passion for education into expertise at RSAP4YOU Education Courses. Dive into the art of teaching, explore innovative pedagogies, and redefine the future of education, where knowledge is a catalyst for positive change.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Join RSAP4YOU to explore the art and science of healthcare, igniting your passion for healing and preparing for a fulfilling career in this dynamic field.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'Embark on a transformative legal journey at RSAP4YOU, where dynamic Law Courses empower you to champion justice, navigate complexities, and shape the future of jurisprudence.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Harmonize your passion for music at RSAP4YOU, where extraordinary Music Courses empower you to refine skills, explore diverse genres, and compose the future of your musical destiny.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Immerse yourself in the world of athleticism at RSAP4YOU, where invigorating Sports Courses unlock the secrets of peak performance, strategy, and sports management, paving your pathway to success in the realm of sports excellence.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Embark on an educational odyssey with our captivating courses – where learning is not just a journey, but an adventure that transforms your potential into power. Uncover the secrets of success through our dynamic curriculum, designed to ignite your curiosity and propel you toward excellence. At <b> RSAP4YOU</b>. we don't just offer courses; we provide keys to unlock the doors of opportunity. Elevate your skills, ignite your passion, and let's redefine the future together!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;