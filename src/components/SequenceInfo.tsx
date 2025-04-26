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
        {
            label: "GC Content",
            value: `${gcContent.toFixed(2)}%`,
            help: "GC content refers to the percentage of guanine (G) and cytosine (C) bases in a DNA or RNA molecule. It influences the stability and structure of the nucleic acid.",
        },
        { label: "A Bases", value: baseCounts.A },
        { label: "T Bases", value: baseCounts.T },
        { label: "G Bases", value: baseCounts.G },
        { label: "C Bases", value: baseCounts.C },
        {
            label: "Total Amino Acids",
            value: totalAminoAcids,
            help: "The estimated number of amino acids that can be encoded by the given sequence.",
        },
        {
            label: "Start Codons",
            value: startCodonsCount,
            help: "Start codons are specific sequences in mRNA that signal the start of translation. The most common start codon is AUG.",
        },
        {
            label: "End Codons",
            value: endCodonsCount,
            help: "End codons (or stop codons) are sequences in mRNA that signal the termination of translation. Common end codons include UAA, UAG, and UGA.",
        },
    ];

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Sequence Information</h2>
            <div>
                <ul>
                    {fields.map((field, index) => (
                        <li
                            key={index}
                            className="flex justify-between p-2 border-b text-sm"
                        >
                            <span className="font-semibold flex gap-1">
                                {field.label}:
                                {field.help && (
                                    <span
                                        className="flex items-center justify-center w-3 h-3 rounded-full bg-black text-white text-xs cursor-pointer hover:bg-gray-700"
                                        title={field.help}
                                    >
                                        ?
                                    </span>
                                )}
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
