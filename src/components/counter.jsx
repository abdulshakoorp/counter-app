import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
      </div>
    );
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h4>Zero</h4> : <h4>{count}</h4>;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <span>There are no tags!</span>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
