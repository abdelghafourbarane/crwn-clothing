import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WithSpinner from "../with-spinner/withSpinner.component";
import CollectionsOverview from "./collections-overview.component";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));
