// Imagery mirrors design_spazio.pen (same Unsplash photos; local SPAZIO photos where used).
const u = (id, w = 1100) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  hero: '/hero-bg.png',
  heroInset: '/hero-inset.png',

  svc1: u('1611211235015-e2e3a7d09e97'),
  svc2: '/svc2.jpg',
  svc3: u('1772208392422-bb2f2609097a'),
  svc4: u('1550243595-4cb7dd708a89'),
  svc5: u('1758972581195-c27b9d3b1c56'),

  projBig: u('1686041446005-1e6622d4ad46', 1200),
  projThumb1: u('1768946131690-247c5319f0d8'),
  projThumb2: u('1714928837028-34d2b0d7e260'),

  test: u('1738168259543-d0c58e2b91ed', 1200),

  gal1: '/gal1.png',
  gal2: '/hero-inset.png',
  gal3: '/gal3.png',
  gal4: '/gal4.png',
  gal5: u('1580130281320-0ef0754f2bf7'),

  blog1: u('1768488674723-2bf98b0a0515'),
  blog2: u('1716450083577-672b3cd299b1'),
  blog3: u('1748679866476-a3d2e6c2dc70'),
  blog4: u('1783148609395-d29aadb5e3c0'),

  cta: u('1616594039964-ae9021a400a0', 1800),

  menu1: u('1768946131536-39b5f3ec329d'),
  menu2: u('1774488291055-0eec121f196f'),
  menu3: u('1770625467936-37cb2d4156bf'),
  menu4: u('1760516476528-bfa65002547a'),
}
