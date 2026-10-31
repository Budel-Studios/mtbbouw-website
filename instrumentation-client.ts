import { initBotId } from "botid/client/core";

/**
 * Vercel BotID: onzichtbare botcontrole op de formulierroute. Het script
 * voegt een controle toe aan elke POST naar /api/contact; de route checkt die
 * met checkBotId(). Lokaal (development) staat de controle uit.
 */
initBotId({
  protect: [{ path: "/api/contact", method: "POST" }],
});
