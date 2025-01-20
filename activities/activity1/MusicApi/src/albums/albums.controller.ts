import { Request, Response } from "express";

const ALBUMS = [
  { id: 1, name: "Please Please Me (1963)", artist: "The Beatles" },
  { id: 2, name: "With The Beatles (1963)", artist: "The Beatles" },
  { id: 3, name: "A Hard Day's night (1964)", artist: "The Beatles" },
  { id: 4, name: "Beatles For Sale (1964)", artist: "The Beatles" },
  { id: 5, name: "Help! (1965)", artist: "The Beatles" },
  { id: 6, name: "Rubber Soul (1965)", artist: "The Beatles" },
  {
    id: 7,
    name: "Sgt Pepper's Lonely Hearts Club Band",
    artist: "The Beatles",
  },
  {
    id: 8,
    name: "Most of these records are not very good",
    artist: "The Beatles",
  },
];

export const getAlbums = (req: Request, res: Response) => {
  res.send(ALBUMS);
};
