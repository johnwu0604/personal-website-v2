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
                            { this.state.id != 0 ? <button onClick={this.handleClickLeft} type="button" class="btn btn-outline-secondary btn-space">{this.state.left}</button> : null }
                            { this.state.id != recipes.length - 1 ? <button onClick={this.handleClickRight} type="button" class="btn btn-outline-secondary btn-space">{this.state.right}</button> : null }
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
        Then once you learn enough recipes, you learn to creatively mix and match different snippets to create a unique piece of software. \
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
        'title': 'Dak Galbi (Spicy Korean Chicken)',
        'desc': 'This is one of my favourite recipes and can even be grilled over the BBQ. Begin by cutting chicken thighs into \
        small bite size pieces. Then add minced garlic, chopped onions, gochujang (red chili paste), yellow curry powder, rice wine, \
        soya sauce, salt, and pepper to the chicken. Mix everything together. Marinate for a few hours and then grill on a pan. Once \
        the chicken is cooked, add grated cheese and diced green onion to the top. Serve with kimchi and rice of course!',
        'left': '< Intro',
        'right': 'Next Recipe >',
        'img' : 'src/static/img/dak.jpg'
    },
    {
        'id': 2,
        'title': 'Eggplant and Tofu Hotpot',
        'desc': 'This recipe might not look so good in the picture, but I promise you it is amazing. Start by cutting egg tofu into \
        1 inch thick slices. Light fry them on a pan and set aside. Then fry together eggplant and ground pork. Add soya sauce, oyster sauce, \
        sugar, spicy sezchuan sauce, and chilli oil. Also add the egg tofu and mix everything together. Disolve corn starch in cold water and mix into \
        dish to thicken sauce. Serve with rice!',
        'left': '< Previous Recipe',
        'right': 'Next Recipe >',
        'img' : 'src/static/img/hotpot.jpg'
    },
    {
        'id': 3,
        'title': 'Pad Kaprow (Thai Basil Pork)',
        'desc': 'Although one of the most popular authentic Thai dishes, it is very hard to find in North American Thai resturants. \
        Luckily, it is actually really easy to make. Fry together ground pork, chopped up thai chillis, minced garlic, fish sauce, and oyster sauce. \
        Once fully cooked, add fresh thai basil and mix together. Serve with a fried egg and rice.',
        'left': '< Previous Recipe',
        'right': 'Next Recipe >',
        'img' : 'src/static/img/thai.jpg'
    },
    {
        'id': 4,
        'title': 'Sezchuan Chicken Stew',
        'desc': 'This dish is soo good that I have forgotten to take a photo everytime I made this dish. Start by bringing \
        a pot of water to a boil with spicy sezchuan sauce, chilli oil, sesame oil, chicken stock, salt, and pepper. \
        Then cut chicken thighs, nappa cabbage, and onion into bite size pieces and add it to the soup. Slow cook it for about \
        20 minutes and then serve it with rice.',
        'left': '< Previous Recipe',
        'right': 'Next Recipe >',
        'img' : 'src/static/img/soup.png'
    }
]

export default Recipes;