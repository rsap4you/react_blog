import React from 'react';
import './Blog.css';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';



const blogs = [
    {
        id: 1,
        title: 'Blog 1',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=s3JkYvf0UqM' />,
    },
    {
        id: 2,
        title: 'Blog 2',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=knOU7zbDRNA&t=119s' />,
    },
    {
        id: 3,
        title: 'Blog 3',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=PAO4KsCgAnw' />,
    },
    {
        id: 4,
        title: 'Blog 4',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=fXkqj77YEcM' />,
    },
    {
        id: 5,
        title: 'Blog 5',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=lx5vOauFiUE&t=4s' />,
    },
    {
        id: 6,
        title: 'Blog 6',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=oKEPsaLEu8U&t=9s' />,
    },
    {
        id: 7,
        title: 'Blog 7',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=vyOMVX3wrL0' />,
    },
    {
        id: 8,
        title: 'Blog 8',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=VhxeMbdDYMU' />,
    },
    {
        id: 9,
        title: 'Blog 9',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=fHZnThjH7dU&t=30s' />,
    },
    {
        id: 10,
        title: 'Blog 10',
        content: <ReactPlayer url='https://www.youtube.com/watch?v=fHZnThjH7dU&t=30s' />,
    },
];

function Blog() {
    return (
        <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Welcome to the RSAP4YOU Blog - Your Gateway to Innovation and Excellence! Delve into a world where technology meets creativity, curated by the visionaries at RSAP4YOU. Join us on a journey of insightful articles, expert perspectives, and success stories that illuminate the forefront of software development and digital transformation. Whether you're a tech enthusiast, business leader, or aspiring innovator, our blog is your go-to destination for staying ahead in the ever-evolving tech landscape. Explore the latest trends, gain valuable insights, and be inspired by the limitless possibilities of technology with RSAP4YOU. Let's embark on this digital odyssey together.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-6'>
                                <Link to="/blog" className='text-decoration-none'>
                                    {/* <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'> */}
                                        {/* <Card.Body className='p-md-5 d-flex flex-column align-items-center'> */}
                                            <Card.Text className='fs-2 mb-4'>{blog.content}</Card.Text>
                                            {/* <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title> */}
                                        {/* </Card.Body> */}
                                    {/* </Card> */}
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Blog;
