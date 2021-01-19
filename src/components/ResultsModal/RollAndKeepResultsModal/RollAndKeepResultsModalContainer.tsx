import React from 'react';
import { connect } from 'react-redux';
// import { getResultsDerivedSelector } from '../../../selectors/l5rSelectors';
import { hideMsg } from '../../../actions/modals';
import {
	rollAndKeepKeepDice,
	requestRollAndKeepReroll,
	rollAndKeepClearData } from '../../../actions/rollAndKeep.actions';
import RollAndKeepResultsModal from './RollAndKeepResultsModal';

const mapStateToProps = (state: any) => {
	const { rollAndKeepData } = state;
	return { rollAndKeepData };
};

const mapDispatchToProps = {
	hideMsg,
	requestRollAndKeepReroll,
	rollAndKeepKeepDice,
	rollAndKeepClearData
};

function RollAndKeepResultsModalContainer({
	hideMsg,
	rollAndKeepData: {
		showModal,
		results,
		rerollCount,
		modifier
	},
	requestRollAndKeepReroll,
	rollAndKeepKeepDice,
	rollAndKeepClearData
}: any) {
	return (
		<RollAndKeepResultsModal
			showModal={showModal}
			hideMsg={hideMsg}
			rerollCount={rerollCount}
			keepDice={rollAndKeepKeepDice}
			requestRollAndKeepReroll={requestRollAndKeepReroll}
			rollAndKeepClearData={rollAndKeepClearData}
			results={results}
			modifier={modifier}
		/>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(RollAndKeepResultsModalContainer);
