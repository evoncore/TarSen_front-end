import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/messages'

export function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}