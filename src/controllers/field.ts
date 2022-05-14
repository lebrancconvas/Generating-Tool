// -- Based on Classic Field. -- 
// Deck Zone
// Monster Zone (length limit = 5)
// Spell & Trap Zone (length limit = 5)
// Graveyard Zone 
// Removed Zone
// Extra Deck Zone


import {CardData, MonsterCardData, XYZMonsterCardData} from '../lib/v1/tools/CardData';

let monsterField: MonsterCardData[] = [];
let spelltrapField: CardData[] = [];
let classicField = [monsterField, spelltrapField];

const validField = (classicField: CardData[]) => {
	if(monsterField.length > 5 || spelltrapField.length > 5) {
		return false;
	} else {
		return true;
	}
}
