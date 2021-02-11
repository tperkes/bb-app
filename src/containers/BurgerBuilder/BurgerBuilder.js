import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxilary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.25,
    cheese: 0.5,
    bacon: 0.75,
    meat: 1.00
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalPrice: 2,
        purchasable: false
    }

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0); // for sum explanation, see 136 starting at 4:20
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }; //copied ingredients state in an immutable way 

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 //will return true if the ingredients state is = 0
        }

        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}/>

            </Aux>
        );
    }
}

export default BurgerBuilder; 