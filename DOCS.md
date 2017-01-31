# kitolo v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Facebook](#authenticate-with-facebook)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Category](#category)
	- [Create category](#create-category)
	- [Delete category](#delete-category)
	- [Retrieve categories](#retrieve-categories)
	- [Retrieve category](#retrieve-category)
	- [Update category](#update-category)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Promotion](#promotion)
	- [Create promotion](#create-promotion)
	- [Delete promotion](#delete-promotion)
	- [Retrieve promotion](#retrieve-promotion)
	- [Retrieve promotions](#retrieve-promotions)
	- [Update promotion](#update-promotion)
	
- [Proposition](#proposition)
	- [Create proposition](#create-proposition)
	- [Delete proposition](#delete-proposition)
	- [Retrieve proposition](#retrieve-proposition)
	- [Retrieve propositions](#retrieve-propositions)
	- [Update proposition](#update-proposition)
	
- [Provider](#provider)
	- [Create provider](#create-provider)
	- [Delete provider](#delete-provider)
	- [Retrieve provider](#retrieve-provider)
	- [Retrieve providers](#retrieve-providers)
	- [Update provider](#update-provider)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Facebook



	POST /auth/facebook


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Facebook user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Category

## Create category



	POST /categories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| title			| 			|  <p>Category's title.</p>							|
| description			| 			|  <p>Category's description.</p>							|
| img			| 			|  <p>Category's img.</p>							|

## Delete category



	DELETE /categories/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve categories



	GET /categories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve category



	GET /categories/:id


## Update category



	PUT /categories/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| title			| 			|  <p>Category's title.</p>							|
| description			| 			|  <p>Category's description.</p>							|
| img			| 			|  <p>Category's img.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Promotion

## Create promotion



	POST /promotions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| productName			| 			|  <p>Promotion's productName.</p>							|
| category			| 			|  <p>Promotion's category.</p>							|
| releaseDate			| 			|  <p>Promotion's releaseDate.</p>							|
| endDate			| 			|  <p>Promotion's endDate.</p>							|
| description			| 			|  <p>Promotion's description.</p>							|
| basePrice			| 			|  <p>Promotion's basePrice.</p>							|
| users			| 			|  <p>Promotion's users.</p>							|
| discount			| 			|  <p>Promotion's discount.</p>							|
| minNbContributor			| 			|  <p>Promotion's minNbContributor.</p>							|
| img			| 			|  <p>Promotion's img.</p>							|

## Delete promotion



	DELETE /promotions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve promotion



	GET /promotions/:id


## Retrieve promotions



	GET /promotions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update promotion



	PUT /promotions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| productName			| 			|  <p>Promotion's productName.</p>							|
| category			| 			|  <p>Promotion's category.</p>							|
| releaseDate			| 			|  <p>Promotion's releaseDate.</p>							|
| endDate			| 			|  <p>Promotion's endDate.</p>							|
| description			| 			|  <p>Promotion's description.</p>							|
| basePrice			| 			|  <p>Promotion's basePrice.</p>							|
| users			| 			|  <p>Promotion's users.</p>							|
| discount			| 			|  <p>Promotion's discount.</p>							|
| minNbContributor			| 			|  <p>Promotion's minNbContributor.</p>							|
| img			| 			|  <p>Promotion's img.</p>							|

# Proposition

## Create proposition



	POST /propositions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Proposition's name.</p>							|
| description			| 			|  <p>Proposition's description.</p>							|
| img			| 			|  <p>Proposition's img.</p>							|

## Delete proposition



	DELETE /propositions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve proposition



	GET /propositions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve propositions



	GET /propositions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update proposition



	PUT /propositions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| name			| 			|  <p>Proposition's name.</p>							|
| description			| 			|  <p>Proposition's description.</p>							|
| img			| 			|  <p>Proposition's img.</p>							|

# Provider

## Create provider



	POST /providers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| shopName			| 			|  <p>Provider's shopName.</p>							|
| contact			| 			|  <p>Provider's contact.</p>							|
| email			| 			|  <p>Provider's email.</p>							|
| tel			| 			|  <p>Provider's tel.</p>							|
| adress			| 			|  <p>Provider's adress.</p>							|
| npa			| 			|  <p>Provider's npa.</p>							|
| city			| 			|  <p>Provider's city.</p>							|
| promotions			| 			|  <p>Provider's promotions.</p>							|

## Delete provider



	DELETE /providers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve provider



	GET /providers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve providers



	GET /providers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update provider



	PUT /providers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| shopName			| 			|  <p>Provider's shopName.</p>							|
| contact			| 			|  <p>Provider's contact.</p>							|
| email			| 			|  <p>Provider's email.</p>							|
| tel			| 			|  <p>Provider's tel.</p>							|
| adress			| 			|  <p>Provider's adress.</p>							|
| npa			| 			|  <p>Provider's npa.</p>							|
| city			| 			|  <p>Provider's city.</p>							|
| promotions			| 			|  <p>Provider's promotions.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's picture.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


