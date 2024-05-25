import './App.css';

import { Button } from './components/ui/button';
import { cn } from './lib/utils';

function App() {
  return (
    <>
      <div className={cn('bg-red-500', 'text-white', 'p-4')}>
        <Button variant="default" size="sm">
          Hello World
        </Button>
      </div>
    </>
  );
}

export default App;
