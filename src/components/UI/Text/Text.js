import React from 'react';

const transformText = text => {
  const suffix = ['', 'K', 'M', 'B', 'T']
  const length = text.toString().length;
  const suffixNumber = Math.floor(length / 3);
  const newNumber = (Number.parseInt(text) / Math.pow(100, suffixNumber)).toFixed(1).toString()
  return `${newNumber.length > 4 ? newNumber.slice(0, 3) : newNumber }${suffix[suffixNumber]}`
}


const evaluateText = text => {
  return typeof text === 'string' ? text : transformText(text)

}

export default ({ className, style, text }) => {

  return (
    <p className={className} style={style}>
      {evaluateText(text)}
    </p>
  );
};
