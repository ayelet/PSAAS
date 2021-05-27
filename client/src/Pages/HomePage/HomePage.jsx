import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./HomePage.css";
// import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const HomePage = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    // config: { mass: 5, tension: 350, friction: 40 },
    config: { mass: 5, tension: 500, friction: 20 },
  }));

  return (
    <Jumbotron className="hero flex-row" fluid>
      {/* <div className="home-wrapper"> */}
      {/* <HomeCarousel /> */}
      <Link to="/Providers" style={{ textDecoration: "none" }}>
        <animated.div
          className="button-spring"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Button variant="info">I'm a pet owner</Button>{" "}
        </animated.div>
      </Link>
      <Link to="/RegisterProvider" style={{ textDecoration: "none" }}>
        <animated.div
          className="button-spring"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Button variant="info">I'm a pet sitter</Button>
        </animated.div>
      </Link>
      {/* </div> */}
    </Jumbotron>
  );
};

export default HomePage;
