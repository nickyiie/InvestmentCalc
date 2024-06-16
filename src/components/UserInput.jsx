import { useState } from "react";

export default function UserInput({userInput, onChange}) {
  



  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) => {
                onChange("initialInvestment", event.target.value);
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Annual Investment
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) => {
                onChange("annualInvestment", event.target.value);
              }}
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            Expected Return
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) => {
                onChange("expectedReturn", event.target.value);
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Duration
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => {
                onChange("duration", event.target.value);
              }}
            />
          </label>
        </p>
      </div>
    </section>
  );
}
