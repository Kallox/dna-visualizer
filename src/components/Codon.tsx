import { translateToAminoAcids } from "../lib/sequence";

type Props = {
    bases: string;
    position: number;
};

const Codon = ({ bases, position }: Props) => {
    const aminoAcid = translateToAminoAcids(bases);

    const specialCodonColors: { [key: string]: string } = {
        Methionine: "text-green-500",
        Stop: "text-red-500",
    };

    return (
        <div
            className={`flex flex-col font-mono ${specialCodonColors[aminoAcid]}`}
            title={aminoAcid}
        >
            <span className="text-xs text-gray-600">{position}</span>
            <span>{bases}</span>
        </div>
    );
};

export default Codon;
