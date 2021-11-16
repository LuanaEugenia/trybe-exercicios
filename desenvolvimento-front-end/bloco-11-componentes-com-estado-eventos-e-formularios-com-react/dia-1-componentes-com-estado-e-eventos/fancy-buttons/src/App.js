import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      buttons: [
        {label: 'Button-1', hendler: this.myButton},
        {label: 'Button-2', hendler: this.myButton1},
        {label: 'Button-3', hendler: this.myButton2}
      ],
    }
  }

  myButton() {
    console.log('Clicou');
  }
  
  myButton1() {
    console.log('Clicou aquii');
  }
  
  myButton2() {
    console.log('Aeeee');
  }

  render() {
    const { buttons } = this.state;

    return (
      <div>
        {
          buttons.map((button, i) => <button key={ i } onClick={button.hendler}>{button.label}</button>)
        }
      </div>
    );

  }
}

export default App;
