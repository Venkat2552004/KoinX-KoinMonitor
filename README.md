# KoinMonitor API

KoinMonitor API provides endpoints to fetch cryptocurrency statistics and calculate standard deviation based on historical prices.

## Table of Contents

- [Introduction](#introduction)
- [API Endpoints](#api-endpoints)
  - [Get Cryptocurrency Statistics](#get-cryptocurrency-statistics)
  - [Calculate Standard Deviation](#calculate-standard-deviation)

## Introduction

The KoinMonitor API is deployed on Render and can be accessed at [koinmonitor.onrender.com](https://koinmonitor.onrender.com).

## API Endpoints

### Get Cryptocurrency Statistics

- **URL**: `/api/stats`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic-network`).
- **Response**:
  - `200 OK`: Returns the statistics of the specified cryptocurrency.
  - `500 Internal Server Error`: Returns an error message if the coin is not found or any other error occurs.
  **Example Request**:
  ```sh
  curl -X GET "https://koinmonitor.onrender.com/api/stats?coin=bitcoin"
  ```
  **Example Response**:
  ```sh
  {
    "price": 60960,
    "marketCap": 1205967430000.11,
    "24hChange": -0.127393623664478
  }
  ```

### Calculate Standard Deviation

- **URL**: `/api/deviation`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic-network`).
- **Response**:
  - `200 OK`: Returns the standard deviation of the specified cryptocurrency based on the last 100 values.
  - `500 Internal Server Error`: Returns an error message if the coin is not found or any other error occurs.
  **Example Request**:
  ```sh
  curl -X GET "https://koinmonitor.onrender.com/api/deviation?coin=bitcoin"
  ```
  **Example Response**:
  ```sh
  {
    "deviation": 133.4074793838611
  }
  ```