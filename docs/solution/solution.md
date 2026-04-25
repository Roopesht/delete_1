# Solution: The Trade Tribe

## Product Vision

The Trade Tribe solves the problem of retail traders struggling with inconsistent execution, confusion, and psychological barriers to independent trading. Today, individual traders face three core pain points: lack of structured guidance, reliance on tips/signals rather than critical thinking, and no continuous support until they achieve independence. The product creates a structured ecosystem where traders learn to think, decide, and act independently while managing risk effectively—moving from random trial-and-error to disciplined, confident execution.

---

## Why Now

An industry insider with 25+ years of institutional trading experience has built AlphaX and is now formalizing an existing community (Telegram-based) into a scalable, web-enabled platform. The trigger is founder availability combined with proven community demand—individuals are already engaging via Telegram. The web platform formalizes this into a funnel: acquire users online → nurture via WhatsApp → deepen engagement via Telegram → convert to paid programs.

---

## Core Value Proposition

The Trade Tribe teaches institutional-level trading concepts simplified for individual traders, not blind tips or signals. The differentiator is **continuous, hands-on mentorship until independence**—three months of guided support, mistake correction, and risk management coaching—paired with a real community (both digital and physical). This combines education + accountability + community, which competitors typically only offer separately.

---

## Success Definition

[MISSING: no measurable metrics found — architect must provide targets with numbers and timeframes. Examples: registered users by launch, conversion rate (free-to-paid), monthly active users in Telegram, completion rate for foundation course]

---

## Module List

**Public Site** (`public-site`)
- **What it does:** Attracts anonymous visitors, communicates value proposition, and captures registrations.
- **Why now:** Required for discovery and funnel entry; existing community is invisible to non-Telegram users.
- **Non-goals:**
  - Does not authenticate or restrict content
  - Does not handle payment or enrollment
  - Does not replace Telegram as the primary learning channel
  - Does not track micro-interactions or analytics beyond registration

**Registration & Onboarding** (`registration`)
- **What it does:** Captures user details (name, phone, email, aspiration), creates account, and routes to WhatsApp/Telegram.
- **Why now:** Required to convert anonymous visitors to managed contacts and funnel them into community.
- **Non-goals:**
  - Does not validate trading experience or prerequisites
  - Does not auto-enroll users in programs; only invites them to free foundation
  - Does not charge or handle payment
  - Does not send messages directly; only provides links/instructions

**Foundation Learning (Free)** (`foundation-course`)
- **What it does:** Web-based free course teaching equity trading fundamentals, risk management, and decision-making frameworks.
- **Why now:** Required to build credibility and filter for paid programs; reduces support load by pre-educating users.
- **Non-goals:**
  - Does not provide live trading signals or setups
  - Does not include advanced derivatives strategies
  - Does not guarantee trading profitability
  - Does not replace Telegram as the setups and community hub

**Premium Programs** (`premium-programs`)
- **What it does:** Details and enrollment links for TRC Training (3-hour, ₹6,000+) and Advanced F&O Trading (2 months, ₹6,000+).
- **Why now:** Required to surface revenue opportunities and direct self-qualified users to enrollment; existing users inquire via Telegram.
- **Non-goals:**
  - Does not host video content; links to external YouTube
  - Does not handle payment; directs to external enrollment forms
  - Does not replace WhatsApp/Telegram for program updates or support

**Admin Dashboard** (`admin-dashboard`)
- **What it does:** Provides user list, status tracking (New/Contacted/Converted TRC/F&O), and action triggers (WhatsApp/Telegram/Email links).
- **Why now:** Required to manage growing user base and track conversion funnel as community scales.
- **Non-goals:**
  - Does not auto-send messages; provides links to invoke manually
  - Does not provide advanced analytics or predictive models
  - Does not manage Telegram membership directly; provides invitation links only
