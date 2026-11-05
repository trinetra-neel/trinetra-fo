TRINETRA F&O PWA v1.0.12 — Scanner Run Tags (TRINETRA Long style)

NEW:
- SCAN INPUT has Weekly Run (Mid-Week / Week Closing) and Monthly Run (Mid-Month / Month Closing) dropdowns.
- Daily/Hourly scanner results get DAILY tag automatically.
- Mixed scanner CSV batches assign per-scanner run tags.
- Saved run history retains date + runTag; Mid vs Close can coexist on the same market date.
- MOTHER explains ACTIVE and shows current scanner run tags; individual scanner history shows run tags.
- Historical pre-v1.0.12 runs without tags display UNLABELED (no invented label).
- All v1.0.11 fixes remain, including Zerodha Tradebook-first import and SHORT scanner UI.

SAFE DEPLOY:
1. Take a complete backup outside Dropbox, close Desktop and Laptop apps before publishing.
2. Upload ONLY the 7 shell files from this ZIP to the existing public GitHub repo root.
3. Do NOT upload DATA, MEDIA, BACKUP, any trading JSON or real order/tradebook CSV.
4. After deployment verify v1.0.12 in installed PWA. Select the same existing Dropbox parent folder and RELOAD.
5. Test scanner import using a disposable DATA folder first. Verify market-date, run types, and Dropbox sync.

NOTE: This package does not change your running GitHub site or Dropbox data automatically.
