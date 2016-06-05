import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { Button } from '../components'

let UndoRedoMessages = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <div className="pull-right">
      <Button info xsmall onClick={onRedo} disabled={!canRedo}>
        Refazer
      </Button>
    </div>
    <Button info xsmall onClick={onUndo} disabled={!canUndo}>
      Desfazer
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
