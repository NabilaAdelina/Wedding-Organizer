import PortfolioCard from "./PortfolioCard"
import portfolio1 from "../../../assets/images/portfolio1.png"

const Portfolio = () => {
    return (
        <section className="px-[200px] h-full">
            <div className='py-[50px] bg-neutral1'>
                <p className='text-neutral4 font-semibold text-[20px] mb-5'>Our portfolios</p>
                <div className='grid grid-cols-2 gap-4'>
                    <PortfolioCard
                        name="Joy & Jordan"
                        url={portfolio1}
                    />
                    <PortfolioCard
                        name="Joy & Jordan"
                        url={portfolio1}
                    />
                    <PortfolioCard
                        name="Joy & Jordan"
                        url={portfolio1}
                    />
                    <PortfolioCard
                        name="Joy & Jordan"
                        url={portfolio1}
                    />
                </div>
            </div>
        </section>
    )
}

export default Portfolio
