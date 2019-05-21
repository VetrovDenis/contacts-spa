import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css';

class Pagination extends React.Component {
    render() {
        const { current_page, maximum_page } = this.props
        return (
            <div className="Pagination">
                <NavLink
                    className="PreviousButton"
                    style={{
                        visibility: current_page > 1 ? "visible" : "hidden"
                    }}
                    to={`/?page=${current_page - 1}`}
                >
                    <p>{"Previous"}</p>
                </NavLink>
                <p>Current page is: {current_page}</p>
                <NavLink
                    className="NextButton"
                    style={{
                        visibility: current_page < maximum_page ? "visible" : "hidden"
                    }}
                    to={`/?page=${current_page + 1}`}
                >
                    <p>{"Next"}</p>
                </NavLink>
            </div>
        );
    }
}
export default Pagination
