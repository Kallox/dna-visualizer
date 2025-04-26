export function getSequenceLength(sequence: string): number {
    return sequence.length;
}

export function estimateAminoAcidCount(sequence: string): number {
    const codonLength = 3;

    return Math.floor(getSequenceLength(sequence)/codonLength);
}

export function countBases(sequence: string): { A: number; T: number; G: number; C: number } {
    const baseCounts = { A: 0, T: 0, G: 0, C: 0 };
    for (const base of sequence) {
        if (Object.prototype.hasOwnProperty.call(baseCounts, base)) {
            baseCounts[base as "A" | "T" | "G" | "C"]++;
        }
    }
    return baseCounts;
}

export function calculateGCContent(sequence: string): number {
    const gcCount = (sequence.match(/[GC]/g) || []).length;
    return (gcCount / sequence.length) * 100;
}

export function countStartCodons(sequence: string): number {
    const startCodon = "ATG";
    let count = 0;
    for (let i = 0; i < sequence.length - 2; i++) {
        if (sequence.slice(i, i + 3) === startCodon) {
            count++;
        }
    }
    return count;
}

export function countEndCodons(sequence: string): number {
    const endCodons = ["TAA", "TAG", "TGA"];
    let count = 0;
    for (let i = 0; i < sequence.length - 2; i++) {
        if (endCodons.includes(sequence.slice(i, i + 3))) {
            count++;
        }
    }
    return count;
}