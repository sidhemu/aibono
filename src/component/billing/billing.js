import React,  { Component } from 'react';
import './Billing.css';

class Billing extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'Sid',
      data : [
        {
          'id': 'order1',
          'name' : 'Broccoli',
          'weight' : 4.5,
          'price' : 90
        },
        {
          'id': 'order2',
          'name' : 'Iceberg',
          'weight' : 6,
          'price' : 55
        }
      ],
      total : 0,
      itemName: '',
      itemQty: 0,
      itemPrice: 0
    }
  }

  componentWillMount(){
  
  }

  componentDidMount(){
      this.grandTotal();
  }

  addNewRow(){
    const newDataObj = {
      'id': '',
      'name' : this.state.itemName,
      'weight' : this.state.itemQty,
      'price' : this.state.itemPrice
    };

    const newData =  [...this.state.data, newDataObj];
    this.setState({
      data : newData,
      total: this.state.total + (newDataObj.weight * newDataObj.price)
    });

    this.setState({itemName : '', itemQty : 0, itemPrice :0})
  }

   createRows(){
    return this.state.data.map((elem, index) => {
      return (
        <tr key={index}>
            <td>{elem.name}</td>
            <td>{elem.weight} kg</td>
            <td>{elem.price} Rs per Kg</td>

        </tr>
      )
    });
  }

  grandTotal(){
    let gTotal = 0;
    this.state.data.map(elem => {
        gTotal += elem.weight*elem.price;
    });

    this.setState(() => {
        return {
          total : gTotal
        }
    });
  }


  handleChangeName(e) {
    this.setState({ itemName: e.target.value });
  }

  handleChangeQty(e) {
    this.setState({ itemQty: e.target.value });
  }

  handleChangePrice(e) {
    this.setState({ itemPrice: e.target.value });
  }


  render() {

    return (
      <div className="billing-app">
        <table>
          <thead>
              <tr>
                <th>
                    <p>Customer Name</p>
                </th>
                <th colSpan="2">
                    <p>{this.state.name}</p>
                </th>

              </tr>
          </thead>
          <tbody>
            {
              this.createRows()
            }
            <tr>
              <td>
                <input type="text" placeholder="Item Name" value={this.state.itemName} onChange={this.handleChangeName.bind(this)} />
              </td>
              <td>
                <input type="number" value={this.state.itemQty} onChange={this.handleChangeQty.bind(this)} /> Kg
              </td>
              <td>
                <input type="number" value={this.state.itemPrice} onChange={this.handleChangePrice.bind(this)} /> Rs per Kg
              </td>
              <td className="add-btn">
              <button  onClick={this.addNewRow.bind(this)} disabled={this.state.itemName===''||this.state.itemQty===0||this.state.itemPrice===0}>
              <span className="checkmark">
                <div className="checkmark_circle"></div>
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
              </button>
              </td>
            </tr>
            <tr>
              <td>
                Grand Total
              </td>
              <td></td>
              <td>{this.state.total} Rs</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Billing;
