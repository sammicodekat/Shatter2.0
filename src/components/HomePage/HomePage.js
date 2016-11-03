import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as shatterActions from '../../actions/shatterActions'
import { bindActionCreators } from 'redux'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  // reviewsRow(review, index) {
  //   return <div key={index}>{review.title}</div>
  // }

  render() {
    return(
      <div>
        <h1>Home Page Present</h1>
      </div>
    )
  }
}


// function mapStateToProps(state, ownProps) {
//   return {
//     reviews: state.newReviews
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(shatterActions, dispatch)
//   }
// }

// connect(mapStateToProps, mapDispatchToProps)()

export default HomePage