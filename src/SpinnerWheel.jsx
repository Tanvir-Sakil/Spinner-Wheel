import React, { Component } from 'react';
import './SpinnerWheel.css';

class SpinnerWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      winner: null,
      spinning: false,
      newEntry: '',
    };
  }

  addName = () => {
    const { names, newEntry } = this.state;
    if (newEntry) {
      this.setState({
        names: [...names, newEntry],
        newEntry: '',
      });
    }
  };

  spinWheel = () => {
    const { names } = this.state;
    if (names.length > 0) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const winner = names[randomIndex];
      this.spin();
      setTimeout(() => {
        this.setState({ winner, spinning: false });
      }, 2000);
    }
  };

  spin = () => {
    this.setState({ spinning: true });
  };

  renderSegments() {
    const { names } = this.state;
    return names.map((name, index) => (
      <div key={index} className="segment">
        {name}
      </div>
    ));
  }

  render() {
    const { newEntry, spinning, winner } = this.state;

    return (
      <>
      <section className='section-1'>
      <div className="segmented-spinner">
        <div className={`spinner ${spinning ? 'spinning' : ''}`}>
          {this.renderSegments()}
        </div>
        <div>
        <input
          type="text"
          value={newEntry}
          onChange={(e) => this.setState({ newEntry: e.target.value })}
          placeholder="Enter a name"
        />
        <button className= 'button-style' onClick={this.addName}>Add Name</button>
        </div>.
        </div>
        </section>
        <section className='section-2'>
        <button className='button-style' onClick={this.spinWheel} disabled={spinning || this.state.names.length === 0}>
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
        {winner && <div className="winner">Winner: {winner}</div>}
        </section>
      </>
    );
  }
}

export default SpinnerWheel;
