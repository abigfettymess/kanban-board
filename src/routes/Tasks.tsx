import React from 'react';
import KanbanBoard from '../components/KanbanBoard';

type Props = {

};

const Tasks = () => {
  return (
    <div>
      <KanbanBoard tasks={[]} />
    </div>
  );
};

export default Tasks;
