import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import classnames from "classnames";

class CustomTable extends React.Component {

  render() {

    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    const tableCellClasses = classnames(classes.tableCell)


    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop) => {
              return (
                <TableRow key={prop.id}>
                  <TableCell className={classes.tableCell}>
                    <Checkbox
                    id={"checkbox-"+prop.id}
                    //checked={this.state.checkedItems.get("checkbox-"+prop.id)}
                      tabIndex={-1}
                      onChange={this.props.handleChange}
                     // checkedIcon={<Check className={classes.checkedIcon} />}
                      //icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.root
                      }}
                    />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.id}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.money}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.country}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.city}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  //tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  tableData: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(CustomTable);
