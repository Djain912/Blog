import abt from "../assets/abt1.png"



export default function About() {
    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={abt}
      className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">JainTrades</h1>
      <p className="py-6">
      Welcome to JainTrades, a platform dedicated to simplifying the world of stocks, mutual funds, and investments. I’m Sumit Jain, an experienced Equity and Derivative Trader with a passion for blending technical analysis and fundamental insights—often called the Techno-Funda Approach—to make informed trading decisions.

As an AMFI registered professional and BSE/NSE certified trader, I strive to offer valuable and credible content. I have successfully cleared CMT Level 1, which further enhances my expertise in market trends and technical analysis.

At Jain Trades, you’ll find insights on market trends, stock analysis, investment strategies, and much more, all aimed at helping you navigate the financial markets with confidence.

      </p>
      <a href="https://darshanjainportfolio.netlify.app/" target="_blank" className="btn btn-primary">Visit my portfolio</a>
    </div>
  </div>
</div>
    )
}