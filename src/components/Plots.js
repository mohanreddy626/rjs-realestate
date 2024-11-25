import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image1 from "../Images/HomeDesimgs/buyhome.img.jpg";
import image2 from "../Images/HomeDesimgs/sellhome.img.jpg";
import image3 from "../Images/HomeDesimgs/renthome.img.jpg";
import Header from "./Header";
import { Button, Container } from "react-bootstrap";
import Footer from "./Footer";

export default function Plots() {
  var abc = [
    {
      cname: "Card one",
      cdes: "This first card group form react bootstrap.. This first card group form react bootstrap..This first card group form react bootstrap..",
      imageUrl: image1,
    },
    {
      cname: "Card two",
      cdes: "This is second card group,This first card group form react bootstrap..",
      imageUrl: image2,
    },
    {
      cname: "Card three",
      cdes: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      imageUrl: image3,
    },
  ];
  return (
    <div>
      <Header />

      <div class=" bg-white mt-5 pb-3" style={{width:'100%'}}>
        <h2 class="text-center pt-4">Explore Premium Plots on our Site</h2>
        <p class="text-center">
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>
      <Container>
      <CardGroup className="row mx-auto my-5">
      {abc.map((value) => (
        <Card className="col-lg-6 col-md-4">
          <Card.Img
            variant="top"
            src={value.imageUrl}
            style={{ height: "150px", width: "270px" }}
          />
          <Card.Body>
            <Card.Title>{value.cname}</Card.Title>
            <Card.Text>{value.cdes}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */} <Button>Browse</Button>
          </Card.Footer>
         
        </Card>
      ))}
    </CardGroup>
      <CardGroup className="row mx-auto my-5">
      {abc.map((value) => (
        <Card className="col-lg-6 col-md-4">
          <Card.Img
            variant="top"
            src={value.imageUrl}
            style={{ height: "150px", width: "270px" }}
          />
          <Card.Body>
            <Card.Title>{value.cname}</Card.Title>
            <Card.Text>{value.cdes}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button>Browse</Button>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
      <CardGroup className="row mx-auto my-5">
      {abc.map((value) => (
        <Card className="col-lg-6 col-md-4">
          <Card.Img
            variant="top"
            src={value.imageUrl}
            style={{ height: "150px", width: "270px" }}
          />
          <Card.Body>
            <Card.Title>{value.cname}</Card.Title>
            <Card.Text>{value.cdes}</Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button>Browse</Button>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
    </Container>

    <div>
      <Footer />
    </div>
    </div>
  );
}
