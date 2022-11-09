import React from "react";
import { format } from "friendly-numbers";
import NumberFormat from "react-number-format";
import { StatArrow } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  social_engament,
  social_mentions,
  social_engament_percentage,
  social_mentions_percentage,
  url_shares,
  url_shares_percentage,
} from "../data";

export default function Summary(props) {
  return (
    <>
      <p style={{ fontSize: "19px" }}>
        The current global cryptocurrency market cap is $
        {format(props.data.data.total_market_cap.usd, {
          decimals: 2,
          formattedDecimals: 2,
          smallMinimumMeaningfulDigits: 2,
        })}
        , a{" "}
        {props.data.data.market_cap_change_percentage_24h_usd > 0 ? (
          <>
            <StatArrow type="increase" />
            <span style={{ color: "#48BB78" }}>
              <NumberFormat
                thousandSeparator={true}
                value={props.data.data.market_cap_change_percentage_24h_usd}
                displayType="text"
                decimalScale={2}
              />
              %
            </span>
          </>
        ) : (
          <>
            <StatArrow type="decrease" />
            <span style={{ color: "rgb(245, 101, 101)" }}>
              <NumberFormat
                thousandSeparator={true}
                value={props.data.data.market_cap_change_percentage_24h_usd}
                displayType="text"
                decimalScale={2}
              />
              %
            </span>
          </>
        )}{" "}
        change in the last 24 hours.
        <br />
        <br />
        The current total cryptocurrency trading volume in the last day is at $
        {format(props.data.data.total_volume.usd, {
          decimals: 2,
          formattedDecimals: 2,
          smallMinimumMeaningfulDigits: 2,
        })}
        . Bitcoin dominance is{" "}
        <NumberFormat
          thousandSeparator={true}
          value={props.data.data.market_cap_percentage.btc}
          displayType="text"
          decimalScale={2}
        />
        % and Ethereum dominance is at{" "}
        <NumberFormat
          thousandSeparator={true}
          value={props.data.data.market_cap_percentage.eth}
          displayType="text"
          decimalScale={2}
        />
        %. Capitnest is now tracking 3868{" "}
        <Link to="/markets" style={{ textDecoration: "underline" }}>
          cryptocurrencies
        </Link>{" "}
        & 250{" "}
        <Link to="/exchanges" style={{ textDecoration: "underline" }}>
          exchanges
        </Link>
        .
        <br />
        <br />
        Today's social engament is{" "}
        {format(social_engament, {
          decimals: 2,
          formattedDecimals: 2,
          smallMinimumMeaningfulDigits: 2,
        })}
        , with a{" "}
        {social_engament_percentage > 0 ? (
          <>
            <StatArrow type="increase" />
            <span style={{ color: "#48BB78" }}>
              <NumberFormat
                thousandSeparator={true}
                value={social_engament_percentage}
                displayType="text"
                decimalScale={2}
              />
              %
            </span>
          </>
        ) : (
          <>
            <StatArrow type="decrease" />
            <span style={{ color: "rgb(245, 101, 101)" }}>
              <NumberFormat
                thousandSeparator={true}
                value={social_engament_percentage}
                displayType="text"
                decimalScale={2}
              />
              %
            </span>
          </>
        )}{" "}
        change in the last 24 hours and{" "}
        {format(social_mentions, {
          decimals: 2,
          formattedDecimals: 2,
          smallMinimumMeaningfulDigits: 2,
        })}{" "}
        social mentions and{" "}
        {format(url_shares, {
          decimals: 2,
          formattedDecimals: 2,
          smallMinimumMeaningfulDigits: 2,
        })}{" "}
        url shares.
      </p>
    </>
  );
}
