import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/MenuItem.component";

import "./DirectoryMenu.styles.scss";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
