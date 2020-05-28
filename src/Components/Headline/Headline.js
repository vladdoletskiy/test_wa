import React from 'react';
import "./headline.style.css";




const Headline  = () => {
  return (
    <div id="cont_head">
    <div id="headline">
        <h5 className="headline">Передовая IT-студия</h5>
              <h1 className="text">
                Мы создаем легкие решения
                <br />
                для самых сложных задач
              </h1>
              <button
              className="open_projects">
                  Наши проекты</button>
    </div>
    </div>
  )
};

export default Headline;
