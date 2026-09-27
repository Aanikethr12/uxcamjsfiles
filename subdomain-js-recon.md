# UXCam Subdomain & JS Recon — 2026-09-27

## Data Sources
- Reconflow scan: `~/reconflow/runs/uxcam-com-20260924-151149/` (88 subdomains, 40 probed live)
- crt.sh certificate transparency (56 entries including wildcards)
- Wayback Machine CDX
- JS source extraction from app.uxcam.com (Next.js) and tara.uxcam.com (Vite/Rolldown)

---

## ALL SUBDOMAINS (95 total)

### Live & Responding (40 hosts from reconflow + new discoveries)

| Subdomain | Status | Tech Stack | Notes |
|---|---|---|---|
| app.uxcam.com | 302 | Next.js, Nginx, HSTS | Main dashboard (build ID: oxJsug1LoFQmmf8sYr8oX) |
| auth.uxcam.com | 200 | Python, gunicorn | Auth service |
| api.uxcam.com | 404 | Python, gunicorn, HSTS | API gateway (needs auth) |
| das-api.uxcam.com | 404 | Python, gunicorn | Data API |
| dashboardapi.uxcam.com | 404 | Nginx, HSTS | Main dashboard API |
| newapi.uxcam.com | 404 | Python, gunicorn | New API |
| pythonapi-prod.uxcam.com | 404 | Nginx, HSTS | Python API v2 |
| monitoring.uxcam.com | 404 | Python, Uvicorn | FastAPI monitoring |
| visualization.uxcam.com | 404 | Nginx, HSTS | Visualization service |
| uxcam-dashboard-builder.uxcam.com | 404 | Python, Uvicorn | FastAPI dashboard builder |
| developer.uxcam.com | 200 | Cloudflare, ReadMe, Render | SDK documentation |
| tara.uxcam.com | 200 | Vite/Rolldown (112 JS modules on assets.uxcam.com) | AI assistant |
| uxcam.com | 200 | Gatsby 5.16.1, React, Contentful, Webpack | Marketing site |
| status.uxcam.com | 200 | Atlassian Statuspage, jQuery 3.5.1 | Status page |
| trust.uxcam.com | 200 | CloudFront, HSTS | Trust center |
| signup-app-details.uxcam.com | 200 | — | Returns IP/region info |
| sdk.uxcam.com | 200 | CloudFront, S3, HSTS | SDK distribution |
| websdk.uxcam.com | 200 | — | Web SDK (returns "OK") |
| websdk-eu.uxcam.com | 200 | — | EU Web SDK |
| netbird-vpn.uxcam.com | 200 | Nginx, HSTS | NetBird VPN Dashboard |
| assets.uxcam.com | 403 | CloudFront, S3 | Tara JS assets |
| static-build.uxcam.com | 403 | CloudFront, S3 | Production builds |
| websdk-recording.uxcam.com | 403 | CloudFront, S3 | Recording storage |
| integrated-platforms.uxcam.com | 403 | AWS ELB | Platform integrations |
| help.uxcam.com | 302 | CloudFront, Nginx | Redirects to Intercom |
| dashboard.uxcam.com | 301 | AWS ELB | Redirects to app.uxcam.com |
| bug-bounty.uxcam.com | 301 | AWS ELB | Bug bounty redirect |
| www.uxcam.com | 301 | AWS ELB | Redirects to uxcam.com |
| info.uxcam.com | 301 | Cloudflare | HubSpot meetings |
| resources.uxcam.com | 301 | Cloudflare | Resources redirect |
| one.plusuxcam.com | 301 | — | Plus redirect |
| one.connectuxcam.com | 301 | — | Connect redirect |
| sso.uxcam.com | 404 | AWS ELB | SSO (ELB, inactive?) |
| websdk-ae.uxcam.com | 502 | AWS ELB | AE Web SDK (down) |
| verify*.uxcam.com | 404 | AWS ELB | Session verification (multiple regions) |

### NEW SUBDOMAINS DISCOVERED (not in reconflow)

| Subdomain | Status | Source | Notes |
|---|---|---|---|
| **data-management.uxcam.com** | **405/200** | JS extraction | **DRF API, gunicorn, pytoken auth, GDPR** |
| **integration.mcp.uxcam.com** | **405** | JS extraction | **LIVE MCP server (Uvicorn v1.10.1)** |
| **tara-api.uxcam.com** | 404 | JS extraction | AWS ELB (34.203.158.98) |
| admin.uxcam.com | NXDOMAIN | JS reference | Referenced in tara JS |
| tara-bizops.uxcam.com | NXDOMAIN | JS config | Tara persona variant |
| tara-cx.uxcam.com | NXDOMAIN | JS config | Tara persona variant |
| tara-experience.uxcam.com | NXDOMAIN | JS config | Tara persona variant |
| tara-research.uxcam.com | NXDOMAIN | JS config | Tara persona variant |
| tara-stg.uxcam.com | NXDOMAIN | JS config | Tara staging |
| tara-uat.uxcam.com | NXDOMAIN | JS config | Tara UAT |
| www.info.uxcam.com | — | crt.sh | Certificate issued |
| www.web.uxcam.com | — | crt.sh | Certificate issued |

### Dead Subdomains (NXDOMAIN — no takeover candidates)
admin-stg, api.admin-stg, api.admin, apiandroid, apidev, appuat, data, newdash, newrestapi, s3, klipfolio, frontenddev, dashdev, web, enroll, search, referrals, alphadashboard, alphawebsite, betadashboard, web-dev, betaapiios, webdemo, newdashboard, event-tracking, email, app-sec, gitlab, grafana, kibana, bitwarden, defguard, lp, blog

**No dangling CNAMEs found — all dead subs are NXDOMAIN.**

---

## JS FILES PER SUBDOMAIN

### app.uxcam.com (Next.js — 31+ chunks)
Build ID: `oxJsug1LoFQmmf8sYr8oX`
Routes: `/dashboard`, `/integration`, `/public`, `/setup`, `/sso`

Key chunks:
```
_next/static/chunks/polyfills-42372ed130431b0a.js
_next/static/chunks/webpack-a48d63d6caab0998.js
_next/static/chunks/framework-d283e2cbd12fc47e.js
_next/static/chunks/main-7df0fa2a7c222120.js
_next/static/chunks/pages/_app-876a10dcec11b5a0.js
_next/static/chunks/pages/dashboard-0e395fd16ac85583.js
_next/static/chunks/pages/integration-53db46257e6b16d5.js
_next/static/chunks/pages/setup-85096bc06c5d1b98.js
_next/static/chunks/pages/sso-0184374253a239c6.js
_next/static/chunks/pages/public-b36328b3d127ad68.js
+ 21 shared vendor/feature chunks
```

### tara.uxcam.com (Vite/Rolldown — 112 JS modules on assets.uxcam.com)
Notable modules:
```
# Security-relevant
ImpersonationContext-BG2GELh-.js     # Admin impersonation feature
authService-og7dJAr8.js              # Auth service
jwt-DcEDD0aq.js                      # JWT handling
useIsOrgOwnerOrManager-DOKqVLmq.js   # Role checks
useIsViewerOnlyCaller-COEP5ASr.js    # Viewer role check
useCanEditApp-DQhAHlXI.js            # Edit permission check
useDashboardRole-DEdWEzl5.js         # Dashboard role
usePlanBuilderAccess-C4OvCS1p.js     # Plan access
useSubscriptionConsoleAccess-DDrWg2wV.js
useSubscriptionGate-BclSWIGQ.js

# API modules
appsApi-C20a8ISo.js
dashboardsApi-B5yCB6th.js
sessionDetailApi-D8nMRqQL.js
screensApi-BuY1FY0t.js
analyticsReportsApi-R4D5W8Ij.js
subscriptionConsoleApi-wUoy4kdy.js
chatShareApi-GYaHl0Y0.js
aiUsageApi-ChaefBqD.js
filterSchemaApi-DUcYSUFQ.js
filterValuesApi-BkbXg8QZ.js
internalAnalyticsApi-Durohxxi.js
projectsApi-erVZl67d.js
recordingHealthApi-D07JTYvO.js
screenDisplayNamesApi-EMNFrOI9.js
supportTicketsApi-Ck12z2T4.js
ticketingApi-KgUEfcZP.js
fetchClient-BF44M5G_.js              # HTTP client
appAdminDisable-BUiTNOFg.js          # Admin disable
```

### uxcam.com (Gatsby 5.16.1)
```
app-2a932ca2a12f4cffb4c5.js
framework-e7287de86a91810a663e.js
webpack-runtime-71123fd5af915f5cc363.js
```

### developer.uxcam.com (ReadMe hosted)
All JS from cdn.readme.io (third-party hosted docs platform)

### static-build.uxcam.com/production/_next/
A separate Next.js build (possibly tara's server-side build):
```
static/chunks/13b76428-f0e755fc7704a765.js
static/chunks/8460-08bfa5632fdff95a.js
static/chunks/app/not-found-d0042a2d52c19f6c.js
```

---

## API ENDPOINTS DISCOVERED

### From app.uxcam.com JS (dashboardapi.uxcam.com backend)

**Auth & User:**
- `/auth/check-email`, `/auth/login`, `/auth/signup`
- `/google-login`, `/google-sign-in`
- `/user/forgot-password`, `/user/change-password`
- `/user/profile`, `/user/profile/update-image`, `/user/profile/update-name`
- `/user/signup/quick`
- `/refresh-token`
- `/profile/enable-mfa`, `/profile/mfa-feature-enabled`
- `/sso`, `/sso/detail`
- `/app/csrf`, `/organization/csrf`, `/profile/csrf`

**Sessions & Recordings:**
- `/sessions/list/1`, `/sessions/get-details`, `/sessions/get-event-details`
- `/sessions/get-gesture-details`, `/sessions/get-bug-details`
- `/sessions/get-all-screens`, `/sessions/get-app-log`
- `/sessions/shortify`, `/sessions/find-nearest-session`
- `/session-filter/create`, `/session-filter/search-attribute`
- `/recording-setting`, `/recording-status`
- `/video-recording/create`, `/video-recording/toggle-video-recording`
- `/share/share-session`, `/share/copy-share-session`

**Analytics & Screens:**
- `/events/analytics`, `/events/list`, `/events/event_count`
- `/events/bulk/`, `/events/diagnostic/`
- `/screen/display-screens-list`, `/screen/sessions`
- `/screen/update-screens-name`
- `/screens/heatmap`, `/screens/heatmap/area-tooltip`, `/screens/heatmap/images`
- `/screens/trino/heatmap`, `/screens/trino/screen_list`
- `/screenburst`, `/screenflow`
- `/funnels`, `/funnels/create`
- `/retention/cohort/create`
- `/heatmaps/list/1/`
- `/csv_export/page_export`

**AI (Tara):**
- `/ai/sessions/list`, `/ai/sessions/stat_box_data`
- `/ai/sessions/analyze/list/all`, `/ai/sessions/analyze/list/recent`
- `/ai/sessions/batch/analyze`, `/ai/sessions/selected/analyze`
- `/ai/sessions/user_sessions`, `/ai/sessions/ai_insights`
- `/aisessions/analytics`, `/aisessions/list/1`
- `/api/aichat/stream?`
- `/tara-ai`
- `/nova/prompt`
- `/sage/session-sage`, `/sage/session-batch-notify`

**Organization & Team:**
- `/organization/list`, `/organization/store-usage-stat`
- `/team/members`, `/team/invite`, `/team/resend-invite`
- `/team/delete`, `/team/update`
- `/team/developer-invite`, `/team/insufficient-privilege-alert`
- `/team/session-usage-percentage`, `/team/web-session-usage-percentage`
- `/transfer-ownership`
- `/invite`
- `/manage-app-access`, `/manage-user-access`

**Billing & Subscription:**
- `/billing-info/`, `/billing-info/address/`, `/billing-info/recipients/`
- `/subscription/available-plans`, `/subscription/update-your-plan`
- `/subscription/change-payment-method`, `/subscription/client-token`
- `/subscription/query-plan-change`, `/subscription/query-premium-plan-change`
- `/subscription/receipt`, `/subscription/retry-payment`
- `/subscription/list-app-team`, `/subscription/request-quote`
- `/current-subscription`, `/active-subscription`
- `/cancel-subscription`, `/update-subscription`
- `/toggle-overage-recording`
- `/payment-failed-banner`, `/trial-banner-details`
- `/receipt`, `/unpaid-invoice-payment-link`

**Issues & Crashes:**
- `/issues/crashes`, `/issues/exceptions`, `/issues/freezes`
- `/issue_notification`
- `/crashes/crash_logs`, `/crashes/public/crash_logs`
- `/uifreezes/ui_freeze_logs`, `/uifreezes/public/ui_freeze_logs`
- `/crash-file-download`

**Dashboard & Custom:**
- `/customDashboard/`, `/dashboard/has-collaborators`
- `/custom-list`
- `/label/session/add_custom_label`, `/label/session/update_custom_label`
- `/label/user/add_custom_label`, `/label/user/update_custom_label`
- `/notes/session/create`, `/notes/session/edit`, `/notes/session/list`
- `/data-hub/send-event/`, `/data-hub/send-event-public/`
- `/onboardForm`, `/set-checklist`

**Settings & Config:**
- `/recording-setting`, `/recording-status`
- `/generate-api-key`
- `/get-apps`, `/get-users`, `/get-configuration`
- `/save-configuration`, `/set-block-sensitive-data`
- `/app/list`, `/app/dropdown`
- `/region/list`
- `/last-app-selected`

**Data Management:**
- `/deletion_requests`
- `/event-limit-status`
- `/filter_description`

### From tara.uxcam.com JS (NEW Tara v2 API)

**Internal/Admin Endpoints (HIGH PRIORITY):**
- `/api/internal/overview?days=`
- `/api/internal/orgs?days=&limit=&offset=&sort_by=&sort_dir=`
- `/api/internal/orgs/{orgId}?`
- `/api/internal/users?emails=`
- `/api/internal/ai-costs/summary?days=&org_id=`
- `/api/internal/ai-costs/orgs?days=`
- `/api/internal/ai-costs/orgs/{orgId}/users?`
- `/api/internal/ai-costs/runs?days=&org_id=&user_id=&limit=&offset=`
- `/api/admin/{orgId}/users`
- `/admin-debug`

**Apps API:**
- `/api/apps/{appId}/ai-usage`
- `/api/apps/{appId}/analytics/reports`
- `/api/apps/{appId}/analytics/reports/{reportId}`
- `/api/apps/{appId}/analytics/reports/pickable`
- `/api/apps/{appId}/analytics/reports/timezone-default`
- `/api/apps/{appId}/app-key`
- `/api/apps/{appId}/assignments`
- `/api/apps/{appId}/assignments/{id}/pause|resume|run`
- `/api/apps/{appId}/catalog?entity_type=screens&limit=500`
- `/api/apps/{appId}/catalog/version-activity`
- `/api/apps/{appId}/command-center/search`
- `/api/apps/{appId}/csv-export`
- `/api/apps/{appId}/dashboard-categories`
- `/api/apps/{appId}/dashboards`
- `/api/apps/{appId}/dashboards/{id}/blocks`
- `/api/apps/{appId}/dashboards/{id}/clone`
- `/api/apps/{appId}/dashboards/{id}/pin`
- `/api/apps/{appId}/dashboards/from-template`
- `/api/apps/{appId}/dashboards/from-funnel-report`
- `/api/apps/{appId}/events`
- `/api/apps/{appId}/events/{eventId}/journey`
- `/api/apps/{appId}/events/{eventId}/retention`
- `/api/apps/{appId}/events/{eventId}/screen-breakdown`
- `/api/apps/{appId}/events/analytics`
- `/api/apps/{appId}/events/types`
- `/api/apps/{appId}/filter-values`
- `/api/apps/{appId}/handoff-kits`
- `/api/apps/{appId}/home/weekly-app-digest`
- `/api/apps/{appId}/home/weekly-app-digest/enroll`
- `/api/apps/{appId}/home/weekly-app-digest/focus-items`
- `/api/apps/{appId}/integration/connections`
- `/api/apps/{appId}/issues`
- `/api/apps/{appId}/issues/{type}/{id}/triage`
- `/api/apps/{appId}/issues/overview`
- `/api/apps/{appId}/issues/releases`
- `/api/apps/{appId}/issues/trends`
- `/api/apps/{appId}/issues/triage-states`
- `/api/apps/{appId}/notes`
- `/api/apps/{appId}/pages`
- `/api/apps/{appId}/pages/{pageId}/heatmap/backdrops`
- `/api/apps/{appId}/pages/{pageId}/heatmap/elements`
- `/api/apps/{appId}/pages/{pageId}/overview`
- `/api/apps/{appId}/pages/{pageId}/replay-sessions`
- `/api/apps/{appId}/pages/{pageId}/scroll`
- `/api/apps/{appId}/pages/flow`
- `/api/apps/{appId}/recording-health`
- `/api/apps/{appId}/recording-health/trend`
- `/api/apps/{appId}/report-templates`
- `/api/apps/{appId}/reports`
- `/api/apps/{appId}/reports/{reportId}/read`
- `/api/apps/{appId}/reports/{reportId}/evidence/{evidenceId}/analytics-report`
- `/api/apps/{appId}/reports/unread-count`
- `/api/apps/{appId}/screen-display-names`
- `/api/apps/{appId}/screen-insights/{screenId}/conversion-options`
- `/api/apps/{appId}/screens`
- `/api/apps/{appId}/screens/{screenId}/flows`
- `/api/apps/{appId}/screens/{screenId}/goal`
- `/api/apps/{appId}/screens/{screenId}/heatmap`
- `/api/apps/{appId}/screens/{screenId}/heatmap/area-metrics`
- `/api/apps/{appId}/screens/{screenId}/heatmap/devices`
- `/api/apps/{appId}/screens/{screenId}/heatmap/gestures`
- `/api/apps/{appId}/screens/{screenId}/heatmap/screenshots`
- `/api/apps/{appId}/screens/{screenId}/heatmap/sessions`
- `/api/apps/{appId}/screens/{screenId}/overview-summary`
- `/api/apps/{appId}/screens/{screenId}/panel`
- `/api/apps/{appId}/screens/{screenId}/visits`
- `/api/apps/{appId}/sessions/{sessionId}`
- `/api/apps/{appId}/sessions/{sessionId}/replay-export`
- `/api/apps/{appId}/tara/runs`
- `/api/apps/{appId}/tara/runs/{runId}/cancel`
- `/api/apps/{appId}/tara/runs/{runId}/notification`
- `/api/apps/{appId}/tara/runs/{runId}/stream`
- `/api/apps/{appId}/tara/runs/active`
- `/api/apps/{appId}/users`
- `/api/apps/{appId}/users/{userId}`
- `/api/apps/{appId}/users/{userId}/segments`
- `/api/apps/{appId}/users/{userId}/sessions`
- `/api/apps/{appId}/users/activity-bins`
- `/api/apps/{appId}/users/count`
- `/api/apps/{appId}/users/detail-preferences`
- `/api/apps/{appId}/analysis-library`
- `/api/apps/{appId}/artifacts/pin`

**Organization & Projects:**
- `/api/organizations/{orgId}/projects`
- `/api/organizations/{orgId}/projects/{projectId}`
- `/api/organizations/{orgId}/projects/{projectId}/environments/{envId}/transfer`
- `/api/projects/{projectId}/environments`
- `/api/projects/{projectId}/environments/{envId}`
- `/api/projects/{projectId}/environments/{envId}/keys`
- `/api/projects/{projectId}/environments/{envId}/keys/{keyId}`
- `/api/projects/{projectId}/environments/{envId}/keys/{keyId}/revoke`

**Settings:**
- `/api/settings/{orgId}`
- `/api/settings/{orgId}/profile`
- `/api/settings/{orgId}/ai-apps`
- `/api/settings/{orgId}/ai-overview`
- `/api/settings/{orgId}/apps-directory`
- `/api/settings/{orgId}/billing-info`
- `/api/settings/{orgId}/billing-info/recipients`
- `/api/settings/{orgId}/invoices?page=`
- `/api/settings/{orgId}/invoices/{invoiceId}/detail`
- `/api/settings/{orgId}/manage-payments`
- `/api/settings/{orgId}/payment-method`
- `/api/settings/{orgId}/session-usage-thresholds`
- `/api/settings/{orgId}/subscription`
- `/api/settings/{orgId}/subscription-console`
- `/api/settings/{orgId}/team`
- `/api/settings/{orgId}/team/{userId}`
- `/api/settings/{orgId}/team/invite`
- `/api/settings/{orgId}/team/invite/resend`
- `/api/settings/{orgId}/team/delete`
- `/api/settings/{orgId}/team/{userId}/transfer-ownership`
- `/api/settings/{orgId}/toggle-overage-recording`
- `/api/settings/{orgId}/trial-banner`
- `/api/settings/{orgId}/update-org-image`
- `/api/settings/{orgId}/update-org-name`
- `/api/settings/{orgId}/{appId}/toggle-ai`
- `/api/settings/profile`
- `/api/settings/profile/name`
- `/api/settings/profile/email`
- `/api/settings/profile/password`
- `/api/settings/profile/picture`
- `/api/settings/profile/preferences`
- `/api/settings/profile/mfa/setup`
- `/api/settings/profile/mfa/enable`
- `/api/settings/profile/mfa/disable`

**Ticketing Integration:**
- `/api/ticketing/apps/{appId}/project-map`
- `/api/ticketing/apps/{appId}/projects`
- `/api/ticketing/apps/{appId}/projects/{projectId}/assignable-users`
- `/api/ticketing/apps/{appId}/projects/{projectId}/issue-types`
- `/api/ticketing/apps/{appId}/projects/{projectId}/issue-types/{typeId}/fields`
- `/api/ticketing/apps/{appId}/tickets`
- `/api/ticketing/apps/{appId}/tickets/{ticketId}`
- `/api/ticketing/apps/{appId}/tickets/link`
- `/api/ticketing/apps/{appId}/tickets/lookup`
- `/api/ticketing/apps/{appId}/tickets/recent?limit=`
- `/api/ticketing/apps/{appId}/tickets/search`
- `/api/ticketing/apps/{appId}/recording-health-ticket`
- `/api/ticketing/orgs/{orgId}/connection`
- `/api/ticketing/orgs/{orgId}/connection/install`
- `/api/ticketing/orgs/{orgId}/connection/policy`
- `/api/ticketing/orgs/{orgId}/connection/test`

**Chat & Sharing:**
- `/api/chat/share`
- `/api/chat/share/{shareId}/claim`
- `/api/share/session/generate`
- `/api/share/session/send`
- `/api/share/sessions/{sessionId}`

**Other:**
- `/api/filter-schema`
- `/api/handoff/{id}`
- `/api/dashboard/templates?include_cards=true`
- `/api/support/public-tickets`
- `/api/apps/{appId}/support/tickets`

---

## MCP SERVER (integration.mcp.uxcam.com)

**Server:** uxcam-integration-remote v1.10.1 (Uvicorn)
**Protocol:** MCP (JSON-RPC over HTTP with SSE)
**Auth:** NONE (unauthenticated access to all tools)
**Endpoint:** POST `https://integration.mcp.uxcam.com/mcp/http`
**Headers:** `Accept: application/json, text/event-stream`

**Tools:**
1. `uxcam_list_resources` — List all 107 documentation URIs
2. `uxcam_read_resource` — Read any doc/snippet by URI
3. `uxcam_search_resources` — Search across resources

**Prompts:**
1. `integration_setup` — Phase 1 (takes app_key parameter)
2. `screen_tagging` — Phase 2
3. `mask_sensitive_data` — Phase 3
4. `event_tracking` — Phase 4
5. `user_properties` — Phase 5

**Resources:** 107 docs + code snippets (Android, iOS, Flutter, React Native, Web)

---

## data-management.uxcam.com (NEW)

**Server:** gunicorn (Django REST Framework)
**CORS:** `access-control-allow-origin: https://uxcam.com` (with credentials)
**Auth Header:** `pytoken` (custom token)
**Allowed Methods:** DELETE, GET, OPTIONS, PATCH, POST, PUT
**Allowed Headers:** Content-Type, Authorization, pytoken, Strict-Transport-Security, content-length
**Root Response:** `Hello World!!` (DRF default)
**IP:** 34.233.202.240

Purpose: GDPR/privacy data management API. All subpaths return 404 — likely route-based (e.g., /deletion_requests/{token}).

---

## KEY API BACKENDS (Summary)

| Backend | Tech | Purpose |
|---|---|---|
| dashboardapi.uxcam.com | Nginx/Node? | Main dashboard API (v1 legacy) |
| pythonapi-prod.uxcam.com | Nginx/gunicorn | Python API with /v2 |
| auth.uxcam.com | gunicorn | Authentication service |
| api.uxcam.com | gunicorn | General API gateway |
| das-api.uxcam.com | gunicorn | Data analysis API |
| newapi.uxcam.com | gunicorn | Newer API version |
| monitoring.uxcam.com | Uvicorn/FastAPI | Internal monitoring |
| uxcam-dashboard-builder.uxcam.com | Uvicorn/FastAPI | Dashboard builder |
| visualization.uxcam.com | Nginx | Visualization service |
| data-management.uxcam.com | gunicorn/DRF | GDPR data management |
| integration.mcp.uxcam.com | Uvicorn | MCP integration server |
| tara-api.uxcam.com | AWS ELB | Tara AI backend |
| signup-app-details.uxcam.com | — | IP/region lookup |

---

## HIGH-VALUE ATTACK VECTORS

### 1. Internal API Endpoints (CRITICAL)
The tara JS reveals `/api/internal/*` endpoints:
- `/api/internal/overview` — Cross-tenant overview
- `/api/internal/orgs` — List ALL organizations
- `/api/internal/orgs/{orgId}` — Org details
- `/api/internal/users?emails=` — User lookup by email
- `/api/internal/ai-costs/*` — AI cost data
- `/api/admin/{orgId}/users` — Admin user listing
- `/admin-debug` — Debug endpoint

**Test:** Can these be accessed with a regular user auth token?

### 2. ImpersonationContext
Tara app has `ImpersonationContext-BG2GELh-.js` — admin impersonation feature.
**Test:** Can a regular user trigger impersonation?

### 3. Cross-Tenant IDOR on Tara v2 API
All `/api/apps/{appId}/*` and `/api/organizations/{orgId}/*` endpoints use path-based IDs.
**Test:** Swap appId/orgId between accounts.

### 4. API Key Retrieval
`/api/apps/{appId}/app-key` — Retrieves the app key.
`/api/projects/{projectId}/environments/{envId}/keys` — Environment keys.
**Test:** IDOR on key retrieval.

### 5. Data Export Without Auth
- `/data-hub/send-event-public/` — Public event endpoint
- `/crashes/public/crash_logs` — Public crash logs
- `/uifreezes/public/ui_freeze_logs` — Public UI freeze logs
**Test:** What data is accessible without auth?

### 6. Chat Share Claim
`/api/chat/share/{shareId}/claim` — Claim a shared chat.
**Test:** Brute-force shareId or IDOR.

### 7. data-management.uxcam.com
DRF API with full CRUD (DELETE, GET, OPTIONS, PATCH, POST, PUT) for GDPR data management.
**Test:** Probe for deletion_requests endpoint with various tokens/patterns.

### 8. MCP Server
Unauthenticated MCP server exposes docs. The `integration_setup` prompt accepts app_key.
**Test:** Can the MCP server be used to access non-doc resources?

---

## SUBDOMAIN TAKEOVER CANDIDATES

**None found.** All dead subdomains are NXDOMAIN (DNS records deleted, not dangling CNAMEs).

---

## ADDITIONAL URLS FROM JS

- `https://admin.uxcam.com/` — Admin panel (NXDOMAIN currently)
- `https://admin.uxcam.com/sso-redirect` — Admin SSO
- `https://auth.uxcam.com/refresh-token` — Token refresh
- `https://info.uxcam.com/meetings/meet-uxcam/consultation?embed=true&email=` — HubSpot meeting with email param
- `https://signup-app-details.uxcam.com/api/get-ip` — Returns `{"country":"India","region":"APAC","ip":"..."}`
- `https://cursor.com/en-US/install-mcp?name=$` — Cursor MCP install (with variable)
- `https://github.com/uxcam/uxcam-ios-sdk` — Public GitHub repo

---

## RESOURCE PORTS

- `resources.uxcam.com` — Extra ports: 2082, 2083, 2086, 2087, 8080, 8443, 8880
- `info.uxcam.com` — Extra ports: 2082, 2083, 2086, 2087, 8080, 8443, 8880
- `developer.uxcam.com` — Extra ports: 2082, 2083, 2086, 2087, 8080, 8443, 8880

(Cloudflare proxy ports — standard CF behavior)

---

## JS RECON FILES SAVED

- `/private/tmp/.../scratchpad/uxcam-js/` — 41 app.uxcam.com Next.js chunks
- `/private/tmp/.../scratchpad/uxcam-tara-js/` — 30 tara.uxcam.com Vite modules
- `/private/tmp/.../scratchpad/uxcam-main-js/` — uxcam.com Gatsby JS + page-data
