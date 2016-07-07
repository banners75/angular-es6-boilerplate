import angular from "angular";
import "angular-mocks";
import { HomeController } from "../app/home/home.controller.js";

var app = angular.module("app", []);
app.controller("homeController", HomeController);
