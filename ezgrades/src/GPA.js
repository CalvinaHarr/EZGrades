import React from 'react';

function GPA_input() {
    return(
      <form>
        <label htmlFor="current_gpa">Current GPA:</label>
        <input type="text" id="current_gpa" name="current_gpa" />
      </form>
    );
}

export default GPA_input;