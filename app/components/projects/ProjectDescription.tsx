'use client';
import { useState } from "react";

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription = ({ description }: Readonly<ProjectDescriptionProps>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = description.split(' ');
  const MAX_WORDS = 30;

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p className="mt-4 text-justify text-gray-400">
        {words.length > MAX_WORDS
          ? isExpanded
            ? description
            : words.slice(0, MAX_WORDS).join(' ') + '...'
          : description}
      </p>
      {words.length > MAX_WORDS && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-grey-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ProjectDescription;
