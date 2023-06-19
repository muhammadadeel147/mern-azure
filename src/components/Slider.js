import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 p-3" style={{height: "80vh"}}
          src="assets/img/slider/3.avif"
          alt="Ronaldo"
        />
        <Carousel.Caption>
          <h1 style={{color: "yellow"}}>New Year Sale 2023 </h1>
          <p>Purchase your Product Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 p-3"  style={{height: "80vh"}}
          src="assets/img/slider/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 style={{color: "Red"}}>New Year Sale 2023 </h1>
          <p>Purchase your Product Now</p>
        </Carousel.Caption>
      </Carousel.Item>
 
    </Carousel>
  );
}

export default UncontrolledExample;