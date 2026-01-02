# Professional Portfolio Frontend

This repository hosts the frontend files for my professional HTML portfolio web application hosted on AWS.

## Overview

This portfolio was modeled after the 'Cloud Resume Challenge' and serves as a personal website for use as my portfolio. I approached this project intending to learn about and utilize as many cloud resources
as I could while maintaining an efficient and light-weight application.

## Features

- Entirely cloud hosted on AWS
- Implemented visitor counter by using JavaScript to query an AWS serverless API with additional backend explained in my [backend repository](https://github.com/HarmonZ7/harmon-portfolio-backend).
- Fully functional CI/CD with Github Actions updating and deploying live resources on AWS.

## Tech Stack

- AWS S3 Bucket: Hosts site files
- AWS CloudFront: Provides networking, as well as private bucket access with SSL Cert.
- AWS Route 53: DNS and routing
- AWS Certificate Manager: Provider of SSL Certificate
- Javascript: Used for animations and API code
- Foundation HTML and CSS provided by StyleShout and Hudson

## Project Structure

```
harmon-portfolio-frontend/
├── .github/
│   └── workflows/
│       └── main.yaml
├── dist/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   ├── static/
│   │   └──images/
│   │      ├── AWSCCP.pdf
│   │      ├── CourseCareersCertificate.jpeg
│   │      ├── aria_comp1.jpg
│   │      ├── aria_comp2.jpg
│   │      ├── augustine_bench.jpg
│   │      └── basic_headshot.jpeg
│   └── index.html
└── README.md
```
