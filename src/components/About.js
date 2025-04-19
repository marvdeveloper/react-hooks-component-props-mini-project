import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

// Optionally set defaultProps
About.defaultProps = {
  image: "https://via.placeholder.com/215", // Default image if no image prop is passed
};

export default About;
