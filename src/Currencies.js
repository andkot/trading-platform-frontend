import React, {Component} from 'react';

export default class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://0.0.0.0:8000/api/v1/currencies/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState(
                        {
                            isLoaded: true,
                            error
                        });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded){
            return <p> Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item=>(
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )
        }
    }

}