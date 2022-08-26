import React from 'react';
import ReactDOM from 'react-dom/client';

function  App() {
    return (
        <>
            <div>
                <h1>Hello world</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cupiditate quia nostrum voluptates, quasi saepe porro atque ducimus obcaecati esse minima distinctio delectus, temporibus corporis nam! Ipsum, quos perspiciatis? Accusantium?</p>
            </div>
            <div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam nemo fugiat dolorem soluta autem labore. Iure, praesentium dolore. Officiis sed quis facere voluptatibus cumque saepe dicta assumenda labore omnis.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestias, harum sint minus reprehenderit sunt, numquam id totam at voluptatem vel? Inventore fugit voluptatibus commodi maxime pariatur neque laborum possimus.</p>
            </div>
        </>
    )
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);


