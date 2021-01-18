export const ROLL_AND_KEEP_REROLL_REQUESTED = 'ROLL_AND_KEEP_REROLL_REQUESTED';
export const ROLL_AND_KEEP_DICE_REROLLED = 'ROLL_AND_KEEP_DICE_REROLLED';
export const ROLL_AND_KEEP_ROLL_REQUESTED = 'ROLL_AND_KEEP_ROLL_REQUESTED';
export const ROLL_AND_KEEP_DICE_ROLLED = 'ROLL_AND_KEEP_DICE_ROLLED';
export const ROLL_AND_KEEP_KEEP_DICE = 'ROLL_AND_KEEP_KEEP_DICE';
export const ROLL_AND_KEEP_ALTER_DIE = 'ROLL_AND_KEEP_ALTER_DIE';
export const ROLL_AND_KEEP_ROLL_ADDITIONAL_DIE = 'ROLL_AND_KEEP_ROLL_ADDITIONAL_DIE';
export const ROLL_AND_KEEP_KEEP_ADDITIONAL_DIE = 'ROLL_AND_KEEP_KEEP_ADDITIONAL_DIE';
export const ROLL_AND_KEEP_CLEAR_DATA = 'ROLL_AND_KEEP_CLEAR_DATA';
export const ROLL_AND_KEEP_ADD_DIE = 'ROLL_AND_KEEP_ADD_DIE';
export const ROLL_AND_KEEP_SEND_STATE = 'ROLL_AND_KEEP_SEND_STATE';

export function requestRollAndKeepRoll(payload: any) {
	return {
		type: ROLL_AND_KEEP_ROLL_REQUESTED,
		payload
	}
}

export function requestRollAndKeepReroll(payload: any ) {
	return {
		type: ROLL_AND_KEEP_REROLL_REQUESTED,
		payload
	};
}

export function rollAndKeepDiceRerolled(payload: any ) {
	return {
		type: ROLL_AND_KEEP_DICE_REROLLED,
		payload
	};
}

export function rollAndKeepDiceRolled(payload: any) {
	return {
		type: ROLL_AND_KEEP_DICE_ROLLED, 
		payload
	};
}

export function rollAndKeepKeepDice(payload: any) {
	return {
		type: ROLL_AND_KEEP_KEEP_DICE, 
		payload
	};
}

export function rollAndKeepAlterDie(payload: any) {
	return {
		type: ROLL_AND_KEEP_ALTER_DIE, 
		payload
	};
}

export function l5rA1eddDie(payload: any) {
	return {
		type: ROLL_AND_KEEP_ADD_DIE,
		payload
	}
}

export function rollAndKeepRollAdditionalDie(payload: any) {
	return {
		type: ROLL_AND_KEEP_ROLL_ADDITIONAL_DIE, 
		payload
	};
}

export function rollAndKeepKeepAdditionalDie(payload: any) {
	return {
		type: ROLL_AND_KEEP_KEEP_ADDITIONAL_DIE, 
		payload
	};
}

export function rollAndKeepClearData() {
	return {
		type: ROLL_AND_KEEP_CLEAR_DATA
	};
}

export function rollAndKeepSendState() {
	return {
		type: ROLL_AND_KEEP_SEND_STATE
	};
}
