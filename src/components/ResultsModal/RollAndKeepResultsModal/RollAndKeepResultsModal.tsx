import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from '../ResultsModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20, faArrowRight, faEquals } from '@fortawesome/free-solid-svg-icons';
import TooltipWrapper from '../../InfoTooltip/TooltipWrapper';
import rollAndKeepStyles from './RollAndKeepResultsModal.module.css';

function RollAndKeepResultsModal({
	hideMsg,
	rerollCount,
	keepDice,
	requestrollAndKeepReroll,
	rollAndKeepClearData,
	rollAndKeepSendState,

	showModal,
	results,
	resultsKept,
	resultsKeptIndexesAltered,
	resultsKeptIndexesExploded,
	resultsDerived,

	additionalDiceRolled,
	additionalDiceIndexesKept,
	additionalDiceIndexesDropped,
	additionalDiceIndexesExploded
}: any) {
	const [selectedDiceState, setSelectedDiceState] = useState<any>([]);
	const [isModifyingAllowed, setIsModifyingAllowed] = useState<boolean>(true);

	useEffect(() => {
		setSelectedDiceState([]);
		setIsModifyingAllowed(true);

		if (!showModal) {
			// rollAndKeepClearData();
		}
	}, [showModal, rollAndKeepClearData]);


	const DiceIcon = <FontAwesomeIcon className={styles.resultsModalDiceIcon} icon={faDiceD20} />;

	// const resultsElements: Array<JSX.Element> = [];
	// const resultsKeptElements: Array<JSX.Element> = [];
	// const additionalDiceRolledElements: Array<JSX.Element> = [];

	console.log('results', results);

	const selectDie = (rowIndex: number) => {
		setSelectedDiceState([
			...selectedDiceState,
			rowIndex
		]);
	};

	const deselectDie = (rowIndex: number) => {
		setSelectedDiceState(
			selectedDiceState.filter((i: number) => i !== rowIndex)
		);
	};
	
	const handleReroll = () => {
		// requestL5rReroll(selectedDiceState);
		// setSelectedDiceState([]);
		// l5rSendState();
	};

	const handleKeepDice = () => {
		keepDice(selectedDiceState);
		setSelectedDiceState([]);
		rollAndKeepSendState();
	};

	const getTotal = () => {
		return selectedDiceState.reduce((acc: Number, selectedIndex: number) => {
			return acc + results[selectedIndex].reduce((a: number, b: number) => (a + b), 0);
		}, 0);
	};

	const resultsElements: Array<JSX.Element> = results.map((resultsInner: number[], rowIndex: number) => {
		const sum = resultsInner.reduce((a, b) => (a + b), 0);
		const isRowSelected = selectedDiceState.includes(rowIndex);

		const handleClick = isRowSelected ? deselectDie : selectDie;

		const resultsRowClassNames = classNames({
			[rollAndKeepStyles.resultsRow]: true,
			[rollAndKeepStyles.selected]: isRowSelected
		});

		return (
			<div
				className={resultsRowClassNames}
				onClick={() => handleClick(rowIndex)}
			>
				<div className={rollAndKeepStyles.sum}>
					{ sum }
				</div>
				{
					resultsInner.map((result: number, index: number) => {
						const showResult = result === 10 ? 0 : result;
				
						
				
						return (
							<div className={rollAndKeepStyles.resultsBlock}>
								<div className={rollAndKeepStyles.imgContainer}>
									<img
										className={rollAndKeepStyles.img}
										src={require(`../../../img/d10_bg.png`)}
										alt={'diceLabel'}
									/>
									<span className={rollAndKeepStyles.imgResult}>{showResult}</span>
								</div>
								<div className={classNames({
									hidden: index === resultsInner.length -1,
									[rollAndKeepStyles.arrowIconContainer]: true

								})}>
									<FontAwesomeIcon className={rollAndKeepStyles.arrowIcon} icon={faArrowRight} />
								</div>
							</div>
						);
					})
				}
			</div>
		);
	});

	const total = getTotal();

	return (
		<Modal
			show={showModal}
			onHide={hideMsg}
		>
			<Modal.Header closeButton className={styles.resultsModalHeader}>
				<div>
					{DiceIcon}
					<Modal.Title className={styles.resultsModalTitle}>Roll Results</Modal.Title>
				</div>
			</Modal.Header>
			<Modal.Body className={classNames({
				[styles.resultsBody]: true,
				// [rollAndKeepStyles.resultsBody]: true
			})}>

				<section>
					<h4 className={rollAndKeepStyles.header}>Select the dice to keep:</h4>
					<div className={rollAndKeepStyles.results}>
						{ resultsElements }
					</div>
					<div>
						<div className={rollAndKeepStyles.equalsContainer}>
							<FontAwesomeIcon className={rollAndKeepStyles.equalsIcon} icon={faEquals} />
						</div>
						<div className={rollAndKeepStyles.total}>
							{ total }
						</div>
					</div>
				</section>

				<section>
					<div className={rollAndKeepStyles.buttonContainer}>
							<Button
								disabled={!selectedDiceState.length || rerollCount > 0}
								variant="outline-info"
								onClick={handleReroll}
							>Reroll all dice</Button>
							<Button
								disabled={!selectedDiceState.length}
								variant="outline-primary"
								onClick={handleKeepDice}
							>Keep selected</Button>
						</div>
				</section>

			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					onClick={hideMsg}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default RollAndKeepResultsModal;
