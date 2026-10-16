/*
  Locked asset manifest. The visual files below are immutable approved artwork;
  this data is only used for behaviour and verification, never to draw pages.
*/
window.LOCKED_INVITATION = Object.freeze({
  title: "Mahad Aslam & Sidra Arif — Wedding Invitation",
  artwork: Object.freeze({
    sourceWidth: 860,
    sourceHeight: 1720,
    mobileCssWidth: 430,
    mobileCssHeight: 860
  }),
  pages: Object.freeze([
    Object.freeze({ id: "opening", asset: "01-entry.jpeg", sha256: "51616a53fe624aec60cea70668409665a30aca425a6ecd4a3c135d24219bd7a6" }),
    Object.freeze({ id: "couple", asset: "02-hero-countdown.jpeg", sha256: "b06ac3677d3357467d767af16163681daec3f14f44acd1438c7baebd8500ad63" }),
    Object.freeze({ id: "walima", asset: "08-walima.jpeg", sha256: "11e66f3f0aa0dfaef14f07adea68ad1158ec8f8609551572ae7436219710c13c" }),
    Object.freeze({ id: "rsvp", asset: "09-rsvp.jpeg", sha256: "6d3c03f9680697710a9e3e1bfdf80bc5f5473c4470cf54a12c7f559b838410c6" }),
    Object.freeze({ id: "looking-forward", asset: "10-looking-forward.jpeg", sha256: "bc59bd976d3dc596e97bd259eb9ab0f72f2c84a9452b95ca3700e6899266dbf6" }),
    Object.freeze({ id: "closing", asset: "11-closing.jpeg", sha256: "adb35b292ae5be7a40c5410e187aa373df6e6c8ba1805a31458233f594a6cdac" })
  ]),
  pageTenShareRemoval: Object.freeze({
    asset: "10-looking-forward-share-removed-repair.png",
    sha256: "533ef160d36119654cf7a08089ad5c0b9974872c03e16f355ca98c8227c89588"
  }),
  countdown: Object.freeze({
    // Main Barat arrival: Saturday, 14 November 2026 at 7:00 PM in Pakistan.
    target: "2026-11-14T19:00:00+05:00",
    timeZone: "Asia/Karachi"
  }),
  share: Object.freeze({
    title: "Mahad Aslam & Sidra — Wedding Invitation",
    text: "You are warmly invited to the wedding celebrations of Mahad Aslam and Sidra Arif."
  })
});
