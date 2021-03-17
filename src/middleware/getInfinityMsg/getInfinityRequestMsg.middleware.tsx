import { requestMsgReady } from "../../actions/roll.actions";
import { INFINITY_DICE_ROLLED } from "../../actions/infinity.actions";
import getInfinitySuccessLevel, { infinitySuccessLevelType } from '../../utils/getInfinitySuccessLevel';
import joinAsBlocks from '../../utils/joinAsBlocks';
import { SUCCESS, FAILURE, getColor } from "../../utils/getColor";

export default (store:any) => (next:any) => (action:any) => {
	if (action.type === INFINITY_DICE_ROLLED) {
		const { payload: { result } } = action;
		const { payload: { rollOptions } } = action;
		const state = store.getState();
		const { rerollCount } = state;
		const { userSettings } = state;
		const { results, assistanceDiceResults } = result;
		const {
			diceAmount,
			difficulty,
			focus,
			fortune,
			tn,
			untrainedTest,
			assistanceDice,
			assistanceFocus,
			assistanceTn,
			assistanceUntrainedTest
		} = rollOptions;
		const username = userSettings.username || 'USERNAME_MISSING'
		const fields = [];
		const resultsJoined = joinAsBlocks(results, null, true);
		const msgTitle = `${username} rolled **\`${diceAmount}d20\`**. Results: ${resultsJoined}.`;
		let assistanceSuccessLevel: any = {};
		let description;

		if (assistanceDice && assistanceDiceResults) {
			assistanceSuccessLevel = getInfinitySuccessLevel({
				results: assistanceDiceResults,
				tn: assistanceTn,
				focus: assistanceFocus,
				difficulty: Number(difficulty),
				untrainedTest: assistanceUntrainedTest || untrainedTest
			});
		}

		const successLevel: infinitySuccessLevelType = getInfinitySuccessLevel({
			results: results,
			tn: tn,
			focus: focus,
			difficulty: difficulty,
			assistanceSuccessLevel: assistanceSuccessLevel.successLevel,
			untrainedTest
		});
		const successLevelIcon = successLevel.isSuccess ? ':green_circle:' : ':red_circle:';

		description = `Successes: \`${successLevel.successLevel}\` vs. Difficulty: \`${difficulty}\``;
		description += `\nFocus: \`${focus || 0}\``;
		description += `\nTN: \`${tn}\``;

		if (fortune && Number(fortune) > 0) {
			description += `\nFortune points used: \`${fortune}\``;
		}
		
		if (untrainedTest) {
			description += `\nUntrained Test`;
		}

		if (assistanceDice && assistanceDiceResults?.length) {
			const assistanceDiceResultsJoined = joinAsBlocks(assistanceDiceResults, null, true);
			let value = `:game_die: Rolled: ${assistanceDiceResultsJoined}\n:high_brightness: Successes: \`${assistanceSuccessLevel.successLevel}\``;
			
			if (assistanceTn !== '') {
				value = value + `\nAssistance TN: \`${assistanceTn}\``;
			}
			if (assistanceFocus !== '') {
				value = value + `\nAssistance Focus: \`${assistanceFocus}\``;
			}
			if (assistanceUntrainedTest) {
				value = value + `\nAssistance Untrained Test`;
			}
			if (assistanceSuccessLevel.complications) {
				value = value + `\n:black_circle: Complications: \`${assistanceSuccessLevel.complications}\``;
			}
			fields.push({
				name: `:busts_in_silhouette: Assistance roll:`,
				value
			});
		}

		if (rerollCount) {
			const timesWord = rerollCount === 1 ? 'time' : 'times';

			fields.push({
				name: `:game_die: Rerolled:`,
				value: `Rerolled \`${rerollCount}\` ${timesWord}`
			});
		}

		if (successLevel.complications) {
			fields.push({
				name: `:black_circle: Complications:`,
				value: `\`${successLevel.complications}\``
			});
		}

		fields.push({
			name: successLevelIcon + ' Roll result:',
			value: successLevel.isSuccess ? 'SUCCESS' : 'FAILURE'
		});

		fields.push({
			name: `:boom: Momentum generated:`,
			value: `\`${successLevel.momentum}\``
		});
	
		store.dispatch(requestMsgReady({
			msgTitle,
			color: successLevel.isSuccess ? getColor(SUCCESS) : getColor(FAILURE),
			fields,
			description
		}));
	}
	next(action);
};
