import { createAvatar } from '@dicebear/avatars'

import * as pixelart from '@dicebear/pixel-art'
export function randomPixelArt(seed: string) {
  return createAvatar(pixelart, {seed})
}

import * as pixelartneutral from '@dicebear/pixel-art-neutral'
export function randomPixelArtNeutral(seed: string) {
  return createAvatar(pixelartneutral, {seed})
}

import * as adventurerneutral from '@dicebear/adventurer-neutral'
export function randomAdventureNeutral(seed: string) {
  return createAvatar(adventurerneutral, {seed})
}

import * as bigearsneutral from '@dicebear/big-ears-neutral'
export function randomBigEarsNeutral(seed: string) {
  return createAvatar(bigearsneutral, {seed})
}

import * as bigsmile from '@dicebear/big-smile'
export function randomBigSmile(seed: string) {
  return createAvatar(bigsmile, {seed})
}

import * as miniavs from '@dicebear/miniavs'
export function randomMiniavs(seed: string) {
  return createAvatar(miniavs, {seed})
}

import * as bottts from '@dicebear/bottts'
export function randomBottts(seed: string) {
  return createAvatar(bottts, {seed})
}

import * as gridy from '@dicebear/gridy'
export function randomGridy(seed: string) {
  return createAvatar(gridy, {seed})
}


import * as identicon from '@dicebear/identicon'
export function randomIdenticon(seed: string) {
  return createAvatar(identicon, {seed})
}