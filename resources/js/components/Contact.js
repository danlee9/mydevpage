import React from 'react';
import { Transition } from "semantic-ui-react";
import { setAsyncTimeout } from "../utilities";
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            showForm: false,
            name: '',
            email: '',
            message: ''
        };
    } 

    componentDidMount() {
        if (!this.state.loaded) {
            setAsyncTimeout(() => {
                this.setState({
                    loaded: true
                });
            }, 100);

            setAsyncTimeout(() => {
                this.setState({
                    showForm: true
                });
            }, 600);
        }
    }

    onInputChange = e => {
        let { name, value } = e.target;
        this.setState({[name]: value});
    }

    submit = async e => {
        e.preventDefault();
        console.log('blah');
        const { name, email, message } = this.state;
        const data = { name, email, message };
        const res = await axios.post('message', data);
        console.log(res);
    }

    render() {
        const { name, email, message } = this.state;
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
                        <Transition visible={this.state.showForm} animation="vertical flip" duration={500}>
                            <div className="row">
                                <div className="eight wide left aligned column">
                                    <form className="ui form email-form">
                                        <div className="field">
                                            <input type="text" name="name" placeholder="Name" value={name} onChange={this.onInputChange}/>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="email" placeholder="Email" value={email} onChange={this.onInputChange}/>
                                        </div>
                                        <div className="field">
                                            <textarea name="message" id="" rows="10" placeholder="Message" value={message} onChange={this.onInputChange}></textarea>
                                        </div>
                                        <button className="ui primary button" type="submit" onClick={this.submit}><i className="paper plane icon"></i> Send</button>
                                    </form>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </Transition>
        );
    }
}

export default Contact;