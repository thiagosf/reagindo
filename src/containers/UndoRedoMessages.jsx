import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Button } from '../components'

let UndoRedoMessages = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <div className="pull-right">
      <Button info xsmall onClick={onRedo} disabled={!canRedo}>
        <FormattedMessage id="actions.redo" />
      </Button>
    </div>
    <Button info xsmall onClick={onUndo} disabled={!canUndo}>
      <FormattedMessage id="actions.undo" />
    </Button>
    <hr />
  </div>
)

const mapStateToProps = (state) => {
  return {
    canUndo: state.dashboard.past.length > 0,
    canRedo: state.dashboard.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedoMessages = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedoMessages)

export default UndoRedoMessages
