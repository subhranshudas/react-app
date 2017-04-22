import React from "react";

export default class Parent extends React.Component {
    constructor() {
        super();
        console.log("parent: constructor");
    }
    componentWillMount() {
        console.log("parent: componentWllMount");
    }
    componentDidMount() {
        console.log("parent: componentDidMount");
    }
    componentWillReceiveProps() {
        console.log("parent: componentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("parent: shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("parent: componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("parent: componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("parent: componentWillUnmount");
    }
    render() {
        console.log("parent: render");
        return (<p>parent component</p>);
    }
}
