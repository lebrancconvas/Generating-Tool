// Draw Phase -> Add Card from the deck to player's hand.
// Standby Phase -> Waiting duration or Activating some effects phase before Main Phase 1.
// Main Phase 1 -> Play card from hand to field. (Activate card, Summon monster, etc.) before battle.
// Battle Phase -> Attack monster, monster attack monster, etc.
// Main Phase 2 -> Play card from hand to field. (Activate card, Summon monster, etc.) after battle.
// End Phase -> Waiting duration or Activating some effects phase before next turn. 


export enum Phase {
	DRAW = 'Draw',
	STANDBY = 'Standby',
	MAIN1 = 'Main1',
	BATTLE = 'Battle',
	MAIN2 = 'Main2',
	END = 'End'
}