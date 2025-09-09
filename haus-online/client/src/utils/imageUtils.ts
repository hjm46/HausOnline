const cardImages = import.meta.glob('../components/assets/cards/*.svg', { eager: true })

export function getCardImage(card: { suit: string; rank: string }): string | undefined {
    const fileName = `${card.rank}_of_${card.suit}.svg`;
    const imagePath = `../components/assets/cards/${fileName}`;
    const imageModule = cardImages[imagePath] as { default: string } | undefined;
    return imageModule ? imageModule.default : undefined;
}