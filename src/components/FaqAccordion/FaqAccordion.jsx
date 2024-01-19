import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
       
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Who is the founder of RSAP4YOU ?</Accordion.Header>
                    <Accordion.Body>
                        Amarjeet Kumar is the founder of RSAP4YOU. He is the Software Developer in HyperLink Infosystem Pvt Ltd.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What is RSAP4YOU, and what sets it apart from other organizations?</Accordion.Header>
                    <Accordion.Body>
                    RSAP4YOU is a dynamic organization founded by Amarjeet Kumar, a seasoned Software Engineer at Hyperlink Infosystem. What sets us apart is our relentless commitment to innovation, client-centric approach, and a team of experts dedicated to shaping the future of technology.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Who is Amarjeet Kumar, and what is his role in RSAP4YOU?</Accordion.Header>
                    <Accordion.Body>
                    Amarjeet Kumar is the founder of RSAP4YOU and brings a wealth of experience from his role as a Software Engineer at Hyperlink Infosystem. As the visionary leader, Amarjeet plays a crucial role in driving the organization's vision and overseeing its strategic direction.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header> What industries does RSAP4YOU cater to?</Accordion.Header>
                    <Accordion.Body>
                    RSAP4YOU serves a diverse range of industries, adapting our expertise to meet the specific needs of businesses in technology, healthcare, education, and more. Our versatile team is equipped to address challenges across various sectors.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;