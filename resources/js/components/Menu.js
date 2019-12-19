import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="ui top borderless menu">
                <div className="ui text container">
                    <a class="item">Features</a>
                    <a class="item">Testimonials</a>
                    <a class="item">Sign-in</a>
                </div>
            </div>
        );
    }
}

export default Menu;