#!/usr/bin/env node
// Import necessary modules from their respective packages
import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { routes } from "../router/routes.js";

// Create a new SitemapStream with the website hostname
const sitemap = new SitemapStream({ hostname: "https://www.ideaflow.studio" });

// Create a writable stream to write the sitemap to a file in the 'public' folder
const writeStream = createWriteStream("./public/sitemap.xml");
// Pipe the sitemap stream to the writable stream
sitemap.pipe(writeStream);

// Iterate through the routes, filtering out the catch-all route
routes
  .filter((route) => route.path !== "/:catchAll(.*)")
  .forEach((route) => {
    // Write each route to the sitemap with its properties
    sitemap.write({
      url: route.path,
      changefreq: "monthly",
      priority: route.path === "/" ? 1.0 : 0.8,
    });
  });

// Finalize the sitemap by ending the stream
sitemap.end();
