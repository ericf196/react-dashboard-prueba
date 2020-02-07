import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'
import { getUsers } from '../../actions'
import { usersDelete } from '../../actions/'
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";

import { PropagateLoader } from "react-spinners"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class TableUsers extends Component {

  constructor(props) {
    super(props)

    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);

  }

  componentWillMount() {
    this.props.getUsers()
    //console.log('%c Props render ', 'color: white; background-color: #2274A5', this.props);
  }

  handleChange(e) {
    const item = e.target.id;
    const isChecked = e.target.checked;
    const obj = {};
    obj["checkbox-" + item] = isChecked;

    this.setState((prevState) =>
      Object.assign(prevState, obj)
    );
    
    console.log(this.state)
  }

  delete(e) {
    this.props.usersDelete(this.state, this.props.history)
    //console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    const users = this.props.users.data;


    if (!users) {
      return (
        <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
          <PropagateLoader
            color="#00BCD4"
            loading={true}
          />
        </div>
      )
    }

    return (
      <div>
        <GridContainer style={{ flexDirection: 'row-reverse' }}>
          <GridItem xs={12} sm={12} md={4} >
            <Link to="users/add-user">
              <Button
                fullWidth
                color="primary"
              >Add Users
          </Button>
            </Link>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ flexDirection: 'row-reverse' }}>
        <GridItem xs={12} sm={12} md={4} >
          <div>
            <Button color="danger" round onClick={this.delete}><DeleteOutlineIcon /> Delete</Button>
          </div>
        </GridItem>
      </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Table on Plain Background
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name", "Country", "City", "Salary"]}
                  tableData={users}
                  handleChange={this.handleChange}
                />
              </CardBody>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers,
    usersDelete
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TableUsers));
