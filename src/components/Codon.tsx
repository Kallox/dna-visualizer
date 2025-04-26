type Props = {
    bases: string;
    position: number;
};

const Codon = ({ bases, position }: Props) => {
    return (
        <div className="flex flex-col">
            <span className="text-xs text-gray-600">{position}</span>
            <span>{bases}</span>
        </div>
    );
};

export default Codon;
