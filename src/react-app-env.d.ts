/// <reference types="react-scripts" />

type room = {
  adult: number;
  children: Array<children>;
};
type children = { id: number; age: number };
type details = { id: number; room: room };
