import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div class="header">
            <div class="container">
                <h1>JOHN WU</h1>
                <p>I LIKE OUTDOOR ADVENTURES, SPICY FOOD, AND CREATING COOL SHIT.</p>
                <hr></hr>
                <ul>
                    <li><a href="https://www.linkedin.com/in/john-wu-3b262bb2/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/johnwu10" target="_blank"><i class="fa fa-github"></i></a></li>
                    <li><a href="https://www.facebook.com/johnwu10" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="https://medium.com/@johnwu0604" target="_blank"><i class="fa fa-medium"></i></a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Header;
