import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <label>
          <form>
            <input data-testid="name-input" />
            <input data-testid="description-input" />
            <input data-testid="attr1-input" />
            <input data-testid="attr2-input" />
            <input data-testid="attr3-input" />
            <input data-testid="image-input" />
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <input type="checkbox" data-testid="trunfo-input" />
            <button data-testid="save-button">Salvar</button>
          </form>
        </label>
      </div>
    );
  }
}

export default Form;
