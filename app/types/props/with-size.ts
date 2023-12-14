type WithSize = {
    size: "small" | "medium" | "large";
}

const sizes: Record<WithSize["size"], number> = {
    small: 6,
    medium: 12,
    large: 24
}

export function getSizeValue(sizeString: WithSize["size"]): number {
    return sizes[sizeString];
}

export default WithSize;