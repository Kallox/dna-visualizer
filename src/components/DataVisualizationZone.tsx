import SequenceInfo from "./SequenceInfo";
import SequenceViewer from "./SequenceViewer";

type Props = {
    sequence: string;
};

const DataVisualizationZone = ({ sequence }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-6 w-full max-w-7xl">
            <div className="order-1 lg:order-2 col-span-4 lg:col-span-1 dna-card p-6">
                <SequenceInfo sequence={sequence} />
            </div>
            <div className="order-2 lg:order-1 col-span-4 lg:col-span-3 dna-card p-6">
                <SequenceViewer sequence={sequence} />
            </div>
        </div>
    );
};

export default DataVisualizationZone;
