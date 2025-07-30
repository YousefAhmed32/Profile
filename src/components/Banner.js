import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img-me1-1.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack Developer", "MERN Stack Developer", "Frontend Specialist"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
  <h1>{`Hi! I'm Yousef`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "MERN Stack Developer", "Frontend Specialist" ]'><span className="wrap">{text}</span></span></h1>
                            <p>
I'm a passionate Full Stack Developer with hands-on experience building modern web applications using the MERN stack (MongoDB, Express, React, Node.js). I love turning ideas into real, scalable solutions, and I've developed multiple projects including a complete e-commerce platform, weather apps, dashboards, and more. I'm always learning, improving, and pushing the boundaries of what I can build.
</p> 
                  <div className="d-flex gap-3 mt-3">
                    {/* <button onClick={() => console.log('connect')}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button> */}
                    <a
                      href="https://drive.google.com/file/d/1qwvCyzXiU49Z9yKW7qgpHkK8mzXfl6yi/view"
                      target="_blank"
                      className="btn-cv"
                    >
                      Show My CV
                    </a>

                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
