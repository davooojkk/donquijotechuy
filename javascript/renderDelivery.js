import { deliveryData } from "./deliveryData.js";
import { renderCarta } from "./renderCarta.js";

export function renderDelivery() {
  renderCarta(deliveryData, {
    showPortion: false,
    friendlyNames: {
      MARISCOS: "Mariscos y Pescados",
      SANDWICH: "Sándwiches",
      BAURU: "Baurú",
    },
  });
}
