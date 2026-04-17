# How We Figure Out Each Book's Writing Style

## The short answer

We don't read every book cover to cover. We look at what professional reviewers and thousands of readers have already said about how a book *feels* — its pace, mood, voice, and tone — and use that to build a nine-number "style fingerprint" for each book. You can tell a song is fast or slow without hearing every bar, and you can tell a book is dense or breezy without reading every page.

## What you're looking at in this demo

Forty-two hand-picked books across three genres (Science Fiction, Classics, Romance). Each title has been given a fingerprint by an AI model drawing on the same public sources a careful reader would consult:

- **Professional reviews** (New York Times, Guardian, Kirkus) where critics describe the prose and mood
- **Reader reviews on Goodreads and Amazon** that comment on pace, atmosphere, and voice
- **Tagging systems** like StoryGraph, where readers label books as "cozy," "dark," "slow-burn," etc.
- **Free preview excerpts** ("Look Inside" on Amazon and Google Books)
- **Author interviews and the author's own words** about their style

We do not use the full copyrighted text of any book. That's locked up for legal reasons, and we don't need it: reviewers and taggers have already described exactly what we care about. A critic who writes "the prose is dense and philosophical" or "the dialogue snaps and crackles" has already done the hard part. The AI model synthesises what those critics and taggers have already said.

Before the demo went out, five of the generated fingerprints were spot-checked against live Goodreads / StoryGraph / Kirkus reviews. All five matched — the model wasn't inventing adjectives, it was compressing them.

## The nine dimensions

Each book is scored 0–1 on:

humour, emotional depth, prose complexity, dialogue, pace, descriptiveness, introspection, lyricism, darkness.

Those nine numbers are the fingerprint.

## How two books get matched

Once each book has a nine-number fingerprint, matching is just arithmetic — no black box.

For every dimension, we compare the two books and score them 0–100 on that single axis. Identical on the axis is 100. A small gap (about one-tenth of the scale, say humour 0.75 vs 0.65) scores around 80. A medium gap (a quarter of the scale apart) scores 50. If two books are half the scale apart or more on a dimension, that axis flatly scores 0 — they don't match on that feel, full stop.

The overall number is the average of those nine per-axis scores. The per-axis hard zero is deliberate: it stops a book from looking like a decent match just because it lines up on seven axes and is wildly different on two.

On each card, the **green "Similar on"** chips label the axes where the two books are within about 0.15 of each other. The **tan "Differs on"** chips label the axes they're 0.25 apart or more. We deliberately don't surface a single overall score on the cards. The chips are the honest summary: the reader weighs the trade-off, rather than trusting a rolled-up verdict.

## Reader mode vs Builder mode

There's a toggle in the header. **Reader** is the default — clean cards, no working-out shown. **Builder** reveals the annotations pointing at how each piece got made: which sources fed the fingerprint, how Claude scored the axes, what the chips mean, and what the production version of each step would look like. Same demo, two levels of transparency.

## How this would work at scale

Forty-two books got us to a demo. Getting to a catalogue of hundreds of thousands of titles is a different problem, but a solvable one. The plan:

### 1. Grounded style vectors for the full catalogue

For each book, assemble a **grounding packet**:

- StoryGraph mood and pace tags
- The top ~20 Goodreads reviews, sampled across star ratings so praise and critique are both represented
- 2–3 free preview passages

An AI model outputs the 9-dimension vector plus a **per-axis confidence**. Same reasoning used for the 42 demo titles, run at batch scale. The per-axis confidence matters — a book with rich review data lands with high confidence on all axes, while a thinly-reviewed one flags itself instead of faking certainty.

### 2. Human-curated anchor books as the calibration backbone

Anchor books define what each axis *means* to a reader. 40–100 anchor books per genre, hand-reviewed by humans, become the reference points every generated vector is scored against. This is what keeps "humour 0.7" meaning the same thing across a 200K-title catalogue — without anchors, the scale drifts as the catalogue grows.

### 3. On-demand generation for the long tail

When someone searches for an obscure title we don't yet have, we generate its profile on the fly from available metadata and reviews, then cache it forever. A few cents per new title at 2026 API rates. Obscure books with thin review data carry wider confidence bars, so we never overstate certainty. The long tail builds itself as readers use the app.

### 4. Continuous audit and behavioural signal

A rolling 5% sample of generated vectors is re-checked against live Goodreads / StoryGraph / Kirkus signals. That means **agreement rate is a number we can cite**, not a vibe. Over time, reader co-occurrence — "people who loved Banks also loved Leckie" — becomes an additive signal that either reinforces or flags the vector-based match. The two signals keep each other honest.

### Compute budget, ballpark

At 2026 batch-API rates, standing up a 500K-title catalogue is roughly **$5–10K one-time**, with ongoing model spend in the low tens of thousands per year. Anchor curation is human time, not model spend, and is amortised across the catalogue.

## What this can't do (and we'll be honest about it)

- **Very obscure books with few reviews.** If a book has only three Goodreads reviews, we don't have enough signal. The fingerprint gets a wide confidence band, and the app shows that rather than hiding it.
- **Brand-new releases.** Readers need time to review. A book published last week has weak data.
- **Untranslated or non-English books.** Fewer English-language reviews means a thinner grounding packet.
- **Hyper-niche literary categories.** Specialist essays, tiny presses, and academic niches often don't have enough reader discussion to match confidently.
- **Different editions of the same book.** New cover, updated intro, new notes — we treat it as the same book. If the core prose is the same, the fingerprint is the same.

## Why this still works

Even with those limits, we're using something powerful: thousands of human opinions about how a book *feels*. You don't need to analyse every word to know whether a book is dark or light, fast or contemplative. Readers and critics already figured that out.

The fingerprints you're seeing aren't magic. They're a compression of what people have already said. And for the books most people actually read, the data is rich, reliable, and gets better with every new review.
