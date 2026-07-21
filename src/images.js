// Imagery mirrors design_spazio.pen (Alma concept store — regenerated photos).
const u = (id, w = 1100) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  hero: '/hero-bg.png',
  heroInset: u('1762755963668-c1fea8f7a304'),

  svc1: u('1759722665660-c6ce8cd19ae3'),
  svc2: u('1761156254622-7b66649b1f69'),
  svc3: u('1780586382624-8f2d371e7667'),
  svc4: u('1669929034391-5e1fd51c0a63'),
  svc5: u('1715690998809-11c2a60558fd'),

  projBig: u('1724582586529-62622e50c0b3', 1200),
  projThumb1: u('1771218830087-c68a7fd4236e'),
  projThumb2: u('1560185893-d9680d601385'),
  projThumb3: u('1617597837929-b34c021186f3'),

  test: u('1773332611573-5e5bfa8e5de5', 1200),

  gal1: u('1533044309907-0fa3413da946'),
  gal2: u('1630699295509-a199b5370538'),
  gal3: u('1772567732993-c63fd77fa40b'),
  gal4: u('1648536474504-7bbf8a1ee3ab'),
  gal5: u('1768076956012-0d7f192429a6'),

  blog1: u('1682184805271-11671b7ecf4c'),
  blog2: u('1618221195710-dd6b41faaea6'),
  blog3: u('1581631059762-566beaaa6be8'),
  blog4: u('1617907332636-bb421c700835'),

  cta: u('1772112334845-86016056137b', 1800),

  menu1: u('1583847268964-b28dc8f51f92'),
  menu2: u('1616486029423-aaa4789e8c9a'),
  menu3: u('1774647003386-d0150e9d1327'),
  menu4: u('1650090974911-94b90ea2a833'),
}
