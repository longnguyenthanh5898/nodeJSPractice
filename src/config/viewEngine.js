import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  // tao su dung view engine la ejs(su dung cong nghe gi de viet html)
  app.set("view engine", "ejs");

  // tao dung de luu tru views trong dia chi nay

  app.set("views", "./src/views");
};

export default configViewEngine;
