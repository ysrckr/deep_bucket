import './App.css';

import { Button } from './components/ui/button';
import { cn } from './lib/utils';

function App() {
  return (
    <>
      <div className={cn('bg-red-500', 'p-4')}>
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            console.log('Hello World');
          }}
        >
          Hello World
        </Button>
      </div>
    </>
  );
}

export default App;
