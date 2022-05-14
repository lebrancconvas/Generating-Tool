export enum Element {
	FIRE = 'Fire',
	WATER = 'Water',
	WIND = 'Wind',
	EARTH = 'Earth',
	LIGHT = 'Light',
	DARK = 'Dark',
}

export enum CardType {
	MONSTER = 'Monster',
	SPELL = 'Spell',
	TRAP = 'Trap'
}

export enum MonsterType {
	NORMAL = 'Normal',
	EFFECT = 'Effect',
	RITUAL = 'Ritual',
	FUSION = 'Fusion',
	SYNCHRO = 'Synchro',
	XYZ = 'XYZ',
	PENDULUM = 'Pendulum',
	LINK = 'Link'
}

export interface CardData {
	id: number;
	name: string;
	type: CardType;
	category: string;
	desc: string;
}
