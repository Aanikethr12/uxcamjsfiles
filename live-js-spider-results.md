# UXCam JS Spider Results
## Date: 2026-09-27
## Target: *.uxcam.com (Bugcrowd)

---

## FILES INVENTORY

| Subdomain | JS Files | Source Maps | Size | Notes |
|-----------|----------|-------------|------|-------|
| app.uxcam.com | 278 | 162 | 150MB | Next.js app, build ID: oxJsug1LoFQmmf8sYr8oX |
| tara.uxcam.com | 267 | 0 | 10MB | Vite build (pre-existing) |
| www.uxcam.com | 225 | 0 | 5.1MB | Gatsby static site (NEW) |
| websdk-recording.uxcam.com | 7 | 0 | 480KB | Web SDK recording library |
| wayback-js | 27 | 0 | 5.9MB | Historical JS from Wayback |
| dashboardapi.uxcam.com | 0 | 0 | - | Pure API (nginx), no JS |
| verify.uxcam.com | 0 | 0 | - | 404 via AWS ELB |
| developer.uxcam.com | 0 | 0 | 4KB | ReadMe.io hosted, inline config extracted |
| **TOTAL** | **804** | **162** | **~171MB** | |

---

## SOURCE MAPS (CRITICAL FINDING)

162 source maps publicly accessible from app.uxcam.com expose original unminified source code including:
- Complete React component hierarchy
- API service layer with all endpoints
- Auth flow (token refresh, CSRF, MFA)
- Redux state management
- Role/permission logic
- Internal comments and TODOs

Key source maps:
- `pages/_app-876a10dcec11b5a0.js.map` (9.4MB) - 1405 source files, full app entry
- `6999-b0bd746a2d725263.js.map` (1.97MB) - Large shared chunk
- `7384-6958790cadb0c8ae.js.map` (1.87MB) - Large shared chunk
- `9983-18916133c7bcb6e6.js.map` (2.27MB) - Large shared chunk
- `3985-1c4746dc9d85673a.js.map` (1.32MB) - Large shared chunk

Path: `~/source/uxcam/app.uxcam.com/sourcemaps/`

---

## SUBDOMAINS DISCOVERED

### In-scope production services:
- **app.uxcam.com** - Main dashboard (Next.js)
- **tara.uxcam.com** - AI assistant (Vite/React)
- **dashboardapi.uxcam.com** - Dashboard API (nginx)
- **pythonapi-prod.uxcam.com** - Python analytics API
- **auth.uxcam.com** - Auth service (token refresh, SSO)
- **admin.uxcam.com** - Admin panel (SSO redirect)
- **api.uxcam.com** - API gateway
- **das-api.uxcam.com** - Data Access Service API
- **data-management.uxcam.com** - Data management service
- **event-tracking.uxcam.com** - Event tracking
- **integrated-platforms.uxcam.com** - Platform integrations
- **integration.mcp.uxcam.com** - MCP endpoint (/mcp/http)
- **signup-app-details.uxcam.com** - Signup details API
- **websdk-proxy.uxcam.com** - CSS/URL proxy
- **websdk-recording.uxcam.com** - Web SDK (S3)
- **sdk.uxcam.com** - SDK distribution
- **assets.uxcam.com** - Static assets
- **static-build.uxcam.com** - CDN for app chunks
- **www.uxcam.com** - Marketing site (Gatsby)
- **developer.uxcam.com** - Docs (ReadMe.io)
- **help.uxcam.com** - Help center (Intercom)
- **info.uxcam.com** - HubSpot meetings
- **resources.uxcam.com** - Resources/e-books
- **status.uxcam.com** - Status page

### Staging/UAT/Internal:
- **tara-stg.uxcam.com** / **tara-uat.uxcam.com** - Tara staging/UAT
- **tara-bizops.uxcam.com** / **tara-cx.uxcam.com** / **tara-experience.uxcam.com** / **tara-research.uxcam.com** - Tara variants
- **tara-api.uxcam.com** - Tara backend API
- **event-tracking-staging.uxcam.com** / **event-tracking-uat.uxcam.com** - Staging event tracking
- **uxcam-dashboard-builder.uxcam.com** / **-staging** / **-stg** / **-uat** / **-sec** - Dashboard builder variants

---

## API ENDPOINTS (531+ from tara, 200+ from app)

### Auth
```
POST /login (email/password, MFA OTP support)
POST /google-login (Google OAuth)
POST /auth/logout
GET  /auth/status (returns authenticated, user, is_admin)
POST {AUTH_API_URL}/refresh-token (cross-origin, withCredentials)
GET  admin.uxcam.com/sso-redirect
POST /user/forgot-password (captchaToken)
GET/POST /user/forgot-password/{token}/confirm
POST /api/settings/profile/mfa/setup
POST /api/settings/profile/mfa/enable
POST /api/settings/profile/mfa/disable
```

### Internal/Admin (ADMIN-ONLY)
```
GET /api/internal/overview
GET /api/internal/orgs
GET /api/internal/orgs/{orgId}
GET /api/internal/users
GET /api/internal/ai-costs/summary
GET /api/internal/ai-costs/orgs
GET /api/internal/ai-costs/orgs/{orgId}/users
GET /api/internal/ai-costs/runs
GET /api/admin/{orgId}/users
```

### Apps API (~150 endpoints)
```
/api/apps/{appId}/csv-export
/api/apps/{appId}/sessions/export
/api/apps/{appId}/users/export
/api/apps/{appId}/sessions/{sessionId}/replay-export
/api/apps/{appId}/chat/command
/api/apps/{appId}/nl-filter
/api/apps/{appId}/tara/runs/active
/api/apps/{appId}/tara/runs/{runId}/stream
/api/apps/{appId}/debug/pipeline-loss
/api/apps/{appId}/debug/pipeline-summary
/api/apps/{appId}/debug/recording-loss
/api/apps/{appId}/debug/not-uploaded-sessions
/api/apps/{appId}/debug/upload-rate
/api/apps/{appId}/dashboards/{dashboardId}/access
/api/apps/{appId}/dashboards/{dashboardId}/clone
/api/apps/{appId}/knowledge/entries
/api/apps/{appId}/knowledge/entries/{entryId}
/api/apps/{appId}/integration/connections
/api/apps/{appId}/issues/{issueType}/{issueId}/triage
/api/apps/{appId}/screen-url-rules
/api/apps/{appId}/segments
/api/apps/{appId}/sessions/ai-coverage
/api/apps/{appId}/skills
/api/apps/{appId}/stability-analysis
/api/apps/{appId}/support/tickets
/api/apps/{appId}/tara-context-snapshots/{snapshotId}
```

### Settings/Org Management
```
/api/settings/{orgId}/team
/api/settings/{orgId}/team/{userId}
/api/settings/{orgId}/team/{userId}/transfer-ownership
/api/settings/{orgId}/team/delete
/api/settings/{orgId}/team/invite
/api/settings/{orgId}/toggle-ai
/api/settings/{orgId}/toggle-overage-recording
/api/settings/{orgId}/billing-info
/api/settings/{orgId}/subscription
/api/settings/{orgId}/subscription-console
/api/settings/{orgId}/plan-builder/quotes
/api/settings/{orgId}/manage-payments
/api/settings/{orgId}/payment-method
/api/settings/{orgId}/recording-setting
```

### Projects/Keys
```
/api/organizations/{orgId}/projects
/api/organizations/{orgId}/projects/{projectId}
/api/projects/{projectId}/environments/{envId}/keys
/api/projects/{projectId}/environments/{envId}/keys/{keyId}
/api/projects/{projectId}/environments/{envId}/keys/{keyId}/revoke
```

### Ticketing (Jira)
```
/api/ticketing/apps/{appId}/tickets
/api/ticketing/apps/{appId}/tickets/{ticketId}
/api/ticketing/orgs/{orgId}/connection
/api/ticketing/orgs/{orgId}/connection/install
/api/ticketing/orgs/{orgId}/connection/test
```

### Data Access API (public, X-Api-Key auth)
```
/api/data-access/v1/event
/api/data-access/v1/session
/api/data-access/v1/user
/api/data-access/v1/screen/analytics
```

### SSRF/Proxy Surface
```
websdk-proxy.uxcam.com/api/proxy?url={USER_INPUT}  -- CSS proxy, takes arbitrary URL
/api/ticketing/orgs/{orgId}/connection/test  -- Tests external Jira connection
```

### Signup API (signup-app-details.uxcam.com)
```
/api/apptopia?appName={name}
/api/create-company
/api/get-ip
/api/hssend
/api/hssend-form
/api/send-slack
/api/validate-email
```

### AI/Tara Endpoints
```
/tara/cache/warm
/tara/chat
/tara/retry
/reload-prompts (POST - admin/debug)
/default-response-instructions
/healthz
/api/apps/{appId}/chat/command
/api/apps/{appId}/nl-filter
/api/apps/{appId}/session-video-analyses
/api/apps/{appId}/ai-usage
/api/apps/{appId}/skills
/api/knowledge/{appId}/entries
/api/knowledge/{appId}/response-preferences
integration.mcp.uxcam.com/mcp/http
```

### Share/Export
```
/api/share/session/generate
/api/share/session/send
/api/share/sessions/{sessionId}
/api/chat/share/{shareId}/claim
/api/handoff/{handoffId}
```

### v2 API (pythonapi-prod.uxcam.com/v2)
```
sessions/list, sessions/stat_box_data, sessions/build_session_graph
ai/sessions/list, ai/sessions/stat_box_data
users/list, users/statistics, users/user_journey_*
funnels/list, funnels/create, funnels/delete
screens/sankey, screens/sunburst, screens/trino/*
events/build_event_graph
```

---

## GRAPHQL OPERATIONS (100+)

### Mutations:
AlertContextCreate/Delete/Subscribe/Unsubscribe/UpdateAlertMutation,
ChartUpdate/CacheMutation,
DashboardCreate/Delete/Duplicate/Rename/LayoutUpdate/UpdateWidgetMutation,
DeleteCohortModal/ExportCohortModalMutation,
DigestFormModalCreate/UpdateEmailDigestMutation,
FunnelBuilderCreate/UpdateMutation,
HeatmapBuilderCreate/UpdateMutation,
HeatmapSidebarItemDeleteMutation,
MemberItemChangeRole/UnassignMutation,
NewShareDashboardPopupChangeAccess/InviteMembers/UpdateVisibilityMutation,
RetentionContextCreate/Delete/UpdateReportMutation,
SaveCohortModal/ViewCohortModalUpdateMutation

### Queries:
AppContextQuery, AlertContextQuery, AlertLogQuery,
DashboardViewQuery, SharedDashboardViewQuery,
FunnelContextQuery, FunnelLoaderQuery,
HeatmapContextHeatmapsQuery, HeatmapDataContextDataQuery,
RetentionContextQuery, SegmentsContextQuery,
MembersSearchQuery, NewShareDashboardPopupQuery,
TemplateGalleryModalLoaderQuery, FetchChartDataQuery,
Various property/filter/grouping search queries

---

## AUTH ARCHITECTURE (from source maps)

### Token Flow:
1. Login via POST /login returns session cookie
2. Access token stored in cookie `token` (10-min default expiry)
3. CSRF token stored in cookie `CSRF-Token`
4. Token refresh: POST {AUTH_API_URL}/refresh-token (withCredentials: true)
5. `logged_in` cookie (30-day max-age) tracks login state
6. Token expiry stored in localStorage key `tokenExpiresAt`

### Auth Headers:
- `X-CSRF-Token: {CSRF-Token cookie}` - for dashboardapi requests
- `Authorization: Bearer {token cookie}` - for AUTH_API_URL, SUBSCRIPTION_URL, IDH_API_URL
- `X-Tara-Login-Type: "admin"|"customer"` - controls auth context
- `X-Api-Key` - for Data Access API

### Cookies of Interest:
- `token` - JWT access token
- `CSRF-Token` - CSRF protection
- `logged_in` - Login state (30d)
- `loggedInFromAdminDashboard` - Client-controlled, changes feature flags

### MFA:
- TOTP-based (Google Authenticator)
- MFA challenge returns 422 with mfa_required or otp field
- Endpoints: /api/settings/profile/mfa/{setup,enable,disable}

---

## ROLES & PERMISSIONS

### Roles (from high to low):
1. Admin (is_admin=true) - Full access, impersonation
2. DirectAdmin (isDirectAdmin) - Admin without impersonation
3. Owner - Org owner
4. Manager - Org manager
5. Member - Regular member
6. Viewer (isViewer) - Read-only
7. Guest (is_guest=true) - Limited access

### Impersonation System:
- Admin can impersonate customer accounts
- `impersonation.active` flag tracks state
- `X-Tara-Login-Type: "admin"` header
- Admin SSO via admin.uxcam.com/sso-redirect

### Permission Checks:
- isOrgOwnerOrManager
- canEditDashboards
- isViewer (degraded access)
- adminAccessMode

---

## HARDCODED CREDENTIALS & KEYS

| Key | Value | Type |
|-----|-------|------|
| Google OAuth Client ID | 772721487542-lg3rb57oka5ebjtpvlshtg7aqonjbh6b.apps.googleusercontent.com | OAuth |
| Google Maps API Key | AIzaSyDqUr7-CbNA9BkzJYjK3zqQrUWyHgXq3Kw | Maps API |
| Rollbar Access Token 1 | 51784cc471cf45649ad66ec5f0464031 | Error tracking |
| Rollbar Access Token 2 | f45fd3e7c7234f3b858188c12a40882e | Error tracking |
| ReadMe Project ID | 60e58adb29db5500665851cc | Docs platform |
| Amplitude API Key | 8b550cf334a130e3d6ea41a88b894d8 | Analytics |
| Contentful Space ID | vv1yxl437u7d | CMS |
| HubSpot Portal ID | 5081481 | Marketing |

---

## CUSTOM HEADERS

```
X-Tara-Login-Type       -- "customer" | "admin"
X-Tara-Nav-Status-Scenario -- Navigation status override
X-Api-Key               -- Data Access API auth
X-User-Type             -- User type
X-Dashboard             -- Dashboard context
X-CSRF-Token            -- CSRF protection
X-Rollbar-Access-Token  -- Error tracking
X-LaunchDarkly-*        -- Feature flag headers
```

---

## THIRD-PARTY INTEGRATIONS

| Service | Count | Notes |
|---------|-------|-------|
| Segment | 226 | Analytics/tracking |
| Slack | 80 | Webhook notifications |
| Jira | 62 | Issue tracking (auth.atlassian.com) |
| Rollbar | 30 | Error tracking |
| MS Teams | 20 | Webhook notifications |
| LaunchDarkly | -- | Feature flags |
| Drift | 8 | Chat widget |
| HubSpot | 3+ | Forms, meetings |
| Linear | 3 | Issue tracking |
| Amplitude | 2 | Analytics |
| Intercom | 1+ | Help center |
| Mixpanel | -- | Analytics |
| Planhat | -- | Customer success |
| Coralogix | -- | RUM/observability (9 regions + staging) |
| Google | -- | OAuth, Maps, Sheets |
| NeverBounce | -- | Email validation |
| Apptopia | -- | App store data |

---

## HIGH-VALUE ATTACK VECTORS

### 1. SSRF via websdk-proxy
```
websdk-proxy.uxcam.com/api/proxy?url={ATTACKER_URL}
```
CSS proxy endpoint, takes arbitrary URL. Test: file://, internal IPs, cloud metadata.

### 2. Admin Impersonation Cookie
```
Cookie: loggedInFromAdminDashboard=1
```
Client-controlled cookie that changes feature flag context in LaunchDarkly.

### 3. Source Map Exposure (162 maps)
Full original source code publicly accessible. Information disclosure finding.

### 4. Cross-Org IDOR Targets
All `{orgId}` and `{appId}` parameterized endpoints (200+).

### 5. Privilege Escalation
- transfer-ownership endpoint
- toggle-ai, toggle-overage-recording
- team/invite (role injection?)
- API key management

### 6. AI Prompt Injection
- /chat/command, /nl-filter, /tara/runs
- /knowledge/entries (knowledge base injection)
- /reload-prompts (admin debug)

### 7. MCP Endpoint
```
integration.mcp.uxcam.com/mcp/http
```
Model Context Protocol - test for unauthorized access.

### 8. Data Export Abuse
- csv-export, sessions/export, users/export
- replay-export (video recordings)
- share/session/generate (public link generation)

### 9. Debug Endpoints
- /debug/pipeline-loss, /debug/recording-loss
- /healthz, /reload-prompts
- /default-response-instructions

### 10. Google Maps API Key
```
AIzaSyDqUr7-CbNA9BkzJYjK3zqQrUWyHgXq3Kw
```
Test for unrestricted usage (billing abuse).

---

## IMPORT CHAIN DEPTH

- **app.uxcam.com**: 3 levels (manifest -> webpack runtime -> dynamic chunks)
- **tara.uxcam.com**: 2 levels (index -> lazy imports)
- **www.uxcam.com**: 2 levels (webpack runtime -> page chunks)
- **websdk-recording.uxcam.com**: 1 level (direct)

---

## BACKEND ARCHITECTURE (from env vars in source)

```
API_URL          = dashboardapi.uxcam.com        (Main API)
PYTHON_API_URL   = pythonapi-prod.uxcam.com      (Python analytics v1)
PYTHON_API_URL_V2= pythonapi-prod.uxcam.com/v2   (Python analytics v2)
AUTH_API_URL     = auth.uxcam.com                 (Auth service)
SUBSCRIPTION_URL = (billing/subscription service)
IDH_API_URL      = (In-product data hub)
REDIRECT_URL     = (Planhat integration)
FEATURE_FLAG_ID  = (LaunchDarkly client key)
UXCAM_WEBSDK_APP_KEY = (Web SDK app key)
```

---

## FILES SAVED

```
~/source/uxcam/
├── app.uxcam.com/           (278 JS + 162 maps)
│   ├── sourcemaps/          (27 manually downloaded maps, 22MB)
│   └── _next/static/        (136 maps in tree, 65MB)
├── tara.uxcam.com/          (267 JS, pre-existing)
├── www.uxcam.com/           (225 JS, NEW)
├── websdk-recording.uxcam.com/ (7 JS)
├── wayback-js/              (27 JS, historical)
├── developer.uxcam.com/     (inline_scripts.txt)
├── dashboardapi.uxcam.com/  (empty - no JS)
├── verify.uxcam.com/        (empty - no JS)
├── _manifest.json           (app.uxcam.com file inventory)
├── _endpoints.json          (1426 extracted paths)
└── live-js-spider-results.md (this file)
```

Extraction data:
```
/private/tmp/.../scratchpad/tara-extractions.txt    (531+ endpoints from tara)
/private/tmp/.../scratchpad/app-extractions.txt     (281 lines from app)
```
