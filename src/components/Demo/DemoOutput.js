import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = ({ onDisplay: isPDisplayed }) => {
console.log("DemoOutput RUNNING")

  return (
    <MyParagraph>{isPDisplayed ? "This is new!" : ""}</MyParagraph>
    )
}

// export default DemoOutput
export default React.memo(DemoOutput)