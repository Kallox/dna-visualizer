import Codon from "./Codon";

type Props = {
    sequence: string;
};

const SequenceViewer = ({ sequence }: Props) => {
    const offset = 0; // Offset para alinear los codones
    const initialGroup = sequence.slice(0, offset); // Grupo inicial de 1 o 2 caracteres
    const remainingSequence = sequence.slice(offset); // Resto de la secuencia
    const incompleteCodons = remainingSequence.match(/.{1,3}/g) || []; // Divide el resto en grupos de 3
    const codons =
        initialGroup.length > 0
            ? [initialGroup, ...incompleteCodons]
            : incompleteCodons; // Combina el grupo inicial con los codones completos

    const getPosition = (index: number, offset: number): number => {
        if (index === 0) {
            return 1; // El primer grupo siempre tiene posición 1
        } else {
            return index * 3 + 1 - (offset > 0 ? 3 - offset : 0);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Sequence Viewer</h2>
            <div>
                <div className="flex flex-wrap gap-2">
                    {codons.map((codon, index) => (
                        <div
                            key={index}
                            className={`codon ${
                                codon.length === 3
                                    ? "full-codon"
                                    : "partial-codon"
                            }`}
                        >
                            <Codon
                                bases={codon}
                                position={getPosition(index, offset)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SequenceViewer;

// index * tam_codon - offset - 2
