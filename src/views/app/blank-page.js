import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import RecentOrders from '../../containers/dashboards/RecentOrders';

import AvailityBasic from '../../containers/form-validations/AvailityBasic';



export default class BlankPage extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.blank-page" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <p><IntlMessages id="menu.blank-page"/></p>
              </Colxx>
            </Row>
            

          <Row>
          <Colxx lg="12" xl="6" className="mb-4">
          <AvailityBasic/>
          </Colxx>

          <Colxx lg="12" xl="6" className="mb-4">
            <RecentOrders />
          </Colxx>
          </Row>
          
          </Fragment>
          
        )
    }
}
