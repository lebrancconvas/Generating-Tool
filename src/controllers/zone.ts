import {CardData, MonsterCardData, XYZMonsterCardData} from '../lib/v1/tools/CardData';

export enum Zone {
	DECK = 'Deck',
	MONSTER = 'Monster',
	SPELL_TRAP = 'Spell/Trap',
	GRAVEYARD = 'Graveyard',
	REMOVED = 'Removed',
	EXTRA = 'Extra'
}

// Deck load deck data to store on the zone.
export class Deck {
	private deck: CardData[] = [];

	getDeckAmount() {
		return this.deck.length;
	}

	isValidDeck(): boolean {
		if(this.getDeckAmount() >= 40 && this.getDeckAmount() <= 80) {
			return true;
		} else {
			return false;
		}
	}

	draw() {
		return this.deck.pop();
	}
}

export class Hand {
	private hand: CardData[] = [];

	
}