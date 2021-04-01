import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import collectionsPage from "./collection.component";
import withSpinner from "../../components/with-spinner/withSpinner.component";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export default connect(mapStateToProps)(withSpinner(collectionsPage));
