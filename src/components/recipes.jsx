import React from 'react';

class Recipes extends React.Component {
  
    constructor() {
        super()
        this.state = recipes[0]
        this.handleClickRight = this.handleClickRight.bind(this)
        this.handleClickLeft = this.handleClickLeft.bind(this)
    }

    handleClickRight() {
        this.setState(recipes[this.state.id+1])
    }

    handleClickLeft() {
        this.setState(recipes[this.state.id-1])
    }

    render() {
        return (
            <div class="recipes">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <hr></hr>
                            <h1>{this.state.title}</h1>
                            <p>{this.state.desc}</p>
                            { this.state.id != 0 ? <button onClick={this.handleClickLeft} type="button" class="btn btn-outline-secondary">{this.state.left}</button> : null }
                            { this.state.id != recipes.length - 1 ? <button onClick={this.handleClickRight} type="button" class="btn btn-outline-secondary">{this.state.right}</button> : null }
                            {/* <button onClick={this.handleClickLeft} type="button" class="btn btn-outline-secondary">{this.state.left}</button>
                            <button onClick={this.handleClickRight} type="button" class="btn btn-outline-secondary">{this.state.right}</button> */}
                        </div>
                        <div class="col-lg-6">
                            <div style={{backgroundImage: 'url('+ this.state.img +')'}} class="img-square center-block"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

var createNavButtons = () => {
    let buttons = []
    if (this.state.id != 0) {
        buttons.push(<button onClick={this.handleClickLeft} type="button" class="btn btn-outline-secondary">{this.state.left}</button>)
    }
    if (this.state.id != recipes.length-1) {
        buttons.push(<button onClick={this.handleClickRight} type="button" class="btn btn-outline-secondary">{this.state.right}</button>)
    }
    return buttons;
}  

var recipes = [
    {
        'id': 0,
        'title': 'My Recipes',
        'desc': 'When you first learn to program, you are told that running a piece of code is just like following a recipe. \
        Then once learn enough recipes, you learn to creatively mix and match different snippets to create a unique piece of software. \
        I love cooking almost as much as I love coding because of their direct correlation. The following section includes the recipes for some of \
        my favourite (spicy) dishes which I have came up with. However, I believe that every recipe should have their own personal touch to it, \
        so I will only list the ingredients and approximate steps. Just like in programming, it will be up to you to take these \
        recipes and mix together the ingredients in whichever creative way you want, in order to form your own unique dish!',
        'left': '',
        'right': 'See First Recipe >',
        'img' : 'src/static/img/bbq.jpg'
    },
    {
        'id': 1,
        'title': 'Dak Galbi (Korean Spicy Chicken)',
        'desc': 'Dak Galbi Recipe goes here',
        'left': '< See Previous Recipe',
        'right': 'See Next Recipe >',
        'img' : 'src/static/img/sf.jpg'
    },
    {
        'id': 2,
        'title': 'Sezchuan Chicken Stew',
        'desc': 'Chicken Stew Recipe goes here',
        'left': '< See Previous Recipe',
        'right': '',
        'img' : 'src/static/img/hike.jpg'
    }
]

export default Recipes;