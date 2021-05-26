import React, { useEffect } from "react";
import { providerActions } from "../../actions/";
import { connect } from "react-redux";
// import { addFavorite, removeFavorite } from "../../actions";

const ProvidersList = (props) => {
  useEffect(() => {
    providerActions.getAll();
    return () => {
      // cleanup
    };
  }, []);
  return <div>Providers list here...</div>;
};

export default connect(null, { providerActions })(ProvidersList);
