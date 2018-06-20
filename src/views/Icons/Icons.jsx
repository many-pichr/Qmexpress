import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";

import { RegularCard, P, A, ItemGrid } from "components";

import iconsStyle from "assets/jss/material-dashboard-react/iconsStyle";

function Icons({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Material Design Icons"
          
        />
      </ItemGrid>
    </Grid>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
