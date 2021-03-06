import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Inventory = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_prdts d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2>Inventory</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/inventory">Products</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Inventory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="about_thumb">
                <img src="assets/images/inventory_side.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Smartly manages and controls </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    The stockroom / warehouse inventory that
                    <span> automates your business</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
              <div className="singel_about_left mb-30">
                <div className="singel_about_left_inner mb-3">
                  <div className="singel-about-content boder pl-4">
                    <p>
                      Managing inventory has always been challenging, and trends
                      in logistics management continue to make it harder every
                      day. Cloudin <b>Inventory</b> management system integrates
                      seamlessly with Business that helps in control of your
                      Orders, Inventory & Returns through a single, real-time
                      dashboard view of your business- across channels &
                      locations
                    </p>
                    <p>
                      <b>Cloudin Inventory</b>
                      <br />
                      Cloudin easily track your inventory, know which items sell
                      fast, which items expire soon. It combines with desktop
                      software, barcode scanners, barcode labels and mobile
                      devices for a single stockroom or multiple warehouses
                      spread across the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing_area pb-70" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="single_pricing_content_inner">
                <div className="pricing_body pb-4 text-center">
                  <div className="featur">
                    <div className="pricing_head pb-4">
                      <div className="pricing_title">
                        <h3> No More Spreadsheets</h3>
                      </div>
                    </div>
                    <ul>
                      <li>Automated</li>
                      <li>Centralized</li>
                      <li>Single View of Inventory - Across Channels</li>
                      <li>Fulfilment Locations & Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature_area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1>
                    From MSMEs to large corporations, Cloudin inventory supports{' '}
                    <span>all businesses</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="inventory_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="invenOrderMgtImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                        Order management 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Handles all your sales and purchase activities, manage
                      invoice and bills, and track payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="inventory_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="invenwareHouseImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       
                        {' '}
                        Warehouse/stockroom management
                       
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Controls your stock in different warehouses or godowns
                      centrally from Cloudin inventory
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="inventory_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="invenbarcodeImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Barcode scanning 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Compatible with different barcode scanners to set up
                      easily barcode system and add SKUs, serial and batch
                      numbers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="inventory_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="inventoryTrack1Img"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      Inventory tracking 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Keep the track of spare parts, saleable items, and even
                      expiry dates with serial and batch tracking feature
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="inventory_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="invenReportImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      Reports 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Know your inventory aging, vendor payments, sales details
                      and inventory valuation from range of reports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing_area pb-40" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="single_pricing_content_inner">
                <div className="pricing_body pt-35 pb-4">
                  <div className="featur text_center">
                    <ul>
                      <li>
                        Cloudin suits of services helps you to get an accurate
                      </li>
                      <li>real-time view of inventory across your stores</li>
                      <li>
                        online channels & warehouses to make smarter fulfilment
                        decisions & meet customers' delivery expectations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area style2 pb-70 invent">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-55">
                <div className="section_main_title">
                  <h1> Our advanced </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>Inventory & order routing engine helps you</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service_single_thumb left">
                <div className="single_service_inner_thumb">
                  <img src="assets/images/service1.png" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="autoManageImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Automatically manage & update inventory stock across
                      channels & helps reduce stockouts & overstocks
                    </h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="centerInventoryImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Centralised inventory management for all the channels
                    </h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="trackPrdImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Keep track of your products as you sell and restock across
                      multiple locations and channels
                    </h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="dCustomersImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Delight customers by reducing fulfilment errors & meeting
                      delivery commitments
                    </h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="simplyfyImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      Simplify complex workflows through our automated order
                      routing based on predefined service levels for part
                      fulfilment, dropship orders, back-order management or
                      back-to-back orders
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Inventory;
