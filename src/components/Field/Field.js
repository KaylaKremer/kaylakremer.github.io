import React from 'react';
import PropTypes from 'prop-types';
import styles from './field.module.scss';

const Field = ({ label }) => {
    return {
        /* <span class="input input--kozakura">
					<input class="input__field input__field--kozakura" type="text" id="input-7" />
					<label class="input__label input__label--kozakura" for="input-7">
						<span class="input__label-content input__label-content--kozakura" data-content="Name">Name</span>
					</label>
					<svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
						<path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
					</svg>
				</span> */
    };
};

Field.propTypes = {
    label: PropTypes.string
};

export default Field;
