import React from 'react'

export default function Highlight({ text = "", highlight = "" }) {
  /* Start handle search highlight */
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  /* End handle search highlight */

  /* Start handle hover */
  const handleHover = (i, part) => {
    console.log("i", i)
    // const startPos = text.indexOf(part)
    // console.log("POS", `${startPos} - ${startPos + highlight.length - 1}`)
    const res = getMultipleIndexOf(text, part);
    console.log("result", res)
  }
  /* End handle hover */

  /* Start handle search position */
  const getMultipleIndexOf = (text, highlight, acc = 0, result = []) => {
    const foundIndex = text.toLowerCase().indexOf(highlight.toLowerCase());
    if (foundIndex < 0) {
      return { result, acc }
    }
    return getMultipleIndexOf(
      text.slice(foundIndex + highlight.length),
      highlight,
      acc + foundIndex + highlight.length,
      [...result, acc + foundIndex]
    )
  }
   /* End handle search position */

  return (
    <span>
      {parts.filter(String).map((part, i) => {       
        return regex.test(part) ? (
          <mark key={i} onMouseOver={() => handleHover(i, part)}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
        
    </span>
  )
}
