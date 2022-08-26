import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = <h1>Hello!</h1>

function  App() {
    return (
        <div>
            {h1}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cupiditate quia nostrum voluptates, quasi saepe porro atque ducimus obcaecati esse minima distinctio delectus, temporibus corporis nam! Ipsum, quos perspiciatis? Accusantium?</p>
        </div>
    )
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);


