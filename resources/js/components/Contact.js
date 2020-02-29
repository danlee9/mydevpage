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
            message: '',
            msgSending: false,
            showFeedback: false,
            msgSent: false
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
        this.setState({ msgSending: true });
        const { name, email, message } = this.state;
        const data = { name, email, message };
        const res = await axios.post('message', data);
        console.log(res);
        if (res.data.success) {
            console.log('success');
            this.setState({ msgSending: false, showFeedback: true, msgSent: true });
        } else {
            console.log('fail')
            this.setState({ msgSending: false, showFeedback: true, msgSent: false });
        }
        
    }

    hideFeedback = () => {
        this.setState({ showFeedback: false });
    }

    render() {
        const { name, email, message, msgSending, showFeedback, msgSent } = this.state;
        const color = msgSent ? 'white' : 'red';
        const display = showFeedback ? 'inline-block' : 'none';
        return (
            <Transition visible={this.state.loaded} animation='drop' duration={500}>
                <div className="ui center aligned container">
                    <h1 style={{color: 'dodgerblue'}}>Contact</h1>
                    <div className="ui center aligned grid">
                        <div className="row" style={{fontSize: '16px', marginBottom: 0, paddingBottom: 0}}>
                            <div className="column">
                                Get in touch by sending an email to <a href="mailto: contact@danlee.dev">contact@danlee.dev</a>
                            </div>
                        </div>
                        <div className="row" style={{fontSize: '16px', marginTop: 0, paddingTop: 0}}>
                            <div className="column">
                                Or shoot me a message with your contact information using the form below!
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
                                        <button className={`ui primary button ${msgSending ? 'loading' : ''}`} type="submit" onClick={this.submit}><i className="paper plane icon"></i> Send</button>  
                                        <span style={{color, display, marginLeft: '5px'}} className={`feedback ${showFeedback ? 'show' : ''}`}>{msgSent ? 'Message Sent!' : 'Failed to send msg...'} <i className="close icon" style={{cursor: 'pointer'}} onClick={this.hideFeedback}></i></span>
                                    </form>
                                </div>
                            </div>
                        </Transition>
                        {/* <Transition visible={showFeedback} animation='fade' duration={300}>
                            <div className="four wide column">
                                <div className="wrapper-div-that-disappears">
                                    <div className={`ui ${msgSent ? 'positive' : 'negative'} message`}>
                                        <i className="close icon" onClick={this.hideFeedback}></i>
                                        <div className="header">
                                            {msgSent ? 'Message Sent!' : 'Failed to send msg...'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition> */}
                    </div>
                </div>
            </Transition>
        );
    }
}

export default Contact;