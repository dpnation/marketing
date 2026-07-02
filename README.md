# Applause PMM Skills Pack

6 Claude shared skills purpose-built for product marketing at Applause. Each skill is pre-loaded with Applause's product portfolio, brand voice, testing taxonomy, and solution areas — so you never start from scratch.

**Landing page:** [dpnation.github.io/marketing/pmm-skills](https://dpnation.github.io/marketing/pmm-skills/)

---

## Skills included

| Skill | What it does | Primary output |
|---|---|---|
| `product-marketing-context` | Meta-skill. Captures product, ICP, personas, competitive landscape, and GTM motion in a shared context file all other skills reference. | `.agents/product-marketing-context.md` |
| `messaging-positioning` | Positioning statements, message houses, and value props using PMM framework. | Markdown positioning doc |
| `go-to-market` | Launch plans, campaign briefs, launch checklists, and channel strategy. | Markdown GTM plan |
| `competitive-intelligence` | Competitor research, battle card content, comparison pages, and RFP support. Pairs with Battlecard Builder for .docx output. | Markdown intel brief / .docx via Battlecard Builder |
| `customer-research` | Buyer personas, ICP definition, win/loss interview guides, and voice-of-customer analysis. | Markdown personas and research framework |
| `pricing-packaging` | Pricing models, packaging tiers, value metrics, and pricing objection responses. | Markdown pricing recommendation |

---

## How it works

Skills are **shared on Claude Enterprise** — installed once by an admin and available to the whole team automatically. No individual downloads required.

All skills:
- Read from `.agents/product-marketing-context.md` when it exists, avoiding repeated setup questions
- Apply Applause brand voice (confident, expert, active, no jargon) to all outputs
- Reference Applause's product portfolio, testing solutions, and industries automatically

**Recommended order:**
1. Run `product-marketing-context` first to create the shared context file
2. Use any other skill — it reads the context file and skips basic questions

---

## Installation (Enterprise admins)

1. Download the `.skill` files from the [`/pmm-skills`](./pmm-skills/) directory
2. In Claude Enterprise Admin Console → Skills → Install shared skill
3. Upload each `.skill` file — they'll be available to all users on the instance

---

## Related tools

- **[Battlecard Builder](https://dpnation.github.io/competitive-intel/ci-tools/battlecard/)** — generates formatted `.docx` battlecards using competitive intel; pairs directly with the `competitive-intelligence` skill
- **[Competitive Intel Site](https://dpnation.github.io/competitive-intel/)** — weekly automated scan of 10+ competitors; feeds the Battlecard Builder

---

## Repo structure

```
marketing/
├── README.md
└── pmm-skills/
    ├── index.html                          # Landing page
    ├── competitive-intelligence.skill
    ├── customer-research.skill
    ├── go-to-market.skill
    ├── messaging-positioning.skill
    ├── pricing-packaging.skill
    └── product-marketing-context.skill
```

---

## Maintained by

**Dana Prey** — Product Marketing, Applause  
dprey@applause.com
