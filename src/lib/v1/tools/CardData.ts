export enum Attribute {
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

export enum SpellType {
	NORMAL = 'Normal',
	QUICK_PLAY = 'Quick Play',
	CONTINUOUS = 'Continuous',
	EQUIP = 'Equip',
	FIELD = 'Field',
	RITUAL = 'Ritual'
}

export enum TrapType {
	NORMAL = 'Normal',
	CONTINUOUS = 'Continuous',
	COUNTER = 'Counter'
}

export enum StarRank {
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
	SIX = 6,
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	ELEVEN = 11,
	TWELVE = 12
}

export interface CardData {
	id: number;
	name: string;
	type: CardType;
	category: string;
	desc: string;
	img: string;
}

export interface MonsterCardData extends CardData {
	type: CardType.MONSTER;
	monstertype: MonsterType;
	star: StarRank;
	atk: number;
	def: number;
}

export interface XYZMonsterCardData extends CardData {
	type: CardType.MONSTER;
	monstertype: MonsterType.XYZ;
	rank: StarRank;
	atk: number;
	def: number;
}
