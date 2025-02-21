import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: 'App' }, position: { x: 0, y: 0 } },
  { id: '2', data: { label: 'WizardComponent' }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2' },
];

const ComponentTreeCard = () => {
  return (
    <div style={{ height: '200px' }}>
      <ReactFlow elements={elements} />
    </div>
  );
};

export default ComponentTreeCard;