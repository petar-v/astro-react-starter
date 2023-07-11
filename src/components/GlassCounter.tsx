import { useState } from 'react';

function GlassCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button
                className="m-2 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={() => setCount(count + 1)}
            >
                Drink water
            </button>
            <span>
                You have had <code>{count}</code> glasses of water 💧
            </span>
        </>
    );
}

export default GlassCounter;
