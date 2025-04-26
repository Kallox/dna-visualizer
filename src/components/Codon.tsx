import { translateToAminoAcids } from "../lib/sequence";

type Props = {
    bases: string;
    position: number;
};

const Codon = ({ bases, position }: Props) => {
    const aminoAcid = translateToAminoAcids(bases);

    return (
        <div className="flex flex-col font-mono" title={aminoAcid}>
            <span className="text-xs text-gray-600">{position}</span>
            <span>{bases}</span>
        </div>
    );
};

export default Codon;
