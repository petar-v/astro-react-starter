import { useState } from 'react';

function GlassCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You've had {count} glasses of water 💧</p>
            <button onClick={() => setCount(count + 1)}>Drink water</button>
        </>
    );
}

export default GlassCounter;
