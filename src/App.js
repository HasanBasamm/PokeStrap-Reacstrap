import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap'
import { Collapse } from 'reactstrap'
import { Nav } from 'reactstrap'
import { NavItem } from 'reactstrap'
import { NavLink } from 'reactstrap'
import { UncontrolledDropdown } from 'reactstrap'
import { DropdownToggle } from 'reactstrap'
import { DropdownMenu } from 'reactstrap'
import { DropdownItem } from 'reactstrap'
import { NavbarText } from 'reactstrap'
import { UncontrolledCarousel } from 'reactstrap';
import { CardGroup } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button } from 'reactstrap';
import { Progress } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar
        color="dark"
        container
        expand="md"
        fixed="top"
      >
        <NavbarBrand href="/">
          PokeStrap
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/components/">
              Imagens
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/HasanBasamm">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Cards
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Cards 2
                </DropdownItem>
                <DropdownItem>
                  Animação
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>

      <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: 'https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-56.jpg'
          },
          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: 'https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-55.jpg'
          },
          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: 'https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-53.jpg'
          }
        ]}
      />

      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
            Jornadas Pokémon
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Brasil
            </CardSubtitle>
            <CardText>
            Jornadas Pokémon | Prévia promove grande batalha no Torneio dos Mestres
            </CardText>
            <Button>
            Saber mais
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
            Campeonato Mundial
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Mundial
            </CardSubtitle>
            <CardText>
            Campeonato Mundial de Pokémon 2022 tem arte oficial revelada.
            </CardText>
            <Button>
            Saber mais
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
            Pokémon VGC
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Brasil
            </CardSubtitle>
            <CardText>
            Pokémon VGC: Brasileiros são vice-campeões de torneio nos EUA
            </CardText>
            <Button>
              Saber mais
            </Button>
          </CardBody>
        </Card>
      </CardGroup>

      <div>
        <Progress
          animated
          value={100}
        />
        <Progress
          animated
          color="success"
          value="100"
        />
        <Progress
          animated
          color="info"
          value={100}
        />
        <Progress
          animated
          color="warning"
          value={100}
        />
        <Progress
          animated
          color="danger"
          value="100"
        />
        <Progress multi>
          <Progress
            animated
            bar
            value="25"
          />
          <Progress
            animated
            bar
            color="success"
            value="25"
          />
          <Progress
            animated
            bar
            color="warning"
            value="25"
          />
          <Progress
            animated
            bar
            color="danger"
            value="25"
          />
        </Progress>
      </div>
    </div>
  );
}

export default App;
