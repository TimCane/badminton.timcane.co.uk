import React from 'react';
import { SetCount } from '../types';

interface SetCountStepProps {
  onSelect: (count: SetCount) => void;
}

const SetCountStep: React.FC<SetCountStepProps> = ({ onSelect }) => {
  const options: SetCount[] = [1, 3, 5, 'Endless'];

  return (
    <div className="wizard-step">
      <h2>Number of Sets</h2>
      <div className="button-group">
        {options.map((count) => (
          <button key={count} onClick={() => onSelect(count)}>
            {count}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SetCountStep;
