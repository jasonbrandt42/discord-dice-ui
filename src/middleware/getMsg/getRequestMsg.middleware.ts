import { getColor } from '../../utils/getColor';
import joinAsBlocks from '../../utils/joinAsBlocks';
import getConanHitLocation from '../../utils/getConanHitLocations';
import { D6_CONAN, D20_CONAN_HL } from '../../consts/diceConstants';
import { DICE_ROLLED, requestMsgReady } from '../../actions/roll.actions';
import { MINUS, PLUS } from '../../consts/fateConsts';

export default (store:any) => (next:any) => (action:any) => {
	if (action.type === DICE_ROLLED) {
		const state = store.getState();
		const { userSettings } = state;
		const { rerollCount } = state;
		
		const { payload } = action;
		const { result, rollOptions } = payload;
		const {
			results,
			diceAmount,
			modifier,
			modSymbol,
			totalWithModifier,
			highest,
			lowest,
			cocBonus,
			cocPenalty,
			dmg,
			effects,
			diceTypeNum,
			fateResults,
			fateResultTotal
		} = result;
		const hasMultipleDice = diceAmount > 1;
		const rolledWord = hasMultipleDice ? 'Results' : 'Result';
		const rolled = `${diceAmount}d${diceTypeNum}`;
		const username = userSettings.username || 'USERNAME_MISSING';
		const resultsJoined = joinAsBlocks(results, null, true);
		const isCombatDie = rollOptions.diceType === D6_CONAN;
		const isConanHitLocationDie = rollOptions.diceType === D20_CONAN_HL;
		const isFate = fateResults && fateResults.length;
		const fields = [];
		let msgTitle;

		let description = '';
		
		if (rollOptions.useModifier && (!isCombatDie && !isConanHitLocationDie)) {
			description = `**Modifier**: \`${modSymbol}${Math.abs(modifier)}\`.`;
		}
	
		if (rerollCount) {
			const timesWord = rerollCount === 1 ? 'time' : 'times';
			description += `\nRerolled \`${rerollCount}\` ${timesWord}.`;
		}
	
		if ((hasMultipleDice || modifier) && (!isCombatDie && !isConanHitLocationDie && !isFate)) {
			const sumJoined = joinAsBlocks(results, '+', true);
			let name = `:arrow_right: Sum of ${sumJoined}`;
			if (Number(modifier)) name += ` ${modSymbol} \`${Math.abs(modifier)}\` (modifier)`;
			fields.push({
				name,
				value: `Total: \`${totalWithModifier}\`.`
			});
		}
		if (hasMultipleDice && (!isCombatDie && !isConanHitLocationDie&& !isFate)) {
			fields.push({
				name: ':arrow_up: Highest',
				value: `Highest result rolled: \`${highest}\`.`
			});
		}
		if (hasMultipleDice && (!isCombatDie && !isConanHitLocationDie&& !isFate)) {
			fields.push({
				name: ':arrow_down: Lowest',
				value: `Lowest result rolled: \`${lowest}\`.`
			});
		}
		if (rollOptions.cocBonus) {
			fields.push({
				name: ':arrow_heading_up: Bonus Die',
				value: `Bonus Die result: \`${cocBonus}\`.`
			});
		}
		if (rollOptions.cocPenalty) {
			fields.push({
				name: ':arrow_heading_down: Penalty Die',
				value: `Penalty Die result: \`${cocPenalty}\`.`
			});
		}
		if (isCombatDie) {
			fields.push({
				name: `Combat Die Results:`,
				value: `:skull: Damage: \`${dmg}\`.\n:boom: Effects: \`${effects}\`.`
			});
		}
	
		if (isConanHitLocationDie) {
			const hitResult = results[0];
			const hitLocation = getConanHitLocation(hitResult);
	
			fields.push({
				name: ':mens: Hit Location:',
				value: `\`${hitResult}\` - ${hitLocation}`
			});
		}

		if (isFate) {
			const diceWord = fateResults.length === 1 ? 'Die' : 'Dice';
			const minus = ':heavy_minus_sign:'
			const plus = ':heavy_plus_sign:'
			fields.push({
				name: `Fate ${diceWord} Results:`,
				value: fateResults.map((fateResult : string) => {
					if (fateResult === PLUS) {
						return `${plus}`;
					} else if (fateResult === MINUS) {
						return `${minus}`;
					}
					return '`  `';
				}).join(', ')
			});

			fields.push({
				name: `Total Result:`,
				value: `\`${fateResultTotal}\``
			});

			msgTitle = `${username} rolled \`${diceAmount}dF\``;
		} else {
			msgTitle = `${username} rolled \`${rolled}\`. ${rolledWord}: ${resultsJoined}.`;
		}
	
		store.dispatch(requestMsgReady({
			msgTitle,
			color: getColor(),
			fields,
			description
		}));
	}
	next(action);
};
