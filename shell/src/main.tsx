import React from 'react';
import { createRoot } from 'react-dom/client';

const Header = React.lazy(() => import('headerMfe/Header'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header...">
      <Header />
    </React.Suspense>
    <h1>Shell App</h1>
  </div>
);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);