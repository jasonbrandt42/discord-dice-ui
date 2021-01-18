import React from 'react';
import { connect } from 'react-redux';
import { submitRoll } from '../../actions/roll.actions';
import { l5r1eSendState } from '../../actions/l5r1e.actions';
import L5r1eDicePoolBuilder from './L5r1eDicePoolBuilder';

const mapDispatchToProps = { submitRoll, l5rSendState };

function L5r1eDicePoolBuilderContainer({
	diceModuleForm,
	submitRoll,
	l5r1eSendState
}: any ) {
	const rollOptions = diceModuleForm?.values || {};
	return (
		<L5r1eDicePoolBuilder
			rollOptions={rollOptions}
			submitRoll={submitRoll}
			l5r1eSendState={l5r1eSendState}
		/>
	);
}

export default connect(undefined, mapDispatchToProps)(L5r1eDicePoolBuilderContainer);
