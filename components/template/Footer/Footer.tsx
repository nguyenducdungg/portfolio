import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        <h3>Contact information —</h3>
        <p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
        <ul>
          <li>Email: <a className="special" href="mailto:nguyenducdung853@gmail.com">nguyenducdung853@gmail.com</a></li>
          <li>Phone: <span className="gray-darkest">0398.113.876</span></li>
        </ul>
      </div>
      <div>
        <h3>Latest<br />projects —</h3>
        <ul>
          <li><a href="#">Project A</a></li>
          <li><a href="#">Project B</a></li>
          <li><a href="#">Project C</a></li>
        </ul>
      </div>
      <div>
        <h3>Current<br />availability —</h3>
        <p>I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
      </div>
      <div>
        <h3>Follow <br />me on —</h3>
        <ul>
          <li><a href="#">facebook</a></li>
          <li><a href="#">instagram</a></li>
          <li><a href="#">zalo</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
