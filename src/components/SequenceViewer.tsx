import Codon from "./Codon";

type Props = {
    sequence: string;
};

const legendItems = [
    { base: "A", bg: "bg-green-100", text: "text-green-700", border: "border-green-300", label: "Adenine" },
    { base: "T", bg: "bg-red-100", text: "text-red-700", border: "border-red-300", label: "Thymine" },
    { base: "G", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300", label: "Guanine" },
    { base: "C", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300", label: "Cytosine" },
];

const SequenceViewer = ({ sequence }: Props) => {
    const offset = 0;
    const initialGroup = sequence.slice(0, offset);
    const remainingSequence = sequence.slice(offset);
    const incompleteCodons = remainingSequence.match(/.{1,3}/g) || [];
    const codons =
        initialGroup.length > 0
            ? [initialGroup, ...incompleteCodons]
            : incompleteCodons;

    const getPosition = (index: number, offset: number): number => {
        if (index === 0) {
            return 1;
        } else {
            return index * 3 + 1 - (offset > 0 ? 3 - offset : 0);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-lg font-bold">Sequence Viewer</h2>
                <div className="flex gap-2 items-center">
                    <span className="text-xs text-gray-500 font-medium">Legend:</span>
                    {legendItems.map(({ base, bg, text, border, label }) => (
                        <span
                            key={base}
                            className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold border cursor-default ${bg} ${text} ${border}`}
                            title={label}
                        >
                            {base}
                        </span>
                    ))}
                    <span className="w-px h-5 bg-gray-300 mx-1"></span>
                    <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                        <span className="w-3 h-3 rounded-sm bg-green-100 border border-green-300"></span>
                        START
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium">
                        <span className="w-3 h-3 rounded-sm bg-red-100 border border-red-300"></span>
                        STOP
                    </span>
                </div>
            </div>
            {sequence.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                    {codons.map((codon, index) => (
                        <Codon
                            key={index}
                            bases={codon}
                            position={getPosition(index, offset)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-400">
                    <p className="text-lg font-medium">No sequence loaded</p>
                    <p className="text-sm mt-1">Paste a DNA sequence above and click Visualize</p>
                </div>
            )}
        </div>
    );
};

export default SequenceViewer;
