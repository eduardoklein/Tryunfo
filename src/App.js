import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    const Callback1 = () => 0;
    const Callback2 = () => 0;
    return (
      <Form
        cardName="Coxinha"
        cardDescription=""
        cardAttr1={ 0 }
        cardAttr2={ 0 }
        cardAttr3={ 0 }
        cardImage=""
        cardRare=""
        cardTrunfo={ false }
        hasTrunfo={ false }
        isSaveButtonDisabled={ false }
        onInputChange={ Callback1 }
        onSaveButtonClick={ Callback2 }
      />
    );
  }
}

export default App;
