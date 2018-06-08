import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div class="header">
            <div class="container">
                <h2>JOHN WU</h2>
                <p>I LIKE OUTDOOR ADVENTURES, SPICY FOOD, AND CREATING COOL SHIT.</p>
                <hr></hr>
                <ul>
                    <li><i class="fa fa-linkedin"></i></li>
                    <li><i class="fa fa-facebook-square"></i></li>
                    <li><i class="fa fa-medium"></i></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Header;
