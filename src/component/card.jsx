
import "../styles/card-style.css";



export const Card = ({card}) => {
  return (

          <label id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{card.total}</var>
                <h3>{card.description}</h3>
                <h4>{card.footer}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p>More Information</p>
              </div>
            </div>
          </label>
  );
};