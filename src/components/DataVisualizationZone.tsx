import SequenceInfo from "./SequenceInfo";
import SequenceViewer from "./SequenceViewer";

type Props = {
    sequence: string;
};

const DataVisualizationZone = ({ sequence }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-2 w-full h-full">
            <div className="col-span-3 bg-white p-8 rounded-lg shadow-md">
                <SequenceViewer sequence={sequence} />
            </div>
            <div className="col-span-1 bg-white p-8 rounded-lg shadow-md">
                <SequenceInfo sequence={sequence} />
            </div>
        </div>
    );
};

export default DataVisualizationZone;
