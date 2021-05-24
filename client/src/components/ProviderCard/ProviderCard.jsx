import "./ProviderCard.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import providers1 from "./provider.json";
// import { store } from "../../helpers/store";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions";

import Loader from "../Loader/Loader";

ProviderCard.propTypes = {
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  id: PropTypes.number,
  //    index: PropTypes.number,
  //     details: PropTypes.object.isRequired,
  //     x: PropTypes.number.isRequired,
  //     y: PropTypes.number.isRequired,
  favorite: PropTypes.bool,
};

export function ProviderCard(props) {
  const [providers, setProviders] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [displayFiltered, setDisplayFiltered] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [loading, setLoading] = useState(true);
  // const [isFav, setIsFav] = useState(false);
  const url = "/api/providers";

  useEffect(() => {
    // effect
    try {
      console.log("api request ", url);
      axios.get(url).then(function (response) {
        console.log("fetching from api: ", url, response);
        setProviders(response.data);
        // console.log(providers);
      });
      setLoading(false);
    } catch (err) {
      console.log("Error in fetching data from server ", err);
    }
    return () => {
      // cleanup
    };
    //eslint disable
  }, []);

  //////////////////////
  useEffect(() => {
    const tempList = [...providers];

    if (displayFiltered) {
      let minPrice = 0;
      let maxPrice = 50;
      let filteredList = tempList.filter(
        (item) => item.price <= maxPrice && item.price >= minPrice
      );
      setFilteredList(filteredList);
    }
  }, [displayFiltered, filteredList]);

  // const onSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  const onFilterByPrice = (min, max) => {
    setMinPrice = min;
    setMaxPrice = max;
  };
  /////////////////////

  // const toggleFavorite = (provider) =>
  //   dispatch({
  //     type: "ADD_FAV",
  //     payload: provider,
  //   });

  // const toggleFavorite = (provider) => {
  //   console.log("toggle fav");
  //   // setIsFav(!isFav);
  //   favorite();
  // };

  const favorite = (provider) => {
    // -   this.setState({ favourite: !this.state.favourite });
    // const { favorite, removeFavorite, addFavorite } = props;
    // console.log(favorite);
    if (props.favorite) {
      removeFavorite(provider._id);
    } else {
      addFavorite(provider._id);
    }
  };

  const renderListItem = (provider) => {
    console.log("card of provider: ", provider);
    return (
      <Card
        style={{ width: "24rem" }}
        border="info"
        className="mt-5 ml-2 col-xs-3 text-center"
      >
        <Card.Img variant="top" src={provider.images[0].imageUrl} />
        <Card.Body>
          <Card.Title>
            {provider.details.first_name + " " + provider.details.last_name}
            <button
              onClick={() => favorite(provider)}
              type="button"
              className="fav-btn"
            >
              {props.favorite ? (
                <FaRegHeart className="fa-heart" />
              ) : (
                <FaHeart className="fa-heart" />
              )}
            </button>
          </Card.Title>
          {/*  <Card.Subtitle>
            {provider.serviceTypes.map((service) => service.serviceType + " ")}
          </Card.Subtitle> */}
          <Card.Text>{provider.address.city}</Card.Text>
          <Link to={"/Provider/" + provider._id} provider={provider}>
            <Button variant="info" className="text-center">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };

  const { favorites } = props;
  return (
    <Container>
      <Row className="text-center">
        {loading ? (
          <Loader />
        ) : (
          providers.map((provider) => renderListItem(provider))
        )}
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (provider) => {
      dispatch(addFavorite(provider));
    },

    removeFavourite: (index) => {
      dispatch(removeFavorite(index));
    },
  };
};

const ConnectedProviderCard = connect(null, mapDispatchToProps)(ProviderCard);

export default ConnectedProviderCard;

// export default ProviderCard;
