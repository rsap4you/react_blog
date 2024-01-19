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
        description: 'Unlock the magic of self-expression with our Arts Courses – where creativity knows no bounds and every stroke tells a unique story. Immerse yourself in a world of colors, shapes, and endless inspiration, as we guide you to unleash the artist within. Join us at RSAP4YOU and let your imagination soar on the wings of artistic discovery!!'
        
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Elevate your business acumen and chart a course for success with our dynamic Business Courses. From strategic management to entrepreneurial mastery, we offer a transformative learning experience designed to shape leaders and innovators. Join RSAP4YOU to gain practical insights, hone your decision-making skills, and navigate the complexities of the business world. Enrich your journey toward success – where every lesson is a stepping stone to your professional triumph.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Embark on a journey of digital discovery with our Computer Science Courses – where coding is an art, and innovation is the language. Dive into the heart of technology, explore algorithms, and master programming languages that open doors to a realm of endless possibilities. Join RSAP4YOU to cultivate the skills that shape the future, as we decode the secrets of the digital landscape together. Unleash your potential in the world of computer science, where every line of code is a step towards innovation.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Transform your passion for education into expertise with our empowering Education Courses. Dive into a realm where teaching becomes an art, and learning is a lifelong adventure. Explore innovative pedagogies, educational psychology, and curriculum design, all within a supportive community dedicated to shaping the educators of tomorrow. Join RSAP4YOU and lets redefine the future of education together – where knowledge becomes a catalyst for positive change.!'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Embark on a healing journey and explore the world of healthcare with our comprehensive Healthcare Courses. From cutting-edge medical advancements to compassionate patient care, our programs are crafted to equip you with the skills and knowledge needed to make a difference. Join RSAP4YOU to immerse yourself in the art and science of healthcare, where each course is a step towards fostering wellness and shaping a healthier future. Ignite your passion for healing and enroll in courses that go beyond textbooks, preparing you for a fulfilling career in the dynamic field of healthcare.!'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'Unlock the gates to justice and embark on a transformative legal journey with our dynamic Law Courses. Delve into the intricacies of the legal system, sharpen your analytical skills, and explore the art of advocacy. Join RSAP4YOU to immerse yourself in a comprehensive legal education where theory meets practice. Our courses empower you to navigate the complexities of law, equipping you with the knowledge and expertise to champion justice. Step into the world of legal excellence with us and shape the future of jurisprudence.!'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Harmonize your passion for music with our extraordinary Music Courses. Dive into the rhythmic universe, where melody meets technique, and creativity knows no bounds. Whether you are a budding musician or a seasoned pro, join RSAP4YOU to refine your skills, explore diverse genres, and discover the symphony within. Let our courses be the soundtrack to your musical journey, where every note resonates with the joy of self-expression. Enroll now and compose the future of your musical destiny!'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Dive into the world of athleticism and passion with our invigorating Sports Courses. From honing your skills to understanding sports science, our dynamic programs cater to both enthusiasts and aspiring professionals. Join RSAP4YOU to unlock the secrets of peak performance, strategy, and sports management. Whether you dream of breaking records or shaping the future of sports leadership, our courses are your pathway to success. Gear up for a thrilling journey in the realm of sports excellence with us!'
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