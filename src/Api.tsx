import React from "react";

interface Iprop {}
interface IState {
    items: Array<any>;
    isLoaded: boolean;
}
class Api extends React.Component<Iprop, IState> {
  constructor(props: Iprop) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
      
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>loading ...............</div>;
    }
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>Name:{item.name}  &  Email {item.email}</li>
        ))}
        ;
      </ul>
    );
    
    
  }
}
export default Api;
