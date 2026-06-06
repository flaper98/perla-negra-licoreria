export const promotionLima = Array.from({ length: 62 }, (_, index) => ({
  id: index + 1,
  name: `Promo Lima ${index + 1}`,
  category: "Lima",
  image: `/img/promotion/Lima/${index + 1}.png`,
  layout: "vertical",
}));