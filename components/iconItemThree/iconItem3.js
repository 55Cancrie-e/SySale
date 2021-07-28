import React, {useState} from 'react';
import './style3.css'


function IconItemsThree() {
    let[counter, setCounter] = useState(0);
    const [checked, setChecked] = useState(true);
    return (
        <div className="container">
            <div className="toper">
            <div  className="iconNew">NEW</div>
            <img src="/img/Vector.svg" className="icon1" alt="Error" onClick={e => e.currentTarget.src = "/img/Vector-2.svg"}></img>
            </div>
            <img src="/img/image23-4.svg" className="img1" alt="Error" onMouseMove={e => e.currentTarget.src = "/img/image24-2.svg"} onMouseLeave={e => e.currentTarget.src = "/img/image23-4.svg"}></img>
            <h2 className="shampoo">Шампунь</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="dropdown">
            <div class="ui compact menu" style={{borderRadius: '30px', height: '30px', backgroundColor: 'white'}}>
                <div class="ui simple dropdown item" style={{width: '250px'}}>
                     Цвет
                 <i class="dropdown icon"></i>
                <div class="menu">
                 <div class="item">Желтый</div>
                    <div class="item">Красный</div>
                <div class="item">Зеленый</div>
                </div>
                </div>
                </div>
                <p className="value">200 грн</p>
            </div>
            <div className="checkboxesOne">
            <div class="element-wrapperOne">
            <input type="checkbox" class="checkboxOne" id="checkbox7" checked={checked} onChange={() => setChecked(!checked)} />
            <label for="checkbox7">100 мл</label>
        </div>
        <div class="element-wrapperOne">
         <input type="checkbox" class="checkboxOne" id="checkbox8"  />
            <label for="checkbox8">200мл</label>
            </div>
            <div class="element-wrapperOne">
            <input type="checkbox" class="checkboxOne" id="checkbox9" />
            <label for="checkbox9">300 мл</label>
        </div>
            </div>
            <div className="footer">
            <div className="counter">
            <button onClick={() => setCounter(counter + 1)} className="leftButtom">+</button>
            <div className="number1">{counter + 1}</div>
            <button onClick={() => setCounter(counter < 1 ? !counter === 0 : counter - 1)} className="rightButtom">-</button>
            </div>
            <button class="ui yellow button" style={{width: '302px', height: '39px', borderRadius: '30px', fontStyle: 'normal', fontWeight: '600'}}>Купить</button>
            </div>
        </div>
    )
}



export default IconItemsThree;
