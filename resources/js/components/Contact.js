import React from 'react';
import { Transition } from "semantic-ui-react";
import { setAsyncTimeout } from "../utilities";
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        };
    } 

    componentDidMount() {
        if (!this.state.loaded) {
            setAsyncTimeout(() => {
                this.setState({
                    loaded: true
                });
            }, 100);
        }
    }

    render() {
        return (
            <Transition visible={this.state.loaded} animation='drop' duration={500}>
                <div className="ui center aligned container">
                    <h1 style={{color: 'dodgerblue'}}>Contact</h1>
                    <div className="ui center aligned grid">
                        <div className="row" style={{fontSize: '16px', marginBottom: 0, paddingBottom: 0}}>
                            <div className="column">
                                Get in touch by sending an email to <a href="mailto: dan.dh.lee@gmail.com">dan.dh.lee@gmail.com</a>
                            </div>
                        </div>
                        <div className="row" style={{fontSize: '16px', marginTop: 0, paddingTop: 0}}>
                            <div className="column">
                                Or shoot me a message using the form below!
                            </div>
                        </div>
                        <div className="row">
                            <div className="eight wide left aligned column">
                                <form className="ui form email-form">
                                    <div className="field">
                                        <input type="text" name="name" placeholder="Name" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="email" placeholder="Email" />
                                    </div>
                                    <div className="field">
                                        <textarea name="message" id="" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <button className="ui primary button" type="submit"><i className="paper plane icon"></i> Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        );
    }
}

export default Contact;