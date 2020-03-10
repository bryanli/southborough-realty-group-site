import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function imageSrcFormatter(cell, row) {
  var pic= "images/properties/" + cell;
  return (
    <div className="property-table-pic">
      <img src={pic} alt={row.address} />
    </div>
  );
}

class Rentals extends Component {


  render() {
    const columns = [{
      dataField: 'image',
      text: 'Property',
      align: 'center',
      formatter: imageSrcFormatter,
      headerStyle: (colum, colIndex) => {
        return { width: '350px', textAlign: 'center' };
        }
      }, {
      dataField: 'address',
      text: 'Address',
      align: 'center',
      style: {verticalAlign: 'middle'},
      headerStyle: (colum, colIndex) => {
        return { width: '350px', textAlign: 'center' };
        }
      }, {
      dataField: 'bbs',
      text: 'Bed/Bath SqFt',
      align: 'center',
      style: {verticalAlign: 'middle'},
      headerStyle: (colum, colIndex) => {
        return { textAlign: 'center' };
        }
      }, {
      dataField: 'availableDate',
      text: 'Available Date',
      align: 'center',
      style: {verticalAlign: 'middle'},
      headerStyle: (colum, colIndex) => {
        return { textAlign: 'center' };
        }
      }, {
      dataField: 'rent',
      text: 'Monthly Rent',
      align: 'center',
      style: {verticalAlign: 'middle'},
      headerStyle: (colum, colIndex) => {
        return { textAlign: 'center' };
        }

    }];

    var properties = []

    if(this.props.data){
      properties = this.props.data.properties;
    }

    return (
      <section id="rentals">
        <h1>A List of our available or upcoming rental properties</h1>
        <div id="rentals-table">
          <BootstrapTable keyField='address' 
           data={ properties }
           columns={ columns }
           bordered={ false }
           striped
           pagination={ paginationFactory({showTotal: true,
                                          sizePerPageList: [
                                              {text:'3', value:3},
                                              {text:'5', value:5},
                                              {text:'10', value:10}]})} />
        </div>
      </section>
    );
  }
}

export default Rentals;
