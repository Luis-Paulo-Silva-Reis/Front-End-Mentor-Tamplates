import React from "react";
import styled from "styled-components";
import lp from "../img/lp.jpg";

const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:600px;;
  background-color: aquamarine;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 333px;
  height: 100px;
  background-color: aqua;
  border-top-left-radius:15px;
  border-top-right-radius:15px;

  img {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    border-radius: 50%;
  }
`;

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 333px;
  height: 300px;
  background-color:white;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;

  p{
      font-weight:bold;
  }

  span{
      color:hsl(0, 0%, 59%);
      font-weight:bold;
  }
`;

const Div3 = styled.div`
 
  width:95%;
  justify-content:flex-end;
 

  section {
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-around;
    
    
  }

  
`;

export default function profile() {
  return (
    <Profile>
      <div>
        <Div1>
          <img src={lp} alt="" />
        </Div1>
        <Div2>
          <div>
            <p>Luis Paulo <span>25</span></p>
            <span>Minas</span>
          </div>

          <Div3>
            <section>
              <div>
                <h3> 80K</h3>
                <span>Followers</span>
              </div>

              <div>
                <h3>803K</h3>
                <span>Likes</span>
              </div>

              <div>
                <h3>1.4K</h3>
                <span>Photos</span>
              </div>
            </section>
          </Div3>
        </Div2>
      </div>
    </Profile>
  );
}
