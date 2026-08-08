export interface Product {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  privacy: string;
  privacyUrl?: string;
  supportEmail: string;
  deck?: string[];
  githubUrl?: string;
}

export const PRODUCTS: Record<string, Product> = {
  geonap: {
    slug: "geonap",
    icon: "/icons/geonap-icon.png",
    name: "GeoNap",
    tagline:
      "Discover nearby places to rest, recharge, and nap based on your real-time location and preferences.",
    description:
      "GeoNap helps you find safe, quiet places to rest wherever you are. Using real-time location data, it surfaces nearby rest spots — quiet cafés, parks, rest areas, and lounges — rated for comfort and safety, so you can recover during long trips, work breaks, or time in an unfamiliar city.",
    features: [
      "Smart rest-spot discovery near you",
      "Quiet, safe & comfort-rated locations",
      "Personalized nap reminders",
      "Offline-friendly maps",
    ],
    privacyUrl:
      "https://raw.githubusercontent.com/rmbartis/GeoNap/main/docs/privacy.html",
    privacy: `
      <p class="privacy-updated">Last updated: July 12, 2026</p>
      <p>GeoNap is designed with a simple principle: your location and alarm data belong to you. This document explains exactly what information the app uses, where it stays, and what it never does.</p>
      <hr>
      <h3>Location Data</h3>
      <p>GeoNap uses your device's location exclusively to monitor geofenced regions. Location data is processed entirely on your device — it is never transmitted to any server, stored in a database, or shared with third parties.</p>
      <p>When you create an alarm, the latitude, longitude, and radius are saved locally. This data never leaves your device unless you explicitly use the Share button, which generates a standard Apple Maps link.</p>
      <p>The app requests "Always On" location permission so that iOS can wake the app in the background when you enter or exit a monitored region. You can revoke this permission at any time in Settings → Privacy &amp; Security → Location Services → GeoNap.</p>
      <hr>
      <h3>On-Device Storage</h3>
      <p>All alarm data — including names, coordinates, radii, time windows, active days, and trigger history — is stored locally using SwiftData in the app's private container. This data is included in standard iOS backups (iCloud Backup or iTunes/Finder) if backups are enabled.</p>
      <p>No account, login, or network connection is required to use GeoNap.</p>
      <hr>
      <h3>iCloud Sync</h3>
      <p>GeoNap is designed to support iCloud sync via CloudKit so that your alarms can appear on all your Apple devices signed into the same Apple ID. When iCloud sync is active, alarm records are stored in your personal iCloud container and governed by Apple's privacy policy. Apple does not use CloudKit data for advertising.</p>
      <p>If iCloud sync is unavailable or disabled, the app falls back to local-only storage automatically — no data is lost. You can disable iCloud sync at any time in Settings → [Your Name] → iCloud → GeoNap.</p>
      <hr>
      <h3>Auto-Notify Contacts</h3>
      <p>If you use the optional Auto-Notify feature, you can pick contacts to automatically message when an alarm fires. Picking a contact uses Apple's system contact picker — GeoNap never gets bulk or ongoing access to your address book, only the specific contact(s) you choose.</p>
      <p>For each contact you add, GeoNap stores that contact's name and phone number or email address — nothing else from their contact card. This is saved using SwiftData and, like your alarms, is optionally synced via iCloud so your Auto-Notify contacts carry over to your other devices signed into the same Apple ID.</p>
      <p>Contact info is never transmitted to any server I operate. It's only used to address the message you configure, sent through Messages or a Shortcuts automation you control. You can remove a contact from an alarm or from Auto-Notify Defaults at any time in Settings.</p>
      <hr>
      <h3>Apple Watch</h3>
      <p>If you use GeoNap with a paired Apple Watch, the iPhone app shares your active alarms — name, location-derived region, radius, and status — with the Watch app so it can show and alert on them.</p>
      <p>This data is sent device-to-device using Apple's WatchConnectivity framework; it never passes through any server I operate. On the Watch, it's stored in a shared App Group container local to that device so both the Watch app and its complication can read it — it is not synced to iCloud from the Watch.</p>
      <p>If you enable the optional debug log, it may record when a Watch is paired or unpaired, or when the GeoNap Watch app is installed or removed, to help diagnose sync issues. It does not record your alarm data itself. Uninstalling GeoNap from your Watch, or unpairing the Watch, removes this shared copy.</p>
      <hr>
      <h3>Transit Feed Downloads</h3>
      <p>The Transit Alarm feature downloads GTFS data directly from public transit agency servers. These feeds contain stop names, coordinates, and route information — no personal data is included.</p>
      <p>Downloaded GTFS data is cached in the app's caches directory on your device. Cached files may be deleted by iOS when storage is low; the app will re-download on demand.</p>
      <p>No custom GTFS URL you enter is stored beyond the current session, and no information about which agencies you browsed is transmitted anywhere.</p>
      <hr>
      <h3>Notifications</h3>
      <p>GeoNap delivers local notifications entirely on-device using iOS's UNUserNotificationCenter. Notifications are generated by the app itself when a geofence event fires — they are not sent through any push notification server or remote service. No notification content is transmitted off your device.</p>
      <p>You can manage notification permissions in Settings → Notifications → GeoNap.</p>
      <hr>
      <h3>Analytics &amp; Crash Reporting</h3>
      <p>GeoNap does not include any third-party analytics SDKs, advertising networks, or crash reporting services. The app does not track how you use it and does not collect diagnostic information beyond what iOS provides natively in Settings → Privacy &amp; Security → Analytics &amp; Improvements.</p>
      <hr>
      <h3>Deleting Your Data</h3>
      <p>You can delete individual alarms by swiping left on any alarm row, or delete all data by removing the app from your device. Uninstalling GeoNap removes all locally stored alarm records. If iCloud sync was enabled, you can also delete the app's CloudKit data in Settings → [Your Name] → iCloud → Manage Account Storage → GeoNap.</p>
      <hr>
      <h3>Calendar Access</h3>
      <p>If you turn on Calendar Scanning in Settings, GeoNap reads events from the calendars you choose to look for upcoming trips with a location — for example a flight, train, or meeting. This happens entirely on your device: calendar data is never uploaded, stored outside the app, or shared with third parties. Only the location text of a candidate event is sent to Apple's geocoding service to convert it into map coordinates, the same way manually dropping a pin already works in GeoNap. Calendar Scanning is off by default; you can turn it off at any time in Settings → Calendar Scanning, and revoke calendar access entirely in iOS Settings → Privacy &amp; Security → Calendars → GeoNap.</p>
      <hr>
      <h3>Questions</h3>
      <p>If you have questions about privacy or data handling, you can reach the developer through the App Store support link on GeoNap's product page.</p>
      <p class="privacy-footer">&copy; 2026 Robert Bartis. All rights reserved.</p>
    `,
    supportEmail: "geonap@mba-labs.com",
    deck: Array.from({ length: 19 }, (_, i) => `/deck/geonap/slide-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  budget: {
    slug: "budget",
    icon: "💰",
    name: "Location-Based Budget",
    tagline:
      "Plan and track your spending automatically adjusted to the cost of living wherever you travel or live.",
    description:
      "Location-Based Budget reads your location context to recommend realistic budgets by category, so you're never blindsided by a high cost-of-living city. Set a baseline budget and let it adjust automatically as you move between cities, states, or countries.",
    features: [
      "Geo-aware spending categories",
      "Cost-of-living adjustments",
      "Real-time budget alerts",
      "Trip & location-based reports",
    ],
    privacy:
      "<p>Location-Based Budget uses your location only to adjust cost-of-living calculations. Financial data is encrypted at rest and in transit, and is never sold or shared with third-party advertisers. You can export or delete your data at any time from account settings.</p>",
    supportEmail: "locationbudget@mba-labs.com",
    githubUrl: "https://github.com/rmbartis/budget",
  },
};

export const STATS = [
  { num: "2", label: "Products" },
  { num: "50K+", label: "Locations mapped" },
  { num: "99.9%", label: "Uptime" },
  { num: "24/7", label: "Support" },
];
