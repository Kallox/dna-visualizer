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
            color: "text-purple-600 font-bold",
            help: "GC content refers to the percentage of guanine (G) and cytosine (C) bases in a DNA or RNA molecule. It influences the stability and structure of the nucleic acid.",
        },
        { label: "A Bases", value: baseCounts.A, dot: "bg-green-500" },
        { label: "T Bases", value: baseCounts.T, dot: "bg-red-500" },
        { label: "G Bases", value: baseCounts.G, dot: "bg-amber-500" },
        { label: "C Bases", value: baseCounts.C, dot: "bg-blue-500" },
        {
            label: "Total Amino Acids",
            value: totalAminoAcids,
            help: "The estimated number of amino acids that can be encoded by the given sequence.",
        },
        {
            label: "Start Codons",
            value: startCodonsCount,
            color: "text-green-600 font-semibold",
            help: "Start codons are specific sequences in mRNA that signal the start of translation. The most common start codon is AUG.",
        },
        {
            label: "End Codons",
            value: endCodonsCount,
            color: "text-red-600 font-semibold",
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
                            className="flex justify-between items-center p-2 border-b text-sm hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold flex gap-1 items-center">
                                {field.dot && (
                                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${field.dot} flex-shrink-0`}></span>
                                )}
                                {field.label}:
                                {field.help && (
                                    <span
                                        className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-gray-400 text-white text-[10px] cursor-pointer hover:bg-gray-600 transition-colors"
                                        title={field.help}
                                    >
                                        ?
                                    </span>
                                )}
                            </span>
                            <span className={field.color || "text-gray-800"}>{field.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SequenceInfo;
