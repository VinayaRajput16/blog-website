import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#075c91"><path d="M480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm-.18-66.67q139.58 0 236.46-97.33 96.87-97.33 96.87-236 0-5-.16-9.5-.17-4.5-.17-8.17-5.67 27-27.27 45t-51.06 18h-80q-33 0-56.5-23.5t-23.5-56.5v-40h-160v-80q0-33 23.5-56.5t56.5-23.5h40v-14.66q0-18.34 13.16-40.17 13.17-21.83 30.5-28.83-23.33-7-47.73-11-24.41-4-50.6-4-138.67 0-236 96.87-97.33 96.88-97.33 236.46h166.66q66 0 113 47t47 113v40h-120v106.67q29.34 13 60.97 19.83 31.63 6.83 65.7 6.83Z"/></svg>
            <h3>Web Development</h3>
            <p>We build responsive, modern websites tailored to your needs, focusing on user experience and functionality.</p>
          </div>
          <div className="service-card">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#075c91"><path d="M355.33-516 444-605l-68.67-69-46.66 46.67L282-674l46.33-46.67-65-64.33-89 89 181 180Zm340 341.67 89-89.67-65-65-46.66 46.33L626-329.33 672.33-376 604-444l-88.67 88.67 180 181Zm13.34-599 65.66 65.66-65.66-65.66ZM280.67-120H120v-160.67l187.67-187.66L80-696l182.67-184L492-651.33l169-169.34q10-10 22.33-14.66 12.34-4.67 25-4.67 12.67 0 25 4.67 12.34 4.66 22.34 14.66l65 65.34q10 10 14.66 22.33 4.67 12.33 4.67 25t-4.67 24.83Q830.67-671 820.67-661l-169 169.33L880-263.33 696.67-80.67 469-308.33 280.67-120Zm-94-66.67H252l392.67-393L579-645.33 186.67-252v65.33ZM612-612.33l-33-33 65.67 65.66L612-612.33Z"/></svg>
            <h3>UI/UX Design</h3>
            <p>Our team designs intuitive interfaces and experiences that are both aesthetically pleasing and easy to use.</p>
          </div>
          <div className="service-card">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#075c91"><path d="M120-120v-77.33L186.67-264v144H120Zm163.33 0v-237.33L350-424v304h-66.67Zm163.34 0v-304l66.66 67.67V-120h-66.66ZM610-120v-236.33L676.67-423v303H610Zm163.33 0v-397.33L840-584v464h-66.67ZM120-346.33v-94.34l280-278.66 160 160L840-840v94.33L560-465 400-625 120-346.33Z"/></svg>
            <h3>SEO Optimization</h3>
            <p>Boost your online visibility with our tailored SEO services to help you rank higher in search engine results.</p>
          </div>
          <div className="service-card">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#075c91"><path d="M360-406.67h260q39.2 0 66.27-27.57 27.06-27.58 27.06-66.83 0-39.26-28.04-66.26-28.04-27-67.29-27h-6l-.67-6q-7.33-49-44.51-81-37.17-32-86.74-32-39.08 0-71.08 20.66-32 20.67-49 56.34l-2 3.33-4 .67q-45.19 1.89-76.26 34.48-31.07 32.6-31.07 77.94 0 47.24 33.05 80.24 33.06 33 80.28 33Zm0-66.66q-19.83 0-33.25-13.39-13.42-13.38-13.42-33.16 0-19.79 13.42-33.29t33.25-13.5h43.33V-570q0-31.76 22.44-54.21 22.43-22.46 54.16-22.46 31.74 0 54.24 22.46 22.5 22.45 22.5 54.21v43.33H620q11.33 0 19 7.67t7.67 19q0 11.33-7.67 19t-19 7.67H360ZM329.33-120v-66.67h84V-280H146.67q-27 0-46.84-19.83Q80-319.67 80-346.67v-426.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 46.84 19.83Q880-800.33 880-773.33v426.66q0 27-19.83 46.84Q840.33-280 813.33-280H546.67v93.33h84V-120H329.33ZM146.67-346.67h666.66v-426.66H146.67v426.66Zm0 0v-426.66 426.66Z"/></svg>
            <h3>Web Hosting</h3>
            <p>Reliable, fast, and secure web hosting solutions to keep your website online. Includes free SSL, scalable plans, and email hosting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
