import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            calculator: '',
            display: '0'
        }
    }

    onHandleClick = (event) => {
        const { value } = event.target;
        switch(value) {
            case "=": 
                this.setState({
                    display: eval(this.state.calculator)
                })
                break;
            case "+":
                this.setState({
                    calculator: this.state.calculator + "+",
                    display: "+"
                })
                break;
            case "-":
                this.setState({
                    calculator: this.state.calculator + "-",
                    display: "-"
                })
                break;
            case "*":
                this.setState({
                    calculator: this.state.calculator + "*",
                    display: "*"
                })
                break;
            case "/":
                this.setState({
                    calculator: this.state.calculator + "/",
                    display: "/"
                })
                break;
            case "AC":
                this.setState({
                    calculator: "",
                    display: "0"
                })
                break;
            default:
                this.setState({
                    calculator: this.state.calculator + value,
                    display: this.state.display + value,
                })
                break;

        }

    }

    render() {
        return (
            <div className="calculator">
                <div>
                    <div className="calc" id={1}>{this.state.calculator}</div>
                    <div className="display" id="b1">{this.state.display}</div>
                </div>
                <div className="button">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="clear" colSpan={3}>
                                    <input onClick={this.onHandleClick} name="AC" type="button" className="operator" value="AC"/>
                                </td>
                                <td className="divclasse">
                                    <input onClick={this.onHandleClick} name="/" type="button" className="operator" value="/"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="seven">
                                    <input onClick={this.onHandleClick} name="7" type="button" className="operator" value={7}/>
                                </td>
                                <td className="eight">
                                    <input onClick={this.onHandleClick} name="8" type="button" className="operator" value={8}/>
                                </td>
                                <td className="nine">
                                    <input onClick={this.onHandleClick} name="9" type="button" className="operator" value={9}/>
                                </td>
                                <td className="multiply">
                                    <input onClick={this.onHandleClick} name="*" type="button" className="operator" value="*"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="four">
                                    <input onClick={this.onHandleClick} name="4" type="button" className="operator" value={4}/>
                                </td>
                                <td className="five">
                                    <input onClick={this.onHandleClick} name="5" type="button" className="operator" value={5}/>
                                </td>
                                <td className="six">
                                    <input onClick={this.onHandleClick} name="6" type="button" className="operator" value={6}/>
                                </td>
                                <td className="subtract">
                                    <input onClick={this.onHandleClick} name="-" type="button" className="operator" value="-"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="one">
                                    <input onClick={this.onHandleClick} name="1" type="button" className="operator" value={1}/>
                                </td>
                                <td className="two">
                                    <input onClick={this.onHandleClick} name="2" type="button" className="operator" value={2}/>
                                </td>
                                <td className="three">
                                    <input onClick={this.onHandleClick} name="3" type="button" className="operator" value={3}/>
                                </td>
                                <td className="add">
                                    <input onClick={this.onHandleClick} name="+" type="button" className="operator" value="+"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="zero" colSpan={3}>
                                    <input onClick={this.onHandleClick} name="0" type="button" className="operator" value={0}/>
                                </td>
                                <td className="equals">
                                    <input onClick={this.onHandleClick} name="=" type="button" className="operation" value="="/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
