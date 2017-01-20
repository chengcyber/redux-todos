import React from 'react';
import {connect} from 'react-redux';
import Link from '../components/Link.js'

const mapStateToProps = (state,
                         ownProp) => {
    const filter = ownProp.filter
    const currentFilter = state.visibilityFilter
    const active = !!(currentFilter === filter)
    return {
        active
    }
}

const mapDispatchToProps = (dispatch,
                            ownProps) => {
    const filter = ownProps.filter
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);


// class FilterLink extends React.Component {
//
//     componentDidMount() {
//         const {store} = this.context;
//         this.unsubscribe = store.subscribe(() => {
//             this.forceUpdate();
//         })
//     }
//
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//
//     render() {
//
//         const props = this.props
//         const {store} = this.context;
//
//
//         return (
//             <Link active={active}
//                   onClick={ (e) => {
//                       e.preventDefault()
//                       store.dispatch({
//                           type: 'SET_VISIBILITY_FILTER',
//                           filter
//                       })
//                   }}
//             >
//                 {
//                     props.children
//                 }
//             </Link>
//         )
//     }
//
// }
// FilterLink.contextTypes = {
//     store: React.PropTypes.object
// }


export default FilterLink;