import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <img
        className="img"
        src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
        alt="img"
      />
      <h1>IQ Test for kids from 7 to 16 year old</h1>
      <Button variant="contained">
        <Link to="/test">Start-Test</Link>
      </Button>
      <p className="discription">
        Surely many have heard about the intelligence quotient, or IQ. The
        easiest way to find out your intelligence level is to take an IQ test,
        which is a modern analogue of the well-known methodology "Raven's
        Progressive Matrix Scale". It is designed to determine the IQ of adults
        aged 14 to 65 years, regardless of nationality, religion, and other
        differences. All questions that you do not answer are considered
        incorrectly answered. You will be presented with a picture with a
        cropped area and several parts that fit into this area. Your task is to
        identify the one and only correct cut out picture. Take an IQ test
        online, find out your intelligence level, and be sure to share the
        results with your friends! Let's get started!
      </p>
    </div>
  );
}
