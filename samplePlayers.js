import React from 'react';
import path from 'path';

const samplePlayers = [{
  socketid: 1,
  name: 'Abra',
  character1: {
    id: 1,
    name: 'Duke',
    action: 'Tax',
    effect: 'Take 3 coins',
    counteraction: 'Blocks foreign aid',
    image: path.join(__dirname, 'duke.png'),
    isAlive: false},
  character2: {
    id: 5,
    name: 'Contessa',
    action: null,
    effect: null,
    counteraction: 'Blocks assassination',
    image: path.join(__dirname, 'contessa.png'),
    isAlive: true},
  coins: 2,
  activeCharacters: 1,
},
{
  socketid: 2,
  name: 'Lion',
  character1: {
    id: 2,
    name: 'Assassin',
    action: 'Assasinate',
    effect: 'Pay 3 coins',
    counteraction: null,
    image: path.join(__dirname, 'assassin.png'),
    isAlive: true},
  character2: {
    id: 3,
    name: 'Ambassador',
    action: 'Exchange',
    effect: 'Exchange cards with Court Deck',
    counteraction: 'Blocks stealing',
    image: path.join(__dirname, 'ambassador.png'),
    isAlive: true},
  coins: 2,
  activeCharacters: 2,
},
{
  socketid: 3,
  name: 'Tiger',
  character1: {
    id: 1,
    name: 'Duke',
    action: 'Tax',
    effect: 'Take 3 coins',
    counteraction: 'Blocks foreign aid',
    image: path.join(__dirname, 'duke.png'),
    isAlive: true},
  character2: {
    id: 4,
    name: 'Captain',
    action: 'Steal',
    effect: 'Take 2 coins from another player',
    counteraction: 'Blocks stealing',
    image: path.join(__dirname, 'captain.png'),
    isAlive: false
  },
  coins: 4,
  activeCharacters: 1,
},
{
  socketid: 4,
  name: 'Sunny',
  character1: {
    id: 1,
    name: 'Duke',
    action: 'Tax',
    effect: 'Take 3 coins',
    counteraction: 'Blocks foreign aid',
    image: path.join(__dirname, 'duke.png'),
    isAlive: false},
  character2: {
    id: 5,
    name: 'Contessa',
    action: null,
    effect: null,
    counteraction: 'Blocks assassination',
    image: path.join(__dirname, 'contessa.png'),
    isAlive: true},
  coins: 2,
  activeCharacters: 1,
},
{
  socketid: 5,
  name: 'Marty',
  character1: {
    id: 2,
    name: 'Assassin',
    action: 'Assasinate',
    effect: 'Pay 3 coins',
    counteraction: null,
    image: path.join(__dirname, 'assassin.png'),
    isAlive: true},
  character2: {
    id: 3,
    name: 'Ambassador',
    action: 'Exchange',
    effect: 'Exchange cards with Court Deck',
    counteraction: 'Blocks stealing',
    image: path.join(__dirname, 'ambassador.png'),
    isAlive: true},
  coins: 2,
  activeCharacters: 2,
},
{
  socketid: 6,
  name: 'Lily',
  character1: {
    id: 1,
    name: 'Duke',
    action: 'Tax',
    effect: 'Take 3 coins',
    counteraction: 'Blocks foreign aid',
    image: path.join(__dirname, 'duke.png'),
    isAlive: true},
  character2: {
    id: 4,
    name: 'Captain',
    action: 'Steal',
    effect: 'Take 2 coins from another player',
    counteraction: 'Blocks stealing',
    image: path.join(__dirname, 'captain.png'),
    isAlive: false},
  coins: 4,
  activeCharacters: 1,
}];

export default samplePlayers;