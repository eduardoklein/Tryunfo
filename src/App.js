import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    const Callback1 = () => 0;
    const Callback2 = () => 0;
    return (
      <div>
        <Form
          cardName=""
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
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
