import React from "react";
import { arrayElements } from "./fixtures";

class UniqueElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUniqueElements = this.handleUniqueElements.bind(this);
    this.formatOutput = this.formatOutput.bind(this);
    this.sortedOutput = this.sortedOutput.bind(this);
  }

  formatOutput(array) {
    return array.map(d => <span>{d + " "}</span>);
  }

  sortedOutput(array) {
    return array.sort((a, b) => a - b); // ascending order
  }

  handleUniqueElements(array, number) {
    switch (number) {
      case 1: // using indexOf method
        return this.formatOutput(array.filter((d, i, a) => a.indexOf(d) === i));

      case 2: //using Set class
        return this.formatOutput([...new Set(array)]);

      case 3: // simple comparing
        let uniqueArray = [];
        array.forEach(d =>
          uniqueArray.includes(d) ? null : uniqueArray.push(d)
        );
        return this.formatOutput(uniqueArray);

      case 4: // using an object (this return a sorted elements)
        let myObject = {};
        array.forEach(d =>
          myObject.hasOwnProperty(d)
            ? (myObject[d] = false)
            : (myObject[d] = true)
        );
        //final object has been prepared
        console.log(myObject);
        // we can even know which elements have been repeated
        let touchedElements = [],
          unTouchedElements = [];
        for (let key in myObject) {
          if (myObject.hasOwnProperty(key)) {
            if (myObject[key]) unTouchedElements.push(key);
            else touchedElements.push(key);
          }
        }

        // return this.formatOutput(touchedElements);
        // return this.formatOutput(unTouchedElements);
        return this.formatOutput(Object.keys(myObject));

      case 5: // sorting and splicing the data
        let sortedArray = this.sortedOutput(array);
        for (let i = 0; i < sortedArray.length; i++) {
          if (sortedArray[i] === sortedArray[i + 1]) {
            sortedArray.splice(i, 1);
            i--;
          }
        }
        return this.formatOutput(sortedArray);

      case 6: // O(n) complexity
        //(works for all)
        // let a1 = [5,6,0,4,9,2,3,5,0,3,4,1,5,4,9];
        // let a2 = [[2, 17], [2, 17], [2, 17], [1, 12], [5, 9], [1, 12], [6, 2], [1, 12]];
        // let a3 = ['Mike', 'Adam','Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];
        let t;
        return this.formatOutput(
          array.filter(((t = {}), e => !(t[e] = e in t)))
        );

      case 7: // using reduce method of js (very similar to other methods)
        return this.formatOutput(
          array.reduce((acc, inc) => {
            if (!acc.includes(inc)) {
              acc.push(inc);
            }
            return acc;
          }, [])
        );
    }
  }

  render() {
    return (
      <React.Fragment>
        <h4>Orginal Array</h4>
        {this.formatOutput(arrayElements)}
        <h4>Unique Elements</h4>
        {this.handleUniqueElements(arrayElements, 7)}
      </React.Fragment>
    );
  }
}

export default UniqueElements;
