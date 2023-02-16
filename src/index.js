import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AnimatedCursor from "react-animated-cursor"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
      <AnimatedCursor
          innerSize={8}
          outerSize={25}
          color='190, 252, 3'
          outerAlpha={0.3}
          hasBlendMode={true}
          outerStyle={{
              border: '2px solid #725b8a',
              mixBlendMode: 'exclusion'

          }}
          innerScale={0.7}
          outerScale={5}
          clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
          ]}
      />
  </React.StrictMode>
);
