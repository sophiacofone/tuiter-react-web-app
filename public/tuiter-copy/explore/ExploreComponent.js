import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-1">
            <div class="col-11 no-right-padding">
            <form class="form-inline">
            <div class="form-group">
            <input type="text" class="form-control rounded-pill" placeholder="&#x1F50E; Search Tuiter">
            </div>
            </form>
            </div>
            <div class="col-1">
            <a href="explore-settings.html"><i class="fa fa-cog fa-2x cog-color float-right"></i></a>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                  <a class="nav-link active" href="foryou.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div>
           <div class="card">
                <img src="../images/space.jpeg" class="card-img-top" alt="...">
                <div class="card-img-overlay d-flex align-items-end">
                    <h5 class="card-title text-black bold">SpaceX's Starship</h5>
                </div>
            </div>
            </div>
            <div class="mt-1">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
