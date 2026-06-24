import { translateToAminoAcids } from "../lib/sequence";

type Props = {
    bases: string;
    position: number;
};

const baseStyles: Record<string, { bg: string; text: string; border: string }> = {
    A: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
    T: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
    G: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" },
    C: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
};

const Codon = ({ bases, position }: Props) => {
    const aminoAcid = translateToAminoAcids(bases);
    const isStart = aminoAcid === "Methionine";
    const isStop = aminoAcid === "Stop";
    const isPartial = bases.length < 3;

    let boxStyle = "bg-white border-gray-200";
    if (isStart) boxStyle = "bg-green-50 border-green-300 ring-1 ring-green-200";
    if (isStop) boxStyle = "bg-red-50 border-red-300 ring-1 ring-red-200";

    return (
        <div
            className={`flex flex-col items-center font-mono rounded-md px-1.5 py-1 border text-xs ${boxStyle} transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 ${isPartial ? "opacity-50 border-dashed" : ""}`}
            title={`${aminoAcid} (position: ${position})`}
        >
            <span className="text-[9px] text-gray-400 leading-none mb-0.5">{position}</span>
            <div className="flex gap-0.5">
                {bases.split("").map((base, i) => {
                    const style = baseStyles[base];
                    return (
                        <span
                            key={i}
                            className={`inline-flex items-center justify-center w-5 h-6 rounded text-[11px] font-bold ${style?.bg || "bg-gray-100"} ${style?.text || "text-gray-500"} border ${style?.border || "border-gray-200"}`}
                        >
                            {base}
                        </span>
                    );
                })}
            </div>
            {(isStart || isStop) && (
                <span className={`text-[9px] leading-none mt-0.5 font-bold ${isStart ? "text-green-600" : "text-red-600"}`}>
                    {isStart ? "START" : "STOP"}
                </span>
            )}
        </div>
    );
};

export default Codon;
