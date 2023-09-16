"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/hero";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
    },
  ],
});
