import React, { Component } from 'react';

class Summ extends Component {

  countSumm = (type) => {
    const counted = this.props.items.reduce((acc, item) => {
      const value = type === 'portion' ? item[type] : item[type] / 100 * item.portion;
      const summ = acc + value;
      return summ;
    }, 0);
    return Number((counted).toFixed(1));
  }

  countTotal = () => {
    const total = this.countSumm('fat') + this.countSumm('carbs') + this.countSumm('prots');
    return total;
  }

  countPercent = (type) => {
    const summType = this.countSumm(type);
    const total = this.countTotal();
    if (total === 0) return 0;
    const percent = Number((summType / total * 100).toFixed(1));
    return percent;
  }

  render() {
    return (
      <div>
        <div className="summ">
          <div className="colwide">Summ:</div>
          <div className="col">{this.countSumm('fat')}</div>
          <div className="col">{this.countSumm('carbs')}</div>
          <div className="col">{this.countSumm('prots')}</div>
          <div className="col">{this.countSumm('portion')}</div>
          <div className="col"/>
        </div>
        <div className="percent">
          <div className="colwide"/>
          <div className="col">{this.countPercent('fat')}%</div>
          <div className="col">{this.countPercent('carbs')}%</div>
          <div className="col">{this.countPercent('prots')}%</div>
          <div className="col"/>
          <div className="col"/>
        </div>
      </div>
    );
  }
}

export default Summ;
