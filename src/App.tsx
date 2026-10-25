import { useState } from 'react'

const MIN_INVESTMENT = 1000
const MAX_INVESTMENT = 100000
const ACCOUNT_NUMBER = '10269504220'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-8" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="7" y="7" width="9" height="9" rx="1.5" />
      <path d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4h-7A1.5 1.5 0 0 0 3 5.5v7A1.5 1.5 0 0 0 4.5 14H7" />
    </svg>
  )
}

const faqs = [
  {
    question: 'How much can I invest?',
    answer:
      'FutureFlow Wealth accepts investment amounts from R1,000 up to R100,000. Use the calculator above to check whether your intended amount is within this range.',
  },
  {
    question: 'Which payment method should I use?',
    answer:
      'You must select Immediate Payment when transferring funds. This helps ensure your payment reaches the provided Standard Bank account without the usual transfer delay.',
  },
  {
    question: 'What should I do after making payment?',
    answer:
      'Keep your proof of payment and contact FutureFlow Wealth on WhatsApp for the next steps and to share the required payment information securely.',
  },
  {
    question: 'Where can I get more information?',
    answer:
      'Message FutureFlow Wealth directly on WhatsApp at 063 260 7903 before investing if you need any clarification about the process or opportunity.',
  },
]

export default function App() {
  const [amount, setAmount] = useState('10000')
  const [copied, setCopied] = useState(false)
  const numericAmount = Number(amount)
  const isValid =
    amount !== '' &&
    Number.isFinite(numericAmount) &&
    numericAmount >= MIN_INVESTMENT &&
    numericAmount <= MAX_INVESTMENT

  const copyAccount = async () => {
    await navigator.clipboard.writeText(ACCOUNT_NUMBER)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const formatRand = (value: number) =>
    new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FutureFlow Wealth home">
          <span className="brand-mark" aria-hidden="true">
            FF
          </span>
          <span>FutureFlow <strong>Wealth</strong></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#calculator">Calculator</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small button-dark" href="https://wa.me/27632607903">
          Contact us <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow"><span /> A considered way forward</p>
          <h1>Put your money in motion.</h1>
          <p className="hero-lede">
            Explore investment opportunities with FutureFlow Wealth. A clear,
            straightforward process from your first question to your first payment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how-it-works">
              See how to invest <ArrowIcon />
            </a>
            <a className="text-link" href="https://wa.me/27632607903">
              Talk to us on WhatsApp
            </a>
          </div>
          <div className="range-strip" aria-label="Investment limits">
            <div>
              <span>Minimum investment</span>
              <strong>R1,000</strong>
            </div>
            <div className="range-line"><span /></div>
            <div>
              <span>Maximum investment</span>
              <strong>R100,000</strong>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="visual-card">
            <span>INVESTMENT RANGE</span>
            <strong>R1K—R100K</strong>
            <div className="growth-line">
              <i /><i /><i /><i /><i /><i />
            </div>
            <small>Choose an amount that suits you</small>
          </div>
        </div>
      </section>

      <section className="section intro" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Three clear steps to get started.</h2>
        </div>
        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <h3>Choose your amount</h3>
            <p>Select an amount between R1,000 and R100,000 that is appropriate for you.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Make your payment</h3>
            <p>Transfer funds to the Standard Bank account below using Immediate Payment.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Confirm with us</h3>
            <p>Keep your proof of payment and contact our team on WhatsApp for next steps.</p>
          </article>
        </div>
      </section>

      <section className="payment-section">
        <div className="payment-copy">
          <p className="eyebrow eyebrow-light">Payment details</p>
          <h2>Everything you need to make your investment.</h2>
          <p>
            Use the banking details shown here. Please check the account number carefully
            before confirming your transfer.
          </p>
          <div className="notice">
            <span><CheckIcon /></span>
            <div>
              <strong>Immediate Payment is required</strong>
              <p>Select “Immediate Payment” in your banking app when completing the transfer.</p>
            </div>
          </div>
        </div>
        <div className="bank-card">
          <div className="bank-card-header">
            <span>Banking details</span>
            <span className="secure-label">PAYMENT INFO</span>
          </div>
          <dl>
            <div>
              <dt>Bank</dt>
              <dd>Standard Bank</dd>
            </div>
            <div className="account-row">
              <dt>Account number</dt>
              <dd>{ACCOUNT_NUMBER}</dd>
              <button onClick={copyAccount} className="copy-button" aria-label="Copy account number">
                <CopyIcon /> {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div>
              <dt>Payment method</dt>
              <dd className="immediate">Immediate Payment</dd>
            </div>
          </dl>
          <p className="bank-note">Always verify the details above before authorising payment.</p>
        </div>
      </section>

      <section className="section calculator-section" id="calculator">
        <div className="calculator-copy">
          <p className="eyebrow">Investment calculator</p>
          <h2>Plan your investment amount.</h2>
          <p>
            Enter the amount you are considering. This tool only checks whether it falls
            within our accepted investment range and does not estimate returns.
          </p>
        </div>
        <div className="calculator">
          <label htmlFor="investment-amount">How much would you like to invest?</label>
          <div className={`amount-input ${amount && !isValid ? 'input-error' : ''}`}>
            <span>R</span>
            <input
              id="investment-amount"
              type="number"
              min={MIN_INVESTMENT}
              max={MAX_INVESTMENT}
              step="100"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              aria-describedby="amount-help"
            />
          </div>
          <input
            className="range-input"
            type="range"
            min={MIN_INVESTMENT}
            max={MAX_INVESTMENT}
            step="1000"
            value={isValid ? numericAmount : MIN_INVESTMENT}
            onChange={(event) => setAmount(event.target.value)}
            aria-label="Investment amount slider"
          />
          <div className="range-labels">
            <span>R1,000</span><span>R100,000</span>
          </div>
          <div className={`validation ${isValid ? 'valid' : ''}`} id="amount-help" aria-live="polite">
            <CheckIcon />
            <span>
              {isValid
                ? `${formatRand(numericAmount)} is within the accepted investment range.`
                : 'Enter an amount from R1,000 to R100,000.'}
            </span>
          </div>
          <a className={`button button-primary button-full ${!isValid ? 'disabled' : ''}`} href={isValid ? 'https://wa.me/27632607903' : '#calculator'} aria-disabled={!isValid}>
            Discuss this amount <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Common questions</p>
          <h2>Before you invest.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>


      <section className="contact-section">
        <p className="eyebrow">Ready to learn more?</p>
        <h2>Let’s talk about your next step.</h2>
        <p>Contact FutureFlow Wealth directly for more information about the investment process.</p>
        <a className="button button-dark" href="https://wa.me/27632607903">
          WhatsApp 063 260 7903 <ArrowIcon />
        </a>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">FF</span>
          <span>FutureFlow <strong>Wealth</strong></span>
        </a>
        <p>Investment information and payment guidance.</p>
        <p>© {new Date().getFullYear()} FutureFlow Wealth</p>
      </footer>
    </main>
  )
}
