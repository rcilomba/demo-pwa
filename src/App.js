import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <>
            <header>
                <p>This is header</p>
            </header>
            <main>
                <Outlet />
                <footer>
                    <p>Do it properly</p>
                </footer>
            </main>
        </>
  );
}

export default App;
