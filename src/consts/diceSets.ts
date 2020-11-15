import { D6_CONAN, D20_CONAN_TEST, D20_CONAN, D20_CONAN_HL } from './consts';
import { D100_SL } from './consts';
import {
	D100,
	D20,
	D12,
	D10,
	D8,
	D6,
	D5,
	D4,
	POOL,
	MODIFIER,
	BOOST,
	DIFFICULTY,
	ABILITY,
	CHALLENGE,
	FORCE,
	PROFICIENCY,
	SETBACK
} from './diceConstants';
import narrativeDice from './narrativeDice';

/*******************************************
 *
 * image file name
 * ================
 *
 * die image has to be named {diceType}.png 
 * or described in `diceImg` property
 *
 ***************************************** */

export const classicSet = [{
	diceType: D100,
	label: 'd100'
}, {
	diceType: D20,
	label: 'd20'
}, {
	diceType: D12,
	label: 'd12'
}, {
	diceType: D10,
	label: 'd10'
}, {
	diceType: D8,
	label: 'd8'
}, {
	diceType: D6,
	label: 'd6'
}, {
	diceType: D4,
	label: 'd4'
}, {
	diceType: POOL,
	label: 'Pool Builder'
}];

export const poolSet = [{
	diceType: D100,
	label: 'd100'
}, {
	diceType: D20,
	label: 'd20'
}, {
	diceType: D12,
	label: 'd12'
}, {
	diceType: D10,
	label: 'd10'
}, {
	diceType: D8,
	label: 'd8'
}, {
	diceType: D6,
	label: 'd6'
}, {
	diceType: D4,
	label: 'd4'
}, {
	diceType: MODIFIER,
	label: 'Apply Modifier'
}];

export const CoCSet = [{
	diceType: D100_SL,
	diceImg: 'd100.png',
	label: 'Skill test'
}, {
	diceType: D20,
	label: 'd20'
}, {
	diceType: D12,
	label: 'd12'
}, {
	diceType: D10,
	label: 'd10'
}, {
	diceType: D8,
	label: 'd8'
}, {
	diceType: D6,
	label: 'd6'
}, {
	diceType: D4,
	label: 'd4'
}];

export const warhammerSet = [{
	diceType: D100_SL,
	diceImg: 'd100.png',
	label: 'Skill test'
}, {
	diceType: D100,
	label: 'd100'
}, {
	diceType: D10,
	label: 'd10'
}, {
	diceType: D5,
	diceImg: 'd10.png',
	label: 'd5',
	extraMark: 'd5'
}];

export const conanSet = [{
	diceType: D20_CONAN_TEST,
	label: 'Skill Test'
}, {
	diceType: D20_CONAN,
	label: 'd20'
}, {
	diceType: D20_CONAN_HL,
	label: 'Hit Location'
}, {
	diceType: D6_CONAN,
	label: 'Combat Die'
}];

export const narrativeDiceSet = [
	narrativeDice[BOOST],
	narrativeDice[DIFFICULTY],
	narrativeDice[ABILITY],
	narrativeDice[CHALLENGE],
	narrativeDice[FORCE],
	narrativeDice[PROFICIENCY],
	narrativeDice[SETBACK]
];
