function Blog() {
    return (
        <div className="blog container ">
            <div className="blog-titles">
                <small>Our blog</small>
                <h2 className="blog-title">
                    Value proposition accelerator product <br /> management
                    venture
                </h2>
            </div>

            <div className="blog-cards">
                <div className="blog-card">
                    <img src="/blog-1.png" alt="" />
                    <p className="card-status">Category <small>November 22, 2021</small></p>
                    <p className="card-text">Pitch termsheet backing <br/> validation focus release.</p>
                </div>
                <div className="blog-card">
                    <img src="/blog-2.png" alt="" />
                    <p className="card-status">Category <small>November 22, 2021</small></p>
                    <p className="card-text">Seed round direct mailing non- <br/> disclosure agreement graphical <br/> user interface rockstar.</p>
                </div>
                <div className="blog-card">
                    <img src="/blog03.png" alt="" />
                    <p className="card-status">Category <small>November 22, 2021</small></p>
                    <p className="card-text">Beta prototype sales iPad gen-z <br/> marketing network effects value <br/> proposition</p>
                </div>
            </div>

            <button className="blog-btn">Load more</button>
        </div>
    );
}

export default Blog;
