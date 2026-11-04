TRINETRA F&O — Installable PWA v1.0.8 (FRESH START)
====================================================
CONTENTS: index.html, manifest.webmanifest, service-worker.js, icons/, .nojekyll
App includes MOTHER + S01–S06 Batch Scanner CSV + Watchlists + Trading Journal/Decision Log + Zerodha F&O charge estimation.

SET UP GITHUB PAGES (SEPARATE FROM TRINETRA LONG):
1) Create a NEW public GitHub repository (suggested trinetra-fo). Keep your existing Long repository untouched.
2) Unzip this package, open the new repository -> Add file -> Upload files.
3) Upload *contents* of this ZIP (not the ZIP as one file). Ensure index.html, manifest.webmanifest, service-worker.js are at repository root and icons/ is under root.
4) Commit to main. Settings -> Pages -> Build and deployment -> Deploy from a branch -> main / (root) -> Save.
5) Open the published GitHub Pages link in desktop Chrome/Edge. Use browser's Install App option/icon to install.
6) Install from the SAME URL on Laptop. Do NOT create a second repository/site for laptop.
7) Choose a SEPARATE Dropbox/TRINETRA_FO data folder in each computer. Wait for Dropbox to sync before editing on another device.

DATA SAFETY:
- You confirmed that the previous F&O versions contain no trade records: you may start fresh in this PWA.
- Site-local browser data is origin-specific; old file:// state does not automatically appear in GitHub PWA. Existing DATA/BACKUP from F&O can be restored if needed.
- On a device change: ensure saved status, Dropbox fully synced; reopen PWA and reload/check data before editing; never edit simultaneously on two computers.
- Make periodic Full Backup to folder BACKUP and/or export JSON + Charts. Do not upload personal DATA/MEDIA/BACKUP to GitHub.
- Keep the SAME published URL, manifest id and state storage keys in future v1.0.9, v1.1 updates.

CHARGE ENGINE:
- Default AUTO = estimated Zerodha NSE F&O charges, using current April 2026 STT and NSE fee rates checked 4 Nov 2026.
- Both BUY/SELL are included. Brokerage charged once per executed ORDER ID; without Order ID, each fill assumed a separate order.
- Itemized brokerage, STT, transaction/exchange, SEBI, stamp, GST in Trading Log & Overview.
- Trade calculations and Overall P&L deduct auto-estimated charges.
- For trades with nonstandard physical settlement, expiry exercise, Zerodha/RMS charges, margin penalty, cash shortfall higher brokerage, or rounding differences: choose ACTUAL in Edit Execution and enter the contract-note charge amount. This replaces estimate (no double count).
- Zerodha CSV that contains positive actual charges per execution is treated as ACTUAL by default.
- AUTO charge engine is an estimate, NOT a Zerodha API feed, official contract note, or 100% guaranteed exact debit.

Scanner runs are imported CSVs; app does not fetch Chartink market prices automatically. Stock Futures scanner is only for stock underlyings (not index FUT/option scanner).
