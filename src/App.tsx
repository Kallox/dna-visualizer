import { useState } from "react";
import DataVisualizationZone from "./components/DataVisualizationZone";
import InputZone from "./components/InputZone";

function App() {
    const [sequence, setSequence] = useState("");

    const handleSequenceChange = (newSequence: string) => {
        setSequence(newSequence);
    };

    return (
        <div>
            <header className="p-8 border-b-1 bg-gray-100">
                <h1 className="text-3xl font-bold underline text-center">
                    DNA Visualizer
                </h1>
            </header>
            <main className="flex flex-col gap-8 items-center min-h-screen bg-gray-100 p-8">
                <InputZone onButtonClick={handleSequenceChange} />
                <DataVisualizationZone sequence={sequence} />
            </main>
        </div>
    );
}

export default App;
