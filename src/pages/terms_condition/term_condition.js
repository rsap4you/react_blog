import React from 'react';
import './term_condition.css';
import image_header from '../../utils/images/about-page-header.jpg'
const Term_condition = () => {
  return (
    <div className="term-page-fluid">
     <div className='image_div'  >
 
</div>

      <div className='terms' style={{ marginLeft: "11%" }}>
        <div className="text-black p-4">
          <h6 className="mt-4" style={{ color: 'black' }}>1. Acceptance of Terms</h6>
          <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use rsap4you Blog if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>2. Blog Content</h6>
          <p>The content on this blog is for general informational purposes only. We reserve the right to modify or discontinue the blog without notice at any time.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>3. User Contributions</h6>
          <p>We encourage users to contribute comments and engage in discussions. However, we reserve the right to monitor and remove any content that violates our policies or is deemed inappropriate.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>4. Privacy Policy</h6>
          <p>Our Privacy Policy outlines how we collect, use, and protect your personal information.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>5. Disclaimer</h6>
          <p>The information provided on rsap4you Blog is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>6. Changes to Terms</h6>
          <p>We reserve the right to revise these terms and conditions at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms and conditions.</p>

          <h6 className="mt-4" style={{ color: 'black' }}>7. Contact Us</h6>
          <p>If you have any questions about these terms and conditions, please <a href="/contact">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Term_condition;
