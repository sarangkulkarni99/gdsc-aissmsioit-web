import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Team.css";

const Team = () => {
  return (
    <>
      <div class="container">
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card">
        <div class="blue-card-background">
          <img src="./images/profile.jpg" class="card-image"/>
        </div>
        <div class="blue-card-info">
          <h3>Lorem Ipsum</h3>
          <br/>
          <h5>Lorem ipsum dolor sit</h5>
          <p>Lorem ipsum | Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</p>
        </div>
        <div class="card-social-icons">
          <FontAwesomeIcon icon={['fab', 'apple']}/>
          <i class="fab"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="red-card-background">
          <img src="./images/profile.jpg" class="card-image"/>
        </div>
        <div class="red-card-info">
          <h3>Lorem Ipsum</h3>
          <br/>
          <h5>Lorem ipsum dolor sit</h5>
          <p>Lorem ipsum | Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</p>
        </div>
        <div class="card-social-icons">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="yellow-card-background">
          <img src="./images/profile.jpg" class="card-image"/>
        </div>
        <div class="yellow-card-info">
          <h3>Lorem Ipsum</h3>
          <br/>
          <h5>Lorem ipsum dolor sit</h5>
          <p>Lorem ipsum | Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</p>
        </div>
        <div class="card-social-icons">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="green-card-background">
          <img src="./images/profile.jpg" class="card-image"/>
        </div>
        <div class="green-card-info">
          <h3>Lorem Ipsum</h3>
          <br/>
          <h5>Lorem ipsum dolor sit</h5>
          <p>Lorem ipsum | Lorem Ipsum | Lorem Ipsum | Lorem Ipsum</p>
        </div>
        <div class="card-social-icons">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Team;
