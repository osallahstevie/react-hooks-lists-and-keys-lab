import React from "react";

const ProjectItem = ({ project: { technologies } }) => {
  return (
    <div>
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
};

export default ProjectItem;
