import React from "react";
import "./styles.css";
import "bulma/css/bulma.min.css";
import axios from 'axios'

export default class App extends React.Component {
    state = {
        inventory:[]
    }

    renderList() {
        let final = [];
        for (let product of this.state.inventory) {
            final.push(<li class="list-item">
                {product.name} (${product.cost})
            </li>);

        }
        return final;
    }

    // mark the function as asynchronous
    doLoadData = async () => {
        let response = await axios.get('shop_inventory.json');
        let inventory = response.data;
        this.setState({
            inventory:inventory
        })
        
    }


    getRandomQuote = async () => {
        let response = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
        console.log(response);
        let quote = response.data;
        console.log(quote);
        // let author = 
    }

    render() {
          return (
            <div className="container is-fluid">
                <h1 className="title">Our Products</h1>
                <button onClick={this.doLoadData}>Load data</button>
                <button onClick={this.getRandomQuote}>Load data</button>
                <ul className="list">
                    {this.renderList()}
                </ul>
            </div>
        );
    }

}
