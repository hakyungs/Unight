import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import { emphasize } from '../styles/colorManipulator';
import MoreHorizIcon from '../internal/svg-icons/MoreHoriz';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  icon: {
    width: 24,
    height: 16,
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    borderRadius: 2,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[200]
    },
    '&:active': {
      boxShadow: theme.shadows[0],
      backgroundColor: emphasize(theme.palette.grey[200], 0.12)
    }
  }
});
/**
 * @ignore - internal component.
 */


function BreadcrumbCollapsed(props) {
  const {
    classes
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes"]);

  return React.createElement("li", _extends({
    className: classes.root
  }, other), React.createElement(MoreHorizIcon, {
    className: classes.icon
  }));
}

process.env.NODE_ENV !== "production" ? BreadcrumbCollapsed.propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired
} : void 0;
export default withStyles(styles, {
  name: 'PrivateBreadcrumbCollapsed'
})(BreadcrumbCollapsed);