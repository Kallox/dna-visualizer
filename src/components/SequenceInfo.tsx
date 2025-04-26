import {
    calculateGCContent,
    countBases,
    countStartCodons,
    countEndCodons,
    getSequenceLength,
    estimateAminoAcidCount,
} from "../lib/sequence";

type Props = {
    sequence: string;
};

const SequenceInfo = ({ sequence }: Props) => {
    const gcContent = calculateGCContent(sequence);
    const sequenceLength = getSequenceLength(sequence);
    const baseCounts = countBases(sequence);
    const totalAminoAcids = estimateAminoAcidCount(sequence);
    const startCodonsCount = countStartCodons(sequence);
    const endCodonsCount = countEndCodons(sequence);

    const fields = [
        { label: "Sequence Length", value: `${sequenceLength} bases` },
        { label: "GC Content", value: `${gcContent.toFixed(2)}%` },
        { label: "A Bases", value: baseCounts.A },
        { label: "T Bases", value: baseCounts.T },
        { label: "G Bases", value: baseCounts.G },
        { label: "C Bases", value: baseCounts.C },
        { label: "Total Amino Acids", value: totalAminoAcids },
        { label: "Start Codons", value: startCodonsCount },
        { label: "End Codons", value: endCodonsCount },
    ];

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Sequence Information</h2>
            <div>
                <ul>
                    {fields.map((field, index) => (
                        <li
                            key={index}
                            className="flex justify-between p-2 border-b"
                        >
                            <span className="font-semibold">
                                {field.label}:
                            </span>
                            <span>{field.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SequenceInfo;
