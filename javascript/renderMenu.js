import { cartaData } from "./cartaData.js";
import { renderCarta } from "./renderCarta.js";

export function renderMenu() {
  renderCarta(cartaData, {
    showPortion: true,
    friendlyNames: {
      MARISCOSYPESCADOS: "Mariscos y Pescados",
      MENUKIDS: "Menú Kids",
      CAFETERIA: "Cafetería",
    },
  });
}
