import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 border-b border-[color:var(--tile-border)] pb-2">
        About Me
      </h3>
      <p className="text-sm leading-relaxed space-y-3">
        <span>
          I've worked over 6 years in the mental health service industry in
          several roles across many populations. I am a person who can
          empathize, listen, and provide service to anyone in need. Working in
          Toronto through these years has allowed me an opportunity to share the
          knowledge and skills I acquired from school.
        </span>
        <span>
          Over the pandemic, I decided I wanted to hone my skills with
          technology and try something new. I learned how to code using
          JavaScript, Python, React.js and many other tools. The guidance of
          friends and family allowed me to see the talent I have for programming
          and how I may be able to use what I learned over the years into a new
          field.
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
