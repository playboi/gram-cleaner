#!/usr/bin/node

/**
 *  Gram Cleaner - a cleanup tool for all non-active follower
 */

const Config = require("");
const Client = require("instagram-private-api").V1;
const device = new Client.Device();
