import React from 'react';
import { connect } from 'react-redux';
// import { getResultsDerivedSelector } from '../../../selectors/l5rSelectors';
import { hideMsg } from '../../../actions/modals';
import { rollAndKeepKeepDice } from '../../../actions/rollAndKeep.actions';
import RollAndKeepResultsModal from './RollAndKeepResultsModal';


const mapStateToProps = (state: any) => {
	const { rollAndKeepData, rerollCount } = state;
	return {
		rollAndKeepData,
		rerollCount,
		// resultsDerived: getResultsDerivedSelector(state)
	};
};

const mapDispatchToProps = {
	hideMsg,
	// requestL5rReroll,
	rollAndKeepKeepDice,
	// l5rClearData,
	// l5rSendState
};

function RollAndKeepResultsModalContainer({
	hideMsg,
	rollAndKeepData: {
		showModal,
		results,
		resultsKept,
		resultsKeptIndexesAltered,
		resultsKeptIndexesExploded,
		additionalDiceRolled,
		additionalDiceIndexesKept,
		additionalDiceIndexesDropped,
		additionalDiceIndexesExploded
	},
	rerollCount,
	requestL5rReroll,
	rollAndKeepKeepDice,
	l5rClearData,
	l5rSendState,
	resultsDerived
}: any) {
	return (
		<RollAndKeepResultsModal
			hideMsg={hideMsg}
			rerollCount={rerollCount}
			keepDice={rollAndKeepKeepDice}
			requestL5rReroll={requestL5rReroll}
			l5rClearData={l5rClearData}
			l5rSendState={l5rSendState}

			showModal={showModal}
			results={results}
			resultsKept={resultsKept}
			resultsKeptIndexesAltered={resultsKeptIndexesAltered}
			resultsKeptIndexesExploded={resultsKeptIndexesExploded}
			resultsDerived={resultsDerived}

			additionalDiceRolled={additionalDiceRolled}
			additionalDiceIndexesKept={additionalDiceIndexesKept}
			additionalDiceIndexesDropped={additionalDiceIndexesDropped}
			additionalDiceIndexesExploded={additionalDiceIndexesExploded}
		/>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(RollAndKeepResultsModalContainer);
