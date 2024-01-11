function Customers() {
    return(
        <div className="customers">
            <div className="container customers1-wrapper">
                <div className="customers-one-left">
                    <img src="/customeers-man.png" alt="" />
                    <img src="/customers-stats.png" alt="" className="customers-stats"/>
                </div>
                <div className="customers-one-right">
                    <h3 className="customers-one-title">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h3>
                    <ul className="customers-one-list">
                        <li><span className="check"><i className="fa-solid fa-check"></i></span> We connect our customers with the best.</li>
                        <li><span className="check"><i className="fa-solid fa-check"></i></span> Advisor success customer launch party.</li>
                        <li><span className="check"><i className="fa-solid fa-check"></i></span> Business-to-consumer long tail.</li>
                    </ul>
                    <button className="customers-btn">Start now</button>
                </div>
            </div>

            <div className="container customers2-wrapper">
            <div className="customers-two-left">
                    <h3 className="customers-two-title">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h3>
                    <ul className="customers-two-list">
                        <li className="first-item"><span><i class="fa-solid fa-feather"></i></span> We connect our customers with the best.</li>
                        <li className="customers-list-items"><span><i class="fa-regular fa-eye"></i></span> Advisor success customer launch party.</li>
                        <li className="customers-list-items"><span><i class="fa-regular fa-sun"></i></span> Business-to-consumer long tail.</li>
                    </ul>
                </div>

                <div className="customers-two-right">
                    <img src="/customers-girl.png" alt="" />
                    <img src="/customers-stats-2.png" alt="" className="customers-stats-2"/>
                </div>
            </div>
        </div>
    )
}

export default Customers;