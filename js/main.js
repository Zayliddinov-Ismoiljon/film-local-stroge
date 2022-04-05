const elFilmList= document.querySelector(".film-list");
const elBookmarkList= document.querySelector(".bookmark-list");

const localBookmark= JSON.parse(window.localStorage.getItem("list"));
const bookmark= localBookmark || [];
renderBookmark(bookmark, elBookmarkList)

function renderBookmark(arr, element){
    element.innerHTML="";

    arr.forEach(bookmark => {
        const newItem =document.createElement("li");
        const newBookmarkBtn= document.createElement("button")

        newItem.textContent=bookmark.title;
        newItem.setAttribute("class", "bookmark-list__item");
        newBookmarkBtn.textContent="Remove";
        newBookmarkBtn.type="button";
        newBookmarkBtn.dataset.filmId=bookmark.id;
        newBookmarkBtn.classList.add("delete-btn")

        newItem.appendChild(newBookmarkBtn);
        element.appendChild(newItem);
        element.setAttribute("class", "bookmark-list")
    });
}


elBookmarkList.addEventListener("click", evt=>{
    const isDeleteBtn=evt.target.matches(".delete-btn");
    if(isDeleteBtn){
        const btnId= evt.target.dataset.filmId;
        const findIndexBookmark= bookmark.findIndex(e=>e.id==btnId);
        bookmark.splice(findIndexBookmark, 1);

        renderBookmark(bookmark, elBookmarkList);
        window.localStorage.setItem("list", JSON.stringify(bookmark))
    }
})



for( let film of films){
    const newItem=document.createElement("li");
    const newImg= document.createElement("img");
    const newHeading=document.createElement("h2");
    const newText=document.createElement("p");
    const newBtn= document.createElement("button");
    
    
    newImg.setAttribute("src", film.poster);
    newImg.setAttribute("class", "film-list__img");
    newHeading.textContent= film.title;
    newHeading.setAttribute("class", "film-list__title");
    newText.textContent=film.overview;
    newText.setAttribute("class", "film-list__text");
    newText.textContent = film.overview.split(" ").slice(0,20).join(" ") + " ...";
    newBtn.textContent="Bookmark";
    newBtn.setAttribute("class", "list__bookmark-btn");
    newBtn.dataset.filmId=film.id;
    newItem.setAttribute("class", "film-list__item");

    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newBtn);
    elFilmList.appendChild(newItem);
};

 elFilmList.addEventListener("click", evt=>{
     if(evt.target.matches(".list__bookmark-btn")){
        const bookmarkBtnId=evt.target.dataset.filmId;
        const findFilms=films.find(e => e.id===bookmarkBtnId);
        if(!bookmark.includes(findFilms)){
            bookmark.push(findFilms);
            renderBookmark(bookmark, elBookmarkList);
            window.localStorage.setItem("list", JSON.stringify(bookmark))
        }
     };
 });

