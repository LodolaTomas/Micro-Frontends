import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@weincode/mf-header",
  app: () => System.import("@weincode/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
