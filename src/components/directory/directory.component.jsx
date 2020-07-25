import React from "react";
import "../menu-item/menu-item.component";
import MenuItem from "../menu-item/menu-item.component";
import {DirectoryMenuContainer} from './directory.styles';
import { connect } from "react-redux";
import { selectDirecotrySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
      //<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
