import React from 'react';

const transformText = text => {
  const suffix = ['', 'K', 'M', 'B', 'T'];
  const length = text.toString().length;
  const suffixNumber = Math.floor(length / 3);
  const newNumber = (Number.parseInt(text) / Math.pow(100, suffixNumber))
    .toFixed(1)
    .toString();
  return `${newNumber.length > 4 ? newNumber.slice(0, 3) : newNumber}${
    suffix[suffixNumber]
  }`;
};

const evaluateText = text => {
  const Text = text;
  return typeof text === 'string' ? (
    text
  ) : typeof text === 'number' ? (
    transformText(text)
  ) : (
    <Text />
  );
};

export default ({ className, style, text, onClick }) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {evaluateText(text)}
    </div>
  );
};
