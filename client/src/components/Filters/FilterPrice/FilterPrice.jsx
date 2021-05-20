import React from "react";
import { Form } from "react-bootstrap";
import "./FilterPrice.css";

const FilterPrice = () => {
  return (
    <div>
      <Form.Group controlId="maxPrice">
        <Form.Label inline>Max Price</Form.Label>
        <Form.Control type="number" placeholder="120" />
      </Form.Group>
    </div>
  );
};

export default FilterPrice;
//  <fieldset class="wt-mb-xs-2 appears-ready">
//             <legend class="wt-pl-xs-0 wt-mb-xs-1">
//                     <h3 class="wt-text-caption-title wt-display-inline-block wt-pl-xs-2 wt-pr-xs-1">

//                         Price (₪)
//                     </h3>
//             </legend>
//     <div>

//         <div class="container wt-pl-xs-2" role="radiogroup" aria-label="Select a price range">
//             <div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-0" name="price_bucket_range" value="_" class="radio price-bucket" data-path="_" data-context="price" aria-label="Any price" checked="checked">
//     <label for="price-input-0" class="wt-radio__label wt-display-inline">
//         Any price
//     </label>
// </div><div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-1" name="price_bucket_range" value="_75" class="radio price-bucket" data-path="_75" data-context="price" aria-label="Under ₪75">
//     <label for="price-input-1" class="wt-radio__label wt-display-inline">
//         Under ₪75
//     </label>
// </div><div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-2" name="price_bucket_range" value="75_150" class="radio price-bucket" data-path="75_150" data-context="price" aria-label="₪75 to ₪150">
//     <label for="price-input-2" class="wt-radio__label wt-display-inline">
//         ₪75 to ₪150
//     </label>
// </div><div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-3" name="price_bucket_range" value="150_300" class="radio price-bucket" data-path="150_300" data-context="price" aria-label="₪150 to ₪300">
//     <label for="price-input-3" class="wt-radio__label wt-display-inline">
//         ₪150 to ₪300
//     </label>
// </div><div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-4" name="price_bucket_range" value="300_" class="radio price-bucket" data-path="300_" data-context="price" aria-label="Over ₪300">
//     <label for="price-input-4" class="wt-radio__label wt-display-inline">
//         Over ₪300
//     </label>
// </div><div data-custom-price-container="true">
//     <div class="wt-radio wt-radio--small wt-mb-xs-1 " data-radio-custom="">
//     <input type="radio" id="price-input-custom" name="price_bucket_range" value="custom" class="price-bucket" data-price-input-custom-radio="true">
//     <label for="price-input-custom" class="wt-radio__label wt-display-inline">
//         Custom
//     </label>
// </div><div class="wt-grid wt-ml-xs-4 wt-nudge-b-4">
//     <div class="wt-grid__item-xs-9 wt-display-inline-flex-xs wt-align-self-center">
//         <div class="wt-grid__item-xs-5">
//             <label for="search-filter-min-price-input" class="wt-screen-reader-only">Enter minimum price</label>
//             <input id="search-filter-min-price-input" type="number" step="0.01" placeholder="Low" class="wt-input wt-input--small price-input" name="min" value="">
//         </div>
//         <div class="wt-grid__item-xs-2 wt-text-center-xs">
//             <div class="wt-vertical-center">
//                 to
//             </div>
//         </div>
//         <div class="wt-grid__item-xs-5">
//             <label for="search-filter-max-price-input" class="wt-screen-reader-only">Enter maximum price</label>
//             <input id="search-filter-max-price-input" type="number" step="0.01" placeholder="High" class="wt-input wt-input--small price-input" name="max" value="">
//         </div>
//     </div>

// </div>
// </div>
//         </div>

//     </div>
// </fieldset>
