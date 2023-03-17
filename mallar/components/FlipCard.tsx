// import React, { useState } from 'react';

// interface FlipCardProps {
//   title: string;
//   description: string;
// }

// const FlipCard: React.FC<FlipCardProps> = ({ title, description }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`flip-card ${isActive ? 'active' : ''}`} onClick={handleClick}>
//       <div className="flip-card-inner relative w-64 h-64">
//         <div className="flip-card-front absolute w-full h-full bg-blue-500 text-white flex items-center justify-center">
//           <h3>{title}</h3>
//         </div>
//         <div className="flip-card-back absolute w-full h-full bg-blue-700 text-white flex items-center justify-center">
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;

import React, { useState } from 'react';

interface FlipCardProps {
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`flip-card ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner relative w-64 h-64">
        <div className="flip-card-front absolute w-full h-full bg-blue-500 text-white flex items-center justify-center">
          <h3 className="text-2xl">{title}</h3>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-blue-700 text-white flex items-center justify-center">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

