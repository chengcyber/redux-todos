import React from 'react';
import Link from '../components/Link.js'

class FilterLink extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe( () => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render () {

        const props = this.props
        const { store } = this.context;

        const filter = props.filter
        const currentFilter = store.getState().visibilityFilter
        const active = !!(currentFilter === filter)

        return (
            <Link active={active}
                  onClick ={ (e) => {
                      e.preventDefault()
                      store.dispatch({
                          type: 'SET_VISIBILITY_FILTER',
                          filter
                      })
                  }}
            >{props.children}</Link>
        )
    }

}
FilterLink.contextTypes = {
    store: React.PropTypes.object
}


export default FilterLink;